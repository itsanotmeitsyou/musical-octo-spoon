function logger(name) {
    return (message) => console.log(`${name}: ${message}.`);
}

CUR_AUTH = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjU4NWI5MGI1OWM2YjM2ZDNjOTBkZjBlOTEwNDQ1M2U2MmY4ODdmNzciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoibW1tbW1tbW0iLCJwcm92aWRlcl9pZCI6ImFub255bW91cyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS92b2x0YS1ldmVudHMtMjk0NzE1IiwiYXVkIjoidm9sdGEtZXZlbnRzLTI5NDcxNSIsImF1dGhfdGltZSI6MTY2NDM3NDgwOCwidXNlcl9pZCI6IkVvVjQ1cVBldVFPaUhtTmlENVpZMkxuanVWMzIiLCJzdWIiOiJFb1Y0NXFQZXVRT2lIbU5pRDVaWTJMbmp1VjMyIiwiaWF0IjoxNjY0NDg2OTk2LCJleHAiOjE2NjQ0OTA1OTYsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnt9LCJzaWduX2luX3Byb3ZpZGVyIjoiYW5vbnltb3VzIn19.M7Yqztxi8xxnWq4A7lqGaOLyfyN1_Vc7eB0rcaI0zOrnZmRTYvhHMzW7-uLciblsj3npyQQXhHvbFYdBCp5iux93fd7_dm2IOoVVWVekUMOKmFUQJHEsQWWVjrC9Vq3QbyrRbLXkgb12PR_I6Pj1mFPms0s23m7HleFwTjX1Y4uXOfW1CZqMf5cgmBHhk1GoQu5vVzarzMuy_zAIO8mMC8tHpOBT-cnbp6eIktp7PTHLtx8FNL4_fr6rLGhk8kSzgZ2aR3PnM67L4cYM30YImCmTw1JbYjbrcpPgkk7esDbrNbHcWVz_mAbjTc24erpDVvnhuPUnzNV5Ne13kCJy_w'; 
OFFSET_STEP = -1.5;

