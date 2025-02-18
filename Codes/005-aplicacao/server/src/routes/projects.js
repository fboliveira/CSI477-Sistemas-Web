import { Router } from "express";

import { GetAllProjectController } from "../controller/projects/GetAllProjectController.js";

const projectsRouter = Router()

// Get all - R
const getAllProjectController = new GetAllProjectController();
projectsRouter.get('/projects', getAllProjectController.handle)

// Get by id - R

// Create - C

// Update: PUT/PATCH - U

// Delete - D

export { projectsRouter }