import React from 'react';
import Inicio from './componentes/inicio';
import SobreMi from './componentes/sobreMi';
import Skills from './componentes/skills';
import Curriculum from './componentes/Curriculum';
import Portfolio from './componentes/Portfolio';
import Contacto from './componentes/Contacto';
import withFadeIn from './componentes/withFadeIn'; // Import the HOC
import './App.css';

const FadeInInicio = withFadeIn(Inicio, '0s',false); // Carga más rápido (0.3 segundos)
const FadeInSobreMi = withFadeIn(SobreMi, '2.5s');
const FadeInSkills = withFadeIn(Skills, '2.5s');
const FadeInCurriculum = withFadeIn(Curriculum, '2.5s');
const FadeInPortfolio = withFadeIn(Portfolio, '2.5s');
const FadeInContacto = withFadeIn(Contacto, '2.5s');

function Index() {
  return (
    <div className="App">
      <FadeInInicio />
      <FadeInSobreMi />
      <FadeInSkills />
      <FadeInCurriculum />
      <FadeInPortfolio />
      <FadeInContacto />
    </div>
  );
}

export default Index;