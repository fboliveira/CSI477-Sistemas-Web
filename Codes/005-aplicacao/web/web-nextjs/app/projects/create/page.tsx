"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

export default function CreateProject() {

    const [nome, setNome] = useState('')

    const { push } = useRouter()

    async function handleSubmit(event : FormEvent) {
        event.preventDefault()

        const data = {
            name: nome
        }

        const requestInit : RequestInit = {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        }

        try {
            
            const response = await fetch('http://localhost:5555/projects', 
                requestInit)

            if(response.ok) {
                const project = await response.json()
                const { id } = project
                window.alert(`Projeto inserido com sucesso! Id: ${id}`)
                push('/projects')
            }

        } catch (error) {
            window.alert('Erro na inclusão do Projeto!')
            console.error(error)
        }


    }

    return(
        <div>
            <h2>Cadastro de projetos - {nome}</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        name="name"
                        value={nome}
                        id="name"
                        onChange={(event) =>{
                            setNome(event.target.value)
                        }}
                        
                        
                        
                        />
                </div>

                <div>
                    <button type="submit" className="bg-blue-300">Cadastrar</button>
                </div>

            </form>

        </div>
    )

}