import axios from 'axios'
import { Spin, message } from 'antd'
import ReactDOM from 'react-dom'
import baseUrl from '../api/baseUrl'
import { getLocalStorageItem } from '../util/utils'

axios.defaults.baseURL = 'http://localhost:3001/api/'
axios.defaults.timeout = 2000 * 10; // 超时时间
// axios.defaults.headers.post['Content-Type'] = 'application/json'; //请求头 

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
    return Promise.resolve(res)
}, error => {
    hideLoading();
    const { response } = error;
    if (!response) {
        message.error(error.message)
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
                message.error(resMessage);
            } else {
                message.error('未通过认证，请重新登录')
            }
            break;
        // 权限不足
        case 403:
            message.error('权限不足')
            break
        // 404请求不存在
        case 404:
            message.error('页面不存在')
            break
        case 500:
            message.error('服务器错误')
            break
        default:
            message.error(resMessage)
    }
}

// 显示loading
const showLoading = () => {
    if (requestCount === 0) {
        const loadDom = document.createElement('div');
        loadDom.setAttribute('id', 'loading')
        document.body.appendChild(loadDom)
        ReactDOM.render(<Spin tip="加载中..." />, loadDom)
    }
    requestCount++;
}

// 关闭loading
const hideLoading = () => {
    requestCount--;
    if (requestCount < 1) {
        document.body.removeChild(document.getElementById('loading'))
    }
}

export default axios;