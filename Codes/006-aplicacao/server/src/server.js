import express from 'express';
import { estadoRouter } from './routes/main.js';
import { cidadeRouter } from './routes/cidades.js';

const PORT = 3000; //process.env.PORT;

const app = express();

app.use(express.json());
app.use(estadoRouter);
app.use(cidadeRouter);

app.listen(PORT, () =>{
    console.log(`[SERVER] Server is running on port ${PORT}`);
})