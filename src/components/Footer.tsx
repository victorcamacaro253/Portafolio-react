import { useContext } from "react";
import { LanguageContext } from '../context/languageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGithub, faLinkedinIn, faInstagram, faXTwitter, faPaypal, faTiktok } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const { language, texts } = useContext(LanguageContext);
  const { copyright } = texts.footer[0][language] || texts.footer[0]['es'];

  const socialLinks = [
    { icon: faFacebookF, url: "https://m.facebook.com/100000134262241", label: "Facebook" },
    { icon: faXTwitter, url: "https://mobile.twitter.com/victorcamacar19", label: "Twitter" },
    { icon: faGithub, url: "https://github.com/victorcamacaro253", label: "GitHub" },
    { icon: faLinkedinIn, url: "https://www.linkedin.com/in/victor-camacaro-3634641a5", label: "LinkedIn" },
    { icon: faInstagram, url: "https://www.instagram.com/victorcamacaro1999/", label: "Instagram" },
    { icon: faTiktok, url: "https://www.tiktok.com/@victorcamacaro1999", label: "TikTok" }
  ];

  // PayPal donation link - replace with your actual PayPal donation link
  const paypalDonationUrl = "https://paypal.me/victorcamacaro253?country.x=VE&locale.x=es_XC";

  return (
    <footer className="relative bg-background-3 dark:bg-dark-background-3 text-gray-800 dark:text-white py-16 text-center border-t border-gray-200 dark:border-gray-600">
      {/* Back to top button */}
      <a 
        href="#inicio" 
        className="absolute left-1/2 -top-6 transform -translate-x-1/2 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
        aria-label="Back to top"
      >
        <FontAwesomeIcon 
          icon={faAngleUp} 
          className="text-xl group-hover:-translate-y-1 transition-transform duration-300" 
        />
      </a>

      {/* Donation Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          {language === 'es' ? '¿Te gusta mi trabajo?' : 'Like my work?'}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 max-w-md mx-auto">
          {language === 'es' 
            ? 'Si mis proyectos te han sido útiles, considera hacer una donación para apoyar mi trabajo.' 
            : 'If my projects have been helpful to you, consider making a donation to support my work.'
          }
        </p>
        <a
          href={paypalDonationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 group"
          aria-label="Donate via PayPal"
        >
          <FontAwesomeIcon 
            icon={faPaypal} 
            className="text-xl group-hover:scale-110 transition-transform duration-300" 
          />
          <FontAwesomeIcon 
            icon={faHeart} 
            className="text-red-400 text-sm animate-pulse" 
          />
          <span>{language === 'es' ? 'Donar' : 'Donate'}</span>
        </a>
      </div>

      {/* Social icons */}
      <div className="flex justify-center space-x-4 md:space-x-6 mb-8">
        {socialLinks.map((social, index) => (
          <a 
            key={index}
            href={social.url} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border-2 border-gray-800 dark:border-white/30 text-gray-800 dark:text-white rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-300 group"
            aria-label={`${social.label} profile`}
          >
            <FontAwesomeIcon 
              icon={social.icon} 
              className="group-hover:text-white transition-colors duration-300" 
            />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {copyright} <span className="text-accent dark:text-dark-accent font-medium">Victor Camacaro</span>
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-20"></div>
    </footer>
  );
}

export default Footer;
