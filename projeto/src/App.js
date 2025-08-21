import React, { useState } from 'react';
import './App.css';

function App() {
  const [produto, setProduto] = useState('');
  const [lista, setLista] = useState(['MORANGO DO AMOR', 'ARROZ', 'UVA', 'STROGONOFF']);

  const adicionarProduto = () => {
    const produtoTrim = produto.trim().toUpperCase();

    if (produtoTrim === '') {
      alert('Digite um nome de produto válido.');
      return;
    }

    if (lista.includes(produtoTrim)) {
      alert('Produto já existente.');
      return;
    }

    setLista([...lista, produtoTrim]);
    setProduto('');
  };

  return (
    <div className='App'>
      <h1>Lista de Compras</h1>
      <hr />
      <h2>Adicionar Produto</h2>
      <input
        type='text'
        placeholder='Digite o nome do produto:'
        value={produto}
        onChange={(e) => setProduto(e.target.value)}
      />
      <button onClick={adicionarProduto}>Adicionar</button>
      <hr />
      <h2>Lista de Produtos</h2>
      <ol>
        {lista.map((produto, index) => (
          <li key={index}>{produto}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;


