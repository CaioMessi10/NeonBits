import Rotas from "./Router";
import "./Styles/index.css";
import AuthProvider from "./Contexts/authContexts";
import { ToastContainer } from "react-toastify";

//IMPORTAÇÕES DE CSS//
import './Styles/cabecalho.css'
import './Styles/cadUsuario.css'
import './Styles/cadProduto.css'
import './Styles/dashboard.css'
import './Styles/editarUsuario.css'
import './Styles/inicio.css'
import './Styles/rodape.css'

export default function App() {
  return (
    <AuthProvider>
      <div>
        <Rotas />
        <ToastContainer autoClose={5000} />
      </div>
    </AuthProvider>
  );
}
