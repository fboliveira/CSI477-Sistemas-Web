import Link from "next/link";
import CidadeTable from "../components/CidadeTable";


export default function Cidade() {

    return(

        <main className="container m-auto">

            <Link href="/">Home</Link>
            <Link href="/cidades/create">Adicionar</Link>

            <h1>Lista de cidades</h1>

            {/* Lista de cidades */}
            <CidadeTable />

        </main>

    )

}