import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

function Curriculum() {
  const { language, texts } = useContext(LanguageContext);
  const { 
    title, education, experience,
    carreer, university, carreerDescription, schoolDegree, school,
    schoolDegreeDescription, frontDev, htmlCssJavascript, htmlCssJavascriptYear,
    frontDevDescription, systemDev, systemDevYear, analysis, analysisDescription,
    BackDev, nodejs, BackDevYear, backDevDescription 
  } = texts.curriculum[0][language] || texts.curriculum[0]['es'];

  return (
    <section 
      id="Curriculum" 
      className="py-16 px-4 bg-background-1 dark:bg-dark-background-1 text-white dark:text-dark-text-default"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-righteous text-center text-text-light dark:text-text-dark py-8 mb-12 relative">
          {title}
          <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent rounded-full"></span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Education Column */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-righteous mb-8 pb-2 border-b border-gray-700 dark:border-gray-600">
              <span className="text-accent">#</span><span className="text-text-light dark:text-text-dark"> {education}</span>
            </h3>
            
            <div className="relative pl-8 md:pl-12 space-y-10">
              {/* Vertical line with subtle gradient */}
              <div className="absolute left-0 md:left-6 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-gray-500 to-transparent dark:via-gray-400 rounded-full"></div>
              
              {/* Education Item 1 */}
              <div className="relative group">
                <div className="absolute -left-8 md:-left-12 top-6 w-4 h-4 bg-accent rounded-full border-4 border-background-1 dark:border-dark-background-1 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-accent/30 z-10"></div>
                <div className="bg-background-3 dark:bg-gray-900/70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300  relative overflow-hidden backdrop-blur-sm">
                  {/* Animated glow effect */}
                  <div className="absolute -left-1 top-6 w-0.5 h-16 bg-accent rounded-full opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:h-20"></div>
                  <h4 className="text-xl font-bold mb-1 text-text-light dark:text-text-dark">{carreer}</h4>
                  <span className="block text-accent text-lg font-bold mb-1">{university}</span>
                  <span className="block text-gray-400 dark:text-gray-500 text-sm mb-3 font-mono">2024</span>
                  <p className="text-text-light dark:text-text-dark leading-relaxed">{carreerDescription}</p>
                </div>
              </div>
              
              {/* Education Item 2 */}
              <div className="relative group">
                <div className="absolute -left-8 md:-left-12 top-6 w-4 h-4 bg-accent rounded-full border-4 border-background-1 dark:border-dark-background-1 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-accent/30 z-10"></div>
                <div className="bg-background-3 dark:bg-gray-900/70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300  dark:hover:bg-gray-900/90 relative overflow-hidden backdrop-blur-sm">
                  <div className="absolute -left-1 top-6 w-0.5 h-16 bg-accent rounded-full opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:h-20"></div>
                  <h4 className="text-xl font-bold mb-1 text-text-light dark:text-text-dark">{schoolDegree}</h4>
                  <span className="block text-accent text-lg font-bold mb-1">{school}</span>
                  <span className="block text-gray-400 dark:text-gray-500 text-sm mb-3 font-mono">2017</span>
                  <p className="text-text-light dark:text-text-dark leading-relaxed">{schoolDegreeDescription}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Column */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-righteous mb-8 pb-2 border-b border-gray-700 dark:border-gray-600">
              <span className="text-accent">#</span> <span className="text-text-light dark:text-text-dark">{experience}</span>
            </h3>
            
            <div className="relative pr-8 md:pr-12 space-y-10">
              {/* Vertical line with subtle gradient */}
              <div className="absolute right-0 md:right-6 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-gray-500 to-transparent dark:via-gray-400 rounded-full"></div>
              
              {/* Experience Item 1 */}
              <div className="relative group ">
                <div className="absolute -right-8 md:-right-12 top-6 w-4 h-4 bg-accent rounded-full border-4 border-background-1 dark:border-dark-background-1 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-accent/30 z-10"></div>
                <div className="bg-background-3 dark:bg-gray-900/70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300  dark:hover:bg-gray-900/90 relative overflow-hidden backdrop-blur-sm">
                  <div className="absolute -right-1 top-6 w-0.5 h-16 bg-accent rounded-full opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:h-20"></div>
                  <h4 className="text-xl font-bold mb-1 text-text-light dark:text-text-dark">{frontDev}</h4>
                  <span className="block text-accent text-lg font-bold mb-1">{htmlCssJavascript}</span>
                  <span className="block text-gray-400 dark:text-gray-500 text-sm mb-3 font-mono">{htmlCssJavascriptYear}</span>
                  <p className="text-text-light dark:text-text-dark leading-relaxed">{frontDevDescription}</p>
                </div>
              </div>
              
              {/* Experience Item 2 */}
              <div className="relative group">
                <div className="absolute -right-8 md:-right-12 top-6 w-4 h-4 bg-accent rounded-full border-4 border-background-1 dark:border-dark-background-1 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-accent/30 z-10"></div>
                <div className="bg-background-3  dark:bg-gray-900/70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300  dark:hover:bg-gray-900/90 relative overflow-hidden backdrop-blur-sm">
                  <div className="absolute -right-1 top-6 w-0.5 h-16 bg-accent rounded-full opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:h-20"></div>
                  <h4 className="text-xl font-bold mb-1 text-text-light dark:text-text-dark">{BackDev}</h4>
                  <span className="block text-accent text-lg font-bold mb-1">{nodejs}</span>
                  <span className="block text-gray-400 dark:text-gray-500 text-sm mb-3 font-mono">{BackDevYear}</span>
                  <p className="text-text-light dark:text-text-dark leading-relaxed">{backDevDescription}</p>
                </div>
              </div>
              
              {/* Experience Item 3 */}
              <div className="relative group">
                <div className="absolute -right-8 md:-right-12 top-6 w-4 h-4 bg-accent rounded-full border-4 border-background-1 dark:border-dark-background-1 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-accent/30 z-10"></div>
                <div className="bg-background-3  dark:bg-gray-900/70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300  dark:hover:bg-gray-900/90 relative overflow-hidden backdrop-blur-sm">
                  <div className="absolute -right-1 top-6 w-0.5 h-16 bg-accent rounded-full opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:h-20"></div>
                  <h4 className="text-xl font-bold mb-1 text-text-light dark:text-text-dark">{systemDev}</h4>
                  <span className="block text-accent text-lg font-bold mb-1">{analysis}</span>
                  <span className="block text-gray-400 dark:text-gray-500 text-sm mb-3 font-mono">{systemDevYear}</span>
                  <p className="text-text-light dark:text-text-dark leading-relaxed">{analysisDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Curriculum;