import express, { response } from 'express'
import { prisma } from "./src/database/client.js"

const server = express();
const PORT = 5000

// Routes
server.get('/', (request, response) => {
    response.json({
        message: 'Status: Server is running.'
    })
})

server.get('/estados', async (request, response) => {
    const estados = await prisma.estado.findMany();
    return response.json(estados);

})

server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}`)
})