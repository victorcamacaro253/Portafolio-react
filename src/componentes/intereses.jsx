
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode,  faDatabase, faCloud,faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { faDocker,faJs, faReact,faNode,faPhp } from '@fortawesome/free-brands-svg-icons';
const Intereses = () => {
    const intereses = [
        { icono: faCode, texto: 'CODE' },
        { icono: faJs, texto: 'JAVASCRIPT' },
        { icono: faDatabase, texto: 'BD' },
        { icono: faDocker, texto: 'DOCKER' },
        { icono: faCloud, texto: 'CLOUD COMPUTING' },
        { icono: faReact, texto: 'React js' },
        { icono: faNode, texto: 'Node Js' },
        { icono: faPhp, texto: 'PHP' },
        { icono: faNetworkWired, texto: 'Redes' },
        // Agrega más intereses según sea necesario
    ];

    return (
        <div className="contenedor-intereses">
            {intereses.map((interes, index) => (
                <div className="interes" key={index}>
                    <FontAwesomeIcon icon={interes.icono} />
                    <span>{interes.texto}</span>
                </div>
            ))}
        </div>
    );
};

export default Intereses;
