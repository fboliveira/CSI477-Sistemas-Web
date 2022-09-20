import Menu from '../menu/Menu';
import './header.css';

// function Header() {

// }

interface HeaderProps {
    name: string;
}

const Header = (props: HeaderProps) => {

    return (
        <header>
            <div className='header'>
                <h1>Sistema de Doação de Sangue</h1>
                <h2>Usuário: {props.name}</h2>
            </div>

            <Menu />

        </header>    
    );

}

export default Header;