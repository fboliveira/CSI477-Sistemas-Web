import { prismaClient } from "../../database/client.js";

export class CreateUserController {

    async handle(request, response) {

        const { nome, email, password } = request.body;

        try {
            const user = await prismaClient.user.create({
                data : {
                    nome, 
                    email,
                    password

                }
            });

            return response.json({
                id: user.id,
                nome
            });

        } catch (error) {
            console.error("Erro ao incluir o usuário!");
            return response.status(400).json({
                message: "Erro na inclusão do usuário",
                error: error.message
            })
        }


    }

}