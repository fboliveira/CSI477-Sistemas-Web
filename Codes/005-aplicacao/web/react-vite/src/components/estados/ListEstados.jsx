import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api.js";

export default function ListEstados() {


    // Armazenar a lista de estados (UF)
    const [ estados, setEstados ] = useState([]);


    const getEstados = async () => {

        const response = await api.get('/estados');
        
        console.log(response.data);
        setEstados(response.data);

    }

    useEffect(() => {
        getEstados();
    }, []);


    return(
        <>
            <h2>Lista de estados</h2>
            
            <Link to="/">Home</Link>

            <ul>
                {
                    estados.map(estado => (
                        <li key={estado.id}>{ estado.nome }-{ estado.sigla } </li>
                    ))
                }
            </ul>

        </>
    );


}

// export default ListEstados;