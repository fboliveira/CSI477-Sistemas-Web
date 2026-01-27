import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ListProjects from "./pages/projects/ListProjects";

export default function AppRoutes() {

    return (

        <BrowserRouter>
        
            <Routes>

                <Route 
                    path="/" 
                    element={ <App /> } 
                />
                
                <Route 
                    path="/projects"
                    element={<ListProjects />}
                />
                
            </Routes>
        
        </BrowserRouter>


    )

}