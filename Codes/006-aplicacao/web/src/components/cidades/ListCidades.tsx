import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'

import { EstadoModel } from '../estados/ListEstados';

export interface CidadeModel {
    id: number;
    nome: string;
    created_at: string;
    estado_id: number;
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
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>

                    { cidades.map( item => (
                            <tr>
                                <td>{item.id}</td>
                                <td><Link to={`/cidades/show/${item.id}`}>{item.nome}</Link></td>
                                <td>{item.estado.nome}-{item.estado.sigla}</td>
                                <td>{item.created_at}</td>
                                <td><Link to={`/cidades/show/${item.id}`}>Visualizar</Link> </td>
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