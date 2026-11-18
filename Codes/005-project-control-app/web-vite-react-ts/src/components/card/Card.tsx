import type { CardInterface } from "../../types/card"

const Card = ( {id, name} : CardInterface ) => {

    return(
        <div>
            <div>Código: {id} </div>
            <div>Descrição: {name} </div>

            <div>Ações</div>
            <div>
                <div>Atualizar</div>
                <div>Excluir</div>
            </div>
        </div>
    )

}

export default Card