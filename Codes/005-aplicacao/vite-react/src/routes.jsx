import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App";
import ListEstados from "./components/estados/ListEstados.jsx";

const AppRoutes = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={ <App />} 
                />

                <Route
                    path="/estados"
                    element={ <ListEstados /> }
                />
            </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes;