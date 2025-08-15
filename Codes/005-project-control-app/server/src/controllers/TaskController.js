import { prisma } from "../database/client.js";

export default class TaskController {

    async getAll(request, response) {

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

        });
        return response.json(tasks);

    }

    async getById(request, response) {

    }

    async create(request, response) {
 
        const { description, project_id } = request.body;

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

        return response.json(task)


    }

    async update(request, response) {

    }

    async delete(request, response) {

    }

}