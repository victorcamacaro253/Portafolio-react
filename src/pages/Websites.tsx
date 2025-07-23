import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { LanguageContext } from '../context/languageContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';

// Import website images

import medicareImg from '../assets/images/medicare.png';
import cineverseImg from '../assets/images/cineverse.jpg';
import villaBlancaImg from '/images/villa-blanca/img5.jpg';


interface WebsiteCard {
  title: string;
  description: string;
  url: string;
  github: string;
  technologies: string[];
  features: string[];
  index: string;
}

const Websites = () => {
  const { language, texts } = useContext(LanguageContext);
  const websiteData: Record<string, any> = texts.websites?.[0] ?? {};
  const websites = websiteData[language] || websiteData['es'] || {};
  const websiteCards: WebsiteCard[] = Array.isArray(websites.cards) ? websites.cards : [];

  // Website images array
  const images = [ medicareImg,cineverseImg,villaBlancaImg];

  return (
    <section id="websites" className="w-full bg-background-1 dark:bg-dark-background-1 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-righteous text-center py-8 mb-12 relative text-text-light dark:text-text-dark">
          {websites.title}
          <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent rounded-full"></span>
        </h1>

        <div className="swiper-container relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
              delay: 4000,
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
            {websiteCards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col h-[600px] bg-white dark:bg-dark-background-2 rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] hover:scale-[1.02] border border-gray-200 dark:border-gray-700">

                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden group">
                    <img
                      src={images[index]}
                      alt={card.title}
                      className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-bold text-lg">{card.title}</span>
                    </div>
                    
                    {/* Live indicator */}
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      LIVE
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col p-6 flex-grow">
                    <h2 className="text-xl font-righteous mb-3 text-text-light dark:text-text-dark">
                      {card.title}
                    </h2>
                    
                    <div className="flex-grow overflow-y-auto mb-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {card.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-text-light dark:text-text-dark mb-2">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {card.technologies.slice(0, 4).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-accent/10 dark:bg-dark-accent/10 text-accent dark:text-dark-accent text-xs rounded-full border border-accent/20 dark:border-dark-accent/20"
                            >
                              {tech}
                            </span>
                          ))}
                          {card.technologies.length > 4 && (
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                              +{card.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="p-4 bg-gray-50 dark:bg-dark-background-1 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex gap-2">
                      <Link
                        to={`/websites/${card.index}`}
                        className="flex-1"
                      >
                        <button className="w-full px-4 py-2 font-righteous text-sm text-text-light dark:text-text-dark border-2 border-accent dark:border-dark-accent rounded-lg hover:bg-accent hover:text-white dark:hover:bg-dark-accent transition-all duration-300 flex items-center justify-center gap-2">
                         {websites.viewDetails }
                        </button>
                      </Link>
                      
                      <a 
                        href={card.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1"
                      >
                        <button className="w-full px-4 py-2 font-righteous text-sm bg-accent dark:bg-dark-accent text-white rounded-lg hover:bg-accent/80 dark:hover:bg-dark-accent/80 transition-all duration-300 flex items-center justify-center gap-2">
                          <FontAwesomeIcon icon={faExternalLinkAlt} className="h-3 w-3" />
                          {websites.visit}
                        </button>
                      </a>
                      
                      <a 
                        href={card.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center"
                      >
                        <FontAwesomeIcon icon={faCode} className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <div className="swiper-button-next !w-12 !h-12 !text-accent dark:!text-dark-accent !border-2 !border-accent dark:!border-dark-accent !rounded-full after:!text-sm hover:!bg-accent hover:!text-white dark:hover:!bg-dark-accent !transition-all !duration-300 !shadow-lg"></div>
          <div className="swiper-button-prev !w-12 !h-12 !text-accent dark:!text-dark-accent !border-2 !border-accent dark:!border-dark-accent !rounded-full after:!text-sm hover:!bg-accent hover:!text-white dark:hover:!bg-dark-accent !transition-all !duration-300 !shadow-lg"></div>

          <div className="swiper-pagination !relative !mt-8 flex justify-center gap-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Websites;
