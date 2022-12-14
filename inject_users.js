function formatDate(date) {
    try {
        return `${date.toLocaleDateString(['iw-il'])} ${date.toTimeString().split(' ')[0]} `;
    } catch {
        return '';
    }
}

function logger(name, parent = undefined) {
    const prefix = `${parent?.prefix || ''}${name}: `;
    const logFunc = (message) => console.log(`${formatDate(new Date())}${prefix}${message}.`);
    logFunc.prefix = prefix
    return logFunc;
}

// This was created after uploading a file, contains a userid from upload time, might require uploading daily.
// Edit: apparently not.
PHOTO_LOCATION = 'https://assets.vlts.pw/profileImages/zoxvx93Fzbd2rdKZHdgqf7Nn1tq2/8Jy.png';

// Default values:
INITIAL_X = 6.640265084629075;
INITIAL_Y = 2.1382288485504484;
INITIAL_R1 = -0.7303382794059083;
INITIAL_R3 = 0.6830856444359062;

// This is just for grid script.
OFFSET_STEP = -1.5;

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
                const cred = r.target.result[0].value.stsTokenManager.accessToken;
                return resolve(cred);
            };
        }
    });
}

function retryChain(work, retries = 12, delay = 5 * 1000) {
    function rejectDelay(reason) {
        return new Promise(function (resolve, reject) {
            setTimeout(reject.bind(null, reason), delay);
        });
    }
    var p = Promise.reject();
    for (var i = 0; i < retries; i++) {
        p = p.catch(work).catch(rejectDelay);
    }
    return p;
}

class AryumWS {
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
            if (this.useCallback) setTimeout(() => onCloseCallback(), (10 + Math.random() * 10) * 1000);
        };

        this.ws.onmessage = (event) => {
            if (!event?.data) return;
            let pdata = '';
            try {
                pdata = JSON.parse(event.data);
            } catch {
                return;
            }
            if (pdata?.d?.b?.s === "expired_token") {
                this.log('Expired token, closing.')
                this.close();
            } else if (pdata?.d?.b?.d?.auth?.uid) {
                this.uid = pdata?.d?.b?.d?.auth?.uid;
            }
        }

        this.q = [];
        this.intervalIds = [];

        this.init = new Promise((resolve, reject) => {
            let hasAuth = false;
            let hasUid = false;
            let max_tries = 15;
            this.sendSdk();
            this.sendAuth().then(() => { hasAuth = true; });
            let intervalId;
            intervalId = setInterval(() => {
                if (this.uid !== undefined && hasAuth) {
                    clearInterval(intervalId);
                    return resolve();
                }
                max_tries--;
                if (max_tries <= 0) {
                    clearInterval(intervalId);
                    return reject();
                }
            }, 15 * 1000)
        }).catch(() => {
            this.log('could not get credentials, closing.');
            this.close();
        });


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
        return getAuthKey().then((cred) => this.send('auth', `{"cred":"${cred}"}`));
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
            console.log(message);
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
        this.log = logger(`com`, this.log);
        this.init.then(() => {
            this.send('q', '{"p":"/userSessions","q":{"sp":"sl6wrg","ep":"sl6wrg","i":"spaceId"},"t":1,"h":""}');
            this.send('q', '{"p":"/userMetadata","q":{"sp":"sl6wrg","ep":"sl6wrg","i":"spaceId"},"t":2,"h":""}');
            this.send('p', `{"p":"/userMetadata/${joinRequestId}","d":{"userId":"${this.uid}"}}`);
            this.send('n', `{"p":"/userSessions","q":{"sp":"sl6wrg","ep":"sl6wrg","i":"spaceId"},"t":1}`);
            this.send('q', `{"p":"/userSessions","q":{"sp":"sl6wrg","ep":"sl6wrg","i":"spaceId"},"t":3,"h":""}`);

            this.send('o', `{"p":"/userSessions/${joinRequestId}","d":{"active":false,"lastChanged":{".sv":"timestamp"},"spaceId":"sl6wrg","userId":"${this.uid}"}}`);
            this.send('m', `{"p":"/userSessions/${joinRequestId}","d":{"active":true,"userId":"${this.uid}","lastChanged":{".sv":"timestamp"}}}`);
            this.send('m', `{"p":"/userSessions/${joinRequestId}","d":{"spaceId":"sl6wrg","userId":"${this.uid}","active":true,"lastChanged":{".sv":"timestamp"}}}`);
            this.send('m', `{"p":"/userMetadata/${joinRequestId}","d":{"spaceId":"sl6wrg"}}`);
            this.send('m', `{"p":"/userMetadata/${joinRequestId}","d":{"metadata":{}}}`);
            this.send('q', `{"p":"/userCommunication/${this.uid}/${joinRequestId}/webrtcTransport","h":""}`);
            this.send('m', `{"p":"/userSessions/${joinRequestId}","d":{"active":true,"lastChanged":{".sv":"timestamp"}}}`);
            this.send('m', `{"p":"/userMetadata/${joinRequestId}","d":{"metadata":{"displayName": "${displayName}"}}}`);
            this.intervalIds.push(setInterval(() => {
                this.send('m', `{"p":"/userSessions/${joinRequestId}","d":{"active":true,"lastChanged":{".sv":"timestamp"}}}`);
                this.r++;
            }, 30 * 1000));
        });
    }

    updateDisplayName(displayName) {
        this.send('m', `{"p":"/userMetadata/${this.joinRequestId}","d":{"metadata":{"displayName": "${displayName}"}}}`);
    }

    updatePhoto(displayName, path) {
        this.send('m', `{"p":"/userMetadata/${this.joinRequestId}","d":{"metadata":{"displayName": "${displayName}", "photo": "${path}"}}}`);
    }
}

