import React from 'react';
import foto1 from '../imgs/Starfield.png';
import Foto2 from '../imgs/Assassins.png';  
import Foto3 from '../imgs/EldenRing.png'; 
import Foto4 from '../imgs/Decorativo.png';
import Foto5 from '../imgs/foneGamer.png';
import Foto6 from '../imgs/SuperMario.png';
import Section from './Section';

export default function Inicio() {
  return (
    <div className="container">
      {/* Seção de Jogos Reciclados */}
      <Section 
        title="Jogos Reciclados"
        description="Explore nossa seleção de jogos recondicionados com preços acessíveis e qualidade garantida. Perfeitos para quem busca diversão sustentável!"
        items={[
          { name: "The Last of Us Part II", price: "R$ 149,99" },
          { name: "God of War", price: "R$ 129,99" },
          { name: "Red Dead Redemption 2", price: "R$ 139,99" },
          { name: "Marvel's Spider-Man", price: "R$ 119,99" },
          { name: "FIFA 23", price: "R$ 179,99" },
          { name: "Call of Duty: Modern Warfare II", price: "R$ 169,99" },
          { name: "Assassin's Creed Valhalla", price: "R$ 159,99" },
        ]}
        imgSrc={Foto2}
        imgAlt="Assassin's Creed"
      />

      {/* Seção de Jogos Reciclados em Promoção */}
      <Section 
        title="Jogos Reciclados em Promoção"
        description="Aproveite nossos preços incríveis em jogos reciclados, prontos para novas aventuras!"
        items={[
          { name: "Elden Ring - Reciclado", price: "R$ 129,99" },
          { name: "Combo de Jogos Indie Reciclados", price: "R$ 69,99" },
          { name: "Pacote de Expansões Reciclado", price: "R$ 39,99" },
          { name: "Assassin's Creed Valhalla - Edição Especial Reciclada", price: "R$ 229,99" },
        ]}
        imgSrc={Foto3}
        imgAlt="EldenRing"
      />

      {/* Seção de Novidades em Estoque */}
      <Section 
        title="Novidades em Estoque"
        description="Jogos novos com preços acessíveis e com compromisso ambiental. Confira nossos lançamentos!"
        items={[
          { name: "Starfield", price: "R$ 249,99" },
          { name: "Final Fantasy XVI", price: "R$ 229,99" },
          { name: "Hogwarts Legacy", price: "R$ 199,99" },
        ]}
        imgSrc={foto1}
        imgAlt="Starfield"
      />

      {/* Seção de Promoções Recicladas */}
      <Section 
        title="Promoções Recicladas"
        description="Ofertas especiais para quem adora jogos com história e sustentabilidade:"
        items={[
          { name: "Desconto de 30% em compras de jogos recondicionados!" },
          { name: "Compre 1 jogo reciclado, leve 2 em títulos indie!" },
          { name: "Promoção de Aniversário: Jogo gratuito em compras acima de R$ 200!" },
        ]}
        imgSrc={Foto4}
        imgAlt="Promoções"
      />

      {/* Seção de Acessórios Reciclados */}
      <Section 
        title="Acessórios Reciclados"
        description="Melhore sua experiência com acessórios de segunda mão, mas em excelente estado:"
        items={[
          { name: "Controle extra", price: "R$ 249,99" },
          { name: "Fones de ouvido gamer", price: "R$ 129,99" },
          { name: "Suporte para console", price: "R$ 49,99" },
        ]}
        imgSrc={Foto5}
        imgAlt="foneGamer"
      />

      {/* Seção de Jogos Clássicos Reciclados */}
      <Section 
        title="Jogos Clássicos Reciclados"
        description="Reviva os clássicos com versões remasterizadas e recondicionadas:"
        items={[
          { name: "Super Mario Bros.", price: "R$ 79,99" },
          { name: "The Legend of Zelda: Ocarina of Time", price: "R$ 109,99" },
          { name: "Final Fantasy VII", price: "R$ 119,99" },
        ]}
        imgSrc={Foto6}
        imgAlt="SuperMario"
      />
    </div>
  );
}
