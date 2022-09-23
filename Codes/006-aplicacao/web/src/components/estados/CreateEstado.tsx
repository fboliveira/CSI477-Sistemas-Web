import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const CreateEstado = () => {

    const [ nome, setNome ] = useState('');
    const [ sigla, setSigla] = useState('');

    const navigate = useNavigate();

    const handleNewEstado = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validateNome() || !validateSigla()) {
            return false;
        }


        const data = {
            nome,
            sigla
        }

        try{

            await api.post('/estados', data);
            alert('Estado Inserido com Sucesso!');
            navigate('/estados');

        } catch(error) {
            alert('Erro ao cadastrar o Estado!');
            console.error(error);
        }


    }

    const validateNome = () => {

        if (nome === "") {
            alert('Informe o nome do Estado!');
            document.getElementById('nome')?.focus();
            return false;
        }

        return true;

    }

    const validateSigla = () => {

        if (sigla === "") {
            alert('Informe a sigla/UF do Estado!');
            document.getElementById('sigla')?.focus();
            return false;
        }

        return true;

    }    

    return (
        <div>
            <h3>Cadastrar Estado: {nome}-{sigla}</h3>
            <form onSubmit={handleNewEstado}>

                <div>
                    <label 
                        htmlFor="nome"
                    >Nome</label>

                    <input type="text" 
                        name="nome" 
                        id="nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        placeholder="Nome do estado"
                        />
                </div>

                <div>
                    <label 
                        htmlFor="sigla"
                    >Sigla</label>

                    <input type="text" 
                        name="sigla" 
                        id="sigla" 
                        value={sigla}
                        onChange={e => setSigla(e.target.value)}
                        placeholder="Sigla do Estado/UF"
                        />
                </div>

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );

}

export default CreateEstado;