import CidadeDTO from "../types/CidadeDTO";

const getAllCidades = async () => {
    const cidades = await fetch('http://localhost:5555/cidades', { cache: 'no-store' });
    return cidades.json();
}


export default async function CidadeTable() {

    const format = (dateString : string | undefined) => {
        
        if (dateString === undefined) {
            return;
        }

        const dateObj = new Date(dateString);

        return dateObj.toLocaleString('pt-br');

    }

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
                                <td>{format(cidade.created_at)}</td>
                                <td>{format(cidade.updated_at)}</td>
                            </tr>
                        )

                    })
                }

            </tbody>
        </table>
    )

}