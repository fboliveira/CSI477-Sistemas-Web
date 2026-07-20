import { useEffect, useState } from "react"
import { type ProjectInterface } from "../../types/projects"
import api from "../../service/api"
import { Link, useNavigate } from "react-router-dom"
import AppHeader from "../../components/AppHeader/AppHeader"

const CreateTask = () => {

    // Hooks -> dados da tarefa
    const [description, setDescription] = useState('')
    const [projectId, setProjectId] = useState('')

    // useState - lista de projetos
    const [ projects, setProjects ] = useState<ProjectInterface[]>([])

    useEffect(() => {
        api.get('/api/projects')
            .then(response => setProjects(response.data))
            .catch(error => console.error(error))
    }, [])

    // History -> voltar para a lista
    const navigate = useNavigate()

    const handleCreateTask = async (
        event: React.SubmitEvent<HTMLFormElement>
    ) => {

        event.preventDefault()

        // Validações ...
        if (projectId === "") {
            alert("Selecione o projeto!")
            return
        }
        // ...
        // ...

        // Construir os dados para envio/POST
        const data = {
            description,
            project_id: parseInt(projectId)
        }

        try {
            const response = await api.post('/api/tasks', data)
            const { id } = response.data
            console.log(response.data)
            alert(`Tarefa cadastrada! Id: ${id}`)
            navigate('/tasks')

        } catch (error) {
            alert('Erro no cadastro da tarefa!')
            console.error(error)
        }

    }

    return(
        <>
            
            <AppHeader title="Cadastro de Tarefas" />

            <form onSubmit={handleCreateTask}>

                <input 
                    type="text" 
                    name="description" 
                    id="description"
                    value={description}
                    onChange={
                        event => setDescription(event.target.value)
                    }
                     />
                <input 
                    type="text" 
                    name="project_id" 
                    id="project_id"
                    value={projectId}
                    onChange={
                        event => setProjectId(event.target.value)
                    } />
                
                <select 
                    name="project" 
                    id="project"
                    value={projectId}
                    onChange={event => setProjectId(event.target.value)}
                >

                    <option value="">Selecione:</option>
                    {
                        projects.map(project =>(
                            <option value={project.id}>{project.name}</option>
                        ))
                    }

                </select>

                <div>
                    <button type="submit">Cadastrar</button>
                    <Link to="/tasks">Voltar</Link>
                </div>


            </form>
                
        </>
    )

}

export default CreateTask