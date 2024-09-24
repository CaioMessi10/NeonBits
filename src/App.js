import Rotas from './Router'
import Modal from 'react-modal'
import './Styles/index.css'
import { useState } from 'react'
import { toast } from "react-toastify"
import apiBuscaCep from './ApiCliente/ApiBuscaCep/apiBuscaCep'


export default function App() {
  const [ modalAberto, setModalAberto ] = useState(false)

  function abrirModal() {
    setModalAberto (true)
  }
  function fecharModal() {
    setModalAberto (false)
  }

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    function logarUsuarios(e) {
        e.preventDefault()

        if (!usuario || !senha) {
            alert('espaços em branco')
            return
        }
        if (usuario === 'luciano' && senha === '123456') {
            toast.success('Login Efetuado com Sucesso')

        } else {
            toast.error('Usuario/Senha incorretos')
        }
    }
    const [pegarCep, setPegarCep] = useState('')
    const [dadosViaCep, setDadosViaCep] = useState('')
   
  
    async function dadosFormulario(e) {
      e.preventDefault()
      const resposta = await apiBuscaCep.get(`/${pegarCep}/json/`)
      setDadosViaCep(resposta.data)
    }
  
  return (
    <div>
      
     <Rotas/>
     <button onClick={abrirModal} class='buton'>FAÇA LOGIN</button>

      <Modal
        className='Modal'
        overlayClassName='Overlay'
        isOpen={modalAberto}
      >
        <button onClick={fecharModal}>CONTINUAR SEM LOGIN</button>
        <h1>FAÇA LOGIN</h1>
            <form onSubmit={logarUsuarios}>
            <input
             type="text"
                placeholder="Digite o Usuário"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
            />
            <input
             type="text"
                placeholder="Digite a Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)} />
            <button type='submit'>enviar</button>
            </form>
            
      <form onSubmit={dadosFormulario}>
        <h2>ENTREGA</h2>
        <input
          type="text"
          placeholder='Digite o Cep'
          value={pegarCep}
          onChange={(e) => setPegarCep(e.target.value)}
        />
        
        <button type='submit'>enviar</button>
      </form>
      <p>A rua é:{dadosViaCep.logradouro} </p>
      <p>A cidade é:{dadosViaCep.localidade} </p>
      <p>O estado é:{dadosViaCep.uf} </p>
      <br/>
      <a href='/obrigado'>CADASTRO DE PRODUTO</a>
      </Modal>

    </div>
    
  );
}

 
