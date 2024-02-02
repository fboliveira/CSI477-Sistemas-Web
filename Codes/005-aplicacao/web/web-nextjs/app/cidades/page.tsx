import Link from "next/link";
import Line from "../components/Line";
import CidadeInterface from "../types/cidade";

const getAllCidades = async () => {

    const cidades = await fetch('http://localhost:5000/cidades', { cache: 'no-store' })

    return cidades.json();

}

export default async function Cidade() {

    const cidades: CidadeInterface[] = await getAllCidades();

    return (
        <main>
            <h1>Lista de cidades</h1>
            <Link href="/cidades/create">Cadastrar</Link>

            <ul>
                {

                    cidades.map((cidade) => {

                        const nome = `${cidade.nome}-${cidade.estado.sigla}`

                        return (

                            <div key={cidade.id}>
                                <Line key={cidade.id} id={cidade.id}
                                description={nome} />
                                
                                <Link href={`/cidades/update/${cidade.id}`} >Atualizar</Link>

                                <Link href={`/cidades/delete/${cidade.id}`} >Excluir</Link>
                            </div>

                        )

                    })

                }
            </ul>
        </main>
    )
}