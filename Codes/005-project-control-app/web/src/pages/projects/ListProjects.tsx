import { useEffect, useState } from "react"
import api from "../../services/api"
import {  type ProjectInterface } from "../../types/projects"
import AppHeader from "../../components/AppHeader"
import Card from "../../components/Card/Card"
import { Link } from "react-router-dom"

const ListProjects = () => {

    const [ projects, setProjects ] = useState<ProjectInterface[]>([])

    useEffect(() => {

        api.get("/api/projects")
            .then( response => {
                // console.log(response)
                setProjects(response.data)
            })

    }, [])

    return (

        <>
            <AppHeader />

            <h2 className="text-2xl">Lista de projetos</h2>
            <Link to="/projects/create" >Cadastrar</Link>
            <div className="flex flex-wrap">
                {
                    projects.map( p => (
                        <Card id={p.id} name={p.name} />
                    ) )
                }
            </div>
        </>

    )

}

export default ListProjects