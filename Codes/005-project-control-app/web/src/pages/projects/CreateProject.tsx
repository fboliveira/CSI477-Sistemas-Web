import { useState } from "react"
import AppHeader from "../../components/AppHeader"
import api from "../../services/api"
import { useNavigate } from "react-router-dom"


const CreateProject = () => {

    const [ name, setName ] = useState('')

    // Hook: react-router-dom
    const navigate = useNavigate()

    const handleCreateProject = async (event : React.FormEvent<HTMLFormElement> ) => {

        try{        
            event.preventDefault()

            const data = {
                name
            }

            const response = await api.post('/api/projects', data)
            console.log(response)
            const { id } = response.data
            alert(`Projeto inserido com sucesso! Id: ${id}`)
            navigate('/projects')
        }catch(error) {
            alert('Erro ao cadastrar o Projeto!')
            console.error(error)
        }
    }

    return (
        
        <>
            <AppHeader />
            <h2>Cadastro de Projeto: {name}</h2>

            <form onSubmit={handleCreateProject}>

                <div>
                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nome do Projeto"
                        value={name}
                        onChange={
                            event => setName(event.target.value)
                        }
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
