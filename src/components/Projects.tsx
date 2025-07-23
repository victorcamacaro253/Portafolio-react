import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { LanguageContext } from '../context/languageContext';
import image1 from '../assets/images/api.png';
import image2 from '../assets/images/api2.png';
import image3 from '../assets/images/graphoauth2.0.png';
import image4 from '../assets/images/payment.png';
import image5 from '../assets/images/nest_api_1.png';
import herosection from '../assets/images/cinebookheader.jpg';
import image6 from '/images/api-box.png';



import { Link } from 'react-router-dom';

interface ProjectCard {
  title: string;
  description: string;
  link: string;
  button: string;
  index: string;
}

const Projects = () => {
  const { language, texts } = useContext(LanguageContext);
  const projectData = texts.projects[0];
  const projects = projectData[language] || projectData['es'];
  const projectCards: ProjectCard[] = Array.isArray(projects.cards) ? projects.cards : [];


  const images = [image1, image5, image2, image3, image4, herosection, image6];

  return (
    <section id="projects" className="w-full bg-background-2 dark:bg-dark-background-2 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-righteous text-center py-8 mb-12 relative text-text-light dark:text-text-dark">
          {projects.title}
          <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent rounded-full"></span>
        </h1>

        <div className="swiper-container relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active'
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="mySwiper pb-12"
          >
            {projectCards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col h-[550px] bg-background-2 dark:bg-dark-background-2 rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] hover:scale-[1.02]">

                  {/* Image Section - Fixed Height */}
                  <div className="relative h-68 overflow-hidden group">
                    <img
                      src={images[index]}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-bold text-lg">{card.title}</span>
                    </div>
                  </div>

                  {/* Content Section - Flexible within fixed container */}
                  <div className="flex flex-col p-6 border-l-2 border-r-2 border-accent dark:border-accent-dark flex-grow">
                    <h2 className="text-xl font-righteous mb-3 text-text-light dark:text-text-dark">
                      {card.title}
                    </h2>
                    <div className="flex-grow overflow-y-auto">
                      <p className="text-sm text-text-light dark:text-text-dark leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Button Section - Fixed Height */}

                  <div className="p-4 border-l-2 border-r-2 border-b-2 border-accent dark:border-accent-dark rounded-b-3xl bg-gradient-to-r from-accent/10 to-accent/5 dark:from-accent-dark/10 dark:to-accent-dark/5">
                    <div className="flex gap-2">
                      <Link
                        to={`/projects/${card.index}`}
                        className="flex-1"
                      >
                        <button className="w-full px-6 py-3 font-righteous text-text-light dark:text-text-dark border-2 border-accent dark:border-accent-dark rounded-lg hover:bg-accent hover:text-white dark:hover:bg-accent-dark transition-all duration-300 flex items-center justify-center gap-2">
                          {language === 'es' ? 'Ver detalles' : 'View details'}
                        </button>
                      </Link>
                      <a href={card.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <button className="w-full px-6 py-3 font-righteous text-text-light dark:text-text-dark border-2 border-accent dark:border-accent-dark rounded-lg hover:bg-accent hover:text-white dark:hover:bg-accent-dark transition-all duration-300 flex items-center justify-center gap-2">
                          {language === 'es' ? 'Ver código' : 'View code'}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <div className="swiper-button-next !w-12 !h-12 !text-accent dark:!text-accent-dark !border-2 !border-accent dark:!border-accent-dark !rounded-full after:!text-sm hover:!bg-accent hover:!text-white dark:hover:!bg-accent-dark !transition-all !duration-300 !shadow-lg"></div>
          <div className="swiper-button-prev !w-12 !h-12 !text-accent dark:!text-accent-dark !border-2 !border-accent dark:!border-accent-dark !rounded-full after:!text-sm hover:!bg-accent hover:!text-white dark:hover:!bg-accent-dark !transition-all !duration-300 !shadow-lg"></div>

          <div className="swiper-pagination !relative !mt-8 flex justify-center gap-2"></div>

          <div className="mt-12 text-center">
            <Link to="/projects" className="inline-block">
              <button className="px-8 py-4 bg-accent dark:bg-accent-dark text-white font-righteous text-lg rounded-lg hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                {language === 'es' ? 'Ver todos los proyectos' : 'View all projects'}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;