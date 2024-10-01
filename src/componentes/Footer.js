// components/Footer.js
import React from 'react';

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button id="backToTop" onClick={handleBackToTop}>
      Voltar ao Topo
    </button>
  );
}

export default Footer;
