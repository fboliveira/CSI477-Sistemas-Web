import { prisma } from "../../database/client.js";


export class UpdateEstadoController {

    async handle(request, response) {

        // UseCase: update estado
        const { id, nome, sigla } = request.body

        const estado = await prisma.estado.update({

            data: {
                nome, 
                sigla,
                updated_at: new Date()
            },

            where: {
                id
            }
        })

        return response.json(estado)

    }
}