import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, faDatabase
} from '@fortawesome/free-solid-svg-icons';
import { 
  faDocker, faJs, faReact, faNode, 
  faPhp, faCloudflare, faAws, 
  faWindows, faGoogle 
} from '@fortawesome/free-brands-svg-icons';
import typeScript from '../assets/images/ts-logo-512.png';

const Intereses = () => {
  const intereses = [
    { icono: faCode, texto: 'CODE' },
    { icono: faJs, texto: 'JAVASCRIPT' },
    { icono: faDatabase, texto: 'BD' },
    { icono: faDocker, texto: 'DOCKER' },
    { icono: faCloudflare, texto: 'CLOUDFLARE' },
    { icono: faReact, texto: 'React js' },
    { icono: faNode, texto: 'Node Js' },
    { icono: faPhp, texto: 'PHP' },
    { icono: typeScript, texto: 'TypeScript' },
    { icono: faAws, texto: 'AWS' },
    { icono: faWindows, texto: 'Windows' },
    { icono: faGoogle, texto: 'GOOGLE' },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {intereses.map((interes, index) => (
        <div 
          key={index}
          className="w-24 h-24 bg-background-3 dark:bg-dark-background-3 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-accent dark:hover:bg-accent"
          >
          {typeof interes.icono === 'string' ? (
            <img 
              src={interes.icono} 
              alt={`${interes.texto} icon`} 
              className="w-12 h-12 mb-2 filter dark:invert"
            />
          ) : (
            <FontAwesomeIcon 
              icon={interes.icono} 
              className="text-3xl mb-2" 
            />
          )}
          <span className="text-sm font-medium text-center">{interes.texto}</span>
        </div>
      ))}
    </div>
  );
};

export default Intereses;