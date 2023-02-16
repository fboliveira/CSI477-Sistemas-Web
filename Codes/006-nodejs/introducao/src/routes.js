import express from 'express';

const app = express();
app.use(express.json());


app.get('/', (request, response) => {
    response.send('Página principal');
});

// request.params -> /url/endpoint/:qualquer
app.get('/data/:id', (request, response) => {

    const { id } = request.params;

    response.send({
        id,
        nome: "Fernando B Oliveira",
        cpf: "123.456.789-00",
        endpoint: "/data/:id"
    });

});

app.post('/data', (request, response) =>{

    const { id, name, barcode } = request.body;

    response.json({
        id,
        name,
        barcode,
        endpoint: "POST: /data"
    });

});

const config = {
    port: 4000,
    message: "Server is running..."
}

export default app;
export { config };
