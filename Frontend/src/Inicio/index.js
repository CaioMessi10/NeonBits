import React from 'react';
import game1 from '../Inicio/img/tle last of us.jpg';
import game2 from '../Inicio/img/gtaV.jpg';
import game3 from '../Inicio/img/red dead.jpg';
import game4 from '../Inicio/img/ea25.jpg';
import adventurePackageImg from '../Inicio/img/witcher.cyber.PNG';
import sportsPackageImg from '../Inicio/img/nba.f1.PNG';
import familyPackageImg from '../Inicio/img/mine.lego.PNG';
import headsetImg from '../Inicio/img/fonegamer.jpg'; // Imagem do fone gamer
import pcImg from '../Inicio/img/pcgamer.jpg'; // Imagem do PC gamer
import keyboardImg from '../Inicio/img/teclado.jpg'; // Imagem do teclado
import mouseImg from '../Inicio/img/mouse.jpg'; // Imagem do mouse

const Inicio = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Explore o Mundo dos Jogos</h1>
        <p>Encontre seus jogos favoritos e mergulhe em novas aventuras.</p>
      </header>

      {/* Seção de navegação */}
      <section className="navigation-section">
        <h2>Explore Nosso Site</h2>
        <div className="navigation-buttons">
          <a href="#jogos-populares" className="cta-button">Jogos Populares</a>
          <a href="#ofertas-especiais" className="cta-button">Ofertas Especiais</a>
          <a href="#pacotes" className="cta-button">Pacotes Especiais</a>
        </div>
      </section>

      {/* Jogos Populares */}
      <section className="jogos-section" id="jogos-populares">
        <h2>Jogos Populares</h2>
        <div className="jogos-grid">
          {[ 
            { nome: 'The Last of Us', preco: 'R$ 249,00', img: game1 },
            { nome: 'GTA V', preco: 'R$ 99,00', img: game2 },
            { nome: 'Red Dead Redemption 2', preco: 'R$ 159,00', img: game3 },
            { nome: 'EA 25', preco: 'R$ 199,00', img: game4 },
          ].map((jogo, index) => (
            <div key={index} className="jogo-card">
              <img src={jogo.img} alt={jogo.nome} />
              <h3>{jogo.nome}</h3>
              <p>{jogo.preco}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ofertas Especiais */}
      <section className="ofertas-section" id="ofertas-especiais">
        <h2>Ofertas Especiais</h2>
        <ul>
          {[ 
            { 
              nome: 'Pacote Aventura', 
              preco: 'R$ 256,05', 
              descricao: 'Inclui The Witcher 3 + Cyberpunk 2077', 
              img: adventurePackageImg 
            },
            { 
              nome: 'Pacote Esportivo', 
              preco: 'R$ 249,00', 
              descricao: 'F1 + NBA 2K24', 
              img: sportsPackageImg 
            },
            { 
              nome: 'Pacote Família', 
              preco: 'R$ 357,99', 
              descricao: 'Minecraft + Lego Star Wars', 
              img: familyPackageImg 
            },
          ].map((pacote, index) => (
            <li key={index} className="pacote-card">
              <img src={pacote.img} alt={pacote.nome} className="pacote-img" />
              <h3>{pacote.nome} - <span className="price">{pacote.preco}</span></h3>
              <p>{pacote.descricao}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Pacotes Especiais - Acessórios Gamer */}
      <section className="pacotes-especiais-section" id="pacotes">
        <h2>Pacotes Especiais - Acessórios Gamer</h2>
        <ul>
          {[ 
            { 
              nome: 'Fone Gamer', 
              preco: 'R$ 159,00', 
              descricao: 'Fone de ouvido gamer com som surround 7.1.',
              img: headsetImg 
            },
            { 
              nome: 'PC Gamer Completo', 
              preco: 'R$ 3569,00', 
              descricao: 'PC gamer com placa de vídeo RTX 3060 e 16GB de RAM.',
              img: pcImg 
            },
            { 
              nome: 'Teclado Mecânico', 
              preco: 'R$ 248,90', 
              descricao: 'Teclado mecânico RGB com switches de alta precisão.',
              img: keyboardImg 
            },
            { 
              nome: 'Mouse Gamer', 
              preco: 'R$ 199,00', 
              descricao: 'Mouse gamer com 16000 DPI e design ergonômico.',
              img: mouseImg 
            },
          ].map((pacote, index) => (
            <li key={index} className="pacote-card">
              <img src={pacote.img} alt={pacote.nome} className="pacote-img" />
              <h3>{pacote.nome} - <span className="price">{pacote.preco}</span></h3>
              <p>{pacote.descricao}</p>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
};

export default Inicio;
