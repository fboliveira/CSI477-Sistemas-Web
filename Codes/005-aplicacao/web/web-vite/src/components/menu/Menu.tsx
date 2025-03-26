
import { Link } from 'react-router'
import './menu.css'

const Menu = () => {

    return(

    <>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projetos</Link></li>
            <li>Tarefas</li>
        </ul>

    </>

    )

}

export default Menu