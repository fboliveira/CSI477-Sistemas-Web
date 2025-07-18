// CRUD - projects
// C: create
// R: read - get
// U: update
// D: delete

import { prisma } from "../database/client.js";

export default class ProjectController {
  async getAll(request, response) {
    const projects = await prisma.project.findMany();
    return response.json(projects);
  }
}
