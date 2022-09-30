import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { EstadoModel } from "./ListEstados";

interface SelectEstadosProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectEstados = (props: SelectEstadosProps) => {

    const [estados, setEstados] = useState<EstadoModel[]>([]);

    // const [ id, setId ] = useState(0)

    useEffect(() => {

        api.get('/estados')
            .then(response => {
                setEstados(response.data);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="estado">Selecione o Estado:</label>
            </div>
            <div>
                <select name="estado"
                    id="estado"
                    value={props.id}
                    onChange={e => props.setId(parseInt(e.target.value))}>

                    {
                        estados.map(item => (
                            <option value={item.id}>{item.nome}-{item.sigla}</option>
                        ))
                    }

                </select>
            </div>
        </div>

    );


}

export default SelectEstados;