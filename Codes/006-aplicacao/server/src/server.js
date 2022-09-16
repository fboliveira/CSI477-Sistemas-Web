import express from 'express';
import { mainRouter } from './routes/main.js';
import { estadoRouter } from './routes/estados.js';
import { cidadeRouter } from './routes/cidades.js';

import cors from 'cors';

const PORT = 4000; //process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use(mainRouter);
app.use(estadoRouter);
app.use(cidadeRouter);

app.listen(PORT, () =>{
    console.log(`[SERVER] Server is running on port ${PORT}`);
})