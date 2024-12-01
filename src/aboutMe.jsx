import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
//import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import gsap from 'gsap';
import './aboutme.css'
import imagen from '../assets/images/victor.jpg';
import imagen2 from '../assets/images/business-cloud-computing-1080x675.jpg';
import imagen3 from '../assets/images/ingvictor.jpg'
import imagen4 from '../assets/images/victor1.jpg'
import imagen5 from '../assets/images/logo.png'
import imagen6 from '../assets/images/system.jpg'
import imagen7 from '../assets/images/nasa.jpg'

const Aboutme = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
    const [currentImageIndex2, setCurrentImageIndex2] = useState(0);

    const images = [
        imagen2,
        imagen3,
        imagen4,
        imagen5,
        imagen6
    ];

    const images1 = [
        imagen3,
        imagen2,
        imagen7,
        imagen5,
        imagen
    ];

    const images2 = [
        imagen7,
        imagen2,
        imagen4,
        imagen3,
        imagen5,
    ];

    useEffect(() => {
        AOS.init();
        
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
                    <h2>Conoce mi Historia</h2>
                    <div className="row align-items-center" data-aos="zoom-in">
                        <div className="col-lg-6 text-center mb-4">
                            <img src={imagen} className="img-fluid" style={{ maxHeight: '400px', borderRadius: '10px', border: '4px solid #41f1b6' }} alt="Victor camacaro" />
                        </div>
                        <div className="col-lg-6" style={{ borderLeft: '2px solid #41f1b6', paddingBottom: '10px' }}>
                            <p className="animated-text">
                                Nací en Carora, estado Lara, Venezuela, el 30 de marzo de 1999, hijo de Ana Álvarez, una dedicada profesora, y Víctor Camacaro, también profesor. Llegué al mundo en el hospital Dr. Pastor Oropeza a las 11:30 p.m., en el seno de una familia humilde, de bajos recursos, pero llena de amor. Aunque no tuvimos lujos, las ganas de superación de mi madre fueron el motor que nos impulsó a mejorar poco a poco nuestra situación económica.
                            </p>
                            <br />
                            <p className="animated-text">
                                Mis primeros años estuvieron marcados por el amor y el esfuerzo de mi madre, quien trabajaba arduamente para asegurarse de que no me faltara lo esencial. Vivíamos en una casa prestada, hasta que, con mucho sacrificio, logramos adquirir nuestro propio hogar. En ese momento, la casa no era más que un rancho, pero ese mismo año nació mi hermana, Roxana Camacaro, y con trabajo, dedicación y esfuerzo, fuimos transformando poco a poco ese rancho en un verdadero hogar.
                            </p>
                            <br />
                            <p className="animated-text">
                                Esta historia me recuerda una frase de Nelson Mandela: "Siempre parece imposible hasta que se hace". Nuestra vida ha sido un reflejo de esa verdad, demostrando que con determinación y esfuerzo, se puede construir algo grande a partir de lo más humilde.
                            </p>
                            <div className="conectori" style={{ height: '2px', backgroundColor: '#1CB698', width: '47px', position: 'absolute', top: '50%', left: '-47px', zIndex: 5 }}>
                                <div className="circuloi" style={{ display: 'block', height: '10px', width: '10px', borderRadius: '50%', backgroundColor: '#1CB698', float: 'left', position: 'relative', bottom: '4px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sobremi">
                <h2>Mis Primeros Años</h2>
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