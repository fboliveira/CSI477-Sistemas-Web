import express from 'express';


import { mainRouter } from './routes/main.js';


const PORT = 5555;

const app = express();
app.use(express.json());

// Routes:
app.use(mainRouter);


// Server - start/listen
app.listen(PORT, () => {

    console.log(`[SERVER] Server is running on port ${PORT}`);

});