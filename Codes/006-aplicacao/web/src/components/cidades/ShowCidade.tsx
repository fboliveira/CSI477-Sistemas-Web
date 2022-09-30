import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { CidadeModel } from "./ListCidades";
import UpdateCidade from "./UpdateCidade";

const ShowCidade = () => {

    const city : CidadeModel = 
        { id: 0,
            nome: '',
            estado_id: 0,
            created_at: '',
            estado: {id: 0,
                nome: '',
                sigla: '',
                created_at: ''
            }
        }

    const [ cidade, setCidade ] = useState<CidadeModel>(city)

    const { id } = useParams();

    useEffect(() => {
        api.get(`/cidades/${id}`)
            .then(response => {
                setCidade(response.data);
            })
    }, [id]);

    return(
        <div>
            <h2>Dados da Cidade</h2>

            <p>Id: {cidade?.id}</p>
            <p>Nome: {cidade?.nome}</p>
            <p>Estado: {cidade?.estado.nome}</p>
            <p>Data de inserção: {cidade?.created_at}</p>

            <UpdateCidade id={cidade.id} nome={cidade.nome} estado_id={cidade.estado.id}  />

        </div>
    )

}

export default ShowCidade;