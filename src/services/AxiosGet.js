import axios from "axios"

export function getAPIData(path) {
    return axios.get(`https://restcountries.com/v2/${path}`)
}
