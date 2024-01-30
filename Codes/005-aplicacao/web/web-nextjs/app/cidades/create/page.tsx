"use client"

import { FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import Input from "@/app/components/forms/Input";

import getAllEstados from "@/app/repository/estados/GetAllEstados";
import EstadoInterface from "@/app/types/estado";

export default function CreateCidade() {

    const [nome, setNome] = useState('');
    const [estadoId, setEstadoId] = useState('');
    const [estados, setEstados] = useState<EstadoInterface[]>([])

    const { push } = useRouter()

    useEffect(() =>{

        getAllEstados()
            .then(data => setEstados(data))
            .catch(error => console.error(error))

    },[])

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = {
            nome,
            estado_id : Number(estadoId)
        }

        const requestInit: RequestInit = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        try {

            const response = await fetch('http://localhost:5000/cidades', requestInit)

            if (response.ok) {
                const cidade = await response.json();
                const { id } = cidade;
                window.alert(`Cidade inserida com sucesso! Id: ${id}`)
                // Redirect -> /cidades
                push('/cidades')
            }

        } catch (error) {

        }

    }


    return (
        <main className="container m-auto">

            <h1>Cadastro de cidades: {nome}-{estadoId}</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <Input name="nome" label="Nome" setValue={(event) => {
                        setNome(event.target.value)
                    }} />
                </div>

                <Input 
                    name="estadoId" 
                    label="Estado" 
                    value={estadoId}
                    setValue={(event) => {
                    setEstadoId(event.target.value)
                }} />

                <div>
                    <label htmlFor="estadoId">Estado</label>
                    <select 
                        name="estadoId" 
                        id="estadoId"
                        value={estadoId}
                        onChange={(event) => {
                            setEstadoId(event.target.value)
                        }}>
                        
                        <option 
                            value=""
                            selected
                            disabled
                        >Selecione:</option>

                        {
                            estados.map((estado) => {

                                return(
                                    <option 
                                        value={estado.id}
                                        key={estado.id}
                                        >{estado.nome}</option>
                                )

                            })
                        }

                    </select>

                </div>

                <div>
                    <button
                        type="submit">Cadastrar</button>
                    <button type="reset">Limpar</button>
                </div>

            </form>

        </main>
    )

}