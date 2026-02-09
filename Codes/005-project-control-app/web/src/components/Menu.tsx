import { Link } from "react-router-dom"

import "./menu.css"

const Menu = () => {

    const cssMenu = "text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600 mr-2"

    return(

        <div>

            <nav className="md:flex items-center gap-8">
                <Link to="/" className={cssMenu}>Home</Link>
                <Link to="/projects" className={cssMenu}>Projetos</Link>
                <Link to="/tasks" className={cssMenu}>Tarefas</Link>
                <Link to="#" className={cssMenu}>Relatórios</Link>
                <Link to="#" className={cssMenu}>Perfil</Link>
            </nav>

        </div>

    )

}

export default Menu