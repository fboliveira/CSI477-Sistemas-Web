//const os = require('os');
import os from 'os';
import express from 'express';

// Server info ...
console.log('Olá, mundo!');

const user = os.userInfo();

function systemInfo() {
    console.log("Plataforma: " + os.platform());
    console.log(`Total de memória: ${os.totalmem()} `);
    console.log(`Memória livre: ${os.freemem()}`);
    console.log(`Usuário: ${user.username}`);
    console.log(`Id: ${user.uid}`);
    console.log(`Pasta: ${user.homedir}`);
}
 
systemInfo();

// -- Server info

// Web server - API/Express
const app = express();
const port = 5000;

// Criação das rotas do servidor
app.get('/', (request, response) => {

    response.json(
        {
            id: 1,
            message: 'Olá, mundo!',
            server_status: 'Server is running.'

        }
    );

});

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});

//module.exports = { user, systemInfo };
export { user, systemInfo }; 