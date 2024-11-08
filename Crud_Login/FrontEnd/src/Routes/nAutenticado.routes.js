import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CadastroUsuarios from '../CadastroUsuarios/Cadastro'

import Inicio from '../Inicio'

export default function NAutenticado() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< Inicio />} />

                <Route path='/Cadastro' element={< CadastroUsuarios />} />
                
                <Route path='*' element={< Inicio />} />
            </Routes>
        </BrowserRouter>
    )
}