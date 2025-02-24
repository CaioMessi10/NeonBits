import {BrowserRouter, Route, Routes} from 'react-router-dom'
import DashboardEmpresa from '../Dashboard'
import EditarUsuarios from '../EditarUsuarios'
import Produtos from '../CadastroProduto/produto'

    export default function Autenticados(){
        return(
            <BrowserRouter>
            <Routes>

            <Route path='/' element={<DashboardEmpresa />} />
            <Route path='/EditarUsuarios/:id' element={< EditarUsuarios />} />
            <Route path='/CadastroProduto' element={< Produtos />} />

            <Route path='*' element={<DashboardEmpresa />} />
            
            </Routes>
            </BrowserRouter>
        )
    }

                                               