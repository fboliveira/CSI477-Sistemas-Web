// Imports
import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import { mainRouter } from "./routes/main.js";
import { projectRouter } from "./routes/projects.js";
import { taskRouter } from "./routes/tasks.js";

// Routes - import

// Configurações (.env)
// const PORT = 5000;

// Definição do app/server
const app = express();

// Configurações do server
// - Padrão de comunicação: requisição e resposta -> JSON
app.use(express.json())

// Enable CORS
app.use(cors())

// Routes - criadas e/ou importados
// -- Endpoints: GET, POST, PUT/PATCH, DELETE
app.use(mainRouter)
app.use(projectRouter)
app.use(taskRouter)

// Start - listen
app.listen(env.PORT, () => {
    console.log(`[SERVER] Server is running on port ${env.PORT}.`)
})