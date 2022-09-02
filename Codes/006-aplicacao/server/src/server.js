import express from 'express';
import { estadoRouter } from './routes/main.js';

const PORT = 3000; //process.env.PORT;

const app = express();

app.use(express.json());
app.use(estadoRouter);

app.listen(PORT, () =>{
    console.log(`[SERVER] Server is running on port ${PORT}`);
})