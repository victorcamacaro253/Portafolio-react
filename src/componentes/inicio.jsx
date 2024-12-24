import React, { useContext, useState, useEffect } from 'react';
import perfil from '../../assets/images/perfil.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { LanguageContext } from '../contexts/languageContext';
import image1 from '../../assets/images/deploy.png';
import image2 from '../../assets/images/desarrollo.webp';
import image3 from '../../assets/images/system1.jpg';
import image4 from '../../assets/images/fondo.jpg';

const backgroundImages = [
  image1,
  image2,
  image3,
  image4,
];

function Inicio() {
  const { language, texts } = useContext(LanguageContext);
  const { carreer } = texts.inicio[0][language] || texts.aboutme[0]['es'];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true); // Inicia el desvanecimiento
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        setFade(false); // Termina el desvanecimiento
      }, 200); // Duración del desvanecimiento
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="inicio" className="inicio">
      <div className={`background-image ${fade ? 'fade' : ''}`} style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }} />
      <div className="contenido-banner">
        <div className="contenedor-img">
          <img src={perfil} alt="Perfil" />
        </div>
        <div className="contenedor-texto">
          <h1>VICTOR CAMACARO</h1>
          <h2>{carreer}</h2>
        </div>
        
        <div className="redes">
          <a href="https://m.facebook.com/100000134262241"  className="social-icon"> <FontAwesomeIcon icon={faFacebook} /><p>victormanuel.camacaro.1</p></a>
          <a href="https://mobile.twitter.com/victorcamacar19"  className="social-icon"><FontAwesomeIcon icon={faXTwitter} /><p>victorcamacar19</p></a>
          <a href="https://github.com/victorcamacaro253"  className="social-icon"><FontAwesomeIcon icon={faGithub} /><p>victorcamacaro253</p></a>
          <a href="https://www.linkedin.com/in/victor-camacaro-3634641a5"  className="social-icon"><FontAwesomeIcon icon={faLinkedin} /><p>victor-camacaro-3634641a5</p></a>
          <a href="https://www.instagram.com/victorcamacaro1999/"  className="social-icon"><FontAwesomeIcon icon={faInstagram} /><p>victorcamacaro1999</p></a>
        </div>
      </div>
    </section>
  );
}

export default Inicio;