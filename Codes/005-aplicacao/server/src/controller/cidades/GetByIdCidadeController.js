import { prisma } from "../../database/clients.js";

export class GetByIdCidadeController {
  async handle(request, response) {
    const { id } = request.params;

    const cidade = await prisma.cidade.findUniqueOrThrow({
      where: {
        id: parseInt(id),
      },
    });

    return response.json(cidade);
  }
}
