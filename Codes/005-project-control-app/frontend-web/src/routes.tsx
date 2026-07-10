import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import ListProjects from "./pages/projects/ListProjects"
import UpdateProject from "./pages/projects/UpdateProject"
import CreateProject from "./pages/projects/CreateProject"

const AppRoutes = () => {

    return(

        <BrowserRouter>        
            <Routes>

                <Route
                    path="/"
                    element={ <App /> }
                />

                <Route 
                    path="/projects"
                    element={ <ListProjects /> }
                />

                <Route
                    path="/projects/create"
                    element={ <CreateProject /> }
                />

                <Route 
                    path="/projects/:id"
                    element={ <UpdateProject /> }                
                />

            </Routes>        
        </BrowserRouter>

    )

}

export default AppRoutes