import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import './Wykonawstwo.css';

const Wykonawstwo = () => {
  return (
    <>
      <Helmet>
        <title>Profesjonalne Docieplanie Dachów Szczecin | ☎ 518 144 882</title>
        <meta 
          name="description" 
          content="Specjalizujemy się w docieplaniu dachów w Szczecinie. Wełna, PIR, piana PUR. Oszczędność energii i większy komfort termiczny." 
        />
        <link rel="canonical" href="https://www.bezpiecznydach.pl/wykonawstwo" />
      </Helmet>

      <Header />

      <div className="wykonawstwo-container">
        
        <section className="hero-sectionW">
          <div className="hero-contentW">
            <h1>PROFESJONALNE WYKONAWSTWO</h1>
            <p className="hero-subtitle">Termo- i hydroizolacje | Pokrycia dachowe | Autoryzowani wykonawcy</p>
            <div className="hero-cta">
              <a href="tel:+48518144882" className="cta-button">ZADZWOŃ: 518 144 882</a>
            </div>
          </div>
        </section>

        <section className="services-overview">
          <h2>KOMPLEKSOWE USŁUGI DEKARSKIE</h2>
          <p>Nasza oferta obejmuje pełne wykonawstwo termo- i hydroizolacji na różnych typach dachów płaskich...</p>
        </section>

        <section className="technologies-section">
          <h2>AUTORYZOWANE TECHNOLOGIE</h2>
          <div className="tech-grid">
            <div className="tech-card"><div className="tech-icon">🏗️</div><h3>BAUDER</h3><p className="tech-description">Systemy dachowe najwyższej jakości z Niemiec</p></div>
            <div className="tech-card"><div className="tech-icon">🛡️</div><h3>VAN BESOUW</h3><p className="tech-description">Holenderskie rozwiązania hydroizolacyjne</p></div>
            <div className="tech-card"><div className="tech-icon">⚡</div><h3>GAMRAT & SIKA</h3><p className="tech-description">Nowoczesne materiały budowlane</p></div>
            <div className="tech-card"><div className="tech-icon">🔧</div><h3>KÖSTER & FATRA</h3><p className="tech-description">Specjalistyczne systemy izolacyjne</p></div>
          </div>
        </section>

        <section className="applications-section">
          <h2>OBSZARY ZASTOSOWAŃ</h2>
          <div className="applications-grid">
            <div className="application-card"><div className="application-icon">🏭</div><h3>Hale magazynowe</h3><p>Profesjonalne pokrycia dachowe...</p></div>
            <div className="application-card"><div className="application-icon">🏢</div><h3>Hale przemysłowe</h3><p>Wytrzymałe rozwiązania...</p></div>
            <div className="application-card"><div className="application-icon">🛒</div><h3>Centra handlowe</h3><p>Nowoczesne systemy dachowe...</p></div>
            <div className="application-card"><div className="application-icon">🏊</div><h3>Obiekty sportowe</h3><p>Izolacje dla hal sportowych...</p></div>
            <div className="application-card"><div className="application-icon">⛽</div><h3>Stacje paliw</h3><p>Specjalistyczne pokrycia odporne...</p></div>
            <div className="application-card"><div className="application-icon">🏘️</div><h3>Obiekty mieszkalne</h3><p>Kompleksowe rozwiązania dla budownictwa...</p></div>
          </div>
        </section>

        <section className="process-section">
          <h2>PROCES REALIZACJI</h2>
          <div className="process-steps">
            <div className="process-step"><div className="step-number">1</div><h3>Doradztwo techniczne</h3><p>Profesjonalne doradztwo...</p></div>
            <div className="process-step"><div className="step-number">2</div><h3>Wycena i planowanie</h3><p>Szczegółowa wycena...</p></div>
            <div className="process-step"><div className="step-number">3</div><h3>Dostawa materiałów</h3><p>Zapewnienie wysokiej jakości materiałów...</p></div>
            <div className="process-step"><div className="step-number">4</div><h3>Montaż i wykonanie</h3><p>Profesjonalne wykonanie prac...</p></div>
          </div>
        </section>

        <section className="quality-section">
          <h2>KONTROLA JAKOŚCI</h2>
          <div className="quality-content">
            <div className="quality-text">
              <p>...kontrola jakości... odbiór techniczny...</p>
            </div>
            <div className="quality-features">
              <div className="quality-item"><div className="quality-icon">✓</div><div><h3>Wewnętrzny odbiór techniczny</h3><p>Każda realizacja przechodzi przez kontrolę...</p></div></div>
              <div className="quality-item"><div className="quality-icon">🔧</div><div><h3>Serwis gwarancyjny</h3><p>Długoterminowa opieka...</p></div></div>
              <div className="quality-item"><div className="quality-icon">🛡️</div><div><h3>Bezpieczeństwo użytkowania</h3><p>Gwarancja wytrzymałości...</p></div></div>
              <div className="quality-item"><div className="quality-icon">📋</div><div><h3>Wysokie standardy</h3><p>Zgodność z normami...</p></div></div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>POTRZEBUJESZ PROFESJONALNEGO WYKONAWSTWA?</h2>
          <p>Skontaktuj się z nami już dziś...</p>
          <div className="cta-buttons">
            <a href="tel:+48518144882" className="cta-button-primary">ZADZWOŃ: 518 144 882</a>
            <a href="#contact" className="cta-button-secondary">FORMULARZ KONTAKTOWY</a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Wykonawstwo;
