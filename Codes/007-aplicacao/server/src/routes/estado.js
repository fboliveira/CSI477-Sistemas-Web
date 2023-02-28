import { Router } from "express";

import { GetAllEstadoController } from "../controller/estados/GetAllEstadoController.js";

import { CreateEstadoController } from "../controller/estados/CreateEstadoController.js";

import { GetByIdEstadoController } from "../controller/estados/GetByIdEstadoController.js";


const estadoRouter = Router();

const getAllEstadoController = new GetAllEstadoController();
const createEstadoController = new CreateEstadoController();
const getByIdEstadoController = new GetByIdEstadoController()

// Get All 
estadoRouter.get('/estados', getAllEstadoController.handle);

// Create - Post
estadoRouter.post('/estados', createEstadoController.handle);

// Get By ID
estadoRouter.get('/estados/:id', getByIdEstadoController.handle);

// Update

// Delete

// Export - Router
export { estadoRouter }