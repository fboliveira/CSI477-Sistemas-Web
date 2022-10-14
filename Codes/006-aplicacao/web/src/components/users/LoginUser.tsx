import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const LoginUser = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    // const [ isLogged, setLogged ] = useState(false);

    const navigate = useNavigate();

    const handleLoginUser = async ( e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const data = {
            email,
            password
        }

        try {
            
            await api.post('/users/login', data)
                .then( response => {
                    
                    const { token, header, nome } = response.data;

                    window.localStorage.setItem('token', token);
                    window.localStorage.setItem('header', header);
                    window.localStorage.setItem('nome', nome);

                    // setLogged(true);
                    navigate('/');
                    window.location.reload();

                    console.log(response.data);
                    
                })
                .catch( error => {
                    console.log(error);
                } );
            

            // if (isLogged) {
            //     navigate('/');
            // }

        } catch (error) {
            console.error(error);
        }

    }

    return(
        <div>

            <form onSubmit={handleLoginUser} >

                <div>
                    <label htmlFor="email">E-Mail</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        required 
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">Senha</label>

                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        required
                        onChange={e => setPassword(e.target.value)}    
                    />

                </div>

                <div>
                    <button type="submit">Acessar</button>
                    <button type="reset">Limpar</button>
                </div>

            </form>

        </div>
    );

}

export default LoginUser;