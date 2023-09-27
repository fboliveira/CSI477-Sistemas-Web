import CidadeDTO from "./CidadeDTO"

interface EnderecoDTO {
    id?:          number
    rua:         String
    numero:      String
    complemento: String
    bairro:      String
    telefone:    String
    cidade: CidadeDTO
    created_at?: string;
    updated_at?: string;
}

export default EnderecoDTO;