import { useContext } from "react";
import { LanguageContext } from "../contexts/languageContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faLocationDot, faMobileScreen, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import mapa from '../../assets/images/mapa.jpeg'
function Contacto() {
  const { language,texts } = useContext(LanguageContext);
  const {title,description,message,name,phoneNumber,email,subject,message2} = texts.contact[0][language] || texts.contact[0]['es']; // Fallback a español si no se encuentra el idioma

  return (
    <section className="contacto" id="contacto">
      <div className="contenido-seccion">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="fila">
          <div className="col">
            <input type="text" name="name" placeholder={name} />
            <input type="text" name="phone" placeholder={phoneNumber} />
            <input type="email" name="email" placeholder={email} />
            <input type="text" name="subject" placeholder={subject} />
            <textarea name="message" cols="30" rows="10" placeholder={message2}></textarea>
            <button>
              {message} <FontAwesomeIcon icon={faPaperPlane} />
              <span className="overlay"></span>
            </button>
          </div>

          <div className="col">
            <img src={mapa} alt="Mapa" style={{ height: '400px' }} />
            <div className="info">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faLocationDot} />
                  Barquisimeto, Venezuela
                </li>
                <li>
                  <FontAwesomeIcon icon={faMobileScreen} />
                  Llamanos: +58 426-2553540
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  Email: victorcamacaro253@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
