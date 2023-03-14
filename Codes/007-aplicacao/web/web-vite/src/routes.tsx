import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import ListEstados from './components/estados/ListEstados';
import CreateEstado from './components/estados/CreateEstado';

import UpdateEstado from './components/estados/UpdateEstado';

const AppRoutes = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App /> } />

                <Route path="/estados" element={ <ListEstados /> } />

                <Route path="/estados/create" element={ <CreateEstado /> } />

                <Route path="/estados/update/:id"
                    element={<UpdateEstado />} />

            </Routes>
        </BrowserRouter>

    );

}

export default AppRoutes;