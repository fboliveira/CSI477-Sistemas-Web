import { prisma } from "../repository/client.js";

export default class TaskController {

    async getAll(request, response) {

        const tasks = await prisma.task.findMany({
            include: {
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

    async create(request, response) {

        const { description, project_id } = request.body

        const task = await prisma.task.create({
            data: {
                description,
                project: {
                    connect: {
                        id: project_id
                    }
                }
            }
        })

        return response
            .status(201)
            .json(task)

    }

    async update(request, response) {

    }

    async delete(request, response) {

    }

}