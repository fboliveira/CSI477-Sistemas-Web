'use client'

import Input from "@/app/components/forms/Input";
import EstadoTableSearch from "./EstadoTableSearch";
import { useState } from "react";

export default function EstadosSearch() {

    const [ nome, setNome ] = useState('');

    return(
        <main className="container m-auto">
            <h1>Pesquisa por estados</h1>
            <div>
                <label>Nome do estado para pesquisa: </label>
                <Input name={nome} 
                        setValue={(event) => {setNome
                            (event.target.value)}
                        }
                        placeholder="Pesquise o nome do estado" />
            </div>
            <EstadoTableSearch search={nome} />
        </main>
    );

}