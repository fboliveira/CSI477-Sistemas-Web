import { prisma } from "../../database/clients.js";

export class GetAllProjectController {

    async handle(request, response) {

        const projects = await prisma.project.findMany()
        return response.json(projects)

    }

}