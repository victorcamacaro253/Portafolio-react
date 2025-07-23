// src/pages/PortfolioPage.tsx
import { useContext, useState } from 'react';
import { LanguageContext } from '../context/languageContext';
import { Link } from 'react-router-dom';

interface Project {
    title: string;
    description: string;
    url?: string;
    github?: string;
    technologies: string[];
    index?: string; // para websites
    link?: string; // para projects (github)
    type: 'website' | 'project'; // nuevo: tipo de proyecto
}
type LocalizedData = {
        [key: string]: {
            title?: string;
            viewDetails?: string;
            visit?: string;
            cards?: any[];
        };
    };

const ProjectsPage = () => {
    const { language, texts } = useContext(LanguageContext);
    

    const websitesData: LocalizedData = texts.websites?.[0] || {};
    const projectsData: LocalizedData = texts.projects?.[0] || {};

    const t = websitesData[language] || websitesData['es'];
    const p = projectsData[language] || projectsData['es'];

    // Obtener proyectos de "websites"
    const websiteProjects: Project[] = (websitesData[language]?.cards || []).map((w: any) => ({
        ...w,
        type: 'website' as const,
    }));

    // Obtener proyectos de "projects"
    const technicalProjects: Project[] = (projectsData[language]?.cards || []).map((proj: any) => ({
        title: proj.title,
        description: proj.description,
        technologies: proj.technologies,
        link: proj.link, // github
        url: proj.url, // si tiene demo
        type: 'project' as const,
          index: proj.index, // ← ¡Esto es clave!
    }));

    // Combinar todos los proyectos
    const allProjects: Project[] = [...websiteProjects, ...technicalProjects];

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTech, setSelectedTech] = useState<string>('');

    // Obtener todas las tecnologías únicas
    const allTechnologies = Array.from(
        new Set(allProjects.flatMap((p) => p.technologies))
    ).sort();

    // Filtrar proyectos
    const filteredProjects = allProjects.filter((project) => {
        const matchesSearch =
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.technologies.some((tech) =>
                tech.toLowerCase().includes(searchTerm.toLowerCase())
            );

        const matchesTech = selectedTech ? project.technologies.includes(selectedTech) : true;

        return matchesSearch && matchesTech;
    });

    return (
        <section id="portfolio" className="py-16 px-4 mt-10 bg-background-1 dark:bg-dark-background-1">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-righteous text-center mb-4 text-text-light dark:text-text-dark">
                    {t.title || p.title}
                </h1>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
                    {language === 'es'
                        ? 'Descubre todos mis proyectos: desde sitios web completos hasta APIs, aplicaciones móviles y soluciones backend.'
                        : 'Discover all my projects: from full websites to APIs, mobile apps, and backend solutions.'}
                </p>

                {/* Filtros */}
                <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-12">
                    <div className="w-full md:w-1/2">
                        <input
                            type="text"
                            placeholder={
                                language === 'es' ? 'Buscar proyectos...' : 'Search projects...'
                            }
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark"
                        />
                    </div>

                    <div className="w-full md:w-1/3">
                        <select
                            value={selectedTech}
                            onChange={(e) => setSelectedTech(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark"
                        >
                            <option value="">
                                {language === 'es' ? 'Todas las tecnologías' : 'All technologies'}
                            </option>
                            {allTechnologies.map((tech) => (
                                <option key={tech} value={tech}>
                                    {tech}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Resultados */}
                {filteredProjects.length === 0 ? (
                    <p className="text-center text-gray-500 dark:text-gray-400">
                        {language === 'es'
                            ? 'No se encontraron proyectos que coincidan.'
                            : 'No projects found matching your criteria.'}
                    </p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => {
                            // Determinar si tiene demo o solo código
                            const hasDemo = project.url && project.url.trim() !== '#';
                            const hasCode = project.link || project.github;

                            return (
                                <div
                                    key={`${project.type}-${index}`}
                                    className="bg-background-2 dark:bg-dark-background-2 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
                                >
                                    <div className="p-6">
                                        {/* Tipo de proyecto */}
                                        <span
                                            className={`inline-block px-2 py-1 text-xs font-bold rounded-full mb-3 ${project.type === 'website'
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                                }`}
                                        >
                                            {project.type === 'website'
                                                ? language === 'es'
                                                    ? 'Sitio Web'
                                                    : 'Website'
                                                : language === 'es'
                                                    ? 'Proyecto Técnico'
                                                    : 'Technical Project'}
                                        </span>

                                        <h3 className="text-xl font-righteous mb-3 text-text-light dark:text-text-dark">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Tecnologías */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.technologies.slice(0, 3).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 bg-accent/10 dark:bg-accent-dark/10 text-accent dark:text-accent-dark text-xs rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                                                    +{project.technologies.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        {/* Botones */}
                                        <div className="flex gap-2">
                                            {project.type === 'website' ? (
                                                <Link
                                                    to={`/websites/${project.index}`}
                                                    className="flex-1"
                                                >
                                                    <button className="w-full px-4 py-2 text-sm font-medium text-text-light dark:text-text-dark border border-accent dark:border-accent-dark rounded-lg hover:bg-accent hover:text-white dark:hover:bg-accent-dark transition-colors">
                                                        {t.viewDetails || 'View details'}
                                                    </button>
                                                </Link>
                                            ) : (
                                                <Link
                                                    to={`/projects/${project.index}`}
                                                    className="flex-1"
                                                >
                                                    <button className="w-full px-4 py-2 text-sm font-medium text-text-light dark:text-text-dark border border-accent dark:border-accent-dark rounded-lg hover:bg-accent hover:text-white dark:hover:bg-accent-dark transition-colors">
                                                        {t.viewDetails || 'View details'}
                                                    </button>
                                                </Link>
                                            )}

                                            {hasDemo && (
                                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                                    <button className="px-4 py-2 text-sm font-medium text-text-light dark:text-text-dark border border-accent dark:border-accent-dark rounded-lg hover:bg-accent hover:text-white dark:hover:bg-accent-dark transition-colors">
                                                        {t.visit || 'Visit'}
                                                    </button>
                                                </a>
                                            )}

                                            {!hasDemo && hasCode && (
                                                <a
                                                    href={project.link || project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <button className="px-4 py-2 text-sm font-medium text-text-light dark:text-text-dark border border-accent dark:border-accent-dark rounded-lg hover:bg-accent hover:text-white dark:hover:bg-accent-dark transition-colors">
                                                        {language === 'es' ? 'Código' : 'Code'}
                                                    </button>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsPage;