import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import ListProjects from "./pages/ListProjects"
import CreateProject from "./pages/CreateProject"
import UpdateProject from "./pages/UpdateProject"
import DeleteProject from "./pages/DeleteProject"

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
                    element={<CreateProject />}
                />

                <Route 
                    path="/projects/:id"
                    element={<UpdateProject />}
                />

                <Route 
                    path="/projects/:id/delete"
                    element={<DeleteProject />}
                />

            </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes