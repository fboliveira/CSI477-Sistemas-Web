import { Router } from "express";
import { GetAllEstadoController } from "../controller/estados/GetAllEstadoController.js";
import { GetByIdEstadoController } from "../controller/estados/GetByIdEstadoController.js";
import { CreateEstadoController } from "../controller/estados/CreateEstadoController.js";
import { UpdateEstadoController } from "../controller/estados/UpdateEstadoController.js";
import { DeleteEstadoController } from "../controller/estados/DeleteEstadoController.js";

// Instância do router
const estadoRouter = Router()

// -- Definição das rotas

// Get all
// -- Instância do controller
const getAllEstadoController = new GetAllEstadoController();
// -- Definir a rota para o método do controller
estadoRouter.get('/estados', getAllEstadoController.handle)

// Get by Id
const getByIdEstadoController = new GetByIdEstadoController()
estadoRouter.get('/estados/:id', getByIdEstadoController.handle)

// Create
const createEstadoController = new CreateEstadoController();
estadoRouter.post('/estados', createEstadoController.handle)

// Update
const updateEstadoController = new UpdateEstadoController()
// PUT: todos os dados do recurso são atualizados
// PATCH: partes dos dados do recurso
estadoRouter.patch('/estados', updateEstadoController.handle)

// Delete
const deleteEstadoController = new DeleteEstadoController()
estadoRouter.delete('/estados', deleteEstadoController.handle)

export { estadoRouter }