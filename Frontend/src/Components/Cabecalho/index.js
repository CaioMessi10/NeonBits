import Login from "./login";
// *IMPORTAÇÕES DE ICONS* //
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";

export default function Cabecalho() {
  return (
    <div>
      <header>
        <div className="cabecalho">
        <Login />
 
         
          <div className="logo-head">
            <h1 className="titulo-vintage">Vintage Playland</h1>
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
