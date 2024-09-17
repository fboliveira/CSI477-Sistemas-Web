import IEstado from "./IEstado"


interface ICidade {
    id: number
    nome: string
    created_at?: Date
    updated_at?: Date

    estado : IEstado

}

export default ICidade