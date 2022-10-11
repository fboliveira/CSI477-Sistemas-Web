import { Link } from 'react-router-dom';
import Menu from '../menu/Menu';
import './header.css';

// function Header() {

// }

interface HeaderProps {
    name?: string;
}

const Header = (props: HeaderProps) => {

    return (
        <header>
            <div className='header'>
                <h1>Sistema de Doação de Sangue</h1>

                { props.name ?
                    <h2>Usuário: {props.name}</h2> :
                    <h2><Link style={{ color: '#ffffff' }} to="/login">Login</Link></h2>
                }

            </div>

            <Menu />

        </header>    
    );

}

export default Header;