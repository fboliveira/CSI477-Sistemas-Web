import { prisma } from '../../database/client.js'

export class UpdateCidadeController {

    async handle(request, response) {

        const { id, nome, estado_id } = request.body;

        const cidade = await prisma.cidade.update({

            where: {
                id: parseInt(id)
            },
            data: {
                nome,
                estado: {
                    connect: {
                        id: estado_id
                    }
                }

            }

        });

        return response.json(cidade);

    }

}