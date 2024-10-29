import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cabecalho from '../Components/Cabecalho';
import Inicio from '../Inicio'
import Rodape from '../Components/Rodape';
import Obrigada from '../Obg/obrigado'


export default function NaoAutenticados() {
    return (
        <BrowserRouter>
        <Cabecalho/>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/obrigado' element={<Obrigada/>} />
                <Route path='*' element={<Inicio />} />
            </Routes>
            <Rodape/>
        </BrowserRouter >
    )
}
