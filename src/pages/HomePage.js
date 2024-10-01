import React, { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    const handleClick = () => {
      alert('Button clicked!');
    };

    const button = document.getElementById('myButton');
    if (button) {
      button.addEventListener('click', handleClick);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <div>
      <h2>Bem-vindo ao Meu Site</h2>
      <button id="myButton">Clique aqui</button>
    </div>
  );
};

export default HomePage;
