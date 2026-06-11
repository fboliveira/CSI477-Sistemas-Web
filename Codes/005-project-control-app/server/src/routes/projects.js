import { Router } from "express"
import ProjectController from "../controller/ProjectController.js"

// Instância do Router
const projectRouter = Router()

// Instância do controller
const projectController = new ProjectController()

// Endpoints -> CRUD: api
// Get All -> método http: get / rota:
projectRouter.get('/api/projects', projectController.getAll)

// ...


// Export router
export { projectRouter }