"use client"

import { FormEvent, useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"

import getByIdProject from "@/app/repository/projects/GetByIdProject"
import React from "react"
import Input from "@/app/components/forms/Input"

export default function UpdateProject() {

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
            id: parseInt(id),
            name: nome
        }

        const requestInit : RequestInit = {
            method: "PUT",
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
                window.alert(`Projeto atualizado com sucesso! Id: ${id}`)
                push('/projects')
            }

        } catch (error) {
            window.alert('Erro na atualização do Projeto!')
            console.error(error)
        }


    }

    return(
        <div>
            <h2>Alteração de projeto - {nome}</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    {/* <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        name="name"
                        value={nome}
                        id="name"
                        onChange={(event) =>{
                            setNome(event.target.value)
                        }}
                        
                        /> */}

                        <Input
                            label="Nome do projeto" 
                            name="name" 
                            value={nome} 
                            setValue={(event) =>{
                                setNome(event.target.value)
                            }}
                        />

                </div>

                <div>
                    <button type="submit" className="bg-blue-300">Atualizar</button>
                </div>

            </form>

        </div>
    )

}