'use client'

import Link from "next/link";
import CidadeDTO from "../types/CidadeDTO";
import { useEffect, useState } from "react";

const getAllCidades = async () => {
    const cidades = await fetch('http://localhost:5555/cidades', { cache: 'no-store' });
    return cidades.json();
}


export default function CidadeTable() {

    const format = (dateString : string | undefined) => {
        
        if (dateString === undefined) {
            return;
        }

        const dateObj = new Date(dateString);

        return dateObj.toLocaleString('pt-br');

    }

    const [ cidades, setCidades ] = useState<CidadeDTO[]>([]);

    // const cidades : CidadeDTO[] = await getAllCidades();

    useEffect(() => {
        getAllCidades()
            .then((data) => {
                setCidades(data);
            })
    }, []);

    const handleDelete = async (id : number | undefined) => {
    
        const data = {
          id,
        };
    
        const requestInit: RequestInit = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
    
        try {
          const response = await fetch(
            "http://localhost:5555/cidades",
            requestInit
          );
    
          if (response.ok) {
            const cidade = await response.json();
            const { id } = cidade;
            window.alert(`Cidade excluída com sucesso! Id: ${id}`);
            
            // Atualizar a lista
            setCidades(cidades.filter(
                elem => elem.id != cidade.id
            ))  

          }
        } catch (error) {
          window.alert("Erro na exclusão da Cidade!");
          console.error(error);
        }
      };    

    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Estado</th>
                    <th>Criado em</th>
                    <th>Última atualização</th>
                    <th>Alterar</th>
                    <th>Excluir</th>
                    <th>Excluir - handle</th>
                </tr>
            </thead>

            <tbody>

                {
                    cidades.map(( cidade ) => {

                        return(
                            <tr key={cidade.id}>
                                <td>{cidade.id}</td>
                                <td>{cidade.nome}</td>
                                <td>{cidade.estado?.nome}-{cidade.estado?.sigla}</td>
                                <td>{format(cidade.created_at)}</td>
                                <td>{format(cidade.updated_at)}</td>
                                <td><Link 
                                    href={`/cidades/update/${cidade.id}`}>
                                        Atualizar
                                    </Link></td>
                                <td><Link 
                                    href={`/cidades/delete/${cidade.id}`}>
                                        Excluir
                                    </Link>
                                </td>
                                <td>
                                    <button 
                                        onClick={() => {
                                            if (window.confirm("Confirma exclusão?")) {
                                                handleDelete(cidade.id)
                                            }
                                        }}
                                        >Excluir - handle</button>
                                </td>                        
                            </tr>
                        )

                    })
                }

            </tbody>
        </table>
    )

}