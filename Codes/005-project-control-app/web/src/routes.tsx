import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ListProjects from "./pages/projects/ListProjects";
import CreateProject from "./pages/projects/CreateProject";
import UpdateProject from "./pages/projects/UpdateProject";
import DeleteProject from "./pages/projects/DeleteProject";
import CreateTask from "./pages/tasks/CreateTask";
import ListTasks from "./pages/tasks/ListTasks";
import UpdateTask from "./pages/tasks/UpdateTask";

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

                <Route
                    path="/tasks"
                    element={<ListTasks />}
                />

                <Route
                    path="/tasks/create"
                    element={<CreateTask />}
                />

                <Route
                    path="/tasks/:id"
                    element={<UpdateTask />}
                />
                
            </Routes>
        
        </BrowserRouter>


    )

}