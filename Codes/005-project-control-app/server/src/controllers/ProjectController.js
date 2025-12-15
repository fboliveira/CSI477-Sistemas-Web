// CRUD - projects
// C: create
// R: read - get all / get by id /  get by name
// U: update
// D: delete

import { prisma } from "../repository/client.js";

export default class ProjectController {

    async getAll(request, response) {

        const projects = await prisma.project.findMany()

        return response.json(projects)

    }

    // CREATE
    async create(request, response) {
        
        // POST: body -> request.body

        // GET:
        // /api/projects?id=1 -> query: request.query
        // /api/projects/1 -> params: request.params

        console.log(request.body)
        const { name } = request.body

        // Architecture -> 
        // DTO: in
        // Domain -> use cases
        // -- Parser: validações
        if (name === "") {
            return response.status(400).json({
                code: 400,
                message: "Invalid data request."
            })
        }

        // -- Sanitização
        // ...

        //Domain -> Infrastructure (entity)
        // Service -> repository: save()
        const project = await prisma.project.create({
            data: {
                name // object literals
            }
        })

        console.log(project)

        return response
                .status(201)
                .json(project)

    }

    // GET BY ID
    async getById(request, response) {

        // GET: /api/projects/1 -> /api/projects/{id}: params

        try {
            const { id } = request.params
            const project = await prisma.project.findFirstOrThrow({
                where: {
                    id: parseInt(id)
                }    
            })

            return response.json(project)
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
        // Busca por partes do nome

        // /api/projects/name/{name}

        const { name } = request.params

        const projects = await prisma.project.findMany({
            where: {
             name : {
                contains: name
             }
            }
        })

        if (projects.length === 0) {
            return response.status(404).json({
                code: 404,
                message: `There is no project with name like ${name}.`
            })
        }

        return response.json(projects)

    }

    // UPDATE
    // PUT or PATCH
    async update(request, response) {

        const { id, name } = request.body

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
            response.status(400).json({
                code: 400,
                message: "Invalid request.",
                error
            })
        }

    }

    // DELETE
    async delete(request, response) {

        const { id } = request.body

        try{

            const project = await prisma.project.delete({
                where: {
                    id
                }
            })

            return response.json({
                code: 200,
                message: "Project deleted.",
                project
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