import express from "express"

// Routes - import
import { mainRouter } from "./routes/main.js";
import { projectRouter } from "./routes/project.js";

// Configurações (.env)
const PORT = 5000

// Server
const server = express();

// Add Routes to server
server.use(mainRouter)
server.use(projectRouter)

// Start - listen
server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}.`)
})