class AriumPeers extends AryumWS {
    constructor(joinRequestId, x, y, r1, r3, z, onCloseCallback, r0 = 0, r2 = 0) {
        super('wss://s-usc1a-nss-2048.firebaseio.com/.ws?v=5&ns=arium-peers', joinRequestId, onCloseCallback);
        this.log = logger('peers', this.log);
        this.initialized = false;
        this.init.then(() => {
            /// q
            this.send('q', '{"p":"/userPositions/sl6wrg","h":""}');
            this.send('q', '{"p":"/broadcasters","q":{"sp":"sl6wrg","ep":"sl6wrg","i":"spaceId"},"t":4,"h":""}');
            this.send('q', '{"p":"/userRotations/sl6wrg","h":""}');
            /// p
            this.send('p', `{"p":"/userDeviceOrientations/${joinRequestId}","d":{"orientation":0,"userId":"${this.uid}"}}`);
            this.updatePosition(x, y, z);
            this.updateRotation(r1, r3, r0, r2);
            setTimeout(() => this.initialized = true, 500);
            this.intervalIds.push(setInterval(() => {
                this.sendRaw(0);
            }, 45 * 1000));
        });
    }

    updatePosition(x, y, z = 0) {
        this.send("p", `{"p":"/userPositions/sl6wrg/${this.joinRequestId}","d":{"position":{"0":${x},"1":${z},"2":${y}},"userId":"${this.uid}"}}`);
    }

    updateRotation(r1, r3, r0 = 0, r2 = 0) {
        this.send("p", `{"p":"/userRotations/sl6wrg/${this.joinRequestId}","d":{"quaternion":{"0":${r0},"1":${r1},"2":${r2},"3":${r3}},"userId":"${this.uid}"}}`)
    }
}

