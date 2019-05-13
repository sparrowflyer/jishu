import axios from 'axios';

const baseUrl = '/jishu';

export function getVerifyCodeImage() {
    return axios.get(`${baseUrl}/getVerifyCodeImage`, {
        responseType: 'blob'
    });
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