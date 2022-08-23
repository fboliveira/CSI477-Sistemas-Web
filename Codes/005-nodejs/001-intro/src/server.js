const express = require('express');

const app = express();

const port = 3000;

// Rotas
app.get('/', ( request, response ) => {
    response.send('Página principal');
});

app.post('/data', ( request, response ) => {

    response.json({
        id: 1356,
        firstName: 'Fernando B',
        lastName: 'Oliveira'
    });

})

// ...

// Iniciar o servidor: start -> porta
app.listen(port, () => {
    console.log(`Servidor iniciado - porta ${port}.`);
});