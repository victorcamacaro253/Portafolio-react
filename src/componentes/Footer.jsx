import { useContext } from "react";
import { LanguageContext } from '../contexts/languageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGithub, faLinkedinIn, faInstagram,faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const { language,texts } = useContext(LanguageContext);
  const { copyright } = texts.footer[0][language] || texts.footer[0]['es']; // Fallback a español si no se encuentra el idioma

  return (
    <footer>
      <a href="#inicio" className="arriba">
        <FontAwesomeIcon icon={faAngleUp} />
      </a>

      <div className="redes">
        <a href="https://m.facebook.com/100000134262241">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://mobile.twitter.com/victorcamacar19">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="https://github.com/victorcamacaro253">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/victor-camacaro-3634641a5">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://www.instagram.com/victorcamacaro1999/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>

      <div className="contenedor-footer">
        <p>{copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
