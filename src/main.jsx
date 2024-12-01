import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LanguageProvider from './contexts/languageContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <LanguageProvider>
    <App />
    </LanguageProvider>
  </React.StrictMode>,
)
