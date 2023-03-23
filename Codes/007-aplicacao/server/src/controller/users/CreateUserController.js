import { prisma } from "../../database/client.js"
import bcrypt from "bcrypt";

export class CreateUserController {

    async handle(request, response) {

        const { nome, email, password } = request.body;

        try {

            let passwordHash;
            let saltRounds;

            await bcrypt.genSalt()
                .then(salt => {
                    saltRounds = salt;
                });            

            await bcrypt.hash(password, saltRounds)
                    .then(hash => {
                        passwordHash = hash;
                    });

            const user = await prisma.user.create({
                data: {
                    nome,
                    email,
                    password: passwordHash
                }
            });

            return response.json({
                id: user.id,
                nome
            });

        } catch(error) {
            console.log(error);
        }
    }
}