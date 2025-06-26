import React, { useContext} from "react";

import { AutenticadoContexto } from "../Contexts/authContexts";

import NoAuthRotas from "./NoAuthRotas";
import AutRotas from "./AuthRotas";

export default function RotasIndex(){

    const { autenticado } = useContext(AutenticadoContexto)
    return(
        autenticado === true ? <AutRotas /> : <NoAuthRotas />
    ) 
}