import express from 'express'
import { mainRouter } from './routes/main.js'

const server = express()
const PORT = 5555

// Routes
server.use(mainRouter)


// Start - listen:
server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}`)
})
