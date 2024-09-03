import { Router } from "express";
import { GetAllCidadeController } from "../controller/cidades/GetAllCidadeController.js";
import { GetByIdCidadeController } from "../controller/cidades/GetByIdCidadeController.js";
import { CreateCidadeController } from "../controller/cidades/CreateCidadeController.js"
import { UpdateCidadeController } from "../controller/cidades/UpdateCidadeController.js";
import { DeleteCidadeController } from "../controller/cidades/DeleteCidadeController.js";

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
const updateCidadeController = new UpdateCidadeController();
cidadeRouter.patch('/cidades', updateCidadeController.handle)

// Delete
const deleteCidadeController = new DeleteCidadeController()
cidadeRouter.delete('/cidades', deleteCidadeController.handle)

export { cidadeRouter }