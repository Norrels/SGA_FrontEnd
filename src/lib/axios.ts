import axios from 'axios'

export const API = axios.create({
    baseURL: 'http://10.92.198.33:8080/api'
})