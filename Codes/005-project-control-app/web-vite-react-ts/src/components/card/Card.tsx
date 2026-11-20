import { Link } from "react-router-dom"
import type { CardInterface } from "../../types/card"

const Card = ( {id, name, updateLink} : CardInterface ) => {

    return(
        <div className="w-full border border-slate-300">
            <div>Código: {id} </div>
            <div>Descrição: <span className="text-xl font-bold">{name}</span> </div>

            <div>Ações</div>
            <div>
                 {
                    updateLink 
                    ? (<Link to={updateLink}>Atualizar</Link>) 
                    : (<></>)
                 }
                 
                <div>Excluir</div>
            </div>
        </div>
    )

}

export default Card