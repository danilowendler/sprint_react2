// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importando os componentes
import Header from './componentes/Header/Header';
import Slider from './componentes/Slider/Slider';
import RightColumn from './componentes/RightColumn/RightColumn';
import Footer from './componentes/Footer';
import BePro from './componentes/BePro/BePro';
import Cadastro from './componentes/Cadastro/Cadastro';
import Login from './componentes/Login/Login';
import Perfil from './componentes/Perfil/Perfil';
import Ranking from './componentes/Ranking/Ranking';
import Squad from './componentes/Squad/Squad';
import Countdown from './componentes/Countdown';
import LeftBox from './componentes/LeftBox';
import RightBox from './componentes/RightBox';
import BackToTopButton from './componentes/BacktoTop';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Rota principal que renderiza todos os componentes desejados */}
          <Route path="/" element={
            <div>
              <Slider />
              <Countdown />
              <div className="main-container">
                <LeftBox />
                <RightBox />
              </div>
              <BackToTopButton />
            </div>
          } />
          
          {/* Definindo as rotas para os outros componentes */}
          <Route path="/bepro" element={<BePro />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/squad" element={<Squad />} />
          <Route path="/rightcolumn" element={<RightColumn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
