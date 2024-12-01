import React from 'react';
import Header from './componentes/header';  // Asegúrate de que la ruta es correcta
import Inicio from './componentes/inicio';
import SobreMi from './componentes/sobreMi';
import Skills from './componentes/skills';
import Curriculum from './componentes/Curriculum';
import Portfolio from './componentes/Portfolio';
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer';
import './App.css';


function  Index() {
  return (
    <div className="App">
      <Inicio />
      <SobreMi />
      <Skills />
      <Curriculum />
      <Portfolio />
      <Contacto />
    </div>
  );
}

export default Index;
