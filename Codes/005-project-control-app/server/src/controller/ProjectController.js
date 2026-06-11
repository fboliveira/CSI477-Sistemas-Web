// CRUD - projects
//
// C: create
// R: read - get all / get by id // get by name
// U: update
// D: delete
//

export default class ProjectController {

    // R: read
    getAll (request, response) {
        return response.json([{
            id: 1,
            name: "Data mock"
        }])
    }

    getById(request, response) {

    }

    getByName(request, response) {

    }
    // -- 

    // C: create

    // U: update

    // D: delete

}