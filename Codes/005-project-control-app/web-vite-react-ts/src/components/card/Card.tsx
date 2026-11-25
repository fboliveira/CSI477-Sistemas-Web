import { Link } from "react-router-dom"
import type { CardInterface } from "../../types/card"
import { Pencil, Trash2 } from "lucide-react"

const Card = ( {id, 
    name, 
    updateLink,
    deleteLink} : CardInterface ) => {

    let deleteOpt;
    if (deleteLink !== undefined) {
        deleteOpt = <Link to={deleteLink}><Trash2 /></Link>
    }

    return(
        <div className="w-full border border-slate-300">
            <div>Código: {id} </div>
            <div>Descrição: <span className="text-xl font-bold">{name}</span> </div>

            <div>Ações</div>
            <div>
                 {
                    updateLink 
                    ? (<Link to={updateLink}><Pencil /> </Link>) 
                    : (<></>)
                 }
                 
                <div>
                {
                    deleteOpt
                }      
               </div>
            </div>
        </div>
    )

}

export default Card