import { useEffect, useState } from "react"
import api from "../../services/api"
import {  type ProjectInterface } from "../../types/projects"


const ListProjects = () => {

    const [ projects, setProjects ] = useState<ProjectInterface[]>([])

    useEffect(() => {

        api.get("/api/projects")
            .then( response => {
                // console.log(response)
                setProjects(response.data)
            })

    }, [])

    return (

        <>
            <h2>Lista de projetos</h2>

            <ul>

                {
                    projects.map( p => (
                        <li key={p.id}>{p.name}</li>
                    ) )
                }
        
            </ul>
        </>

    )

}

export default ListProjects