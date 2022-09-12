import { prismaClient } from "../../database/client.js";

export class UpdateCidadeController {
    async handle(request, response) {

        const { id, nome, estado_id } = request.body;

        const cidade = await prismaClient.cidade.update({

            where: {
                id: id
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