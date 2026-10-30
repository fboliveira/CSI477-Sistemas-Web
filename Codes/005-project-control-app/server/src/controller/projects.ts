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

    getById(request : Request, response : Response) {

        // GET:
        // /api/projects?id=1 -> query: request.query
        // /api/projects/1 -> params: request.params

    }

    getByName(request : Request, response : Response) {

    }

    //... 

}