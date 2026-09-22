import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Header'
import Footer from '../footer'
import '../pages/DachyPlaskie.css';
import { Link } from 'react-router-dom';
import PhoneLink from '../PhoneLink'; 

import dach1 from '../photos_to_deploy/8.webp';
import dach2 from '../photos_to_deploy/9.webp';
import dach7 from '../photos_to_deploy/14.webp';



function DachyPlaskie(){
  return (
    <>
      <Helmet>
        <title>Dachy płaskie Szczecin i Goleniów — remonty, papa termozgrzewalna SBS | Bezpieczny Dach</title>
        <meta name="description" content="Profesjonalne dachy płaskie w Szczecinie i Goleniowie: remonty, papa termozgrzewalna SBS, naprawy i uszczelnianie, ocieplenia. Fachowy dekarz z 15-letnim doświadczeniem. Zlecenia od 150 m². Darmowa wizja — 518 144 882" />
        
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
        <meta name="googlebot" content="index, follow"/>
        <link rel="canonical" href="https://www.bezpiecznydach.pl/dachy-plaskie"/>
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Dachy płaskie w Szczecinie - profesjonalne remonty"/>
        <meta property="og:description" content="Kompleksowe usługi dekarskie w Szczecinie. Remonty dachów płaskich, papa termozgrzewalna SBS, naprawy i ocieplenia. 15 lat doświadczenia."/>
        <meta property="og:image" content={dach1}/>
        <meta property="og:url" content="https://www.bezpiecznydach.pl/dachy-plaskie"/>
        <meta property="og:locale" content="pl_PL"/>
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Dachy płaskie w Szczecinie - remonty i papa"/>
        <meta name="twitter:description" content="Profesjonalne usługi dekarskie w Szczecinie. Remonty dachów płaskich, papa termozgrzewalna SBS, naprawy i ocieplenia."/>
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
            "openingHours": ["Mo-Fr 07:00-18:00", "Sa 08:00-14:00"],
            "priceRange": "$$",
            "description": "Profesjonalne usługi dekarskie w Szczecinie. Specjalizujemy się w dachach płaskich, remoncie i kładzeniu papy termozgrzewalnej SBS. 15 lat doświadczenia.",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Usługi dekarskie Szczecin",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Papa termozgrzewalna SBS Szczecin",
                    "description": "Profesjonalny montaż papy termozgrzewalnej SBS w systemie dwuwarstwowym"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Naprawa i uszczelnianie dachów płaskich Szczecin",
                    "description": "Awaryjna naprawa przecieków dachowych i uszczelnianie"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Ocieplenie dachów płaskich Szczecin",
                    "description": "Termomodernizacja i docieplanie dachów płaskich płytami PIR, styropapą i wełną"
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
                "name": "Jakie materiały stosujecie na dachach płaskich?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Jedynym materiałem, z którym pracujemy, jest papa termozgrzewalna SBS. Stosujemy ją w systemie dwuwarstwowym z podkładem i warstwą nawierzchniową. To sprawdzone od dziesięcioleci rozwiązanie dla obiektów przemysłowych i wspólnot mieszkaniowych."
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
                "name": "Jak długo trwa montaż dachu płaskiego papą SBS?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Montaż papą termozgrzewalną SBS trwa 1-3 dni w zależności od powierzchni. Najpierw przygotowujemy podłoże, potem kładziemy papę podkładową i nawierzchniową w zgranym procesie termicznym."
                }
              },
              {
                "@type": "Question",
                "name": "Czy dach płaski z papą SBS jest odporny na przecieki?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tak, gdy wykonany prawidłowo w systemie dwuwarstwowym. Papa termozgrzewalna SBS jest odporna na wilgoć i zmiany temperatur. Ważne jest prawidłowe wykonanie i regularna konserwacja – czyszczenie rynien i inspekcja."
                }
              },
              {
                "@type": "Question",
                "name": "Czy pracujecie z małymi obiektami poniżej 150 m²?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Główny profil działalności to zlecenia pow. 150 m² (hale, wspólnoty). Wykonujemy również mniejsze dachy i garaże w miarę dostępności wolnych terminów."
                }
              },
              {
                "@type": "Question",
                "name": "Jak często trzeba konserwować dach płaski z papą SBS?",
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
            <p className="hero-subtitlee3">Specjalizujemy się w dachach płaskich, remoncie i kładzeniu papy termozgrzewalnej SBS. 15 lat doświadczenia w branży. Darmowa wycena.</p>
            <div className="hero-cta">
             <PhoneLink className="cta-button" itemProp="telephone">Zadzwoń: 518 144 882</PhoneLink>

            </div>
          </div>
          <div className="hero-image">
            <img 
              src={dach1} 
              alt="Profesjonalny montaż papy termozgrzewalnej SBS na dachu płaskim hali produkcyjnej Szczecin" 
              loading="eager"
              width="800"
              height="600"
            />
          </div>
        </section>

        <section style={{backgroundColor: '#fff7f5', color: '#7f1d1d', border: '1px solid #f3b5ab', borderRadius: '8px', padding: '16px 24px', textAlign: 'center', fontWeight: '600', fontSize: '16px'}}>
          <p style={{margin: 0}}>Główny profil działalności to zlecenia pow. 150 m² (hale, wspólnoty). Wykonujemy również mniejsze dachy i garaże w miarę dostępności wolnych terminów.</p>
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
              <p>Używamy wyłącznie papy termozgrzewalnej SBS od sprawdzonych producentów (ICOPAL, Swisspor, Nexxler, Izobud). Każdy projekt jest wykonany z dbałością o szczegóły i trwałość.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon" aria-hidden="true"></div>
              <h3>15 lat doświadczenia w branży</h3>
              <p>700+ zrealizowanych projektów B2B. Nasz zespół dekarski zna każdy aspekt remontu dachów płaskich – od diagnozy do wykończenia.</p>
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
                alt="Kompleksowy remont dachu płaskiego — wymiana izolacji i pokrycia z papą SBS Szczecin" 
                loading="lazy"
                width="400"
                height="300"
              />
              <p><strong>Remont dachu</strong> – wymiana pokrycia</p>
            </div>
          
          </div>
        </section>

        <section className="emergency-section">
          <div className="emergency-content">
            <h2>Uszkodzenie dachu – pomoc w terenie</h2>
            <p>Przeciek lub awaria na dachu? Zapraszamy do kontaktu niezwłocznie. Nasz zespół przyjeżdża szybko i diagnozuje problem profesjonalnie.</p>
           <PhoneLink className="emergency-button" itemProp="telephone">Zadzwoń: 518 144 882</PhoneLink>
          </div>
        </section>

        <section className="systems-section">
          <h2>Systemy do pokrycia dachów płaskich</h2>
    

          <div className="system-card reverse">
            <div className="system-image">
              <img 
                src={dach7} 
                alt="Dwuwarstwowa papa termozgrzewalna SBS — krycie dachu płaskiego przez autoryzowaną ekipę Szczecin" 
                loading="lazy"
                width="500"
                height="350"
              />
            </div>
            <div className="system-content">
              <h3>Papa termozgrzewalna SBS</h3>
              <p><strong>Sprawdzone i popularne rozwiązanie</strong>. Papa termozgrzewalna SBS sprawdza się gdy:</p>
              <ul>
                <li>Szukasz niezawodnego, budżetowego systemu</li>
                <li>Chcesz materiał o sprawdzonej żywotności</li>
                <li>Realizacja powinna być szybka</li>
                <li>Planujesz powiększyć pokrycie lub wykonać naprawę</li>
              </ul>
              <p className="system-cta"><strong>Papa termozgrzewalna SBS</strong> – skonsultuj z nami: <PhoneLink itemProp="telephone">518 144 882</PhoneLink></p>
            </div>
          </div>
      

          <div className="system-card">
            
            <div className="system-content">
              <h3>Remont dachu z przygotowaniem pod fotowoltaikę</h3>
              <p><strong>Inwestycja w przyszłość budynku</strong>. Ten wariant warto wybrać gdy:</p>
              <ul>
                <li>Planujesz instalacje paneli fotowoltaicznych</li>
                <li>Chcesz odświeżyć pokrycie dachowe</li>
                <li>Szukasz rozwiązania na dłuższy horyzont</li>
                <li>Marzysz o redukcji kosztów energii</li>
              </ul>
              <p className="system-cta"><strong>Remont z przygotowaniem pod PV</strong> – sprawdź możliwości: 
              <PhoneLink itemProp="telephone">518 144 882</PhoneLink></p>
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
              <li>Kładzienie papy termozgrzewalnej SBS</li>
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
              <div className="guarantee-years">700+</div>
              <div className="guarantee-text">projektów B2B</div>
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
              <h3>Ile kosztuje papa termozgrzewalna SBS?</h3>
              <p>Cena papy termozgrzewalnej SBS zależy od typu materiału i metrażu dachu. Oferujemy darmową wycenę – zadzwoń lub wypełnij formularz kontaktowy.</p>
            </div>
            <div className="faq-item">
              <h3>Jak długo trwa montaż papy termozgrzewalnej SBS?</h3>
              <p>Montaż papy SBS trwa zazwyczaj 1-3 dni w zależności od powierzchni i skomplikowania dachu. Termin ustalamy indywidualnie w trakcie konsultacji.</p>
            </div>
            <div className="faq-item">
              <h3>Jakie są godziny pracy firmy?</h3>
              <p>Godziny pracy: Poniedziałek – Piątek 07:00 – 18:00, Sobota 08:00 – 14:00. Dla pilnych zgłoszeń od 150 m² — wyjazd w ciągu 24 godzin roboczych.</p>
            </div>
            <div className="faq-item">
              <h3>Jak przebiega proces remontu dachu?</h3>
              <p>Remont zaczyna się od bezpłatnej wyceny i pomiarów. Następnie opracowujemy projekt, demontujemy stary dach i montujemy nowe pokrycie z papą SBS. Pracujemy zgodnie z ustalonym harmonogramem i standardami branżowymi.</p>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <h2>Skontaktuj się z nami</h2>
          <p>Doradcy dostępni w godzinach pracy: Pon-Pt 07:00-18:00, Sob 08:00-14:00</p>
          <p><strong>Darmowa wycena • Konsultacja bez zobowiązań • Profesjonalne podejście</strong></p>
          <div className="cta-buttons">
            <PhoneLink className="cta-button-primary" itemProp="telephone">Zadzwoń: 518 144 882</PhoneLink>
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
