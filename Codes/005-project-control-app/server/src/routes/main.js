// EsModules:
// import ... from ... -> default: export default
// import { ..., ... } from ... -> export { }

// import express from "express" // default
import { Router } from "express"

const mainRouter = Router()

mainRouter.get('/', (request, response) => {
    response.send("<h1>Project Control Server</h1>")
})

export { mainRouter }