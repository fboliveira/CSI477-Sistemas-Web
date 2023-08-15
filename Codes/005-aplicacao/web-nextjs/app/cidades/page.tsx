import Link from "next/link"
import CidadeTable from "../components/CidadeTable"

export default function Cidade() {

    return(

        <main className="container m-auto">

            <h1>Lista de cidades</h1>


            <Link href="/">Home</Link>
            <Link href="/cidades/create">Cadastrar</Link>
            
            {/* Lista de Cidades */}
            <CidadeTable />

        </main>

    )
}