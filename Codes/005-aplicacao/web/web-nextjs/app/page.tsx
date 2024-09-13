import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Sistema de Controle de Doação de Sangue</h1>
      <div>
        <Link href="/estados">Estados</Link>
      </div>
    </div>
  );
}
