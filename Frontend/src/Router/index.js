import React, { useContext } from 'react'
import { AutenticadoContexto } from '../Contexts/authContexts';

import Autenticado from './Autenticados.routes'
import NaoAutenticados from './NaoAutenticados.routes';


export default function Rotas() {
    const { autenticado } = useContext(AutenticadoContexto);

    return (
        autenticado === true ? <Autenticado /> : <NaoAutenticados />
    )
}