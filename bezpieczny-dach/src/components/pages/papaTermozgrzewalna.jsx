import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Header'; // Przywrócone Twoje pełne, główne menu
import ContactSection from '../ContactSection';
import PhoneLink from '../PhoneLink';
import { canonical } from '../../seo/site';
import './PapaTermozgrzewalnaSzczecin.css';

const FAQ_ITEMS = [
  {
    question: "Czy da się kryć nową papą na istniejącym pokryciu bez jego demontażu?",
    answer: "Tak, jeśli stare podłoże jest suche, stabilne, a warstw papy nie jest zbyt wiele (zwykle max. 2-3). Wymaga to jednak starannego przygotowania, ścięcia pęcherzy i zagruntowania. Weryfikujemy to podczas darmowej wizji lokalnej poprzez odkrywki."
  },
  {
    question: "Czy wystawiacie dokumentację powykonawczą i karty materiałowe?",
    answer: "Tak. Przy inwestycjach dla wspólnot, TBS-ów czy firm budowlanych przekazujemy pełną dokumentację wbudowanych materiałów (karty techniczne, DWU), co jest kluczowe dla odbiorów budowlanych."
  },
  {
    question: "Czy pracujecie jako podwykonawca generalnego wykonawcy?",
    answer: "Tak. Mamy doświadczenie w procesach przetargowych i realizacji dużych kontraktów. Znamy standardy BHP, harmonogramowania i obrotu dokumentacją wymaganą przez generalnych wykonawców."
  }
];

