
// http://localhost:5000/estados
// axios - lib externa
// fetch
const getAllEstado = async () => {
    
    const estados = await fetch('http://localhost:5000/estados', {
        cache: 'no-cache'
    });

    return estados.json();

}

interface IEstado {
    id: number;
    nome: string;
    sigla: string;
    created_at: Date;
    updated_at: Date;
}



export default async function EstadoTable() {

    const estados : IEstado[] = await getAllEstado();

    return(
        <table>
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
                    estados.map( (estado) =>{

                        return(
                            <tr key={estado.id}>
                                <td>{estado.id}</td>
                                <td>{estado.nome}</td>
                                <td>{estado.sigla}</td>
                                <td>{estado.created_at.toString()}</td>
                                <td>{estado.updated_at.toString()}</td>
                            </tr>
                        )

                    })


                }


            </tbody>
        </table>
    )


}