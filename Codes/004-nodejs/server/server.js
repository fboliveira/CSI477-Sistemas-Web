import serverInfo from './monitor.js'
import express from 'express';

serverInfo()

// Webserver
// Porta - conexões - HTTP
// Express.js
const server = express()
const port = 5000

// Routes
server.get('/', (request, response) => {
    response.json(
        {
            message: 'Server is running.'
        }
    )
});

server.get('/estados', (request, response) => {
    response.status(401).send('Erro de acesso ao recurso.');
})

// Start - listen
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)    
})