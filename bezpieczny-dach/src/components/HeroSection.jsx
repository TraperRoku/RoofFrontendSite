import React from 'react';
import './HeroSection.css';
import PhoneLink from './PhoneLink'; 

function HeroSection() {
  return (
    <>
     <div className="mobile-top-phone-bar">
        <PhoneLink>  {/* ← było: <a href="tel:+48518144882"> */}
          📞 Zadzwoń teraz: <strong>518 144 882</strong>
        </PhoneLink>
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
            <PhoneLink>
              📞 518 144 882 — Zadzwoń bezpłatnie
            </PhoneLink>
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
        <PhoneLink className="mobile-bottom-call">  {/* ← było: <a href="tel:..." className="mobile-bottom-call"> */}
          📞 Zadzwoń: 518 144 882
        </PhoneLink>
        <a href="#contact" className="mobile-bottom-contact">
          Napisz
        </a>
      </div>
    </>
  );
}

export default HeroSection;