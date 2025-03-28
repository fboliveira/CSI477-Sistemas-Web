"use client"

import { FormEvent, useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"

import getByIdProject from "@/app/repository/projects/GetByIdProject"
import React from "react"
import Input from "@/app/components/forms/Input"

export default function DeleteProject() {

    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    // url: /[id]
    const params = useParams<{id: string}>()

    const { push } = useRouter()
    
    useEffect(() => {

        setId(params.id)

        getByIdProject(params.id)
            .then(data => setNome(data.name))
            .catch(error => console.error(error))

    }, [params])

    async function handleSubmit(event : FormEvent) {
        event.preventDefault()

        const data = {
            id: parseInt(id)
        }

        const requestInit : RequestInit = {
            method: "DELETE",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        }

        try {
            
            const response = await fetch('http://localhost:5555/projects', 
                requestInit)

            if(response.ok) {
                const message = await response.json()
                const { id } = message.project
                window.alert(`Projeto excluído com sucesso! Id: ${id}`)
                push('/projects')
            }

        } catch (error) {
            window.alert('Erro na exclusão do Projeto!')
            console.error(error)
        }


    }

    return(
        <div>
            <h2>Exclusão de projeto - {nome}</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        name="name"
                        value={nome}
                        id="name"
                        disabled
                    />

                </div>

                <div>
                    <button type="submit" className="bg-blue-300">Excluir</button>
                </div>

            </form>

        </div>
    )

}