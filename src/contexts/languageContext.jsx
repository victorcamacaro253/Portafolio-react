// LanguageContext.js
import React, { createContext, useEffect, useState } from 'react';
import texts from '../data/texts.json';


export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es'); // Idioma por defecto

    useEffect(() => {
        const getUserLanguage = async () => {
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                let userLang = 'es';

                // Obtener información del continente usando el código del país
                const continentResponse = await fetch(`https://restcountries.com/v3.1/alpha/${data.country}`);
                console.log(continentResponse)
                const continentData = await continentResponse.json();
                const continent = continentData[0]?.region; // Obtiene el continente
                const countryName = continentData[0]?.name.common; // Nombre del país

                if (data.country === 'US' || (continent === 'Europe' && countryName !== 'Spain') || continent === 'Asia' || continent === 'Africa' || continent === 'Oceania') {
                    userLang = 'en';
                }

                setLanguage(userLang);
                console.log("Idioma detectado:", userLang);
            } catch (error) {
                console.error("Error fetching the location data:", error);
                setLanguage('es'); // Fallback a español
            }
        };

        getUserLanguage();
    }, []);

    const value = {
        language,
        texts, // Agrega los textos aquí
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};


export default LanguageProvider;