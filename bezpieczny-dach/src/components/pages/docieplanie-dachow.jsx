import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../Header'
import Footer from '../footer'
import '../pages/DocieplanieDachow.css';

import wełna from '../photos/woolMineral.jpg';
import pir from '../photos/plytyPir.jpg';
import pur from '../photos/ster.webp';

// Definicja danych strukturalnych JSON-LD
const localBusinessSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Docieplanie Dachów - Bezpieczny Dach Szczecin",
    "image": "https://www.bezpiechnydach.pl/favicon.ico",
    "telephone": "+48518144882",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Szczecin",
        "addressRegion": "Zachodniopomorskie"
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        "opens": "07:00",
        "closes": "18:00"
    },
    "priceRange": "$$",
    "serviceType": ["Docieplanie dachów płaskich", "Termoizolacja dachu", "Montaż płyt izolacyjnych"]
});

const breadcrumbSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Strona Główna",
            "item": "https://www.bezpiecznydach.pl/"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Docieplanie Dachów",
            "item": "https://www.bezpiecznydach.pl/docieplanie-dachow"
        }
    ]
});


function DocieplanieDachow() {
  return (
    <>
      <Helmet>
      <title>Docieplanie dachów Szczecin i Gołeniów — wełna, PIR, styropian, termoizolacja | Bezpieczny Dach</title>
     
      <meta 
         name="description" 
         content="Specjalizujemy się w docieplaniu dachów płaskich w Szczecinie i Gołeniowie. Wełna mineralna, płyty PIR, styropian. Zmniejsz koszty ogrzewania i poprawiaj komfort. Profesjonalne wykonawstwo, darmowa wycena — 518 144 882" 
      />
        <link rel="canonical" href="https://www.bezpiecznydach.pl/docieplanie-dachow" />        {/* POPRAWIONA IMPLEMENTACJA JSON-LD: używamy dangerouslySetInnerHTML z JSON.stringify */}
        <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ __html: localBusinessSchema }} 
        />
        <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} 
        />
        
      </Helmet>

      <Header />

      <main className="docieplanie-container">
        {/* Sekcja hero */}
        <section className="hero-sectionD">
          <div className="hero-contentD">
            <h1>Docieplanie dachów płaskich w Szczecinie</h1>
            <p className="hero-subtitle">Zmniejsz koszty ogrzewania i zwiększ komfort całoroczny</p>
            <div className="hero-cta">
              <a href="tel:+48518144882" className="cta-button">Zadzwoń: 518 144 882</a>
            </div>
          </div>
        </section>

        {/* Dlaczego warto */}
        <section className="benefits-section">
          <h2>Korzyści z docieplenia dachu</h2>
          <div className="benefits-grid">
            
            <div className="benefit-card">
              <div className="benefit-icon" aria-hidden="true"></div>
              <h3>Zmniejszenie strat ciepła</h3>
              <p>Dach to miejsce, przez które ucieka do 30% ciepła. Profesjonalna izolacja znacznie obniża koszty ogrzewania.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon" aria-hidden="true"></div>
              <h3>Komfort mieszkania</h3>
              <p>Stabilna temperatura przez cały rok – latem chłodniej, zimą cieplej. Mniej wilgoci i problemów z zawilgoceniem.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon" aria-hidden="true"></div>
              <h3>Ochrona budynku</h3>
              <p>Prawidłowa termoizolacja zapobiega zawilgoceniu, rozwojowi pleśni i wydłuża żywotność konstrukcji dachu.</p>
            </div>
          </div>
        </section>

        {/* Rodzaje izolacji */}
        <section className="insulation-types">
          <h2>Materiały izolacyjne do dachów płaskich</h2>
          <div className="types-grid">
            <div className="type-card">
              <img src={wełna} alt="Wełna mineralna do izolacji dachów płaskich" />
              <h3>Wełna mineralna</h3>
              <ul>
                <li>Doskonała izolacja akustyczna</li>
                <li>Niepalna – klasa A1</li>
                <li>Paroprzepuszczalna, pozwala dachu "oddychać"</li>
              </ul>
            </div>
            <div className="type-card">
              <img src={pir} alt="Płyty PIR do izolacji dachów płaskich" />
              <h3>Płyty PIR</h3>
              <ul>
                <li>Najwyższa izolacyjność termiczna</li>
                <li>Cienka warstwa – do 2 razy cieńsza niż wełna</li>
                <li>Odporna na wilgoć i przepadającemu czasowi</li>
              </ul>
            </div>
            <div className="type-card">
             <img src={pur} alt="Styropian do izolacji dachów płaskich"  />
              <h3>Styropian – ekonomiczny wybór</h3>
      <ul>
        <li>Dobry stosunek ceny do jakości</li>
        <li>Odporny na wilgoć i ściskanie</li>
        <li>Popularny materiał dla dachów płaskich</li>
      </ul>
    </div>
          </div>
        </section>


        <section className="contact-cta">
          <h2>Zamów darmową wycenę docieplenia dachu</h2>
          <p>Nasz specjalista odpowie na wszystkie Twoje pytania</p>
          <div className="cta-buttons">
            <a href="tel:+48518144882" className="cta-button-primary">Zadzwoń: 518 144 882</a>
            <Link to="/#contact" className="cta-button-secondary">Formularz kontaktowy</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default DocieplanieDachow;