import axios from '../request/axios'
import baseUrl from './baseUrl'

export const userSignup = data => {
    console.log('user.js: ',data)
    return axios.post(baseUrl.signup, data)
}

// export const userSign = data => axios.post(baseUrl.signin, data)
export const userSignin = data => {
    console.log('user.js: ',data)
    return axios.post(baseUrl.signin, data)
}