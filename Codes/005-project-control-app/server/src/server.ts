import express from "express"

import { mainRouter } from "./routes/main.ts";

// Configurações (.env)
const PORT = 5000

// Server
const server = express();

// Configuration
server.use(express.json())

// Add Routes to server
server.use(mainRouter)

// Start - listen
server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}.`)
})


