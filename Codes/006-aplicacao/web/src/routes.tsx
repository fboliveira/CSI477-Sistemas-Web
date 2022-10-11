import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CreateCidade from "./components/cidades/CreateCidade";
import ListCidades from "./components/cidades/ListCidades";
import ShowCidade from "./components/cidades/ShowCidade";
import UpdateCidade from "./components/cidades/UpdateCidade";
import CreateEstado from "./components/estados/CreateEstado";
import ListEstados from "./components/estados/ListEstados";
import ShowEstado from "./components/estados/ShowEstado";
import UpdateEstado from "./components/estados/UpdateEstado";
import Header from "./components/header/Header";
import LoginUser from "./components/users/LoginUser";

const AppRoutes = () => {

    const userName = window.localStorage.getItem('nome') || undefined;

    return(

        <BrowserRouter>

            <Header name={userName} />

            <Routes>

                <Route path="/" element={ <App /> } />

                <Route path="/estados" element={<ListEstados />} />

                <Route path="/estados/create" element={<CreateEstado />} />

                <Route path="/estados/show/:id" element={<ShowEstado /> } />

                <Route path="/estados/update/:id" element={<UpdateEstado />} />

                <Route path="/cidades" element={<ListCidades />} />

                <Route path="/cidades/create" element={<CreateCidade />} />

                <Route path="/cidades/show/:id" 
                    element={<ShowCidade />} />

                <Route path="/cidades/update/:id"
                    element={<UpdateCidade />} />

                <Route path="/login"
                    element={<LoginUser />} />

            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;