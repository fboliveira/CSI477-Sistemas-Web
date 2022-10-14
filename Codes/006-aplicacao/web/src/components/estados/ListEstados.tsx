import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

export interface EstadoModel {
    id: number;
    nome: string;
    sigla: string;
    created_at: string;
}


const ListEstados = () => {

    // Hooks
    // State -> armazenar os dados dos estados (uf)
    const [estados, setEstados] = useState<EstadoModel[]>([]);

    const navigate = useNavigate();

    // Effect -> carregar os dados
    useEffect(() => {
        // Component -> effect -> state -> render()
        const token = window.localStorage.getItem('token') || undefined

        if (token === undefined) {
            navigate('/login');
        }

        const header = window.localStorage.getItem('header');

        const config = {
            headers: {
                "Authorization": `Bearer ${header} ${token}`
            }
        }

        api.get('/estados', config)
            .then(reponse => {
                // atualizar o state
                console.log(reponse.data);
                setEstados(reponse.data);
            })

    }, [navigate])


    return (
        <div>
            <h2>Lista dos Estados</h2>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Criação</th>
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>
                    {estados.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.created_at}</td>
                            <td><Link
                                to={`/estados/show/${item.id}`}>Visualizar</Link></td>
                        </tr>
                    ))}



                </tbody>


            </table>

        </div>
    );

}

export default ListEstados;