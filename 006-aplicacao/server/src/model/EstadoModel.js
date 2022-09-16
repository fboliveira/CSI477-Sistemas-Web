import { prismaClient } from "../database/client.js";

export class EstadoModel {

    async exists(id) {

        const estadoCount = await prismaClient.estado.count({
            where: {
                id: id
            }
        });

        console.log(`[EstadoModel] exists().count = ${estadoCount} (${estadoCount > 0})`);

        return estadoCount > 0;

    }

}