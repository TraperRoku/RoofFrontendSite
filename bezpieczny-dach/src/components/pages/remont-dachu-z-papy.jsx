// src/components/pages/remont-dachu-z-papy.jsx
import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';

import PhoneLink from '../PhoneLink';
import Header from '../Header';
import Footer from '../footer';
import { StickyCallBar } from '../LandingHeader';

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

const PATH = '/remont-dachu-z-papy';

/* ------------------------------------------------------------------ */
/* FAQ — jedno źródło dla treści widocznej i dla JSON-LD.              */
/* Teksty MUSZĄ być identyczne w obu miejscach.                        */
/* ------------------------------------------------------------------ */

const FAQ_ITEMS = [
  {
    q: 'Czy nową papę można ułożyć na istniejącym pokryciu?',
    a: 'Tak, jeśli odkrywki potwierdzą, że podłoże jest suche i stabilne, a stare pokrycie nie przekracza dwóch warstw. W razie potrzeby przygotowujemy podłoże, naprawiamy ubytki i układamy nowy system SBS. Decydujemy o tym zawsze po wizji lokalnej.',
  },
  {
    q: 'Jak długo trwa remont 1000 m² dachu z papy?',
    a: 'Standardowy remont 1000 m² wykonuje 4-osobowa ekipa w około 5–7 dni roboczych, przy pogodzie bez opadów. W tym czasie przygotowujemy podłoże i układamy nowy system SBS. Dokładny termin zależy od stanu dachu, liczby detali i warunków na obiekcie.',
  },
  {
    q: 'Czy remont można wykonać fragmentami, żeby nie zatrzymywać produkcji?',
    a: 'Tak. Dla hal magazynowych i produkcyjnych dzielimy remont na etapy, żeby dostęp do obiektu i praca wewnątrz nie były blokowane. Harmonogram dopasowujemy do potrzeb inwestora, nie odwrotnie.',
  },
  {
    q: 'Jak przygotowujecie podłoże przed ułożeniem nowej papy?',
    a: 'Sprawdzamy stan istniejących warstw, usuwamy luźne fragmenty, szlifujemy nierówności betonu i uzupełniamy ubytki. W razie potrzeby gruntujemy podłoże, stosujemy papę samoprzylepną na styropianie albo mocujemy izolację mechanicznie.',
  },
  {
    q: 'Czy remontujemy dachy w trakcie użytkowania budynku przez mieszkańców?',
    a: 'Tak. Bloki mieszkalne i obiekty użyteczności publicznej remontujemy w trakcie normalnego użytkowania. Informujemy mieszkańców o harmonogramie, zabezpieczamy wejścia i komunikację, sprzątamy codziennie po sobie.',
  },
];

/* ------------------------------------------------------------------ */
/* Galeria — pusta = sekcja się nie renderuje.                    */
/* ------------------------------------------------------------------ */

const GALLERY = [];

/* ------------------------------------------------------------------ */
/* Skrócony formularz: telefon, lokalizacja, powierzchnia.             */
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
          _subject: `REMONT PAPA · ${data.lokalizacja || '—'} · ${data.powierzchnia || '—'}`,
          zrodlo: 'landing:remont-dachu-z-papy',
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
          <p>Zgłoszenie przyjęte. Oddzwaniamy w ciągu 24 h roboczych, żeby umówić wizję z odkrywkami. Pilne? Dzwoń: {PHONE_DISPLAY}.</p>
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
            Główny profil działalności to zlecenia pow. {MIN_AREA_M2} m² (hale, wspólnoty).
            Mniejsze dachy i garaże wykonujemy w miarę dostępności wolnych terminów.
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
            {sending ? 'Wysyłanie…' : 'Zamów wycenę remontu'}
          </button>
        </fieldset>
      </form>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Landing                                                             */
/* ------------------------------------------------------------------ */

const TITLE = 'Remont dachu z papy termozgrzewalnej — Szczecin | Bezpieczny Dach';
const DESCRIPTION =
  'Kompleksowy remont dachów z papy termozgrzewalnej: przygotowanie podłoża, naprawa ubytków i nowy system SBS. Hale, bloki, obiekty publiczne. 15 lat doświadczenia.';

