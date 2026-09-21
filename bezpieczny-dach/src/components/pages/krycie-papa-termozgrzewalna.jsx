// src/components/pages/krycie-papa-termozgrzewalna.jsx
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

const PATH = '/krycie-papa-termozgrzewalna';

/* ------------------------------------------------------------------ */
/* FAQ — jedno źródło dla treści widocznej i dla JSON-LD.              */
/* Teksty MUSZĄ być identyczne w obu miejscach.                        */
/* ------------------------------------------------------------------ */

const FAQ_ITEMS = [
  {
    q: 'Czy da się kryć nową papą na istniejącym pokryciu bez demontażu?',
    a: 'Tak, jeśli stare podłoże jest suche, stabilne, a warstw papy nie przekracza dwóch. Weryfikujemy to podczas wizji lokalnej poprzez odkrywki kontrolne — nigdy na podstawie oględzin z poziomu gruntu. Jeśli warstwy są zawilgocone, demontaż jest konieczny.',
  },
  {
    q: 'Czy wystawiacie dokumentację powykonawczą i karty materiałowe?',
    a: 'Tak. Przy inwestycjach dla wspólnot, TBS-ów, instytucji i generalnych wykonawców przekazujemy pełną dokumentację: karty techniczne wbudowanych materiałów (DWU), protokoły odbiorów częściowych, schematy detali i protokół końcowy.',
  },
  {
    q: 'Czy pracujecie jako podwykonawca generalnego wykonawcy?',
    a: 'Tak. Mamy doświadczenie w procesach przetargowych i realizacji dużych kontraktów. Znamy standardy BHP, harmonogramowania i obrotu dokumentacją wymaganą przez generalnych wykonawców. Wystawiamy wszystkie wymagane świadectwa i uprawnienia.',
  },
  {
    q: 'Jaki jest czas realizacji krycia 1000 m² dachu?',
    a: 'Samo krycie papą termozgrzewalną SBS na powierzchni 1000 m² wykonuje standardowo 4-osobowa ekipa w około 5–7 dni roboczych, przy pogodzie bez opadów. Dokładny termin zależy od przygotowania podłoża, liczby detali i warunków na dachu.',
  },
  {
    q: 'Czy istnieje możliwość krycia dachu przy ujemnych temperaturach?',
    a: 'Tak, zimą również pracujemy. Krycie papą SBS możemy wykonywać, jeśli w ciągu dnia temperatura osiąga co najmniej +5°C, podłoże jest suche, a warunki pogodowe pozwalają na prawidłowe zgrzewanie i bezpieczną pracę ekipy. Termin zawsze dobieramy do aktualnej prognozy.',
  },
];

/* ------------------------------------------------------------------ */
/* Galeria — UZUPEŁNIJ ścieżkami swoich zdjęć.                         */
/* Pusta tablica = sekcja się nie renderuje, build nie pęka.           */
/* ------------------------------------------------------------------ */

const GALLERY = [
  // { src: '/realizacje/krycie-1.webp', alt: 'Dwuwarstwowe krycie papy SBS na hali 1200 m² — Szczecin' },
];

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
          _subject: `KRYCIE PAPA · ${data.lokalizacja || '—'} · ${data.powierzchnia || '—'}`,
          zrodlo: 'landing:krycie-papa-termozgrzewalna',
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
          <p>Zgłoszenie przyjęte. Oddzwaniamy w ciągu 24 h roboczych, żeby umówić wizję na obiekcie. Pilne? Dzwoń: {PHONE_DISPLAY}.</p>
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
            {sending ? 'Wysyłanie…' : 'Zamów audyt techniczny'}
          </button>
        </fieldset>
      </form>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Landing                                                             */
/* ------------------------------------------------------------------ */

const TITLE = 'Krycie dachu papą termozgrzewalną SBS — Szczecin | Bezpieczny Dach';
const DESCRIPTION =
  'Krycie dachów płaskich papą termozgrzewalną SBS. Dwuwarstwowe systemy na halach, blokach i obiektach publicznych. Główny profil to zlecenia pow. 150 m², a mniejsze dachy i garaże realizujemy w miarę dostępności. Audyt i dokumentacja powykonawcza — 518 144 882';

