import { prisma } from '../../database/client.js'

export class GetByIdCidadeController {

    async handle(request, response) {

        const { id } = request.params;

        try {
            const cidade = await prisma.cidade.findFirstOrThrow({
                where: {
                    id: parseInt(id)
                },

                include: {
                    estado: true
                }
            })
            
            return response.json(cidade)

        } catch (error) {
            return response.status(400)
                .json({
                    message: 'Invalid request.',
                    error
                })
        }
    }    
}