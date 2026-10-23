import { Router } from "express";
import { env } from "../config/env.js";

const mainRouter = Router()

mainRouter.get('/', (request, response) => {
    response.json({
        id: 1,
        message: `[Main Router] Server is alive! Port: ${env.PORT}`
    })
})

mainRouter.get('/admin', (request, response) => {
    response
        .status(401)
        .send("<h1>Unauthorized.</h1>");
})

export { mainRouter }