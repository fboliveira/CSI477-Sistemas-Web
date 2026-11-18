import { useEffect, useState } from "react"
import api from "../services/api"
import type { ProjectInterface } from "../types/projects"
import Card from "../components/card/Card"

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

            <div>
            {
                projects.map((project) =>(
                    <Card
                        id={project.id}
                        name={project.name}
                    />
                ))
            }
            </div>
            

        </>
    )

}

export default ListProjects
