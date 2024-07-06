import Intereses from "./intereses";

function SobreMi() {
  return (
    <section id="sobremi" className="sobremi">
      <div className="contenido-seccion">
        <h2>Sobre mi</h2>
        <p><span>Hola, soy Victor Camacaro</span> Ingeniero de Sistemas con conocimiento en desarrollo Full Stack, lo que me capacita para gestionar proyectos de manera integral, abarcando tanto front-end como back-end. Mi sólida formación académica, complementada con experiencia práctica, me ha provisto de competencias técnicas y analíticas clave para ofrecer soluciones innovadoras en el sector tecnológico. Comprometido con la excelencia, me esfuerzo por mantenerme actualizado y a la vanguardia en el desarrollo de software, así como en áreas de redes, sistemas y soporte técnico.</p>
        <div className="fila">
          <div className="col">
            <h3>Datos Personales</h3>
            <ul>
              <li><strong>Cumpleaños</strong> 30-03-1999</li>
              <li><strong>Telefono</strong> +58 426-2553540</li>
              <li><strong>Email</strong> victorcamacaro253@gmail.com</li>
              <li><strong>Direccion</strong> Barquisimeto, Venezuela</li>
              <li><strong>Cargo</strong> <span>FREELANCER</span></li>
            </ul>
          </div>
          <div className="col">
            <h3>Intereses</h3>
            <div className="contenedor-intereses">
              <Intereses/>
            </div>
          </div>
        </div>
        <button>
          Descargar CV <i className="fa-solid fa-download"></i>
          <span className="overlay"></span>
        </button>
      </div>
    </section>
  );
}

export default SobreMi;
