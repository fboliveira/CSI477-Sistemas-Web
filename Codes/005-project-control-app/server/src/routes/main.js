// EsModules:
// import ... from ... -> default: export default
// import { ..., ... } from ... -> export { }

// import express from "express" // default
import { Router } from "express"

const mainRouter = Router()

mainRouter.get('/', (request, response) => {
    response.send("<h1>Project Control Server</h1>")
})

mainRouter.get('/status', (request, response) => {
    response.json({
        code: 200,
        message: "Project Control API Server is running."
    })
})

mainRouter.get('/admin', (request, response) => {
    response.status(401).send("<h1>Unauthorized.</h1>")
})

export { mainRouter }