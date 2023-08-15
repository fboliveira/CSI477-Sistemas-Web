'use client'

import Link from "next/link";
import CidadeDTO from "../types/CidadeDTO";
import getAllCidades from "../repository/cidades/GetAllCidades";
import { useEffect, useState } from "react";

export default function CidadeTable() {

    const [ cidades, setCidades ] = useState<CidadeDTO[]>([])

    const format = (dateString : string | undefined) => {
        
        if (dateString === undefined) {
            return;
        }

        const dateObj = new Date(dateString);

        return dateObj.toLocaleString('pt-br');

    }

    // const cidades : CidadeDTO[] = await getAllCidades();

    useEffect(() => {
        getAllCidades()
            .then((data) => {
                setCidades(data)
            });
    }, [])

    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Estado</th>
                    <th>Criado em</th>
                    <th>Última atualização</th>
                    <th>Editar</th>
                    <th>Excluir</th>
                </tr>
            </thead>

            <tbody>

                {
                    cidades.map(( cidade : CidadeDTO ) => {

                        return(
                            <tr key={cidade.id}>
                                <td>{cidade.id}</td>
                                <td>{cidade.nome}</td>
                                <td>{cidade.estado?.nome}-{cidade.estado?.sigla}</td>
                                <td>{format(cidade.created_at)}</td>
                                <td>{format(cidade.updated_at)}</td>
                                <td><Link href={`/cidades/update/${cidade.id}`}>Atualizar</Link></td>
                                <td><Link href={`/cidades/delete/${cidade.id}`}>Excluir</Link></td>
                            </tr>
                        )

                    })
                }

            </tbody>
        </table>
    )

}