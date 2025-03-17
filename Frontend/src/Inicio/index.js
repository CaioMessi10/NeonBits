import React, { useState } from 'react';
import Modal from 'react-modal';
// Importação de imagens
import game1 from '../Inicio/img/tle last of us.jpg';
import game2 from '../Inicio/img/gtaV.jpg';
import game3 from '../Inicio/img/red dead.jpg';
import game4 from '../Inicio/img/ea25.jpg';
import game5 from '../Inicio/img/ark.jpg';
import game6 from '../Inicio/img/enigma.jpg';
import game7 from '../Inicio/img/Mouthwashing.jpg';
import game8 from '../Inicio/img/assassin.jpg';
import game9 from '../Inicio/img/dayz.jpg';
import game10 from '../Inicio/img/diablo.jpg';
import game11 from '../Inicio/img/godofwar.jpg';
import game12 from '../Inicio/img/naruto.jpg';
import game13 from '../Inicio/img/palword.jpg';
import game14 from '../Inicio/img/planetzoo.jpg';
import game15 from '../Inicio/img/wukong.jpg';
import game16 from '../Inicio/img/DetroitBecomeHuman.png';
import game17 from '../Inicio/img/onePiece.png';
import game19 from '../Inicio/img/thesims2.jpg';
import game20 from '../Inicio/img/MarvelsSpiderMan.jpg';
import game21 from '../Inicio/img/midside.jpg';
import game22 from '../Inicio/img/splitfiction.jpg';
import game23 from '../Inicio/img/subnautica.jpg';
import game24 from '../Inicio/img/tombraider.jpg';
import game25 from '../Inicio/img/repo.jfif';
import game26 from '../Inicio/img/terraria.jfif';

