import express from 'express'
import { mainRouter } from './routes/main.js'
import { projectsRouter } from './routes/projects.js'

const server = express()
const PORT = 5550

// Routes
server.use(mainRouter)
server.use(projectsRouter)


// Start - listen:
server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}`)
})
