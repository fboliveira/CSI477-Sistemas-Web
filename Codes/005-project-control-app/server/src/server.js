import express from "express"

// Routes - import
import { mainRouter } from "./routes/main.js";

// Configurações (.env)
const PORT = 5000

// Server
const server = express();

// Add Routes to server
server.use(mainRouter)

// Start - listen
server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}.`)
})
