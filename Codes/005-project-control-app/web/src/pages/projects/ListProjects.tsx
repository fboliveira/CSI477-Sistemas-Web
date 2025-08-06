import { useEffect, useState } from "react"
import api from "../../services/api"

const ListProjects = () => {

    const [ projects, setProjects ] = useState([])

    useEffect(() =>{

        api.get("/api/projects")
            .then(response => console.log(response))

    },[])


    return(
        <>
            <h2>Lista de projetos</h2>

            <ul>

            </ul>

        </>
    )



}

export default ListProjects