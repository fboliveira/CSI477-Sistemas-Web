// Definir o mecanismo de comunicação com o backend


import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});


export default api;