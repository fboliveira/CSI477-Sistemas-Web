// CommonJS
// const os = require('os')
// ES Modules
import os from 'os' // export default
// import { connect } from 'connection.js' // export {  }

import express from 'express'

// -- Introdução
console.log('Olá, mundo!')

setTimeout(() => {
    console.log('Introdução ao NodeJS')
}, 1)

console.log('Sistemas Web I')

// -- Server info
console.log(os.platform())
console.log(os.hostname())

// -- API: web server
// GET, POST, PUT/PATCH, DELETE
const app = express()
const PORT = 5000

// Rotas
// Parâmetros -> endereço (endpoint), callback: request, response
app.get('/', (request, response) => {
    response.send('<h1>Server is running.</h1>')
})

// ... demais rotas

// Iniciar o server - "ouvir"/esperar as requisições
app.listen(PORT, () => {
    console.log('Server started.')
})