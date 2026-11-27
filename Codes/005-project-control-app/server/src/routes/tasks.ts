import { Router } from "express";
import TaskController from "../controller/tasks.js";

const taskRouter = Router()
const taskController = new TaskController();

const endpoint = '/api/tasks'

// Create: POST
taskRouter.post(endpoint, taskController.create)

// Get all: GET
taskRouter.get(endpoint, taskController.getAll)

// Get by id 

// Update: PUT/PATCH
taskRouter.put(endpoint, taskController.update)
taskRouter.patch(endpoint, taskController.update)

export { taskRouter }