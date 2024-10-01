import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul className="menu">
          <li><a href="/login">FAÇA SEU LOGIN!</a></li>
          <li><a href="/ranking">RANKING</a></li>
          <li><a href="/squad">My Squad</a></li>
          <li><a href="/bepro">BE PRO</a></li>
          <li><a href="/perfil">MY PROFILE</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


