import { useState, useContext, useEffect } from 'react'
import { AutenticadoContexto } from '../Contexts/authContexts'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import apiLocal from './../Api/apiLocal'
import '../Styles/cadProduto.css'

export default function Produtos() {

    const { verificarToken, token } = useContext(AutenticadoContexto)

    const navegar = useNavigate()

    const [nomeProd, setNome] = useState('')
    const [precoProd, setPreco] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState(null)
    console.log(nomeProd, precoProd)

    useEffect(() =>{
        verificarToken();
    },[verificarToken])

    function pegarImagem(e) {
        if (!e.target.files) {
            return
        }
        const image = e.target.files[0]
        if (image.type === 'image/png' || image.type === 'image/jpeg' || image.type === 'image/jpg') {
            setImagem(image)
        }
    }

    async function cadastrarProduto(e) {
        try {
            e.preventDefault()
            const data = new FormData()
            data.append('nomeProd', nomeProd)
            data.append('precoProd', precoProd)
            data.append('descricao', descricao)
            data.append('file', imagem)
            const resposta = await apiLocal.post('/CadastroProdutos', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success(resposta.data.dados, {
                toastId: 'ToastId'
            })
            navegar('/')
        } catch (err) {
            console.log(err)
        }
        setNome('')
        setPreco('')
        setDescricao('')
        setImagem('')
    }

    return (
        <div className='conteinerGeralProdutos'>
            <h1>Produtos</h1>
            <form onSubmit={cadastrarProduto}>                   
                    <input
                        type="text"
                        value={nomeProd}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="insira o Nome"
                    />                  
                    <input
                        type="text"
                        value={precoProd}
                        onChange={(e) => setPreco(e.target.value)}
                        placeholder="Insira o Preço"
                    />
                    <input
                        type="text"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder="Insira a Descrição"
                    />
                    
                    <input
                        type="file"
                        accept='image/jpeg, image/png'
                        onChange={pegarImagem}
                        placeholder="Insira a Imagem"
                    />
                    <button type='submit'>Cadastrar</button>
                </form>
        </div>
    )
}