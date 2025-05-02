import { useEffect, useContext } from 'react';
import { LanguageContext } from '../context/languageContext';

function Skills() {
    const { language, texts } = useContext(LanguageContext);
    const {
        skills,
        techSkills,
        profskills,
        communication,
        teamWork,
        creativity,
        Dedication
    } = texts.skills[0][language] || texts.skills[0]['es'];

    useEffect(() => {
        const handleScroll = () => {
            const skillsSection = document.getElementById("skills");
            if (!skillsSection) return;

            const sectionTop = skillsSection.getBoundingClientRect().top;
            const sectionVisible = window.innerHeight - sectionTop;

            if (sectionVisible >= 300) {
                const progressBars = document.querySelectorAll(".progress-bar");
                progressBars.forEach((bar, index) => {
                    // Remove any existing width class
                    bar.className = bar.className.replace(/\bw-\w+/g, '');
                    // Add the appropriate width class based on index
                    const widths = ['w-[75%]', 'w-[80%]', 'w-[80%]', 'w-[70%]', 'w-[80%]',
                                   'w-[80%]', 'w-[70%]', 'w-[60%]', 'w-[99%]', 'w-[94%]'];
                    bar.classList.add(widths[index], 'transition-all', 'duration-1000', 'ease-out');
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const skillsData = [
        // Technical Skills
        { name: "PHP", percentage: "75%" },
        { name: "HTML,CSS & Javascript", percentage: "80%" },
        { name: "NODE JS", percentage: "80%" },
        { name: "SQL", percentage: "70%" },
        { name: "REDES", percentage: "80%" },
        // Professional Skills
        { name: communication, percentage: "80%" },
        { name: teamWork, percentage: "70%" },
        { name: creativity, percentage: "60%" },
        { name: Dedication, percentage: "99%" },
        { name: "Project Management", percentage: "94%" }
    ];

    return (
        <section
            id="skills"
            className="py-16 px-4 bg-background-3 dark:bg-dark-background-3 text-text-light dark:text-text-dark"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-righteous text-center py-8 mb-12 relative">
                    {skills}
                    <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent rounded-full"></span>
                </h2>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Technical Skills Column */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-righteous mb-8 pb-2 border-b border-gray-300 dark:border-gray-600">
                            <span className="text-accent">#</span> {techSkills}
                        </h3>
                        <div className="space-y-8">
                            {skillsData.slice(0, 5).map((skill, index) => (
                                <div key={index} className="group">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="font-bold text-lg dark:text-gray-200">{skill.name}</span>
                                        <span className="text-sm font-medium text-accent dark:text-accent-light">
                                            {skill.percentage}
                                        </span>
                                    </div>
                                    <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className={`progress-bar h-full bg-gradient-to-r from-accent to-accent-dark rounded-full w-0`}
                                        >
                                            <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Professional Skills Column */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-righteous mb-8 pb-2 border-b border-gray-300 dark:border-gray-600">
                            <span className="text-accent">#</span> {profskills}
                        </h3>
                        <div className="space-y-8">
                            {skillsData.slice(5).map((skill, index) => (
                                <div key={index + 5} className="group">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="font-bold text-lg dark:text-gray-200">{skill.name}</span>
                                        <span className="text-sm font-medium text-accent dark:text-accent-light">
                                            {skill.percentage}
                                        </span>
                                    </div>
                                    <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className={`progress-bar h-full bg-gradient-to-r from-accent to-accent-dark rounded-full w-0`}
                                        >
                                            <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;