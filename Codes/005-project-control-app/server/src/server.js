import express from "express";
import { mainRouter } from "./routes/main.js";

// Routes - import

// Server
const server = express();
const PORT = 5000; // .env, enviroment variables, ...

// Routes
server.use(mainRouter);

// Start - listen
server.listen(PORT, () => {
  console.log(`[SERVER] Server is running on port ${PORT}.`);
});
