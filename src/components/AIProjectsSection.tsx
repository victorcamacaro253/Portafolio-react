import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/languageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faBrain, faProjectDiagram, faEye, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AIProjectsSection = () => {
  const { language, texts } = useContext(LanguageContext);
  
  const data = texts?.aiProjects?.[language] || texts?.aiProjects?.es || {};
  const projects = data.projects || [];

  const projectIcons = [faProjectDiagram, faRobot, faBrain, faEye];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background-1 via-background-2 to-background-1 dark:from-dark-background-1 dark:via-dark-background-2 dark:to-dark-background-1">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 dark:bg-accent-dark/10 px-4 py-2 rounded-full mb-4">
            <FontAwesomeIcon icon={faBrain} className="text-accent dark:text-accent-dark" />
            <span className="text-sm font-semibold text-accent dark:text-accent-dark">
              {language === 'es' ? 'IA & Optimización' : 'AI & Optimization'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-righteous mb-4 text-text-light dark:text-text-dark">
            {data.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {data.sectionSubtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project: any, index: number) => (
            <div
              key={index}
              className="group bg-white dark:bg-dark-background-2 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              {/* Image with overlay */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-accent/20 to-accent-dark/20 dark:from-accent-dark/30 dark:to-accent/30">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FontAwesomeIcon 
                      icon={projectIcons[index % projectIcons.length]} 
                      className="text-7xl text-accent dark:text-accent-dark opacity-50" 
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Icon badge */}
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-dark-background-2/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                  <FontAwesomeIcon 
                    icon={projectIcons[index % projectIcons.length]} 
                    className="text-2xl text-accent dark:text-accent-dark" 
                  />
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-white/90 text-sm">{project.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.slice(0, 4).map((tech: string, techIdx: number) => (
                    <span
                      key={techIdx}
                      className="px-2 py-1 bg-accent/10 dark:bg-accent-dark/10 text-accent dark:text-accent-dark text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full font-medium">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Impact highlights */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                    {language === 'es' ? 'Impacto clave' : 'Key impact'}
                  </p>
                  <div className="space-y-1">
                    {project.impact.slice(0, 2).map((item: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to={`/ia/${project.id}`}
                  className="inline-flex items-center gap-2 text-accent dark:text-accent-dark font-semibold hover:gap-3 transition-all group/link"
                >
                  {language === 'es' ? 'Ver detalles completos' : 'View full details'}
                  <FontAwesomeIcon icon={faArrowRight} className="text-sm group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/ia"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-accent-dark text-white font-righteous text-lg rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faBrain} />
            {data.viewAll}
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIProjectsSection;