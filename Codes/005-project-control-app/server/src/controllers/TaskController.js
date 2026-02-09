// CRUD - tasks
// C: create
// R: read - get all / get by id /  get by name
// U: update
// D: delete

import { prisma } from "../repository/client.js";

export default class TaskController {

    async getAll(request, response) {

        const tasks = await prisma.task.findMany({
            include: {
                project: true
            }
        })
        return response.json(tasks)

    }

    async getById(request, response) {
        try {
            const { id } = request.params
            const task = await prisma.task.findFirstOrThrow({
                where: {
                    id: parseInt(id)
                },
                include: {
                    project: true
                }    
            })

            return response.json(task)
        } catch(error) {
            return response
                .status(400)
                .json({
                    message: "Invalid Id.",
                    error
                })
        }        
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
        
        const { id, description, project_id } = request.body

        try {
            
            const task = await prisma.task.update({
                where: {
                    id: parseInt(id)
                },

                data: {
                    description, 
                    project_id: parseInt(project_id)
                }

            })

            return response.json(task)

        } catch (error) {
            console.error(error)
            response.status(400).json({
                code: 400,
                message: "Invalid request.",
                error
            })
        }        

    }

    async delete(request, response) {

        const { id } = request.body

        try{

            const task = await prisma.task.delete({
                where: {
                    id
                }
            })

            return response.json({
                code: 200,
                message: "Task deleted.",
                task
            })

        } catch(error) {
             response.status(400).json({
                code: 400,
                message: "Invalid request.",
                id,
                error
            })           
        }        
    }

}