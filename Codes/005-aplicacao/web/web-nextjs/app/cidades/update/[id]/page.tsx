"use client"

import { FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import Input from "@/app/components/forms/Input";

import getAllEstados from "@/app/repository/estados/GetAllEstados";
import EstadoInterface from "@/app/types/estado";

import getByIdCidade from "@/app/repository/cidades/GetByIdCidades";

interface UpdateCidadeParamsInterface {
    params: {
        id: string
    }
}

// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes

export default function UpdateCidade( { params } : UpdateCidadeParamsInterface ) {

    const [nome, setNome] = useState('');
    const [estadoId, setEstadoId] = useState('');
    const [estados, setEstados] = useState<EstadoInterface[]>([])

    const { push } = useRouter()

    useEffect(() => {

        getAllEstados()
            .then(data => setEstados(data))
            .catch(error => console.error(error))
            
        getByIdCidade(params.id)
            .then(data => {
                setNome(data.nome)
                setEstadoId(data.estado_id)
            })
            .catch(error => console.error(error))

    }, [params])

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = {
            id : Number(params.id),
            nome,
            estado_id: Number(estadoId)
        }

        const requestInit: RequestInit = {
            method: "PUT",
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
                window.alert(`Cidade atualizada com sucesso! Id: ${id}`)
                // Redirect -> /cidades
                push('/cidades')
            }

        } catch (error) {
            console.error(error)
            window.alert("Erro na atualização da Cidade!")
        }

    }


    return (
        <main className="container m-auto">

            <h1>Atualização de cidade: {nome}-{estadoId}</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <Input 
                        name="nome" 
                        label="Nome" 
                        value={nome} 
                        setValue={(event) => {
                        setNome(event.target.value)
                    }} />
                </div>

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

                                return (
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
                        type="submit">Atualizar</button>
                    <button type="reset">Limpar</button>
                </div>

            </form>

        </main>
    )

}