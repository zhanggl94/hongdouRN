import axios from '../request/axios'
import baseUrl from './baseUrl'

// export const userSign = data => axios.post(baseUrl.signin, data)
export const userSign = data => {
    console.log('user.js: ',data)
    return axios.post(baseUrl.signin, data)
}