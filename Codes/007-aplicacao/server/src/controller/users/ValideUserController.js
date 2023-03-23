import jwt from "jsonwebtoken";

export class ValidateUserController {

    async handle(request, response) {

        console.log(request.headers['authorization']);

        try{

            const authorization = request.headers['authorization'].split(' ');

            const prefix = authorization[1];
            const token = authorization[2];

            if ( prefix !== process.env.JWT_HEADER_KEY ) {
                return response.status(401).json({
                    message: "Acesso não autorizado!"
                });
            }

            const tokenIsValid = jwt.verify(token,
                process.env.JWT_SECRET_KEY);

            if ( tokenIsValid ) {
                return response.json({
                    message: "Acesso permitido!"
                });
            } else {
                return response.status(401).json({
                    message: "Token de acesso inválido!"
                });
            }

        } catch(error) {
            return response.status(401).json({
                error
            });
        }

    }

}