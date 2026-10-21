// Imports
import express from "express";

import { mainRouter } from "./routes/main.js";
import { env } from "./config/env.js";

// Routes - import

// Configurações (.env)

// Definição do app/server
const app = express();

// Configurações do server
// - Padrão de comunicação: requisição e resposta -> JSON
app.use(express.json())

// Routes - criadas e/ou importados
// -- Endpoints: GET, POST, PUT/PATCH, DELETE
app.use(mainRouter);

// Start - listen
app.listen(env.PORT, () => {
    console.log(`[SERVER] Server is running on port ${env.PORT}.`)
})
