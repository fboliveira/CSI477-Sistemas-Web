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
        <table className="table-auto w-full border border-collapse border-stone-950">
                    <thead>
                        <tr className="bg-amber-400 font-bold p-2">
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Atualizar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                {
                    projects.map((project) =>{
                        return (

                            <tr key={project.id} className="border border-stone-400">

                                <td className="justify-center">{project.id}</td>
                                <td>{project.name}</td>
                                <td><Link href={`/projects/update/${project.id}`}>Atualizar</Link></td>
                                <td><Link href={`/projects/delete/${project.id}`}>Excluir</Link></td> 
                            </tr>
                        )
                    })
                    
                }
                </tbody>
                </table>
            </ul>

        </div>

    )

}