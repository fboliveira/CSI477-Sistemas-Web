import express from 'express';
import cors from 'cors';


import { mainRouter } from './routes/main.js';
import { estadoRouter } from './routes/estado.js';
import { cidadeRouter } from './routes/cidades.js';

const PORT = 3333;

const app = express();
app.use(express.json());
app.use(cors());

// Routes:
app.use(mainRouter);
app.use(estadoRouter);
app.use(cidadeRouter);

// Server - start/listen
app.listen(PORT, () => {

    console.log(`[SERVER] Server is running on port ${PORT}`);

});