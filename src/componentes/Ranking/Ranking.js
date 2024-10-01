import React from 'react';
import './ranking.css';

const Ranking = () => {
  return (
    <div className="ranking-container">
      {/* Cabeçalho com o menu de navegação */}
      <header>
        <nav>
          <ul className="menu">
            <li><a href="#ranking-global">Ranking Global</a></li>
            <li><a href="#ranking-amigos">Ranking de Amigos</a></li>
          </ul>
        </nav>
      </header>

      {/* Ranking Global */}
      <div className="ranking" id="ranking-global">
        <h2>Ranking Global</h2>
        {/* Exemplo de dados de ranking */}
        <div className="best-item">
          <img src="/driver.png" alt="Best Driver" />
          <div className="best-item-info">
            <h3>Melhor Piloto</h3>
            <p>Nome do Piloto</p>
          </div>
        </div>
        <div className="best-item">
          <img src="/car.png" alt="Best Car" />
          <div className="best-item-info">
            <h3>Melhor Carro</h3>
            <p>Nome do Carro</p>
          </div>
        </div>
      </div>

      {/* Ranking de Amigos */}
      <div className="friends-ranks" id="ranking-amigos">
        <h2>Ranking de Amigos</h2>
        <ul>
          <li>Amigo 1 <span>Pontuação: 1000</span></li>
          <li>Amigo 2 <span>Pontuação: 900</span></li>
        </ul>
        <button className="add-friend">Adicionar Amigo</button>
      </div>
    </div>
  );
};

export default Ranking;
