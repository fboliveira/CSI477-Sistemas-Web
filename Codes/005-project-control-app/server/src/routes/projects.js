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

// Create -> método POST
projectRouter.post('/api/projects', projectController.create)


// Export router
export { projectRouter }