import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Header'
import Footer from '../footer'
import './AboutUs.css';
import { Link } from 'react-router-dom';

import zespol1 from '../photos_to_deploy/1.webp';
import zespol2 from '../photos_to_deploy/7.webp';
import zespol3 from '../photos_to_deploy/31.webp';
import certyfikat1 from '../photos/solar.webp';
import narzedzia from '../photos_to_deploy/11.webp';
import realizacja1 from '../photos_to_deploy/18.webp';

// [SEO WZMOCNIENIE] Definicja danych strukturalnych LocalBusiness
const localBusinessSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bezpieczny Dach Szczecin | Profesjonalna Firma Dekarska", // Pełniejsza nazwa dla SEO
    "description": "Profesjonalne usługi dekarskie w Szczecinie. Naprawa, renowacja i montaż dachów płaskich i skośnych. 15 lat doświadczenia.",
    "url": "https://www.bezpiecznydach.pl/o-nas",
    "image": "https://www.bezpiecznydach.pl/favicon.ico",
    "telephone": "+48518144882",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Szczecin",
        "addressRegion": "Zachodniopomorskie"
    },
    "hasService": [
        {
            "@type": "Service",
            "name": "Usługi Dekarskie Szczecin"
        },
        {
            "@type": "Service",
            "name": "Naprawa Dachów Płaskich"
        },
        {
            "@type": "Service",
            "name": "Docieplanie Dachów"
        }
    ]
});

// [SEO WZMOCNIENIE] Definicja danych strukturalnych AboutPage
const aboutPageSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "O firmie dekarskiej Bezpieczny Dach Szczecin",
    "description": "Poznaj 15 lat naszej historii, wartości i specjalizację w dekarstwie w Szczecinie.",
    "mainEntityOfPage": "https://www.bezpiecznydach.pl/o-nas"
});

