// src\components\ListarUsuarios\index.jsx
import React, { useState } from "react";
import "./style.css";

const usuariosExemplo = [
  { id: 1, nome: "Maria Silva", email: "maria@email.com" },
  { id: 2, nome: "João Souza", email: "joao@email.com" },
  { id: 3, nome: "Ana Lima", email: "ana@email.com" },
];

const ListarUsuarios = () => {
  const [usuarios, setUsuarios] = useState(usuariosExemplo);

  return (
    <div className="listar-usuarios-container">
      <h2>Lista de Usuários</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nome}</td>
              <td>{usuario.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarUsuarios;