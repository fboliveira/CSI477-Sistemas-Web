import { prisma } from "../../database/clients.js"

export class GetAllCidadeController {

    async handle(request, response) {

        try {
            
            const cidades = prisma.cidade.findMany();

            return response.json(cidades);

        } catch (error) {
            return response.status(500).json(error);        
        }

    }
}