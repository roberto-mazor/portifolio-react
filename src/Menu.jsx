import React, { useState } from 'react';
import './Menu.css';

function Menu() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <header>
      <button id="menu-toggle" onClick={alternarMenu}>☰</button>
      <nav className={`menu ${menuAberto ? 'show' : ''}`} id="mobile-menu">
        <ul>
          <li><a href="#inicio" onClick={fecharMenu}>Início</a></li>
          <li><a href="#sobre-mim" onClick={fecharMenu}>Sobre Mim</a></li>
          <li><a href="#projetos" onClick={fecharMenu}>Projetos</a></li>
          <li><a href="#formacao" onClick={fecharMenu}>Formação</a></li>
          <li><a href="#experiencia" onClick={fecharMenu}>Experiência</a></li>
          <li><a href="#contato" onClick={fecharMenu}>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}



export default Menu