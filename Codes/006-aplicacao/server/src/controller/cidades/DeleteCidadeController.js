import { prismaClient } from "../../database/client.js";

export class DeleteCidadeController {

    async handle(request, response) {

        let { id } = request.body.data;
        id = parseInt(id);

        try {
            const cidade = await prismaClient.cidade.delete({
                where: {
                    id: id
                }
            });

            return response.json(cidade);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }

    }
}