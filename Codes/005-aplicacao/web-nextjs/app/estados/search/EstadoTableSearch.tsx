'use client'

import EstadoDTO from "@/app/types/EstadoDTO";
import { useEffect, useState } from "react";

interface EstadoTableSearchInterface {
    search : string
}


export default function EstadoTableSearch({ search } : EstadoTableSearchInterface) {

    const getAllEstado = async () => {

        const estados = await fetch('http://localhost:5555/estados', { cache: 'no-store' });
        const result = await estados.json();
        setCompleto(result);
        setEstados(result);
    
    }    

    const [ estados, setEstados ] = useState<EstadoDTO[]>([])
    const [ completo, setCompleto ] = useState<EstadoDTO[]>([])

    useEffect(() => {
        getAllEstado();
    }, []);

    useEffect(() => {
        if (search === "") {
            setEstados(completo)
            return;
        }
        
        setEstados(estados
            .filter(estado => 
                estado.nome
                .toLocaleLowerCase().includes(search.toLocaleLowerCase())));
    }, [search, completo, estados]);


    return(
        <table className="table-auto w-full border border-collapse border-stone-950">

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Sigla</th>
                    <th>Criado em</th>
                    <th>Última atualização</th>
                </tr>
            </thead>
            <tbody>

                {
                    estados.map( (estado) => {

                        return(
                            <tr key={estado.id} className="border border-stone-400">
                                <td>{estado.id}</td>
                                <td>{estado.nome}</td>
                                <td>{estado.sigla}</td>
                                <td>{estado.created_at}</td>
                                <td>{estado.updated_at}</td>
                            </tr>
                        )

                    })
                }

            </tbody>

        </table>
    )


}