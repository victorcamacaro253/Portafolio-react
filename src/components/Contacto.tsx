import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faLocationDot, faMobileScreen, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import mapa from '../assets/images/mapa.jpeg';

function Contacto() {
  const { language, texts } = useContext(LanguageContext);
  const { title, description, message, name, phoneNumber, email, subject, message2 } = 
    texts.contact[0][language] || texts.contact[0]['es'];

  return (
    <section id="Contacto" className="py-16 px-4 bg-background-1 dark:bg-dark-background-1 text-gray-800 dark:text-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-righteous text-center py-8 mb-6 relative">
          {title}
          <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent rounded-full"></span>
        </h2>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto">{description}</p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <input 
                  type="text" 
                  name="name" 
                  placeholder={name}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  name="phone" 
                  placeholder={phoneNumber}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>
              <div className="relative md:col-span-2">
                <input 
                  type="email" 
                  name="email" 
                  placeholder={email}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>
              <div className="relative md:col-span-2">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder={subject}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>
            </div>
            <div className="mb-6">
              <textarea 
                name="message" 
                cols={30} 
                rows={8}
                placeholder={message2}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              ></textarea>
            </div>
            <button className="relative overflow-hidden bg-accent text-white px-6 py-3 rounded-lg font-righteous text-lg hover:bg-accent/90 transition-all duration-300 group">
              {message} 
              <FontAwesomeIcon icon={faPaperPlane} className="ml-2 group-hover:translate-x-1 transition-transform" />
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/2">
            <div className="h-full rounded-xl overflow-hidden shadow-lg">
              <img 
                src={mapa} 
                alt="Mapa de ubicación" 
                className="w-full h-64 object-cover"
              />
              <div className="bg-white dark:bg-gray-800 p-6">
                <h3 className="text-xl font-righteous mb-4 text-accent dark:text-dark-accent">Información de Contacto</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FontAwesomeIcon 
                      icon={faLocationDot} 
                      className="text-accent dark:text-dark-accent mt-1 mr-3" 
                    />
                    <div>
                      <h4 className="font-medium">Ubicación</h4>
                      <p className="text-gray-600 dark:text-gray-300">Barquisimeto, Venezuela 🇻🇪</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon 
                      icon={faMobileScreen} 
                      className="text-accent dark:text-dark-accent mt-1 mr-3" 
                    />
                    <div>
                      <h4 className="font-medium">Teléfono</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        <span className="mr-2">🇻🇪</span> +58 426-2553540
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon 
                      icon={faEnvelope} 
                      className="text-accent dark:text-dark-accent mt-1 mr-3" 
                    />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600 dark:text-gray-300">victorcamacaro253@gmail.com</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;