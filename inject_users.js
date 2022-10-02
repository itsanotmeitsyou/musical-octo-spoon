function logger(name) {
    return (message) => console.log(`${name}: ${message}.`);
}

// This updates 1 every 24 hours and can be retrieved live from WS.
CUR_USERID = 'HHZVx41Cude2Nz202gquHBbRWPJ3';
// This was created after uploading a file, contains CUR_USERID from upload time, might require uploading daily.
PHOTO_LOCATION = 'https://assets.vlts.pw/profileImages/zoxvx93Fzbd2rdKZHdgqf7Nn1tq2/8Jy.png';

// Default values:
INITIAL_X = 6.640265084629075;
INITIAL_Y = 2.1382288485504484;
INITIAL_R1 = -0.7303382794059083;
INITIAL_R3 = 0.6830856444359062;

// This is just for grid script.
OFFSET_STEP = -1.5;

// Remove an NPC from the space.
function clearNpc(npc, noRespawn = true) {
    if (npc.peers != null) npc.peers.close(noRespawn);
    if (npc.communication != null) npc.communication.close(noRespawn);
}

// console utils

function findVal(o, targetVal, prefix) {
    const VISITED_KEY = 'findval_visited';
    const VISITED_VAL = Math.random() * 100000000000000;
    const CANDIDATE_PLACEHOLDER = 'fdnsakl nj3k2 njkfds sa90 jciosa mkl32';
    console.log(VISITED_KEY);
    console.log(VISITED_VAL);

    let results = [];

    const findValInner = (object, val, prefix) => {
        Object.keys(object).forEach((k) => {
            const name = prefix ? `${prefix}.${k}` : k;
            console.log(name);
            let candidate = CANDIDATE_PLACEHOLDER;
            try {
                candidate = object[k];
            } catch (e) {
                console.log(e);
            }
            if (candidate === CANDIDATE_PLACEHOLDER) return;
            if (candidate === val || (typeof candidate === 'string' && candidate.includes(val))) {
                results = [...results, { path: name, value: candidate }];
                console.log('Found!');
                return;
            }
            else if (candidate && typeof candidate === 'object') {
                if (candidate[VISITED_KEY] == VISITED_VAL) {
                    console.log('\tvisited.');
                    return;
                };
                candidate[VISITED_KEY] = VISITED_VAL;
                findValInner(candidate, val, name);
            }
        });
    }
    findValInner(o, targetVal, prefix);
    return results;
}

function findType(o, typename, prefix) {
    const VISITED_KEY = 'findval_visited';
    const VISITED_VAL = Math.random() * 100000000000000;
    const CANDIDATE_PLACEHOLDER = 'fdnsakl nj3k2 njkfds sa90 jciosa mkl32';
    console.log(VISITED_KEY);
    console.log(VISITED_VAL);

    let results = [];

    const findValInner = (object, val, prefix) => {
        Object.keys(object).forEach((k) => {
            const name = prefix ? `${prefix}.${k}` : k;
            console.log(name);
            let candidate = CANDIDATE_PLACEHOLDER;
            try {
                candidate = Object.prototype.toString.call(object[k]);
                console.log(candidate);
            } catch (e) {
                console.log(e);
            }
            if (candidate === CANDIDATE_PLACEHOLDER) return;
            if (candidate === val ||
                (typeof candidate === 'string' && candidate.toLowerCase().includes(`${val}`.toLowerCase()))) {
                results = [...results, { path: name, value: object[k] }];
                console.log('Found!');
                return;
            }
            else if (object[k] && typeof object[k] === 'object') {
                if (object[k][VISITED_KEY] == VISITED_VAL) {
                    console.log('\tvisited.');
                    return;
                };
                object[k][VISITED_KEY] = VISITED_VAL;
                findValInner(object[k], val, name);
            }
        });
    }
    findValInner(o, typename, prefix);
    return results;
}
// end console utils.

