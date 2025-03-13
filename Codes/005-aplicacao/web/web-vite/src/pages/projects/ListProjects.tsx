import { useEffect, useState } from "react"
import api from "../../services/api"

export default function ListProjects() {

    // Recuperar a lista de projetos 
    // Armazenar a lista
    const [ projetos, setProjetos ] = useState([])

    const getAllProjects = async () => {

        const response = await api.get('/projects')
        console.log(response.data)
        setProjetos(response.data)

    }

    useEffect(() => {
        getAllProjects()
    }, [])


    // Retornar - lista seja apresentada
    return(

        <>
            <h2>Lista de projetos</h2>

            {/* Percorrer a lista e exibir */}

            <ul>

                {
                    projetos.map(p =>(
                        <li>{p.name}</li>
                    ))

                }

            </ul>
        </>

    )

}