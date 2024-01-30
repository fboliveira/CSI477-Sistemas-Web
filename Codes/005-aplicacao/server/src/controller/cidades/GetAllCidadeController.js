import { prisma } from '../../database/client.js'

export class GetAllCidadeController {

    async handle(request, response) {

        const cidades = await prisma.cidade.findMany({

            // select: {
            //     id: true,
            //     nome: true,
            //     estado: {
            //         select: {
            //             id: true,
            //             nome: true,
            //             sigla: true
            //         }
            //     }
            // }

            include: {
                estado: true
            }

        });
        return response.json(cidades);

    }

}