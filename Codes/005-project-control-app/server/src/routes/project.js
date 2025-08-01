import { Router } from "express";
import ProjectController from "../controllers/ProjectController.js";

const projectRouter = Router();

const projectController = new ProjectController();

// Endpoints - CRUD
projectRouter.get("/api/projects", projectController.getAll);
projectRouter.post("/api/projects", projectController.create)
projectRouter.get("/api/projects/:id", projectController.getById)
projectRouter.get("/api/projects/:name/name", projectController.getByName)

export { projectRouter };
