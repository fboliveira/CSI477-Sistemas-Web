import { prisma } from "../../database/client.js";


export class GetByIdEstadoController {

    async handle(request, response) {


        // POST
        // request.body

        // GET
        // /estados/?id=1: request.query
        // /estados/1: request.params 
        // /estados/{id}

        const { id } = request.params;

        try {
            const estado = await prisma.estado.findUniqueOrThrow({
                where: {
                    id: parseInt(id)
                }
            });
    
            return response.json(estado);
            
        } catch (error) {
            response.status(400).json({
                message: 'Invalid request.',
                error
            })
        }

    }

}