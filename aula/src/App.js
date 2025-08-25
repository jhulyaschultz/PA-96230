import React, { useState } from 'react';
import './App.css';
import logo from '../src/assets/images/logo_senai.png';

import AdicionarItem from './components/Adicionarproduto';
import ListarProdutos from './components/listadeprodutos';

function App() {
  const [itens, setItens] = useState(['Mouse', 'Teclado', 'Monitor']);

  const adicionarItem = (nome) => {
    const item = nome.trim();

    if (itens.includes(item)) {
      alert('Item já existe na lista!');
      return;
    }

    setItens([...itens, item]);
  };

  return (
    <div className="App">
      <img src={logo} className="logo" alt="Logo Do Senai" />
      <h1>Lista de Compras</h1>
      <AdicionarItem onAdd={adicionarItem} />
      <hr />
      <h2>Lista de Produtos</h2>
      <ListarProdutos itens={itens} />
    </div>
  );
}

export default App;
