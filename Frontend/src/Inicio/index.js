import React from 'react';
import Section from './Section';

//IMPORTES DE FOTOS//
import foto1 from './img/assassinUnity.jpg';
import Foto2 from './img/astro.jpg';
import Foto3 from './img/battefield3.jpg';
import Foto4 from './img/callofduty.jpg';
import Foto5 from './img/callofdutyWarfare.jpg';
import Foto6 from './img/daysgone.jpg';
import foto7 from './img/devilMayCry.jpg';
import foto8 from './img/farcry4.jpg';
import foto9 from './img/gfwRagnarok.jpg';
import foto10 from './img/gta4.jpg';
import foto11 from './img/horizon.jpg';
import foto12 from './img/justdance4.jpg';
import foto13 from './img/kinectAdventuras.jpg';
import foto14 from './img/leftofdead.jpg';
import foto15 from './img/legoMarvel.jpg';
import foto16 from './img/marioPaty.jpg';
import foto17 from './img/MilesAranha.jpg';
import foto18 from './img/minecraft.jpg';
import foto19 from './img/onepieceOdyssey.jpg';
import foto20 from './img/persona.jpg';
import foto21 from './img/rainbowsix.jpg';
import foto22 from './img/residentEvilVillage.jpg';
import foto23 from './img/sonic.jpg';
import foto24 from './img/sports.jpg';
import foto25 from './img/tombraider.jpg';
import foto26 from './img/wukong.jpg';
import foto27 from './img/zelda.jpg';

export default function Inicio() {
  return (
    <div className="container">
      {/* Seção de Jogos PS3 */}
      <Section 
        title="Jogos PS3"
        description="Jogos para PlayStation 3, para quem deseja reviver grandes aventuras."
        items={[
          { name: "Battlefield 3", price: "R$ 99,99", imgSrc: Foto3 },
          { name: "Call of Duty", price: "R$ 89,99", imgSrc: Foto4 },
          { name: "Left 4 Dead", price: "R$ 79,99", imgSrc: foto14 },
        ]}
      />

      {/* Seção de Jogos PS4 */}
      <Section 
        title="Jogos PS4"
        description="Aproveite os melhores títulos para PlayStation 4!"
        items={[
          { name: "Spider-Man: Miles Morales", price: "R$ 159,99", imgSrc: foto17 },
          { name: "Days Gone", price: "R$ 129,99", imgSrc: Foto6 },
          { name: "God of War Ragnarok", price: "R$ 189,99", imgSrc: foto9 },
        ]}
      />

      {/* Seção de Jogos PS5 */}
      <Section 
        title="Jogos PS5"
        description="Jogos incríveis para PlayStation 5, com gráficos e desempenho de última geração!"
        items={[
          { name: "Astro's Playroom", price: "R$ 149,99", imgSrc: Foto2 },
          { name: "Horizon Forbidden West", price: "R$ 229,99", imgSrc: foto11 },
          { name: "Persona 5 Royal", price: "R$ 199,99", imgSrc: foto20 },
        ]}
      />

      {/* Seção de Jogos Xbox 360 */}
      <Section 
        title="Jogos Xbox 360"
        description="Os melhores jogos para Xbox 360, para quem ainda curte a nostalgia."
        items={[
          { name: "Minecraft", price: "R$ 89,99", imgSrc: foto18 },
          { name: "LEGO Marvel Super Heroes", price: "R$ 99,99", imgSrc: foto15 },
          { name: "GTA 4", price: "R$ 119,99", imgSrc: foto10 },
        ]}
      />

      {/* Seção de Jogos Xbox One */}
      <Section 
        title="Jogos Xbox One"
        description="Jogos para Xbox One, com grandes aventuras e gráficos incríveis!"
        items={[
          { name: "Tomb Raider", price: "R$ 159,99", imgSrc: foto25 },
          { name: "Assassin's Creed Unity", price: "R$ 139,99", imgSrc: foto1 },
          { name: "Far Cry 4", price: "R$ 169,99", imgSrc: foto8 },
        ]}
      />

      {/* Seção de Jogos Xbox Series S */}
      <Section 
        title="Jogos Xbox Series S"
        description="Explore os melhores jogos para a nova geração de Xbox Series S."
        items={[
          { name: "One Piece Odyssey", price: "R$ 189,99", imgSrc: foto19 },
          { name: "Call of Duty: Warfare", price: "R$ 209,99", imgSrc: Foto5 },
          { name: "Resident Evil Village", price: "R$ 229,99", imgSrc: foto22 },
        ]}
      />

      {/* Seção de Jogos Kinect */}
      <Section 
        title="Jogos Kinect"
        description="Diversão interativa com os jogos Kinect!"
        items={[
          { name: "Sports", price: "R$ 129,99", imgSrc: foto24 },
          { name: "Just Dance 4", price: "R$ 99,99", imgSrc: foto12 },
          { name: "Adventures", price: "R$ 89,99", imgSrc: foto13 },
        ]}
      />

      {/* Seção de Jogos PC */}
      <Section 
        title="Jogos PC"
        description="Jogos incríveis para PC com ótimos preços."
        items={[
          { name: "Wukong", price: "R$ 249,99", imgSrc: foto26 },
          { name: "Rainbow Six", price: "R$ 179,99", imgSrc: foto21 },
          { name: "Devil May Cry", price: "R$ 169,99", imgSrc: foto7 },
        ]}
      />

      {/* Seção de Jogos Nintendo */}
      <Section 
        title="Jogos Nintendo"
        description="Explore os jogos para Nintendo com aventuras únicas."
        items={[
          { name: "Zelda: Breath of the Wild", price: "R$ 299,99", imgSrc: foto27 },
          { name: "Sonic Mania", price: "R$ 159,99", imgSrc: foto23 },
          { name: "Mario Party", price: "R$ 179,99", imgSrc: foto16 },
        ]}
      />
    </div>
  );
}
