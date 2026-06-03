import express from 'express'
// Demais imports
// Imports - rotas
import { mainRouter } from './routes/main.js'

// Demais pacotes

// Config

// Parâmetros
const PORT = 5000 // .env, environment variables, ...

// Server setup
const server = express()

// Atribuição/utilização das rotas importadas
server.use(mainRouter)


// Start - listen
server.listen(PORT)