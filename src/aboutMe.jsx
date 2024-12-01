import React, { useEffect, useState,useContext } from 'react';
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

const Aboutme = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
    const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
   // const [language, setLanguage] = useState('es'); // Idioma por defecto
   const { language } = useContext(LanguageContext);


    const images = [imagen2, imagen3, imagen4, imagen5, imagen6];
    const images1 = [imagen3, imagen2, imagen7, imagen5, imagen];
    const images2 = [imagen7, imagen2, imagen4, imagen3, imagen5];

    const texts = {
        es: {
            title: "Conoce mi Historia",
            paragraph1: `Nací en Carora, estado Lara, Venezuela, el 30 de marzo de 1999, hijo de Ana Álvarez, una dedicada profesora, y Víctor Camacaro, también profesor.
             Llegué al mundo en el hospital Dr. Pastor Oropeza a las 11:30 p.m., en el seno de una familia humilde, de bajos recursos, pero llena de amor.
              Aunque no tuvimos lujos, las ganas de superación de mi madre fueron el motor que nos impulsó a mejorar poco a poco nuestra situación económica.`,
            paragraph2: `Mis primeros años estuvieron marcados por el amor y el esfuerzo de mi madre, quien trabajaba arduamente para asegurarse de que no me faltara lo esencial.
             Vivíamos en una casa prestada, hasta que, con mucho sacrificio, logramos adquirir nuestro propio hogar. En ese momento, la casa no era más que un rancho, pero ese mismo año nació mi hermana, Roxana Camacaro,
              y con trabajo, dedicación y esfuerzo, fuimos transformando poco a poco ese rancho en un verdadero hogar.

`,
            paragraph3: `
             Esta historia me recuerda una frase de Nelson Mandela: "Siempre parece imposible hasta que se hace". Nuestra vida ha sido un reflejo de esa verdad, 
             demostrando que con determinación y esfuerzo, se puede construir algo grande a partir de lo más humilde.

`,
title2:`Mi Primeros Años`
        },
        en: {
            title: "Get to Know My Story",
            paragraph1: `I was born in Carora, Lara state, Venezuela, on March 30, 1999, son of Ana Álvarez, a dedicated teacher, and Víctor Camacaro, also a teacher.
             I came into the world at the Dr. Pastor Oropeza Hospital at 11:30 p.m., into a humble family, with few resources, but full of love. Although we did not have luxuries, 
             my mother's desire to excel was the driving force that drove us to gradually improve our economic situation.`,
            paragraph2: `My early years were marked by the love and effort of my mother, who worked hard to make sure I never lacked the essentials.
             We lived in a borrowed house until, with much sacrifice, we managed to acquire our own home. At that time, the house was nothing more than a shack, 
             but that same year my sister, Roxana Camacaro, was born, and with work, dedication and effort, we gradually transformed that shack into a real home.`,
            paragraph3: `This story reminds me of a quote from Nelson Mandela: "It always seems impossible until it is done." Our life has been a reflection of that truth, 
            proving that with determination and effort, something great can be built from the most humble things.`,
            title2:`My First Years`
        }
    };

    useEffect(() => {
        AOS.init();


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

    return (
        <div>
            <section className="skills">
                <div className="container mt-5">
                    < h2>{texts[language].title}</h2>
                    <div className="row align-items-center" data-aos="zoom-in">
                        <div className="col-lg-6 text-center mb-4">
                            <img src={imagen} className="img-fluid" style={{ maxHeight: '400px', borderRadius: '10px', border: '4px solid #41f1b6' }} alt="Victor camacaro" />
                        </div>
                        <div className="col-lg-6" style={{ borderLeft: '2px solid #41f1b6', paddingBottom: '10px' }}>
                            <p className="animated-text">
                                {texts[language].paragraph1}
                                
                            </p>
                            <br />
                            <p className="animated-text">
                                {texts[language].paragraph2}
                            </p>
                            <br />
                            <p className="animated-text">
                                {texts[language].paragraph3}
                            </p>
                            <div className="conectori" style={{ height: '2px', backgroundColor: '#1CB698', width: '47px', position: 'absolute', top: '50%', left: '-47px', zIndex: 5 }}>
                                <div className="circuloi" style={{ display: 'block', height: '10px', width: '10px', borderRadius: '50%', backgroundColor: '#1CB698', float: 'left', position: 'relative', bottom: '4px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sobremi">
                <h2>{texts[language].title2}</h2>
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