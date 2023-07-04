import { Router } from 'express'
import { GetAllEstadoController } from '../controller/estados/GetAllEstadoController.js';
import { CreateEstadoController } from '../controller/estados/CreateEstadoController.js';

import { GetByIdEstadoController } from '../controller/estados/GetByIdEstadoController.js';

import { UpdateEstadoController } from '../controller/estados/UpdateEstadoController.js';

import { DeleteEstadoController } from '../controller/estados/DeleteEstadoController.js';
  
const estadoRouter = Router();

const getAllEstadoController = new  GetAllEstadoController();
const createEstadoController = new CreateEstadoController();
const getByIdEstadoController = new GetByIdEstadoController();
const updateEstadoController = new UpdateEstadoController();
const deleteEstadoController = new DeleteEstadoController();

// Get All
estadoRouter.get('/estados', getAllEstadoController.handle);

// Get By Id
estadoRouter.get('/estados/:id', getByIdEstadoController.handle);

// Create
estadoRouter.post('/estados', createEstadoController.handle);

// Update
estadoRouter.put('/estados', updateEstadoController.handle);

// Delete
estadoRouter.delete('/estados', deleteEstadoController.handle);

// Export -- Router
export { estadoRouter }
