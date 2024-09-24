'use client'

import Input from "@/app/components/forms/Input";
import { getAllEstados } from "@/app/repository/estados/EstadoRepository";
import IEstado from "@/app/types/IEstado";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

import { getByIdCidade } from "@/app/repository/cidades/CidadeRepository";


interface IUpdateCidadeParams {
    params : {
        id: string
    }
}

export default function CidadeUpdate({ params } : IUpdateCidadeParams) {

    const [ nome, setNome ] = useState('')
    const [ estadoId, setEstadoId ] = useState('')

    const [ estados, setEstados ] = useState<IEstado[]>([])

    const { push } = useRouter()

    useEffect(() =>{

        getAllEstados()
            .then(data => setEstados(data))
            .catch(error => console.error(error))

        getByIdCidade( params.id )
            .then( data => {
                setNome(data.nome)
                setEstadoId(data.estado_id)
            })
        

    }, [params])

    // Invocar a API/backend - atualizar a cidade
    const handleSubmit = async (event : FormEvent) => {

        event.preventDefault()
        // Validar

        // Definir o objeto
        const data = {
            id: params.id,
            nome,
            estado_id: estadoId
        }

        // Definir a requisição - atualização
        const requisicao: RequestInit = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        // Invocar a requisição
        try {
            const response = await fetch('http://localhost:5000/cidades', requisicao)

            if (response.ok) {
                // Tratar o resultado
                const cidade = await response.json();
                const { id } = cidade;

                window.alert(`Cidade atualizada com sucesso! Id: ${id}`)

                // Redirecionar para a página com a lista de cidades
                push('/cidades')

            }

        } catch (error) {
            window.alert("Erro na atualização da cidade!")
            console.error(error)
        }

    }

    return (
        <main>

            <form onSubmit={handleSubmit}>

                <Input
                    label="Nome da cidade"
                    name="nome"
                    value={nome}
                    setValue={(event) => {
                        setNome(event.target.value)
                    }}
                /> 

                <div>
                    <label htmlFor="estadoId">Estado</label>
                    <select
                        name="estadoId"
                        id="estadoId"
                        value={estadoId}
                        onChange={(event) => {
                            setEstadoId(event.target.value)
                        }}
                    >

                        <option
                            value=""
                            selected
                            disabled
                        >Selecione:</option>
                        
                        {
                            estados.map((estado)=>{
                                return(
                                    <option 
                                        key={estado.id}
                                        value={estado.id}
                                    >
                                        {estado.nome}-{estado.sigla}
                                    </option>
                                )
                            })
                        }
                        
                    </select>    
                </div>

                <div>

                    <button type="submit">Atualizar</button>
                    <button type="reset">Limpar</button>
                    <button type="button">Voltar</button>

                </div>                   

            </form>

        </main>
    )


}