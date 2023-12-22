import { Router } from 'express';
import { CreateCidadeController } from '../controller/cidades/CreateCidadeController.js';
import { GetAllCidadeController } from '../controller/cidades/GetAllCidadeController.js';
import { GetByIdCidadeController } from '../controller/cidades/GetByIdCidadeController.js';
import { UpdateCidadeController } from '../controller/cidades/UpdateCidadeController.js';

import { DeleteCidadeController } from '../controller/cidades/DeleteCidadeController.js';

const cidadeRouter = Router();

// Create
const createCidadeController = new CreateCidadeController();
cidadeRouter.post('/cidades', createCidadeController.handle);

// Get All
const getAllCidadeController = new GetAllCidadeController();
cidadeRouter.get('/cidades', getAllCidadeController.handle);

// Get By Id
const getByIdCidadeController = new GetByIdCidadeController();
cidadeRouter.get('/cidades/:id', getByIdCidadeController.handle);

// Update
const updateCidadeController = new UpdateCidadeController();
cidadeRouter.put('/cidades', updateCidadeController.handle);

// Delete
const deleteCidadeController = new DeleteCidadeController();
cidadeRouter.delete('/cidades', deleteCidadeController.handle);

export { cidadeRouter }