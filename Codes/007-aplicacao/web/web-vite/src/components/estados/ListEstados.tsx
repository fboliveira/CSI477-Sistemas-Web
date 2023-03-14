import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api"

interface EstadoInterface {
    id: number;
    nome: string;
    sigla: string;
    created_at: string;
    updated_at: string;
}

const ListEstados = () => {

    const [ estados, setEstados ] = useState<EstadoInterface[]>([]);  
    
    useEffect(() =>{

        api.get('/estados')
            .then(response => {
                console.log(response.data);
                setEstados(response.data);
            })

    }, [])

    return(

        <div>

            <h2>Lista de Estados</h2>

            <Link to="/">Voltar</Link>

            <table>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Sigla</th>
                        <th>Criado</th>
                        <th>Alterado</th>
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
                        </tr>
                    ))
                    }
                </tbody>

            </table>

        </div>

    )

}

export default ListEstados;