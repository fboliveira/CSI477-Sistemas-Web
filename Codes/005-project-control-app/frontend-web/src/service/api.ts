// HTTP Client -> fetch, axios, ...
import axios from 'axios'

// URL server
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export default api
