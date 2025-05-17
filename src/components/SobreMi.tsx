import { useContext } from 'react';
import Intereses from "./Intereses";  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUser, faCalendarAlt, faPhone, faEnvelope, faMapMarkerAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { LanguageContext } from '../context/languageContext';

function SobreMi() {
  const { language, texts } = useContext(LanguageContext);
  const { 
    title = '', span = '', presentation = '', aboutme = '', 
    PersonalData = '', birthdateWord = '', phoneWord = '', 
    phoneNumber = '', email = '', addressWord = '', address = '', 
    positionWord = '', position = '', interests = '', download = '' 
  } = (texts.sobreMi?.[0]?.[language as keyof typeof texts.sobreMi[0]] || texts.sobreMi?.[0]?.['es'] || {}) as {
    title: string;
    span: string;
    presentation: string;
    aboutme: string;
    PersonalData: string;
    birthdateWord: string;
    phoneWord: string;
    phoneNumber: string;
    email: string;
    addressWord: string;
    address: string;
    positionWord: string;
    position: string;
    interests: string;
    download: string;
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/curriculum-vitae-VICTOR_en.pdf';
    link.download = 'Victor_Camacaro_CV.pdf';
    link.click();
  };

  const redirigir = () => {
    window.location.href = "/aboutMe";
  };

  return (
    <section 
      id="Sobre mi" 
      className="py-16 px-4 bg-background-1 dark:bg-dark-background-1 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-righteous text-center py-8 mb-6 relative text-accent dark:text-dark-accent">
          {title}
          <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent dark:bg-dark-accent rounded-full"></span>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <span className="text-accent font-righteous dark:text-dark-accent font-bold text-2xl">{span}</span>
            <span className='font-righteous block mt-4'>{presentation}</span> 
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={redirigir}
              className="relative font-righteous overflow-hidden border-2 rounded-full border-accent dark:border-dark-accent px-6 py-3 text-accent dark:text-dark-accent bg-transparent z-10 transition-all duration-300 hover:text-white dark:hover:text-white group flex items-center justify-center"
            >
              {aboutme} 
              <FontAwesomeIcon icon={faUser} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="overlay absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-accent to-accent-dark dark:from-dark-accent dark:to-dark-accent-dark z-[-1] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>

            <button 
              onClick={handleDownload}
              className="relative font-righteous overflow-hidden border-2 rounded-full border-accent dark:border-dark-accent px-6 py-3 text-accent dark:text-dark-accent bg-transparent z-10 transition-all duration-300 hover:text-white dark:hover:text-white group flex items-center justify-center"
            >
              {download} 
              <FontAwesomeIcon icon={faDownload} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="overlay absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-accent to-accent-dark dark:from-dark-accent dark:to-dark-accent-dark z-[-1] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-12 gap-10">
          <div className="w-full md:w-1/2 bg-white/10 dark:bg-gray-900/20 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-righteous mb-8 pb-2 border-b border-gray-300 dark:border-gray-600">
              <span className="text-accent dark:text-dark-accent">#</span> {PersonalData}
            </h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-accent dark:text-dark-accent mt-1 mr-3 w-5" />
                <div>
                  <strong className="text-accent font-righteous dark:text-dark-accent block">{birthdateWord}</strong>
                  <span>30-03-1999</span>
                </div>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faPhone} className="text-accent dark:text-dark-accent mt-1 mr-3 w-5" />
                <div>
                  <strong className="text-accent font-righteous dark:text-dark-accent block">{phoneWord}</strong>
                  <span>{phoneNumber}</span>
                </div>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faEnvelope} className="text-accent dark:text-dark-accent mt-1 mr-3 w-5" />
                <div>
                  <strong className="text-accent font-righteous dark:text-dark-accent block">Email</strong>
                  <span>{email}</span>
                </div>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-accent dark:text-dark-accent mt-1 mr-3 w-5" />
                <div>
                  <strong className="text-accent font-righteous dark:text-dark-accent block">{addressWord}</strong>
                  <span>{address}</span>
                </div>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faBriefcase} className="text-accent dark:text-dark-accent mt-1 mr-3 w-5" />
                <div>
                  <strong className="text-accent font-righteous dark:text-dark-accent block">{positionWord}</strong>
                  <span className="inline-block bg-accent dark:bg-dark-accent px-3 py-1 rounded-md font-bold text-white mt-1">
                    {position}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 bg-white/10 dark:bg-gray-900/20 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-righteous mb-8 pb-2 border-b border-gray-300 dark:border-gray-600">
              <span className="text-accent dark:text-dark-accent">#</span> {interests}
            </h3>
            <div className="contenedor-intereses">
              <Intereses/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;