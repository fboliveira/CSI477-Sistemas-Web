import { useEffect, useState } from "react";
import SelectEstados from "../estados/SelectEstados";
import { CidadeModel } from "./ListCidades";

interface UpdateCidadeProps {
    id: number;
    nome: string;
    estado_id: number;
}

const UpdateCidade = (props : UpdateCidadeProps) => {

    const [ nome, setNome ] = useState('');
    const [ estadoId, setEstadoId ] = useState(0);

    useEffect(() => {
        setNome(props.nome);
        setEstadoId(props.estado_id);
    }, [props])

    const handleUpdateCidade = () => {

    }

    return (
        <div>
            <h3>Atualizar cidade: {props.nome}</h3>

            <form onSubmit={handleUpdateCidade}>

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

                <SelectEstados 
                    id={estadoId}
                    setId={setEstadoId}
                />

            </form>            

        </div>
    )

}

export default UpdateCidade;