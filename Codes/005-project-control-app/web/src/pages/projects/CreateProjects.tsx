import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../../services/api"

const CreateProject = () => {
 
    const [ name, setName ] = useState("")
    const navigate = useNavigate();

    const handleCreateProject = async (event : React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault();
        
        const data = {
            name
        }

        try {
            
            const response = await api.post('/api/projects', data)
            console.log(response)
            const { id } = response.data
            alert(`Projeto inserido com sucesso! Id: ${id}`)
            navigate('/projects')

        } catch (error) {
            alert("Erro ao cadastrar o Projeto !")
            console.error(error)
        }

    }


    return(

        <div>

            <h2>Cadastro de projetos: {name}</h2>

            <form onSubmit={handleCreateProject}>
                <div className="card">
                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={name}
                        placeholder="Nome do projeto"
                        onChange={
                            e => setName(e.target.value)
                        }
                        />
                </div>
                <div>
                    <button type="submit">Cadastrar</button>
                    <button type="reset">Limpar</button>
                    <Link to="/projects">Voltar</Link>
                </div>
            </form>

        </div>

    )

}

export default CreateProject