import { prismaClient } from "../../database/client.js";
import jwt from "jsonwebtoken";

export class LoginUserController {

    async handle(request, response) {

        const { email, password } = request.body;      

        console.log({ email, password });

        const user = await prismaClient.user.findUnique({
            where: {
                email: email,
            }
        });

        if (!user) {
            return response.status(403).send({
                message: "Usuário e/ou senha inválidos!"
            });
        }

        // Hash password -> user.password
        if ( user.password !== password ) {
            return response.status(403).send({
                message: "Usuário e/ou senha inválidos!"
            });
        }

        // JWT - Token
        const data = {
            id: user.id,
            email,
            loginDate: Date()
        };

        const token = jwt.sign(data, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

        response.send({
            nome: user.nome,
            token,
            header: process.env.JWT_HEADER_KEY
        });

    }


}