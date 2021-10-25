import axios from 'axios'
import baseUrl from '../api/baseUrl'
import store from '../reduxTKL/store'
import { startLoading, finishLoading } from '../reduxTKL/slices/loading'
import { modalError } from '../components/HDModal'

axios.defaults.baseURL = 'http://10.201.246.86:3001/api/'
axios.defaults.timeout = 2000 * 10; // 超时时间
let requestCount = 0; // 计数器

// 请求拦截器
axios.interceptors.request.use(config => {
    showLoading();
    if (!config.url.endsWith(baseUrl.signin) && !config.url.endsWith(baseUrl.signup)) {
        config.headers['jwttoken'] = getLocalStorageItem('jwtToken') // Token
    }
    return config;
}, error => {
    hideLoading();
    return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(res => {
    hideLoading();
    console.log('返回结果', res);
    return Promise.resolve(res)
}, error => {
    hideLoading();
    const { response } = error;
    if (!response) {
         modalError(error.message)
    }
    if (response.status !== 200) {
        handleError(response.status, response.data.message)
    }
    return Promise.reject(error)
})

// 处理错误信息
const handleError = (status, resMessage) => {
    switch (status) {
        // 未登录，跳转到登陆页面
        case 401:
            if (resMessage) {
                 modalError(resMessage);
            } else {
                 modalError('未通过认证，请重新登录')
            }
            break;
        // 权限不足
        case 403:
             modalError('权限不足')
            break
        // 404请求不存在
        case 404:
             modalError('页面不存在')
            break
        case 500:
             modalError('服务器错误')
            break
        default:
            modalError(resMessage)
    }
}

// 显示loading
const showLoading = () => {
    if (requestCount === 0) {
        store.dispatch(startLoading())
    }
    requestCount++;
}

// 关闭loading
const hideLoading = () => {
    requestCount--;
    if (requestCount < 1) {
        store.dispatch(finishLoading())
    }
}

export default axios;