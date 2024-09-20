
import ICidade from "../types/ICidade"


const getAllCidades = async() => {

    const response = await fetch('http://localhost:5000/cidades', {
        cache: 'no-cache'
    })

    return response.json()

}

export default async function CidadeTable() {

    // Lista de cidades
    const cidades : ICidade[] = await getAllCidades()

    return(

        <table>

            <thead>

                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Estado</th>
                    <th>Criado em</th>
                    <th>Atualizado em</th>
                    <th>Alterar</th>
                    <th>Excluir</th>
                </tr>

            </thead>

            <tbody>

                {
                    cidades.map((cidade)=>{
                        return(
                            <tr key={cidade.id}>
                                <td>{cidade.id}</td>
                                <td>{cidade.nome}</td>
                                <td>{cidade.estado.sigla}</td>
                                <td>{cidade.created_at?.toString()}</td>
                                <td>{cidade.updated_at?.toString()}</td>
                                <td>Alterar</td>
                                <td>Excluir</td>
                            </tr>
                        )
                    })
                }

            </tbody>

        </table>

    )
}