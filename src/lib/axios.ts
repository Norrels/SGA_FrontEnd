import axios from 'axios';

export const API = axios.create({

baseURL: 'http://10.92.196.3:8080/api'
})