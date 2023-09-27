import { prisma } from "../../database/clients.js"


export class CreateEnderecoController {

    async handle(request, response) {

        const { nome, usuario_id, rua, numero, complemento, bairro, cidade_id, telefone } = request.body;
        
        if (nome === "" ||usuario_id === "" || rua=== "" || numero === "" || bairro === "" || cidade_id === "" || telefone === "") {
            return response.status(400).json({
                message: "Dados incompletos. Informe todos os campos."
            });
        }

        const endereco = await prisma.endereco.create({
            data: {
                rua,
                numero,
                complemento,
                bairro,
                cidade: {
                    connect: {
                        id: cidade_id
                    }
                },
                telefone
            }
        });

        return response.json(endereco);

    }
}