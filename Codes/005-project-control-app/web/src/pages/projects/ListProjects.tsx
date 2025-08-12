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
                <Menu />
                <Link to="/projects/create">Cadastrar</Link>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projects.map( p => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.name}</td>
                                <td>{p.created_at}</td>
                                <td>{p.updated_at}</td>
                                <td><Link to={`/projects/${p.id}`}>Atualizar</Link></td>
                            </tr>
                            )

                        )
                    }
                </tbody>
            </table>


        </>
    )



}

export default ListProjects