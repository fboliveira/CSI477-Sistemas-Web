import express from "express";
import { mainRouter } from "./routes/main.js";
import { projectRouter } from "./routes/project.js";
import { taskRouter } from "./routes/task.js";
import cors from "cors"

// Config timezone
process.env.TZ='America/Sao_Paulo'

// Routes - import

// Server
const server = express();
const PORT = 5000; // .env, enviroment variables, ...

// setup
server.use(express.json())
server.use(cors())

// Routes
server.use(mainRouter);
server.use(projectRouter);
server.use(taskRouter)

// Start - listen
server.listen(PORT, () => {
  console.log(`[SERVER] Server is running on port ${PORT}.`);
});
