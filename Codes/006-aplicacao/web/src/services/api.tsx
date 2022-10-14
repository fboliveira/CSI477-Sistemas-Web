import axios from 'axios';

const token = window.localStorage.getItem('token') || undefined;
const header = window.localStorage.getItem('header') || undefined;

if ( token !== undefined ) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${header} ${token}`;
} else {
    axios.defaults.headers.common["Authorization"] = false;
}

const api = axios.create({
    baseURL: 'http://localhost:4000'
});

export default api;