class Npc {
    static instances = [];
    constructor(displayName = 'NFThieves', x, y, r1 = INITIAL_R1, r3 = INITIAL_R3, z = 0, r0 = 0, r2 = 0, photo = PHOTO_LOCATION) {
        Npc.instances.push(this);
        this.log = logger(`${displayName}`);
        this.displayName = displayName;
        this.joinRequestId = '';
        this.respawnedId = '';

        this.x = x;
        this.y = y;
        this.z = z;
        this.r0 = r0;
        this.r1 = r1;
        this.r2 = r2;
        this.r3 = r3;
        this.photo = photo;

        this.intervalIds = [];

        this.zRand = Math.random() * 1000;

        this.init();
    }

    init() {
        this.resetFields();
        retryChain(() => this.fetchJoinRequestId())
            .catch((e) => {
                this.log('Failed joinRequest');
                console.error(e);
            }).then(value => {
                this.joinRequestId = value.result.joinRequestId;
                this.log = logger(`${this.displayName}: ${this.joinRequestId}`);
                this.log('constructed NPC');
                const joinRequestId = this.joinRequestId;
                this.communication = new AryumCommunication(this.joinRequestId, this.displayName, () => this.respawn(joinRequestId));
                this.peers = new AriumPeers(this.joinRequestId, this.x, this.y, this.r1, this.r3, this.z, () => this.respawn(joinRequestId), this.r0, this.r2);
                setTimeout(() => void this.setPhoto(this.photo), 15 * 1000);
                console.log(this);
            }).then(() => {
                this.intervalIds.push(setInterval(() => this.jiggle(), 100));
            })
            .catch((e) => {
                this.log('Failed constructing Npc.');
                console.error(e);
            });
    }

    resetFields() {
        this.log = logger(`${this.displayName}`);
        this.joinRequestId = '';
        this.communication = null;
        this.peers = null;
        this.intervalIds.forEach((id) => clearInterval(id));
        this.intervalIds.length = 0;
    }

    setDisplayName(displayName) {
        this.displayName = `${displayName}`;
        this.communication.updateDisplayName(this.displayName);
    }

    setPhoto(photoLocation) {
        if (this.communication === null || photoLocation == '') return;
        this.communication.updatePhoto(this.displayName, photoLocation);
    }

    setPosition(x, y, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.peers.updatePosition(x, y, z);
    }

    setRotations(r1, r3, r0 = 0, r2 = 0) {
        this.r1 = r1;
        this.r3 = r3;
        this.r0 = r0;
        this.r2 = r2;
        this.peers.updateRotation(r1, r3, r0, r2);
    }

    static timeToZOffset(time, bounce = 0.1) {
        return Math.sin(time / 1000 * 2) * bounce;
    }

    jiggle() {
        // weird walkaround because setPosition changes this.z.
        if (!this.peers?.uid || !this.peers?.initialized) return;
        const z = this.z;
        this.setPosition(this.x, this.y, this.z + Npc.timeToZOffset(Date.now() + this.zRand));
        this.z = z;
    }

    fetchJoinRequestId() {
        return getAuthKey().then((cred) => {
            return fetch("https://us-central1-volta-events-294715.cloudfunctions.net/joinSpace", {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "en-US,en;q=0.9",
                    "authorization": `Bearer ${cred}`,
                    "content-type": "application/json",
                    "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Chrome OS\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "cross-site",
                    "Referer": "https://arium.xyz/",
                    "Referrer-Policy": "unsafe-url"
                },
                "body": "{\"data\":{\"spaceId\":\"sl6wrg\"}}",
                "mode": "cors",
                "method": "POST"
            }).then(response => response.json());
        });
    }

    close(respawn = false) {
        if (this.peers != null) this.peers.close(respawn);
        if (this.communication != null) this.communication.close(respawn);
        if (!this.peers?.valid && !this.communication?.valid && respawn) {
            this.respawn();
        }
        this.resetFields();
    }

    respawn(forId) {
        const lock = navigator.locks.request(`respaws_${forId}`, { ifAvailable: true }, () => {
            if (this.respawnedId === forId || forId === '') return;
            this.respawnedId = forId;
            this.init();
        });
    }
}

// Scripts

