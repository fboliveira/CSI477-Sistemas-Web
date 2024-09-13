"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"

export default function CreateEstado() {

    const [ nome, setNome ] = useState('');
    const [ sigla, setSigla ] = useState('');

    const { push } = useRouter();

    async function handleSubmit(event : FormEvent) {

        event.preventDefault();
        // Validação dos dados
        // ...

        const data = {
            nome,
            sigla   
        }
        // Invocar a API - gravar UF
        const requisicao : RequestInit = {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        }

        try {
            
            const response = await fetch('http://localhost:5000/estados', requisicao)
            // Se tudo correto, redirecionar lista de ufs
            if (response.ok) {

                const estado = await response.json()

                const { id } = estado

                window.alert(`Estado inserido com sucesso! Id: ${id}`)

                // Redirecionar
                push('/estados')

            }
            
        } catch (error) {
            // Caso contrário, reportar o erro.
            window.alert('Erro na inclusão do Estado!')
            console.error(error)
        }


    }

    return(
        <main>
            <h1>Cadastro de estado: {nome}-{sigla}</h1>

            <form onSubmit={handleSubmit} action="/cadastrar">
                
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text" 
                        name="nome" 
                        id="nome" 
                        onChange={(event) =>{
                            setNome(event.target.value)
                        }}  
                    />
                </div>                
                <div>
                    <label htmlFor="sigla">Sigla</label>
                    <input 
                        type="text" 
                        name="sigla" 
                        id="sigla" 
                        onChange={(event) => {
                            setSigla(event.target.value)
                        }}
                    />
                </div>

                <div>
                    <button type="submit">Cadastrar</button>
                    <button type="reset">Limpar</button>
                </div>

            </form>

        </main>
    )

}