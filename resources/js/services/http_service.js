import store from "../store";
import axios from 'axios'

//server path
export function http() {
    return axios.create({
        baseURL: store.state.apiUrl
    })
}

//api path
export function httpFile() {
    return axios.create({
        baseURL: store.state.apiUrl,
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
}

//auth path
export function httpFileAuth() {
    return axios.create({
        baseURL: store.state.authUrl,
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
}
