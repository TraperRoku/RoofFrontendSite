import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Service from './components/Service';
import ContactSection from './components/ContactSection';
import Realization from './components/Realization';
import RepairSection from './components/RepairSection';
import Footer from './components/footer';
import DachyPlaskie from './components/pages/dachy-plaskie';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import DocieplanieDachow from './components/pages/docieplanie-dachow';
import AboutUs from './components/pages/aboutUs';
import Wykonawstwo from './components/pages/wykonawstwo';
import FAQ from './components/pages/faq';
import Realizacje from './components/pages/realizacje';
import './App.css'

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); 
      }
    }
  }, [location]);

  return null;
}

// Dodaj nowy komponent z treścią SEO
function SEOContent() {
  return (
    <section className="seo-content" style={{ padding: '60px 20px', backgroundColor: '#f8f9fa' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Sekcja główna - Dekarz Szczecin */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#2c3e50', marginBottom: '20px', textAlign: 'center' }}>
            Profesjonalny Dekarz Szczecin - 15 Lat Doświadczenia
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', textAlign: 'center', marginBottom: '30px', color: '#5a6c7d' }}>
            Jesteśmy nową rodzinną firmą dekarską w Szczecinie z 15 letnim doświadczeniem w zawodzie, specjalizującą się w <strong>dachach płaskich</strong>, 
            <strong> naprawie dachów</strong> i <strong>kompleksowych usługach dekarskich</strong>. 
            Nasz doświadczony zespół dekarzy ze Szczecina realizuje projekty z najwyższą precyzją i dbałością o szczegóły.
          </p>
        </div>

        {/* Grid z usługami */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '50px' }}>
          
          {/* Dachy płaskie */}
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#e74c3c', fontSize: '1.5rem', marginBottom: '15px' }}>
              Dachy Płaskie Szczecin - Papa Termozgrzewalna
            </h3>
            <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
              Wykonujemy <strong>dachy płaskie w Szczecinie</strong> z zastosowaniem najwyższej jakości 
              <strong> papy termozgrzewalnej</strong> i membran EPDM. Nasze <strong>systemy balastowe na dach płaski</strong> 
              zapewniają trwałość na lata.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}> Papa termozgrzewalna Szczecin - najwyższa jakość</li>
              <li style={{ marginBottom: '8px' }}> Systemy na dach płaski - konstrukcja balastowa</li>
              <li style={{ marginBottom: '8px' }}> Dachy zielone Szczecin - ekologiczne rozwiązania</li>
              <li style={{ marginBottom: '8px' }}> Modernizacja dachu płaskiego - kompleksowo</li>
            </ul>
          </div>

          {/* Naprawa dachów */}
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#e74c3c', fontSize: '1.5rem', marginBottom: '15px' }}>
              Naprawa Dachów Szczecin - Szybko i Profesjonalnie
            </h3>
            <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
              Oferujemy <strong>naprawę dachów w Szczecinie</strong> oraz <strong>remont dachu</strong> z wykorzystaniem 
              nowoczesnych technologii. Specjalizujemy się w <strong>naprawie izolacji dachu</strong> i wymianie pokryć.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}> Naprawa izolacji dachu Szczecin - eliminujemy przecieki</li>
              <li style={{ marginBottom: '8px' }}> Wymiana dachu Szczecin - kompleksowe remonty</li>
              <li style={{ marginBottom: '8px' }}> Papa na dach Szczecin - profesjonalny montaż</li>
              <li style={{ marginBottom: '8px' }}> Łaty dach Szczecin - konstrukcje drewniane</li>
            </ul>
          </div>

          {/* Usługi dekarskie */}
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#e74c3c', fontSize: '1.5rem', marginBottom: '15px' }}>
              Usługi Dekarskie Szczecin - Pełen Zakres
            </h3>
            <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
              Jako doświadczeni <strong>dekarze Szczecin</strong> oferujemy kompleksowe <strong>usługi dekarskie</strong> 
              obejmujące wszystkie typy dachów i pokryć. Realizujemy również <strong>docieplanie budynków Szczecin</strong>.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}> Docieplania Szczecin - energooszczędne rozwiązania</li>
              <li style={{ marginBottom: '8px' }}> Papy termozgrzewalne Szczecin - wszystkie typy</li>
              <li style={{ marginBottom: '8px' }}> Systemy rynnowe - montaż i naprawa</li>
              <li style={{ marginBottom: '8px' }}> Przeglądy techniczne dachów</li>
            </ul>
          </div>
        </div>

        {/* Sekcja FAQ */}
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', marginBottom: '50px' }}>
          <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '30px' }}>
            Najczęściej Zadawane Pytania - Dekarz Szczecin
          </h2>
          
          <div style={{ display: 'grid', gap: '20px' }}>
            <div>
              <h4 style={{ color: '#e74c3c', marginBottom: '10px' }}>
                Ile kosztuje papa termozgrzewalna w Szczecinie?
              </h4>
              <p style={{ lineHeight: '1.6' }}>
                Cena papy termozgrzewalnej w Szczecinie zależy od typu membrany i powierzchni dachu. 
                Oferujemy bezpłatną wycenę z dojazdem do klienta.
              </p>
            </div>
            
            <div>
              <h4 style={{ color: '#e74c3c', marginBottom: '10px' }}>
                Jak długo trwa naprawa dachu płaskiego w Szczecinie?
              </h4>
              <p style={{ lineHeight: '1.6' }}>
                Standardowa naprawa dachu płaskiego w Szczecinie trwa 1-3 dni, w zależności od zakresu prac. 
                Modernizacja dachu płaskiego może wymagać więcej czasu.
              </p>
            </div>
            
            <div>
              <h4 style={{ color: '#e74c3c', marginBottom: '10px' }}>
                Jakie systemy balastowe na dach płaski polecacie?
              </h4>
              <p style={{ lineHeight: '1.6' }}>
                Stosujemy sprawdzone systemy balastowe na dach płaski, w tym konstrukcje balastowe z membraną EPDM 
                i PVC. Każdy system dopasowujemy do specyfiki budynku.
              </p>
            </div>
          </div>
         <Link to="/baza-wiedzy" className="see-more-button">ZOBACZ WIĘCEJ PYTAŃ →</Link>
        </div>
       

        {/* Lokalizacje */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>
            Obszar Działania - Dekarze Szczecin i Okolice
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#5a6c7d' }}>
            Nasze usługi dekarskie obejmują <strong>Szczecin</strong> i całe <strong>województwo zachodniopomorskie</strong>. 
            Realizujemy projekty w: Stargardzie, Goleniowie, Gryfinie, Police, Świnoujściu i innych miejscowościach regionu.
          </p>
        </div>

        {/* Gwarancje i certyfikaty */}
        <div style={{ backgroundColor: '#e8f5e8', padding: '30px', borderRadius: '10px', textAlign: 'center' }}>
          <h3 style={{ color: '#27ae60', marginBottom: '15px' }}>
            Gwarancja Jakości - Certyfikowani Dekarze Szczecin
          </h3>
          <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
           
           Wszystkie zlecenia realizujemy z pełnym zaangażowaniem, wykorzystując wyłącznie sprawdzone, certyfikowane materiały najwyższej jakości. Jesteśmy ubezpieczeni i posiadamy wszystkie wymagane certyfikaty.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
            <div>✓ Gwarancja jakości wykonania</div>
            <div>✓ Certyfikowane materiały</div>
            <div>✓ Odpowiedzialność zawodowa</div>
            <div>✓ Darmowa wycena</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Dekarz Szczecin ✔ Papa Termozgrzewalna | Dachy Płaskie ☎ 518 144 882</title>
        <meta name="description" content="Profesjonalny dekarz Szczecin ✔ 15 lat doświadczenia ✔ Papa termozgrzewalna, dachy płaskie, naprawa dachów ✔ Systemy balastowe ✔ Darmowa wycena ☎ 518 144 882"/>
        
        {/* Dodatkowe meta tagi SEO */}
        <meta name="keywords" content="dekarz szczecin, papa termozgrzewalna szczecin, dachy płaskie szczecin, naprawa dachów szczecin, dekarze szczecin, systemy balastowe na dach płaski szczecin, papy termozgrzewalne szczecin, konstrukcja balastowa na dach płaski szczecin, usługi dekarskie szczecin, docieplanie budynków szczecin, naprawa izolacji dachu szczecin, modernizacja dachu płaskiego, papa na dach szczecin, wymiana dachu szczecin, remont dachu szczecin, dachy zielone szczecin, łaty dach szczecin, docieplenia szczecin"/>
        
        {/* Open Graph */}
        <meta property="og:title" content="Dekarz Szczecin - Papa Termozgrzewalna | Dachy Płaskie"/>
        <meta property="og:description" content="Profesjonalny dekarz Szczecin - 15 lat doświadczenia. Papa termozgrzewalna, dachy płaskie, naprawa dachów. Darmowa wycena ☎ 518 144 882"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://bezpiecznydach.pl"/>
        <meta property="og:locale" content="pl_PL"/>
        
        {/* Structured Data - LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Bezpieczny Dach - Dekarz Szczecin",
            "description": "Profesjonalne usługi dekarskie w Szczecinie. Papa termozgrzewalna, dachy płaskie, naprawa dachów.",
            "telephone": "+48518144882",
            "email": "bezpiecznydach@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Mosty 9D",
              "addressLocality": "Mosty",
              "postalCode": "72-132",
              "addressCountry": "PL"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 53.4289,
              "longitude": 14.5530
            },
            "url": "https://bezpiecznydach.pl",
            "priceRange": "$$",
            "openingHours": "Mo-Su 00:00-24:00",
            "areaServed": "Szczecin",
            "serviceType": "Usługi dekarskie",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Usługi dekarskie",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Papa termozgrzewalna Szczecin"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Dachy płaskie Szczecin"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Naprawa dachów Szczecin"
                  }
                }
              ]
            }
          })}
        </script>
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://bezpiecznydach.pl" />
        
        {/* Meta robots */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Viewport dla mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Dodatkowe meta tagi */}
        <meta name="author" content="Bezpieczny Dach" />
        <meta name="copyright" content="Bezpieczny Dach" />
        <meta name="theme-color" content="#e74c3c" />
      </Helmet>

      <ScrollToHashElement />
      <Header />
      <HeroSection />
      <Service />
  
      <Realization/>
       <SEOContent />
      <RepairSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dachy-plaskie" element={<DachyPlaskie />} />
        <Route path="/docieplanie-dachow" element={<DocieplanieDachow />} />
        <Route path="/o-nas" element={<AboutUs />} />
        <Route path="/uslugi-dekarskie-szczecin" element={<Wykonawstwo />} />
        <Route path="/baza-wiedzy" element={<FAQ />} />
        <Route path="/realizacje" element={<Realizacje />} />
      </Routes>
    </Router>
  );
}

export default App;