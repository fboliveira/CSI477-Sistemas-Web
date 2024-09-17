
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
        <ul>
            {
                cidades.map((cidade) => {
                    return(
                        <li key={cidade.id}>
                            {cidade.nome}
                        </li>
                    )   
                })
            }
        </ul>
    )
}