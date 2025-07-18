import { Router } from "express";
import ProjectController from "../controllers/ProjectController.js";

const projectRouter = Router();

const projectController = new ProjectController();

// Endpoints - CRUD
projectRouter.get("/api/projects", projectController.getAll);

export { projectRouter };
