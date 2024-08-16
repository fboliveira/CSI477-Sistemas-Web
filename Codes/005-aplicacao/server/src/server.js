import express from 'express'
// Import Routes

const server = express()
const PORT = 5000

// Routes
server.get('/', (request, response) =>{
    response.json({
        message: 'Status: Server is running.'
    })
})


// Start - listen
server.listen(PORT, () => {
    console.log(`[SERVER] Server is runing on port ${PORT}.`)
})
