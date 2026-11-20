import { useState } from "react"
import Header from "../components/header/Header"
import api from "../services/api"
import { useNavigate } from "react-router-dom"

const CreateProject = () => {

    // Hook: React -> useState
    const [name, setName] = useState("")

    // Hook: react-router-dom
    const navigate = useNavigate()

    const handleCreateProject = async (
        event : React.SubmitEvent<HTMLFormElement>
    ) => {
        event.preventDefault()

        const data = {
            name
        }

        try {
            
            const response = await api.post("/projects", data)
            console.log(response)
            const { id } = response.data
            alert(`Projeto inserido com sucesso! Id: ${id}`)
            // Redirecionar para a página de projetos
            navigate('/projects')

        } catch (error) {
            alert("Erro ao cadastrar o projeto!")
            console.error(error)
        }


    }

    return(
        <>
        
            <Header title="Cadastro de projetos" />

            <form onSubmit={handleCreateProject}>

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
                    <button type="submit">Cadastrar</button>
                    <button type="reset">Limpar</button>
                </div>

            </form>

        </>
    )

}

export default CreateProject
