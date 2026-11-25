import { useEffect, useState } from "react"
import Header from "../components/header/Header"
import api from "../services/api"
import { useNavigate, useParams } from "react-router-dom"

const DeleteProject = () => {

    // Hook: React -> useState
    const [name, setName] = useState("")

    // Hook: react-router-dom
    const navigate = useNavigate()

    // Recuperar as informações do projeto - id
    // ID do projeto -> parâmetro
    const { id } = useParams()

    // Fazer uma requisição ao server para recuperar
    // os dados do projeto pelo ID
    useEffect(() => {

        // Server: get by id
        api.get(`/projects/${id}`)
            .then(response => setName(response.data.name))
            .catch(error => {
                console.error(error)
                alert('Erro ao recuperar o projeto!')
                navigate('/projects')
            })

    },[id, navigate])
 
    const handleDeleteProject = async (
        event : React.SubmitEvent<HTMLFormElement>
    ) => {
        event.preventDefault()

        // Validações...
        // ...

        if (!window.confirm("Confirma a exclusão do projeto?")) {
            return
        }

        const data = {
            id: parseInt(String(id))
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
            // Redirecionar para a página de projetos
            navigate('/projects')

        } catch (error) {
            alert("Erro ao excluir o projeto!")
            console.error(error)
        }

    }

    return(
        <>
        
            <Header title={`Exclusão do projeto: ${id}`} />

            <form onSubmit={handleDeleteProject}>

                <div>

                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name"
                        disabled={true}
                        value={name}
                        onChange={(event) => setName(event.target.value)} 
                    />

                </div>

                <div>
                    <button type="submit">Excluir</button>
                    <button type="reset">Limpar</button>
                </div>

            </form>

        </>
    )

}

export default DeleteProject
