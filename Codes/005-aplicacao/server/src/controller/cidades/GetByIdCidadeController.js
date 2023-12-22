import { prisma } from "../../database/client.js";

export class GetByIdCidadeController {

    async handle(request, response) {

        const { id } = request.params;

        const cidade = await prisma.cidade.findUnique({

            where: {
                id : parseInt(id)
            },

            include: {
                estado: true
            }
        });

        return response.json(cidade);

    }

}