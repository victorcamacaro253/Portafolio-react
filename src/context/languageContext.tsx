import { createContext, useEffect, useState, useMemo } from 'react';
import texts from '../data/texts.json';
import { Texts } from '../types/type';

interface LanguageContextType {
  language: string;
  texts: Texts;
  setLanguage?: (lang: string) => void; // Optional if you want to allow language switching
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  texts: texts as Texts,
});

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState('es');

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(() => ({
    language,
    texts: texts as Texts, // This should be filtered by language
    setLanguage, // Only include if you want to allow language switching
  }), [language]);

  useEffect(() => {
    const getUserLanguage = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        let userLang = 'es';

        const continentResponse = await fetch(`https://restcountries.com/v3.1/alpha/${data.country}`);
        const continentData = await continentResponse.json();
        const continent = continentData[0]?.region;
        const countryName = continentData[0]?.name.common;

        if (data.country === 'US' || 
            (continent === 'Europe' && countryName !== 'Spain') || 
            continent === 'Asia' || 
            continent === 'Africa' || 
            continent === 'Oceania') {
          userLang = 'en';
        }

        setLanguage(userLang);
      } catch (error) {
        console.error("Error fetching the location data:", error);
        setLanguage('es');
      }
    };

    getUserLanguage();
  }, []);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;