function grid(rows = 1, cols = 1) {
    const npcs = [];
    for (let x_offset = 0; x_offset < rows; x_offset++) {
        for (let y_offset = 0; y_offset < rows; y_offset++) {
            const x = INITIAL_X + x_offset * OFFSET_STEP;
            const y = INITIAL_Y + y_offset * OFFSET_STEP;
            npcs.push(new Npc(`rick_${x_offset}_${y_offset}`, x, y));
        }
    }
    return npcs;
}

function smartGrid(x_start=-15, y_start=-17, x_end=-10, y_end=-11, rows=5, cols=4) {
    const lerp = (x, y, a) => x * (1 - a) + y * a;
    const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));
    const invlerp = (x, y, a) => clamp((a - x) / (y - x));
    const range = (x1, y1, x2, y2, a) => lerp(x2, y2, invlerp(x1, y1, a));
    
    const displayNameFunc = (row, col) => {
        const words = [
            "Never|gonna|give|you|up".split('|').reverse(),
            "Never|gonna|let|you|down".split('|').reverse(),
        ];
        const rIndex = col % words.length;
        return words[rIndex][row % words[rIndex].length];
    };

    const zFunc = (x, y) => {
        return range(y_start, y_end, -0.5, 2, y);
    }
    const npcs = [];
    for (let row = 0; row < rows; row++) {
        const x = range(0, rows - 1, x_start, x_end, row);
        for (let col = 0; col < cols; col++) {
            const y = range(0, cols - 1, y_start, y_end, col);
            setTimeout(() => { npcs.push(new Npc(displayNameFunc(row, col), x, y, 1, 0, zFunc(x, y))); },
                (row * cols + col) * 1.5 * 1000);
        }
    }
    return new Promise((resolve) => {
        setTimeout(() => resolve(npcs), rows * cols * 1.5 * 1000 + 1000)
    });
}

function tama() {
    six_words = "THIS IS|NOT AN|EXHIBITION,|IT'S A|CRYPTO | COMMERCIAL".split('|');
    const npcs = [];
    npcs.push(new Npc(six_words[0 % six_words.length], -14.02, -4.10, -0.0308, 0.9995));
    npcs.push(new Npc(six_words[1 % six_words.length], -12.178, -4.39, -0.0308, 0.9995));
    npcs.push(new Npc(six_words[2 % six_words.length], -10.336, -4.68, -0.0308, 0.9995));
    npcs.push(new Npc(six_words[3 % six_words.length], -8.494, -4.97, -0.0308, 0.9995));
    npcs.push(new Npc(six_words[4 % six_words.length], -6.652, -5.26, -0.0308, 0.9995));
    npcs.push(new Npc(six_words[5 % six_words.length], -4.81, -5.55, -0.0308, 0.9995));
    return npcs;
}

function specificWorks() {
    const npcs = [];
    npcs.push(new Npc("Nope", -24.3725, -0.2067, 0.74114, 0.67133, 0.35)); // monalize
    npcs.push(new Npc("Scam", -24.3158289, -2.64733181028, 0.71720398, 0.69686328, 0.35)); // cyberpunk
    npcs.push(new Npc("Shit", -24.185439, -20.12608013, 0.6887632, 0.7249863, 0.35)); // devil
    return npcs;
}

function wall() {
    const npcs = [];
    npcs.push(new Npc('wall', 0, 0, 1, 1, 35, Math.PI / 4, 4));
    return npcs;
}

function flyingNFThieves() {
    const npcs = [];
    npcs.push(new Npc('NFThieves', -3, 3.8, 0.95, 1.05, 1, -0.1, 0));
    return npcs;
}

function closeAllNpcs(respawn = false) {
    Npc.instances.forEach(npc => npc.close(respawn));
}

function realMain() {
    getAuthKey().then(() => {
        window.npcTama = tama();
        window.npcWorks = specificWorks();
        window.npcWall = wall();
        window.npcFlying = flyingNFThieves();
        window.npcGrid = smartGrid();
    });
}
