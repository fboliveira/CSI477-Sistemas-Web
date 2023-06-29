import { prisma } from "../../database/clients.js";

export class CreateEstadoController {

    async handle(request, response) {

        // JSON -> request.body
        const { nome, sigla } = request.body;

        // Model/DTO/Parser -> validações
        if (nome === "") {
            return response.status(400).json({
                message: "Dados incompletos. Informe o nome e a sigla."
            });
        }

        // Sanitização
        // ...

        // Persistência -> Model
        const estado = await prisma.estado.create({
            data: {
                nome,
                sigla
            }
        });

        console.log(estado);
        return response.json(estado);

    }

}