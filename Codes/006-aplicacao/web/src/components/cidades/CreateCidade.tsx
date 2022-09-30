import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { EstadoModel } from "../estados/ListEstados";
import SelectEstados from "../estados/SelectEstados";

const CreateCidade = () => {

    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [estadoId, setEstadoId] = useState(0);

    const [estados, setEstados] = useState<EstadoModel[]>([]);

    useEffect(() => {
        api.get('/estados')
            .then(response => {
                setEstados(response.data);
            })
    }, []);

    const handleNewCidade = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            nome,
            estado_id: estadoId
        }

        try {
            await api.post('/cidades', data);
            navigate('/cidades');
        } catch (error) {
            alert('Erro ao cadastrar a cidade!');
            console.error(error);
        }

    }

    return (
        <div>
            <h3>Cadastrar Cidade</h3>

            <form onSubmit={handleNewCidade}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Nome da cidade"
                        value={nome}
                        onChange={e => setNome(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="estadoId">estadoId</label>
                    <input
                        type="text"
                        name="estadoId"
                        id="estadoId"
                        placeholder="Estado ID da cidade"
                        value={estadoId}
                        onChange={e => setEstadoId(parseInt(e.target.value))} />
                </div>

                <div>
                    <select name="estado"
                        id="estado"
                        value={estadoId}
                        onChange={e => setEstadoId(parseInt(e.target.value))}
                    >
                        <option
                            value="0" selected>Selecione</option>

                        {
                            estados.map(item => (
                                <option value={item.id}>{item.nome}</option>
                            ))
                        }

                    </select>
                </div>

                <SelectEstados 
                    id={estadoId} 
                    setId={setEstadoId}
                />

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );

}

export default CreateCidade;