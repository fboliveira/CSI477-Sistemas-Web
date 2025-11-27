import { Router } from "express";
import ProjectController from "../controllers/ProjectController.js";

// Instância do router
const projectRouter = Router()

// Instância do controller
const projectController = new ProjectController()

// Endpoints - CRUD -> api
// Get All
projectRouter.get('/api/projects', projectController.getAll)

// Get By Id

// Create

// Update

// Delete

export { projectRouter }

