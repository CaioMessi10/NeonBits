import React from "react";

import NaoAutenticados from '../Router/NaoAutenticados.routes';
import Autenticados from "./Autenticados.routes";

export default function Rotas(){

    const Autenticado = false

    return(
        <>
        {Autenticado === true ? <Autenticados /> : <NaoAutenticados/>}
        </>
    )
}