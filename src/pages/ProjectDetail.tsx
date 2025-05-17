// src/components/ProjectDetail.tsx
import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LanguageContext } from '../context/languageContext';
import image1 from '../assets/images/api.png';
import image2 from '../assets/images/api2.png';
import image3 from '../assets/images/graphoauth2.0.png';
import image4 from '../assets/images/payment.png';
import image5 from '../assets/images/nest_api_1.png';

interface ProjectDetailProps {
  id: number;
  title: string;
  description: string;
  features?: string[];
  technologies?: string[];
  challenges?: string[];
  link: string;
  image: string;
  
}

const ProjectDetail = () => {
  const { language, texts } = useContext(LanguageContext);
  const { id } = useParams<{ id: string }>();
  const projectData = texts.projects[0];
  const projects = projectData[language] || projectData['es'];
  
  const images = [image1, image5, image2, image3, image4];
  const index = Number(id);

  // Find the project by ID
  const project = projects.cards[Number(id)];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="w-full bg-background-2 dark:bg-dark-background-2 py-16 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            to="/projects" 
            className="flex items-center text-accent dark:text-accent-dark hover:underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            {language === 'es' ? 'Volver a proyectos' : 'Back to projects'}
          </Link>
        </div>

        <h1 className="text-4xl font-righteous mb-8 text-text-light dark:text-text-dark">
          {project.title}
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img 
              src={images[index]} 
              alt={project.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="mb-10 bg-background-1 dark:bg-dark-background-1 p-6 rounded-lg shadow">
  <h2 className="text-2xl font-righteous mb-6 text-text-light dark:text-text-dark border-b border-accent dark:border-accent-dark pb-2">
    {language === 'es' ? 'Descripción Detallada' : 'Detailed Description'}
  </h2>
  <div className="prose prose-sm dark:prose-invert max-w-none text-justify">
    {project.detailedDescription.split('\n\n').map((paragraph: string, index: number) => (
      <p key={index} className="mb-4 last:mb-0 text-text-light dark:text-text-dark">
        {paragraph}
      </p>
    ))}
  </div>
</div>
            
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-accent dark:bg-accent-dark text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 text-center"
            >
              {language === 'es' ? 'Ver en GitHub' : 'View on GitHub'}
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-background-1 dark:bg-dark-background-1 p-6 rounded-lg shadow">
            <h3 className="text-xl font-righteous mb-4 text-text-light dark:text-text-dark">
              {language === 'es' ? 'Tecnologías' : 'Technologies'}
            </h3>
            <ul className="space-y-2">
                      {project.technologies.map((tech: string, index: number) => (
        <li key={index} className="text-text-light dark:text-text-dark flex items-start">
            <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-green-500 mr-2 mt-0.5" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
            clipRule="evenodd" 
          />
        </svg>
          {tech}
        </li>
      ))}            </ul>
          </div>

          <div className="bg-background-1 dark:bg-dark-background-1 p-6 rounded-lg shadow">
            <h3 className="text-xl font-righteous mb-4 text-text-light dark:text-text-dark">
              {language === 'es' ? 'Características' : 'Features'}
            </h3>
            <ul className="space-y-2">
    {project.features?.map((feature: string, index: number) => (
      <li key={index} className="text-text-light dark:text-text-dark flex items-start">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-green-500 mr-2 mt-0.5" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
            clipRule="evenodd" 
          />
        </svg>
        {feature}
      </li>
    ))}  </ul>
          </div>

          <div className="bg-background-1 dark:bg-dark-background-1 p-6 rounded-lg shadow">
            <h3 className="text-xl font-righteous mb-4 text-text-light dark:text-text-dark">
              {language === 'es' ? 'Desafíos' : 'Challenges'}
            </h3>
            <ul className="space-y-2">
             {project.challenges.map((challenge: string, index: number) => (
        <li key={index} className="text-text-light dark:text-text-dark flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
          </svg>
          {challenge}
        </li>
      ))}            </ul>          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectDetail;