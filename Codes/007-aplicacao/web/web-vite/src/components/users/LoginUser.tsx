import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLoginUser = async (event : React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const data = {
            email,
            password
        }

        try {
            
            await api.post('/users/login', data)
                .then(response => {
                    
                    const { nome, token, header} = response.data;

                    window.localStorage.setItem('token', token);
                    window.localStorage.setItem('header', header);
                    window.localStorage.setItem('nome', nome);

                    navigate('/');

                });
            navigate('/');

        } catch (error) {
            alert('Erro ao cadastro o Estado!');
            console.error(error);
        }

    }

    return(

        <div>
            <h3>Acesso ao sistema</h3>

            <form onSubmit={handleLoginUser}>

                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email"
                        name="email"
                        id="email"
                        value={email}
                        placeholder="E-mail de acesso"
                        required
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="sigla">Senha</label>
                    <input type="password"
                        name="password"
                        id="password"
                        value={password}
                        placeholder="Senha de acesso"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">Acessar</button>
                <button type="reset">Limpar</button>
            </form>
        </div>

    );



}

export default LoginUser;