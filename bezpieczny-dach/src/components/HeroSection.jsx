import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
      <p>Budujemy i naprawiamy dachy</p>
      <h1>Pełna oferta <br />usług dekarskich <br />dla Twojego domu</h1>
            <div className="hero-buttons">
            <a href="#services">
            <button className="btn-primary">Poznaj naszą ofertę</button>
            </a>
          
            <a href="#contact">
            <button className="btn-secondary">Porozmawiaj z ekspertem</button>
            </a>
        </div>
        
      
      </div>
    </section>
  );
}

export default HeroSection;