function logger(name) {
    return (message) => console.log(`${name}: ${message}.`);
}

// This updates every ~30 minutes? need to get it live.
CUR_AUTH = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjU4NWI5MGI1OWM2YjM2ZDNjOTBkZjBlOTEwNDQ1M2U2MmY4ODdmNzciLCJ0eXAiOiJKV1QifQ.eyJwcm92aWRlcl9pZCI6ImFub255bW91cyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS92b2x0YS1ldmVudHMtMjk0NzE1IiwiYXVkIjoidm9sdGEtZXZlbnRzLTI5NDcxNSIsImF1dGhfdGltZSI6MTY2NDU2MjUwOSwidXNlcl9pZCI6IkhIWlZ4NDFDdWRlMk56MjAyZ3F1SEJiUldQSjMiLCJzdWIiOiJISFpWeDQxQ3VkZTJOejIwMmdxdUhCYlJXUEozIiwiaWF0IjoxNjY0NjEzMTY4LCJleHAiOjE2NjQ2MTY3NjgsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnt9LCJzaWduX2luX3Byb3ZpZGVyIjoiYW5vbnltb3VzIn19.DuCpgqQpKhGSbwN9NyV-grKP7JHiGJ6wI5gvzljBiU5eodUUPOaeJD1Z1HXlWohKj9UO8gR77i0mg0aB9ex93yjiC9-e7QGwzwW6Nc7hEyn07DgaGhaIwIQidf3N6ZO4dUgVQCaaMS18eI6qGZkZtQ-fuv1--FBa2MekdKU8aELT69Vwu9ir0BGr1BZUlhrJNgTn2Mq-yLa6jUdZB4OXlvEslJhuaTNMc2kI6l2k0tE_ldEIbxNeGwRbtAaWPIUiLRv8KlvjGv2pCa4rPXKfsAIyw56JHH3R-5ax1SR5eTpmeqQkMkZH1_zj5HaUqgHPb9Ky2AAFipNg1FETxGVNCA';
// This updates 1 every 24 hours and can be retrieved live from WS.
CUR_USERID = 'HHZVx41Cude2Nz202gquHBbRWPJ3';
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

function wslisten(fn) {
    fn = fn || console.log
    let property = Object.getOwnPropertyDescriptor
        (MessageEvent.prototype, "data")
    const data = property.get
    function lookAtMessage() { //to replace get function
        let socket = this.currentTarget instanceof WebSocket
        if (!socket) { return data.call(this) }
        let msg = data.call(this)
        Object.defineProperty(this, "data", { value: msg }) //anti-loop
        fn({ data: msg, socket: this.currentTarget, event: this })
        return msg
    }
    property.get = lookAtMessage
    Object.defineProperty
        (MessageEvent.prototype, "data", property)
}

wslisten(({ data }) => {
    pdata = JSON.parse(data);
});

