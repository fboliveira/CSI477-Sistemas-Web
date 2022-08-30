import express from 'express';

const app = express();
app.use(express.json());

// Routes
app.get('/', ( request, response ) => {
    response.send('Página principal');
});

app.post('/data', ( request, response ) => {

    const { id, name } = request.body;

    response.json({
        id,
        name
    });

})

app.get('/data/:id', ( request, response ) => {
    const { id } = request.params;
    response.send({
        id,
        name: "get:data/:id"
        });
    //console.log(request.query);
})

app.get('/data', (request, response) => {
    response.send(request.query);
});

const data = {
    id: 344,
    name: "Fernando"
}

export default app;