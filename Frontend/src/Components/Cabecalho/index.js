import React, { useState, useEffect } from "react";
import Login from "./login";
// *IMPORTAÇÕES DE ICONS* //
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";

export default function Cabecalho() {
  // Estado para controlar a visibilidade do formulário de login
  const [showLogin, setShowLogin] = useState(false);

  // Estado para controlar a visibilidade da seção de configurações
  const [showSettings, setShowSettings] = useState(false);

  // Estado para controlar a transparência do cabeçalho
  const [isScrolled, setIsScrolled] = useState(false);

  // Estado para o tema claro/escuro
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Estado para a cor do fundo
  const [bgColor, setBgColor] = useState(localStorage.getItem('bgColor') || '#ffffff');

  // Estado para o idioma
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'pt');

  // Estado para as notificações
  const [notifications, setNotifications] = useState(localStorage.getItem('notifications') === 'true' || true);

  // Função para alternar a visibilidade do login
  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  // Função para alternar a visibilidade da seção de configurações
  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  // Função para alternar o tema
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Função para mudar a cor de fundo
  const changeBgColor = (color) => {
    setBgColor(color);
    localStorage.setItem('bgColor', color);
  };

  // Função para alternar o idioma
  const toggleLanguage = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  // Função para alternar as notificações
  const toggleNotifications = () => {
    const newNotifications = !notifications;
    setNotifications(newNotifications);
    localStorage.setItem('notifications', newNotifications);
  };

  // Efeito para detectar a rolagem e mudar a opacidade do cabeçalho
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpar o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Aplica a classe do tema ao corpo do documento
  useEffect(() => {
    document.body.className = theme;
    document.body.style.backgroundColor = bgColor;
  }, [theme, bgColor]);

  return (
    <div>
      <header>
        <div className={`cabecalho ${isScrolled ? 'scrolled' : ''}`}>
          {/* Logo */}
          <div className="logo-head">
            <h1 className="titulo-vintage">NeonBits</h1>
          </div>

          {/* Ícones e Login alinhados à direita */}
          <div className="icons-right">
            <a href="https://www.instagram.com/senacsaopaulo/">
              <FaInstagram />
            </a>
            <a href="https://www.google.com.br/maps/place/Senac+Bauru/">
              <FaLocationDot />
            </a>

            {/* Ícone de Configurações */}
            <div className="settings-icon" onClick={toggleSettings}>
              <FaGear className="icon-config" />
            </div>

            {/* Ícone de Login */}
            <div className="login-icon" onClick={toggleLogin}>
              <FaSignInAlt />
            </div>
          </div>

          {/* Seção de Configurações */}
          {showSettings && (
            <div className="settings-menu">
              <h2>Configurações</h2>
              <ul>
                <li onClick={toggleTheme}>
                  {theme === 'light' ? 'Ativar Modo Escuro' : 'Ativar Modo Claro'}
                </li>
                <li onClick={() => changeBgColor('#ffecb3')}>Fundo Amarelo Claro</li>
                <li onClick={() => changeBgColor('#e0f7fa')}>Fundo Azul Claro</li>
                <li onClick={() => changeBgColor('#ffffff')}>Fundo Branco</li>
                <li onClick={toggleLanguage}>
                  {language === 'pt' ? 'Mudar para Inglês' : 'Mudar para Português'}
                </li>
                <li onClick={toggleNotifications}>
                  {notifications ? 'Desativar Notificações' : 'Ativar Notificações'}
                </li>
                <li>Preferências</li>
              </ul>
              <button onClick={toggleSettings} className="close-settings">Fechar</button>
            </div>
          )}

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
        </div>
      </header>
    </div>
  );
}
