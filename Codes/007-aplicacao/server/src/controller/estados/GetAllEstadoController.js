import { prisma } from '../../database/client.js';

export class GetAllEstadoController {

    async handle(request, response) {

        const estados = await prisma.estado.findMany({
            include: {
                cidade: true
            }
        });
        return response.json(estados);

    }

}