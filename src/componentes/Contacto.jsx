
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faLocationDot, faMobileScreen, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contacto() {
  return (
    <section className="contacto" id="contacto">
      <div className="contenido-seccion">
        <h2>Contacto</h2>
        <p>Si deseas contactarme no dudes en hacerlo por cualquiera de los siguientes medios.</p>
        <div className="fila">
          <div className="col">
            <input type="text" name="name" placeholder="Tu nombre" />
            <input type="text" name="phone" placeholder="Numero telefonico" />
            <input type="email" name="email" placeholder="Direccion de correo" />
            <input type="text" name="subject" placeholder="Tema" />
            <textarea name="message" cols="30" rows="10" placeholder="Mensaje"></textarea>
            <button>
              Enviar Mensaje <FontAwesomeIcon icon={faPaperPlane} />
              <span className="overlay"></span>
            </button>
          </div>

          <div className="col">
            <img src="./assets/images/mapa.jpeg" alt="Mapa" style={{ height: '400px' }} />
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
