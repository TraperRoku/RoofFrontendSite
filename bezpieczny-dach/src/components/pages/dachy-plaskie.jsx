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
        <title>Dachy płaskie Szczecin i Goleniów — remonty, papa termozgrzewalna, EPDM, PVC | Bezpieczny Dach</title>
        <meta name="description" content="Profesjonalne dachy płaskie w Szczecinie i Goleniowie: remonty, papa termozgrzewalna, systemy EPDM i PVC, uszczelnianie. Fachowy dekarz z 15-letnim doświadczeniem. Darmowa wycena — 518 144 882" />
        
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
        <meta name="googlebot" content="index, follow"/>
        <link rel="canonical" href="https://www.bezpiecznydach.pl/dachy-plaskie"/>
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Dachy płaskie w Szczecinie - profesjonalne remonty"/>
        <meta property="og:description" content="Kompleksowe usługi dekarskie w Szczecinie. Remonty dachów płaskich, papa termozgrzewalna, systemy EPDM i PVC. 15 lat doświadczenia."/>
        <meta property="og:image" content={dach1}/>
        <meta property="og:url" content="https://www.bezpiecznydach.pl/dachy-plaskie"/>
        <meta property="og:locale" content="pl_PL"/>
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Dachy płaskie w Szczecinie - remonty i papa"/>
        <meta name="twitter:description" content="Profesjonalne usługi dekarskie w Szczecinie. Remonty dachów płaskich, papa termozgrzewalna, systemy EPDM i PVC."/>
        <meta name="twitter:image" content={dach1}/>
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Dachy Płaskie Szczecin - Bezpieczny Dach",
            "image": "${dach1}",
            "telephone": "+48518144882",
            "url": "https://www.bezpiechnydach.pl/dachy-plaskie",
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
            "description": "Profesjonalne usługi dekarskie w Szczecinie. Specjalizujemy się w dachach płaskich, remoncie i kładzeniu papy termozgrzewalnej. 15 lat doświadczenia.",
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

        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Jakie są rodzaje dachów płaskich?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Najpopularniejsze to: papa termozgrzewalna (tradycyjna), membrana EPDM (elastyczna) i membrana PVC (wytrzymała). Każda ma swoje zalety – doradzimy najlepsze rozwiązanie dla Twojego budynku."
                }
              },
              {
                "@type": "Question",
                "name": "Ile kosztuje remont dachu płaskiego?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cena zależy od powierzchni dachu, rodzaju materiału i stanu podłoża. Oferujemy darmową wycenę na miejscu – skontaktuj się: 518 144 882."
                }
              },
              {
                "@type": "Question",
                "name": "Jak długo trwa montaż dachu płaskiego?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Montaż papą termozgrzewalną trwa 1-3 dni w zależności od powierzchni. Najpierw przygotowujemy podłoże, potem kładziemy papę w zgranym procesem termicznym."
                }
              },
              {
                "@type": "Question",
                "name": "Czy dach płaski jest odporny na przecieki?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tak, gdy wykonany prawidłowo. Nowoczesne papy i membrany są odporne na wilgoć. Ważne jest prawidłowe wykonanie i regularna konserwacja – czyszczenie rynien i inspekcja."
                }
              },
              {
                "@type": "Question",
                "name": "Czy mogę użyć dachu płaskiego na taras?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tak! Specjalizujemy się w dachach zielonych i tarasach dachowych. Możemy przygotować dach płaski do funkcji użytkowej – ze wzmocnieniem konstrukcji i bezpieczną izolacją."
                }
              },
              {
                "@type": "Question",
                "name": "Jak często trzeba konserwować dach płaski?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Rekomendujemy roczną inspekcję i czyszczenie rynien. Profilaktyka przedłuża żywotność dachu i zapobiega drogim naprawom. Oferujemy usługi serwisowe w Szczecinie i Goleniowie."
                }
              }
            ]
          }
        `}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="dachy-plaskie-container">
        <section className="hero-section3">
          <div className="hero-content3">
            <h1>Dachy płaskie w Szczecinie – profesjonalne wykonawstwo i remonty</h1>
            <p className="hero-subtitlee3">Specjalizujemy się w dachach płaskich, remoncie i kładzeniu papy termozgrzewalnej. 15 lat doświadczenia w branży. Darmowa wycena.</p>
            <div className="hero-cta">
              <a href="tel:+48518144882" className="cta-button" itemProp="telephone">Zadzwoń: 518 144 882</a>
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
          <h2>Dlaczego wybrać naszą firmę</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon" aria-hidden="true"></div>
              <h3>Uszczelnianie dachu w odpowiedzi na awarię</h3>
              <p>Przeciek na dachu? Reagujemy sprawnie. Nasze doświadczenie w uszczelnianiu dachów pozwala nam zatrzymać wodę zanim spowoduje dalsze szkody.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon" aria-hidden="true"></div>
              <h3>Materiały najwyższej jakości</h3>
              <p>Używamy papę termozgrzewalną, membrany EPDM i PVC od sprawdzonych producentów. Każdy projekt jest wykonany z dbałością o szczegóły i trwałość.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon" aria-hidden="true"></div>
              <h3>15 lat doświadczenia w branży</h3>
              <p>Ponad tysiąc zrealizowanych projektów. Nasz zespół dekszy zna każdy aspekt remontu dachów płaskich – od diagnozy do wykończenia.</p>
            </div>
          </div>
        </section>

        <section className="gallery-section">
          <h2>Nasze realizacje w Szczecinie</h2>
          <p className="gallery-subtitle">Obejrzyj efekty naszych prac – od remontu do kompleksowej wymiany pokrycia</p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img 
                src={dach2} 
                alt="Remont dachu - wymiana pokrycia" 
                loading="lazy"
                width="400"
                height="300"
              />
              <p><strong>Remont dachu</strong> – wymiana pokrycia</p>
            </div>
            <div className="gallery-item">
              <img 
                src={dach3} 
                alt="Montaż membrany EPDM na dachu płaskim" 
                loading="lazy"
                width="400"
                height="300"
              />
              <p><strong>System membranowy</strong> – EPDM</p>
            </div>
            <div className="gallery-item">
              <img 
                src={dach4} 
                alt="Zielony taras na dachu płaskim" 
                loading="lazy"
                width="400"
                height="300"
              />
              <p><strong>Zielony taras</strong> – praktyczne i estetyczne</p>
            </div>
            <div className="gallery-item">
              <img 
                src={dach5} 
                alt="Konstrukcja balastowa przygotowana pod panele fotowoltaiczne" 
                loading="lazy"
                width="400"
                height="300"
              />
              <p><strong>Przygotowanie pod fotowoltaikę</strong> – nowoczesne rozwiązanie</p>
            </div>
          </div>
        </section>

        <section className="emergency-section">
          <div className="emergency-content">
            <h2>Uszkodzenie dachu – pomoc w terenie</h2>
            <p>Przeciek lub awaria na dachu? Zapraszamy do kontaktu niezwłocznie. Nasz zespół przyjeżdża szybko i diagnozuje problem profesjonalnie.</p>
            <a href="tel:+48518144882" className="emergency-button" itemProp="telephone">Zadzwoń: 518 144 882</a>
          </div>
        </section>

        <section className="systems-section">
          <h2>Systemy do pokrycia dachów płaskich</h2>
    

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
              <h3>Papa termozgrzewalna</h3>
              <p><strong>Sprawdzone i popularne rozwiązanie</strong>. Papa termozgrzewalna sprawdza się gdy:</p>
              <ul>
                <li>Szukasz niezawodnego, budżetowego systemu</li>
                <li>Chcesz materiał o sprawdzonej żywotności</li>
                <li>Realizacja powinna być szybka</li>
                <li>Planujesz powiększyć pokrycie lub wykonać naprawę</li>
              </ul>
              <p className="system-cta"><strong>Papa termozgrzewalna</strong> – skonsultuj z nami: <a href="tel:+48518144882" itemProp="telephone">518 144 882</a></p>
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
              <h3>System balastowy – membrana EPDM</h3>
              <p><strong>Nowoczesna alternatywa dla dachów płaskich</strong>. Membrana EPDM idealnie się sprawdza gdy:</p>
              <ul>
                <li>Dach ma skomplikowaną geometrię</li>
                <li>Planujesz montaż szybki i bez grzybiania</li>
                <li>Preferujesz rozwiązanie lekkie i elastyczne</li>
                <li>Chcesz długotrwałą ochronę</li>
              </ul>
              <p className="system-cta"><strong>Membrana EPDM</strong> – dowiedz się więcej: <a href="tel:+48518144882" itemProp="telephone">518 144 882</a></p>
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
              <h3>Membrana PVC – rozwiązanie premium</h3>
              <p><strong>Dla klientów szukających najwyższej klasy</strong>. Membrana PVC to dobry wybór gdy:</p>
              <ul>
                <li>Planujesz taras lub zielony dach</li>
                <li>Potrzebujesz maksymalnej odporności na UV i uszkodzenia</li>
                <li>Chcesz połączyć uszczelnianie dachu z izolacją termiczną</li>
                <li>Szukasz rozwiązania na wiele lat</li>
              </ul>
              <p className="system-cta"><strong>Membrana PVC z izolacją</strong> – zainteresowany? <a href="tel:+48518144882" itemProp="telephone">518 144 882</a></p>
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
              <h3>Remont dachu z przygotowaniem pod fotowoltaikę</h3>
              <p><strong>Inwestycja w przyszłość budynku</strong>. Ten wariant warto wybrać gdy:</p>
              <ul>
                <li>Planujesz instalacje paneli fotowoltaicznych</li>
                <li>Chcesz odświeżyć pokrycie dachowe</li>
                <li>Szukasz rozwiązania na dłuższy horyzont</li>
                <li>Marzysz o redukcji kosztów energii</li>
              </ul>
              <p className="system-cta"><strong>Remont z przygotowaniem pod PV</strong> – sprawdź możliwości: <a href="tel:+48518144882" itemProp="telephone">518 144 882</a></p>
            </div>
          </div>
        </section>

        <section className="local-seo-section">
          <h2>Obsługa terenu Szczecina i województwa</h2>
          <div className="local-areas">
            <p>Bezpieczny Dach świadczy usługi w całym Szczecinie i okolicach.</p>
            <p>Realizujemy projekty dla mieszkańców dzielnic: Centrum, Pogodno, Gumieńce, Żelechowa, Skolwin, Dąbie i wielu innych. Obsługujemy również miasta i gminy w województwie: Police, Goleniów, Stargard, Dobra i pozostałe tereny Zachodniopomorskiego.</p>
            <ul>
              <li>Dachy płaskie</li>
              <li>Kładzienie papy termozgrzewalnej</li>
              <li>Naprawa i uszczelnianie dachów</li>
              <li>Remonty i wymiana pokrycia</li>
              <li>Izolacja i docieplanie</li>
            </ul>
          </div>
        </section>

        <section className="guarantee-section">
          <h2>Dlaczego nas wybierają</h2>
          <div className="guarantee-content">
            <div className="guarantee-badge">
              <div className="guarantee-years">1000+</div>
              <div className="guarantee-text">Zrealizowanych projektów</div>
            </div>
            <div className="guarantee-text-content">
              <p><strong>Pracujemy w oparciu o cztery filary</strong>:</p>
              <ul>
                <li>Rzetelne wyceny bez ukrytych kosztów – wiesz co zapłacisz</li>
                <li>Szybka reakcja na problemy – awaria to priorytet</li>
                <li>Realizacja zgodna z normami branżowymi i najlepszymi praktykami</li>
                <li>Dostępność dla klienta – odpowiadamy na pytania zawsze</li>
                <li>Specjalizacja w dachach płaskich – to nasza główna branża</li>
              </ul>
              <p>Zapraszamy do zapoznania się z naszymi realizacjami. Efekty naszej pracy mówią same za siebie.</p>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <h2>Często zadawane pytania</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Ile kosztuje papa termozgrzewalna?</h3>
              <p>Cena papy termozgrzewalnej zależy od typu materiału i metrażu dachu. Oferujemy darmową wycenę – zadzwoń lub wypełnij formularz kontaktowy.</p>
            </div>
            <div className="faq-item">
              <h3>Jak długo trwa montaż membrany EPDM?</h3>
              <p>Montaż membrany trwa zazwyczaj 1-3 dni w zależności od powierzchni i skomplikowania dachu. Termin ustalamy indywidualnie w trakcie konsultacji.</p>
            </div>
            <div className="faq-item">
              <h3>Czy pracujecie w weekendy?</h3>
              <p>Tak, dostępni jesteśmy 7 dni w tygodniu. W przypadku awarii reaktywność jest dla nas priorytetem.</p>
            </div>
            <div className="faq-item">
              <h3>Jak przebiega proces remontu dachu?</h3>
              <p>Remont zaczyna się od bezpłatnej wyceny i pomiarów. Następnie opracowujemy projekt, demontujemy stary dach i montujemy nowe pokrycie. Pracujemy zgodnie z ustalonym harmonogramem i standardami branżowymi.</p>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <h2>Skontaktuj się z nami</h2>
          <p>Doradcy dostępni od 7:00 do 20:00, siedem dni w tygodniu</p>
          <p><strong>Darmowa wycena • Konsultacja bez zobowiązań • Profesjonalne podejście</strong></p>
          <div className="cta-buttons">
            <a href="tel:+48518144882" className="cta-button-primary" itemProp="telephone">Zadzwoń: 518 144 882</a>
            <Link to="/#contact" className="cta-button-secondary">Formularz kontaktowy</Link>
          </div>
          <p className="location-info">Obsługujemy Szczecin i całe województwo zachodniopomorskie.</p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default DachyPlaskie;