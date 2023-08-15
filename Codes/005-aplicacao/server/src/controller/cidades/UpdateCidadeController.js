import { prisma } from "../../database/clients.js";

export class UpdateCidadeController {
  async handle(request, response) {
    const { id, nome, estado_id } = request.body;

    try {
      const cidade = await prisma.cidade.update({
        where: {
          id,
        },

        data: {
          nome,
          estado_id,
          updated_at: new Date(),
        },
      });

      response.json(cidade);
    } catch (error) {
      response.status(400).json({
        message: "Erro na solicitação.",
        error,
      });
    }
  }
}