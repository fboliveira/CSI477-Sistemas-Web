import { Router } from "express";
import ProjectController from "../controller/projects.js";

const projectRouter = Router();

// Instância do controller
const projectController = new ProjectController();

// Endpoints: CRUD -> api

// CREATE: POST
projectRouter.post('/api/projects', projectController.create);

// READ: GET 
// -- Get all
projectRouter.get('/api/projects', projectController.getAll)
// -- Get by id
projectRouter.get('/api/projects/:id', projectController.getById)


// UPDATE
projectRouter.patch('/api/projects', projectController.update)
projectRouter.put('/api/projects', projectController.update)

// DELETE
projectRouter.delete('/api/projects', projectController.delete)

export { projectRouter }