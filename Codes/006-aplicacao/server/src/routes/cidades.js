import { Router } from 'express';
import { CreateCidadeController } from '../controller/cidades/CreateCidadeController.js';
import { DeleteCidadeController } from '../controller/cidades/DeleteCidadeController.js';
import { GetAllCidadeController } from '../controller/cidades/GetAllCidadeController.js';
import { GetByIdCidadeController } from '../controller/cidades/GetByIdCidadeController.js';
import { UpdateCidadeController } from '../controller/cidades/UpdateCidadeController.js';

const cidadeRouter = Router();

const createCidadeController = new CreateCidadeController();
const getAllCidadeController = new GetAllCidadeController();
const getByIdCidadeController = new GetByIdCidadeController();
const updateCidadeController = new UpdateCidadeController();
const deleteCidadeController = new DeleteCidadeController();

cidadeRouter.post('/cidades', createCidadeController.handle);
cidadeRouter.get('/cidades', getAllCidadeController.handle);
cidadeRouter.get('/cidades/:id', getByIdCidadeController.handle);

cidadeRouter.put('/cidades', updateCidadeController.handle);

cidadeRouter.delete('/cidades', deleteCidadeController.handle);

export { cidadeRouter };