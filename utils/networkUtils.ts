import axios from "axios";

const BASE_URL = 'http://kg00w4owgo0o8okwgk4w4g40.185.229.236.238.sslip.io/'

export function get(url: string) {
    return axios.get(BASE_URL + url)
}

export function del(url: string) {
    return axios.delete(BASE_URL + url)
}

export function put(url: string, data: Object | undefined) {
    return axios.put(BASE_URL + url, data)
}