import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apiLocal from "./../Api/apiLocal";

export default function CadastrarUsuarios() {
  const mudarTela = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [cep, setCep] = useState("");
  const [hierarquia, setHierarquia] = useState([""]);
  const [idHierarquia, setIDHierarquia] = useState("");

  useEffect(() => {
    async function ListarHierarquia() {
      const resposta = await apiLocal.get("/listarHierarquia");
      setHierarquia(resposta.data);
    }
    ListarHierarquia();
  }, []);

  async function cadastroUsuarios(e) {
    try {
      e.preventDefault();
      if (!nome || !email || !senha) {
        alert("Campos em Branco");
        return;
      }
      await apiLocal.post("/CadastroUsuarios", {
        nome,
        email,
        cpf,
        senha,
        cep,
        idHierarquia,
      });
      toast.success("Cadastro Efetuado Com Sucesso", {
        toastId: "ToastId",
      });
      mudarTela("/");
    } catch (err) {
      toast.error("Erro ao Comunicar com o Servidor", {
        toastId: "ToastId",
      });
    }
  }

  return (
    <div className="conteinerCadastroUsuariosGeral">
      <h1>Formulario de Cadastro de Usuários</h1>
      <form onSubmit={cadastroUsuarios}>
        <input
          type="text"
          placeholder="Digite Seu Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Digite Seu E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Digite Sua Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <input
          type="cep"
          placeholder="Digite Seu Cep"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <input
          type="cpf"
          placeholder="Digite Seu Cpf"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <select
          value={idHierarquia}
          onChange={(e) => setIDHierarquia(e.target.value)}
        >
          <option>Selecione a Hierarquia</option>
          {hierarquia.map((item) => {
            return <option value={item.id}>{item.nome}</option>;
          })}
        </select>
        <button type="submit">Enviar</button>
      </form>
      <Link to="/" className="buttonVoltar">
        Voltar Inicio
      </Link>
    </div>
  );
}
