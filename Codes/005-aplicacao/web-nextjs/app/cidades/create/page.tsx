"use client";

import Input from "@/app/components/forms/Input";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function CidadeCreate() {
  const [nome, setNome] = useState("");
  const [estadoId, setEstadoId] = useState("");

  const { push } = useRouter();

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
      <h1>Cadastro de cidade</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome</label>
          <Input
            name="nome"
            setValue={(event) => {
              setNome(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="estado">Estado</label>
          <Input
            name="estado"
            setValue={(event) => {
              setEstadoId(event.target.value);
            }}
          />
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
