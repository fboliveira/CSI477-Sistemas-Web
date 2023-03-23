import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

import { mainRouter } from './routes/main.js';
import { estadoRouter } from './routes/estado.js';
import { cidadeRouter } from './routes/cidades.js';
import { userRouter } from './routes/users.js'

dotenv.config();

const PORT = process.env.PORT || 5555;

const app = express();
app.use(express.json());
app.use(cors());

// Routes:
app.use(mainRouter);
app.use(estadoRouter);
app.use(cidadeRouter);
app.use(userRouter);

// Server - start/listen
app.listen(PORT, () => {

    console.log(`[SERVER] Server is running on port ${PORT}`);

});