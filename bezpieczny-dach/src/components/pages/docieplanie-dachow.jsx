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
    "name": "Bezpieczny Dach Szczecin - Docieplenia Dachów", // WZMOCNIENIE SEO
    "image": "https://www.bezpiecznydach.pl/favicon.ico",
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
    "serviceType": ["Docieplanie dachów", "Termoizolacja dachu płaskiego", "Montaż płyt PIR"] // WZMOCNIENIE SEO
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
      {/* [SEO WZMOCNIENIE] Ulepszony Title: Dodano frazy kluczowe (Szczecin, PIR, Styropian) */}
      <title>Docieplanie Dachów Szczecin ✅ Wełna, PIR, Styropian | Najlepsza Izolacja ☎ 518 144 882</title>
     
      {/* [SEO WZMOCNIENIE] Ulepszony Description: Więcej szczegółów o materiałach i korzyściach */}
      <meta 
         name="description" 
         content="Profesjonalne docieplanie dachów płaskich w Szczecinie - wełna mineralna, płyty PIR, styropian. Oszczędź energię i zwiększ komfort. Darmowa wycena. Zadzwoń: 518 144 882" 
      />
        <link rel="canonical" href="https://www.bezpiecznydach.pl/docieplanie-dachow" />

        {/* POPRAWIONA IMPLEMENTACJA JSON-LD: używamy dangerouslySetInnerHTML z JSON.stringify */}
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
            <h1>DOCIEPLANIE DACHÓW PŁASKICH W SZCZECINIE</h1>
            <p className="hero-subtitle">Zwiększ komfort i zmniejsz rachunki za ogrzewanie nawet o 30%!</p>
            <div className="hero-cta">
              <a href="tel:+48518144882" className="cta-button">ZADZWOŃ: 518 144 882</a>
            </div>
          </div>
        </section>

        {/* Dlaczego warto */}
        <section className="benefits-section">
          <h2>DLACZEGO WARTO ZAINWESTOWAĆ W TERMIOZOLACJĘ DACHU?</h2>
          <div className="benefits-grid">
            
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <h3>Oszczędność energii</h3>
              <p>Nawet do 30% mniejsze straty ciepła przez dach, co znacząco obniża koszty ogrzewania.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <h3>Komfort całoroczny</h3>
              <p>Latem chłodniej, zimą cieplej - stabilna temperatura przez cały rok.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <h3>Ochrona konstrukcji</h3>
              <p>Zapobiega zawilgoceniu i rozwojowi pleśni, przedłużając żywotność dachu.</p>
            </div>
          </div>
        </section>

        {/* Rodzaje izolacji */}
        <section className="insulation-types">
          <h2>IZOLACJA DACHÓW PŁASKICH: WEŁNA, PŁYTY PIR, STYROPIAN</h2>
          <div className="types-grid">
            <div className="type-card">
              <img src={wełna} alt="Docieplenie dachu wełną mineralną w Szczecinie i w okolicach" />
              <h3>WEŁNA MINERALNA</h3>
              <ul>
                <li>Doskonała izolacja akustyczna</li>
                <li>Niepalna - klasa A1</li>
                <li>Paroprzepuszczalna</li>
              
              </ul>
            </div>
            <div className="type-card">
              <img src={pir} alt="Płyty PIR do docieplenia dachów w Szczecinie i w okolicach" />
              <h3>PŁYTY PIR</h3>
              <ul>
                <li>Najwyższa izolacyjność termiczna</li>
                <li>Cienka warstwa - do 2x cieńsza niż wełna</li>
                <li>Odporna na wilgoć</li>
               
              </ul>
            </div>
            <div className="type-card">
             <img src={pur} alt="Styropian do izolacji dachów płaskich Szczecin i w okolicach"  />
              <h3>STYROPIAN (NA DACHY PŁASKIE)</h3>
      <ul>
        <li>Dobry stosunek ceny do jakości</li>
        <li>Odporny na wilgoć i ściskanie</li>
        <li>Popularny wybór przy dachach płaskich</li>
      </ul>
    </div>
          </div>
        </section>


        <section className="contact-cta">
          <h2>ZADZWOŃ PO DARMOWĄ WYCENĘ DOCIEPLENIA DACHU!</h2>
          <p>Specjalista od dociepleń odpowie na wszystkie pytania</p>
          <div className="cta-buttons">
            <a href="tel:+48518144882" className="cta-button-primary">ZADZWOŃ: 518 144 882</a>
            <Link to="/#contact" className="cta-button-secondary">FORMULARZ KONTAKTOWY</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default DocieplanieDachow;