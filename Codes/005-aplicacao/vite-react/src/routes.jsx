import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App";

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
                    element={() => {}}
                />
            </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes;