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
        <title>Dachy płaskie Szczecin i okolice | Pokrycia EPDM, papa, PVC | 15 lat doświadczenia</title>
        <meta name="description" content="Profesjonalne pokrycia dachów płaskich w Szczecinie - papa termozgrzewalna, EPDM, PVC. Naprawy, remonty, docieplenia. Darmowa wycena, gwarancja nawet 25 lat! Zadzwoń ☎ 518 144 882"/>
        <meta name="keywords" content="dekarz szczecin, dachy płaskie szczecin, papa termozgrzewalna, naprawa dachów, remont dachu szczecin"/>
        
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Usługi dekarskie - dachy płaskie",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Profesjonalne dachy płaskie Szczecin",
              "image": "${dach1}",
              "telephone": "+48518144882",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Szczecin",
                "addressRegion": "Zachodniopomorskie"
              }
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "53.4285",
                "longitude": "14.5528"
              },
              "geoRadius": "200000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Usługi dekarskie",
              "itemListElement": [
                {
                  "@type": "OfferCatalog",
                  "name": "Systemy dachów płaskich",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "System z papą termozgrzewalną"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "System EPDM"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Membrana PVC"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "System pod fotowoltaikę"
                      }
                    }
                  ]
                }
              ]
            }
          }
        `}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="dachy-plaskie-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1>DACHY PŁASKIE SZCZECIN - EKSPERCI OD 15 LAT!</h1>
            <p className="hero-subtitle">Najwyższa jakość wykonania | Darmowa wycena |<br></br> Gwarancja jakości</p>
            <div className="hero-cta">
              <a href="tel:+48518144882" className="cta-button" itemProp="telephone">ZADZWOŃ TERAZ: 518 144 882</a>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src={dach1} 
              alt="Profesjonalny montaż dachu płaskiego w Szczecinie - nasza ekipa dekarska przy pracy" 
              loading="lazy"
            />
          </div>
        </section>

        <section className="benefits-section">
          <h2>DLACZEGO WARTO WYBRAĆ NASZE USŁUGI DEKARSKIE W SZCZECINIE?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <h3>Natychmiastowa Naprawa Przecieków</h3>
              <p>Działamy w 24h od zgłoszenia - zatrzymujemy wodę zanim zniszczy Twój dom!</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <h3>Sprawdzone Materiały Od Renomowanych Producentów</h3>
              <p>Używamy wyłącznie certyfikowanych rozwiązań od uznanych dostawców – gwarancja trwałości i jakości.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <h3>Setki Udanych Realizacji</h3>
              <p>15 lat doświadczenia na dachach – nasze doświadczenie to Twoje bezpieczeństwo!</p>
            </div>
          </div>
        </section>

        <section className="gallery-section">
          <h2>NASZE REALIZACJE DACHÓW PŁASKICH W SZCZECINIE</h2>
          <p className="gallery-subtitle">Zobacz jak transformujemy dachy w naszych projektach</p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img 
                src={dach2} 
                alt="Przed i po remoncie dachu płaskiego w Szczecinie - kompleksowa wymiana pokrycia" 
                loading="lazy"
              />
              <p>Pełna wymiana pokrycia dachowego</p>
            </div>
            <div className="gallery-item">
              <img 
                src={dach3} 
                alt="Montaż membrany EPDM na dachu płaskim w województwie zachodniopomorskim" 
                loading="lazy"
              />
              <p>Specjalistyczny montaż EPDM</p>
            </div>
            <div className="gallery-item">
              <img 
                src={dach4} 
                alt="Zielony dach na tarasie w Szczecinie - realizacja naszej firmy dekarskiej" 
                loading="lazy"
              />
              <p>Zielony taras na dachu płaskim</p>
            </div>
            <div className="gallery-item">
              <img 
                src={dach5} 
                alt="Przygotowanie dachu płaskiego pod fotowoltaikę w Szczecinie i okolicach" 
                loading="lazy"
              />
              <p>Przygotowanie pod instalację PV</p>
            </div>
          </div>
        </section>

        <section className="emergency-section">
          <div className="emergency-content">
            <h2>PRZECIEK NA DACHU PŁASKIM? DZIAŁAMY W 24H!</h2>
            <p>Nie czekaj aż woda zniszczy Twój dom! Zadzwoń do naszych ekspertów:</p>
            <a href="tel:+48518144882" className="emergency-button" itemProp="telephone">AWARIA DACHU? ☎ 518 144 882</a>
          </div>
        </section>

        <section className="systems-section">
          <h2>SPECJALISTYCZNE SYSTEMY DACHÓW PŁASKICH W SZCZECINIE</h2>
          <p>Oferujemy 4 sprawdzone rozwiązania dopasowane do Twoich potrzeb:</p>

          <div className="system-card reverse">
            <div className="system-image">
              <img 
                src={dach7} 
                alt="Montaż papy termozgrzewalnej na dachu płaskim - Szczecin i okolice" 
                loading="lazy"
              />
            </div>
            <div className="system-content">
              <h3>SYSTEM Z PAPĄ TERMOZGRZEWALNĄ</h3>
              <p><strong>Ekonomia i sprawdzona trwałość!</strong> Idealny gdy:</p>
              <ul>
                <li>Szukasz rozwiązania budżetowego</li>
                <li>Cenisz solidność i sprawdzone technologie</li>
                <li>Zależy Ci na szybkiej realizacji</li>
              </ul>
              <p className="system-cta">Zadzwoń chętnie doradzimy: <a href="tel:+48518144882" itemProp="telephone">518 144 882</a></p>
            </div>
          </div>
          
          <div className="system-card">
            <div className="system-image">
              <img 
                src={dach8} 
                alt="Pokrycie dachu płaskiego membraną EPDM w Szczecinie" 
                loading="lazy"
              />
            </div>
            <div className="system-content">
              <h3>SYSTEM EPDM</h3>
              <p><strong>Ulubiony wybór klientów!</strong> Idealny gdy:</p>
              <ul>
                <li>Masz skomplikowany kształt dachu</li>
                <li>Potrzebujesz lekkiego rozwiązania</li>
                <li>Zależy Ci na szybkim montażu</li>
              </ul>
              <p className="system-cta">Sprawdź czy pasuje do Twojego dachu: <a href="tel:+48518144882" itemProp="telephone">518 144 882</a></p>
            </div>
          </div>

          <div className="system-card reverse">
            <div className="system-image">
              <img 
                src={dach6} 
                alt="Dach płaski z membraną PVC - realizacja w woj. zachodniopomorskim" 
                loading="lazy"
              />
            </div>
            <div className="system-content">
              <h3>MEMBRANA PCV</h3>
              <p><strong>Dla wymagających klientów!</strong> Wybierz gdy:</p>
              <ul>
                <li>Chcesz stworzyć taras użytkowy lub dach zielony</li>
                <li>Wymagasz odporności na UV i uszkodzenia</li>
                <li>Potrzebujesz dodatkowej izolacji</li>
              </ul>
              <p className="system-cta">Zapytaj o szczegóły: <a href="tel:+48518144882" itemProp="telephone">518 144 882</a></p>
            </div>
          </div>

          <div className="system-card">
            <div className="system-image">
              <img 
                src={dach5} 
                alt="Przygotowanie dachu płaskiego pod panele fotowoltaiczne w Szczecinie" 
                loading="lazy"
              />
            </div>
            <div className="system-content">
              <h3>SYSTEM POD FOTOWOLTAIKĘ</h3>
              <p><strong>Przyszłościowe rozwiązanie!</strong> Wybierz gdy:</p>
              <ul>
                <li>Planujesz instalację fotowoltaiczną</li>
                <li>Chcesz zmniejszyć rachunki za prąd</li>
                <li>Szukasz rozwiązania na 20+ lat</li>
              </ul>
              <p className="system-cta">Zadzwoń po darmową konsultację: <a href="tel:+48518144882" itemProp="telephone">518 144 882</a></p>
            </div>
          </div>
        </section>

        <section className="guarantee-section">
          <h2>DLACZEGO KLIENCI POLECAJĄ NAS NAJCHĘTNIEJ?</h2>
          <div className="guarantee-content">
            <div className="guarantee-badge">
              <div className="guarantee-years">1000+</div>
              <div className="guarantee-text">ZADOWOLONYCH KLIENTÓW</div>
            </div>
            <div className="guarantee-text-content">
              <p>Jesteśmy firmą dekarską, która zdobyła zaufanie mieszkańców dzięki:</p>
              <ul>
                <li>Rzetelnej wycenie bez ukrytych kosztów</li>
                <li>Natychmiastowej reakcji na awarie dachów</li>
                <li>Realizacjom zgodnym z najnowszymi standardami technicznymi</li>
              </ul>
              <p><strong>Nasze dachy mówią same za siebie – sam się przekonaj!</strong></p>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <h2>MASZ PYTANIA? DZWOŃ - ODPOWIEMY NA WSZYSTKO!</h2>
          <p>Nasi doradcy czekają od 7:00 do 20:00, 7 dni w tygodniu</p>
          <div className="cta-buttons">
            <a href="tel:+48518144882" className="cta-button-primary" itemProp="telephone">ZADZWOŃ: 518 144 882</a>
            <Link to="/#contact" className="cta-button-secondary">FORMULARZ KONTAKTOWY</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default DachyPlaskie;