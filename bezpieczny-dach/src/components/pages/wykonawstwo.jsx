import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import './Wykonawstwo.css';
import Footer from '../footer';
import { Link } from 'react-router-dom';

import jeden from '../photos_to_deploy/2.webp';
import dwa from '../photos_to_deploy/3.webp';
import trzy from '../photos_to_deploy/7.webp';

const Wykonawstwo = () => {
  return (
    <>
      <Helmet>
        <title>Profesjonalne Usługi Dekarskie Szczecin | Bezpieczny Dach ☎ 518 144 882</title>
        <meta 
          name="description" 
          content="Kompleksowe usługi dekarskie w Szczecinie i okolicach. Pokrycia dachowe, termoizolacje, naprawy dachów. Autoryzowani wykonawcy najlepszych marek." 
        />
        <link rel="canonical" href="https://www.bezpiecznydach.pl/wykonawstwo" />
      </Helmet>

      <Header />

      <div className="wykonawstwo-container">
        
        <section className="hero-sectionW">
          <div className="hero-contentW">
            <h1>PROFESJONALNE WYKONAWSTWO DACHOWE</h1>
            <p className="hero-subtitle">Kompleksowe usługi dekarskie w Szczecinie i okolicach</p>
            <div className="hero-cta">
              <a href="tel:+48518144882" className="cta-button">ZADZWOŃ: 518 144 882</a>
            </div>
          </div>
        </section>

        <section className="services-overview">
          <h2>PEŁEN ZAKRES USŁUG DEKARSKICH</h2>
          <p className="section-intro">Jako doświadczona firma dekarska z wieloletnią tradycją, oferujemy kompleksowe rozwiązania dla Twojego dachu:</p>
          <div className="services-grid">
            <div className="service-card">
              <h3>Pokrycia dachowe</h3>
              <ul>
                <li>Dachówka ceramiczna i betonowa</li>
                <li>Blachodachówka i blacha trapezowa</li>
                <li>Pokrycia z gontu bitumicznego</li>
                <li>Dachy płaskie - PVC, EPDM</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Termoizolacje</h3>
              <ul>
                <li>Docieplanie poddaszy</li>
                <li>Izolacje pianą PUR</li>
                <li>Systemy z wełny mineralnej</li>
                <li>Izolacje nakrokwiowe</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Naprawy i renowacje</h3>
              <ul>
                <li>Usuwanie przecieków</li>
                <li>Wymiana poszycia</li>
                <li>Renowacja starych dachów</li>
                <li>Konserwacja dachów</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="technologies-section">
          <h2>PARTNERZY TECHNOLOGICZNI</h2>
          <p className="section-intro">Pracujemy wyłącznie na materiałach renomowanych producentów:</p>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">🏆</div>
              <h3>BRAAS</h3>
              <p className="tech-description">Wiodący producent dachówek w Polsce</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">🛡️</div>
              <h3>RHEINZINK</h3>
              <p className="tech-description">Innowacyjne pokrycia z tytan-cynku</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">⚡</div>
              <h3>ROCKWOOL</h3>
              <p className="tech-description">Wełna mineralna najwyższej jakości</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">🔧</div>
              <h3>FAKRO</h3>
              <p className="tech-description">Nowoczesne okna dachowe</p>
            </div>
          </div>
        </section>

        <section className="process-section">
          <h2>JAK PRACUJEMY?</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Bezpłatna wycena</h3>
              <p>Dokładna ocena stanu dachu i przygotowanie oferty</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Projekt i materiały</h3>
              <p>Dobór optymalnych rozwiązań i zamówienie materiałów</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Realizacja</h3>
              <p>Profesjonalny montaż przez wykwalifikowanych dekarzy</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Odbiór i gwarancja</h3>
              <p>Końcowy odbiór i przekazanie dokumentów gwarancyjnych</p>
            </div>
          </div>
        </section>

        <section className="advantages-section">
          <h2>DLACZEGO WARTO NAM ZAUFAĆ?</h2>
          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon">🏅</div>
              <h3>Doświadczenie</h3>
              <p>Ponad 15 lat na rynku usług dekarskich</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">📝</div>
              <h3>Certyfikaty</h3>
              <p>Autoryzowani wykonawcy wiodących marek</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">🛠️</div>
              <h3>Fachowość</h3>
              <p>Wykwalifikowani dekarze z uprawnieniami</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">💰</div>
              <h3>Gwarancja</h3>
              <p>Długoletnia gwarancja na wykonane prace</p>
            </div>
          </div>
        </section>

        <section className="projects-showcase">
          <h2>NASZE REALIZACJE</h2>
          <p className="section-intro">Zobacz przykłady naszych prac w Szczecinie i województwie zachodniopomorskim:</p>
          <div className="projects-grid">
            <div className="project-card">
  <img src={jeden} alt="Realizacja 1 - Dach" className="project-image" />
</div>
            <div className="project-card">
  <img src={dwa} alt="Realizacja 2 - Dach" className="project-image" />
</div>
            <div className="project-card">
  <img src={trzy} alt="Realizacja 3 - Dach" className="project-image" />
</div>
          </div>
          <Link to="/realizacje" className="see-more-button">ZOBACZ WIĘCEJ REALIZACJI →</Link>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>ZAINTERESOWANY NASZYMI USŁUGAMI?</h2>
            <p>Skontaktuj się z nami, aby omówić Twój projekt i otrzymać bezpłatną wycenę</p>
            <div className="cta-buttons">
              <a href="tel:+48518144882" className="cta-button-primary">ZADZWOŃ: 518 144 882</a>
              <Link to="/kontakt" className="cta-button-secondary">FORMULARZ KONTAKTOWY</Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Wykonawstwo;