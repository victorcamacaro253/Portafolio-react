import { useEffect,useContext } from 'react';
import { LanguageContext } from '../contexts/languageContext';
import proyecto1 from '../../assets/images/datacenter.webp';
import proyecto2 from '../../assets/images/php.png';
import proyecto3 from '../../assets/images/basededatos.jpg';
import proyecto4 from '../../assets/images/business-cloud-computing-1080x675.jpg';
import proyecto5 from '../../assets/images/responsive-web.webp';
import proyecto6 from '../../assets/images/api_pic.jpg';
import proyecto7 from '../../assets/images/backenddev.png';

function Portfolio() {
  const { language,texts } = useContext(LanguageContext);
  const { network,networkP,backDev,backDevP,database,databaseP,analysis,analysisP,webDev,webDevP,API,APIP
     } = texts.Portfolio[0][language] || texts.Portfolio[0]['es']; // Fallback a español si no se encuentra el idioma

  return (
    <section className="portfolio" id="portfolio">
      <div className="contenido-seccion">
        <h2>Portafolio</h2>
        <div className="galeria">


          <div className="proyecto">
           
            
          <img src={proyecto1} alt="hover" style={{ height: '255px' }} />

            
              <div className="overlay">
						<h3>{network}</h3>
						<p>{networkP}</p>
						
					</div>
            
          </div>



          <div className="proyecto">
           
            <div className="hover-galeria">
              <img src={proyecto7} alt="hover" style={{ height: '255px' }}  />
              <div className="overlay">
                        <h3>{backDev}</h3>
                        <p>{backDevP}</p>
                    </div>
            </div>
          </div>



          <div className="proyecto">
           
            <div className="hover-galeria">
              <img src={proyecto3} alt="hover"  style={{ height: '255px', width:'340px' }} />
              <div className="overlay">
                        <h3>{database}</h3>
                        <p>{databaseP}</p>
                    </div>
            </div>
          </div>



          <div className="proyecto">
           
            <div className="hover-galeria">
              <img src={proyecto4} alt="hover"  style={{ height: '255px' }} />
              <div className="overlay">
                        <h3>{analysis}</h3>
                        <p>{analysisP}</p>
                    </div>
            </div>
          </div>




          <div className="proyecto">
          
            <div className="hover-galeria">
              <img src={proyecto5} alt="hover"  style={{ height: '255px' }} />
              <div className="overlay">
                        <h3>{webDev}</h3>
                        <p>{webDevP}</p>
                    </div>
            </div>
          </div>




          <div className="proyecto">
           
            <div className="hover-galeria">
              <img src={proyecto6} alt="hover"  style={{ height: '255px' }} />
              <div className="overlay">
                        <h3>{API}</h3>
                        <p>{APIP}</p>
                    </div>
            </div>
          </div>





        </div>
      </div>
    </section>
  );
}

export default Portfolio;
