import express from "express";
import { mainRouter } from "./routes/main.js";
import { projectRouter } from "./routes/project.js";

// Routes - import

// Server
const server = express();
const PORT = 5000; // .env, enviroment variables, ...

// setup
server.use(express.json())

// Routes
server.use(mainRouter);
server.use(projectRouter);

// Start - listen
server.listen(PORT, () => {
  console.log(`[SERVER] Server is running on port ${PORT}.`);
});
