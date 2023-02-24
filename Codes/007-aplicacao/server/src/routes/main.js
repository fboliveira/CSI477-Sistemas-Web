import { Router } from 'express';
import { GetAllEstadoController } from '../controller/estados/GetAllEstadoController.js';

const mainRouter = Router();

const getAllEstadoController = new GetAllEstadoController();

mainRouter.get('/', (request, response) => {
    response.status(401).send("<h1>Unauthorized.</h1>")
});

mainRouter.get('/admin', (request, response) => {

    response.json({

        message: "API Server is running."

    });

});

mainRouter.get('/estados', getAllEstadoController.handle);

export { mainRouter };