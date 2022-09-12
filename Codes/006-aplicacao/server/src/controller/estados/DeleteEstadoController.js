import { PrismaClientKnownRequestError } from "@prisma/client/runtime/index.js";
import { prismaClient } from "../../database/client.js";
import { EstadoModel } from "../../model/EstadoModel.js";

export class DeleteEstadoController {

    async handle(request, response) {

        const { id } = request.body;
        const estadoModel = new EstadoModel();
        if (! (await estadoModel.exists(id))) {
            console.log(`[DeleteEstadoController] Estado id: ${id} does not exist!`);
            return response.status(403).json({ 
                message: `[DeleteEstadoController] Estado id: ${id} does not exist! (model check)`
            });            
        }

        try{
            const estado = await prismaClient.estado.delete({
                where: {
                    id: id
                }
            });

            return response.json(estado);

        } catch(error) {
            if ( error.code === "P2025" &&
                error instanceof PrismaClientKnownRequestError ) {
                    console.log(`[DeleteEstadoController] Estado id: ${id} does not exist!`);

                    return response.status(400).json({ 
                        message: "Estado id does not exist."
                    });

                }
        }


    }
}