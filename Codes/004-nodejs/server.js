import os from 'os'
import express from 'express'

// Server info ...
console.log('Olá, mundo!');

const user = os.userInfo();

function systemInfo() {

    console.log("Plataforma: " + os.platform());
    console.log(`Total de memória: ${os.totalmem()}`);

}

systemInfo();

// ---

// API: web server -- Express
// GET, POST, PATCH/UPDATE, DELETE
const app = express()
const PORT = 5000

// Definição das rotas do servidor
app.get('/', (request, response) =>{

    response.json({
        message: 'Server is running.'
    })

})

// Iniciar o servidor 
app.listen(PORT);

export { user, systemInfo }