// CRUD - projects
// C: create
// R: read - get all / get by id /  get by name
// U: update
// D: delete

export default class ProjectController {

    getAll(request, response) {

        response.json({
            id: 1,
            name: "Server"
        })

    }

    create(request, response) {
        
    }


}