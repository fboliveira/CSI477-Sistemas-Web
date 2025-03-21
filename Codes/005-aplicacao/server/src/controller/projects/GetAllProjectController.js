import { prisma } from "../../database/clients.js";

export class GetAllProjectController {

    async handle(request, response) {

        const projects = await prisma.project.findMany({
            include: {
                tasks: true
            }
        })
        return response.json(projects)

    }

}