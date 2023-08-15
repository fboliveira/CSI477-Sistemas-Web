"use client";

import Input from "@/app/components/forms/Input";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import getAllEstados from "@/app/repository/estados/GetAllEstados";
import EstadoDTO from "@/app/types/EstadoDTO";

import getByIdCidade from "@/app/repository/cidades/GetByIdCidade";

interface UpdateCidadeParamsInterface {
    params : {
        id : string
    }
}

export default function UpdateCidade({ params } : UpdateCidadeParamsInterface) {

    const [nome, setNome] = useState("");
    const [estadoId, setEstadoId] = useState("");   
  
    const [estados, setEstados] = useState<EstadoDTO[]>([]);
    
    const { push } = useRouter();
    
    useEffect(() => {
      
      getAllEstados()
        .then(data => setEstados(data))
        .catch(error => console.error(error));

      getByIdCidade( params.id )
        .then(data => {
            setNome(data.nome);
            setEstadoId(data.estado_id);
        })
      
    },[params])
  
    const handleSubmit = async (event: FormEvent) => {
      event.preventDefault();
  
      const data = {
        nome,
        estado_id: parseInt(estadoId),
      };
  
      const requestInit: RequestInit = {
        method: "POST",
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
          window.alert(`Cidade inserida com sucesso! Id: ${id}`);
          push("/cidades");
        }
      } catch (error) {
        window.alert("Erro na inclusão da Cidade!");
        console.error(error);
      }
    };
  
    return (
      <main className="container m-auto">
        <h1>Atualização da cidade</h1>
  
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome</label>
            <Input
              name="nome"
              value={nome}
              setValue={(event) => {
                setNome(event.target.value);
              }}
            />
          </div>
  
          <div>
            <label htmlFor="estado">Estado</label>
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
                >
                  Selecione:
              </option>
  
              {
                estados.map((estado) => {
  
                  return(
                    <option
                      key={estado.id}
                      value={estado.id}>
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
    );
}