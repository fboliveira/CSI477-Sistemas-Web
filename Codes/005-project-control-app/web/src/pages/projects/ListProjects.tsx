import { useEffect, useState } from "react"
import api from "../../services/api"
import { type ProjectInterface } from "../../types/ProjectInterface"
import { Link } from "react-router-dom"
import Menu from "../../components/menu/Menu"

const ListProjects = () => {

    const [ projects, setProjects ] = useState<ProjectInterface[]>([])

    useEffect(() =>{

        api.get("/api/projects")
            .then(response =>  {
                console.log(response)
                setProjects(response.data)
            })

    },[])


    return(
        <>
            <h2>Lista de projetos</h2>
            <div>
                <Link to="/">Voltar</Link>
                <Menu />
            </div>

            <ul>
                {
                    projects.map( p => (
                        <li key={p.id}>{p.name}</li>
                      )

                    )
                }
            </ul>

        </>
    )



}

export default ListProjects