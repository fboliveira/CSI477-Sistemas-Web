import app from './routes.js';
import { connect } from './database.js';

const port = 3000;

// Rotas

// ...

// Iniciar o servidor: start -> porta
app.listen(port, () => {
    console.log(`Servidor iniciado - porta ${port}.`);
});

connect();