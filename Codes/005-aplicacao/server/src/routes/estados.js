import { Router } from 'express'
import { GetAllEstadoController } from '../controller/estados/GetAllEstadoController.js';

const estadoRouter = Router();

const getAllEstadoController = new  GetAllEstadoController();

// Get All
estadoRouter.get('/estados', getAllEstadoController.handle);

// Create



// Export -- Router
export { estadoRouter }