function ONas(){
  return (
    <>
<Helmet>
  {/* [SEO WZMOCNIENIE] Ulepszony Title: Więcej fraz kluczowych, w tym 'dekarze', 'dekarstwo' */}
  <title>O nas — Bezpieczny Dach Szczecin — dekarze z 15-letnim doświadczeniem</title>
  <meta 
    name="description" 
    content="Poznaj nasz zespół dekarzy w Szczecinie z 15-letnim doświadczeniem. Specjalizacja: dachy płaskie, remonty i docieplanie."
  />
  <link rel="canonical" href="https://www.bezpiecznydach.pl/o-nas" />
  
  {/* POPRAWNA IMPLEMENTACJA JSON-LD: LocalBusiness i AboutPage */}
  <script 
    type="application/ld+json" 
    dangerouslySetInnerHTML={{ __html: localBusinessSchema }} 
  />
  <script 
    type="application/ld+json" 
    dangerouslySetInnerHTML={{ __html: aboutPageSchema }} 
  />

</Helmet>
      
      <Header />
      
      <main className="o-nas-container">
      
        <section className="hero-section">
          <div className="hero-content">
           <h1>O nas — lokalni eksperci dekarscy w Szczecinie</h1>
            <p className="hero-subtitle">15 lat doświadczenia | ponad 1000 zadowolonych klientów | najwyższa jakość usług</p>
            <div className="hero-cta">
              <a href="tel:+48518144882" className="cta-button">Zadzwoń: 518 144 882</a>
            </div>
          </div>
          <div className="hero-image">
            <img src={zespol1} alt="Doświadczony zespół dekarzy w Szczecinie, gotowy do prac dachowych" />
          </div>
        </section>

        <section className="story-section">
         <h2>Nasza historia — 15 lat doświadczenia w dekarstwie</h2>
          <div className="story-content">
            <div className="story-text">
              <p>Od <strong>15 lat</strong> budujemy dachy z myślą o bezpieczeństwie i trwałości. Przez 15 lat rozwijaliśmy nasze umiejętności, zdobywając zaufanie klientów.</p>
              <p>Jesteśmy małą, rodzinną firmą z doświadczeniem zdobywanym przez lata, również za granicą. 
                Stawiamy na rzetelną pracę, solidne wykonanie i partnerskie podejście do klienta
              </p>
            </div>
            <div className="story-image">
              <img src={zespol2} alt="Historia firmy dekarskiej" />
            </div>
          </div>
        </section>

        <section className="process-section">
          <h2>Jak pracujemy?</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Kontakt i Wycena</h3>
              <p>Skontaktuj się z nami telefonicznie lub przez formularz. Umówimy się na bezpłatny przegląd dachu i przygotujemy szczegółową wycenę.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planowanie Prac</h3>
              <p>Ustalamy harmonogram prac dopasowany do Twoich potrzeb. Zabezpieczamy wszystkie materiały i przygotowujemy plac budowy.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Realizacja</h3>
              <p>Wykonujemy prace zgodnie z najwyższymi standardami, zachowując porządek i bezpieczeństwo. Regularnie informujemy o postępach.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Odbiór</h3>
              <p>Po zakończeniu prac przeprowadzamy wspólny odbiór. Wydajemy instrukcję konserwacji dachu.</p>
            </div>
          </div>
        </section>


        <section className="team-section">
          <h2>Poznaj nasz zespół dekarzy w Szczecinie</h2>
          <div className="team-content">
            <div className="team-stats">
              <div className="stat-item">
                <div className="stat-number">15</div>
                <div className="stat-label">lat doświadczenia</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">zadowolonych klientów</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">serwis awaryjny</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">gwarancja jakości</div>
              </div>
            </div>
            <div className="team-image">
              <img src={zespol3} alt="Nasz doświadczony zespół dekarzy" />
            </div>
          </div>
        </section>


        
        <section className="values-section">
          <h2>Nasze wartości</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon" aria-hidden="true"></div>
              <h3>Jakość Przede Wszystkim</h3>
              <p>Używamy wyłącznie materiałów najwyższej jakości od sprawdzonych producentów. Każda realizacja to nasza wizytówka.</p>
            </div>
            <div className="value-card">
              <div className="value-icon" aria-hidden="true"></div>
              <h3>Szybkość Reakcji</h3>
              <p>Awaria dachu? Działamy w 24h! Rozumiemy, że przeciek to sytuacja kryzysowa wymagająca natychmiastowej interwencji.</p>
            </div>
            <div className="value-card">
              <div className="value-icon" aria-hidden="true"></div>
              <h3>Uczciwe Podejście</h3>
              <p>Transparentne wyceny bez ukrytych kosztów. Co ustalamy, tego się trzymamy. Twoje zaufanie to nasz największy kapitał.</p>
            </div>
            <div className="value-card">
              <div className="value-icon" aria-hidden="true"></div>
              <h3>Profesjonalizm</h3>
              <p>Każdy członek zespołu to doświadczony fachowiec. Stale podnosimy kwalifikacje, śledząc najnowsze trendy w dekastwie.</p>
            </div>
          </div>
        </section>

        <section className="certificates-section">
          <h2>CERTYFIKATY I UPRAWNIENIA</h2>
          <div className="certificates-content">
            <div className="certificates-text">
              <p>Posiadamy wszystkie niezbędne certyfikaty i uprawnienia do wykonywania prac dekarskich. Jesteśmy autoryzowanymi wykonawcami wiodących producentów materiałów budowlanych.</p>
       
            </div>
            <div className="certificates-image">
              <img src={certyfikat1} alt="Certyfikaty i uprawnienia firmy dekarskiej" />
            </div>
          </div>
        </section>

        <section className="expertise-section">
           <h2>SPECJALIZACJA DEKARSKA: DACHY PŁASKIE I SKOŚNE</h2>
          <p className="expertise-subtitle">Oferujemy kompleksowe usługi dekarskie na najwyższym poziomie</p>
          
          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>Dachy Płaskie</h3>
              <ul>
                <li>Membrana EPDM i PVC</li>
                <li>Papa termozgrzewalna</li>
                <li>Systemy balastowe</li>
                <li>Dachy zielone i tarasy</li>
              </ul>
            </div>
            <div className="expertise-card">
              <h3>Dachy Skośne</h3>
              <ul>
                <li>Dachówka ceramiczna i betonowa</li>
                <li>Blachodachówka</li>
                <li>Pokrycia z blachy</li>
                <li>Gonty bitumiczne</li>
              </ul>
            </div>
            <div className="expertise-card">
              <h3>Naprawy i Remonty</h3>
              <ul>
                <li>Naprawa przecieków</li>
                <li>Wymiana pokryć</li>
                <li>Renowacja dachów</li>
                <li>Modernizacja izolacji</li>
              </ul>
            </div>
            <div className="expertise-card">
              <h3>Usługi Dodatkowe</h3>
              <ul>
                <li>Oczyszczanie dachów</li>
                <li>Montaż systemów rynnowych</li>
                <li>Instalacja świetlików i wyłazów</li>
                <li>Przygotowanie pod fotowoltaikę</li>
              </ul>
            </div>
          </div>
        </section>

       

        <section className="equipment-section">
          <div className="equipment-content">
            <div className="equipment-image">
              <img src={narzedzia} alt="Profesjonalny sprzęt dekarski" />
            </div>
            <div className="equipment-text">
              <h2>NOWOCZESNY SPRZĘT</h2>
              <p>Inwestujemy w najnowocześniejsze narzędzia i technologie, które pozwalają nam wykonywać prace szybko, bezpiecznie i z najwyższą precyzją.</p>
              <ul>
                <li>Profesjonalne narzędzia do spawania membran</li>
                <li>Systemy bezpieczeństwa pracy na wysokości</li>
                <li>Nowoczesne urządzenia diagnostyczne</li>
                <li>Własny transport i dźwigi</li>
              </ul>
            </div>
          </div>
        </section>

         

        

        {/* <section className="testimonials-section">
          <h2>CO MÓWIĄ O NAS KLIENCI?</h2>
          <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-stars">Ocena: 5/5</div>
              <p>"Szybka reakcja na awarie, profesjonalna obsługa. Po 3 latach dach wciąż bez problemów. Polecam!"</p>
              <div className="testimonial-author">- Anna K., Szczecin</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">Ocena: 5/5</div>
              <p>"Uczciwa wycena, terminowa realizacja. Panowie zostawili po sobie idealny porządek. Bardzo profesjonalnie."</p>
              <div className="testimonial-author">- Marek P., Police</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">Ocena: 5/5</div>
              <p>"Naprawili przeciek w 24h! Świetny kontakt, rzetelne podejście. Będę polecać znajomym."</p>
              <div className="testimonial-author">- Tomasz W., Stargard</div>
            </div>
          </div>
        </section> */}

        <section className="why-us-section">
          <h2>Dlaczego warto nas wybrać?</h2>
          <div className="why-us-content">
            <div className="why-us-image">
              <img src={realizacja1} alt="Nasze realizacje dachowe" />
            </div>
            <div className="why-us-list">
              <div className="why-us-item">
                <div className="why-us-icon" aria-hidden="true"></div>
                <div>
                  <h3>Doświadczenie</h3>
                  <p>15 lat na rynku dekarskim - setki udanych realizacji</p>
                </div>
              </div>
              <div className="why-us-item">
                <div className="why-us-icon" aria-hidden="true"></div>
                <div>
                  <h3>Gwarancja jakości</h3>
                  <p>Długoterminowa gwarancja na materiały i wykonanie</p>
                </div>
              </div>
              <div className="why-us-item">
                <div className="why-us-icon" aria-hidden="true"></div>
                <div>
                  <h3>Dostępność</h3>
                  <p>Serwis awaryjny 24/7 - zawsze możesz na nas liczyć</p>
                </div>
              </div>
              <div className="why-us-item">
                <div className="why-us-icon" aria-hidden="true"></div>
                <div>
                  <h3>Jakość</h3>
                  <p>Tylko sprawdzone materiały od renomowanych producentów</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <h2>Gotowy na współpracę?</h2>
          <p>Skontaktuj się z nami już dziś — otrzymasz bezpłatną wycenę w 24h.</p>
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

export default ONas;