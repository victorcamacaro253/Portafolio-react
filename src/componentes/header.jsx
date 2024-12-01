import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon,faBars } from '@fortawesome/free-solid-svg-icons';


function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle('dark-theme-variables');
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const seleccionar = () => {
    setMenuVisible(false);
  };

  return (
    <div className="contenedor-header">
      <header>
        <div className="logo">
          <a href="#">Victor</a>
          <div className="theme-toggler" onClick={toggleTheme}>
          <FontAwesomeIcon icon={faSun} className={!darkTheme ? 'active' : ''} />
            <FontAwesomeIcon icon={faMoon} className={darkTheme ? 'active' : ''} />
          </div>
        </div>
        <nav id="nav" className={menuVisible ? 'responsive' : ''}>
          <ul className="ul">
            <li><a href="#inicio" onClick={seleccionar}>INICIO</a></li>
            <li><a href="#sobremi" onClick={seleccionar}>SOBRE MI</a></li>
            <li><a href="#skills" onClick={seleccionar}>SKILLS</a></li>
            <li><a href="#curriculum" onClick={seleccionar}>CURRICULUM</a></li>
            <li><a href="#portfolio" onClick={seleccionar}>PORTFOLIO</a></li>
            <li><a href="#contacto" onClick={seleccionar}>CONTACTO</a></li>
            <li><a href="index-ingles.html">EN INGLES</a></li>
          </ul>
        </nav>
        <div className="nav-responsive" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
        </div>
      </header>
    </div>
  );
}

export default Header;