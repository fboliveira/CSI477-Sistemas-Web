import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ListCidades from "./components/cidades/ListCidades";
import CreateEstado from "./components/estados/CreateEstado";
import ListEstados from "./components/estados/ListEstados";
import Header from "./components/header/Header";

const AppRoutes = () => {

    return(

        <BrowserRouter>

            <Header name="Fernando" />

            <Routes>

                <Route path="/" element={ <App /> } />

                <Route path="/estados" element={<ListEstados />} />

                <Route path="/estados/create" element={<CreateEstado />} />

                <Route path="/cidades" element={<ListCidades />} />

            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;