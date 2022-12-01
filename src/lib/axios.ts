import axios from 'axios';

export const API = axios.create({
    baseURL: 'http://10.92.198.31:8080/api'
})