function KryciePapaTermozgrzewalna() {
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
            serviceName: 'Krycie dachu papą termozgrzewalną SBS',
            description:
              'Systemowe dwuwarstwowe pokrycia z pap modyfikowanych SBS, zgrzewane na całej powierzchni lub mocowane mechanicznie. Pełna dokumentacja powykonawcza i protokoły odbiorów częściowych.',
          }))}
        </script>
        <script type="application/ld+json">{jsonLd(faqSchema(FAQ_ITEMS))}</script>
        <script type="application/ld+json">
          {jsonLd(breadcrumbSchema([
            { name: 'Strona główna', path: '/' },
            { name: 'Krycie papą termozgrzewalną', path: PATH },
          ]))}
        </script>
      </Helmet>

      <Header />

      <main className="landing landing--naprawa">

        {/* ---------------- PIERWSZY EKRAN ---------------- */}
        <section className="landing-hero">
          <div className="container">
            <h1>
              Krycie dachu papą termozgrzewalną SBS — nowe pokrycia na halach,
              blokach i obiektach publicznych
            </h1>

            <p className="landing-hero__lead">
              Systemowe dwuwarstwowe pokrycia z papy termozgrzewalnej SBS. Dobieramy
              sposób wykonania do podłoża, izolacji i warunków na dachu. <strong>Główny profil działalności to zlecenia pow. {MIN_AREA_M2} m² (hale, wspólnoty). Wykonujemy również mniejsze dachy i garaże w miarę dostępności wolnych terminów.</strong>
            </p>

            <div className="landing-hero__cta">
              <PhoneLink className="btn btn--call">
                <span aria-hidden="true">📞</span> Zadzwoń: {PHONE_DISPLAY}
              </PhoneLink>
              <a href="#wycena" className="btn btn--outline">Zamów audyt techniczny</a>
            </div>

            <ul className="landing-hero__trust">
              <li>Pełna dokumentacja powykonawcza (DWU, karty materiałowe)</li>
              <li>Pracujemy z inspektorami nadzoru i generalnymi wykonawcami</li>
              <li>Atlas Ward · MG Project · DUNA · TBS Goleniów · TBS Drawsko Pomorskie · Jednostka Wojskowa WSM Szczecin · Durable</li>
            </ul>
          </div>
        </section>

        {/* ---------------- FILTR DROBNICY ---------------- */}
        <section className="landing-qualifier" aria-labelledby="dla-kogo">
          <div className="container">
            <h2 id="dla-kogo">Dla kogo pracujemy</h2>
            <p>
              Główny profil działalności to zlecenia pow. <strong>{MIN_AREA_M2} m²</strong> (hale, wspólnoty).
              Obsługujemy wspólnoty i spółdzielnie mieszkaniowe, zarządców nieruchomości,
              hale produkcyjne i magazynowe, obiekty użyteczności publicznej oraz
              generalnych wykonawców.
            </p>
            <p className="landing-qualifier__cut">
              Główny profil działalności to zlecenia pow. {MIN_AREA_M2} m² (hale, wspólnoty). Wykonujemy również mniejsze dachy i garaże w miarę dostępności wolnych terminów.
            </p>
          </div>
        </section>

        {/* ---------------- UKŁADY POKRYĆ ---------------- */}
        <section className="landing-section" aria-labelledby="uklady">
          <div className="container">
            <h2 id="uklady">Układy pokryć — co stosujemy</h2>
            <p className="landing-section__lead">
              Dobieramy system krycia do podłoża, obciążeń i warunków eksploatacji.
              Dobieramy rozwiązanie do rodzaju podłoża i izolacji. W razie potrzeby gruntujemy,
              stosujemy papę samoprzylepną na styropianie, kołkujemy izolację i układamy
              kolejne warstwy papy zgodnie ze sztuką dekarską.
            </p>

            <ul className="diag-list">
              <li>
                <h3>Dwuwarstwowe systemy SBS zgrzewane</h3>
                <p>
                  Gruntujemy podłoże, a następnie zgrzewamy papę podkładową i nawierzchniową.
                  To trwałe rozwiązanie do betonu, starej papy i przygotowanych podłoży.
                </p>
              </li>
              <li>
                <h3>Systemy mocowane mechanicznie</h3>
                <p>
                  Przy ociepleniu lub blasze trapezowej mocujemy warstwy mechanicznie,
                  między innymi przez kołkowanie izolacji, gdy wymaga tego podłoże.
                </p>
              </li>
              <li>
                <h3>Pokrycia balastowe</h3>
                <p>
                  Warstwa pokrycia jest dociskana kruszywem albo płytami betonowymi.
                  Takie rozwiązanie dobieramy do konstrukcji i obciążeń dachu.
                </p>
              </li>
              <li>
                <h3>Inwersyjne układy dachowe</h3>
                <p>
                  Izolacja układana na wierzchu pokrycia, aby dodatkowo chronić dach
                  przed słońcem, mrozem i zmianami temperatury.
                </p>
              </li>
              <li>
                <h3>Układy z warstwą użytkową</h3>
                <p>
                  Wykonujemy warstwy przygotowane pod zielony dach, taras albo bezpieczne
                  przejście serwisowe.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ---------------- PODŁOŻA ---------------- */}
        <section className="landing-section landing-section--alt" aria-labelledby="podloza">
          <div className="container">
            <h2 id="podloza">Podłoża, na których pracujemy</h2>

            <p>
              Krycie papy SBS zaczyna się od poprawnej oceny podłoża. Od tego zależy wybór
              systemu mocowania i trwałość całego pokrycia. Zawsze sprawdzamy to na wizji
              lokalnej — nigdy na podstawie zdjęć.
            </p>

            <div className="compare">
              <div className="compare__col">
                <h3>Podłoża, na których kryjemy bezpośrednio</h3>
                <ul>
                  <li>Betonowe stropy monolityczne i prefabrykowane</li>
                  <li>Blacha trapezowa o odpowiedniej sztywności</li>
                  <li>Płyty warstwowe z odpowiednią sztywnością</li>
                  <li>Istniejąca papa w dobrym stanie (po ocenie)</li>
                </ul>
              </div>
              <div className="compare__col">
                <h3>Podłoża wymagające przygotowania</h3>
                <ul>
                  <li>Stare pokrycia luźne i spękane (wymagają demontażu)</li>
                  <li>Zawilgocona izolacja termiczna (odkrywka kontrolna)</li>
                  <li>Nierówności i ubytki w betonie (szlifowanie betonu i uzupełnienie ubytków)</li>
                  <li>Luźne elementy konstrukcyjne (względy bezpieczeństwa)</li>
                </ul>
              </div>
            </div>

            <p className="landing-section__note">
              Nie wyceniamy krycia przez telefon ani na podstawie zdjęć z drona. Poprawna
              oferta wymaga pomiaru, oceny podłoża i określenia detali — inaczej przepłacasz
              za coś, co nie wytrzyma pierwszego śniegu.
            </p>
          </div>
        </section>

        {/* ---------------- PRZEBIEG INWESTYCJI ---------------- */}
        <section className="landing-section" aria-labelledby="przebieg">
          <div className="container">
            <h2 id="przebieg">Jak prowadzimy inwestycję od wizji po odbiór końcowy</h2>
            <ol className="steps">
              <li>
                <h3>Wizja lokalna i inwentaryzacja techniczna</h3>
                <p>
                  Pomiary połaci, ocena podłoża, spis detali (attyki, kominy, wpusty, świetliki).
                  Jeśli jest potrzeba — odkrywki kontrolne.
                </p>
              </li>
              <li>
                <h3>Oferta techniczna i harmonogram</h3>
                <p>
                  Układ warstw z nazwami materiałów i grubościami, termin realizacji, schematy
                  detali. Forma, którą zaakceptuje inspektor nadzoru.
                </p>
              </li>
              <li>
                <h3>Realizacja etapowa i odbioru częściowe</h3>
                <p>
                  Paroizolacja → izolacja termiczna → papa podkładowa → papa nawierzchniowa.
                  Każdy etap do odbioru przed kolejnym.
                </p>
              </li>
              <li>
                <h3>Odbiór końcowy i dokumentacja</h3>
                <p>
                  Protokół odbioru, pełny zestaw kart materiałowych (DWU), schematy wykonania
                  i pisemna gwarancja.
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
              <h2 id="realizacje">Realizacje kryć dachów papą SBS</h2>
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
            <h2 id="zglos">Zamów audyt techniczny dachu</h2>
            <p className="landing-form__lead">
              Trzy pola. Oddzwaniamy w ciągu 24 godzin roboczych i umawiamy wizję
              z pomiarem. Oględziny i przygotowanie oferty są bezpłatne.
            </p>

            <ShortLeadForm />

            <p className="landing-form__alt">
              Wolisz od razu porozmawiać? <PhoneLink>{PHONE_DISPLAY}</PhoneLink>
            </p>
          </div>
        </section>

      </main>

      <Footer />
      <StickyCallBar showAfter={400} formHref="#wycena" />
    </>
  );
}

export default KryciePapaTermozgrzewalna;
