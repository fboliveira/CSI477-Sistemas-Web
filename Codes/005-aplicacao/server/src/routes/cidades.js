import { Router } from "express";
import { GetAllCidadeController } from "../controller/cidades/GetAllCidadeController.js";
import { GetByIdCidadeController } from "../controller/cidades/GetByIdCidadeController.js";
import { CreateCidadeController } from "../controller/cidades/CreateCidadeController.js"

const cidadeRouter = Router()

// Get All
const getAllEstadoController = new GetAllCidadeController();
cidadeRouter.get('/cidades', getAllEstadoController.handle);

// Get by ID
const getByIdCidadeController = new GetByIdCidadeController();
cidadeRouter.get('/cidades/:id', getByIdCidadeController.handle)

// Create
const createCidadeController = new CreateCidadeController();
cidadeRouter.post('/cidades', createCidadeController.handle)

// Update

// Delete

export { cidadeRouter }