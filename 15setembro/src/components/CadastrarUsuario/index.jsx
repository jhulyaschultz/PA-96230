import React, { useState } from "react";
import "./style.css";
import logo from '../../assets/imagens/logo.jpg';

const CadastrarUsuario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    setMensagem("Usuário cadastrado com sucesso!");
    setNome("");
    setEmail("");
    setSenha("");
  };


  return (
    <div className="cadastrar-usuario-container">
    <img src={logo} alt="Logo" style={{ width: '120px', borderRadius: '50%', display: 'block', margin: '0 auto 16px' }} />
      <h2>Cadastrar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default CadastrarUsuario;