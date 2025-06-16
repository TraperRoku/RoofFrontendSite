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
import DocieplanieDachow from './components/pages/docieplanie-dachow';
import AboutUs from './components/pages/aboutUs';
import Wykonawstwo from './components/pages/wykonawstwo';
import FAQ from './components/pages/faq';
import Realizacje from './components/pages/realizacje';

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
       <title>Dekarz Szczecin ✔ 15 Lat Doświadczenia | Naprawa Dachów ☎ 518 144 882</title>
      <meta name="description" content="Profesjonalne usługi dekarskie w Szczecinie i okolicach. Specjalizujemy się w dachach płaskich - papa, EPDM, PVC. Darmowa wycena, gwarancja jakości. Zadzwoń!"/>
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
        <Route path="/docieplanie-dachow" element={<DocieplanieDachow />} />
         <Route path="/o-nas" element={<AboutUs />} />
         <Route path="/uslugi-dekarskie-szczecin" element={<Wykonawstwo />} />
        <Route path="/baza-wiedzy" element={<FAQ />} />
         <Route path="/realizacje" element={<Realizacje />} />

      </Routes>
    </Router>
  );
}

export default App;
