import { prismaClient } from '../../database/client.js'

export class GetByIdCidadeController {


    async handle(request, response) {

        const { id } = request.params;

        const cidade = await prismaClient.cidade.findUnique({
            where: {
                id: parseInt(id)
            },
            select: {
                id: true,
                nome: true,
                created_at:true,
                estado: true,
                pessoas: true
            }            
        });

        return response.json(cidade);

    }

}