const _server = 'http://localhost:8080/jishu';

async function getVerifyCodeImage() {
    let res = await fetch(_server + '/getVerifyCodeImage');
    return (await res.blob());
}

async function getEmailVerifyCode(email) {
    let res = await fetch(_server + '/sendVerifyCodeEmail?emailTo=' + encodeURIComponent(email));
    return (await res.json());
}

async function getUserInfo(userID) {
    let res = await fetch(_server + '/user?id=' + encodeURIComponent(userID));
    return (await res.json());
}

async function getArticles(page) {
    let res = await fetch(_server + '/tieba/article?page=' + encodeURIComponent(page));
    return (await res.json());
}

async function setCommentRead(commentID) {
    let res = await fetch(_server + '/setUserNotificaitonAsRead?id=' + encodeURIComponent(commentID));
    return (await res.json());
}

async function uploadImage(file) {
    let fileData = new FormData();
    fileData.append('file', file);
    let res = await fetch(_server + '/upload', {
        method: 'POST',
        body: fileData
    });
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

export {getVerifyCodeImage, getEmailVerifyCode, getUserInfo, getArticles, uploadImage, postJson, setCommentRead};