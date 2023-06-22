import express from 'express'

import { mainRouter } from './routes/main.js';

const app = express();
app.use(express.json());

const PORT = 5555;

// Routes:
app.use(mainRouter);

// Server - start/listen:
app.listen(PORT, () =>{
    console.log(`[SERVER] Server is running on port ${PORT}`);
});