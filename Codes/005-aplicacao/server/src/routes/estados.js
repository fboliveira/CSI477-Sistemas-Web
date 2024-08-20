import { Router } from "express";
import { GetAllEstadoController } from "../controller/estados/GetAllEstadoController.js";

// Instância do router
const estadoRouter = Router()

// -- Definição das rotas

// Get all
// -- Instância do controller
const getAllEstadoController = new GetAllEstadoController();
// -- Definir a rota para o método do controller
estadoRouter.get('/estados', getAllEstadoController.handle)

// Get by Id

// Create

// Update

// Delete

export { estadoRouter }