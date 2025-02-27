import { prisma } from "../../database/clients.js";

export class GetByIdTaskController {
  
    async handle(request, response) {

    try {
      
      const { id } = request.params;
      
      const task = await prisma.task.findFirstOrThrow({
        where: {
          id: parseInt(id),
        },
        include: {
          project: true,
        },
      });

      return response.json(task);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}
