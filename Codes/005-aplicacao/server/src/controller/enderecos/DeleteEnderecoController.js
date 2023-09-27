import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library.js";
import { prisma } from "../../database/clients.js";

export class DeleteEnderecoController {

    async handle(request, response) {

        try {
            const { id } = request.body;
            console.log(id);

            const endereco = await prisma.endereco.delete({
                where: {
                    id
                }
            });

            return response.json(endereco);
        } catch (error) {
            
            if ( error instanceof PrismaClientKnownRequestError ) {
                return response.status(400).json({
                    message: "Erro na exclusão do estado.",
                    error
                });
            }

            return response.status(500).json({
                error,
                id
            });

        }

    }
}