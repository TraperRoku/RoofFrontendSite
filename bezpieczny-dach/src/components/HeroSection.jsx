import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <>
      {/* Pasek telefonu widoczny od razu na mobile */}
      <div className="mobile-top-phone-bar">
        <a href="tel:+48518144882">
          📞 Zadzwoń teraz: <strong>518 144 882</strong>
        </a>
      </div>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Lokalny, doświadczony zespół<br />Szczecin, Goleniów,<br />Stargard i okolice</h1>
          <h1>
            <span className="highlight-seo">Dekarz Szczecin:</span>
            <br />
            Dachy płaskie
            <br />
            Papa termozgrzewalna
            <br />
            EPDM i PVC
          </h1>

          {/* Numer widoczny w hero na mobile */}
          <div className="hero-phone-mobile">
            <a href="tel:+48518144882">📞 518 144 882 — Zadzwoń bezpłatnie</a>
          </div>

          <div className="hero-buttons">
            <a href="#services" className="hero-btn-primary">
              Poznaj naszą ofertę
            </a>
            <a href="#contact" className="hero-btn-secondary">
              Porozmawiaj z ekspertem
            </a>
          </div>
        </div>
      </section>

      {/* Stały pasek dolny — "Zadzwoń" na mobile */}
      <div className="mobile-bottom-bar">
        <a href="tel:+48518144882" className="mobile-bottom-call">
          📞 Zadzwoń: 518 144 882
        </a>
        <a href="#contact" className="mobile-bottom-contact">
          Napisz
        </a>
      </div>
    </>
  );
}

export default HeroSection;