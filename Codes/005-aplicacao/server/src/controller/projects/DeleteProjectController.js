import { prisma } from "../../database/clients.js";

export class DeleteProjectController {

    async handle(request, response) {
        
        const { id } = request.body

        try {

            const project = await prisma.project.delete({
                where: {
                    id
                }
            })

            return response.json({
                message: "Project deleted.",
                project})
            
        } catch (error) {
            return response.status(400).json({
                message: "Invalid request.",
                id,
                error
            })
        }

    }

}