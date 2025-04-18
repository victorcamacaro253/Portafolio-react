
import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import '../projects.css';
import { LanguageContext } from '../contexts/languageContext';
import image1 from '../../assets/images/api.png'
import image2 from '../../assets/images/api2.png'
import image3 from '../../assets/images/graphoauth2.0.png'
import image4 from '../../assets/images/payment.png'
import image5 from '../../assets/images/nest_api_1.png'

const Projects = () => {
  const { language, texts } = useContext(LanguageContext);
  
  // Access the first project object and then the language-specific data
  const projectData = texts.projects[0]; // Get the first project object
  const projects = projectData[language] || projectData['es']; // Fallback to Spanish if language not found

  // Log the projects data to check its structure
  console.log('Projects Data:', projects);

  // Check if cards exist and are an array
  const projectCards = Array.isArray(projects.cards) ? projects.cards : [];

  // Asignar solo las imágenes a una variable
  const projectImages = projectCards.map(card => card.image);
  console.log(projectImages)

const images=[
  image1,
  image5,
  image2,
  image3,
  image4
]

  return (
    <section className='projects'>
      <h1>{projects.title}</h1>
      <div className="slide-container swiper">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            520: {
              slidesPerView: 2,
            },
            950: {
              slidesPerView: 3,
            },
          }}
        >
          {projectCards.map((card, index) => {
            // Log the project data to check its structure
            console.log('Project Data:', card);

            return (
              <SwiperSlide key={index}>
                <div className="cardl">
                  <div className="image-content">
                    <span className="overlay"></span>
                    <div className="card-image">
                      <img src={images[index]} alt={card.title} className="card-img" />
                    </div>
                  </div>
                  <div className="card-content">
                    <h2 className="name">{card.title}</h2>
                    <p className="description">{card.description}</p>
                  </div>
                  <div className="card-footerl">
                    <a href={card.link} target="_blank" rel="noopener noreferrer">
                      <button className="button">{card.button}</button>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;