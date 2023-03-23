import { prisma } from "../../database/client.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class LoginUserController {

    async handle(request, response) {

        const { email, password } = request.body;
        let valid = false;

        const user = await prisma.user.findUnique({

            where: {
                email: email
            }

        });

        if (!user) {
            return response.status(403).json({
                message: "Usuário e/ou senha inválidos!"
            });
        }

        // Compare password - bcrypt
        await bcrypt.compare(password, user.password)
            .then(result => {
                valid = result;    
            });

        if (!valid) {
            return response.status(403).json({
                message: "Usuário e/ou senha inválidos!"
            });
        }

        // JWT - Token
        const data = {
            id: user.id,
            email,
            loginDate: Date()
        };


        const token = jwt.sign(data, process.env.JWT_SECRET_KEY,
                {
                    expiresIn: '1h'
                });

        return response.json({
            nome: user.nome,
            token,
            header: process.env.JWT_HEADER_KEY
        })

    }

}