import express from 'express'
// Demais imports
// Imports - rotas
import { mainRouter } from './routes/main.js'
import { projectRouter } from './routes/projects.js'

// Demais pacotes

// Config

// Parâmetros
const PORT = 5000 // .env, environment variables, ...

// Server setup
const server = express()
// Request -> json
server.use(express.json())

// Atribuição/utilização das rotas importadas
server.use(mainRouter)
server.use(projectRouter)


// Start - listen
server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}.`)
})