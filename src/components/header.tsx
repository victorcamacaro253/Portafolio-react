import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkTheme');
    const initialTheme = savedTheme ? savedTheme === 'true' : true;
    setDarkTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkTheme;
    setDarkTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('darkTheme', String(newTheme));
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const seleccionar = () => {
    setMenuVisible(false);
  };

  return (
    <div className="fixed w-full top-0 left-0 z-50 bg-background-1 dark:bg-dark-background-1 transition-colors duration-300 border-b border-gray-200 dark:border-gray-700">
      <header className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <a 
            href="/" 
            className="font-['Righteous'] text-xl text-accent dark:text-dark-accent no-underline hover:opacity-80 transition-opacity font-bold"
          >
            Victor
          </a>
          <div 
            className="flex justify-between items-center h-6 w-14 bg-gray-100 dark:bg-gray-800 rounded-md cursor-pointer ml-4"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            <span className={`flex items-center justify-center w-1/2 h-full ${
              !darkTheme ? 'bg-primary text-white rounded-md' : ''
            }`}>
              <FontAwesomeIcon icon={faSun} />
            </span>
            <span className={`flex items-center justify-center w-1/2 h-full ${
              darkTheme ? 'bg-primary text-white rounded-md' : ''
            }`}>
              <FontAwesomeIcon icon={faMoon} />
            </span>
          </div>
        </div>

        <nav 
  id="nav" 
  className={`${menuVisible ? 'block' : 'hidden'} md:block absolute md:relative top-16 md:top-0 right-0 bg-background-3 dark:bg-dark-background-3 md:bg-transparent w-48 md:w-auto rounded-md shadow-md md:shadow-none transition-all duration-300`}
>
  <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
    {['inicio', 'Sobre mi', 'skills', 'Curriculum', 'Portfolio', 'Contacto'].map((item) => (
      <li key={item}>
        <a 
          href={item === 'inicio' ? '/' : `#${item}`} 
          onClick={seleccionar}
          className="block text-gray-800 dark:text-white hover:text-accent dark:hover:text-dark-accent px-2 py-1 transition-colors duration-200 font-medium md:font-semibold text-sm md:text-base"
        >
          {item.toUpperCase()}
        </a>
      </li>
    ))}
  </ul>
</nav>

        <div 
          className="md:hidden bg-accent text-white dark:bg-dark-accent dark:text-dark-text-default p-2 rounded-md cursor-pointer hover:opacity-80 transition-opacity"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </header>
    </div>
  );
};

export default Header;