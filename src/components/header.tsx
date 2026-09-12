import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Sobre mí', href: '/#sobre-mi' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Proyectos', href: '/projects' },
    { label: 'IA & Optimización', href: '/ia' },
    { label: 'Contacto', href: '/#contacto' },
  ];

  return (
    <div className="fixed w-full top-0 left-0 z-50 bg-background-1 dark:bg-dark-background-1 transition-colors duration-300 border-b border-gray-200 dark:border-gray-700">
      <header className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <Link 
            to="/" 
            onClick={seleccionar}
            className="font-['Righteous'] text-xl text-accent dark:text-dark-accent no-underline hover:opacity-80 transition-opacity font-bold"
          >
            Victor
          </Link>
          
          {/* Theme Toggle */}
          <div 
            className="flex justify-between items-center h-6 w-14 bg-gray-100 dark:bg-gray-800 rounded-md cursor-pointer ml-4 transition-colors duration-300"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            <span className={`flex items-center justify-center w-1/2 h-full rounded-md transition-all duration-300 ${
              !darkTheme ? 'bg-accent text-white' : 'text-gray-400'
            }`}>
              <FontAwesomeIcon icon={faSun} className="text-xs" />
            </span>
            <span className={`flex items-center justify-center w-1/2 h-full rounded-md transition-all duration-300 ${
              darkTheme ? 'bg-accent text-white' : 'text-gray-400'
            }`}>
              <FontAwesomeIcon icon={faMoon} className="text-xs" />
            </span>
          </div>
        </div>

        {/* ✅ NAV ACTUALIZADO: Mismo fondo que el header */}
        <nav 
          id="nav" 
          className={`${menuVisible ? 'block' : 'hidden'} md:block absolute md:relative top-full md:top-0 right-0 left-0 md:left-auto bg-background-1 dark:bg-dark-background-1 md:bg-transparent w-full md:w-auto rounded-b-lg md:rounded-none shadow-lg md:shadow-none transition-all duration-300 border-b md:border-b-0 border-gray-200 dark:border-gray-700`}
        >
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link 
                  to={item.href} 
                  onClick={seleccionar}
                  className="block text-gray-800 dark:text-white hover:text-accent dark:hover:text-accent px-3 py-2 rounded-lg transition-all duration-200 font-medium md:font-semibold text-sm md:text-base hover:bg-accent/10 dark:hover:bg-accent/10"
                >
                  {item.label.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
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