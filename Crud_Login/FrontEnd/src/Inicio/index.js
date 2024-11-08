import React from 'react'

import './estilo.inicio.scss'
import { Link } from 'react-router-dom'

export default function Inicio(){
    return(
        <div className='conteinerInicioGeral'>
        <h1>Pagina de Inicio</h1>

        <form>
            <input 
            type="text"
            placeholder='Digite o E-mail'
            />

            <input 
            type="password"
            placeholder='Digite a Senha'            
            />

            <button>Enviar</button>
        </form>
        <p>Para se Cadastrar clique <Link to={'/Cadastro'}> AQUI </Link> </p>
        </div>
    )
}