// CRUD - tasks
// C: create
// R: read - get all / get by id /  get by name
// U: update
// D: delete

import { prisma } from "../repository/client.js";

export default class TaskController {

    async getAll(request, response) {

        const tasks = await prisma.task.findMany({
            select: {
                id: true,
                description: true,
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

    async getById(request, response) {
        
    }

    async getByName(request, response) {
        
    }

    async getByProject(request, response) {
        
    }

    async create(request, response) {

        const { description, project_id } = request.body

        // Is project_id valid?
        // Model -> validate()

        try {
            
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

        } catch (error) {

            return response.status(400).json({
                code: 400,
                message: "Invalid request.",
                error
            })
            
        }
        
    }

    async update(request, response) {
        
    }

    async delete(request, response) {
        
    }

}