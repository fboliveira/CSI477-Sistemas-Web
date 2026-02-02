import type { CardInterface } from "../../types/card"



const Card = ({ id, name } : CardInterface) => {

    return (
<<<<<<< HEAD
        <div className="border rounded-2xl border-slate-300 m-2 p-2 max-w-sm bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
=======
        <div className="w-full md:basis-1/3 border rounded-2xl border-slate-300 m-2 p-2 max-w-sm bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
>>>>>>> bbdd1233501bca27a006f26cbe38d7c380e40b15

            <div>Código: {id}</div>
            <div>Descrição: <span className="text-xl font-bold">{name}</span></div>
            <div>Ações: Editar; Excluir</div>

        </div>
    )

}

export default Card