import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../Header'; 
import Footer from '../footer'; 
import './PapaTermozgrzewalnaSzczecin.css'; 

function PapaTermozgrzewalnaSzczecin() {
  useEffect(() => {
    // Logika płynnego przewijania
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Logika animacji po scrollu
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Obserwuj elementy do animacji
 document.querySelectorAll(
    '.service-card, .benefit-item, .related-service-card, .main-content-block h2, .main-content-block h3, .main-content-block p, .local-areas-section p'
).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});
    // Czyszczenie obserwatora przy odmontowaniu komponentu
    return () => observer.disconnect();
  }, []);

  return (
    <>
     <Helmet>
  <title>Papa termozgrzewalna Szczecin i Goleniów — montaż, naprawa, uszczelnianie | Bezpieczny Dach</title>
  <meta name="description" content="Specjalizujemy się w montażu i naprawie papy termozgrzewalnej w Szczecinie i Goleniowie. Profesjonalne uszczelnianie dachów płaskich, 15 lat doświadczenia, darmowa wycena. Zadzwoń: 518 144 882" />
  
  <link rel="canonical" href="https://www.bezpiechnydach.pl/papa-termozgrzewalna"/>
  
  <script type="application/ld+json">
  {`
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Papa Termozgrzewalna - Bezpieczny Dach Szczecin",
      "image": "https://www.bezpiecznydach.pl/logo.webp", 
      "telephone": "+48518144882",
      "url": "https://www.bezpiechnydach.pl/papa-termozgrzewalna",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Szczecin",
        "addressRegion": "Zachodniopomorskie",
        "addressCountry": "PL"
      },
      "openingHours": "Mo-Su 07:00-20:00",
      "priceRange": "$$",
      "description": "Profesjonalne usługi montażu, naprawy i renowacji dachów z papy termozgrzewalnej w Szczecinie.",
      "serviceType": ["Montaż papy termozgrzewalnej", "Naprawa dachów", "Renowacja pokryć dachowych"]
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
          "name": "Jak długo trwa papa termozgrzewalna?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Papa termozgrzewalna trwa około 15-20 lat przy prawidłowej instalacji i regularnym serwisie. Naszych klientów chronimy 10-letnią gwarancją na wykonanie."
          }
        },
        {
          "@type": "Question",
          "name": "Czy papa termozgrzewalna wymaga konserwacji?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rekomendujemy roczną inspekcję i czyszczenie rynien. Profilaktyka to klucz do długowieczności dachu. Oferujemy usługi konserwacyjne w Szczecinie i Goleniowie."
          }
        },
        {
          "@type": "Question",
          "name": "Czy mogę położyć papę termozgrzewalną na starym pokryciu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "W wielu przypadkach tak, ale zawsze przeprowadzamy inspekcję. Jeśli stare pokrycie jest w dobrym stanie, możemy położyć nową papę na wierzchu – to oszczędza czas i koszty demontażu."
          }
        },
        {
          "@type": "Question",
          "name": "Jaka jest cena papy termozgrzewalnej?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cena zależy od powierzchni dachu, rodzaju papy i stanu podłoża. Oferujemy darmową wycenę – skontaktuj się telefonicznie: 518 144 882."
          }
        },
        {
          "@type": "Question",
          "name": "Czy papa termozgrzewalna jest odporna na mróz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tak, nowoczesne papy termozgrzewalne modyfikowane SBS są odporne na mróz i zmiany temperatury. Idealne dla klimatu polskiego."
          }
        },
        {
          "@type": "Question",
          "name": "Jak mogę zgłosić awarię dachu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zadzwoń pod numer 518 144 882 lub prześlij SMS. Oferujemy szybką interwencję w przypadku przecieków i awaryjnych uszkodzeń dachu."
          }
        }
      ]
    }
  `}
  </script>
</Helmet>

      <Header />

      <main>
        <section className="hero2">
          <div className="container">
            <div className="hero-content2">
              <h1>Papa termozgrzewalna w Szczecinie</h1>
              <p>Specjalizujemy się w profesjonalnym montażu, naprawie i renowacji dachów z papy termozgrzewalnej na terenie Szczecina i okolic. Dzięki wieloletniemu doświadczeniu i wykorzystaniu materiałów najwyższej jakości, zapewniamy szczelne i trwałe pokrycia dachowe.</p>
              <a href="tel:+48518144882" className="cta-button">Zadzwoń po darmową wycenę: 518 144 882</a>
            </div>
          </div>
        </section>

        <section className="main-content-block">
  <div className="container">
    <h2>Profesjonalny montaż papy termozgrzewalnej w Szczecinie – szczelność i trwałość</h2>
    <p>Szukasz sprawdzonego rozwiązania na dach płaski? Papa termozgrzewalna to najczęściej wybierany system, który gwarantuje doskonałą hydroizolację dachu na lata. Oferujemy kompleksowe usługi związane z papą – od ułożenia nowej warstwy po szybką naprawę przecieków. Wykonujemy renowację dachów z papy na budynkach mieszkalnych, halach i garażach. Nasze 15-letnie doświadczenie to gwarancja bezpieczności Twojego dachu.</p>
    
    <h3>Jakie rodzaje papy na dach dostępne są w ofercie?</h3>
    <p>Przygotowując remont dachu, doradzamy najlepszy wybór materiałów. Papy termozgrzewalne modyfikowane SBS są bardziej elastyczne i odporne na niskie temperatury, co jest kluczowe w polskim klimacie. Stosujemy tylko certyfikowane papy od wiodących producentów, aby zapewnić najwyższą jakość wykonania każdej realizacji.</p>
  </div>
</section>

     <div className="related-services-grid">
    <div className="related-service-cards">
        <h4><Link to="/dachy-plaskie">Dachy płaskie w Szczecinie</Link></h4>
        <p>Kompleksowe usługi dla dachów płaskich - od projektu poprzez montaż po serwis.</p>
    </div>
    <div className="related-service-cards">
        <h4><Link to="/docieplanie-dachow">Docieplanie dachów</Link></h4>
        <p>Izolacja termiczna dachów płaskich – wełna, płyty PIR i styropian.</p>
    </div>
    <div className="related-service-cards">
        <h4><Link to="/#contact">Naprawa papy termozgrzewalnej – szybka wycena</Link></h4>
        <p>Montaż, naprawa i renowacja pokryć z papy termozgrzewalnej.</p>
    </div>
</div>

        <section className="services">
          <div className="container">
            <h2 className="section-title">Nasze usługi w zakresie papy termozgrzewalnej</h2>
            <p className="section-subtitle">Oferujemy kompleksowe rozwiązania dla Twojego dachu</p>
            
            <div className="services-grid">
              <div className="service-card">
                <h3>Montaż nowych pokryć z papy termozgrzewalnej</h3>
                <p>Realizujemy kompleksowy montaż papy termozgrzewalnej na nowo budowanych obiektach. Od przygotowania podłoża, przez precyzyjne zgrzewanie warstw, aż po wykończenie – dbamy o każdy szczegół, by Twój dach był niezawodny.</p>
              </div>
              
              <div className="service-card">
                <h3>Naprawa i renowacja dachów z papy</h3>
                <p>Zajmujemy się profesjonalną naprawą przecieków, pęknięć i innych uszkodzeń dachów pokrytych papą. Oferujemy również pełne renowacje starych pokryć, przywracając im pełną funkcjonalność i estetykę. Szybka interwencja w przypadku awarii.</p>
              </div>
              
              <div className="service-card">
                <h3>Wymiana starych pokryć na papę termozgrzewalną</h3>
                <p>Jeśli Twój stary dach wymaga wymiany, papa termozgrzewalna jest doskonałym wyborem. Przeprowadzamy demontaż istniejącego pokrycia i profesjonalnie instalujemy nowe, trwałe warstwy papy.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits">
          <div className="container">
            <h2 className="section-title">Dlaczego papa termozgrzewalna?</h2>
            <p className="section-subtitle">Poznaj zalety tego nowoczesnego rozwiązania</p>
            
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon" aria-hidden="true"></div>
                <h4>Wyjątkowa szczelność</h4>
                <p>Papa termozgrzewalna tworzy jednolitą, bezszwową powierzchnię, skutecznie chroniąc przed wodą i wilgocią.</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon" aria-hidden="true"></div>
                <h4>Trwałość na lata</h4>
                <p>Odporna na zmienne warunki atmosferyczne, promieniowanie UV i uszkodzenia mechaniczne.</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon" aria-hidden="true"></div>
                <h4>Szybki montaż</h4>
                <p>Technologia zgrzewania pozwala na sprawną i efektywną instalację.</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon" aria-hidden="true"></div>
                <h4>Wszechstronność</h4>
                <p>Idealna zarówno dla dachów płaskich, jak i o niewielkim spadku, na budynkach mieszkalnych, przemysłowych i usługowych.</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon" aria-hidden="true"></div>
                <h4>Ekonomiczne rozwiązanie</h4>
                <p>Oferuje doskonały stosunek jakości do ceny.</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon" aria-hidden="true"></div>
                <h4>Gwarancja jakości</h4>
                <p>Udzielamy gwarancji na wykonane usługi i używamy tylko sprawdzonych materiałów.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="why-choose-us-section">
          <div className="container">
            <h2 className="section-title">Dlaczego wybrać nas?</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>Doświadczenie</h3>
                <p>Ponad 15 lat w branży dekarskiej, setki zrealizowanych projektów w Szczecinie i okolicach.</p>
              </div>
              
              <div className="service-card">
                <h3>Certyfikowani fachowcy</h3>
                <p>Nasi dekarze posiadają niezbędne kwalifikacje i regularnie uczestniczą w szkoleniach.</p>
              </div>
              
              <div className="service-card">
                <h3>Materiały najwyższej jakości</h3>
                <p>Pracujemy wyłącznie na sprawdzonych produktach od renomowanych producentów.</p>
              </div>
              
              <div className="service-card">
                <h3>Darmowa wycena</h3>
                <p>Zapewniamy bezpłatną i niezobowiązującą wycenę prac.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="local-areas-section">
  <div className="container">
    <h2 className="section-title">Obsługujemy cały Szczecin i okolice</h2>
    <p>Nasi dekarze dojeżdżają do klientów w Szczecinie (Centrum, Prawobrzeże, Gumieńce, Pogodno, Dąbie, Warszewo) oraz w okolicznych miejscowościach: Police, Goleniów, Stargard, Dobra, Mierzyn, Wołczkowo, Dołuje, Lubieszyn i Przecław. Bez względu na lokalizację, zapewniamy szybki dojazd i darmową wycenę montażu lub naprawy papy termozgrzewalnej.</p>
    
    <Link to="/#contact" className="cta-button-small">Skontaktuj się z nami</Link>
  </div>
</section>

        <section className="contact" id="contact">
          <div className="container">
            <h2 className="section-title">Skontaktuj się z nami</h2>
            <p className="section-subtitle">Potrzebujesz fachowca od papy termozgrzewalnej w Szczecinie? Chętnie odpowiemy na Twoje pytania i przygotujemy indywidualną ofertę.</p>
            <a href="tel:+48518144882" className="cta-button">Zadzwoń po darmową wycenę: 518 144 882</a>
            
            
            <div className="contact-info-grid">
              <div className="contact-card">
                <h4>Telefon</h4>
                <p>518 144 882</p>
              </div>
              
              <div className="contact-card">
                <h4>Obszar działania</h4>
                <p>Szczecin i okolice</p>
              </div>
              
              <div className="contact-card">
                <h4>Dostępność</h4>
                <p>Pon-Pt: 7:00-20:00<br/>Sobota: 8:00-14:00</p>
              </div>
              
              <div className="contact-card">
                <h4>Awarie</h4>
                <p>Interwencje 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <Link to="tel:+48518144882" className="floating-contact">
        Zadzwoń teraz
      </Link>
    </>
  );
}

export default PapaTermozgrzewalnaSzczecin;