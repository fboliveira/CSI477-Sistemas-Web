import { Pencil, Trash2 } from "lucide-react"
import type { CardInterface } from "../../types/card"
import { Link } from "react-router-dom"

const Card = ({id, name, updateUrl} : CardInterface) => {

    return(

        <div className="w-full md:basis-1/3 border rounded-2xl border-slate-300 m-2 p-2 max-w-sm bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">

            <div>Código: {id}</div>
            <div>Nome: <span className="text-xl font-bold">{name}</span> </div>
            <div className="flex gap-2">
                <div>Ações:</div>
                <Link to={updateUrl}><Pencil color="#0c4bdf" /></Link>
                <Trash2 color="#df0c56" />
            </div>

        </div>

    )

}

export default Card