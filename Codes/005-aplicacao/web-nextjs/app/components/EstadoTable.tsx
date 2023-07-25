


const getAllEstado = async () => {

    const estados = await fetch('http://localhost:5555/estados');
    return estados.json();

}



export default async function EstadoTable() {

    const estados = await getAllEstado();

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
                    estados.map( (estado) => {

                        return(
                            <tr key={estado.id}>
                                <td>{estado.id}</td>
                            </tr>
                        )

                    })
                }

            </tbody>

        </table>
    )


}