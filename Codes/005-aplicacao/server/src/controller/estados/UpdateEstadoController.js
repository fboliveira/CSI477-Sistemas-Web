import { prisma } from "../../database/clients.js";

export class UpdateEstadoController {



    async handle(request, response) {

        const { id, nome, sigla } = request.body;

        try {
            const estado = await prisma.estado.update({

                where: {
                    id
                },

                data: {
                    nome,
                    sigla,
                    updated_at: new Date()
                }

            });

            response.json(estado);
        } catch(error) {
            response.status(400).json({
                message: "Erro na solicitação.",
                error
            })
        }
        
    }

}