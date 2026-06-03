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

// Demais rotas ...


// Exportar o elemento com as rotas


export { mainRouter }

