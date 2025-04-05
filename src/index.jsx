import { React,useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import Inicio from './componentes/inicio';
import SobreMi from './componentes/sobreMi';
import Skills from './componentes/skills';
import Curriculum from './componentes/Curriculum';
import Portfolio from './componentes/Portfolio';
import Contacto from './componentes/Contacto';
import Projects from './componentes/projects';
import withFadeIn from './componentes/withFadeIn'; // Import the HOC
import './App.css';
import './birthdateModal.css'; // Import the CSS for the birthday modal
import image from '../assets/images/victor_p3.jpg'

const FadeInInicio = withFadeIn(Inicio, '0s',false); // Carga más rápido (0.3 segundos)
const FadeInSobreMi = withFadeIn(SobreMi, '2.5s');
const FadeInProjects = withFadeIn(Projects, '2.5s');
const FadeInSkills = withFadeIn(Skills, '2.5s');
const FadeInCurriculum = withFadeIn(Curriculum, '2.5s');
const FadeInPortfolio = withFadeIn(Portfolio, '2.5s');
const FadeInContacto = withFadeIn(Contacto, '2.5s');

function Index() {
  const [showBirthdayModal, setShowBirthdayModal] = useState(false);
  const [dimensions, setDimensions] = useState({ 
    width: window.innerWidth, 
    height: window.innerHeight 
  });

  
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
    useEffect(() => {
    // FOR DEVELOPMENT ONLY - force show modal regardless of date
    const forceShowForDev = false; // Set this to false when deploying
    
    const today = new Date();
    const isBirthday = today.getDate() === 30 && today.getMonth() === 2;
    const hasSeenModal = localStorage.getItem('hasSeenBirthdayModal');

    if ((isBirthday || forceShowForDev) && !hasSeenModal) {
      setShowBirthdayModal(true);
      localStorage.setItem('hasSeenBirthdayModal', 'true');
      
      // Remove the flag after the birthday so it shows again next year
      const tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 1);
      if (tomorrow.getDate() !== 30 || tomorrow.getMonth() !== 2) {
        localStorage.removeItem('hasSeenBirthdayModal');
      }
    }
  }, []);

  const closeModal = () => {
    setShowBirthdayModal(false);
  };

  return (
    <>
        
        // In your Index component
        {showBirthdayModal && (
  <>
    <Confetti
      width={dimensions.width}
      height={dimensions.height}
      recycle={false}
      numberOfPieces={Math.min(dimensions.width * 0.5, 500)}
      gravity={0.1}
      colors={['#6366F1', '#3B82F6', '#10B981', '#F59E0B']} // Brand colors
      tweenDuration={5000}
    />
    <div className="birthday-modal-overlay">
      <div className="birthday-modal-container">
        <div className="birthday-modal">
          {/* Close Modal Button */}
          <button className="close-modal" onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Orbiting Icons */}
<div className="icon-orbit">
  {/* React Icon */}
  <div className="orbit-icon" style={{ top: '0%', left: '50%' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#61DAFB" viewBox="0 0 32 32">
      <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 29C8.268 29 2 22.732 2 16S8.268 3 16 3s14 6.268 14 14-6.268 14-14 14z" />
      <path d="M15 6.5c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5v12c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5V6.5zm-1 0v12c0 1.657 1.343 3 3 3s3-1.343 3-3V6.5c0-1.657-1.343-3-3-3s-3 1.343-3 3z" />
    </svg>
  </div>

  {/* JavaScript Icon */}
  <div className="orbit-icon" style={{ top: '50%', left: '100%' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F7DF1E" viewBox="0 0 32 32">
      <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm6.5 11.5h-5v5h-3v-5h-5v-3h5v-5h3v5h5v3z" />
    </svg>
  </div>

  {/* Python Icon */}
  <div className="orbit-icon" style={{ top: '100%', left: '50%' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3776AB" viewBox="0 0 32 32">
      <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm-1 24h-6v-2h6v-6h2v6h6v2h-6v6h-2v-6z" />
    </svg>
  </div>

  {/* Node.js Icon */}
  <div className="orbit-icon" style={{ top: '50%', left: '0%' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#68A063" viewBox="0 0 32 32">
      <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm-1 24h-6v-2h6v-6h2v6h6v2h-6v6h-2v-6z" />
    </svg>
  </div>
</div>

          {/* CEO Profile */}
          <div className="ceo-profile">
            <div className="ceo-image-container">
              <img 
                src={image}
                alt="Our CEO & Founder" 
                className="ceo-image"
              />
              <div className="ceo-role">CEO & Founder</div>
            </div>

            <div className="birthday-content">
              <h2 className="gradient-text">Happy Birthday  Victor!</h2>
              <p className="subtitle">Celebrating Innovation Leadership</p>

              <div className="message-container">
                <p className="message">Your vision drives our success. Wishing you a day as extraordinary as your contributions to our tech community!</p>
                {/* Replace the heart container with this */}
<div className="code-icon-container">
  <svg className="code-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 8L3 12L7 16" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 8L21 12L17 16" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 4L10 20" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</div>
              </div>

              {/* Wish Button */}
              <button className="wish-button">Send Your Wishes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)}
      
      
      
      <div className="App">
        <FadeInInicio />
        <FadeInSobreMi />
        <FadeInProjects />
        <FadeInSkills />
        <FadeInCurriculum />
        <FadeInPortfolio />
        <FadeInContacto />
      </div>
    </>
  );
}

export default Index;