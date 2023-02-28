import express from 'express';


import { mainRouter } from './routes/main.js';
import { estadoRouter } from './routes/estado.js';

const PORT = 3333;

const app = express();
app.use(express.json());

// Routes:
app.use(mainRouter);
app.use(estadoRouter);


// Server - start/listen
app.listen(PORT, () => {

    console.log(`[SERVER] Server is running on port ${PORT}`);

});