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

    const handleDeleteProject = async (id: number) => {

        // Validações ---
        if ( !confirm('Confirma exclusão do projeto?') ) {
            return
        }

        // Server -> delete()
        try {
            
            // Atualizar?
            setProjects( projects.filter( p => p.id != id ) )

            const response = await api.delete('/api/projects', 
                { data: {
                    id
                } }
            )

            alert('Projeto excluído!')
            console.log(response)

        } catch (error) {
            alert('Erro na exclusão do projeto!')
            console.error(error)
        }

    }

    return(
        <>
            <AppHeader title="Lista de projetos" />
            <div>
                { projects.map((p) => (
                    <>
                      <Card 
                        id={p.id}
                        name={p.name}
                        updateUrl={`/projects/${p.id}`}
                      />

                      <button
                        onClick={
                            () => {
                                handleDeleteProject(p.id)
                            }
                        }>Excluir</button>

                    </>
                ))}

            </div>

        
        </>
    )

}

export default ListProjects