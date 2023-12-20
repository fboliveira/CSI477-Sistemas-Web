import { prisma } from "../../database/client.js";

export class DeleteEstadoController {

    async handle(request, response) {

        const { id } = request.body

        const estado = await prisma.estado.delete({
            where: {
                id
            }
        })

        return response.json(estado)

    }

}