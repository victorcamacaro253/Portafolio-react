
import proyecto1 from '../assets/images/REDES.jpeg';
import proyecto2 from '../assets/images/PHP.jpeg';
import proyecto3 from '../assets/images/base_de_datos.jpeg';
import proyecto4 from '../assets/images/analisis_de_sistema.jpeg';
import proyecto5 from '../assets/images/p5.jpg';
import proyecto6 from '../assets/images/DIAGRAMA UML.jpeg';

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="contenido-seccion">
        <h2>Portafolio</h2>
        <div className="galeria">


          <div className="proyecto">
           
            
          <img src={proyecto1} alt="hover" style={{ height: '255px' }} />

            
              <div className="overlay">
						<h3>Redes</h3>
						<p>Interconexion de redes</p>
						
					</div>
            
          </div>



          <div className="proyecto">
           
            <div className="hover-galeria">
              <img src={proyecto2} alt="hover" style={{ height: '255px' }}  />
              <div className="overlay">
                        <h3>Desarrollo Backend</h3>
                        <p>PHP</p>
                    </div>
            </div>
          </div>



          <div className="proyecto">
           
            <div className="hover-galeria">
              <img src={proyecto3} alt="hover"  style={{ height: '255px', width:'340px' }} />
              <div className="overlay">
                        <h3>Base de Datos</h3>
                        <p>SQL</p>
                    </div>
            </div>
          </div>



          <div className="proyecto">
           
            <div className="hover-galeria">
              <img src={proyecto4} alt="hover"  style={{ height: '255px' }} />
              <div className="overlay">
                        <h3>Analisis de sistema</h3>
                        <p>Desarrollo de sistema</p>
                    </div>
            </div>
          </div>




          <div className="proyecto">
          
            <div className="hover-galeria">
              <img src={proyecto5} alt="hover"  style={{ height: '255px' }} />
              <div className="overlay">
                        <h3>Desarrollo Web</h3>
                        <p>PHP,HTML,CSS,JAVASCRIPT</p>
                    </div>
            </div>
          </div>




          <div className="proyecto">
           
            <div className="hover-galeria">
              <img src={proyecto6} alt="hover"  style={{ height: '255px' }} />
              <div className="overlay">
                        <h3>Diagramas</h3>
                        <p>UML</p>
                    </div>
            </div>
          </div>





        </div>
      </div>
    </section>
  );
}

export default Portfolio;
