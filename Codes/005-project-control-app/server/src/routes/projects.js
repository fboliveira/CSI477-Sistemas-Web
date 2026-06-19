import { Router } from "express"
import ProjectController from "../controller/ProjectController.js"

// Instância do Router
const projectRouter = Router()

// Instância do controller
const projectController = new ProjectController()

// Endpoints -> CRUD: api
// Get All -> método http: get / rota:
projectRouter.get('/api/projects', projectController.getAll)
// Get By ID -> método GET
projectRouter.get('/api/projects/:id', projectController.getById)
// Get By Name -> método GET
projectRouter.get('/api/projects/name/:name', projectController.getByName)

// Create -> método POST
projectRouter.post('/api/projects', projectController.create)

// Update -> métodos PUT or PATCH
projectRouter.put('/api/projects', projectController.update)
projectRouter.patch('/api/projects', projectController.update)

// Delete -> método DELETE
projectRouter.delete('/api/projects', projectController.delete)

// Export router
export { projectRouter }