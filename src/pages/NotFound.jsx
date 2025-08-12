// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Arquivo de estilos separado

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Página não encontrada</p>
      <Link to="/" className="back-home">Voltar para o início</Link>
      <p>Se você acha que isso é um erro, por favor, entre em contato conosco.</p>
      <p>Obrigado por visitar nosso site!</p> 
    </div>
  );
};

export default NotFound;
