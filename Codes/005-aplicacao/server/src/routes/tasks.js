import { Router } from "express";

import { CreateTaskController } from "../controller/tasks/CreateTaskController.js";
const taskRouter = Router();

import { GetAllTaskController } from "../controller/tasks/GetAllTaskController.js";

import { GetByIdTaskController } from "../controller/tasks/GetByIdTaskController.js";

// get all
const getAllTaskController = new GetAllTaskController()
taskRouter.get('/tasks', getAllTaskController.handle)

// get by id
const getByIdTaskController = new GetByIdTaskController()
taskRouter.get('/tasks/:id', getByIdTaskController.handle)

// create
const createTaskController = new CreateTaskController()
taskRouter.post('/tasks', createTaskController.handle)

// update

// delete


export { taskRouter }