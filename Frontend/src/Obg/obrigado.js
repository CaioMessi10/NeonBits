import React from 'react'
import '../Styles/index.css'

export default function Obrigada(){
    return(
        <>
        <center><h2>Cadastro de Produtos</h2></center>
        <br/>
           <div>
            <center><label for='Descrição'>Descrição</label></center>
            <center><input type='text' id='Descrição'></input><br/></center><br/>
           </div>
           <div>
            <center><label for='Ingredientes'>Ingredientes</label></center>
            <center><input type='text' id='Ingredientes'></input><br/></center><br/>
           </div>
           <div>
            <center><label for='Preço'>Preço</label></center>
            <center><input type='text' id='Preço'></input><br/></center><br/>
           </div>
           <center><h6>====================================================</h6></center>
         <div >
            <center><button type='submit'>Concluir</button></center>
            <a href="/">Voltar</a>
         </div>
        </>
    )
}