import { Router } from "express";

import { GetAllCidadeController } from "../controller/cidades/GetAllCidadeController.js";

const cidadeRouter = Router();


// Get all - (R)
const getAllCidadeController = new GetAllCidadeController();
cidadeRouter.get('/cidades', getAllCidadeController.handle);


// Export - router
export { cidadeRouter }