
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode,  faDatabase, faCloud,faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { faDocker,faJs, faReact,faNode,faPhp,faCloudflare,faAws,faWindows,faGoogle } from '@fortawesome/free-brands-svg-icons';
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
        { icono: faNetworkWired, texto: 'Redes' },
        { icono: faAws, texto: 'AWS' },
        { icono: faWindows, texto: 'Windows' },
        { icono: faGoogle, texto: 'GOOGLE' },



        // Agrega más intereses según sea necesario
    ];

    return (
        <div className="contenedor-intereses">
            {intereses.map((interes, index) => (
                <div className="interes" key={index}>
                    <FontAwesomeIcon icon={interes.icono} size='3x' />
                    <span>{interes.texto}</span>
                </div>
            ))}
        </div>
    );
};

export default Intereses;
