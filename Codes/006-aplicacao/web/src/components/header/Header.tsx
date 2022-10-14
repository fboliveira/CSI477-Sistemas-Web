import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Menu from '../menu/Menu';
// import './header.css';
import styled from 'styled-components';

const Title = styled.header`
    background-color: #d3a3a0;
    color: #f3f3f2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Button = styled.button<{ primary? : boolean }>`
    text-align: center;
    vertical-align: center;
    border 1px solid transparent;
    padding: 10px 20px;
    border-radius: 1px; 
    
    background-color: ${props => props.primary ? '#0033ff' : '#c3c3c3'};

    color: ${props => props.primary ? '#fff' : '#000033'};
`


const StyledLink = styled(Link)`
    background-color: #ffd5aa;
    color: #d2e4c3;
`

// function Header() {

// }

interface HeaderProps {
    name?: string;
}

const Header = (props: HeaderProps) => {

    const [userName, setUserName] = useState<string | undefined>('');

    useEffect(() => {
        setUserName(props.name);
    }, [props]);

    const handleLogout = () => {
        window.localStorage.clear();
        setUserName(undefined);
        api.defaults.headers.common["Authorization"] = false;
        // window.location.reload();
    }

    return (
        <>
            <Title>
                <div>
                    <h1>Sistema de Doação de Sangue</h1>

                    {userName ?
                        <div>
                            <h2>Usuário: {userName}</h2>
                            <Button primary onClick={handleLogout}>Logout</Button>
                        </div> :

                        <h2><StyledLink to="/login">Login</StyledLink></h2>
                    }

                </div>

            </Title>

            <Menu />
        </>

    );

}

export default Header;