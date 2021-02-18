import Axios from 'axios'
import router from '../router'
import md5 from 'js-md5'

Axios.defaults.timeout = 10000;// 响应时间
Axios.defaults.baseURL = process.env.APIURL;
Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
Axios.interceptors.request.use(config => {
    let token = JSON.parse(localStorage.getItem('token'));
    if (token) {
        config.headers['Authorization'] =  'Bearer '+token;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

Axios.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
});

/**
 * 公共请求入口
 * @param param 'object'
 * @param url   'string'
 * @param type  'get || post'
 * @returns {Promise}
 */
export const commonPromise = (param = {}, url, type) => {
    return new Promise((resolve, reject) => {
        let request;   
        switch (type){
            case 'get':
                request = Axios({url: url, method: type, params: param})
            break
            case 'post':
                request = Axios({url: url, method: type, data: param})
            break
            case 'delete':
                request = Axios({url: url, method: type, data: param})
            break;
        } 
        request.then(res => {
            if (res.data.code === 200) {
                resolve(res.data);
            } 
            else if(res.data.code === 402){
                router.push('/login');
            }
        //     else if (res.data.code === 1004) {
        //         localStorage.removeItem('userInfo');
        //         // ElementUI.Message.error(res.data.msg);
        //         router.push('/login');
        //         console.log(res.message);
        //         reject(res.message);
        //     } 
        //     else {
        //         // ElementUI.Message.error(res.data.msg);
        //         console.log(res.message);
        //         resolve(res.data);
        //     }
        // }).catch(err => {
        //     if (err.toString().includes('403')) {
        //         localStorage.removeItem('userInfo');
        //         ElementUI.Message.error('用户状态变更');
        //         router.push('/login');
        //     }
            // reject(err.data.msg);
        });
    })
}
