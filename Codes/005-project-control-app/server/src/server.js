import express from "express"
import cors from "cors"

// Routes - import
import { mainRouter } from "./routes/main.js";
import { projectRouter } from "./routes/project.js";
import { taskRouter } from "./routes/task.js";

// Configurações (.env)
const PORT = 5000

// Server
const server = express();

// Configuration
server.use(express.json())
server.use(cors())

// Add Routes to server
server.use(mainRouter)
server.use(projectRouter)
server.use(taskRouter)

// Start - listen
server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}.`)
})
