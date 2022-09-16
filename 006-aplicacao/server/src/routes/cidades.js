import { Router } from 'express';
import { CreateCidadeController } from '../controller/cidades/CreateCidadeController.js';
import { GetAllCidadeController } from '../controller/cidades/GetAllCidadeController.js';
import { GetByIdCidadeController } from '../controller/cidades/GetByIdCidadeController.js';
import { UpdateCidadeController } from '../controller/cidades/UpdateCidadeController.js';

const cidadeRouter = Router();

const createCidadeController = new CreateCidadeController();
const getAllCidadeController = new GetAllCidadeController();
const getByIdCidadeController = new GetByIdCidadeController();
const updateCidadeController = new UpdateCidadeController();

cidadeRouter.post('/cidades', createCidadeController.handle);
cidadeRouter.get('/cidades', getAllCidadeController.handle);
cidadeRouter.get('/cidades/:id', getByIdCidadeController.handle);

cidadeRouter.put('/cidades', updateCidadeController.handle);

export { cidadeRouter };