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