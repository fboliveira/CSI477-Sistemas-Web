import { prismaClient } from '../../database/client.js'




export class CreateCidadeController {

    async handle(request, response) {

        const { nome, estado_id } = request.body;


        const cidade = await prismaClient.cidade.create({

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