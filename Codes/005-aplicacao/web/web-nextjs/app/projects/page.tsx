import Link from "next/link";
import getAllProjects from "../repository/projects/GetAllProjects"
import ProjectInterface from "../types/project";

export default async function Projects() {

    const projects : ProjectInterface[] = await getAllProjects();

    return(

        <div>

            <h2>Lista de projetos</h2>
            <Link href="/projects/create">Cadastrar</Link>

            <ul>
                {
                    projects.map((project) =>{
                        return (
                            <li key={project.id}>{project.id} - {project.name}</li>
                        )
                    })
                    
                }
            </ul>

        </div>

    )

}