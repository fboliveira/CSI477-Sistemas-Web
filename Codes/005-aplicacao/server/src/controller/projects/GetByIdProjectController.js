import { prisma } from "../../database/clients.js"

export class GetByIdEstadoController {

    async handle(request, response) {

        const { id } = request.params
        const project = await prisma.project.findFirstOrThrow({
            where: {
                id: parseInt(id)
            }
        })
        
        return response.json(project)

    }

}