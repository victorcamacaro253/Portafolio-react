import React,{useContext} from 'react';
import Intereses from "./intereses";  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload ,faUser} from '@fortawesome/free-solid-svg-icons';
import { LanguageContext } from '../contexts/languageContext';


function SobreMi() {
  const { language,texts } = useContext(LanguageContext);
  const { title,span,presentation,aboutme,PersonalData,birthdateWord,phoneWord,phoneNumber,email,addressWord,address,positionWord,position,interests,download } = texts.sobreMi[0][language] || texts.sobreMi[0]['es']; // Fallback a español si no se encuentra el idioma


  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../public/curriculum-vitae-VICTOR_en.pdf'; // Ruta del archivo
    link.download = 'Victor_Camacaro_CV.pdf'; // Nombre del archivo descargado
    link.click(); // Simula el clic para iniciar la descarga
  };

  const redirigir= ()=>{
    window.location.href = "/aboutMe"
  }

  return (
    <section id="sobremi" className="sobremi">
      <div className="contenido-seccion">
        <h2>{title}</h2>
        <p><span>{span}</span> {presentation}</p>
        <button  onClick={redirigir}>
				{aboutme} <FontAwesomeIcon icon={faUser} />
				<span class="overlay"></span>
			</button>
        <div className="fila">
          <div className="col">
            <h3>{PersonalData}</h3>
            <ul>
              <li><strong>{birthdateWord}</strong> 30-03-1999</li>
              <li><strong>{phoneWord}</strong>{phoneNumber}</li>
              <li><strong>Email</strong>{email}</li>
              <li><strong>{addressWord}</strong> {address}</li>
              <li><strong>{positionWord}</strong> <span>{position}</span></li>
            </ul>
          </div>
          <div className="col">
            <h3>{interests}</h3>
            <div className="contenedor-intereses">
              <Intereses/>
            </div>
          </div>
        </div>
        <button onClick={handleDownload}>
          {download} <FontAwesomeIcon icon={faDownload} />
          <span className="overlay"></span>
        </button>
      </div>
    </section>
  );
}

export default SobreMi;
