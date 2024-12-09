import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import '../projects.css';
import { LanguageContext } from '../contexts/languageContext';

const Projects = () => {
  const { language, texts } = useContext(LanguageContext);
  
  // Access the first project object and then the language-specific data
  const projectData = texts.projects[0]; // Get the first project object
  const projects = projectData[language] || projectData['es']; // Fallback to Spanish if language not found

  // Log the projects data to check its structure
  console.log('Projects Data:', projects);

  // Check if cards exist and are an array
  const projectCards = Array.isArray(projects.cards) ? projects.cards : [];

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
            // Ensure the card has the expected structure
            const project = card; // No need for fallback here since we are directly accessing the card

            // Log the project data to check its structure
            console.log('Project Data:', project);

            return (
              <SwiperSlide key={index}>
                <div className="cardl">
                  <div className="image-content">
                    <span className="overlay"></span>
                    <div className="card-image">
                      <img src={project.image} alt={project.title} className="card-img" />
                    </div>
                  </div>
                  <div className="card-content">
                    <h2 className="name">{project.title}</h2>
                    <p className="description">{project.description}</p>
                  </div>
                  <div className="card-footerl">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="button">{project.button}</button>
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