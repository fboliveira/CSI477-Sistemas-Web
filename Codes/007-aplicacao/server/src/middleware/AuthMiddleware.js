import jwt from 'jsonwebtoken';

export class AuthMiddleware {

    async handle(request, response, next) {

        console.log('[AuthMiddleware] Validating request...');

        try{

            const authorization = request.headers['authorization'].split(' ');

            const prefix = authorization[1];
            const token = authorization[2];

            console.log({prefix, token});

            if ( prefix !== process.env.JWT_HEADER_KEY ) {
                return response.status(401).json({
                    message: "Acesso não autorizado!"
                });
            }

            const tokenIsValid = jwt.verify(token,
                process.env.JWT_SECRET_KEY);

            if ( tokenIsValid ) {
                return next();
            } else {
                return response.status(401).json({
                    message: "Token de acesso inválido!"
                });
            }

        } catch(error) {
            return response.status(401).json({
                message: "[ERRO] Acesso não autorizado!",
                error
            });
        }
    }

}