import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import ListProjects from "./pages/projects/ListProjects"

const AppRoutes = () => {

    return(

        <BrowserRouter>
        
            <Routes>

                <Route path="/" element={<App />} />
                <Route path="/projects" element={<ListProjects />} />

            </Routes>
        
        </BrowserRouter>

    )

}

export default AppRoutes