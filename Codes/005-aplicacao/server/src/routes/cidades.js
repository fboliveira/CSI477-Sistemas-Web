import { Router } from "express";

import { GetAllCidadeController } from "../controller/cidades/GetAllCidadeController.js";

import { CreateCidadeController } from "../controller/cidades/CreateCidadeController.js";
 
const cidadeRouter = Router();


// Get all - (R)
const getAllCidadeController = new GetAllCidadeController();
cidadeRouter.get('/cidades', getAllCidadeController.handle);

// Create - (C)
const createCidadeController = new CreateCidadeController();
cidadeRouter.post('/cidades', createCidadeController.handle);

// Export - router
export { cidadeRouter }