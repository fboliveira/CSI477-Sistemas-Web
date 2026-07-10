import { Router } from "express";
import TaskController from "../controller/TaskController.js";

const taskRouter = Router()
const taskController = new TaskController()

const urlBase = '/api/tasks'

// Get all
taskRouter.get(urlBase, taskController.getAll)

// Create
taskRouter.post(urlBase, taskController.create)

// ...

export { taskRouter }