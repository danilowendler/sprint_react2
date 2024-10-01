import React, { useEffect, useState } from 'react';
import './bepro.css';

const Bepro = () => {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exemplo de interatividade via JS no React
      if (window.scrollY > 200) {
        setShowDetails(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="promo-section">
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
          </ul>
        </nav>
      </header>
      <div className="promo-content">
        <h1>Promoção</h1>
      </div>
      <div className="plan">
        <span>Plano Especial</span>
      </div>
      <div className="price">
        <span>$49,99</span>
      </div>
      <button onClick={() => setShowDetails(!showDetails)}>
        Ver detalhes
      </button>
      {showDetails && (
        <div id="details">
          <p>Detalhes da promoção...</p>
        </div>
      )}
    </div>
  );
};

export default Bepro;
