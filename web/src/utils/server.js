const _server = 'http://localhost:8080/jishu';

async function getVerifyCodeImage() {
    let res = await fetch(_server + '/getVerifyCodeImage');
    return (await res.blob());
}

async function getEmailVerifyCode(email) {
    let res = await fetch(_server + '/sendVerifyCodeEmail?emailTo=' + encodeURIComponent(email));
    return (await res.json());
}

async function postJson(url, body) {
    let res = await fetch(_server + url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return (await res.json());
}

export {getVerifyCodeImage, getEmailVerifyCode, postJson};