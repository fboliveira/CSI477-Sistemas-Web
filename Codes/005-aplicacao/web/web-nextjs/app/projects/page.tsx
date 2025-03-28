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

                            <li key={project.id}>
                                <Link href={`/projects/update/${project.id}`}>
                                    {project.id} - {project.name}
                                </Link><span> </span> 
                                <Link href={`/projects/delete/${project.id}`}>
                                    Excluir
                                </Link> 
                            </li>
                        )
                    })
                    
                }
            </ul>

        </div>

    )

}