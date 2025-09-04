// src\components\InfoAluno\index.jsx
import { useState } from 'react'
import './styles.css'

function InfoAluno() {
    const [usuario, setUsuario] = useState('JHULYA SCHULTZ')
      const [idade, setIdade] = useState(17)
      const [email, setEmail] = useState('maria@gmail.com')
      const [peso, setPeso] = useState(90)
      const [altura, setAltura] = useState(1.75)

    return(
        <>
      <h1>DADOS DO USÚARIO</h1>
      <p>NOME: {usuario}</p>
      <p>IDADE: {idade}</p>
      <p>EMAIL: {email}</p>
      <p>PESO: {peso}</p>
      <p>ALTURA: {altura}</p>
    </>


    );
}

export default InfoAluno;