import { useContext, useState, useEffect } from 'react';
import perfil from '../assets/images/victor_bk.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter, faGithub, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { LanguageContext } from '../context/languageContext';
import image1 from '../assets/images/deploy.png';
import image2 from '../assets/images/desarrollo.webp';
import image3 from '../assets/images/system1.jpg';
import image4 from '../assets/images/fondo.jpg';

const backgroundImages = [image1, image2, image3, image4];

function Inicio() {
  const { language, texts } = useContext(LanguageContext);
  const carreer = texts?.inicio?.[0]?.[language as keyof typeof texts.inicio[0]]?.carreer 
    || 'Full Stack Developer | Systems Engineer';

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        setFade(false);
      }, 500);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section 
      id="inicio" 
      className="relative w-full min-h-screen flex items-center justify-center p-4 md:p-8 overflow-hidden bg-white dark:bg-dark-background-1"
    >
      {/* Background image with fade effect */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${fade ? 'opacity-20' : 'opacity-40'} bg-fixed`}
        style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/60 dark:from-black/50 dark:to-black/70" />
      
      {/* Content banner */}
      <div 
        className="relative z-10 p-6 lg:mt-6 mt-16 md:p-8 bg-white/90 dark:bg-dark-background-1/90 backdrop-blur-sm max-w-6xl w-full mx-auto text-center rounded-3xl border-4 border-accent dark:border-dark-accent flex flex-col md:flex-row items-center gap-8 shadow-2xl hover:shadow-accent/20 transition-all duration-500"
      >
        {/* Profile image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative group">
            <img 
              src={perfil} 
              alt="Victor Camacaro" 
              className="h-48 w-48 md:h-60 md:w-60 border-8 border-accent dark:border-dark-accent rounded-full object-cover shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-white/30 transition-all duration-500" />
          </div>
        </div>
        
        {/* Text content */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <h1 className="text-3xl md:text-4xl font-righteous text-gray-800 dark:text-white mb-2 md:mb-4">
            VICTOR CAMACARO
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
            {carreer}
          </h2>
        </div>
        
        {/* Social links */}
        <div className="w-full md:w-1/3 flex flex-col space-y-3 md:space-y-4">
          {[
            { icon: faLinkedin, url: "https://www.linkedin.com/in/victor-camacaro-3634641a5", text: "victor-camacaro" },
            { icon: faGithub, url: "https://github.com/victorcamacaro253", text: "victorcamacaro253" },
            { icon: faXTwitter, url: "https://mobile.twitter.com/victorcamacar19", text: "@victorcamacar19" },
            { icon: faInstagram, url: "https://www.instagram.com/victorcamacaro1999/", text: "victorcamacaro1999" },
            { icon: faTiktok, url: "https://www.tiktok.com/@victorcamacaro1999", text: "@victorcamacaro1999", label: "TikTok" },
            { icon: faFacebook, url: "https://m.facebook.com/100000134262241", text: "victor.camacaro" },

          ].map((social, index) => (
            <a 
              key={index}
              href={social.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex font-righteous items-center gap-3 p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-accent dark:hover:bg-dark-accent transition-all duration-300 group"
            >
              <FontAwesomeIcon 
                icon={social.icon} 
                className="text-xl text-accent dark:text-dark-accent group-hover:text-white transition-colors" 
              />
              <span className="truncate">{social.text}</span>
              <FontAwesomeIcon 
                icon={faArrowRight} 
                className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm" 
              />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile-only scroll indicator */}
      <div className="md:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-accent dark:text-dark-accent z-10">
      
        <div className="animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Inicio;