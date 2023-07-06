import express from 'express'

import { mainRouter } from './routes/main.js';
import { estadoRouter } from './routes/estados.js';
import { cidadeRouter } from './routes/cidades.js';

const app = express();
app.use(express.json());

const PORT = 5555;

// Routes:
app.use(mainRouter);
app.use(estadoRouter);
app.use(cidadeRouter);

// Server - start/listen:
app.listen(PORT, () =>{
    console.log(`[SERVER] Server is running on port ${PORT}`);
});