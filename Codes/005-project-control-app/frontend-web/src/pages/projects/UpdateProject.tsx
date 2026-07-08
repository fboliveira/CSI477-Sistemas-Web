import { useEffect, useState } from "react"
import AppHeader from "../../components/AppHeader/AppHeader"
import { useNavigate, useParams } from "react-router-dom"
import api from "../../service/api"

const UpdateProject = () => {

    // Hook: useState()
    const [name, setName] = useState("")

    // Recuperar o valor atual do name
    // URL -> id do projeto => recuperar as informações
    const { id } = useParams()

    // Hook: react-router-dom -> useNavigate() : route
    const navigate = useNavigate()

    // Recuperar os dados atuais do projeto no backend
    useEffect(() => {
        // Server - getById
        api.get(`/api/projects/${id}`)
            .then(response => setName(response.data.name))
            .catch(error => {
                console.error(error)
                alert('Projeto inválido!')
                // Retorna para a lista
                navigate('/projects') 
            })
    }, [id, navigate])

    const handleUpdateProject = async (
        event : React.SubmitEvent<HTMLFormElement>
    ) => {
       
        event.preventDefault()

        // Server - PUT/PATCH
        const data = {
            id: parseInt(String(id)),
            name
        }

        try {
            
            const response = await api.patch('/api/projects', data)
            console.log(response)
            const { id, name } = response.data
            alert(`Projeto atualizado! ${id} - ${name}`)
            navigate('/projects')

        } catch (error) {
            alert('Erro na atualização do projeto!') 
            console.error(error) 
        }


    }

    return (

        <>
           <AppHeader title="Atualização do projeto" />
           <h3>Projeto: {id} - {name}</h3>  
           <form onSubmit={handleUpdateProject}>
                        
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
            
            <button type="submit">Atualizar</button>
            <button>Voltar</button>

            </form> 
        
        </>

    )

}

export default UpdateProject