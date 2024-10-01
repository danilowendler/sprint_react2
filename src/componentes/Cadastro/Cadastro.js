import React, { useState } from 'react';
import './cadastro.css';

const Cadastro = () => {
  // Estados para armazenar os valores dos campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cpf, setCpf] = useState('');

  // Função para lidar com o envio do formulário
  const handleCadastro = (event) => {
    event.preventDefault();
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    // Lógica para cadastro pode ser adicionada aqui
    alert(`Cadastro realizado com sucesso para o email: ${email}`);
  };

  return (
    <div className="cadastro">
      <div className="background"></div>
      <form onSubmit={handleCadastro}>
        <p align="left"> Nome 
          <input 
            type="text" 
            id="nome" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            size="40" 
            maxLength="50" 
            required 
          />
        </p>
        <p align="left">Email 
          <input 
            type="text" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            size="50" 
            required 
          />
        </p>
        <p align="left"> Senha 
          <input 
            type="password" 
            id="senha" 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
            size="10" 
            maxLength="16" 
            required 
          />
        </p>
        <p align="left"> Confirmar Senha 
          <input 
            type="password" 
            id="confirmarSenha" 
            value={confirmarSenha} 
            onChange={(e) => setConfirmarSenha(e.target.value)} 
            size="10" 
            maxLength="16" 
            required 
          />
        </p>
        <p align="left"> CPF 
          <input 
            type="text" 
            id="cpf" 
            value={cpf} 
            onChange={(e) => setCpf(e.target.value)} 
            size="10" 
            required 
          />
        </p>
        <button type="submit">CONCLUIR</button>
        <button type="reset" onClick={() => window.location.reload()}>EXCLUIR ESTA CONTA</button>
      </form>
    </div>
  );
};

export default Cadastro;
