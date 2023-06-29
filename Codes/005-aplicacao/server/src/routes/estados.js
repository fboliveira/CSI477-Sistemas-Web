import { Router } from 'express'
import { GetAllEstadoController } from '../controller/estados/GetAllEstadoController.js';
import { CreateEstadoController } from '../controller/estados/CreateEstadoController.js';

import { GetByIdEstadoController } from '../controller/estados/GetByIdEstadoController.js';
 
const estadoRouter = Router();

const getAllEstadoController = new  GetAllEstadoController();
const createEstadoController = new CreateEstadoController();
const getByIdEstadoController = new GetByIdEstadoController();

// Get All
estadoRouter.get('/estados', getAllEstadoController.handle);

// Get By Id
estadoRouter.get('/estados/:id', getByIdEstadoController.handle);

// Create
estadoRouter.post('/estados', createEstadoController.handle);



// Export -- Router
export { estadoRouter }