import adventurePackageImg from '../Inicio/img/witcher.cyber.PNG';
import sportsPackageImg from '../Inicio/img/nba.f1.PNG';
import familyPackageImg from '../Inicio/img/mine.lego.PNG';
import headsetImg from '../Inicio/img/fonegamer.jpg';
import pcImg from '../Inicio/img/pcgamer.jpg';
import keyboardImg from '../Inicio/img/teclado.jpg';
import mouseImg from '../Inicio/img/mouse.jpg';
import placaImg from '../Inicio/img/placadevideo.jpg';
import cadeiraImg from '../Inicio/img/cadeira.jpg';
import iphone from '../Inicio/img/iphone 16.jfif'
import gtx from '../Inicio/img/gtx 1080ti.jfif'
import notebook from '../Inicio/img/notebook.jfif' 
import placaMae from '../Inicio/img/placamae.jpeg'
import memoriaRam from '../Inicio/img/memoriaram.jfif'
import gabinete from '../Inicio/img/gabinete.jfif'
// Carrossel
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Inicio = () => {
  const [cart, setCart] = useState([]); // Estado para o carrinho
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle do estado do modal

  // Abrir o modal
  const openCartModal = () => {
    setIsModalOpen(true);
  };

  // Fechar o modal
  const closeCartModal = () => {
    setIsModalOpen(false);
  };

  // Adicionar ao carrinho
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Remover um item do carrinho
  const removeFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.nome !== item.nome));
  };

  // Calcular o preço total do carrinho
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.preco.replace('R$', '').replace(',', '.')), 0).toFixed(2);
  };

  // Exibir o número de itens no carrinho
  const handleCartClick = () => {
    openCartModal();
  };

  // Carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Explore o Mundo dos Jogos</h1>
        <p>Encontre seus jogos favoritos e mergulhe em novas aventuras.</p>
      </header>

      {/* Carrinho (com ícone e contagem de itens) */}
      <div className="cart-icon" onClick={handleCartClick}>
        <a href="#">🛒 Carrinho ({cart.length})</a>
      </div>

      {/* Modal do Carrinho */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeCartModal}
        contentLabel="Carrinho"
        style={{
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',  // Centraliza o modal tanto na vertical quanto na horizontal
            width: '80%',  // Ajuste a largura conforme necessário
            maxWidth: '600px',  // Largura máxima para o modal
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <div className="cart-modal">
          <h2>Itens no Carrinho</h2>
          <ul>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <img src={item.img} alt={item.nome} className="cart-item-img" />
                  <h3>{item.nome} - <span className="price">{item.preco}</span></h3>
                  <button onClick={() => removeFromCart(item)}>Remover</button>
                </li>
              ))
            ) : (
              <p>Seu carrinho está Vazio 😔... (igual seu coração)</p>
            )}
          </ul>
          <button onClick={closeCartModal}>Fechar</button>

          {/* Exibindo o total */}
          {cart.length > 0 && (
            <div className="checkout-container">
              <h3>Total: R$ {calculateTotal()}</h3>
              <button onClick={() => alert('Ainda em Manutenção favor Esperar...')}>Finalizar Compra</button>
            </div>
          )}
        </div>
      </Modal>

      {/* Jogos Populares - Carrossel */}
      <section className="jogos-section" id="jogos-populares">
        <h2>Jogos Populares</h2>
        <Slider {...settings}>
          {[ 
            { nome: 'The Last of Us', preco: 'R$ 249,00', img: game1 },
            { nome: 'GTA V', preco: 'R$ 99,00', img: game2 },
            { nome: 'Red Dead Redemption 2', preco: 'R$ 159,00', img: game3 },
            { nome: 'EA 25', preco: 'R$ 199,00', img: game4 },
            { nome: 'Ark: Survival Evolved', preco: 'R$ 126,00', img: game5 },
            { nome: 'Enigma do Medo', preco: 'R$ 69,00', img: game6 },
            { nome: 'Mouthwashing', preco: 'R$ 39,00', img: game7 },
            { nome: 'Assassin’s Creed', preco: 'R$ 199,00', img: game8 },
            { nome: 'DayZ', preco: 'R$ 179,00', img: game9 },
            { nome: 'Diablo IV', preco: 'R$ 299,00', img: game10 },
            { nome: 'God of War', preco: 'R$ 249,00', img: game11 },
            { nome: 'Naruto Storm', preco: 'R$ 179,00', img: game12 },
            { nome: 'Palworld', preco: 'R$ 89,00', img: game13 },
            { nome: 'Planet Zoo', preco: 'R$ 169,00', img: game14 },
            { nome: 'Wukong', preco: 'R$ 149,00', img: game15 },
          ].map((jogo, index) => (
            <div key={index} className="jogo-card">
              <div className="image-container">
                <img src={jogo.img} alt={jogo.nome} />
              </div>
              <div className="description-container">
                <h3>{jogo.nome}</h3>
                <p>{jogo.preco}</p>
                <button onClick={() => addToCart(jogo)}>Adicionar ao Carrinho</button>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Jogos Recém Adicionados - Menor */}
      <section className="jogos-section" id="jogos-recem-adicionados">
        <h2>Jogos Recém Adicionados</h2>
        <div className="jogos-list">
          {[ 
            { nome: 'Detroit: Become Human', preco: 'R$ 199,00', img: game16 },
            { nome: 'One Piece: Pirate Warriors 4', preco: 'R$ 179,00', img: game17 },
            { nome: 'The Sims 2', preco: 'R$ 99,00', img: game19 },
            { nome: 'Marvel’s Spider-Man', preco: 'R$ 249,00', img: game20 },
            { nome: 'Midside', preco: 'R$ 129,00', img: game21 },
            { nome: 'Split Fiction', preco: 'R$ 149,00', img: game22 },
            { nome: 'Subnautica', preco: 'R$ 99,00', img: game23 },
            { nome: 'Tomb Raider', preco: 'R$ 179,00', img: game24 },
            { nome: 'Repo', preco: 'R$ 99,00', img: game25 },
            { nome: 'Jogo 26', preco: 'R$ 129,00', img: game26 },
          ].map((jogo, index) => (
            <div key={index} className="jogo-card-small">
              <div className="image-container-small">
                <img src={jogo.img} alt={jogo.nome} />
              </div>
              <div className="description-container-small">
                <h3>{jogo.nome}</h3>
                <p>{jogo.preco}</p>
                <button onClick={() => addToCart(jogo)}>Adicionar</button>
              </div>
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
              descricao: 'NBA 2K24 + F1 ', 
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
              <button onClick={() => addToCart(pacote)}>Adicionar ao Carrinho</button>
            </li>
          ))}
        </ul>
      </section>

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
      { 
        nome: 'Placa de Video', 
        preco: 'R$ 599,00', 
        descricao: 'Placa de vídeo para jogos de alta performance.',
        img: placaImg 
      },
      { 
        nome: 'Cadeira Gamer', 
        preco: 'R$ 999,00', 
        descricao: 'Cadeira gamer com ajuste de altura e apoio lombar.',
        img: cadeiraImg 
      },
      { 
        nome: 'Gabinete Gamer',  // Gabinete adicionado aqui
        preco: 'R$ 349,00', 
        descricao: 'Gabinete gamer com excelente fluxo de ar e design moderno.',
        img: gabinete 
      },
      { 
        nome: 'iPhone 16', 
        preco: 'R$ 6999,00', 
        descricao: 'Smartphone com desempenho avançado e câmera de alta qualidade.',
        img: iphone 
      },
      { 
        nome: 'GTX 1080 Ti', 
        preco: 'R$ 1130,10', 
        descricao: 'Placa de vídeo GTX 1080 Ti para jogos em alta definição.',
        img: gtx 
      },
      { 
        nome: 'Notebook Gamer', 
        preco: 'R$ 4898,00', 
        descricao: 'Notebook gamer com processador i7 e placa de vídeo RTX 3070.',
        img: notebook 
      },
      { 
        nome: 'Memória RAM', 
        preco: 'R$ 349,00', 
        descricao: 'Memória RAM DDR4 de 16GB para alto desempenho em jogos e multitarefas.',
        img: memoriaRam 
      },
      { 
        nome: 'Placa Mãe', 
        preco: 'R$ 599,00', 
        descricao: 'Placa mãe com chipset X570 para suportar as mais novas tecnologias.',
        img: placaMae 
      }
    ].map((produto, index) => (
      <li key={index} className="produto-card">
        <img src={produto.img} alt={produto.nome} className="produto-img" />
        <h3>{produto.nome} - <span className="price">{produto.preco}</span></h3>
        <p>{produto.descricao}</p>
        <button onClick={() => addToCart(produto)}>Adicionar ao Carrinho</button>
      </li>
    ))}
  </ul>
</section>


    </div>
  );
};

export default Inicio;
