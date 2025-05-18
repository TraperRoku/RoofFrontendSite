import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Service from './components/Service';
import ContactSection from './components/ContactSection';
import Realization from './components/Realization';
import RepairSection from './components/RepairSection';
import Footer from './components/footer';
import DachyPlaskie from './components/pages/dachy-plaskie';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';


function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); 
      }
    }
  }, [location]);

  return null;
}


function HomePage() {
  return (
    <div>
     
       <Helmet>
       <title>Bezpieczny Dach - Naprawa dachów Szczecin | 15 lat doświadczenia</title>
       <meta 
         name="description" 
         content="Naprawa dachów w Szczecinie i woj. zachodniopomorskim. 15 lat doświadczenia, darmowa wycena. Zadzwoń – działamy też poza regionem!" 
       />
     </Helmet>

     <ScrollToHashElement />
      <Header />
      <HeroSection />
      <Service />
      <Realization/>
      <RepairSection />
      <ContactSection />
      <Footer></Footer>
    
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/dachy-plaskie" element={<DachyPlaskie />} />
      </Routes>
    </Router>
  );
}

export default App;
