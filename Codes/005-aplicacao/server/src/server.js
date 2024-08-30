import express from 'express'
// Import Routes
import { estadoRouter } from './routes/estados.js'
import { cidadeRouter } from './routes/cidades.js'

const server = express()
const PORT = 5000

// Routes
server.get('/', (request, response) =>{
    response.json({
        message: 'Status: Server is running.'
    })
})

server.use(express.json())
server.use([estadoRouter, cidadeRouter])


// Start - listen
server.listen(PORT, () => {
    console.log(`[SERVER] Server is runing on port ${PORT}.`)
})
