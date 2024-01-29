import Link from "next/link";
import Line from "../components/Line";

const getAllEstados = async () => {

    const estados = await fetch('http://localhost:5000/estados', { cache: 'no-store' })

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
            <Link href="/estados/create">Cadastrar</Link>

            <ul>
                {

                    estados.map( (estado) =>{

                        return(

                            <Line key={estado.id} id={estado.id}
                                 description={estado.nome} />
                        )

                    })

                }
            </ul>
        </main>
    )
}