class AryumWS {
    constructor(url, joinRequestId, onCloseCallback) {
        this.url = url;
        this.joinRequestId = joinRequestId;
        this.valid = true;

        this.r = 3;
        this.ws = new WebSocket(url);
        this.ws.onclose = () => {
            console.log(`closing: ${this.joinRequestId}`);
            this.q.length = 0;
            this.intervalIds.forEach((i) => {
                clearInterval(i);
            });
            onCloseCallback();
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
    constructor(joinRequestId, displayName = '', onCloseCallback) {
        super('wss://s-usc1a-nss-2000.firebaseio.com/.ws?v=5&ns=arium-communication', joinRequestId, onCloseCallback);
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
    constructor(joinRequestId, x, y, r1, r3, z, onCloseCallback) {
        super('wss://s-usc1a-nss-2048.firebaseio.com/.ws?v=5&ns=arium-peers', joinRequestId, onCloseCallback);
        this.sendRaw('{"t":"d","d":{"r":3,"a":"q","b":{"p":"/userPositions/sl6wrg","h":""}}}');
        this.sendRaw('{"t":"d","d":{"r":4,"a":"q","b":{"p":"/broadcasters","q":{"sp":"sl6wrg","ep":"sl6wrg","i":"spaceId"},"t":4,"h":""}}}');
        this.sendRaw('{"t":"d","d":{"r":5,"a":"q","b":{"p":"/userRotations/sl6wrg","h":""}}}');
        this.sendRaw(`{"t":"d","d":{"r":6,"a":"p","b":{"p":"/userDeviceOrientations/${joinRequestId}","d":{"orientation":0,"userId":"${CUR_USERID}"}}}}`);
        this.sendRaw(`{"t":"d","d":{"r":7,"a":"p","b":{"p":"/userPositions/sl6wrg/${joinRequestId}","d":{"position":{"0":${x},"1":${z},"2":${y}},"userId":"${CUR_USERID}"}}}}`);
        this.sendRaw(`{"t":"d","d":{"r":8,"a":"p","b":{"p":"/userRotations/sl6wrg/${joinRequestId}","d":{"quaternion":{"0":0,"1":${r1},"2":0,"3":${r3}},"userId":"${CUR_USERID}"}}}}`);
        this.r = 9;

        this.intervalIds.push(setInterval(() => {
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
    constructor(displayName = 'NFThieves', x, y, r1 = INITIAL_R1, r3 = INITIAL_R3, z = 0, photo = PHOTO_LOCATION) {
        this.displayName = displayName;
        this.x = x;
        this.y = y;
        this.z = z;
        this.r1 = r1;
        this.r3 = r3;
        this.photo = photo;
        this.init();
    }

    setDisplayName(displayName) {
        this.displayName = `${displayName}`;
        this.communication.updateDisplayName(this.displayName);
    }

    setPhoto(photoLocation) {
        if (this.communication === null || photoLocation == '') return;
        this.communication.updatePhoto(this.displayName, photoLocation);
    }

    init() {
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
            this.communication = new AryumCommunication(this.joinRequestId, this.displayName, () => this.init());
            this.peers = new AriumPeers(this.joinRequestId, this.x, this.y, this.r1, this.r3, this.z, () => this.init());
            setTimeout(() => void this.setPhoto(this.photo), 7 * 1000);
            console.log(this);
        }));
    }
}

function grid() {
    const npcs = [];
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

function setPhotoWithDelay(npcs, delay) {
    setTimeout(() => {
        npcs.forEach(npc => {
            npc.setPhoto(PHOTO_LOCATION);
        });
    }, delay);
}

function tama() {
    six_words = "THIS IS|NOT AN|EXHIBITION,|IT'S A|CRYPTO|COMMERCIAL".split('|');
    const npcs = [];
    npcs.push(new Npc(six_words[0 % six_words.length], -14.02, -4.10, -0.0308, 0.9995));
    npcs.push(new Npc(six_words[1 % six_words.length], -12.178, -4.39, -0.0308, 0.9995));
    npcs.push(new Npc(six_words[2 % six_words.length], -10.336, -4.68, -0.0308, 0.9995));
    npcs.push(new Npc(six_words[3 % six_words.length], -8.494, -4.97, -0.0308, 0.9995));
    npcs.push(new Npc(six_words[4 % six_words.length], -6.652, -5.26, -0.0308, 0.9995));
    npcs.push(new Npc(six_words[5 % six_words.length], -4.81, -5.55, -0.0308, 0.9995));
}

function specificWorks() {
    const npcs = [];
    npcs.push(new Npc("Nope", -24.3725, -0.2067, 0.74114, 0.67133, 0.35)); // monalize
    npcs.push(new Npc("Scam", -24.3158289, -2.64733181028, 0.71720398, 0.69686328, 0.35)); // cyberpunk
    npcs.push(new Npc("Shit", -24.185439, -20.12608013, 0.6887632, 0.7249863, 0.35)); // devil
}

function realMain() {
    tama();
    specificWorks();
}

realMain();