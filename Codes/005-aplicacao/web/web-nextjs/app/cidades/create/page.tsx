'use client'

import Input from "@/app/components/forms/Input";
import { getAllEstados } from "@/app/repository/estados/EstadoRepository";
import IEstado from "@/app/types/IEstado";
import { FormEvent, useEffect, useState } from "react";

export default function CidadeCreate() {

    const [ nome, setNome ] = useState('')
    const [ estadoId, setEstadoId ] = useState('')

    const [ estados, setEstados ] = useState<IEstado[]>([])

    useEffect(() =>{

        getAllEstados()
            .then(data => setEstados(data))
            .catch(error => console.error(error))

    }, [])

    // Invocar a API/backend - cadastrar a cidade
    const handleSubmit = (event : FormEvent) => {

        event.preventDefault()
        // Validar

        // Definir o objeto

        // Definir a requisição

        // Invocar a requisição

        // Tratar o resultado

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

                    <button type="submit">Cadastrar</button>
                    <button type="reset">Limpar</button>
                    <button type="button">Voltar</button>

                </div>                   

            </form>

        </main>
    )


}