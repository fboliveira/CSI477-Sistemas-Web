import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import api from "../../services/api"

const UpdateProject = () => {
 
    const [ name, setName ] = useState("")
    const navigate = useNavigate()

    const { id } = useParams()

    useEffect(() => {

        api.get(`/api/projects/${id}`)
            .then(response => {
                setName(response.data.name)
            })

    },[id])

    const handleUpdateProject = async (event : React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault();
        
        const data = {
            id : parseInt(String(id)),
            name
        }

        try {
            
            const response = await api.patch('/api/projects', data)
            console.log(response)
            const { id } = response.data
            alert(`Projeto atualizado com sucesso! Id: ${id}`)
            navigate('/projects')

        } catch (error) {
            alert("Erro ao atualizar o Projeto !")
            console.error(error)
        }

    }


    return(

        <div>

            <h2>Atualização de projetos: {id} - {name}</h2>

            <form onSubmit={handleUpdateProject}>
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
                    <button type="submit">Atualizar</button>
                    <button type="reset">Limpar</button>
                    <Link to="/projects">Voltar</Link>
                </div>
            </form>

        </div>

    )

}

export default UpdateProject