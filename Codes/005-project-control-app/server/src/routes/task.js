import { Router } from "express"
import TaskController from "../controllers/TaskController.js"

const taskRouter = Router()
const taskController = new TaskController()

const url = '/api/tasks'

// Get ALL
taskRouter.get(url, taskController.getAll)

// Get ...

// Create
taskRouter.post(url, taskController.create)

// Update

// Delete

export { taskRouter }