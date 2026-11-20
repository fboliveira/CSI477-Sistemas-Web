import { useEffect, useState } from "react"
import Header from "../components/header/Header"
import api from "../services/api"
import { useNavigate, useParams } from "react-router-dom"

const UpdateProject = () => {

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
 
    const handleUpdateProject = async (
        event : React.SubmitEvent<HTMLFormElement>
    ) => {
        event.preventDefault()

        const data = {
            id: parseInt(String(id)),
            name
        }

        try {
            
            const response = await api.patch("/projects", data)
            console.log(response)
            const { id } = response.data
            alert(`Projeto atualizado com sucesso! Id: ${id}`)
            // Redirecionar para a página de projetos
            navigate('/projects')

        } catch (error) {
            alert("Erro ao atualizar o projeto!")
            console.error(error)
        }

    }

    return(
        <>
        
            <Header title={`Atualização de projeto: ${id}`} />

            <form onSubmit={handleUpdateProject}>

                <div>

                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)} 
                    />

                </div>

                <div>
                    <button type="submit">Atualizar</button>
                    <button type="reset">Limpar</button>
                </div>

            </form>

        </>
    )

}

export default UpdateProject