const PapaTermozgrzewalna = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="landing-page">
      <Helmet>
        <title>Krycie dachu papą termozgrzewalną — Szczecin i zachodniopomorskie | Bezpieczny Dach</title>
        <meta name="description" content="Krycie dachów płaskich papą termozgrzewalną SBS. Hale, bloki, obiekty użyteczności publicznej. Zlecenia od 150 m². Audyt techniczny na obiekcie. 518 144 882" />
        <link rel="canonical" href={canonical('/papa-termozgrzewalna')} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Twoje standardowe Menu Główne */}
      <Header />

      <main className="seo-content">
        {/* SEKCJA HERO */}
        <section className="seo-intro" style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
              Krycie dachu papą termozgrzewalną — Szczecin i województwo zachodniopomorskie
            </h1>
            <p className="seo-lead" style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#555' }}>
              Kompleksowe wykonawstwo pokryć z papy termozgrzewalnej SBS na dachach płaskich. Realizujemy inwestycje przemysłowe, hale, dachy bloków i obiektów użyteczności publicznej.
            </p>
            
            {/* Miękki filtr (wpuszczamy garaże, ale pozycjonujemy się wyżej) */}
            <div className="qualification-block" style={{ backgroundColor: '#e8f4fd', border: '1px solid #b8daff', padding: '15px', fontWeight: 'bold', color: '#004085', marginBottom: '30px', borderRadius: '5px' }}>
              Główny profil działalności: zlecenia pow. 150 m² (hale, wspólnoty). Wykonujemy również mniejsze dachy i garaże w miarę dostępności wolnych terminów.
            </div>

            <ul className="seo-list trust-list" style={{ listStyle: 'none', padding: 0, marginBottom: '40px', fontSize: '1.1rem', textAlign: 'left', display: 'inline-block' }}>
              <li style={{ marginBottom: '10px' }}>✓ Wystawiamy pełną dokumentację powykonawczą i karty materiałowe</li>
              <li style={{ marginBottom: '10px' }}>✓ Pracujemy w systemie odbiorów częściowych i końcowych</li>
              <li style={{ marginBottom: '10px' }}>✓ Działamy jako sprawdzony podwykonawca generalnych wykonawców</li>
            </ul>

            <div className="hero-cta" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <PhoneLink className="btn-primary" style={{ padding: '15px 30px', fontSize: '1.2rem', backgroundColor: '#e74c3c', color: '#fff', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }} />
              <a href="#wycena" className="btn-secondary" style={{ padding: '15px 30px', fontSize: '1.2rem', border: '2px solid #e74c3c', color: '#e74c3c', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
                Zamów audyt techniczny
              </a>
            </div>
          </div>
        </section>

        {/* ZAUFALI NAM (Zaktualizowane o Generalnych Wykonawców) */}
        <section className="trust-badges" style={{ padding: '40px 20px', backgroundColor: '#fff', borderBottom: '1px solid #eee', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#666', marginBottom: '20px' }}>Pracujemy m.in. dla generalnych wykonawców i instytucji:</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', fontWeight: 'bold', fontSize: '1.2rem', alignItems: 'center' }}>
            <span>🏗️ Atlas Ward — Generalny Wykonawca</span>
            <span>🏗️ MG Project — Generalny Wykonawca</span>
            <span>🏗️ DUNA — Generalny Wykonawca</span>
            <span>🏢 TBS Goleniów</span>
            <span>🎖️ Jednostka Wojskowa (WSM)</span>
          </div>
        </section>

        {/* ZAKRES WYKONAWCZY */}
        <section className="seo-grid-section" style={{ padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Zakres wykonawstwa technicznego</h2>
            <div className="seo-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              
              <div className="seo-card" style={{ padding: '30px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}>
                <h3 style={{ color: '#e74c3c' }}>Nowe pokrycia dwuwarstwowe</h3>
                <p>Układamy systemowe pokrycia z papy podkładowej i nawierzchniowej modyfikowanej SBS. W zależności od specyfiki podłoża stosujemy zgrzewanie na całej powierzchni lub precyzyjne mocowanie mechaniczne.</p>
              </div>

              <div className="seo-card" style={{ padding: '30px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}>
                <h3 style={{ color: '#e74c3c' }}>Pokrycia na izolacji termicznej</h3>
                <p>Wykonujemy krycie bezpośrednio na warstwach dociepleniowych: styropapie, płytach PIR lub twardej wełnie mineralnej, rygorystycznie dobierając układ warstw do wymaganego współczynnika przenikania ciepła (U).</p>
              </div>

              <div className="seo-card" style={{ padding: '30px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}>
                <h3 style={{ color: '#e74c3c' }}>Obróbki blacharskie i detale</h3>
                <p>Zapewniamy szczelność w newralgicznych punktach dachu. Wykonujemy profesjonalne obróbki kominów, attyk, wpustów dachowych, wyłazów, świetlików oraz dylatacji konstrukcyjnych.</p>
              </div>

              <div className="seo-card" style={{ padding: '30px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}>
                <h3 style={{ color: '#e74c3c' }}>Praca na zróżnicowanym podłożu</h3>
                <p>Dopasowujemy technologię aplikacji papy do rodzaju stropu. Posiadamy doświadczenie w kryciu podłoży betonowych, blachy trapezowej, a także w renowacji na starych powłokach bitumicznych po ich uprzednim przygotowaniu.</p>
              </div>

            </div>
          </div>
        </section>

        {/* PROCES REALIZACJI ZLECENIA */}
        <section className="seo-process" style={{ padding: '60px 20px', backgroundColor: '#f8f9fa' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Jak prowadzimy zlecenie od wyceny po odbiór</h2>
            
            <div style={{ marginBottom: '30px', paddingLeft: '20px', borderLeft: '4px solid #e74c3c' }}>
              <h3 style={{ marginBottom: '10px' }}>1. Wizja lokalna i inwentaryzacja</h3>
              <p>Zawsze weryfikujemy stan faktyczny na obiekcie. Wykonujemy pomiary powierzchni i – jeśli to konieczne – odkrywki kontrolne, aby ocenić stan podłoża i zawilgocenie głębszych warstw.</p>
            </div>
            
            <div style={{ marginBottom: '30px', paddingLeft: '20px', borderLeft: '4px solid #e74c3c' }}>
              <h3 style={{ marginBottom: '10px' }}>2. Transparentny kosztorys techniczny</h3>
              <p>Przedkładamy ofertę z czytelnym rozbiciem na koszty materiałowe i robociznę. Wskazujemy konkretny układ warstw i rodzaj zastosowanej papy termozgrzewalnej wraz z parametrami technicznymi.</p>
            </div>

            <div style={{ marginBottom: '30px', paddingLeft: '20px', borderLeft: '4px solid #e74c3c' }}>
              <h3 style={{ marginBottom: '10px' }}>3. Harmonogram i realizacja</h3>
              <p>Pracujemy zgodnie z ustalonym grafikiem. Na dużych inwestycjach (wspólnoty, hale) jesteśmy przygotowani do pracy z inspektorem nadzoru i stosujemy protokoły odbiorów częściowych dla poszczególnych etapów (np. po paroizolacji).</p>
            </div>

            <div style={{ paddingLeft: '20px', borderLeft: '4px solid #e74c3c' }}>
              <h3 style={{ marginBottom: '10px' }}>4. Odbiór końcowy i dokumentacja</h3>
              <p>Przekazujemy kompletny dach wraz z pełną dokumentacją powykonawczą. Dostarczamy karty techniczne wbudowanych materiałów (DWU) oraz wystawiamy pisemną gwarancję na szczelność.</p>
            </div>
          </div>
        </section>

        {/* FAQ TECHNICZNE */}
        <section className="seo-faq" style={{ padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Często zadawane pytania techniczne</h2>
            <div className="seo-faq-list">
              {FAQ_ITEMS.map((faq, idx) => (
                <div key={idx} className="seo-faq-item" style={{ padding: '20px', marginBottom: '20px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{faq.question}</h3>
                  <p style={{ color: '#555' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEKCJA KONTAKTOWA */}
        <div id="wycena">
          <ContactSection />
        </div>

      </main>
    </div>
  );
};

export default PapaTermozgrzewalna;