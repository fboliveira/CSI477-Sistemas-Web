import CidadeDTO from "../types/CidadeDTO";

const getAllCidades = async () => {
    const cidades = await fetch('http://localhost:5555/cidades', { cache: 'no-store' });
    return cidades.json();
}


export default async function CidadeTable() {


    const cidades : CidadeDTO[] = await getAllCidades();

    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Estado</th>
                    <th>Criado em</th>
                    <th>Última atualização</th>
                </tr>
            </thead>

            <tbody>

                {
                    cidades.map(( cidade ) => {

                        return(
                            <tr key={cidade.id}>
                                <td>{cidade.id}</td>
                                <td>{cidade.nome}</td>
                                <td>{cidade.estado?.nome}-{cidade.estado?.sigla}</td>
                                <td>{cidade.created_at}</td>
                                <td>{cidade.updated_at}</td>
                            </tr>
                        )

                    })
                }

            </tbody>
        </table>
    )

}