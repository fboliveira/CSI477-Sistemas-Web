import { prisma } from "../../database/client.js";

export class GetByIdEstadoController {
  async handle(request, response) {
    // POST
    // request.body

    // GET
    // /estados?id=10: request.query
    // /estados/10: request.params
    // /estados/{id}

    const { id } = request.params;

    try {
      const estado = await prisma.estado.findFirstOrThrow({
        where: {
          id: parseInt(id),
        },
      });
      
      return response.json(estado);
    } catch (error) {

        response.status(400).json({
            message: 'Invalid request.',
            error
        })

    }
  }
}
