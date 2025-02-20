import { prisma } from "../../database/clients.js";

export class CreateProjectController {

    async handle(request, response) {

        // request.body -> JSON
        const { name } = request.body

        // Model/DTO/Parser -> validações
        if (name === "") {
            return response.status(400).json({
                message: "Invalid data."
            })
        }

        // Sanitização
        // ...

        // Persistência -> model: repository
        const project = await prisma.project.create({
            data: {
                name
            }
        })

        console.log(project)

        return response.status(201).json(project)


    }

}