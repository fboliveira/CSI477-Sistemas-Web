// Imports
import express from "express";
import { mainRouter } from "./routes/main.js";

// Routes - import

// Configurações (.env)
const PORT = 5000;

// Definição do app/server
const app = express();

// Configurações do server
// - Padrão de comunicação: requisição e resposta -> JSON
app.use(express.json())

// Routes - criadas e/ou importados
// -- Endpoints: GET, POST, PUT/PATCH, DELETE
app.use(mainRouter);

// Start - listen
app.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}.`)
})
