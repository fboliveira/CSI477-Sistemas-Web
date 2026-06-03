// import ... from ... -> default: export default
// import { ... } from ... -> export {  }

// Express -> app()
//         -> Router() 

import { Router } from 'express'

// get, post, patch/put, delete -> CRUD
const mainRouter = Router()

mainRouter.get('/', (request, response) => {
    response.send('Server is running.')
})

mainRouter.get('/info', (request, response) => {
    response.send('<h1>Project Control - Web Server</h1>')
})

mainRouter.get('/status', (request, response) => {
    response.json({
        code: 200,
        message: 'Project Control API Server is running.'
    })
})

mainRouter.get('/admin', (request, response) => {
    response
        .status(401)
        .send('<h1>Unauthorized.</h1>')
})

// Demais rotas ...


// Exportar o elemento com as rotas


export { mainRouter }

