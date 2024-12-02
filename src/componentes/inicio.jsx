import React,{useContext} from 'react';
import perfil from '../../assets/images/perfil.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faXTwitter,faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { LanguageContext } from '../contexts/languageContext';

function Inicio() {
  const { language,texts } = useContext(LanguageContext);
  const { carreer } = texts.inicio[0][language] || texts.aboutme[0]['es']; // Fallback a español si no se encuentra el idioma

  return (
    <section id="inicio" className="inicio">
      <div className="contenido-banner">
        <div className="contenedor-img">
          <img src={perfil} alt="Perfil" />
        </div>
        <h1>VICTOR CAMACARO</h1>
        <h2>{carreer}</h2>
        <div className="redes">
          <a href="https://m.facebook.com/100000134262241"> <FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://mobile.twitter.com/victorcamacar19"><FontAwesomeIcon icon={faXTwitter} /></a>
          <a href="https://github.com/victorcamacaro253"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/victor-camacaro-3634641a5"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://www.instagram.com/victorcamacaro1999/"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
