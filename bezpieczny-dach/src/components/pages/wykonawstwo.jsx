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
        {/* WZMOCNIONY TYTUŁ DLA MAKSYMALIZACJI CTR */}
        <title>⭐ Usługi Dekarskie Szczecin ✅ Papa | Dachy Płaskie | Remonty Dachów - 518 144 882</title>
        {/* WZMOCNIONY OPIS: Użycie fraz kluczowych i CTA (numeru telefonu) */}
        <meta
          name="description"
          content="Szukasz dekarza w Szczecinie? Oferujemy kompleksowe usługi dekarskie: papa termozgrzewalna, membrany PVC/EPDM, docieplenia i naprawy dachów. Szybka wycena. Zadzwoń: 518 144 882."
        />

        <link rel="canonical" href="https://www.bezpiecznydach.pl/wykonawstwo" />

        {/* STRUKTURA DANYCH LocalBusiness - KLUCZOWE DLA FIRMY LOKALNEJ */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Bezpieczny Dach - Usługi Dekarskie Szczecin",
            "image": "https://www.bezpiecznydach.pl/logo.webp", 
            "telephone": "+48518144882",
            "url": "https://www.bezpiecznydach.pl/uslugi-dekarskie-szczecin",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Szczecin",
              "addressRegion": "Zachodniopomorskie",
              "addressCountry": "PL"
            },
            "openingHours": "Mo-Su 07:00-20:00",
            "priceRange": "$$",
            "description": "Profesjonalne usługi dekarskie w Szczecinie. Dachy płaskie, papa termozgrzewalna i docieplenia.",
            "serviceType": ["Usługi dekarskie", "Papa termozgrzewalna", "Docieplanie dachów"]
          }
        `}
        </script>
      </Helmet>

      <Header />

      <div className="wykonawstwo-container">
        {/* HERO */}
        <section className="hero-sectionW">
          <div className="hero-contentW">
            <h1>Profesjonalne Usługi Dekarskie w Szczecinie – Dachy Płaskie i Papa Termozgrzewalna</h1>
            <p className="hero-subtitle">Kompleksowe usługi dekarskie w Szczecinie i okolicach</p>
            <div className="hero-cta">
              <a href="tel:+48518144882" className="cta-button">
                ZADZWOŃ PO DARMOWĄ WYCENĘ: 518 144 882
              </a>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="intro-dekarskie">
          <div className="intro-content">
            <h2>Twoi zaufani dekarze w Szczecinie – kompleksowe remonty i montaż dachów</h2>
            <p>
              Jako specjaliści od <strong>usług dekarskich w Szczecinie</strong> i okolicach, koncentrujemy się na
              zapewnieniu <strong>szczelnych i trwałych dachów</strong>. Nasze 15-letnie doświadczenie obejmuje zarówno{' '}
              <strong>montaż papy termozgrzewalnej</strong> i nowoczesnych <strong>membran PVC/EPDM</strong> na{' '}
              <strong>dachach płaskich</strong>, jak i zaawansowane <strong>docieplenia</strong>. Potrzebujesz szybkiej{' '}
              <strong>naprawy dachu w Szczecinie</strong>? Zapewniamy fachową diagnozę przecieków i ekspresowe usunięcie
              awarii. Wybierając nas, stawiasz na najwyższą jakość i gwarancję bezpieczeństwa Twojego dachu.
            </p>
            <div className="intro-highlights">
              <span>✅ Papa Termozgrzewalna</span>
              <span>✅ Docieplanie Dachów</span>
              <span>✅ Naprawa Przecieków Szczecin</span>
              <span>✅ Bezpłatna Wycena</span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services-overview">
          <h2>Usługi dekarskie Szczecin – kompleksowa oferta</h2>
          <p className="section-intro">
            Jako doświadczona firma dekarska z wieloletnią tradycją, oferujemy kompleksowe rozwiązania dla Twojego dachu:
          </p>
          <div className="services-grid">
            <div className="service-card">
              <h3>Pokrycia dachowe</h3>
              <ul>
                <li>Papa termozgrzewalna</li>
                <li>PVC</li>
                <li>EPDM</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Termoizolacje</h3>
              <ul>
                <li>Docieplanie poddaszy</li>
                <li>Izolacja styropianem</li>
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

        {/* TECHNOLOGIES */}
        <section className="technologies-section">
          <h2>Materiały i technologie dekarskie – ICOPAL, ROCKWOOL, FAKRO</h2>
          <p className="section-intro">Pracujemy wyłącznie na materiałach renomowanych producentów:</p>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">🏆</div>
              <h3>ICOPAL</h3>
              <p className="tech-description">Wiodący producent papy w Polsce</p>
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

        {/* PROCESS */}
        <section className="process-section">
          <h2>Etapy realizacji usług dekarskich w Szczecinie</h2>
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

        {/* ADVANTAGES */}
        <section className="advantages-section">
          <h2>Dekarze Szczecin – dlaczego warto wybrać naszą firmę</h2>
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
              <h3>Gwarancja jakości</h3>
              <p>Nasza firma gwarantuje zadowolenie klienta</p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects-showcase">
          <h2>Przykłady realizacji dachów płaskich i skośnych w Szczecinie</h2>
          <p className="section-intro">
            Zobacz przykłady naszych prac w Szczecinie i województwie zachodniopomorskim:
          </p>
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
          <Link to="/realizacje" className="see-more-button">
            ZOBACZ WIĘCEJ REALIZACJI →
          </Link>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>ZAINTERESOWANY NASZYMI USŁUGAMI?</h2>
            <p>Skontaktuj się z nami, aby omówić Twój projekt i otrzymać bezpłatną wycenę</p>
            <div className="cta-buttons">
              <a href="tel:+48518144882" className="cta-button-primary">
                ZADZWOŃ: 518 144 882
              </a>
              <Link to="/#contact" className="cta-button-secondary">
                FORMULARZ KONTAKTOWY
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Wykonawstwo;
