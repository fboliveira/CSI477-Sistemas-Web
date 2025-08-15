import { Router } from "express";

import TaskController from "../controllers/TaskController.js";

const taskRouter = Router()
const taskController = new TaskController()

// Get all
taskRouter.get('/api/tasks', taskController.getAll)

// Create
taskRouter.post('/api/tasks', taskController.create)

export { taskRouter } 