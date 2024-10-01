import React from 'react';
import foto1 from '../imgs/Starfield.png';
import Foto2 from '../imgs/Assassins.png';
import Foto3 from '../imgs/EldenRing.png';
import Foto4 from '../imgs/Decorativo.png';
import Foto5 from '../imgs/foneGamer.png';
import Foto6 from '../imgs/SuperMario.png';

export default function Inicio() {
  return (
    <>
      <div className="container">
        <div className="coluna">
          <h2>Os Preferidos</h2>
          <p>Confira os jogos mais pedidos na nossa loja:</p>
          <ul>
            <li>The Last of Us Part II, R$ 199,99</li>
            <li>God of War, R$ 179,99</li>
            <li>Red Dead Redemption 2, R$ 199,99</li>
            <li>Marvel's Spider-Man, R$ 159,99</li>
            <li>FIFA 23, R$ 249,99</li>
            <li>Call of Duty: Modern Warfare II, R$ 229,99</li>
            <li>Assassin's Creed Valhalla, R$ 199,99</li>
          </ul>
          <div className="foto1">
            <img src={Foto2} alt="Assassin's Creed" height={200} width='200' />
          </div>
        </div>

        <div className="coluna-central">
          <h2>Em Promoção</h2>
          <ul>
            <li>
              <h3>Elden Ring<br />
                R$ 159,99<br />
              </h3>
              Um RPG de ação desenvolvido pela FromSoftware, aclamado pela crítica.
            </li>
            <li>
              <h3>Combo de Jogos Indie<br />
                R$ 79,99<br />
              </h3>
              Inclui Hollow Knight, Celeste e Stardew Valley.
            </li>
            <li>
              <h3>Pacote de Expansões<br />
                R$ 49,99<br />
              </h3>
              Expansões para vários jogos populares.
            </li>
            <li>
              <h3>Assassin's Creed Valhalla - Edição Especial<br />
                R$ 249,99<br />
              </h3>
              Inclui itens exclusivos e conteúdo adicional.
            </li>
          </ul>
          <img src={Foto3} alt="Elden Ring" height={200} width='200' />
        </div>

        <div className="coluna">
          <h2>Novidades</h2>
          <p>Confira nossos novos lançamentos:</p>
          <ul>
            <li>Starfield, R$ 299,99</li>
            <li>Final Fantasy XVI, R$ 269,99</li>
            <li>Hogwarts Legacy, R$ 249,99</li>
          </ul>
          <div className="foto1">
            <img src={foto1} alt="Starfield" height={200} width='200' />
          </div>
        </div>

        <div className="coluna">
          <h2>Promoções do Mês</h2>
          <p>Aproveite as ofertas especiais:</p>
          <ul>
            <li>Desconto de 20% em compras acima de R$ 300!</li>
            <li>Compre 1 jogo, leve 2 em jogos indie!</li>
            <li>Promoção de aniversariante: jogo grátis na compra de qualquer título!</li>
          </ul>
          <div className="foto1">
            <img src={Foto4} alt="Promoções" height={200} width='200' />
          </div>
        </div>

        <div className="coluna">
          <h2>Acessórios e Consoles</h2>
          <p>Melhore sua experiência de jogo:</p>
          <ul>
            <li>Controle extra, R$ 299,99</li>
            <li>Fones de ouvido gamer, R$ 149,99</li>
            <li>Suporte para console, R$ 59,99</li>
          </ul>
          <div className="foto1">
            <img src={Foto5} alt="Fones Gamer" height={200} width='200' />
          </div>
        </div>

        <div className="coluna">
          <h2>Jogos Clássicos</h2>
          <p>Reviva os clássicos:</p>
          <ul>
            <li>Super Mario Bros., R$ 89,99</li>
            <li>The Legend of Zelda: Ocarina of Time, R$ 119,99</li>
            <li>Final Fantasy VII, R$ 129,99</li>
          </ul>
          <div className="foto1">
            <img src={Foto6} alt="Super Mario" height={200} width='200' />
          </div>
        </div>
      </div>
    </>
  );
}
