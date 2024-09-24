import React from "react";
import { FaInstagram } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";

export default function Cabecalho() {
    return (
        <div>
            <header>
                <div  className="cabecalho">
                    <div className="icon1">
                        <TiThMenuOutline />
                    </div>
                    <div class="logo-head">
                        <p><h1>Vintage Playland</h1></p>
                    </div>
                    <div className="icon3">
                        <a href="https://www.instagram.com/lucasberti/?hl=pt-br"><FaInstagram /></a>
                        <a href="https://www.google.com.br/maps/place/Senac+Bauru/@-22.3207517,-49.0697708,18z/data=!4m6!3m5!1s0x94bf67bbd5354fe1:0x696e1315626228ba!8m2!3d-22.3207393!4d-49.0684619!16s%2Fg%2F1tg6967c?entry=ttu"><FaLocationDot /></a>
                        <a href='./'><FaGear /></a>
                    </div>
                </div>
            </header>
        </div>
    )
}