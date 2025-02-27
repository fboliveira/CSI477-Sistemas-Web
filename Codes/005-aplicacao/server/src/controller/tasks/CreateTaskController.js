import { prisma }  from "../../database/clients.js"

export class CreateTaskController {

    async handle(request, response) {

        const { description, projectId } = request.body

        const task = await prisma.task.create({
            data: {
                description,
                done: false,
                project: {
                    connect: {
                        id: projectId
                    }
                }
            }
        })

        return response.status(201).json(task)

    }
}