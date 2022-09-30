function logger(name) {
    return (message) => console.log(`${name}: ${message}.`);
}

// This updates every ~30 minutes? need to get it live.
CUR_AUTH = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjU4NWI5MGI1OWM2YjM2ZDNjOTBkZjBlOTEwNDQ1M2U2MmY4ODdmNzciLCJ0eXAiOiJKV1QifQ.eyJwcm92aWRlcl9pZCI6ImFub255bW91cyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS92b2x0YS1ldmVudHMtMjk0NzE1IiwiYXVkIjoidm9sdGEtZXZlbnRzLTI5NDcxNSIsImF1dGhfdGltZSI6MTY2NDU2MjUwOSwidXNlcl9pZCI6IkhIWlZ4NDFDdWRlMk56MjAyZ3F1SEJiUldQSjMiLCJzdWIiOiJISFpWeDQxQ3VkZTJOejIwMmdxdUhCYlJXUEozIiwiaWF0IjoxNjY0NTYyNTA5LCJleHAiOjE2NjQ1NjYxMDksImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnt9LCJzaWduX2luX3Byb3ZpZGVyIjoiYW5vbnltb3VzIn19.FhNdBQzcHVVS_4namAyhymXBs8e5z1dqsT_B8MfPbOe_wo-sEdYVdTKBw274qY-EMvi9ylTPFq9DS9s8S-P9u1GO3w_mIM_8XL2ZUtB7nwj88HC-sMuR7FkTghUxV1WRXZQLF7jGiXoj-AQ-fhcEGBHxbYC1A7uBUcqcnFdkvCZhLvrd0ZZX8rqPuEkxf9sTljkLSmvwGo3mqRNOV5c_a0w2rBSgIQlYD7BCTZDeJxjIvpxyDLHB07WmTD_sVROf6R3OCFLKMFpnue2oCssoDHNXDiwl5dj-W8WGwQy5F0fWtT6B9_u7SyXCpZ-qncHLFL5wpzhQWQuTY_rKNrD9Iw';
// This updates 1 every 24 hours and can be retrieved live from WS.
CUR_USERID = 'zoxvx93Fzbd2rdKZHdgqf7Nn1tq2';
// This was created after uploading a file, contains CUR_USERID, probably will require uploading daily.
PHOTO_LOCATION = 'https://assets.vlts.pw/profileImages/zoxvx93Fzbd2rdKZHdgqf7Nn1tq2/8Jy.png';

// Default values:
INITIAL_X = 6.640265084629075;
INITIAL_Y = 2.1382288485504484;
INITIAL_R1 = -0.7303382794059083;
INITIAL_R3 = 0.6830856444359062;

// This is just for grid script.
OFFSET_STEP = -1.5;

// Remove an NPC from the space.
function clearnNpc(npc) {
    if (npc.peers != null) npc.peers.ws.close();
    if (npc.communication != null) npc.communication.ws.close();
}

class AryumWS {
    constructor(url, joinRequestId) {
        this.url = url;
        this.joinRequestId = joinRequestId;
        this.valid = true;

        this.r = 3;
        this.ws = new WebSocket(url);
        this.ws.onclose = () => {
            console.log(`closing: ${this.intervalIds}`);
            this.q.length = 0;
            this.intervalIds.forEach((i) => {
                cancelInterval(i);
            });
            this.valid = false;
        };

        this.q = [];
        this.intervalIds = [];

        this.send_('{"t":"d","d":{"r":1,"a":"s","b":{"c":{"sdk.js.8-10-0":1}}}}');
        this.send_(`{"t":"d","d":{"r":2,"a":"auth","b":{"cred":"${CUR_AUTH}"}}}`);

        this.intervalIds.push(setInterval(() => this.flush(), 1000));
    }

    sendRaw(message) {
        this.send_(message);
    }

    send(a, b) {
        this.send_(`{"t":"d","d":{"r":${this.r},"a":"${a}","b":${b}}}`);
        this.r++;
    }

    send_(message) {
        if (!this.valid) {
            console.log(`${this.joinRequestId}: send after close.`);
        }
            this.q.push(message)
        this.flush();
    }

    flush() {
        if (this.ws.readyState == 1) {
            while (this.q.length > 0) {
                const m = this.q.shift();
                this.ws.send(m);
            }
        }
    }
}

