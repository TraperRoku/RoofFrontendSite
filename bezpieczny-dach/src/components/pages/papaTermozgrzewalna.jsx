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
    document.querySelectorAll('.service-card, .benefit-item, .related-service-card').forEach(el => {
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
        <title>Papa Termozgrzewalna Szczecin | Profesjonalny Montaż i Naprawa | Bezpieczny Dach</title>
        <meta name="description" content="Szukasz ekspertów od papy termozgrzewalnej w Szczecinie? Oferujemy profesjonalny montaż, naprawy i renowacje dachów z papy. Szybka wycena, gwarancja jakości. Zadzwoń: 518-144-882." />
        {/* Usunięto meta keywords - są przestarzałe dla SEO */}
        {/* Możesz tutaj dodać schemę.org JSON-LD, wzorując się na docieplanie-dachow.jsx */}
      </Helmet>

      <Header />

      <main>
        <section className="hero2">
          <div className="container">
            <div className="hero-content2">
              <h1>Papa Termozgrzewalna w Szczecinie</h1>
              <p>Specjalizujemy się w profesjonalnym montażu, naprawie i renowacji dachów z papy termozgrzewalnej na terenie Szczecina i okolic. Dzięki wieloletniemu doświadczeniu i wykorzystaniu materiałów najwyższej jakości, zapewniamy szczelne i trwałe pokrycia dachowe.</p>
              <Link to="/#contact" className="cta-button">Darmowa Wycena</Link>
            </div>
          </div>
        </section>

        <section className="related-services-section">
          <div className="container">
            <h2 className="section-title">Nasze Specjalizacje w Szczecinie</h2>
            <div className="related-services-grid">
              <div className="related-service-card">
                <h3>🏢 System Balastowy na Dach Płaski Szczecin</h3>
                <p>Profesjonalny montaż systemów balastowych na dachach płaskich. Nowoczesne rozwiązania zapewniające trwałość i niezawodność przez lata. Idealne dla budynków przemysłowych i mieszkalnych.</p>
              </div>
              <div className="related-service-card">
                <h3>🏠 Dachy Płaskie Szczecin</h3>
                <p>Kompleksowe usługi dla dachów płaskich - od projektu przez montaż po serwis. Wykorzystujemy najnowsze technologie i materiały najwyższej jakości. Gwarancja szczelności i trwałości.</p>
              </div>
              <div className="related-service-card">
                <h3>🔧 Papa Termozgrzewalna Szczecin</h3>
                <p>Montaż, naprawa i renowacja pokryć z papy termozgrzewalnej. Wieloletnie doświadczenie, certyfikowani fachowcy, najwyższa jakość wykonania. Szybka realizacja i konkurencyjne ceny.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="services">
          <div className="container">
            <h2 className="section-title">Nasze Usługi w Zakresie Papy Termozgrzewalnej</h2>
            <p className="section-subtitle">Oferujemy kompleksowe rozwiązania dla Twojego dachu</p>
            
            <div className="services-grid">
              <div className="service-card">
                <h3>🔨 Montaż Nowych Pokryć z Papy Termozgrzewalnej</h3>
                <p>Realizujemy kompleksowy montaż papy termozgrzewalnej na nowo budowanych obiektach. Od przygotowania podłoża, przez precyzyjne zgrzewanie warstw, aż po wykończenie – dbamy o każdy detal, by Twój dach był niezawodny.</p>
              </div>
              
              <div className="service-card">
                <h3>🔧 Naprawa i Renowacja Dachów z Papy</h3>
                <p>Zajmujemy się profesjonalną naprawą przecieków, pęknięć i innych uszkodzeń dachów pokrytych papą. Oferujemy również pełne renowacje starych pokryć, przywracając im pełną funkcjonalność i estetykę. Szybka interwencja w przypadku awarii!</p>
              </div>
              
              <div className="service-card">
                <h3>♻️ Wymiana Starych Pokryć na Papę Termozgrzewalną</h3>
                <p>Jeśli Twój stary dach wymaga wymiany, papa termozgrzewalna jest doskonałym wyborem. Przeprowadzamy demontaż istniejącego pokrycia i profesjonalnie instalujemy nowe, trwałe warstwy papy.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits">
          <div className="container">
            <h2 className="section-title">Dlaczego Papa Termozgrzewalna?</h2>
            <p className="section-subtitle">Poznaj zalety tego nowoczesnego rozwiązania</p>
            
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">🛡️</div>
                <h4>Wyjątkowa Szczelność</h4>
                <p>Papa termozgrzewalna tworzy jednolitą, bezszwową powierzchnię, skutecznie chroniąc przed wodą i wilgocią.</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">⏰</div>
                <h4>Trwałość na Lata</h4>
                <p>Odporna na zmienne warunki atmosferyczne, promieniowanie UV i uszkodzenia mechaniczne.</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <h4>Szybki Montaż</h4>
                <p>Technologia zgrzewania pozwala na sprawną i efektywną instalację.</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">🏗️</div>
                <h4>Wszechstronność</h4>
                <p>Idealna zarówno dla dachów płaskich, jak i o niewielkim spadku, na budynkach mieszkalnych, przemysłowych i usługowych.</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">💰</div>
                <h4>Ekonomiczne Rozwiązanie</h4>
                <p>Oferuje doskonały stosunek jakości do ceny.</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">✅</div>
                <h4>Gwarancja Jakości</h4>
                <p>Udzielamy gwarancji na wykonane usługi i używamy tylko sprawdzonych materiałów.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="why-choose-us-section">
          <div className="container">
            <h2 className="section-title">Dlaczego Wybrać Bezpieczny Dach?</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>🏆 Doświadczenie</h3>
                <p>Ponad 15 lat w branży dekarskiej, setki zrealizowanych projektów w Szczecinie i okolicach.</p>
              </div>
              
              <div className="service-card">
                <h3>👷 Certyfikowani Fachowcy</h3>
                <p>Nasi dekarze posiadają niezbędne kwalifikacje i regularnie uczestniczą w szkoleniach.</p>
              </div>
              
              <div className="service-card">
                <h3>🔝 Materiały Najwyższej Jakości</h3>
                <p>Pracujemy wyłącznie na sprawdzonych produktach od renomowanych producentów.</p>
              </div>
              
              <div className="service-card">
                <h3>💸 Darmowa Wycena</h3>
                <p>Zapewniamy bezpłatną i niezobowiązującą wycenę prac.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container">
            <h2 className="section-title">Skontaktuj się z Nami!</h2>
            <p className="section-subtitle">Potrzebujesz fachowca od papy termozgrzewalnej w Szczecinie? Chętnie odpowiemy na Twoje pytania i przygotujemy indywidualną ofertę.</p>
            
            <div className="contact-info-grid">
              <div className="contact-card">
                <h4>📞 Telefon</h4>
                <p>518-144-882</p>
              </div>
              
              <div className="contact-card">
                <h4>🏢 Obszar Działania</h4>
                <p>Szczecin i okolice</p>
              </div>
              
              <div className="contact-card">
                <h4>⏰ Dostępność</h4>
                <p>Pon-Pt: 7:00-20<br/>Sobota: 8:00-14:00</p>
              </div>
              
              <div className="contact-card">
                <h4>🆘 Awarie</h4>
                <p>Interwencje 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <Link to="tel:518144882" className="floating-contact">
        📞 Zadzwoń teraz!
      </Link>
    </>
  );
}

export default PapaTermozgrzewalnaSzczecin;