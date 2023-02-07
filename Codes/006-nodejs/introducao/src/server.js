// Import
import os from 'os';
import express from 'express';


// Rotas -- express.js

// Iniciar o servidor:
console.log('Hello world!');
console.log(`Servername: ${os.hostname()}`);

const freememory = os.freemem() / (1024 * 1024 * 1024);
const total = os.totalmem() / (1024 * 1024 * 1024);

console.log(`Free memory: ${freememory} GB`);
console.log(`Total: ${total} GB`);

// API Server ----
const server = express();

// Routes
server.get('/', ( request, response ) => {
    response.send('Página inicial da aplicação');
});

server.listen(4000, () => {
    console.log(`Server is running...`);
});

