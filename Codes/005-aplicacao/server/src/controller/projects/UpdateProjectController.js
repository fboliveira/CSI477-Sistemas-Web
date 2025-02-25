import { prisma } from "../../database/clients.js"

export class UpdateProjectController {

    async handle(request, response) {

        const { id, name } = request.body

        try {
            
            const project = await prisma.project.update({
                where: {
                    id
                },

                data: {
                    name
                }
            })

            response.json(project)

        } catch (error) {

            response.status(400).json({
                message: "Invalid request.",
                error
            })
            
        }

    }
}