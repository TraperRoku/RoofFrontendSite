// src/components/pages/naprawa-dachu-plaskiego.jsx
import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';

import PhoneLink from '../PhoneLink';
import LandingHeader, { StickyCallBar, LandingFooter } from '../LandingHeader';

import {
  canonical,
  jsonLd,
  localBusinessSchema,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  PHONE_DISPLAY,
  FORMSPREE_URL,
  GTAG_FORM_CONVERSION,
  MIN_AREA_M2,
  AREA_OPTIONS,
  BLOCK_SMALL_JOBS,
  isSmallJob,
  leadValueFor,
  fireConversion,
} from '../../seo/site';

import './NaprawaDachuPlaskiego.css';

const PATH = '/naprawa-dachu-plaskiego';

/* ------------------------------------------------------------------ */
/* FAQ — jedno źródło dla treści widocznej i dla JSON-LD.              */
/* Teksty MUSZĄ być identyczne w obu miejscach.                        */
/* ------------------------------------------------------------------ */

const FAQ_ITEMS = [
  {
    q: 'Jak szybko przyjeżdżacie do przecieku?',
    a: 'Przy zgłoszeniach z obiektów od 150 m² wyjeżdżamy na wizję w ciągu 24 godzin roboczych. Jeśli woda leje się do wnętrza, wykonujemy zabezpieczenie tymczasowe jeszcze tego samego dnia, a właściwą naprawę planujemy po wyschnięciu podłoża.',
  },
  {
    q: 'Czy da się naprawić dach z papy przy ujemnej temperaturze?',
    a: 'Zgrzewanie papy wymaga dodatnich temperatur i suchego podłoża. Zimą wykonujemy zabezpieczenia doraźne — masy na zimno, taśmy i łaty bitumiczne — a trwałą naprawę realizujemy przy sprzyjającej pogodzie. Mówimy o tym wprost przed wizytą, żeby nie było nieporozumień przy odbiorze.',
  },
  {
    q: 'Skąd wiecie, gdzie dokładnie jest przeciek?',
    a: 'Woda wchodzi w jednym miejscu, a wychodzi w innym — migruje między warstwami. Dlatego wykonujemy odkrywki kontrolne w miejscach podejrzanych i sprawdzamy stan izolacji termicznej. Bez odkrywki wskazanie źródła przecieku na dachu płaskim jest zgadywaniem.',
  },
  {
    q: 'Czy naprawa punktowa wystarczy, czy potrzebny jest remont?',
    a: 'Jeśli izolacja termiczna jest nasiąknięta na większej powierzchni, naprawa punktowa jest wyrzuceniem pieniędzy — woda migruje i wyjdzie w innym miejscu. Mówimy to na wizji lokalnej, zanim wystawimy ofertę, a nie po zakończeniu prac.',
  },
  {
    q: 'Czy pracujecie na zlecenie wspólnot i zarządców nieruchomości?',
    a: 'Tak. Realizujemy zlecenia dla wspólnot, spółdzielni, zarządców nieruchomości i generalnych wykonawców. Wystawiamy protokoły, dokumentację powykonawczą i karty materiałowe potrzebne do rozliczenia robót.',
  },
];

/* ------------------------------------------------------------------ */
/* Galeria — UZUPEŁNIJ ścieżkami swoich zdjęć.                         */
/* Pusta tablica = sekcja się nie renderuje, build nie pęka.           */
/* Trzymaj tu WYŁĄCZNIE dachy płaskie z papy — żadnej blachodachówki,  */
/* więźby ani poddaszy, bo to rozjeżdża trafność z reklamą.            */
/* ------------------------------------------------------------------ */

const GALLERY = [
  // { src: '/realizacje/naprawa-1.webp', alt: 'Uszczelnianie dylatacji na dachu hali 900 m² — Goleniów' },
  // { src: '/realizacje/naprawa-2.webp', alt: 'Naprawa obróbki wpustu dachowego na bloku — Szczecin' },
];

/* ------------------------------------------------------------------ */
/* Skrócony formularz: telefon, lokalizacja, powierzchnia.             */
/* Dla intencji awaryjnej im mniej pól, tym lepiej.                    */
/* ------------------------------------------------------------------ */

