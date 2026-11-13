import { useEffect, useState } from "react"
import api from "../services/api"
import type { ProjectInterface } from "../types/projects"

const ListProjects = () => {

    const [ projects, setProjects ] = useState<ProjectInterface[]>([])

    useEffect(() => {

        api.get('/projects')
            .then((response) => {
                console.log(response)
                setProjects(response.data)
            })
            .catch(error => console.error(error))


    },[])

    return(
        <>
        
            <h2>Lista de Projetos</h2>

            <ul>
            {
                projects.map((project) =>(
                    <li>{project.id} - {project.name}</li>
                ))
            }
            </ul>
            

        </>
    )

}

export default ListProjects
