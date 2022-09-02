import { prismaClient } from "../../database/client.js";

export class CreateEstadoController {

   // async/await 
   async handle( request, response ) {

        const { nome, sigla } = request.body;

        const estado = await prismaClient.estado.create({
            data: {
                nome,
                sigla
            }
        });
        console.log(estado);
        return response.json(estado);

   } 

}
