import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api"
import { EstadoInterface } from "../estados/ListEstados";

interface CidadeInterface {
    id: number;
    nome: string;
    estado_id: number;
    created_at: string;
    updated_at: string;
    estado: EstadoInterface;
}

const ListCidades = () => {

    const [ cidades, setCidades ] = useState<CidadeInterface[]>([]);  
    
    useEffect(() =>{

        api.get('/cidades')
            .then(response => {
                console.log(response.data);
                setCidades(response.data);
            })

    }, [])

    const handleDeleteCidade = async (id: number) => {

        // Validações
        if ( !window.confirm( "Confirma exclusão da Cidade?" ) ) {
            return
        }

        try {
            await api.delete('/cidades', 
            {
                data: {
                    id
                }
            });

            alert("Cidade excluída com sucesso!");

            // Atualizar?
            setCidades( cidades.filter(estado => estado.id != id) );

        } catch(error) {
            alert("Erro na exclusão da Cidade!");
            console.error(error);
        }

    }


    return(

        <div>

            <h2>Lista de Cidades</h2>

            <div>
                <Link to="/">Voltar</Link>
            </div>
            <div>
                <Link to="/cidades/create">Inserir Cidade</Link>
            </div>

            <table>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Estado</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                
                <tbody>
                    {cidades.map(cidade => (
                        <tr key={cidade.id}>
                            <td>{cidade.id}</td>
                            <td>{cidade.nome}</td>
                            <td>{cidade.estado.nome}</td>
                            <td>{cidade.created_at}</td>
                            <td>{cidade.updated_at}</td>
                            <td><Link 
                                to={`/cidades/update/${cidade.id}`}>Atualizar</Link></td>
                            <td><button onClick={()=>{ 
                                handleDeleteCidade(cidade.id)
                             }}>Excluir</button> </td>
                        </tr>
                    ))
                    }
                </tbody>

            </table>

        </div>

    )

}

export default ListCidades;