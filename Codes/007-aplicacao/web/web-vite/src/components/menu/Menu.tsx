import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './menu.css'

const Menu = () => {

    const [ userName, setUserName ] = useState<string | undefined>('');

    useEffect(() => {

        const userName = window.localStorage.getItem('nome') || undefined;
        setUserName(userName);

    },[])

    const handleLogout = () => {

        window.localStorage.clear();
        setUserName(undefined);
        api.defaults.headers.common['Authorization'] = false;

    }

    return(
        <div>
        
            {

                userName ? 
                    <div>
                        <h2>Usuário: {userName}</h2>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                :
                    <div>
                        <Link to="/login">Login</Link>
                    </div>
            }

        
            <h2>Menu</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/estados">Estados</Link></li>
                <li><Link to="/cidades">Cidades</Link></li>
            </ul>
        </div>
    );

}

export default Menu;