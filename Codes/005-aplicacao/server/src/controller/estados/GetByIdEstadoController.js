import { prisma } from "../../database/clients.js"



export class GetByIdEstadoController {

    async handle(request, response) {

        // request.body
        // params -> /estados/2 -> /estados/{id}
        // query -> /estados/?id=2

        const { id } = request.params;

        const estado = await prisma.estado.findUniqueOrThrow({
            where: {
                id: parseInt(id)
            }
        });

        return response.json(estado);

    }


}