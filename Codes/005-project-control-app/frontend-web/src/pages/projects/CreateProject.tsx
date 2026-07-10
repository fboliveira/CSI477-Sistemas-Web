import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AppHeader from "../../components/AppHeader/AppHeader"
import api from "../../service/api"

const CreateProject = () => {

    // Nome do projeto
    const [ name, setName ] = useState('')

    // Navegação com o a lista de projetos
    const navigate = useNavigate()

    // Manipular/tratar a gravação - post
    const handleCreateProject = async (
        event : React.SubmitEvent<HTMLFormElement>
    ) => {
        event.preventDefault()

        // Validações - frontend
        // -- Repetir no backend
        //
        // Construção do objeto com os dados
        const data = {
            name
        }

        try {
            // Envia requisição ao server
            const response = await api.post('/api/projects', data)
            console.log(response.data)

            // Recupera informações de retorno
            const { id, name } = response.data

            // Exibe mensagem
            alert(`Projeto incluído! ${id} - ${name}`)

            // Retornar para a lista de projetos
            navigate('/projects')

        } catch (error) {
            console.error(error)
            alert('Erro no cadastro do Projeto!')
        }

    }

    return (
        <>
           <AppHeader title="Inclusão do projeto" />
           <h3>Projeto: {name}</h3>  
           <form onSubmit={handleCreateProject}>
                        
            <label htmlFor="name">Nome</label> 
            <input 
                type="text" 
                name="name" 
                id="name" 
                value={name}
                onChange={
                    (event) => setName(event.target.value)
                }
            />
            
            <button type="submit">Incluir</button>
            <button>Voltar</button>

            </form> 
        
        </>
    )

}

export default CreateProject