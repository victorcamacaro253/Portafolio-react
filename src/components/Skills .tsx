import { useEffect, useContext } from 'react';
import { LanguageContext } from '../context/languageContext';

function Skills() {
    const { language, texts } = useContext(LanguageContext);
    
    // Extracción segura con fallback a español si algo falla
    const currentLangData = texts?.skills?.[language] || texts?.skills?.es || {};
    
    const { 
        title = "Habilidades", 
        techTitle = "Habilidades Técnicas", 
        profTitle = "Habilidades Profesionales",
        technical = [],
        professional = []
    } = currentLangData;

    useEffect(() => {
        const handleScroll = () => {
            const skillsSection = document.getElementById("skills");
            if (!skillsSection) return;

            const sectionTop = skillsSection.getBoundingClientRect().top;
            const sectionVisible = window.innerHeight - sectionTop;

            if (sectionVisible >= 300) {
                const progressBars = document.querySelectorAll<HTMLElement>(".progress-bar");
                progressBars.forEach((bar) => {
                    // Leemos el porcentaje objetivo directamente del atributo data
                    const targetWidth = bar.getAttribute('data-width');
                    if (targetWidth) {
                        bar.style.width = targetWidth; // Animación suave y 100% sincronizada con el JSON
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Ejecutar una vez al montar por si ya está en pantalla
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [language]); // Se reinicia la detección si cambia el idioma

    // Componente reutilizable para renderizar cada columna de habilidades
    const renderSkillsColumn = (skillsArray: any[]) => (
        <div className="space-y-8">
            {skillsArray.map((skill, index) => (
                <div key={`${skill.name}-${index}`} className="group">
                    <div className="flex justify-between items-center mb-3">
                        <span className="font-bold text-lg dark:text-gray-200">{skill.name}</span>
                        <span className="text-sm font-medium text-accent dark:text-accent-light">
                            {skill.percentage}
                        </span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
                        <div
                            className="progress-bar h-full bg-gradient-to-r from-accent to-accent-dark rounded-full transition-all duration-1000 ease-out"
                            style={{ width: '0%' }} // Empieza en 0, el useEffect lo anima al valor real
                            data-width={skill.percentage} // Guardamos el valor objetivo aquí
                        >
                            <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <section
            id="skills"
            className="py-16 px-4 bg-background-3 dark:bg-dark-background-3 text-text-light dark:text-text-dark"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-righteous text-center py-8 mb-12 relative">
                    {title}
                    <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent rounded-full"></span>
                </h2>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Columna de Habilidades Técnicas */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-righteous mb-8 pb-2 border-b border-gray-300 dark:border-gray-600">
                            <span className="text-accent">#</span> {techTitle}
                        </h3>
                        {renderSkillsColumn(technical)}
                    </div>

                    {/* Columna de Habilidades Profesionales */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-righteous mb-8 pb-2 border-b border-gray-300 dark:border-gray-600">
                            <span className="text-accent">#</span> {profTitle}
                        </h3>
                        {renderSkillsColumn(professional)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;