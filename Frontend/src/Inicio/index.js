import React from 'react';

function Section({ title, description, items }) {
  return (
    <div className="coluna">
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> {item.price && `- ${item.price}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Inicio() {
  return (
    <div className="container">
      {/* Barra de Navegação */}
      <nav className="navbar">
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#ps3">PS3</a></li>
          <li><a href="#ps4">PS4</a></li>
          <li><a href="#ps5">PS5</a></li>
          <li><a href="#xbox">Xbox</a></li>
          <li><a href="#pc">PC</a></li>
          <li><a href="#nintendo">Nintendo</a></li>
        </ul>
      </nav>

      {/* Seção de Introdução */}
      <section id="inicio" className="intro">
        <h1>Bem-vindo ao Mundo dos Jogos!</h1>
        <p>
          Explore nossa coleção de jogos incríveis para diversas plataformas,
          desde os clássicos até os lançamentos mais recentes. Encontre o jogo perfeito para o seu console ou PC.
        </p>
        <p>
          Se você é fã de PlayStation, Xbox, Nintendo ou PC, temos opções para todos os gostos e estilos de jogo.
        </p>
      </section>

      {/* Seções de Jogos */}
      <section id="ps3">
        <Section 
          title="Jogos PS3"
          description="Jogos para PlayStation 3, para quem deseja reviver grandes aventuras."
          items={[
            { name: "Battlefield 3", price: "R$ 99,99" },
            { name: "Call of Duty", price: "R$ 89,99" },
            { name: "Left 4 Dead", price: "R$ 79,99" },
          ]}
        />
      </section>

      <section id="ps4">
        <Section 
          title="Jogos PS4"
          description="Aproveite os melhores títulos para PlayStation 4!"
          items={[
            { name: "Spider-Man: Miles Morales", price: "R$ 159,99" },
            { name: "Days Gone", price: "R$ 129,99" },
            { name: "God of War Ragnarok", price: "R$ 189,99" },
          ]}
        />
      </section>

      <section id="ps5">
        <Section 
          title="Jogos PS5"
          description="Jogos incríveis para PlayStation 5, com gráficos e desempenho de última geração!"
          items={[
            { name: "Astro's Playroom", price: "R$ 149,99" },
            { name: "Horizon Forbidden West", price: "R$ 229,99" },
            { name: "Persona 5 Royal", price: "R$ 199,99" },
          ]}
        />
      </section>

      <section id="xbox">
        <Section 
          title="Jogos Xbox"
          description="Jogos para Xbox 360, Xbox One e Xbox Series S."
          items={[
            { name: "Minecraft", price: "R$ 89,99" },
            { name: "GTA 4", price: "R$ 119,99" },
            { name: "Call of Duty: Warfare", price: "R$ 209,99" },
          ]}
        />
      </section>

      <section id="pc">
        <Section 
          title="Jogos PC"
          description="Jogos incríveis para PC com ótimos preços."
          items={[
            { name: "Wukong", price: "R$ 249,99" },
            { name: "Rainbow Six", price: "R$ 179,99" },
            { name: "Devil May Cry", price: "R$ 169,99" },
          ]}
        />
      </section>

      <section id="nintendo">
        <Section 
          title="Jogos Nintendo"
          description="Explore os jogos para Nintendo com aventuras únicas."
          items={[
            { name: "Zelda: Breath of the Wild", price: "R$ 299,99" },
            { name: "Sonic Mania", price: "R$ 159,99" },
            { name: "Mario Party", price: "R$ 179,99" },
          ]}
        />
      </section>
    </div>
  );
}
