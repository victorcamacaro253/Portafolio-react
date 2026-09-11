import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { LanguageContext } from '../context/languageContext';
import { Link } from 'react-router-dom';

interface ProjectCard {
  title: string;
  description: string;
  link: string;
  button: string;
  index: string;
  image?: string;
  logo?: string;
  gallery?: string[];
}

const Projects = () => {
  const { language, texts } = useContext(LanguageContext);
  
  // ✅ Acceso seguro con optional chaining para evitar el error "Cannot read properties of undefined"
  const projectData = texts?.projects?.[0] || {};
  const projects = projectData[language] || projectData['es'] || {};
  const projectCards: ProjectCard[] = Array.isArray(projects.cards) ? projects.cards : [];

  // ✅ Función para obtener la imagen directamente del objeto del proyecto
  const getCoverImage = (card: ProjectCard) => {
    return card.image || card.logo || (card.gallery && card.gallery[0]) || '/images/default-project.jpg';
  };

  return (
    <section id="projects" className="w-full bg-background-2 dark:bg-dark-background-2 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-righteous text-center py-8 mb-12 relative text-text-light dark:text-text-dark">
          {projects.title || 'Mis Proyectos'}
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
            loop={projectCards.length > 1} // ✅ Solo hace loop si hay más de 1 proyecto
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
              <SwiperSlide key={card.index || index}>
                <div className="flex flex-col h-[550px] bg-background-2 dark:bg-dark-background-2 rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] hover:scale-[1.02]">

                  {/* Image Section - Fixed Height */}
                  <div className="relative h-64 overflow-hidden group"> {/* ✅ Cambiado h-68 a h-64 (Tailwind estándar) */}
                    <img
                      src={getCoverImage(card)}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback elegante si la imagen no se encuentra
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Project+Preview';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-bold text-lg">{card.title}</span>
                    </div>
                    {/* Badge de tipo de proyecto (Opcional, se ve muy profesional) */}
                    <span className="absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full shadow-md bg-blue-500 text-white">
                      Proyecto
                    </span>
                  </div>

                  {/* Content Section - Flexible within fixed container */}
                  <div className="flex flex-col p-6 border-l-2 border-r-2 border-accent dark:border-accent-dark flex-grow">
                    <h2 className="text-xl font-righteous mb-3 text-text-light dark:text-text-dark">
                      {card.title}
                    </h2>
                    <div className="flex-grow overflow-y-auto custom-scrollbar">
                      <p className="text-sm text-text-light dark:text-text-dark leading-relaxed line-clamp-4">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Button Section - Fixed Height */}
                  <div className="p-4 border-l-2 border-r-2 border-b-2 border-accent dark:border-accent-dark rounded-b-3xl bg-gradient-to-r from-accent/10 to-accent/5 dark:from-accent-dark/10 dark:to-accent-dark/5">
                    <div className="flex gap-2">
                      <Link to={`/projects/${card.index}`} className="flex-1">
                        <button className="w-full px-6 py-3 font-righteous text-text-light dark:text-text-dark border-2 border-accent dark:border-accent-dark rounded-lg hover:bg-accent hover:text-white dark:hover:bg-accent-dark transition-all duration-300 flex items-center justify-center gap-2">
                          {card.button || (language === 'es' ? 'Ver detalles' : 'View details')}
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