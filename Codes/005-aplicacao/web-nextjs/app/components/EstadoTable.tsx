import EstadoDTO from "../types/EstadoDTO";


const getAllEstado = async () => {

    const estados = await fetch('http://localhost:5555/estados', { cache: 'no-store' });
    return estados.json();

}

// interface EstadoInterface {
//     id: number;
//     nome: string;
//     sigla: string;
//     created_at: string;
//     updated_at: string;
// }


export default async function EstadoTable() {

const estados : EstadoDTO[] = await getAllEstado();

    return(
        <table className="table-auto w-full border border-collapse border-stone-950">

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Sigla</th>
                    <th>Criado em</th>
                    <th>Última atualização</th>
                </tr>
            </thead>
            <tbody>

                {
                    estados.map( (estado) => {

                        return(
                            <tr key={estado.id} className="border border-stone-400">
                                <td>{estado.id}</td>
                                <td>{estado.nome}</td>
                                <td>{estado.sigla}</td>
                                <td>{estado.created_at}</td>
                                <td>{estado.updated_at}</td>
                            </tr>
                        )

                    })
                }

            </tbody>

        </table>
    )


}