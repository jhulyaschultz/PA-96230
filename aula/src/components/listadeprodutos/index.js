import React from "react";
import './styles.css';

const ListaDeItens = ({ itens = [] }) => {
    return ( 
        <ul className="lista-itens">
            {itens.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default ListaDeItens;

