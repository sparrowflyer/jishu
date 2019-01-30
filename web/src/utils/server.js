async function getVerifyCodeImage() {
    let res = await fetch('/jishu/getVerifyCodeImage');
    return (await res.blob());
}

async function getEmailVerifyCode(email) {
    let res = await fetch('/jishu/sendVerifyCodeEmail?emailTo=' + encodeURIComponent(email));
    return (await res.text());
}

async function getUserInfo(userID) {
    let res = await fetch('/jishu/user?id=' + encodeURIComponent(userID));
    return (await res.json());
}

async function getArticles(articleType, page) {
    let res = await fetch('/jishu/tieba/article?page=' + encodeURIComponent(page) + '&typeId=' + encodeURIComponent(articleType));
    return (await res.json());
}

async function getArticleDetail(articleID) {
    let res = await fetch('/jishu/tieba/articleDetail?aid=' + encodeURIComponent(articleID));
    return (await res.json());
}

async function setCommentRead(commentID) {
    let res = await fetch('/jishu/setUserNotificaitonAsRead?id=' + encodeURIComponent(commentID));
    return (await res.json());
}

async function getArticleType() {
    let res = await fetch('/jishu/tieba/articleType');
    return (await res.json());
}

async function uploadImage(file) {
    let fileData = new FormData();
    fileData.append('file', file);
    let res = await fetch('/jishu/upload', {
        method: 'POST',
        body: fileData
    });
    return (await res.json());
}

async function postJson(url, body) {
    let res = await fetch(`/jishu${url}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return (await res.json());
}

export {getVerifyCodeImage, getEmailVerifyCode, getUserInfo, getArticles, getArticleDetail, getArticleType, uploadImage, postJson, setCommentRead};