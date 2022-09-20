import { useState, useEffect } from 'react';
import api from '../../services/api'

import { EstadoModel } from '../estados/ListEstados';

interface CidadeModel {
    id: number;
    nome: string;
    created_at: string;
    estado: EstadoModel;
}

const ListCidades = () => {

    const [ cidades, setCidades ] = useState<CidadeModel[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {

        api.get('/cidades')        
            .then(response => {
                setCidades(response.data);
            } );

    }

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Estado</th>
                        <th>Criação</th>
                    </tr>
                </thead>

                <tbody>

                    { cidades.map( item => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.estado.nome}-{item.estado.sigla}</td>
                                <td>{item.created_at}</td>
                            </tr>
                        )  
                      )
                    }

                </tbody>


            </table>
        </div>
    );

}

export default ListCidades;