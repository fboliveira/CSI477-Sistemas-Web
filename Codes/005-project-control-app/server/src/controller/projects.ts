// Controller:

// Resource: CRUD
// C: create
// R: read - get all / get by id / get by name
// U: update - put/patch
// D: delete

import type { Request, Response } from "express";
import { prisma } from "../repository/client.js";

export default class ProjectController {

    // CREATE -> body: POST
    async create(request : Request, response : Response) {

        // POST: body -> request.body

        const { name } = request.body;

        // Architecture ->
        // DTO : in (converter/mapper)
        // Domain: use cases

        // -- Parser: validações
        if ( name === "" ) {
            return response.status(400).json({
                code: 400,
                message: "Invalid data request." 
            })
        }

        // -- Sanitização
        // .. upper(), ...

        // Domain -> Infrastructure (entity)
        // Service -> repository: save()
        const project = await prisma.project.create({
            data: {
               name 
            }
        })

        return response.status(201).json(project);
   

    }

    // READ - get all -> GET
    async getAll(request : Request, response : Response) {

        const projects = await prisma.project.findMany();
        return response.json(projects);

    }

    async getById(request : Request, response : Response) {

        // GET:
        // /api/projects?id=1 -> query: request.query
        // /api/projects/1 -> params: request.params

        try {

            const { id } = request.params
            const project = await prisma.project.findFirstOrThrow({
                where: {
                    id: parseInt(id as string)
                }
            })

            return response.json(project)
            
        } catch (error) {
            return response
                .status(400)
                .json({
                    message: "Invalid id.",
                })
        }

    }

    // TODO: get by name - part of name
    async getByName(request : Request, response : Response) {

    }

    //... 

    // UPDATE
    // PUT or PATCH
    async update(request : Request, response : Response) {

        const { id, name } = request.body
        
        // ...
        
        try {

            const project = await prisma.project.update({
                where: {
                    id
                },
                data: {
                    name
                }
            })

            return response.json(project)
            
        } catch (error) {
            return response.status(400).json({
                code: 400,
                message: 'Invalid request',
                id,
                error
            })
        }

    }

    // DELETE
    // Hard delete or Soft delete (flag)
    async delete(request : Request, response : Response) {

        // Body or Params ?
        const { id } = request.body

        try {

            const project = await prisma.project.delete({
                where: {
                    id
                }
            })

            return response.json({
                code: 200,
                message: 'Project deleted.',
                project
            })
            
        } catch (error) {
            return response.status(400).json({
                code: 400,
                message: 'Invalid request',
                id,
                error
            })
        }

    }

}