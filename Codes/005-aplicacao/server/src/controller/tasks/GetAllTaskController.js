import { prisma }  from "../../database/clients.js"

export class GetAllTaskController {

    async handle(request, response) {

        const tasks = await prisma.task.findMany({
            select: {
                id: true,
                description: true,
                done: true,
                project: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })
        return response.json(tasks)

    }
}