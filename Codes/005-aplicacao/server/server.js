import express from 'express'
import cors from 'cors';
import { estadoRouter } from './src/routes/estados.js';
import { cidadeRouter } from './src/routes/cidades.js'

const server = express();
const PORT = 5000

// Routes
server.get('/', (request, response) => {
    response.json({
        message: 'Status: Server is running.'
    })
})

server.use(express.json())
server.use(cors());
server.use(estadoRouter);
server.use(cidadeRouter);

server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}`)
})