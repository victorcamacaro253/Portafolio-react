import { useContext } from "react";
import { LanguageContext } from "../contexts/languageContext";


function Curriculum() {
  const { language,texts } = useContext(LanguageContext);
  const { title,education,experience,projects,certifications,languages,carreer,university,carreerDescription,schoolDegree,school,schoolDegreeDescription,frontDev,htmlCssJavascript,htmlCssJavascriptYear,frontDevDescription,systemDev,systemDevYear,analysis,analysisDescription,BackDev,nodejs,BackDevYear,backDevDescription } = texts.curriculum[0][language] || texts.curriculum[0]['es']; // Fallback a español si no se encuentra el idioma


  return (
    <section className="curriculum" id="curriculum">
      <div className="contenido-seccion">
        <h2>{title}</h2>
        <div className="fila">
          <div className="col izquierda">
            <h3>{education}</h3>
            <div className="item izq">
              <h4>{carreer}</h4>
              <span className="casa">{university}</span>
              <span className="fecha">2024</span>
              <p>{carreerDescription}</p>
            </div>
            <div className="item izq">
              <h4>{schoolDegree}</h4>
              <span className="casa">{school}</span>
              <span className="fecha">2017</span>
              <p>{schoolDegreeDescription}</p>
              
            </div>
          </div>
          <div className="col derecha">
            <h3>{experience}</h3>
            <div className="item der">
              <h4>{frontDev}</h4>
              <span className="casa">{htmlCssJavascript}</span>
              <span className="fecha">{htmlCssJavascriptYear}</span>
              <p>{frontDevDescription}</p>
            </div>

            <div className="item der">
              <h4>{BackDev}</h4>
              <span className="casa">{nodejs}</span>
              <span className="fecha">{BackDevYear}</span>
              
              <p>{backDevDescription}</p>
            </div>

            <div className="item der">
              <h4>{systemDev}</h4>
              <span className="casa">{analysis}</span>
              <span className="fecha">{systemDevYear}</span>
              
              <p>{analysisDescription}</p>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

export default Curriculum;
