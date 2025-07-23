import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/index'; // .tsx extension is optional in imports
import Header from './components/header';
import Footer from './components/Footer';
import Aboutme from './pages/aboutMe';
import ProjectDetail from './pages/ProjectDetail';
import LanguageProvider from './context/languageContext';
import Websites from './pages/Websites';
import WebsiteDetail from './pages/WebsiteDetail';
import ProjectsPage from './pages/projectsPage';

function App() {
  return (
    <Router>
      <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
             <Route path="/websites" element={<Websites />} />
             <Route path="/websites/:id" element={<WebsiteDetail />} />
            <Route path="/projects" element={<ProjectsPage />} />

        
          </Routes>
        </main>
        <Footer />
      </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;