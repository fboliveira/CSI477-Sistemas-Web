import Link from "next/link";
import EstadoTable from "../components/EstadoTable";

export default function Estado() {

    return(

        <main>

            <Link href="/">Home</Link>
            <Link href="/estados/create">Adicionar</Link>

            <h1>Lista de estados</h1>
        
            <EstadoTable />
        
        </main>

    )

}