// CRUD - projects
// C: create
// R: read - get
// U: update
// D: delete

import { prisma } from "../database/client.js";

export default class ProjectController {
  // GET
  async getAll(request, response) {
    const projects = await prisma.project.findMany({
      include: {
        tasks: true
      }
    });
    return response.json(projects);
  }

  // CREATE
  async create(request, response) {
    // request.body -> JSON: POST

    // /api/projects/2 -> GET: params
    // /api/projects?id=2 -> GET: query

    // Habilitar middleware express.json() no server
    // para tratar todas as requisições como json.
    // server.use(express.json())
    //
    console.log(request.body)
    const { name } = request.body;

    // Model/DTO (domain)/Parser -> validações
    if (name === "") {
      return response.status(400).json({
        message: "Invalid data.",
      });
    }

    // Sanitização
    // ...

    // Persistência
    // Service -> repository -> save();
    const project = await prisma.project.create({
      data: {
        name,
      },
    });

    console.log(project);

    return response.status(201).json(project);
  }

  async getById(request, response) {

      // params: /api/projects/2 -> /api/projects/{id}

      try{
        const { id } = request.params
        const project = await prisma.project
          .findFirstOrThrow({
            where: {
              id: parseInt(id)
            }
          })

          return response.json(project)
      } catch(error) {
        return response.status(400).json({
          message: "Invalid ID.",
          error
        })
      }
  }

  async getByName(request, response) {

    const { name } = request.params

    const projects = await prisma.project.findMany({
      where: {
        name: {
          contains: name
        }
      }
    })

    if (projects.length === 0) {
      return response.status(404).json({
        message: `There is no project with name like '${name}'`
      })
    }

    return response.json(projects)

  }

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

      response.status(201).json(project)
      
    } catch (error) {

      response.status(400).json({
        message: "Invalid request.",
        error
      })
      
    }

  }

  async delete(request, response) {

    const { id } = request.body

    try {
      
      const project = await prisma.project.delete({
        where: {
          id
        }
      })

      return response.json({
        message: "Project has been deleted.",
        project
      })

    } catch (error) {
        return response.status(400).json({
          message: "Invalid request.",
          id,
          error
        })
    }

  }


}
