// Definir o mecanismo de comunicação com o backend


import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5555'
});


export default api;