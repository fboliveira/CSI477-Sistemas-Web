import { useEffect, useState } from "react"
import api from "../services/api"
import type { ProjectInterface } from "../types/projects"
import Card from "../components/card/Card"
import Header from "../components/header/Header"
import { Link } from "react-router-dom"

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

    const handleDeleteProject = async (
       id: number 
    ) => {

        // Validações...
        // ...

        if (!window.confirm("Confirma a exclusão do projeto?")) {
            return
        }

        const data = {
            id
        }

        try {
            
            const response = await api.delete("/projects",  
                { 
                    data 
                })
            console.log(response)
            const { id } = response.data.project
            alert(`Projeto exclusão com sucesso! Id: ${id}`)
            alert(response.data.message)
            // Redirecionar para a página de projetos?
            
            // Atualizar
            setProjects( projects.filter( project => project.id != id )  )
            

        } catch (error) {
            alert("Erro ao excluir o projeto!")
            console.error(error)
        }

    }

    return(
        <>
        
            <Header title="Lista de Projetos" />

            <div>
                <Link to="/projects/create">Cadastrar</Link>
            </div>

            <div className="flex items-center justify-center">
            {
                projects.map((project) =>(
                    <div>
                        <Card
                            id={project.id}
                            name={project.name}
                            updateLink={`/projects/${project.id}`}
                            deleteLink={`/projects/${project.id}/delete`}
                        />
                        <button
                            onClick={() =>{
                               handleDeleteProject(project.id) 
                            }}
                        
                        >Excluir (direto)</button>
                    </div>
                ))
            }
            </div>
            

        </>
    )

}

export default ListProjects
