import React, { useState } from "react";
import Login from "./login";
// *IMPORTAÇÕES DE ICONS* //
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa"; // Ícone de login

export default function Cabecalho() {
  // Estado para controlar a visibilidade do formulário de login
  const [showLogin, setShowLogin] = useState(false);

  // Função para alternar a visibilidade do login
  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <header>
        <div className="cabecalho">
          {/* Ícone de Login */}
          <div className="login-icon" onClick={toggleLogin}>
            <FaSignInAlt />
          </div>

          {/* Fundo escuro atrás do formulário de login */}
          {showLogin && <div className="login-overlay" onClick={toggleLogin}></div>}

          {/* Formulário de Login, visível quando showLogin for true */}
          {showLogin && (
            <div className="login-form">
              <div className="login-header">
                {/* Botão de Voltar */}
                <button onClick={toggleLogin} className="back-button">Voltar</button>
              </div>
              <Login />
            </div>
          )}

          <div className="logo-head">
            <h1 className="titulo-vintage">Vintage Playland</h1> {/* Classe para o efeito vintage */}
          </div>

          <div className="icon3">
            <a href="https://www.instagram.com/senacsaopaulo/">
              <FaInstagram />
            </a>
            <a href="https://www.google.com.br/maps/place/Senac+Bauru/@-22.3207517,-49.0697708,18z/data=!4m6!3m5!1s0x94bf67bbd5354fe1:0x696e1315626228ba!8m2!3d-22.3207393!4d-49.0684619!16s%2Fg%2F1tg6967c?entry=ttu">
              <FaLocationDot />
            </a>
            <a href="#sobre-a-empresa">
              <FaGear />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
