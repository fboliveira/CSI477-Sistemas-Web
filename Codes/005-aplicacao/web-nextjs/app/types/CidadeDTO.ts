import EstadoDTO from "./EstadoDTO";

interface CidadeDTO {
    id?: number;
    nome: string;
    estado?: EstadoDTO;
    created_at?: string;
    updated_at?:string;
}

export default CidadeDTO;