import express from 'express'

const server = express();
const PORT = 5555

// Routes
server.get('/', (request, response) => {
    response.json({
        message: 'Status: Server is running.'
    })
})

server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}`)
})