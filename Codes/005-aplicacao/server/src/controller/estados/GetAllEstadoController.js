import { prisma } from "../../database/client.js"; 

export class GetAllEstadoController {

    async handle(request, response) {

        const estados = await prisma.estado.findMany({
            // include: {
            //     cidades: true
            // }
        });
        return response.json(estados);

    }

}