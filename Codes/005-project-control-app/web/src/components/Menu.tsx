import { Link } from "react-router-dom"

import "./menu.css"

const Menu = () => {

    return(

        <div>

            <h2 className="text-2xl font-semibold">Opções</h2>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projetos</Link></li>
                <li>Tarefas</li>
                <li>Relatórios</li>
                <li>Perfil</li>
            </ul>

        </div>

    )

}

export default Menu