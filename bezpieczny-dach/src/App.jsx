import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Service from './components/Service';
import ContactSection from './components/ContactSection';
import Realization from './components/Realization';
import RepairSection from './components/RepairSection';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Service />
      <Realization/>
      <RepairSection />
      <ContactSection />
    
    </div>
  );
}

export default App;
