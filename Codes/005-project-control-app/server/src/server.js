import express from "express"

// Routes - import

// Configurações (.env)
const PORT = 5000

// Server
const server = express();

// Routes

// Start - listen
server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}.`)
})
