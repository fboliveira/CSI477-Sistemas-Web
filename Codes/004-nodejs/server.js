// ComonJS
// const os = require('os')
// ES Modules
import os from 'os'
import express from 'express'

// Server info
console.log("Olá, mundo!")

console.log(os.platform())
console.log(os.totalmem())


// API: web server - express.js
// GET, POST, PATCH/PUT (update), DELETE
const app = express()
const PORT = 5000


// Rotas
// Parâmetros: endereço, callback: request, response
app.get('/', (request, response) => {

    response.json({
        message: 'Server is running.'
    })

})

// Iniciar o servidor
app.listen(PORT, () => {
    console.log("Server started.")
})