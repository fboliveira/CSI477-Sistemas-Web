import Link from "next/link";
import EnderecoTable from "../components/EnderecoTable";

export default function Estado() {
  return (
    <main className="container m-auto">
      <h1>Lista de endereços</h1>

      <Link href="/">Home</Link>
      <Link href="">Cadastrar</Link>

      <EnderecoTable />
    </main>
  );
}
