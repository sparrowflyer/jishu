import axios from 'axios';

const baseUrl = '/jishu';

export function getVerifyCodeImage() {
    return axios.get(baseUrl + '/getVerifyCodeImage', {
        responseType: 'blob'
    });
}
