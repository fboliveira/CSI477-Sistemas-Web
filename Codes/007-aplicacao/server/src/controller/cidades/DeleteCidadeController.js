import { prisma } from '../../database/client.js'

export class DeleteCidadeController {

    async handle(request, response) {

        const { id } = request.body;

        try {
            const cidade = await prisma.cidade.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(cidade)

        } catch (error) {
            
            console.error(error);
            return response.status(400).json(error);

        }

    }

}