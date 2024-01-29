"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation";
import Input from "@/app/components/forms/Input";

export default function CreateEstado() {

    const [nome, setNome] = useState('');
    const [sigla, setSigla] = useState('');

    const { push } = useRouter()

    async function handleSubmit(event : FormEvent) {
        event.preventDefault();

        const data = {
            nome,
            sigla
        }

        const requestInit : RequestInit = {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        }

        try {
            
            const response = await fetch('http://localhost:5000/estados', requestInit)
            
            if (response.ok) {
                const estado = await response.json();
                const { id } = estado;
                window.alert(`Estado inserido com sucesso! Id: ${id}`)
                // Redirect -> /estados
                push('/estados')
            }

        } catch (error) {
            
        }

    }


    return(
        <main className="container m-auto">

            <h1>Cadastro de estados: {nome}-{sigla}</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <Input name="nome" label="Nome" setValue={(event) =>{
                        setNome(event.target.value)
                    }} />
                </div>

                <Input name="sigla" label="Sigla" setValue={(event) => {
                    setSigla(event.target.value)
                }} />
                
                <div>
                    <button 
                        type="submit">Cadastrar</button>  
                    <button type="reset">Limpar</button> 
                </div>

            </form>

        </main>
    )

}