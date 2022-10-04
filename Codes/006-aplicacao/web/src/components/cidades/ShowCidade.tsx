import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../services/api";
import { CidadeModel } from "./ListCidades";

const ShowCidade = () => {

    const [ cidade, setCidade ] = useState<CidadeModel>()

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

            <div>
                <Link to={`/cidades/update/${cidade?.id}`}>Atualizar</Link>
            </div>

        </div>
    )

}

export default ShowCidade;