import { Link } from "react-router-dom"

// React component - arrow function
const Menu = () => {

    const cssMenu = "text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600 mr-2"

    return (
        <div>

            <nav className="md:flex items-center gap-8">
                <Link to="/">Home</Link>
                <Link to="/projects">Projetos</Link>
                <Link to="/tasks">Tarefas</Link>
                <Link to="#">Relatórios</Link>
                <Link to="#">Perfil</Link>
            </nav>
        
        </div>
    )

}

export default Menu