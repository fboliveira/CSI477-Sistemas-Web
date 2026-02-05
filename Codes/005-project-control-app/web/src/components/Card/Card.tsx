import { Link } from "react-router-dom";
import type { CardInterface } from "../../types/card"
import { Pencil, Trash2 } from "lucide-react";

const Card = ({ 
    id, name,
    updateUrl, deleteUrl

} : CardInterface) => {

<<<<<<< HEAD
const Card = ({ id, name, updateUrl, deleteUrl } : CardInterface) => {
    let deleteOpt;
    if (deleteUrl !== undefined){
        deleteOpt = <Link to={deleteUrl}><Trash2/></Link>
    }
=======
    let deleteOpt;
    if ( deleteUrl !== undefined ) {
        deleteOpt = <Link to={deleteUrl}><Trash2 /></Link>
    }

>>>>>>> 07ba762f7d25b37cc1223f05cef522a3df535d04
    return (
        <div className="w-full md:basis-1/3 border rounded-2xl border-slate-300 m-2 p-2 max-w-sm bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">

            <div>Código: {id}</div>
            <div>Descrição: <span className="text-xl font-bold">{name}</span></div>
            <div className="flex gap-2">
                <div>Ações: </div>
<<<<<<< HEAD
                { updateUrl ? (<Link to={updateUrl} ><Pencil/></Link>) : (<></>) }
                { deleteOpt }
=======
                { updateUrl ? (<Link to={updateUrl}><Pencil /></Link>) : (<></>)}
                { deleteOpt }   
>>>>>>> 07ba762f7d25b37cc1223f05cef522a3df535d04
            </div>

        </div>
    )

}

export default Card