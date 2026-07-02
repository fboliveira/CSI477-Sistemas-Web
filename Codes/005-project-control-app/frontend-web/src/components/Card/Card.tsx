import type { CardInterface } from "../../types/card"

const Card = ({id, name} : CardInterface) => {

    return(

        <div>

            <div>Código: {id}</div>
            <div>Nome: {name} </div>
            <div>Ações:</div>

        </div>

    )

}

export default Card