const EMPTY = { numerTelefonu: '', lokalizacja: '', powierzchnia: '', consent: false };

function ShortLeadForm() {
  const [data, setData] = useState(EMPTY);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);
  const statusRef = useRef(null);

  const small = isSmallJob(data.powierzchnia);
  const hardBlocked = BLOCK_SMALL_JOBS && small;

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }));
    if (status) setStatus(null);
  };

  const announce = (s) => {
    setStatus(s);
    requestAnimationFrame(() => statusRef.current?.focus());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (hardBlocked) { announce('blocked'); return; }
    if (!data.consent) { announce('consent'); return; }

    setSending(true);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: `PRZECIEK · ${data.lokalizacja || '—'} · ${data.powierzchnia || '—'}`,
          zrodlo: 'landing:naprawa-dachu-plaskiego',
        }),
      });

      if (res.ok) {
        fireConversion({
          sendTo: GTAG_FORM_CONVERSION,
          value: leadValueFor(data.powierzchnia),
          phone: data.numerTelefonu,
          label: 'form_submit_lead',
        });
        setData(EMPTY);
        announce('ok');
      } else {
        announce('error');
      }
    } catch (err) {
      console.error('Lead form error:', err);
      announce('error');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="lead-form">
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className={`form-status form-status--${status || 'idle'}`}
      >
        {status === 'ok' && (
          <p>Zgłoszenie przyjęte. Oddzwaniamy w ciągu 24 h roboczych. Pilne? Dzwoń: {PHONE_DISPLAY}.</p>
        )}
        {status === 'error' && (
          <p>Nie udało się wysłać. Spróbuj ponownie albo zadzwoń: {PHONE_DISPLAY}.</p>
        )}
        {status === 'consent' && <p>Zaznacz zgodę, żeby wysłać zgłoszenie.</p>}
        {status === 'blocked' && (
          <p>
            Główny profil działalności to zlecenia pow. {MIN_AREA_M2} m² (hale, wspólnoty).
            Wykonujemy również mniejsze dachy i garaże w miarę dostępności wolnych terminów.
          </p>
        )}
      </div>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="lf-powierzchnia">Powierzchnia dachu *</label>
          <select
            id="lf-powierzchnia"
            name="powierzchnia"
            value={data.powierzchnia}
            onChange={onChange}
            required
          >
            <option value="">— wybierz —</option>
            {AREA_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        {small && (
          <p className="form-notice" role="alert">
            Główny profil działalności to zlecenia pow. {MIN_AREA_M2} m²; mniejsze dachy i garaże wykonujemy w miarę dostępności wolnych terminów.
          </p>
        )}

        <fieldset disabled={hardBlocked} className="form-fieldset">
          <legend className="visually-hidden">Dane do kontaktu</legend>

          <div className="form-group">
            <label htmlFor="lf-lokalizacja">Lokalizacja obiektu *</label>
            <input
              id="lf-lokalizacja"
              type="text"
              name="lokalizacja"
              value={data.lokalizacja}
              onChange={onChange}
              placeholder="Miejscowość, ulica"
              required
              autoComplete="address-level2"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lf-telefon">Telefon *</label>
            <input
              id="lf-telefon"
              type="tel"
              name="numerTelefonu"
              value={data.numerTelefonu}
              onChange={onChange}
              inputMode="tel"
              pattern="[0-9 +()-]{9,}"
              required
              autoComplete="tel"
            />
          </div>

          <div className="form-group consent-group">
            <input
              type="checkbox"
              id="lf-consent"
              name="consent"
              checked={data.consent}
              onChange={onChange}
              required
            />
            <label htmlFor="lf-consent">
              Zgoda na przetwarzanie danych w celu kontaktu i przygotowania oferty.
            </label>
          </div>

          <button type="submit" disabled={sending || hardBlocked}>
            {sending ? 'Wysyłanie…' : 'Zgłoś przeciek — oddzwaniamy'}
          </button>
        </fieldset>
      </form>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Landing                                                             */
/* ------------------------------------------------------------------ */

const TITLE = 'Naprawa i uszczelnianie dachu płaskiego — Szczecin | Bezpieczny Dach';
const DESCRIPTION =
  'Naprawa i uszczelnianie dachów płaskich z papy: diagnostyka przecieku z odkrywkami, ' +
  `trwałe uszczelnienie. Hale, bloki, obiekty publiczne od ${MIN_AREA_M2} m². ` +
  'Wyjazd w 24 h — 518 144 882';

function NaprawaDachuPlaskiego() {
  return (
    <>
      <Helmet>
        <html lang="pl" />
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={canonical(PATH)} />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:url" content={canonical(PATH)} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />

        <script type="application/ld+json">
          {jsonLd(localBusinessSchema({ path: PATH, description: DESCRIPTION }))}
        </script>
        <script type="application/ld+json">
          {jsonLd(serviceSchema({
            path: PATH,
            serviceName: 'Naprawa i uszczelnianie dachu płaskiego',
            description:
              'Diagnostyka źródła przecieku z odkrywkami kontrolnymi oraz trwałe ' +
              'uszczelnianie pokryć z papy termozgrzewalnej na dachach płaskich.',
          }))}
        </script>
        <script type="application/ld+json">{jsonLd(faqSchema(FAQ_ITEMS))}</script>
        <script type="application/ld+json">
          {jsonLd(breadcrumbSchema([
            { name: 'Strona główna', path: '/' },
            { name: 'Naprawa dachu płaskiego', path: PATH },
          ]))}
        </script>
      </Helmet>

      <LandingHeader subtitle="Naprawa dachów płaskich · Szczecin" />

      <main className="landing landing--naprawa">

        {/* ---------------- PIERWSZY EKRAN ---------------- */}
        <section className="landing-hero">
          <div className="container">
            <h1>
              Naprawa i uszczelnianie dachu płaskiego — przecieki, pęknięcia,
              zalane warstwy
            </h1>

            <p className="landing-hero__lead">
              Znajdujemy źródło przecieku i uszczelniamy je trwale. Wyjazd na obiekt
              w ciągu 24 godzin. <strong>Realizacje od {MIN_AREA_M2} m².</strong>
            </p>

            <div className="landing-hero__cta">
              <PhoneLink className="btn btn--call">
                <span aria-hidden="true">📞</span> Zadzwoń: {PHONE_DISPLAY}
              </PhoneLink>
              <a href="#wycena" className="btn btn--outline">Zgłoś przeciek</a>
            </div>

            <ul className="landing-hero__trust">
              <li>Odkrywki kontrolne i ocena stanu izolacji przed wyceną</li>
              <li>Pracujemy jako podwykonawca generalnego wykonawcy</li>
              <li>Atlas Ward · MG Project · DUNA · TBS Goleniów · TBS Drawsko Pomorskie · Jednostka Wojskowa WSM Szczecin</li>
            </ul>
          </div>
        </section>

        {/* ---------------- FILTR DROBNICY ---------------- */}
        <section className="landing-qualifier" aria-labelledby="dla-kogo">
          <div className="container">
            <h2 id="dla-kogo">Dla kogo pracujemy</h2>
            <p>
              Realizujemy zlecenia od <strong>{MIN_AREA_M2} m²</strong> powierzchni dachu.
              Obsługujemy wspólnoty i spółdzielnie mieszkaniowe, zarządców nieruchomości,
              hale produkcyjne i magazynowe, obiekty użyteczności publicznej oraz
              generalnych wykonawców.
            </p>
            <p className="landing-qualifier__cut">
              Główny profil działalności to zlecenia pow. {MIN_AREA_M2} m² (hale, wspólnoty). Wykonujemy również mniejsze dachy i garaże w miarę dostępności wolnych terminów.
            </p>
          </div>
        </section>

        {/* ---------------- DIAGNOSTYKA ---------------- */}
        <section className="landing-section" aria-labelledby="przyczyny">
          <div className="container">
            <h2 id="przyczyny">Typowe przyczyny przecieku — co diagnozujemy</h2>
            <p className="landing-section__lead">
              Na dachu płaskim woda wchodzi w jednym miejscu, a pojawia się w zupełnie
              innym. Zanim cokolwiek uszczelnimy, ustalamy, którędy naprawdę wchodzi.
            </p>

            <ul className="diag-list">
              <li>
                <h3>Rozszczelnione zgrzewy i zakłady</h3>
                <p>
                  Najczęstsza przyczyna na pokryciach po 10–15 latach. Papa traci
                  elastyczność, zakłady odchodzą na krawędziach.
                </p>
              </li>
              <li>
                <h3>Pęknięcia przy attykach i dylatacjach</h3>
                <p>
                  Ruchy konstrukcji rozrywają pokrycie w miejscach, gdzie zmienia się
                  płaszczyzna. Łatanie bez odtworzenia detalu nic nie da.
                </p>
              </li>
              <li>
                <h3>Nieszczelne obróbki kominów, wpustów i świetlików</h3>
                <p>
                  Przejścia przez połać to najsłabsze punkty dachu. Sprawdzamy kołnierze,
                  mankiety i drożność wpustów.
                </p>
              </li>
              <li>
                <h3>Pęcherze i odspojenia od podłoża</h3>
                <p>
                  Para wodna zamknięta pod pokryciem rozrywa je od spodu. Sygnał, że
                  warstwa pod spodem jest zawilgocona.
                </p>
              </li>
              <li>
                <h3>Zawilgocona izolacja termiczna</h3>
                <p>
                  Wykrywalna tylko odkrywką. Jeśli występuje na większej powierzchni,
                  zmienia całą kalkulację naprawy.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ---------------- NAPRAWA CZY REMONT ---------------- */}
        <section className="landing-section landing-section--alt" aria-labelledby="naprawa-czy-remont">
          <div className="container">
            <h2 id="naprawa-czy-remont">
              Naprawa punktowa czy remont pokrycia — kiedy naprawa nie ma sensu
            </h2>

            <p>
              Jeśli izolacja termiczna jest nasiąknięta na większej powierzchni, naprawa
              punktowa jest wyrzuceniem pieniędzy. Woda migruje między warstwami i wyjdzie
              w innym miejscu, zwykle po pierwszych większych opadach. W takim przypadku
              proponujemy remont pokrycia i mówimy to na wizji lokalnej, a nie po fakcie.
            </p>

            <div className="compare">
              <div className="compare__col">
                <h3>Naprawa punktowa wystarczy, gdy</h3>
                <ul>
                  <li>przeciek ma jedno, dające się wskazać źródło</li>
                  <li>izolacja pod pokryciem jest sucha</li>
                  <li>pokrycie poza uszkodzonym miejscem trzyma parametry</li>
                  <li>nie ma rozległych pęcherzy ani odspojeń</li>
                </ul>
              </div>
              <div className="compare__col">
                <h3>Potrzebny jest remont pokrycia, gdy</h3>
                <ul>
                  <li>odkrywka pokazuje wodę w warstwach izolacji</li>
                  <li>przecieki pojawiają się w kilku miejscach naraz</li>
                  <li>pokrycie jest spękane na dużej powierzchni</li>
                  <li>naprawy punktowe były już robione i nie pomogły</li>
                </ul>
              </div>
            </div>

            <p className="landing-section__note">
              Nie wyceniamy naprawy przez telefon ani ze zdjęć. Wycena bez odkrywki to
              zgadywanie, za które zapłaciłbyś dwa razy.
            </p>
          </div>
        </section>

        {/* ---------------- PRZEBIEG ---------------- */}
        <section className="landing-section" aria-labelledby="przebieg">
          <div className="container">
            <h2 id="przebieg">Jak wygląda wizyta diagnostyczna</h2>
            <ol className="steps">
              <li>
                <h3>Zgłoszenie i ustalenie pilności</h3>
                <p>
                  Pytamy o powierzchnię, rodzaj obiektu i to, czy woda leci do wnętrza.
                  Przy aktywnym zalewaniu wchodzimy w tryb zabezpieczenia doraźnego.
                </p>
              </li>
              <li>
                <h3>Oględziny i odkrywki kontrolne</h3>
                <p>
                  Sprawdzamy połać, detale i stan warstw pod pokryciem. Odkrywki
                  wykonujemy w miejscach, które wynikają z przebiegu przecieku
                  wewnątrz budynku.
                </p>
              </li>
              <li>
                <h3>Decyzja: naprawa czy remont</h3>
                <p>
                  Przedstawiamy ustalenia i rekomendację razem z uzasadnieniem
                  technicznym. Jeśli naprawa punktowa nie ma sensu, mówimy to wprost.
                </p>
              </li>
              <li>
                <h3>Oferta i realizacja</h3>
                <p>
                  Oferta z rozbiciem na materiał i robociznę. Po wykonaniu — protokół
                  odbioru, karty materiałowe i gwarancja na wykonanie.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* ---------------- DOWÓD B2B ---------------- */}
        <section className="landing-section landing-section--alt" aria-labelledby="zaufali">
          <div className="container">
            <h2 id="zaufali">Zaufali nam</h2>
            <ul className="trusted">
              <li>
                <strong>Atlas Ward</strong>
                <span>Generalny Wykonawca</span>
              </li>
              <li>
                <strong>MG Project</strong>
                <span>Generalny Wykonawca</span>
              </li>
              <li>
                <strong>DUNA</strong>
                <span>Generalny Wykonawca</span>
              </li>
              <li>
                <strong>TBS Goleniów</strong>
                <span>Towarzystwo Budownictwa Społecznego</span>
              </li>
              <li>
                <strong>TBS Drawsko Pomorskie</strong>
                <span>Towarzystwo Budownictwa Społecznego</span>
              </li>
              <li>
                <strong>Jednostka Wojskowa WSM</strong>
                <span>Szczecin</span>
              </li>
              <li>
                <strong>Durable</strong>
                <span>Serwis dachów — Przecław, Szczecin</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ---------------- REALIZACJE ---------------- */}
        {GALLERY.length > 0 && (
          <section className="landing-section" aria-labelledby="realizacje">
            <div className="container">
              <h2 id="realizacje">Realizacje napraw dachów płaskich</h2>
              <div className="landing-gallery">
                {GALLERY.map((img) => (
                  <figure key={img.src}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      decoding="async"
                      width="600"
                      height="450"
                    />
                    <figcaption>{img.alt}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ---------------- OBSZAR ---------------- */}
        <section className="landing-section landing-section--alt" aria-labelledby="obszar">
          <div className="container">
            <h2 id="obszar">Gdzie dojeżdżamy</h2>
            <p>
              Szczecin, Goleniów, Stargard, Police, Gryfino, Nowogard, Świnoujście
              i Koszalin — wyjazd na wizję w ciągu 24 godzin roboczych. Przy większych
              kontraktach realizujemy prace na terenie całej Polski.
            </p>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section className="landing-section" aria-labelledby="faq">
          <div className="container">
            <h2 id="faq">Pytania techniczne</h2>
            <dl className="landing-faq">
              {FAQ_ITEMS.map((item) => (
                <div className="landing-faq__item" key={item.q}>
                  <dt>{item.q}</dt>
                  <dd>{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---------------- FORMULARZ ---------------- */}
        <section className="landing-form" id="wycena" aria-labelledby="zglos">
          <div className="container">
            <h2 id="zglos">Zgłoś przeciek — oddzwaniamy</h2>
            <p className="landing-form__lead">
              Trzy pola. Oddzwaniamy w ciągu 24 godzin roboczych i umawiamy wizję
              z odkrywkami. Oględziny i wycena są bezpłatne.
            </p>

            <ShortLeadForm />

            <p className="landing-form__alt">
              Wolisz od razu porozmawiać? <PhoneLink>{PHONE_DISPLAY}</PhoneLink>
            </p>
          </div>
        </section>

      </main>

      <LandingFooter />
      <StickyCallBar showAfter={400} formHref="#wycena" />
    </>
  );
}

export default NaprawaDachuPlaskiego;
