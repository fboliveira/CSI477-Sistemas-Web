import { Router } from 'express';

const mainRouter = Router();

mainRouter.get('/', (request, response) => {
    response.status(401).send("<h1>Unauthorized.</h1>")
});

mainRouter.get('/admin', (request, response) => {

    response.json({

        message: "API Server is running."

    });

});

export { mainRouter };