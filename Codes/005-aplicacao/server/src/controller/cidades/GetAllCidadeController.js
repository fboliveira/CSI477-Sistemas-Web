import { prisma } from "../../database/clients.js"

export class GetAllCidadeController {

    async handle(request, response) {

        try {
            
            const cidades = await prisma.cidade.findMany({
                select : {
                    id : true,
                    nome: true,
                    estado: {
                        select : {
                            id: true,
                            nome: true,
                            sigla: true
                        }
                    }
                }
            });

            return response.json(cidades);

        } catch (error) {
            return response.status(500).json(error);        
        }

    }
}