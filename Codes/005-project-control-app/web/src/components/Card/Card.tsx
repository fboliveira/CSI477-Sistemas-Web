import type { CardInterface } from "../../types/card"



const Card = ({ id, name } : CardInterface) => {

    return (
        <div className="border rounded-2xl border-slate-300 m-2 p-2 max-w-sm bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">

            <div>Código: {id}</div>
            <div>Descrição: <span className="text-xl font-bold">{name}</span></div>
            <div>Ações: Editar; Excluir</div>

        </div>
    )

}

export default Card