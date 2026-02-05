import { useState } from "react"
import AppHeader from "../../components/AppHeader"

const CreateTask = () => {

    const [ description, setDescription ] = useState('')
    const [ project_id, setProjectId ] = useState('')

    return(
        <>
            <AppHeader title="Adicionar Tarefa" />

            <form>

                <input 
                    type="text"
                    name="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />

                <input 
                    type="text"
                    name="project_id"
                    value={project_id}
                    onChange={e => setProjectId(e.target.value)}
                />

            </form>
        
        </>
    )


}

export default CreateTask