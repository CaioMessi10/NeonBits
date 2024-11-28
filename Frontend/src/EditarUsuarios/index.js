import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiLocal from "./../Api/apiLocal";
import "./editarUsuario.css"; 

export default function EditarUsuarios() {
  const mudarTela = useNavigate();
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  useEffect(() => {
    async function consultarDados() {
      const resposta = await apiLocal.post("/ConsultarUsuariosUnico", {
        id,
      });
      console.log(resposta);
      setNome(resposta.data.nome);
      setEmail(resposta.data.email);
      setPassword(resposta.data.password);
    }
    consultarDados();
  }, []);

  async function enviarAlteracao(e) {
    try {
      e.preventDefault();
      const resposta = await apiLocal.put('/AlterarDadosUsuarios', {
        id,
        nome,
        email
      });
      mudarTela('/');
    } catch (err) {
      alert('Erro ao Comunicar com o Servidor');
    }
  }

  return (
    <div className="editar-usuarios">
      <h1>Editar Usuários</h1>
      <p>ID do usuário: {id}</p>
      <form onSubmit={enviarAlteracao}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <input
          type="password"
          disabled
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