async function main(displayName = "nftsahoax", x_offset = 0, y_offset = 0) {
    const log = logger('main');
    log('start');
    const joinRequestId = await fetch("https://us-central1-volta-events-294715.cloudfunctions.net/joinSpace", {
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
    }).then(v => v.json().then(c => c.result.joinRequestId));
    log('awaited respone');
    log(joinRequestId);
    const arium_peers = new WebSocket('wss://s-usc1a-nss-2048.firebaseio.com/.ws?v=5&ns=arium-peers');
    const arium_communitcation = new WebSocket('wss://s-usc1a-nss-2000.firebaseio.com/.ws?v=5&ns=arium-communication');

    const websockets_with_zeros = [arium_peers];
    websockets_with_zeros.forEach(ws => void setInterval(() => ws.send(0), 5000));

    arium_communitcation.onopen = () => {
        const log = logger('communitcation');
        log('onopen');
        arium_communitcation.send('{"t":"d","d":{"r":1,"a":"s","b":{"c":{"sdk.js.8-10-0":1}}}}');
        arium_communitcation.send(`{"t":"d","d":{"r":2,"a":"auth","b":{"cred":"${CUR_AUTH}"}}}`);
        arium_communitcation.send('{"t":"d","d":{"r":3,"a":"q","b":{"p":"/userSessions","q":{"sp":"sl6wrg","ep":"sl6wrg","i":"spaceId"},"t":1,"h":""}}}');
        arium_communitcation.send('{"t":"d","d":{"r":4,"a":"q","b":{"p":"/userMetadata","q":{"sp":"sl6wrg","ep":"sl6wrg","i":"spaceId"},"t":2,"h":""}}}');
        arium_communitcation.send(`{"t":"d","d":{"r":5,"a":"p","b":{"p":"/userMetadata/${joinRequestId}","d":{"userId":"EoV45qPeuQOiHmNiD5ZY2LnjuV32"}}}}`);
        arium_communitcation.send(`{"t":"d","d":{"r":6,"a":"n","b":{"p":"/userSessions","q":{"sp":"sl6wrg","ep":"sl6wrg","i":"spaceId"},"t":1}}}`);
        arium_communitcation.send(`{"t":"d","d":{"r":7,"a":"q","b":{"p":"/userSessions","q":{"sp":"sl6wrg","ep":"sl6wrg","i":"spaceId"},"t":3,"h":""}}}`);

        arium_communitcation.send(`{"t":"d","d":{"r":8,"a":"o","b":{"p":"/userSessions/${joinRequestId}","d":{"active":false,"lastChanged":{".sv":"timestamp"},"spaceId":"sl6wrg","userId":"EoV45qPeuQOiHmNiD5ZY2LnjuV32"}}}}`);
        arium_communitcation.send(`{"t":"d","d":{"r":9,"a":"m","b":{"p":"/userSessions/${joinRequestId}","d":{"active":true,"userId":"EoV45qPeuQOiHmNiD5ZY2LnjuV32","lastChanged":{".sv":"timestamp"}}}}}`);
        arium_communitcation.send(`{"t":"d","d":{"r":10,"a":"m","b":{"p":"/userSessions/${joinRequestId}","d":{"spaceId":"sl6wrg","userId":"EoV45qPeuQOiHmNiD5ZY2LnjuV32","active":true,"lastChanged":{".sv":"timestamp"}}}}}`);
        arium_communitcation.send(`{"t":"d","d":{"r":11,"a":"m","b":{"p":"/userMetadata/${joinRequestId}","d":{"spaceId":"sl6wrg"}}}}`);
        arium_communitcation.send(`{"t":"d","d":{"r":12,"a":"m","b":{"p":"/userMetadata/${joinRequestId}","d":{"metadata":{}}}}}`);
        arium_communitcation.send(`{"t":"d","d":{"r":13,"a":"q","b":{"p":"/userCommunication/EoV45qPeuQOiHmNiD5ZY2LnjuV32/${joinRequestId}/webrtcTransport","h":""}}}`);
        arium_communitcation.send(`{"t":"d","d":{"r":14,"a":"m","b":{"p":"/userSessions/${joinRequestId}","d":{"active":true,"lastChanged":{".sv":"timestamp"}}}}}`);
        arium_communitcation.send(`{"t":"d","d":{"r":15,"a":"m","b":{"p":"/userMetadata/${joinRequestId}","d":{"metadata":{"displayName": "${displayName}"}}}}}`);
        setInterval(() => {
            log("sending life signal on arium_communitcation");
            arium_communitcation.send(`{"t":"d","d":{"r":14,"a":"m","b":{"p":"/userSessions/${joinRequestId}","d":{"active":true,"lastChanged":{".sv":"timestamp"}}}}}`);
        }, 30000);
    }

    arium_peers.onopen = () => {
        const log = logger('peers');
        log('onopen');
        setTimeout(() => {
            log('in timeout');
            const x = 6.640265084629075 + x_offset * OFFSET_STEP;
            const y = 2.1382288485504484 + y_offset * OFFSET_STEP;
            arium_peers.send('{"t":"d","d":{"r":1,"a":"s","b":{"c":{"sdk.js.8-10-0":1}}}}');
            arium_peers.send(`{"t":"d","d":{"r":2,"a":"auth","b":{"cred":"${CUR_AUTH}"}}}`);
            arium_peers.send('{"t":"d","d":{"r":3,"a":"q","b":{"p":"/userPositions/sl6wrg","h":""}}}');
            arium_peers.send('{"t":"d","d":{"r":4,"a":"q","b":{"p":"/broadcasters","q":{"sp":"sl6wrg","ep":"sl6wrg","i":"spaceId"},"t":4,"h":""}}}');
            arium_peers.send('{"t":"d","d":{"r":5,"a":"q","b":{"p":"/userRotations/sl6wrg","h":""}}}');
            arium_peers.send(`{"t":"d","d":{"r":6,"a":"p","b":{"p":"/userDeviceOrientations/${joinRequestId}","d":{"orientation":0,"userId":"EoV45qPeuQOiHmNiD5ZY2LnjuV32"}}}}`);
            arium_peers.send(`{"t":"d","d":{"r":7,"a":"p","b":{"p":"/userPositions/sl6wrg/${joinRequestId}","d":{"position":{"0":${x},"1":0,"2":${y}},"userId":"EoV45qPeuQOiHmNiD5ZY2LnjuV32"}}}}`);
            arium_peers.send(`{"t":"d","d":{"r":8,"a":"p","b":{"p":"/userRotations/sl6wrg/${joinRequestId}","d":{"quaternion":{"0":0,"1":-0.7303382794059083,"2":0,"3":0.6830856444359062},"userId":"EoV45qPeuQOiHmNiD5ZY2LnjuV32"}}}}`);
        }, 1000);
    };
}

for (let x = 0 ; x < 4; x++) {
    for (let y = 0 ; y < 4 ; y ++) {
        await main(`Nft_${x}_${y}`, x, y);
    }
}