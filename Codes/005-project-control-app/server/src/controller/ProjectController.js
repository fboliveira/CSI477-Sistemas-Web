// CRUD - projects
//
// C: create
// R: read - get all / get by id // get by name
// U: update
// D: delete
//

import { prisma } from "../repository/client.js"
export default class ProjectController {

    // R: read
    async getAll (request, response) {

        // Client -> Model : Service
        const projects = await prisma.project.findMany()
        return response.json(projects)

    }

    // R: id
    // GET
    // /api/projects?id=1 -> query: request.query
    // /api/projects/1 -> params: request.params
    async getById(request, response) {

        // GET: /api/projects/1 -> /api/projects/{id} : params
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
                .status(400) // Bad request
                .json({
                    message: "Invalid id.",
                    error
                })
        }

    }

    getByName(request, response) {

        // GET: /api/projects/net

    }
    // -- 

    // C: create

    // U: update

    // D: delete

}