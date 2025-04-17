import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode,  faDatabase, faCloud,faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { faDocker,faJs, faReact,faNode,faPhp,faCloudflare,faAws,faWindows,faGoogle } from '@fortawesome/free-brands-svg-icons';
import typeScript from '../../assets/images/ts-logo-512.png';


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



        // Agrega más intereses según sea necesario
    ];

    return (
        <div className="contenedor-intereses">
            {intereses.map((interes, index) => (
                <div className="interes" key={index}>
                  {/* Render FontAwesome Icons */}
          {typeof interes.icono === 'string' ? (
            // For Custom SVG Icons (e.g., TypeScript)
            <img src={interes.icono} alt={`${interes.texto} icon`} style={{ width: '3rem', height: '3rem', marginBottom: '0.5rem', filter: 'grayscale(1) brightness(0.8) invert(1)' }} />
           
        ) : (
            // For FontAwesome Icons
            <FontAwesomeIcon icon={interes.icono} size="3x" className="mb-2" />
          )}
          <span className="text-lg font-medium">{interes.texto}</span>
                </div>
            ))}
        </div>
    );
};

export default Intereses;
