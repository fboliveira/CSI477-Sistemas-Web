import { useEffect, useState } from "react";
import api from "../../services/api";

interface EstadoModel {
    id: number;
    nome: string;
    sigla: string;
    created_at: string;
}


const ListEstados = () => {

    // Hooks
    // State -> armazenar os dados dos estados (uf)
    const [ estados, setEstados ] = useState<EstadoModel[]>([]);

    // Effect -> carregar os dados
    useEffect(() => {
        loadData();
    },[])
    // Component -> effect -> state -> render()

    const loadData = () => {
        
        api.get('/estados')
            .then(reponse => {
                // atualizar o state
                console.log(reponse.data);
                setEstados(reponse.data);
            })

    }


    return(
        <div>
            <h2>Lista dos Estados</h2>

            <ul>

            { estados.map( item => (
                <li key={item.id}>{ item.nome }-{ item.sigla }</li>
            ) )}

            </ul>

        </div>
    );

}

export default ListEstados;