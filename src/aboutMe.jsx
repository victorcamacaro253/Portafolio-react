import React, { useEffect, useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import anime from 'animejs';
import './aboutme.css';
import { LanguageContext } from './contexts/languageContext';
import imagen from '../assets/images/victor.jpg';
import imagen2 from '../assets/images/business-cloud-computing-1080x675.jpg';
import imagen3 from '../assets/images/ingvictor.jpg';
import imagen4 from '../assets/images/victor1.jpg';
import imagen5 from '../assets/images/logo.png';
import imagen6 from '../assets/images/system.jpg';
import imagen7 from '../assets/images/nasa.jpg';
//import texts from './data/texts.json';

const Aboutme = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
    const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
    const { language,texts } = useContext(LanguageContext);
    const { title, paragraph1,paragraph2,paragraph3,title2 } = texts.aboutme[0][language] || texts.aboutme[0]['es']; // Fallback a español si no se encuentra el idioma


    const images = [imagen2, imagen3, imagen4, imagen5, imagen6];
    const images1 = [imagen3, imagen2, imagen7, imagen5, imagen];
    const images2 = [imagen7, imagen2, imagen4, imagen3, imagen5];

    useEffect(() => {
        AOS.init();

        // Función para aplicar la animación al texto
        const animateText = () => {
            const textElements = document.querySelectorAll('.animated-text');
            textElements.forEach(element => {
                const characters = element.textContent.split('').map(char => `<span>${char}</span>`).join('');
                element.innerHTML = characters;
            });

            anime({
                targets: '.animated-text span',
                opacity: [0, 1],
                translateY: [20, 0],
                easing: 'easeOutExpo',
                duration: 50,
                delay: anime.stagger(30),
            });
        };

        // Llama a la función de animación al cargar el componente
        animateText();

        const interval1 = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2000);

        const interval2 = setInterval(() => {
            setCurrentImageIndex1(prevIndex => (prevIndex + 1) % images1.length);
        }, 2000);

        const interval3 = setInterval(() => {
            setCurrentImageIndex2(prevIndex => (prevIndex + 1) % images2.length);
        }, 2000);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
        };
    }, []);

    // Efecto para animar el texto cuando cambia el idioma
    useEffect(() => {
        const animateText = () => {
            const textElements = document.querySelectorAll('.animated-text');
            textElements.forEach(element => {
                const characters = element.textContent.split('').map(char => `<span>${char}</span>`).join('');
                element.innerHTML = characters;
            });

            anime({
                targets: '.animated-text span',
                opacity: [0, 1],
                translateY: [20, 0],
                easing: 'easeOutExpo',
                duration: 50,
                delay: anime.stagger(30),
            });
        };

        animateText();
    }, [language]); // Ejecuta la animación cada vez que cambia el idioma

    return (
        <div>
            <section className="skills">
                <div className="container mt-5">
                    <h2>{title}</h2>
                    <div className="row align-items-center" data-aos="zoom-in">
                        <div className ="col-lg-6 text-center mb-4">
                            <img src={imagen} className="img-fluid" style={{ maxHeight: '400px', borderRadius: '10px', border: '4px solid #41f1b6' }} alt="Victor camacaro" />
                        </div>
                        <div className="col-lg-6" style={{ borderLeft: '2px solid #41f1b6', paddingBottom: '10px' }}>
                            <p className="animated-text">
                                {paragraph1}
                            </p>
                            <br />
                            <p className="animated-text">
                                {paragraph2}
                            </p>
                            <br />
                            <p className="animated-text">
                                {paragraph3}
                            </p>
                            <div className="conectori" style={{ height: '2px', backgroundColor: '#1CB698', width: '47px', position: 'absolute', top: '50%', left: '-47px', zIndex: 5 }}>
                                <div className="circuloi" style={{ display: 'block', height: '10px', width: '10px', borderRadius: '50%', backgroundColor: '#1CB698', float: 'left', position: 'relative', bottom: '4px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sobremi">
                <h2>{title2}</h2>
                <div className="container">
                    <div className="row" data-aos="fade-up">
                        <div className="col-12 col-md-4 mb-4">
                            <div className="image-container">
                                <img className="img-fluid currentImage" src={images[currentIndex]} alt="Imagen 1" />
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="image-container">
                                <img className="img-fluid currentImage1" src={images1[currentImageIndex1]} alt="Imagen 2" />
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="image-container">
                                <img className="img-fluid currentImage2" src={images2[currentImageIndex2]} alt="Imagen 3" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Aboutme;