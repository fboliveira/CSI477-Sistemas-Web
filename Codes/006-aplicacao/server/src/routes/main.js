import { Router } from 'express';
import { CreateEstadoController } from '../controller/estados/CreateEstadoController.js';
import { GetAllEstadoController } from '../controller/estados/GetAllEstadoController.js';
import { GetByIdEstadoController } from '../controller/estados/GetByIdEstadoController.js';

const estadoRouter = Router();

const createEstadoController = new CreateEstadoController();
const getAllEstadoController = new GetAllEstadoController();
const getByIdEstadoController = new GetByIdEstadoController();

estadoRouter.get('/', (request, response) => {
    response.json({
        message: "Server is running."
    })
})

estadoRouter.post('/estados', createEstadoController.handle);
estadoRouter.get('/estados', getAllEstadoController.handle);
estadoRouter.get('/estados/:id', getByIdEstadoController.handle);

export { estadoRouter }