function getAuthKey() {
    return new Promise((resolve, reject) => {
        var open = indexedDB.open("firebaseLocalStorageDb");
        open.onerror = function (event) {
            console.log("Error loading database");
            return reject();
        }
        open.onsuccess = function (event) {
            var db = open.result;
            var transaction = db.transaction("firebaseLocalStorage", "readonly");
            var objectStore = transaction.objectStore("firebaseLocalStorage");
            const getAll = objectStore.getAll();
            getAll.onerror = () => {
                return reject();
            }
            getAll.onsuccess = (r) => {
                AryumWS.credentials = r.target.result[0].value.stsTokenManager.accessToken;
                return resolve(AryumWS.credentials);
            };
        }
    });
}

class AryumWS {
    static credentials = '';
    constructor(url, joinRequestId, onCloseCallback) {
        this.log = logger(joinRequestId);

        this.url = url;
        this.joinRequestId = joinRequestId;
        this.valid = true;

        this.useCallback = true;

        this.r = 1;
        this.ws = new WebSocket(url);
        this.ws.onclose = (event) => {
            this.log('onclose event');
            this.q.length = 0;
            this.intervalIds.forEach((i) => {
                clearInterval(i);
            });
            this.intervalIds.length = 0;
            this.valid = false;
            if (this.useCallback) onCloseCallback();
        };

        this.ws.onmessage = (event) => {
            if (JSON.parse(event?.data)?.d?.b?.s === "expired_token") {
                this.log('Expired token, restarting.')
                getAuthKey().then(() => {
                    this.log('Updated AuthKey, closing.');
                    this.close();
                });
            }
        }

        this.q = [];
        this.intervalIds = [];

        this.sendSdk();
        this.sendAuth()

        this.intervalIds.push(setInterval(() => this.flush(), 1000));
    }

    close(useCallback = true) {
        this.useCallback = useCallback;
        this.ws.close();
    }

    sendSdk() {
        this.send('s', '{"c":{"sdk.js.8-10-0":1}}');
    }

    sendAuth() {
        this.send('auth', `{"cred":"${AryumWS.credentials}"}`);
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
            this.log('sending message after close.');
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
            this.send('m', `{"p":"/userSessions/${joinRequestId}","d":{"active":true,"lastChanged":{".sv":"timestamp"}}}`);
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
        this.send('q', '{"p":"/userPositions/sl6wrg","h":""}');
        this.send('q', '{"p":"/broadcasters","q":{"sp":"sl6wrg","ep":"sl6wrg","i":"spaceId"},"t":4,"h":""}');
        this.send('q', '{"p":"/userRotations/sl6wrg","h":""}');
        this.send('p', `{"p":"/userDeviceOrientations/${joinRequestId}","d":{"orientation":0,"userId":"${CUR_USERID}"}}`);
        this.send('p', `{"p":"/userPositions/sl6wrg/${joinRequestId}","d":{"position":{"0":${x},"1":${z},"2":${y}},"userId":"${CUR_USERID}"}}`);
        this.send('p', `{"p":"/userRotations/sl6wrg/${joinRequestId}","d":{"quaternion":{"0":0,"1":${r1},"2":0,"3":${r3}},"userId":"${CUR_USERID}"}}`);

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
        this.log = logger(`${displayName}`);
        this.respawnedId = '';

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
                "authorization": `Bearer ${AryumWS.credentials}`,
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
            this.log = logger(`${this.displayName}:${this.joinRequestId}`);
            this.log('constructed NPC');
            const joinRequestId = this.joinRequestId;
            this.communication = new AryumCommunication(this.joinRequestId, this.displayName, () => this.respawn(joinRequestId));
            this.peers = new AriumPeers(this.joinRequestId, this.x, this.y, this.r1, this.r3, this.z, () => this.respawn(joinRequestId));
            setTimeout(() => void this.setPhoto(this.photo), 7 * 1000);
            console.log(this);
        }));
    }

    close(respawn = false) {
        this.peers.close(respawn);
        this.communication.close(respawn);
    }

    respawn(forId) {
        const lock = navigator.locks.request(`respaws_${forId}`, { ifAvailable: true }, () => {
            console.log(`rid:${this.respawnedId}. forId:${forId}`);
            if (this.respawnedId === forId || forId === '') return;
            this.respawnedId = forId;
            this.init();
        });
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
    getAuthKey().then(() => {
        tama();
        specificWorks();
    });
}

realMain();