// Controller:

import type { Request, Response } from "express";
import { prisma } from "../repository/client.js";

// Resource: CRUD
// C: create
// R: read - get all / get by id / get by description / get by project_id
// U: update - put/patch
// D: delete

export default class TaskController {

    async getAll(request : Request, response : Response) {

        const tasks = await prisma.task.findMany({
          include: {
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

    // TODO
    async getById(request : Request, response : Response) {
        
    }    

    // TODO
    async getByDescription(request : Request, response : Response) {
        
    }

    // TODO
    async getByProject(request : Request, response : Response) {
        
    }

    async create(request : Request, response : Response) {

        // Body
        const { description, project_id } = request.body;
        
        // Validação -> se o project_id é valido?
        // Model -> validate()
        try {
            const project = await prisma.project.findFirstOrThrow({
                where: {
                    id: parseInt(project_id as string)
                }
            })

        } catch(error) {
            return response
                .status(400)
                .json({
                    code: 400,
                    message: 'Invalid project id.'
                })
        }

        const task = await prisma.task.create({
            data: {
                description,
                project: {
                    connect: {
                        id : project_id
                    }
                }
            }
        })

        return response.status(201).json(task)
        
    }

    async update(request : Request, response : Response) {
        
        const { id, description, project_id } = request.body

        try {

            const task = await prisma.task.update({

                where: {
                    id: parseInt(id as string)
                },

                data: {
                    description,
                    project_id: parseInt(project_id as string)
                }

            })

            return response.json(task)
            
        } catch (error) {
            console.error(error)
            return response
                .status(400)
                .json({
                    code: 400,
                    message: 'Invalid request.',
                    error
                })
        }


    }

    async delete(request : Request, response : Response) {
        
    }
}