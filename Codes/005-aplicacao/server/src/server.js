import express from 'express'

import { mainRouter } from './routes/main.js';
import { estadoRouter } from './routes/estados.js';
import { cidadeRouter } from './routes/cidades.js';
import { enderecoRouter } from './routes/enderecos.js';

import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5555;

// Routes:
app.use(mainRouter);
app.use(estadoRouter);
app.use(cidadeRouter);
app.use(enderecoRouter);

// Server - start/listen:
app.listen(PORT, () =>{
    console.log(`[SERVER] Server is running on port ${PORT}`);
});