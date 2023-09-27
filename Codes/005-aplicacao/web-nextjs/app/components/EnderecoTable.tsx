'use client'

import EnderecoDTO from "../types/EnderecoDTO";
import { useEffect, useState } from "react";

const getAllEndereco = async () => {

    const enderecos = await fetch('http://localhost:5555/endereco', { cache: 'no-store' });
    return enderecos.json();

}



export default function EnderecoTable() {

    const [enderecos, setEnderecos ] = useState<EnderecoDTO[]>([]);

    useEffect(() => {
        getAllEndereco()
            .then((data) => {
                setEnderecos(data);
            })
    }, []);


    return(
        <table className="table-auto w-full border border-collapse border-stone-950">

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Rua</th>
                    <th>Numero</th>
                    <th>Complemento</th>
                    <th>Bairro</th>
                    <th>Telefone</th>
                    <th>Created_at</th>
                    <th>updated_at</th>
                </tr>
            </thead>
            <tbody>

                {
                    enderecos.map( (endereco) => {

                        return(
                            <tr key={endereco.id} className="border border-stone-400">
                                <td>{endereco.id}</td>
                                <td>{endereco.rua}</td>
                                <td>{endereco.numero}</td>
                                <td>{endereco.complemento}</td>
                                <td>{endereco.bairro}</td>
                                <td>{endereco.telefone}</td>
                                <td>{endereco.created_at}</td>
                                <td>{endereco.updated_at}</td>
                            </tr>
                        )

                    })
                }

            </tbody>

        </table>
    )

}