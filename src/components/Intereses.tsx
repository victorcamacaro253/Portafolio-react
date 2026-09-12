import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
   faDatabase, faRobot, faBrain, 
  
} from '@fortawesome/free-solid-svg-icons';
import { 
   faReact, 
  faPython, faCloudflare, faAws, 
   faGithub,
  faNodeJs
} from '@fortawesome/free-brands-svg-icons';
import typeScript from '../assets/images/ts-logo-512.png';

const Intereses = () => {
  const intereses = [
    // Core Development
    { icono: typeScript, texto: 'TypeScript' },
  
    { icono: faReact, texto: 'React' },
    { icono: faNodeJs, texto: 'Node.js' },
    { icono: faPython, texto: 'Python' },
    // AI & Machine Learning
    { icono: faBrain, texto: 'Machine Learning' },
    { icono: faRobot, texto: 'Computer Vision' },
    // Databases
    { icono: faDatabase, texto: 'PostgreSQL' },    
    // Cloud & DevOps
    { icono: faCloudflare, texto: 'Cloudflare' },
    { icono: faAws, texto: 'AWS' },
    { icono: faGithub, texto: 'GitHub' },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {intereses.map((interes, index) => (
        <div 
          key={index}
          className="w-28 h-28 bg-background-3 dark:bg-dark-background-3 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:bg-accent dark:hover:bg-accent hover:scale-105 hover:shadow-lg group"
        >
          {typeof interes.icono === 'string' ? (
            <img 
              src={interes.icono} 
              alt={`${interes.texto} icon`} 
              className="w-12 h-12 mb-2 filter dark:invert group-hover:scale-110 transition-transform"
            />
          ) : (
            <FontAwesomeIcon 
              icon={interes.icono} 
              className="text-3xl mb-2 group-hover:scale-110 transition-transform" 
            />
          )}
          <span className="text-xs font-medium text-center px-2 leading-tight">{interes.texto}</span>
        </div>
      ))}
    </div>
  );
};

export default Intereses;