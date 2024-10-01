import React from 'react';
import './main.css';

const Main = () => {
  return (
    <div>
      <header>
        <nav>
          <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/">Products</a></li>
          </ul>
        </nav>
      </header>
      <div className="main-container">
        <div className="left-box">
          <h2>Informações Principais</h2>
          {/* Conteúdo principal */}
        </div>
        <div className="right-box">
          <div className="box">
            {/* Conteúdo lateral */}
            <p>Conteúdo da caixa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