function RemontDachuZPapy() {
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
            serviceName: 'Remont dachu z papy termozgrzewalnej',
            description:
              'Kompleksowy remont dachów z papy termozgrzewalnej: przygotowanie podłoża, naprawa ubytków, nowy dwuwarstwowy system SBS z pełną dokumentacją.',
          }))}
        </script>
        <script type="application/ld+json">{jsonLd(faqSchema(FAQ_ITEMS))}</script>
        <script type="application/ld+json">
          {jsonLd(breadcrumbSchema([
            { name: 'Strona główna', path: '/' },
            { name: 'Remont dachu z papy', path: PATH },
          ]))}
        </script>
      </Helmet>

      <Header />

      <main className="landing landing--naprawa">

        {/* ---------------- PIERWSZY EKRAN ---------------- */}
        <section className="landing-hero">
          <div className="container">
            <h1>
              Remont dachu z papy termozgrzewalnej — wymiana pokrycia na halach, blokach i obiektach publicznych
            </h1>

            <p className="landing-hero__lead">
              Ocena i przygotowanie podłoża, naprawa ubytków oraz nowy dwuwarstwowy system SBS z pełną dokumentacją. Prowadzimy remonty inwestycyjne z odbiorami częściowymi i pisemną gwarancją. <strong>Główny profil działalności to zlecenia pow. 150 m² (hale, wspólnoty). Wykonujemy również mniejsze dachy i garaże w miarę dostępności wolnych terminów.</strong>
            </p>

            <div className="landing-hero__cta">
              <PhoneLink className="btn btn--call">
                <span aria-hidden="true">📞</span> Zadzwoń: {PHONE_DISPLAY}
              </PhoneLink>
              <a href="#wycena" className="btn btn--outline">Zamów wycenę remontu</a>
            </div>

            <ul className="landing-hero__trust">
              <li>Ocena i przygotowanie podłoża przed ułożeniem nowego systemu</li>
              <li>Prowadzimy remonty z inspektorem nadzoru i odbiorami częściowymi</li>
              <li>Atlas Ward · MG Project · DUNA · TBS Goleniów · Jednostka Wojskowa WSM Szczecin · Durable</li>
            </ul>
          </div>
        </section>

        {/* ---------------- KIEDY REMONT A NIE NAPRAWA ---------------- */}
        <section className="landing-section" aria-labelledby="kiedy-remont">
          <div className="container">
            <h2 id="kiedy-remont">Kiedy konieczny jest remont, a nie naprawa punktowa</h2>
            <p className="landing-section__lead">
              Naprawa punktowa ma sens tylko wtedy, gdy problem jest lokalny, a reszta pokrycia jest w dobrym stanie. Poniższe sytuacje to sygnały, że czas na remont całości.
            </p>

            <ul className="diag-list">
              <li>
                <h3>Wiek pokrycia powyżej 15–20 lat</h3>
                <p>
                  Papa traci elastyczność, pojawiają się siateczki pęknięć, cała powierzchnia traci szczelność.
                </p>
              </li>
              <li>
                <h3>Systematyczne przecieki w wielu miejscach</h3>
                <p>
                  Woda nie wchodzi w jednym punkcie, tylko migruje między zawilgoconymi warstwami.
                </p>
              </li>
              <li>
                <h3>Zawilgocona izolacja termiczna na {'>'}20% powierzchni</h3>
                <p>
                  Odkrywka pokazująca mokrą wełnę lub styropian to sygnał do remontu całości.
                </p>
              </li>
              <li>
                <h3>Liczne pęcherze i odspojenia na całej połaci</h3>
                <p>
                  Wskazują na nieprawidłowo wykonane krycie pierwotne lub brak wentylacji.
                </p>
              </li>
              <li>
                <h3>Planowana termomodernizacja lub fotowoltaika</h3>
                <p>
                  Jeśli inwestujesz w ocieplenie lub panele PV, remont pokrycia musi być pierwszym krokiem.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ---------------- PORÓWNANIE ---------------- */}
        <section className="landing-section landing-section--alt" aria-labelledby="porownanie">
          <div className="container">
            <h2 id="porownanie">
              Porównanie: remont całościowy vs wielokrotne naprawy punktowe
            </h2>

            <div className="compare">
              <div className="compare__col">
                <h3>Remont całościowy zamiast ciągłych napraw</h3>
                <ul>
                  <li>Pisemna gwarancja</li>
                  <li>Jedna wycena, jeden harmonogram, jeden wykonawca</li>
                  <li>Brak powtarzających się kosztów napraw każdej wiosny</li>
                  <li>Stan techniczny udokumentowany protokołem i kartami materiałowymi</li>
                </ul>
              </div>
              <div className="compare__col">
                <h3>Łatanie przecieków rok w rok to wyrzucanie pieniędzy</h3>
                <ul>
                  <li>Za 3 lata wydajesz na naprawy więcej niż kosztowałby remont</li>
                  <li>Woda niszczy izolację i konstrukcję, generując coraz wyższe rachunki</li>
                  <li>Brak gwarancji — kolejna naprawa nie gwarantuje poprzednich</li>
                  <li>Trudno udowodnić stan techniczny przy sprzedaży lub finansowaniu</li>
                </ul>
              </div>
            </div>

            <p className="landing-section__note">
              Nie wyceniajemy remontu z Google Maps ani ze zdjęć. Oferta bez pomiaru i oceny warstw pod pokryciem to oszustwo cenowe — zanim skończysz, zapłacisz dwa razy więcej za nieplanowane dodatkowe prace.
            </p>
          </div>
        </section>

        {/* ---------------- ETAPY ---------------- */}
        <section className="landing-section" aria-labelledby="etapy">
          <div className="container">
            <h2 id="etapy">Etapy remontu dachu z papy termozgrzewalnej</h2>
            <ol className="steps">
              <li>
                <h3>Wizja, odkrywki i kosztorys</h3>
                <p>
                  Pomiary powierzchni, 2–3 odkrywki kontrolne w różnych miejscach, ocena stanu podłoża i izolacji. Szczegółowa oferta z rozbiciem na etapy.
                </p>
              </li>
              <li>
                <h3>Przygotowanie podłoża i izolacji</h3>
                <p>
                  Szlifujemy nierówności betonu, uzupełniamy ubytki, gruntujemy podłoże i przygotowujemy izolację do ułożenia nowej papy.
                </p>
              </li>
              <li>
                <h3>Naprawa podłoża i nowy układ warstw</h3>
                <p>
                  Ewentualne wyrównanie betonu, naprawa blachy trapezowej, nowa paroizolacja → izolacja termiczna → papa podkładowa → papa nawierzchniowa.
                </p>
              </li>
              <li>
                <h3>Odbiór końcowy i dokumentacja</h3>
                <p>
                  Szczelność sprawdzana metodą zalania lub przy opadach. Protokół odbioru, pełne karty materiałowe, pisemna gwarancja.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* ---------------- ZAUFALI NAM ---------------- */}
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
              <h2 id="realizacje">Realizacje remontów dachów z papy</h2>
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
            <h2 id="zglos">Zamów wycenę remontu dachu z papy</h2>
            <p className="landing-form__lead">
              Trzy pola. Oddzwaniamy w ciągu 24 godzin roboczych i umawiamy wizję
              z odkrywkami kontrolnymi. Oględziny i kosztorys są bezpłatne.
            </p>

            <ShortLeadForm />

            <p className="landing-form__alt">
              Wolisz od razu porozmawiać? <PhoneLink>{PHONE_DISPLAY}</PhoneLink>
            </p>
          </div>
        </section>

      </main>

      <Footer />
      <StickyCallBar showAfter={400} formHref="#wycena" formText="Zamów wycenę" />
    </>
  );
}

export default RemontDachuZPapy;
