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
projectRouter.get('/api/projects/:id', projectController.getById)

// Get By Name
projectRouter.get('/api/projects/:name', projectController.getByName)

// Create
projectRouter.post('/api/projects', projectController.create)

// Update

// Delete

export { projectRouter }

