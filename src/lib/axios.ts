import axios from 'axios';

export const API = axios.create({
    baseURL: 'http://192.168.3.110:8080/api'
})