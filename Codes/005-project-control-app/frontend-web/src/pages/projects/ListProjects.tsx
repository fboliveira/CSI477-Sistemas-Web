import { useEffect, useState } from "react"
import api from "../../service/api"
import { type ProjectInterface } from "../../types/projects"
import Card from "../../components/Card/Card"

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
            <h3 className="text-3xl font-bold">Lista de projetos</h3>
            <div>
                { projects.map((p) => (
                    <Card 
                        id={p.id}
                        name={p.name}
                    /> 
                ))}

            </div>

        
        </>
    )

}

export default ListProjects