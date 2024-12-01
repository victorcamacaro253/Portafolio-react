import { useEffect } from 'react';


function Skills() {
  useEffect(() => {
    const handleScroll = () => {
      const skills = document.getElementById("skills");
      const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
      if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("PHP");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("Javascript");
        habilidades[3].classList.add("SQL");
        habilidades[4].classList.add("REDES");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="contenido-seccion">
        <h2>Skills</h2>
        <div className="fila">
          <div className="col">
            <h3>Technical Skills</h3>
            <div className="skill">
              <span>PHP</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>75%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>HTML & CSS</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>60%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Javascript</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>50%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>SQL</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>70%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>REDES</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <h3>Profesional Skills</h3>
            <div className="skill">
              <span>Comunicacion</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>80%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Trabajo en equipo</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>70%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Creatividad</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>60%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Dedicacion</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>99%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Project Management</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>94%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
