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
    }


}