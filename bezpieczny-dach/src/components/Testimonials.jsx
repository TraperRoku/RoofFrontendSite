import React from 'react';
import '../components/Testimaniols.css';
import PhoneLink from '../components/PhoneLink';

const reviews = [
  {
    initial: 'F',
    name: 'Filip',
    rating: 5,
    date: '2026-02-11',
    text: 'Fachowa robota.',
  },
  {
    initial: 'B',
    name: 'Bogusia',
    rating: 5,
    date: '2026-03-11',
    text: 'Fachowe doradztwo, szybka realizacja, wykonanie na wysokim poziomie, dbałość o szczegóły. Można się nie znać, a oddać dach w dobre ręce.',
  },
  {
    initial: 'K',
    name: 'Karol',
    rating: 5,
    date: '2026-01-28',
    text: 'Polecam, robota sprawnie wykonana i w terminie. Sympatyczny właściciel firmy.',
  },
  {
    initial: 'M',
    name: 'Marek',
    rating: 5,
    date: '2026-03-17',
    text: 'Fachowo i szybko wykonana praca.',
  },
 {
    initial: 'I',
    name: 'Iwona',
    rating: 5,
    date: '2026-04-25',
    text: 'Profesjonalna firma , fachowo rzetelnie podjęcie prac w szybkim terminie .Polecam rzadkością jest w dzisiejszych czasach tak wysoki poziom wykonania prac pozostawiając po sobie solidne wykonanie czystość i spokój aż miło.',
  },
  
];

const trustedClients = [
  { name: 'TBS Goleniów', desc: 'Towarzystwo Budownictwa Społecznego' },
  { name: 'Durable', desc: 'Serwis dachów — Przecław, Szczecin' },
  { name: 'Jednostka Wojskowa', desc: 'Szczecin — WSM' },
];

function StarRating({ count = 5 }) {
  return (
    <div className="stars" aria-label={`${count} na 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="testimonials-section" aria-label="Opinie klientów">
      <div className="testimonials-inner">

        {/* Nagłówek */}
        <div className="testimonials-header">
          <h2>Co mówią nasi klienci?</h2>
          <div className="testimonials-summary">
            <span className="summary-score">5.0</span>
            <div>
              <StarRating />
              <span className="summary-label">
                Średnia ocena Google 
              </span>
            </div>
          </div>
        </div>

        {/* Karty opinii */}
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div className="review-card" key={i}>
              <div className="review-top">
                <div className="review-avatar">{r.initial}</div>
                <div>
                  <div className="review-name">{r.name}</div>
                  <div className="review-date">{r.date}</div>
                </div>
                {/* Logo Google */}
                <div className="review-google-logo" aria-label="Google">
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
              </div>
              <StarRating count={r.rating} />
              <p className="review-text">"{r.text}"</p>
            </div>
          ))}
        </div>

        {/* Zaufali nam */}
        <div className="trusted-block">
          <h3>Zaufali nam</h3>
          <p className="trusted-subtitle">
            Realizujemy zlecenia zarówno dla klientów indywidualnych, jak i firm oraz instytucji.
          </p>
          <div className="trusted-grid">
            {trustedClients.map((c, i) => (
              <div className="trusted-card" key={i}>
                <div className="trusted-icon">🏢</div>
                <div>
                  <div className="trusted-name">{c.name}</div>
                  <div className="trusted-desc">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="testimonials-cta">
          <a
            href="https://g.page/r/CZKvTZNHfyfCEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="testimonials-cta-btn"
          >
            ★ Oceń nas na Google
          </a>
          <PhoneLink className="testimonials-cta-phone">
            Zadzwoń po bezpłatną wycenę: 518 144 882
          </PhoneLink>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;