import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api"
import { Authentication } from "../../services/auth";

export interface EstadoInterface {
    id: number;
    nome: string;
    sigla: string;
    created_at: string;
    updated_at: string;
}

const ListEstados = () => {

    const [ estados, setEstados ] = useState<EstadoInterface[]>([]);  
    
    const navigate = useNavigate();

    useEffect(() =>{

        const auth = Authentication();

        if (!auth) {
            navigate('/login');
            return;
        }

        api.get('/estados')
            .then(response => {
                setEstados(response.data);
            })

    }, [])

    const handleDeleteEstado = async (id: number) => {

        // Validações
        if ( !window.confirm( "Confirma exclusão do Estado?" ) ) {
            return
        }

        try {
            await api.delete('/estados', 
            {
                data: {
                    id
                }
            });

            alert("Estado excluído com sucesso!");

            // Atualizar?
            setEstados( estados.filter(estado => estado.id != id) );

        } catch(error) {
            alert("Erro na exclusão do Estado!");
            console.error(error);
        }

    }


    return(

        <div>

            <h2>Lista de Estados</h2>

            <div>
                <Link to="/">Voltar</Link>
            </div>
            <div>
                <Link to="/estados/create">Inserir Estado</Link>
            </div>

            <table>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Sigla</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                
                <tbody>
                    {estados.map(estado => (
                        <tr key={estado.id}>
                            <td>{estado.id}</td>
                            <td>{estado.nome}</td>
                            <td>{estado.sigla}</td>
                            <td>{estado.created_at}</td>
                            <td>{estado.updated_at}</td>
                            <td><Link 
                                to={`/estados/update/${estado.id}`}>Atualizar</Link></td>
                            <td><button onClick={()=>{ 
                                handleDeleteEstado(estado.id)
                             }}>Excluir</button> </td>
                        </tr>
                    ))
                    }
                </tbody>

            </table>

        </div>

    )

}

export default ListEstados;