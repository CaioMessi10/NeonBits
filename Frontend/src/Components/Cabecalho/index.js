import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FaLocationDot } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";

export default function Cabecalho() {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => setMenuVisible(!isMenuVisible);

    return (
        <div>
            <header>
                <div className="cabecalho">
                    <div className="icon1" onClick={toggleMenu}>
                        <VscAccount />
                    </div>
                    
                    <div className="logo-head">
                        <h1 className="titulo-vintage">Vintage Playland</h1>
                    </div>
                    <div className="icon3">
                        <a href="https://www.instagram.com/senacsaopaulo/"><FaInstagram /></a>
                        <a href="https://www.google.com.br/maps/place/Senac+Bauru/@-22.3207517,-49.0697708,18z/data=!4m6!3m5!1s0x94bf67bbd5354fe1:0x696e1315626228ba!8m2!3d-22.3207393!4d-49.0684619!16s%2Fg%2F1tg6967c?entry=ttu"><FaLocationDot /></a>
                        <a href="#sobre-a-empresa"><FaGear /></a>
                    </div>
                </div>
            </header>
            {/* Área de Login e Cadastro */}
            {isMenuVisible && (
                <div className="menu">
                    <div className="login-form">
                        <h2>Login</h2>
                        <form>
                            <input type="text" placeholder="Usuário" required />
                            <input type="password" placeholder="Senha" required />
                            <button type="submit">Entrar</button>
                        </form>
                    </div>
                    <div className="product-form">
                        <h2>Cadastro de Produto</h2>
                        <form>
                            <input type="text" placeholder="Nome do Produto" required />
                            <input type="number" placeholder="Preço" required />
                            <input type="text" placeholder="Descrição" />
                            <button type="submit">Cadastrar</button>
                        </form>
                    </div>
                </div>
            )}
            <section id="sobre-a-empresa" style={{ marginTop: isMenuVisible ? '20px' : '0' }}>
                <div className="sobre-container">
                    <h2>Sobre a Empresa</h2>
                    <p>Na Vintage Playland, a paixão pelos jogos vai além do virtual.
                         Cada compra é feita com a certeza de que você estará levando para casa uma experiência de qualidade, 
                         com preços acessíveis e promoções especiais. Prepare-se para reviver momentos inesquecíveis ou descobrir novos mundos 
                         — o jogo nunca para na Vintage Playland!</p>
                </div>
            </section>
        </div>
    );
}
