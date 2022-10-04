import { prismaClient } from "../../database/client.js";

export class GetAllPessoaController {

    async handle(request, response) {

        const pessoas = await prismaClient.pessoas.findMany({
            include: {
                doacoes: {
                    include: {
                        locais: {
                            select: {
                                nome
                            }
                        }
                    }
                }
            }
        })

    }
}