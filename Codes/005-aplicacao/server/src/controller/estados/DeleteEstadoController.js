import { prisma } from "../../database/client.js";


export class DeleteEstadoController {

    async handle(request, response) {

        // delete: id
        const { id } = request.body

        // Verificar se o ID existe.
        

        try {
            // UseCase: delete
            const estado = await prisma.estado.delete({
                where: {
                    id
                }
            })
    
            // Soft delete: update -> deleted_at
            return response.json(estado)
            
        } catch (error) {
            return response.status(400).json(error)
        }

    }

}