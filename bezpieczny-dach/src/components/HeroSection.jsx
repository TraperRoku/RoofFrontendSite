import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section id="home" className="hero">
            <div className="hero-content">
             <h1>Lokalny, doświadczony zespół <br/> Szczecin, Goleniów, <br/> Stargard i okolice</h1>
            <h1>
              <span className="highlight-seo">Dekarz Szczecin:</span>
              <br />
              Dachy płaskie
        <br />
              Papa termozgrzewalna
        <br />
              EPDM i PVC
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

      <div className="hero-cta-overlay" aria-hidden="false">
        <a href="tel:+48518144882" className="hero-cta-link" aria-label="Zadzwoń teraz 518 144 882">
          <span className="hero-cta-line1">Chcesz taki dach?</span>
          <span className="hero-cta-line2">Zadzwoń teraz: 518 144 882</span>
        </a>
      </div>

    </section>
  );
}

export default HeroSection;