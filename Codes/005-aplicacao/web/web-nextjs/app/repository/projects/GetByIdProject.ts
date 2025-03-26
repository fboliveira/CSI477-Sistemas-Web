export default async function getByIdProject(id: string) {

    const projects = await 
        fetch(
            `http://localhost:5555/projects/${id}`
        )
    return projects.json();

}