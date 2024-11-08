import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './cadastro.scss'
import apilocal from '../Api/apiLocal'
 
export default function CadastrarUsuarios() {
 
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
    async function CadastrarUsuarios(){
try {
  const resposta = await apilocal.post('./Cadastro.js',)
 
} catch (err) {
    alert('Erro ao comunicar com BackEnd')
}
    }
 
    return (
        <div className='conteinerCadastroUsuariosGeral'>
            <h1>Cadastro de Usuários</h1>
            <form onSubmit={CadastrarUsuarios}>
                <input
                    type="text"
                    placeholder='Digite Seu Nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Digite Seu E-Mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Digite Sua Senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Enviar</button>
            </form>
            <Link to='/' className='buttonVoltar' >Voltar Inicio</Link>
        </div>
    )
}