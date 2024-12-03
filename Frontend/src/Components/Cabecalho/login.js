import React, {useContext, useState} from 'react';
 
import { Link } from 'react-router-dom';
import { AutenticadoContexto } from '../../Contexts/authContexts';

export default function Login(){
 
    const {loginEntrada} = useContext(AutenticadoContexto);
 
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
 
 
    async function dadosLogin(e){
 
        e.preventDefault();
        if(!email || !senha){
 
            alert('Preencha todos os campos!');
            return
        }
 
        try {
           
            await loginEntrada(email, senha);
 
        } catch (err) {
        }
    }
 
    return(
 
      <div className="menu">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={dadosLogin}>
            <input
                type="text"
                placeholder='Digite o E-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder='Digite a Senha'
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />
            <button type='submit'>Enviar</button>
        </form>
        <p>Para se cadastrar clique <Link to='/CadastraUsuarios'>AQUI</Link> </p>
      </div>

    </div>
    )
}
 
 
 
 