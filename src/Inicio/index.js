import React from 'react'
import Foto from '../imgs/Lata.jpg'
import Foto2 from '../imgs/burguer.png'
import Foto3 from '../imgs/Ccombo.png'
export default function Inicio() {
  return (
    <>

      <div class="container">
        <div class="coluna">
          <h2>Os preferidos</h2>
          <p>Deixamos os mais pedidos no nosso site nessa lista</p>
          <ul>
            <li>X-Bacon, 16,99R$</li>
            <li>X-Salada, 14,99R$</li>
            <li>Dog especial, 18,00R$</li>
            <li>X-Calabresa, 19,00R$</li>
            <li>Kids, 12,00R$</li>
            <li>X-Galinha, 16,00R$</li>
            <li>Cheddar-Bacon, 18,00R$</li>
            <img src={Foto2} alt="h" height={200} width='200' />
          </ul>
        </div>
        <div class="coluna-central">
          <h2>Combos</h2>
          <ul>
         
            <li> <h3>Combo 01<br/>
              R$ 49,99<br/>
          </h3>
              2 Bacon Barca + batata com bacon e cheddar + anéis de cebola + 2 pet 200ml.</li>
            <li> <h3>Combo Kids<br/>
              R$ 19,99<br/>
              </h3>
              Lanche + batata + bebida + brinde surpresa.</li>
            <li> <h3>Combo 02<br/>
              R$ 32,00<br/>
              </h3>
              2 Burguer Gourmet da sua escolha.</li>
            <li> <h3>Double favoritos<br/>
              25,00R$<br/>
              </h3>
              2 Burguer favoritos da sua escolha.</li>
          </ul>
          <img src={Foto3} alt="" height={200} width='200'/>
        
        </div>
       
        <div class="coluna">
          <h2>Porções e bebidas</h2>
          <p>Para aproveitar ao máximo seu lanche:</p>
          <ul>
            <li>Refri gratis com compras acima de 40,00R$.</li>
            <li>Batata Frita 500g, 10,00R$(cheddar e bacon adicional +5,00R$). </li>
            <li>Calabresa com limão, 15,00R$.</li>
            <img src={Foto} alt="" height={200} width='200' />
          </ul>
        </div>
        

      </div>

    </>
  )
}
