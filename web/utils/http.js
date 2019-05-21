import axios from 'axios';

const baseUrl = '/jishu';

export function getVerifyCodeImage() {
    return axios.get(`${baseUrl}/getVerifyCodeImage`, {
        responseType: 'blob'
    });
}




//获取国家列表
export function getCountryList(param) {
    return axios.post(baseUrl + '/getCountrys',param);
}
//获取学校列表
export function getSchools(param) {
    return axios.post(baseUrl + '/getSchools',param);
}
//获取学校信息
export function getSchoolById(param) {
    return axios.post(baseUrl + '/getSchoolById',param);
}
//获取某学校学生列表
export function getUsersBySchool(param) {
    return axios.post(baseUrl + '/getUsersBySchool',param);
}

export function getSMSCode(phoneNum) {
    return axios.get(`${baseUrl}/getCellphoneCode?phoneNumber=${phoneNum}`);
}

export function getEmailCode(email) {
    return axios.get(`${baseUrl}/sendVerifyCodeEmail?emailTo=${email}`);
}

export function postUrl(url, params) {
    return axios.post(`${baseUrl}${url}`, { ...params });
}

export function getUser(userID) {
    return axios.get(`${baseUrl}/user?id=${userID}`);
}

//个人中心
//获取未完成订单列表
export function getUnOrder(params) {
    return axios.post(baseUrl + '/getUncompletePerchaseContactOrder',params)

}
//获取已完成订单列表
export function getDoOrder(params) {
    return axios.post(baseUrl + '/getCompletedPerchaseContactOrder',params)
}
// 更新头像
export function updateUserHeadImage(params) {
    return axios.post(baseUrl + '/updateUserHeadImage',params)
}
//更新签名
export function updateUserComment(params) {
    return axios.post(baseUrl + '/updateUserComment',params)
}
//更新昵称
export function updateUserNickname(params) {
    return axios.post(baseUrl + '/updateUserNickname',params)
}
//获取头像图片的url
export function uploadImage(file) {
    let fileData = new FormData();
    fileData.append('file', file);
    return axios.post(baseUrl + '/upload',fileData)
}
//购买学生联系方式前的校验 {
// "sellerId": 1,
// "buyerId": 2
// }
export function purchaseContactCheck(params) {
    return axios.post(baseUrl + '/purchaseContactCheck',params)
}
//购买学生联系方式 purchaseContact?sellerId=18&buyerId=19&questions=xxxx
export function purchaseContact(params) {
    return axios.get(baseUrl + '/purchaseContact'+params)
}