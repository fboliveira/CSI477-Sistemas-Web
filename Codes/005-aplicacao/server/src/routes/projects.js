import { Router } from "express";

import { GetAllProjectController } from "../controller/projects/GetAllProjectController.js";
import { GetByIdProjectController } from "../controller/projects/GetByIdProjectController.js";

import { CreateProjectController } from "../controller/projects/CreateProjectController.js";

import { UpdateProjectController } from "../controller/projects/UpdateProjectController.js";

import { DeleteProjectController } from "../controller/projects/DeleteProjectController.js";

const projectsRouter = Router()

// Get all - R
const getAllProjectController = new GetAllProjectController();
projectsRouter.get('/projects', getAllProjectController.handle)

// Get by id - R
const getByIdProjectController = new GetByIdProjectController()
projectsRouter.get('/projects/:id', getByIdProjectController.handle)

// Create - C
const createProjectController = new CreateProjectController()
projectsRouter.post('/projects', createProjectController.handle)

// Update: PUT/PATCH - U
const updateProjectController = new UpdateProjectController()
projectsRouter.patch('/projects', updateProjectController.handle)
projectsRouter.put('/projects', updateProjectController.handle)

// Delete - D
const deleteProjectController = new DeleteProjectController()
projectsRouter.delete('/projects', deleteProjectController.handle)

export { projectsRouter }