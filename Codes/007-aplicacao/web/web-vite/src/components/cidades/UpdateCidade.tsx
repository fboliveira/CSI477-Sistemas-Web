import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { EstadoInterface } from "../estados/ListEstados";

const UpdateCidade = () => {
    
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [estadoId, setEstadoId] = useState(0);

    const [ estados, setEstados ] = useState<EstadoInterface[]>([]);
 
    const { id } = useParams();

    useEffect(() => {

        api.get('/estados')
            .then(response => {
                setEstados(response.data);
            })

    },[])

    useEffect(() => {

        api.get(`/cidades/${id}`)
            .then(response => {
                setNome(response.data.nome);
                setEstadoId(response.data.estado_id);
            })

    }, [id]);

    const handleUpdateCidade = async (event : React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const data = {
            id,
            nome,
            estado_id: estadoId
        }

        try {
            
            await api.put('/cidades', data);
            alert('Cidade atualizada com sucesso');
            navigate('/cidades');

        } catch (error) {
            alert('Erro ao atualizar a Cidade!');
            console.error(error);
        }

    }

    return(

        <div>
            <h3>Atualização de cidade: {nome}-{estadoId}</h3>

            <form onSubmit={handleUpdateCidade}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text"
                        name="nome"
                        id="nome"
                        value={nome}
                        placeholder="Nome da cidade"
                        onChange={e => setNome(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="estado">Estado</label>

                    <select 
                        name="estado" 
                        id="estado"
                        value={estadoId}
                        onChange={e => 
                            setEstadoId(parseInt(e.target.value))
                        }
                        >

                        <option 
                            value="0" 
                            selected>Selecione:</option>

                        {
                            estados.map(estado => (
                                <option
                                    value={estado.id}>{estado.nome}</option>
                            ))
                        }

                    </select>

                </div>

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>
                <Link to="/cidades">Voltar</Link>
            </form>
        </div>

    );



}

export default UpdateCidade;