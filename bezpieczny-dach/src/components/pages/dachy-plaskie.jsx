import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Header'
import Footer from '../footer'
import '../pages/DachyPlaskie.css';
import { Link } from 'react-router-dom';

import dach1 from '../photos_to_deploy/8.webp';
import dach2 from '../photos_to_deploy/9.webp';
import dach3 from '../photos_to_deploy/3.webp';
import dach4 from '../photos_to_deploy/23.webp';
import dach5 from '../photos/solar.webp';
import dach6 from '../realizacje/thumbs/73f.webp'; 
import dach7 from '../photos_to_deploy/14.webp';
import dach8 from '../photos/EPDM.webp';


function DachyPlaskie(){
  return (
    <>
      <Helmet>
        <title>🏆 Dachy Płaskie Szczecin ✅ Papa Termozgrzewalna & EPDM | Dekarz 15 lat doświadczenia ☎️ 518-144-882</title>
        <meta name="description" content="⭐ NAJLEPSZY DEKARZ SZCZECIN ⭐ Dachy płaskie, papa termozgrzewalna, EPDM, systemy balastowe. Naprawy w 24H! Remont dachu, wymiana pokrycia. Darmowa wycena ☎️ 518-144-882"/>
        <meta name="keywords" content="dachy płaskie szczecin, papa termozgrzewalna szczecin, dekarz szczecin, dekarze szczecin, naprawa dachów szczecin, remont dachu szczecin, papa na dach szczecin, papy termozgrzewalne szczecin, usługi dekarskie szczecin, system balastowy na dach płaski szczecin, systemy na dach płaski szczecin, wymiana dachu szczecin, konstrukcja balastowa na dach płaski szczecin, modernizacja dachu płaskiego, naprawa izolacji dachu szczecin, docieplenia szczecin, docieplanie budynków szczecin, łaty dach szczecin, dachy papowe szczecin, dachy zielone szczecin"/>
        
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
        <meta name="googlebot" content="index, follow"/>
        <link rel="canonical" href="https://yourdomain.com/dachy-plaskie-szczecin"/>
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="🏆 DEKARZ SZCZECIN - Dachy Płaskie, Papa Termozgrzewalna | ☎️ 518-144-882"/>
        <meta property="og:description" content="⭐ Najlepszy dekarz w Szczecinie! Dachy płaskie, papa termozgrzewalna, EPDM, naprawy w 24H. 15 lat doświadczenia, gwarancja jakości!"/>
        <meta property="og:image" content={dach1}/>
        <meta property="og:url" content="https://yourdomain.com/dachy-plaskie-szczecin"/>
        <meta property="og:locale" content="pl_PL"/>
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="🏆 DEKARZ SZCZECIN - Dachy Płaskie | ☎️ 518-144-882"/>
        <meta name="twitter:description" content="⭐ Najlepszy dekarz w Szczecinie! Papa termozgrzewalna, EPDM, naprawy w 24H!"/>
        <meta name="twitter:image" content={dach1}/>
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Dekarz Szczecin - Dachy Płaskie",
            "image": "${dach1}",
            "telephone": "+48518144882",
            "url": "https://www.bezpiecznydach.pl/dachy-plaskie",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Szczecin",
              "addressRegion": "Zachodniopomorskie",
              "addressCountry": "PL"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "53.4285",
              "longitude": "14.5528"
            },
            "openingHours": "Mo-Su 07:00-20:00",
            "priceRange": "$$",
            "description": "Profesjonalny dekarz w Szczecinie - dachy płaskie, papa termozgrzewalna, EPDM. 15 lat doświadczenia, naprawy w 24H.",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Usługi dekarskie Szczecin",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Dachy płaskie Szczecin",
                    "description": "Montaż i remont dachów płaskich w Szczecinie"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Papa termozgrzewalna Szczecin",
                    "description": "Profesjonalny montaż papy termozgrzewalnej"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "System balastowy na dach płaski Szczecin",
                    "description": "Nowoczesne systemy balastowe na dachy płaskie"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Naprawa dachów Szczecin",
                    "description": "Awaryjna naprawa przecieków dachowych w 24H"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Wymiana dachu Szczecin",
                    "description": "Kompleksowa wymiana pokryć dachowych"
                  }
                }
              ]
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Szczecin"
              },
              {
                "@type": "State",
                "name": "Zachodniopomorskie"
              }
            ]
          }
        `}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="dachy-plaskie-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1>🏆 DEKARZ SZCZECIN - DACHY PŁASKIE, PAPA TERMOZGRZEWALNA | 15 LAT DOŚWIADCZENIA!</h1>
            <p className="hero-subtitle">⭐ Najlepszy dekarz w Szczecinie ⭐ Naprawy w 24H | Gwarancja jakości | Darmowa wycena</p>
            <div className="hero-cta">
              <a href="tel:+48518144882" className="cta-button" itemProp="telephone">📞 ZADZWOŃ TERAZ: 518 144 882</a>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src={dach1} 
              alt="Dekarz Szczecin - profesjonalny montaż dachu płaskiego z papą termozgrzewalną" 
              loading="eager"
              width="800"
              height="600"
            />
          </div>
        </section>

        <section className="benefits-section">
          <h2>🔥 DLACZEGO JESTEŚMY NAJLEPSZYM DEKARZEM W SZCZECINIE?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Naprawa Dachów Szczecin w 24H</h3>
              <p>Przeciek? Awaria? Działamy błyskawicznie! Naprawa izolacji dachu Szczecin - zatrzymujemy wodę zanim zniszczy Twój dom!</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✅</div>
              <h3>Papa Termozgrzewalna Szczecin - Tylko Oryginały</h3>
              <p>Papy termozgrzewalne Szczecin od najlepszych producentów. Papa na dach Szczecin z gwarancją jakości!</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🏆</div>
              <h3>Dekarze Szczecin z 15-letnim Doświadczeniem</h3>
              <p>1000+ zrealizowanych projektów! Usługi dekarskie Szczecin na najwyższym poziomie - nasze doświadczenie to Twoje bezpieczeństwo!</p>
            </div>
          </div>
        </section>

        <section className="gallery-section">
          <h2>📸 NASZE REALIZACJE - DACHY PŁASKIE SZCZECIN</h2>
          <p className="gallery-subtitle">Zobacz jak transformujemy dachy papowe Szczecin w naszych projektach</p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img 
                src={dach2} 
                alt="Remont dachu Szczecin - przed i po kompleksowej wymianie dachu płaskiego" 
                loading="lazy"
                width="400"
                height="300"
              />
              <p><strong>Remont dachu Szczecin</strong> - pełna wymiana pokrycia</p>
            </div>
            <div className="gallery-item">
              <img 
                src={dach3} 
                alt="System balastowy na dach płaski Szczecin - montaż membrany EPDM" 
                loading="lazy"
                width="400"
                height="300"
              />
              <p><strong>Systemy na dach płaski Szczecin</strong> - EPDM</p>
            </div>
            <div className="gallery-item">
              <img 
                src={dach4} 
                alt="Dachy zielone Szczecin - zielony taras na dachu płaskim w wykonaniu naszej firmy" 
                loading="lazy"
                width="400"
                height="300"
              />
              <p><strong>Dachy zielone Szczecin</strong> - taras na dachu</p>
            </div>
            <div className="gallery-item">
              <img 
                src={dach5} 
                alt="Konstrukcja balastowa na dach płaski Szczecin - przygotowanie pod fotowoltaikę" 
                loading="lazy"
                width="400"
                height="300"
              />
              <p><strong>Konstrukcja balastowa na dach płaski Szczecin</strong> - pod PV</p>
            </div>
          </div>
        </section>

        <section className="emergency-section">
          <div className="emergency-content">
            <h2>🚨 AWARIA DACHU? NAPRAWA DACHÓW SZCZECIN W 24H!</h2>
            <p>Przeciek na dachu płaskim? Nie czekaj! Naprawa izolacji dachu Szczecin - działamy natychmiast:</p>
            <a href="tel:+48518144882" className="emergency-button" itemProp="telephone">🆘 AWARIA DACHU? ☎ 518 144 882</a>
          </div>
        </section>

        <section className="systems-section">
          <h2>🔧 SYSTEMY DACHÓW PŁASKICH SZCZECIN - WYBIERZ NAJLEPSZY!</h2>
    

          <div className="system-card reverse">
            <div className="system-image">
              <img 
                src={dach7} 
                alt="Papa termozgrzewalna Szczecin - profesjonalny montaż przez doświadczonych dekarzy" 
                loading="lazy"
                width="500"
                height="350"
              />
            </div>
            <div className="system-content">
              <h3>🥇 PAPA TERMOZGRZEWALNA SZCZECIN</h3>
              <p><strong>Najchętniej wybierany system!</strong> Papa na dach Szczecin idealny gdy:</p>
              <ul>
                <li> Szukasz sprawdzonego rozwiązania budżetowego</li>
                <li> Cenisz solidność papy termozgrzewalnej</li>
                <li> Zależy Ci na szybkiej realizacji</li>
                <li> Potrzebujesz łaty dach Szczecin</li>
              </ul>
              <p className="system-cta"><strong>Papy termozgrzewalne Szczecin</strong> - zadzwoń: <a href="tel:+48518144882" itemProp="telephone">📞 518 144 882</a></p>
            </div>
          </div>
          
          <div className="system-card">
            <div className="system-image">
              <img 
                src={dach8} 
                alt="System balastowy na dach płaski Szczecin - membrana EPDM" 
                loading="lazy"
                width="500"
                height="350"
              />
            </div>
            <div className="system-content">
              <h3>🚀 SYSTEM BALASTOWY NA DACH PŁASKI SZCZECIN</h3>
              <p><strong>Nowoczesne systemy na dach płaski Szczecin!</strong> EPDM idealny gdy:</p>
              <ul>
                <li> Masz skomplikowany kształt dachu</li>
                <li> Potrzebujesz konstrukcji balastowej na dach płaski</li>
                <li> Zależy Ci na szybkim montażu</li>
                <li> Chcesz lekkie rozwiązanie</li>
              </ul>
              <p className="system-cta"><strong>Systemy na dach płaski Szczecin</strong> - sprawdź: <a href="tel:+48518144882" itemProp="telephone">📞 518 144 882</a></p>
            </div>
          </div>

          <div className="system-card reverse">
            <div className="system-image">
              <img 
                src={dach6} 
                alt="Dachy płaskie Szczecin - membrana PVC w wykonaniu najlepszego dekarza" 
                loading="lazy"
                width="500"
                height="350"
              />
            </div>
            <div className="system-content">
              <h3>💎 MEMBRANA PCV - PREMIUM DACHY PŁASKIE SZCZECIN</h3>
              <p><strong>Dla wymagających klientów!</strong> Wybierz gdy:</p>
              <ul>
                <li> Chcesz stworzyć dachy zielone Szczecin</li>
                <li> Wymagasz odporności na UV i uszkodzenia</li>
                <li> Potrzebujesz docieplenia Szczecin</li>
                <li> Planujesz docieplanie budynków Szczecin</li>
              </ul>
              <p className="system-cta"><strong>Docieplenia Szczecin</strong> + membrana - zapytaj: <a href="tel:+48518144882" itemProp="telephone">📞 518 144 882</a></p>
            </div>
          </div>

          <div className="system-card">
            <div className="system-image">
              <img 
                src={dach5} 
                alt="Modernizacja dachu płaskiego Szczecin - przygotowanie pod panele fotowoltaiczne" 
                loading="lazy"
                width="500"
                height="350"
              />
            </div>
            <div className="system-content">
              <h3>⚡ MODERNIZACJA DACHU PŁASKIEGO + FOTOWOLTAIKA</h3>
              <p><strong>Przyszłościowe rozwiązanie!</strong> Wybierz gdy:</p>
              <ul>
                <li> Planujesz instalację fotowoltaiczną</li>
                <li> Chcesz modernizację dachu płaskiego</li>
                <li> Szukasz rozwiązania na 20+ lat</li>
                <li> Zależy Ci na oszczędnościach</li>
              </ul>
              <p className="system-cta"><strong>Modernizacja dachu płaskiego</strong> - konsultacja: <a href="tel:+48518144882" itemProp="telephone">📞 518 144 882</a></p>
            </div>
          </div>
        </section>

        <section className="local-seo-section">
          <h2>🏢 USŁUGI DEKARSKIE SZCZECIN - OBSŁUGUJEMY CAŁE MIASTO!</h2>
          <div className="local-areas">
            <p><strong>Bezpieczny Dach</strong> świadczy usługi w dzielnicach:</p>
            <p>Centrum, Pogodno, Gumieńce, Żelechowa, Skolwin, Dąbie, Turzyn, Niebuszewo, Północ, Prawobrzeże, Bukowo, Warszewo, Majowe, Słoneczne, Zdroje, Klucz, Podjuchy, Osów, Głębokie, Golęcino, Krzekowo, Zawadzkiego, Drzetowo, Świerczewo oraz wszystkich okolicach: Police, Goleniów, Stargard, Dobra, Mierzyn, Wołczkowo, Dołuje, Lubieszyn, Przecław, Ustowo, Kobylanka, Nowe Warpno, Stepnica, Trzebież, Tanowo, Kliniska Wielkie i inne miejscowości regionu.!</p>
            <ul>
              <li>🏠 <strong>Dachy płaskie Szczecin</strong> </li>
              <li>🔧 <strong>Papa termozgrzewalna Szczecin</strong> </li>
              <li>⚡ <strong>Naprawa dachów Szczecin</strong> </li>
              <li>🔄 <strong>Remont dachu Szczecin</strong> </li>
              <li>🆕 <strong>Wymiana dachu Szczecin</strong> </li>
            </ul>
          </div>
        </section>

        <section className="guarantee-section">
          <h2>🏆 DLACZEGO KLIENCI WYBIERAJĄ NAS JAKO NAJLEPSZEGO DEKARZA W SZCZECINIE?</h2>
          <div className="guarantee-content">
            <div className="guarantee-badge">
              <div className="guarantee-years">1000+</div>
              <div className="guarantee-text">ZADOWOLONYCH KLIENTÓW</div>
            </div>
            <div className="guarantee-text-content">
              <p><strong>Dekarze Szczecin</strong> z najwyższą oceną dzięki:</p>
              <ul>
                <li>✅ Rzetelnej wycenie <strong>usług dekarskich Szczecin</strong> bez ukrytych kosztów</li>
                <li>⚡ Natychmiastowej reakcji na awarie - <strong>naprawa izolacji dachu Szczecin</strong></li>
                <li>🔧 Realizacjom zgodnym z najnowszymi standardami</li>
                <li>📞 Dostępności 7 dni w tygodniu</li>
                <li>💯 Ekspert od <strong>papy termozgrzewalne Szczecin</strong></li>
              </ul>
              <p><strong>Nasze dachy płaskie Szczecin mówią same za siebie – sam się przekonaj!</strong></p>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <h2>❓ NAJCZĘŚCIEJ ZADAWANE PYTANIA - DEKARZ SZCZECIN</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Ile kosztuje papa termozgrzewalna Szczecin?</h3>
              <p>Cena papy termozgrzewalnej w Szczecinie zależy od typu i powierzchni. Oferujemy darmową wycenę - zadzwoń <strong>📞 518 144 882</strong></p>
            </div>
            <div className="faq-item">
              <h3>Jak szybko system balastowy na dach płaski Szczecin?</h3>
              <p>Montaż systemu balastowego na dach płaski w Szczecinie zajmuje 1-3 dni w zależności od powierzchni. Konstrukcja balastowa na dach płaski Szczecin - szybko i profesjonalnie!</p>
            </div>
            <div className="faq-item">
              <h3>Czy wykonujecie naprawę dachów Szczecin w weekendy?</h3>
              <p>Tak! Naprawa dachów Szczecin dostępna 7 dni w tygodniu. W przypadku awarii - naprawa izolacji dachu Szczecin w 24H!</p>
            </div>
        <div className="faq-item">
  <h3>Jak wygląda proces wymiany dachu w Szczecinie?</h3>
  <p>Wymiana dachu w Szczecinie zaczyna się od bezpłatnej wyceny i dokładnych pomiarów. Następnie przygotowujemy projekt, demontujemy stary dach i montujemy nowe pokrycie z wybranych materiałów. Całość przebiega sprawnie i zgodnie z ustalonym harmonogramem.</p>
</div>
          </div>
           <Link to="/baza-wiedzy" className="see-more-button">ZOBACZ WIĘCEJ PYTAŃ →</Link>
        </section>
        

        <section className="contact-cta">
          <h2>📞 POTRZEBUJESZ DEKARZA W SZCZECINIE? ZADZWOŃ TERAZ!</h2>
          <p>🕐 Nasi doradcy czekają od 7:00 do 20:00, 7 dni w tygodniu</p>
          <p><strong>Darmowa wycena | Przejazd gratis | Gwarancja jakości</strong></p>
          <div className="cta-buttons">
            <a href="tel:+48518144882" className="cta-button-primary" itemProp="telephone">📞 ZADZWOŃ: 518 144 882</a>
            <Link to="/#contact" className="cta-button-secondary">📋 FORMULARZ KONTAKTOWY</Link>
          </div>
          <p className="location-info">📍 <strong>Dekarz Szczecin</strong> - obsługujemy całe województwo zachodniopomorskie!</p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default DachyPlaskie;