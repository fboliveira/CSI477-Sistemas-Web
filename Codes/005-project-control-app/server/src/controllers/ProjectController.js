// CRUD - projects
// C: create
// R: read - get all / get by id /  get by name
// U: update
// D: delete

import { prisma } from "../repository/client.js";

export default class ProjectController {

    async getAll(request, response) {

        const projects = await prisma.project.findMany()

        return response.json(projects)

    }

    create(request, response) {
        
    }


}