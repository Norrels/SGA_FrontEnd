import axios from 'axios';

export const API = axios.create({
    baseURL: 'http://10.92.198.4:8080/api'
})