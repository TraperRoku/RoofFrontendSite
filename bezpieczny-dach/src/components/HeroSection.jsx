import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
       <p>Lokalny, Doświadczony Zespół - Szczecin i Okolice</p>
      <h1>
        <span className="highlight-seo">DEKARZ SZCZECIN:</span> 
        <br />
        DACHY PŁASKIE,
        <br />
        PAPA TERMOZGRZEWALNA
        <br />
        I GWARANCJA SZCZELNOŚCI
      </h1>
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