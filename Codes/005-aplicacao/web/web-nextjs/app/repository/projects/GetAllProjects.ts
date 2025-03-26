export default async function getAllProjects() {

    const projects = await fetch('http://localhost:5555/projects')
    return projects.json();

}