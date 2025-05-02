import { useState, useEffect } from 'react';
//import Confetti from 'react-confetti';
import Inicio from '../components/inicio';
import SobreMi from '../components/SobreMi';
import Skills from '../components/Skills ';
import Curriculum from '../components/Curriculum';
import Portfolio from '../components/Portfolio';
import Contacto from '../components/Contacto';
import Projects from '../components//Projects';
import withFadeIn from '../components/withFadeIn';

const FadeInInicio = withFadeIn(Inicio, '0s', false);
const FadeInSobreMi = withFadeIn(SobreMi, '2.5s');
const FadeInProjects = withFadeIn(Projects, '2.5s');
const FadeInSkills = withFadeIn(Skills, '2.5s');
const FadeInCurriculum = withFadeIn(Curriculum, '2.5s');
const FadeInPortfolio = withFadeIn(Portfolio, '2.5s');
const FadeInContacto = withFadeIn(Contacto, '2.5s');

function Index() {
 
  const [, setDimensions] = useState({ 
    width: window.innerWidth, 
    height: window.innerHeight 
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-background-1 dark:bg-dark-background-1 text-white dark:text-dark-text-default min-h-screen">
     
      
      <div className="max-w-7xl mx-auto">
        <FadeInInicio />
        <FadeInSobreMi />
        <FadeInProjects />
        <FadeInSkills />
        <FadeInCurriculum />
        <FadeInPortfolio />
        <FadeInContacto />
      </div>
    </div>
  );
}

export default Index;