import { prisma } from '../../database/client.js'

export class CreateEstadoController {

    async handle(request, response) {

        // Create: POST -> dados
        console.log(request.body)
        
        // request.body -> JSON
        const { nome, sigla } = request.body

        // Validações: model, DTO, Parser, ...
        // UseCase: regras do domínio...
        if ( nome === "" || sigla === "" || !sigla ) {
            return response.status(400).json({
                message: 'Invalid data! Nome and sigla are required.'
            })
        }

        // Sanitização
        // ...

        // Persistência dos dados -> Model/Repositório
        const estado = await prisma.estado.create({

            data: {
                nome,
                sigla
            }

        })

        return response.status(201).json(estado);

    }

}