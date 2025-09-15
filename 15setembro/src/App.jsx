import { useState } from 'react'
import './App.css'
import CadastrarUsuario from './components/CadastrarUsuario'
import ListarUsuarios from './components/ListarUsuarios'

function App() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nome: "Maria Silva", email: "maria@email.com" },
    { id: 2, nome: "João Souza", email: "joao@email.com" },
    { id: 3, nome: "Ana Lima", email: "ana@email.com" },
  ]);

  // Função para adicionar usuário
  const adicionarUsuario = (usuario) => {
    setUsuarios([...usuarios, { ...usuario, id: usuarios.length + 1 }]);
  };

  return (
    <>
      <CadastrarUsuario adicionarUsuario={adicionarUsuario} />
      <ListarUsuarios usuarios={usuarios} />
    </>
  )
}

export default App