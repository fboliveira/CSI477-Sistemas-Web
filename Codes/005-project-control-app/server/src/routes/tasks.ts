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

// ...

export { taskRouter }