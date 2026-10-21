// Imports
import express from "express";

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
app.get('/', (request, response) => {
    response.json({
        id: 1,
        message: `[OK] Server is alive! Port: ${PORT}`
    })
})

app.get('/admin', (request, response) => {
    response
        .status(401)
        .send("<h1>Unauthorized.</h1>");
})

// Start - listen
app.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}.`)
})