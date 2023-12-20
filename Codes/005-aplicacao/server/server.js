import express, { response } from 'express'
import { prisma } from "./src/database/client.js"
import { estadoRouter } from './src/routes/estados.js';

const server = express();
const PORT = 5000

// Routes
server.get('/', (request, response) => {
    response.json({
        message: 'Status: Server is running.'
    })
})

server.use(express.json())
server.use(estadoRouter);

server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}`)
})