class AryumCommunication extends AryumWS {
    constructor(joinRequestId, displayName = '') {
        super('wss://s-usc1a-nss-2000.firebaseio.com/.ws?v=5&ns=arium-communication', joinRequestId);
        this.send('q', '{"p":"/userSessions","q":{"sp":"sl6wrg","ep":"sl6wrg","i":"spaceId"},"t":1,"h":""}');
        this.send('q', '{"p":"/userMetadata","q":{"sp":"sl6wrg","ep":"sl6wrg","i":"spaceId"},"t":2,"h":""}');
        this.send('p', `{"p":"/userMetadata/${joinRequestId}","d":{"userId":"${CUR_USERID}"}}`);
        this.send('n', `{"p":"/userSessions","q":{"sp":"sl6wrg","ep":"sl6wrg","i":"spaceId"},"t":1}`);
        this.send('q', `{"p":"/userSessions","q":{"sp":"sl6wrg","ep":"sl6wrg","i":"spaceId"},"t":3,"h":""}`);

        this.send('o', `{"p":"/userSessions/${joinRequestId}","d":{"active":false,"lastChanged":{".sv":"timestamp"},"spaceId":"sl6wrg","userId":"${CUR_USERID}"}}`);
        this.send('m', `{"p":"/userSessions/${joinRequestId}","d":{"active":true,"userId":"${CUR_USERID}","lastChanged":{".sv":"timestamp"}}}`);
        this.send('m', `{"p":"/userSessions/${joinRequestId}","d":{"spaceId":"sl6wrg","userId":"${CUR_USERID}","active":true,"lastChanged":{".sv":"timestamp"}}}`);
        this.send('m', `{"p":"/userMetadata/${joinRequestId}","d":{"spaceId":"sl6wrg"}}`);
        this.send('m', `{"p":"/userMetadata/${joinRequestId}","d":{"metadata":{}}}`);
        this.send('q', `{"p":"/userCommunication/${CUR_USERID}/${joinRequestId}/webrtcTransport","h":""}`);
        this.send('m', `{"p":"/userSessions/${joinRequestId}","d":{"active":true,"lastChanged":{".sv":"timestamp"}}}`);
        this.send('m', `{"p":"/userMetadata/${joinRequestId}","d":{"metadata":{"displayName": "${displayName}"}}}`);
        this.intervalIds.push(setInterval(() => {
            console.log("sending life signal on arium_communitcation");
            this.sendRaw(`{"t":"d","d":{"r":${this.r},"a":"m","b":{"p":"/userSessions/${joinRequestId}","d":{"active":true,"lastChanged":{".sv":"timestamp"}}}}}`);
            this.r++;
        }, 30000));
    }

    updateDisplayName(displayName) {
        this.send('m', `{"p":"/userMetadata/${this.joinRequestId}","d":{"metadata":{"displayName": "${displayName}"}}}`);
    }

    updatePhoto(displayName, path) {
        this.send('m', `{"p":"/userMetadata/${this.joinRequestId}","d":{"metadata":{"displayName": "${displayName}", "photo": "${path}"}}}`);
    }
}

class AriumPeers extends AryumWS {
    constructor(joinRequestId, x, y, r1 = INITIAL_R1, r3 = INITIAL_R3, z = 0) {
        super('wss://s-usc1a-nss-2048.firebaseio.com/.ws?v=5&ns=arium-peers', joinRequestId);
        this.sendRaw('{"t":"d","d":{"r":3,"a":"q","b":{"p":"/userPositions/sl6wrg","h":""}}}');
        this.sendRaw('{"t":"d","d":{"r":4,"a":"q","b":{"p":"/broadcasters","q":{"sp":"sl6wrg","ep":"sl6wrg","i":"spaceId"},"t":4,"h":""}}}');
        this.sendRaw('{"t":"d","d":{"r":5,"a":"q","b":{"p":"/userRotations/sl6wrg","h":""}}}');
        this.sendRaw(`{"t":"d","d":{"r":6,"a":"p","b":{"p":"/userDeviceOrientations/${joinRequestId}","d":{"orientation":0,"userId":"${CUR_USERID}"}}}}`);
        this.sendRaw(`{"t":"d","d":{"r":7,"a":"p","b":{"p":"/userPositions/sl6wrg/${joinRequestId}","d":{"position":{"0":${x},"1":${z},"2":${y}},"userId":"${CUR_USERID}"}}}}`);
        this.sendRaw(`{"t":"d","d":{"r":8,"a":"p","b":{"p":"/userRotations/sl6wrg/${joinRequestId}","d":{"quaternion":{"0":0,"1":${r1},"2":0,"3":${r3}},"userId":"${CUR_USERID}"}}}}`);
        this.r = 9;

        this.intervalId.push(setInterval(() => {
            this.sendRaw(0);
        }, 45 * 1000));
    }

