import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateEstado  = () => {

    const [nome, setNome] = useState('');
    const [sigla, setSigla] = useState('');

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {

        api.get(`/estados/${id}`)
            .then(response => {
                setNome(response.data.nome);
                setSigla(response.data.sigla);
            })

    },[id]);

    const handleUpdateEstado = async (event : React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
    
        const data = {
            id : parseInt(String(id)),
            nome,
            sigla
        }

        try {
            
            await api.put('/estados', data);
            alert('Estado atualizado com sucesso');
            navigate('/estados');

        } catch (error) {
            alert('Erro ao atualizar o Estado!');
            console.error(error);
        }

    }


    return(

        <div>
            <h3>Cadastro de estados: {nome}-{sigla}</h3>

            <form onSubmit={handleUpdateEstado}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text"
                        name="nome"
                        id="nome"
                        value={nome}
                        placeholder="Nome do estado"
                        onChange={e => setNome(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="sigla">Sigla</label>
                    <input type="text"
                        name="sigla"
                        id="sigla"
                        value={sigla}
                        placeholder="Sigla do estado"
                        onChange={e => setSigla(e.target.value)}
                    />
                </div>

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>
                <Link to="/">Voltar</Link>
            </form>
        </div>

    );



}

export default UpdateEstado ;