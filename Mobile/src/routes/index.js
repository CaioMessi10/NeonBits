import React, { useContext} from "react";

import { AutContexts } from "../Contexts/authContexts";

import NoAuthRotas from "./NoAuthRotas";
import AutRotas from "./AuthRotas";

export default function RotasIndex(){

    const { autenticado } = useContext(AutContexts)
    return(
        autenticado === true ? <AutRotas /> : <NoAuthRotas />
    ) 
}