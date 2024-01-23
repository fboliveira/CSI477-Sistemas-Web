
const getAllEstados = async () => {

    const estados = await fetch('http://localhost:5000/estados')

    return estados.json();

}

interface EstadoInterface {
    id: number;
    nome: string;
    sigla: string;
    created_at: string;
    updated_at: string;
}

export default async function Estado() {

    const estados : EstadoInterface[] = await getAllEstados();

    return(
        <main>
            <h1>Lista de estados</h1>

            <ul>
                {

                    estados.map( (estado) =>{

                        return(
                            <li key={estado.id}>
                                {estado.nome}-{estado.sigla}
                            </li>
                        )

                    })

                }
            </ul>
        </main>
    )
}