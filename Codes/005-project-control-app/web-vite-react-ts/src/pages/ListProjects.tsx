import { useEffect, useState } from "react"
import api from "../services/api"
import type { ProjectInterface } from "../types/projects"
import Card from "../components/card/Card"
import Header from "../components/header/Header"

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
        
            <Header title="Lista de Projetos" />

            <div className="flex items-center justify-center">
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
