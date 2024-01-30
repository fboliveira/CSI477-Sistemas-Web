import EstadoInterface from "./estado";

interface CidadeInterface {
  id: number;
  nome: string;
  estado: EstadoInterface
  created_at: string;
  updated_at: string;
}

export default CidadeInterface
