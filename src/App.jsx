import Header from '../componentes/header';
import Inicio from '../componentes/inicio';
import SobreMi from '../componentes/sobreMi';
import Skills from '../componentes/skills';
import Curriculum from '../componentes/Curriculum';
import Portfolio from '../componentes/Portfolio';
import Contacto from '../componentes/Contacto';
import Footer from '../componentes/Footer';
import './App.css';




function App() {
  return (
    <div className="App">
      <Header />
      <Inicio />
      <SobreMi />
      <Skills />
      <Curriculum />
      <Portfolio />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
