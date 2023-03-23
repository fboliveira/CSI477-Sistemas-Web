export class RolesMiddleware {

    async handle(request, response, next) {
        return next();
    }

}