
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './index.jsx';
import Header from './componentes/header.jsx';
import Footer from './componentes/Footer.jsx';
import Aboutme from './aboutMe.jsx';


function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/aboutMe" element={<Aboutme />} />
       

      </Routes>
      <Footer />

    </Router>
  )
}

export default App;