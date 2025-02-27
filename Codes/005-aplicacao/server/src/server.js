import express from 'express'
import { mainRouter } from './routes/main.js'
import { projectsRouter } from './routes/projects.js'
import { taskRouter } from './routes/tasks.js'

const server = express()
const PORT = 5550

server.use(express.json())

// Routes
server.use(mainRouter)
server.use(projectsRouter)
server.use(taskRouter)


// Start - listen:
server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}`)
})
