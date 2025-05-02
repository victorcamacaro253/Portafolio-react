import { useContext } from 'react';
import { LanguageContext } from '../context/languageContext';
import proyecto1 from '../assets/images/datacenter.webp';
//import proyecto2 from '../assets/images/php.png';
import proyecto3 from '../assets/images/basededatos.jpg';
import proyecto4 from '../assets/images/business-cloud-computing-1080x675.jpg';
import proyecto5 from '../assets/images/responsive-web.webp';
//import proyecto6 from '../assets/images/api_pic.jpg';
import proyecto7 from '../assets/images/backenddev.png';
import proyecto8 from '../assets/images/api.png';

function Portfolio() {
  const { language, texts } = useContext(LanguageContext);
  const { 
    network, networkP, backDev, backDevP, 
    database, databaseP, analysis, analysisP, 
    webDev, webDevP, API, APIP 
  } = texts.Portfolio[0][language] || texts.Portfolio[0]['es'];

  const projects = [
    {
      image: proyecto1,
      title: network,
      description: networkP
    },
    {
      image: proyecto7,
      title: backDev,
      description: backDevP
    },
    {
      image: proyecto3,
      title: database,
      description: databaseP
    },
    {
      image: proyecto4,
      title: analysis,
      description: analysisP
    },
    {
      image: proyecto5,
      title: webDev,
      description: webDevP
    },
    {
      image: proyecto8,
      title: API,
      description: APIP
    }
  ];

  return (
    <section 
      id="Portfolio" 
      className="py-16 px-4 bg-background-3 dark:bg-dark-background-3 text-text-light dark:text-text-dark"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-righteous text-center py-8 mb-12 relative">
          Portafolio
          <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent rounded-full"></span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Improved hover overlay with better visibility */}
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 w-full max-w-[90%]">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-sm text-gray-200 mb-4">{project.description}</p>
                  <button className="px-4 py-2 bg-accent text-white rounded-md text-sm font-medium hover:bg-accent/90 transition-colors duration-200">
                    View Project
                  </button>
                </div>
              </div>

              {/* Always visible title overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;