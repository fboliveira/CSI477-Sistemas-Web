import { Link } from "react-router-dom"
import AppHeader from "../../components/AppHeader/AppHeader"
import { useEffect, useState } from "react"
import type { TaskInterface } from "../../types/tasks"
import api from "../../service/api"

const ListTasks = () => {

    const [ tasks, setTasks ] = useState<TaskInterface[]>([])

    useEffect(() => {

        api.get('/api/tasks')
            .then(response => setTasks(response.data))
            .catch(error => console.error(error))

    }, [])

    return(

        <>
            <AppHeader title="Lista de tarefas" />
            <Link to="/tasks/create">Cadastrar</Link>

            {/* Exibir a lista de tarefas */}
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Descrição</th>
                        <th>Projeto</th>
                        <th>Criada</th>
                        <th>Alterada</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        tasks.map( task =>(
                            <tr>
                                <td>{task.id}</td>
                                <td>{task.description}</td>
                                <td>{task.project.name}</td>
                                <td>{task.created_at}</td>
                                <td>{task.updated_at}</td>
                                <td>Alterar|Excluir</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>


        </>

        

    )

}

export default ListTasks