import { Router } from "express";
import { GetAllEnderecoController } from "../controller/enderecos/GetAllEnderecoController.js"

import { CreateEnderecoController } from "../controller/enderecos/CreateEnderecoController.js"

const enderecoRouter = Router();

const getAllEnderecoController = new GetAllEnderecoController();
enderecoRouter.get('/endereco', getAllEnderecoController.handle);

const createEnderecoController = new CreateEnderecoController();
enderecoRouter.post('/endereco', createEnderecoController.handle);


export { enderecoRouter };