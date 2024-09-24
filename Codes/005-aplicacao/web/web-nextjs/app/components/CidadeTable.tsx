'use client'

import Link from "next/link"
import ICidade from "../types/ICidade"
import { useEffect, useState } from "react"


const getAllCidades = async() => {

    const response = await fetch('http://localhost:5000/cidades', {
        cache: 'no-cache'
    })

    return response.json()

}

export default function CidadeTable() {

    // Lista de cidades
    // const cidades : ICidade[] = await getAllCidades()

    const [ cidades, setCidades ] = useState<ICidade[]>([])

    useEffect(() => {

        getAllCidades()
            .then(data => setCidades(data))

    }, [])

    const handleDelete = async( id : number ) => {

        const data = {
            id
        }

        const requisicao : RequestInit = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        // Invocar a requisição - delete
        try {
            const response = await fetch('http://localhost:5000/cidades', requisicao)

            if (response.ok) {
                // Tratar o resultado
                const cidade = await response.json();
                const { id } = cidade;

                window.alert(`Cidade excluída com sucesso! Id: ${id}`)

                // Atualizar a lista de cidades
                // Retirar o id excluído
                setCidades(cidades.filter(
                    item => item.id != id 
                ))
            }

        } catch (error) {
            window.alert("Erro na atualização da cidade!")
            console.error(error)
        }

    }

    return(

        <table>

            <thead>

                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Estado</th>
                    <th>Criado em</th>
                    <th>Atualizado em</th>
                    <th>Alterar</th>
                    <th>Excluir</th>
                </tr>

            </thead>

            <tbody>

                {
                    cidades.map((cidade)=>{
                        return(
                            <tr key={cidade.id}>
                                <td>{cidade.id}</td>
                                <td>{cidade.nome}</td>
                                <td>{cidade.estado.sigla}</td>
                                <td>{cidade.created_at?.toString()}</td>
                                <td>{cidade.updated_at?.toString()}</td>
                                <td>
                                    <Link
                                        href={`/cidades/update/${cidade.id}`}
                                    >
                                        Alterar
                                    </Link></td>
                                <td>
                                    <button
                                    
                                    onClick={() =>{

                                        if (window.confirm("Confirma exclusão?")) {
                                            handleDelete(cidade.id)
                                        }

                                    }}
                                    
                                    >

                                    Excluir
                                    </button>




                                </td>
                            </tr>
                        )
                    })
                }

            </tbody>

        </table>

    )
}