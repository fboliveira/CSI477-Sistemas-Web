import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"
import { prisma } from "../../database/clients.js"

export class GetByIdProjectController {

    async handle(request, response) {

        // request.body
        // params -> /projects/2 > /projects/{id}
        // query -> /projects?id=2&nome=web

        try {
            const { id } = request.params
            const project = await prisma.project
            .findFirstOrThrow({
                where: {
                    id: parseInt(id)
                },
                include: {
                    tasks: true
                }
            })
            console.log(project)
            return response.json(project)
        } catch(error) {
            if (error instanceof PrismaClientKnownRequestError) {
                return response.status(404).json({
                    message: "Invalid ID.",
                    error
                })
            }
            return response.status(500).json(error)
        }

    }

}