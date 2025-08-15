import { useEffect, useState } from "react"
import api from "../../services/api"
import type { ProjectInterface } from "../../types/ProjectInterface"

const CreateTask = () => {

    const [projects, setProjects] = useState<ProjectInterface[]>([])

    const [description, setDescription] = useState("")
    const [projectId, setProjectId] = useState("")

    useEffect(() =>{

        api.get("/api/projects")
            .then(response =>  {
                console.log(response)
                setProjects(response.data)
            })

    },[])

    return(
        <>
        
        <form action="">

            <input type="text" name="description" id="description" />
            <input type="text" name="project_id" id="project_id" />

            <select 
                name="project" 
                id="project"

                onChange={e => setProjectId(e.target.value)}

            >

                <option value="">Selecione:</option>

                {
                    projects.map(p => (
                        <option value={p.id}>{p.name}</option>
                    ))

                }


            </select>

        </form>
        
        
        </>
    )

}

export default CreateTask