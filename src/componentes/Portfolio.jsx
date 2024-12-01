
import proyecto1 from '../../assets/images/datacenter.webp';
import proyecto2 from '../../assets/images/php.png';
import proyecto3 from '../../assets/images/basededatos.jpg';
import proyecto4 from '../../assets/images/business-cloud-computing-1080x675.jpg';
import proyecto5 from '../../assets/images/responsive-web.webp';
import proyecto6 from '../../assets/images/api_pic.jpg';

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
                        <h3>API</h3>
                        <p>Desarrollo de API</p>
                    </div>
            </div>
          </div>





        </div>
      </div>
    </section>
  );
}

export default Portfolio;
