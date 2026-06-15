// CommonJS
// const os = require('os')

// ESModules
import os from 'os'
import express from 'express'


// Server info
console.log("Olá, mundo!")
console.log(os.platform())
console.log(os.totalmem())

// Server - API: webserver
// GET, POST, PATCH/PUT (update), DELETE
// Instância do express - server
const server = express()
const PORT = 5000

// Rotas - endpoints
// Parâmetros: endereço, callback: request, response
server.get('/', (request, response) => {
    response.json({
        id: 1,
        message: "Server is running."
    })
})

server.get('/admin', (request, response) => {
    response.status(401).send("You shall not pass.")
})


// Iniciar o servidor
server.listen(PORT, () => {
    console.log("Server started.")
})