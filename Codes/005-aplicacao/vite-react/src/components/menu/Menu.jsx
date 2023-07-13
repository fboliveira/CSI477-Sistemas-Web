import { Link } from 'react-router-dom'

import './menu.css'

const Menu = () => {



    return(
        <>
        
            <ul>
                <li>
                    <Link 
                        to="/">
                            Home
                    </Link>
                </li>
                <li>Estados</li>
                <li>Cidades</li>
                <li><a href="http://www.ufop.br">UFOP</a></li>
            </ul>

        </>
    );


}

export default Menu