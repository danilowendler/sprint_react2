import React from 'react';
import './perfil.css';

const Perfil = () => {
  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>Perfil do Usuário</h1>
      </header>
      <div className="profile-info">
        <label>Nome:</label>
        <input type="text" placeholder="Digite seu nome" />
        <label>Email:</label>
        <input type="email" placeholder="Digite seu email" />
        <button type="submit">Salvar</button>
      </div>
      <div className="recent-activities">
        <h2>Atividades Recentes</h2>
        <ul>
          <li>Atividade 1</li>
          <li>Atividade 2</li>
        </ul>
      </div>
    </div>
  );
};

export default Perfil;
