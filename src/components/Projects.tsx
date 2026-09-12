import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { LanguageContext } from '../context/languageContext';
import { Link } from 'react-router-dom';

interface CombinedCard {
  title: string;
  description: string;
  index: string;
  image?: string;
  logo?: string;
  gallery?: string[];
  type: 'project' | 'website';
  link?: string;
  url?: string;
  github?: string;
  button?: string;
}

const Projects = () => {
  const { language, texts } = useContext(LanguageContext);
  
  // 1. Obtener proyectos técnicos
  const projectData = texts?.projects?.[0] || {};
  const projects = projectData[language] || projectData['es'] || {};
  const projectCards: CombinedCard[] = Array.isArray(projects.cards) 
    ? projects.cards.map((p: any) => ({
        ...p,
        type: 'project' as const,
        button: p.button || (language === 'es' ? 'Ver detalles' : 'View details')
      }))
    : [];

  // 2. Obtener sitios web
  const websiteData = texts?.websites?.[0] || {};
  const websites = websiteData[language] || websiteData['es'] || {};
  const websiteCards: CombinedCard[] = Array.isArray(websites.cards)
    ? websites.cards.map((w: any) => ({
        ...w,
        type: 'website' as const,
        button: websites.viewDetails || (language === 'es' ? 'Ver detalles' : 'View details'),
        link: w.github || w.url
      }))
    : [];

  // ✅ 3. LÓGICA DE EQUILIBRIO: Limitar cada categoría por separado
  const maxPerCategory = 3; // 👈 Cambia este número: 3 muestra 6 en total, 4 muestra 8 en total.
  
  const limitedProjects = projectCards.slice(0, maxPerCategory);
  const limitedWebsites = websiteCards.slice(0, maxPerCategory);
  
  // ✅ 4. INTERCALAR los resultados para que no aparezcan todos los de un tipo seguidos
  const allCards: CombinedCard[] = [];
  const maxLength = Math.max(limitedProjects.length, limitedWebsites.length);
  
  for (let i = 0; i < maxLength; i++) {
    if (i < limitedWebsites.length) allCards.push(limitedWebsites[i]);
    if (i < limitedProjects.length) allCards.push(limitedProjects[i]);
  }

  // Función para obtener la imagen
  const getCoverImage = (card: CombinedCard) => {
    return card.image || card.logo || (card.gallery && card.gallery[0]) || '/images/default-project.jpg';
  };

  return (
    <section id="projects" className="w-full bg-background-2 dark:bg-dark-background-2 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-righteous text-center py-8 mb-12 relative text-text-light dark:text-text-dark">
          {language === 'es' ? 'Proyectos y Sitios Web' : 'Projects & Websites'}
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
            loop={allCards.length > 1}
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
            {allCards.map((card, index) => (
              <SwiperSlide key={`${card.type}-${card.index}`}>
                <div className="flex flex-col h-[550px] bg-background-2 dark:bg-dark-background-2 rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] hover:scale-[1.02]">

                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden group">
                    <img
                      src={getCoverImage(card)}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Project+Preview';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-bold text-lg">{card.title}</span>
                    </div>
                    
                    {/* Badge dinámico según el tipo */}
                    <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full shadow-md ${
                      card.type === 'website' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-blue-500 text-white'
                    }`}>
                      {card.type === 'website' 
                        ? (language === 'es' ? 'Sitio Web' : 'Website') 
                        : (language === 'es' ? 'Proyecto Técnico' : 'Technical Project')}
                    </span>
                  </div>

                  {/* Content Section */}
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

                  {/* Button Section */}
                  <div className="p-4 border-l-2 border-r-2 border-b-2 border-accent dark:border-accent-dark rounded-b-3xl bg-gradient-to-r from-accent/10 to-accent/5 dark:from-accent-dark/10 dark:to-accent-dark/5">
                    <div className="flex gap-2">
                      <Link 
                        to={card.type === 'website' ? `/websites/${card.index}` : `/projects/${card.index}`} 
                        className="flex-1"
                      >
                        <button className="w-full px-4 py-3 font-righteous text-text-light dark:text-text-dark border-2 border-accent dark:border-accent-dark rounded-lg hover:bg-accent hover:text-white dark:hover:bg-accent-dark transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                          {card.button}
                        </button>
                      </Link>
                      
                      {card.type === 'website' ? (
                        <a href={card.url || card.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <button className="w-full px-4 py-3 font-righteous text-text-light dark:text-text-dark border-2 border-accent dark:border-accent-dark rounded-lg hover:bg-accent hover:text-white dark:hover:bg-accent-dark transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                            {card.url ? (language === 'es' ? 'Visitar' : 'Visit') : (language === 'es' ? 'Código' : 'Code')}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </button>
                        </a>
                      ) : (
                        <a href={card.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <button className="w-full px-4 py-3 font-righteous text-text-light dark:text-text-dark border-2 border-accent dark:border-accent-dark rounded-lg hover:bg-accent hover:text-white dark:hover:bg-accent-dark transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                            {language === 'es' ? 'Ver código' : 'View code'}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </button>
                        </a>
                      )}
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