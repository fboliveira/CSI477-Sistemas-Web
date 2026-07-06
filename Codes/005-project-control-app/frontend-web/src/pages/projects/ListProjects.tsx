import { useEffect, useState } from "react"
import api from "../../service/api"
import { type ProjectInterface } from "../../types/projects"
import Card from "../../components/Card/Card"
import AppHeader from "../../components/AppHeader/AppHeader"
import { Link } from "react-router-dom"

const ListProjects = () => {

    // Estado - lista de projetos
    // hook - useState()
    const [ projects, setProjects ] = useState<ProjectInterface[]>([])

    // Hook - useEffect(func, [])
    useEffect(() => {

        api.get('/api/projects')
            .then((response) => {
                console.log(response)
                setProjects(response.data)
            })

    }, [])

    return(
        <>
            <AppHeader title="Lista de projetos" />
            <div>
                { projects.map((p) => (
                    <>
                      <Card 
                        id={p.id}
                        name={p.name}
                      />
                      <Link to={`/projects/${p.id}`}>Atualizar</Link>
                    </>
                ))}

            </div>

        
        </>
    )

}

export default ListProjects