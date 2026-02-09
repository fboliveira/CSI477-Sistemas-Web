import { Router } from "express"
import TaskController from "../controllers/TaskController.js"

const taskRouter = Router()
const taskController = new TaskController()

const url = '/api/tasks'

// Get ALL
taskRouter.get(url, taskController.getAll)

// Get ...

// Get by ID
taskRouter.get(`${url}/:id`, taskController.getById)

// Create
taskRouter.post(url, taskController.create)

// Update
taskRouter.patch(url, taskController.update)
taskRouter.put(url, taskController.update)

// Delete
taskRouter.delete(url, taskController.delete)

export { taskRouter }