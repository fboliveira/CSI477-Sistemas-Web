import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/projects">Projetos</Link>
            </nav>
        </div>
    )
}

export default Menu