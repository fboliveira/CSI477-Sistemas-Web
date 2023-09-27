import { prisma } from "../../database/clients.js";

export class UpdateEnderecoController {

    async handle(request, response) {

        const { nome, usuario_id, rua, numero, bairro, cidade_id, telefone, id} = request.body;

        try {
            const endereco = await prisma.endereco.update({

                where: {
                    id
                },

                data: {
                    nome,
                    usuario: {
                        connect: {
                            id: usuario_id
                        }
                    },
                    rua,
                    numero,
                    bairro,
                    cidade: {
                        connect: {
                            id: cidade_id
                        }
                    },
                    telefone,
                    updated_at: new Date()
                }

            });

            response.json(endereco);
        } catch(error) {
            response.status(400).json({
                message: "Erro na solicitação.",
                error
            })
        }
        
    }

}