import express from 'express'
// Demais imports
// Imports - rotas
import { mainRouter } from './routes/main.js'
import { projectRouter } from './routes/projects.js'
import { taskRouter } from './routes/tasks.js'

// Demais pacotes
import cors from 'cors'

// Config
// Config timezone
process.env.TZ='America/Sao_Paulo'

// Parâmetros
const PORT = 5000 // .env, environment variables, ...

// Server setup
const server = express()
// Request -> json
server.use(express.json())
// Enable CORS requests
server.use(cors())

// Atribuição/utilização das rotas importadas
server.use(mainRouter)
server.use(projectRouter)
server.use(taskRouter)

// Start - listen
server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}.`)
})