    updatePosition(x, y, z = 0) {
        this.send("p", `{"p":"/userPositions/sl6wrg/${this.joinRequestId}","d":{"position":{"0":${x},"1":${z},"2":${y}},"userId":"${CUR_USERID}"}}`);
    }

    updateRotation(r1, r3) {
        this.send("p", `{"p":"/userRotations/sl6wrg/${this.joinRequestId}","d":{"quaternion":{"0":0,"1":${r1},"2":0,"3":${r3}},"userId":"${CUR_USERID}"}}`)
    }
}

class Npc {
    constructor(displayName = 'NFThieves', x, y, r1 = INITIAL_R1, r3 = INITIAL_R3, z = 0) {
        this.displayName = displayName;
        this.x = x;
        this.y = y;
        this.z = z;
        this.r1 = r1;
        this.r3 = r3;
        this.joinRequestId = '';
        this.communication = null;
        this.peers = null;
        fetch("https://us-central1-volta-events-294715.cloudfunctions.net/joinSpace", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "authorization": `Bearer ${CUR_AUTH}`,
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Chrome OS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site",
                "Referer": "https://arium.xyz/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": "{\"data\":{\"spaceId\":\"sl6wrg\"}}",
            "method": "POST"
        }).then(response => response.json().then(value => {
            this.joinRequestId = value.result.joinRequestId;
            console.log('constructed NPC');
            this.communication = new AryumCommunication(this.joinRequestId, this.displayName);
            this.peers = new AriumPeers(this.joinRequestId, x, y, r1, r3, z);
            console.log(this);
        }));
    }

    setDisplayName(displayName) {
        this.displayName = `${displayName}`;
        this.communication.updateDisplayName(this.displayName);
    }

    setPhoto(photoLocation) {
        if (this.communication === null) return;
        this.communication.updatePhoto(this.displayName, photoLocation);
    }
}

function grid() {
    npcs = [];
    for (let x_offset = 0; x_offset < 1; x_offset++) {
        for (let y_offset = 0; y_offset < 1; y_offset++) {
            const x = INITIAL_X + x_offset * OFFSET_STEP;
            const y = INITIAL_Y + y_offset * OFFSET_STEP;
            npcs.push(new Npc(`rick_${x_offset}_${y_offset}`, x, y));
        }
    }
}

function rotate() {
    rr1 = new Npc("r1", INITIAL_X - 4, INITIAL_Y - 4);

    setInterval(() => {
        rr1.incrementR1();
    }, 500);
}

function setPhotoWithDelay(npcs, photoLocation) {
    setTimeout(() => {
        npcs.forEach(npc => {
            npc.setPhoto(photoLocation);
        });
    }, delay);
}

function tama() {
    six_words = "THIS IS|NOT AN|EXHIBITION,|IT'S A|CRYPTO|COMMERCIAL".split('|');
    npcs = [];
    npcs.push(new Npc(six_words[0 % six_words.length], -14.02, -4.10, -0.0308, 0.9995));
    npcs.push(new Npc(six_words[1 % six_words.length], -12.178, -4.39, -0.0308, 0.9995));
    npcs.push(new Npc(six_words[2 % six_words.length], -10.336, -4.68, -0.0308, 0.9995));
    npcs.push(new Npc(six_words[3 % six_words.length], -8.494, -4.97, -0.0308, 0.9995));
    npcs.push(new Npc(six_words[4 % six_words.length], -6.652, -5.26, -0.0308, 0.9995));
    npcs.push(new Npc(six_words[5 % six_words.length], -4.81, -5.55, -0.0308, 0.9995));

    setPhotoWithDelay(npcs, 12 * 1000);
}

function specificWorks() {
    npcs = [];
    npcs.push(new Npc("Nope", -24.3725, -2.067, 0.74114, 0.67133, 0.35)); // monalize
    npcs.push(new Npc("Scam", -24.3158289, -2.64733181028, 0.71720398, 0.69686328, 0.35)); // cyberpunk
    npcs.push(new Npc("Shit", -24.185439, -20.12608013, 0.6887632, 0.7249863, 0.35)); // devil

    setPhotoWithDelay(npcs, 11 * 1000);
}

function realMain() {
    tama();
    specificWorks();
}

realMain();