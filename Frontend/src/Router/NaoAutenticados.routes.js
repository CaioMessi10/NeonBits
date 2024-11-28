import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cabecalho from '../Components/Cabecalho';
import Inicio from '../Inicio'
import Rodape from '../Components/Rodape';
import Obrigada from '../Obg/obrigado'
import CadastraUsuarios from '../CadastraUsuarios/CadastroUsuarios'

export default function NaoAutenticados() {
    return (
        <BrowserRouter>
        <Cabecalho/>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/obrigado' element={<Obrigada/>} />
                <Route path='/CadastraUsuarios' element={< CadastraUsuarios />} />
                <Route path='*' element={<Inicio />} />
            </Routes>
            <Rodape/>
        </BrowserRouter >
    )
}
