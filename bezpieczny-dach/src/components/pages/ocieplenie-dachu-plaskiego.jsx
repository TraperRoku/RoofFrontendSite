// src/components/pages/ocieplenie-dachu-plaskiego.jsx
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

const PATH = '/ocieplenie-dachu-plaskiego';

/* ------------------------------------------------------------------ */
/* FAQ — jedno źródło dla treści widocznej i dla JSON-LD.              */
/* Teksty MUSZĄ być identyczne w obu miejscach.                        */
/* ------------------------------------------------------------------ */

const FAQ_ITEMS = [
  {
    q: 'Jaka grubość izolacji jest potrzebna, żeby spełnić aktualne normy?',
    a: 'Dla nowych budynków i remontów dofinansowanych wymagany jest współczynnik U ≤ 0,15 W/m²K. W praktyce oznacza to 18–22 cm styropianu, 14–16 cm płyt PIR lub 22–25 cm wełny mineralnej. Dokładne obliczenia robimy dla każdego obiektu osobno.',
  },
  {
    q: 'Czy da się dołożyć izolację od góry bez demontażu wnętrza?',
    a: 'Tak, to standardowa metoda. Ocieplenie nakładamy od zewnątrz na istniejący strop razem z nowym pokryciem — nie ruszamy sufitu wewnątrz budynku. Konieczne jest wtedy sprawdzenie, czy istniejąca paroizolacja jest szczelna.',
  },
  {
    q: 'Czy ociepleniem dachu można obniżyć rachunki za ogrzewanie o 30%?',
    a: 'W przypadku starych dachów bez izolacji lub z cienką warstwą — nawet więcej. Standardowe oszczędności przy modernizacji z U = 0,6 na U = 0,15 to 25–40% kosztów ogrzewania w zależności od budynku i źródła ciepła.',
  },
  {
    q: 'Czy ocieplenie płytami PIR spełnia wymagania przeciwpożarowe?',
    a: 'Same płyty PIR są reakcji na ogień klasy E lub B-s2,d0 w zależności od producenta. Jeśli obiekt wymaga wyższej klasy ogniowej (np. szkoła, szpital, hala produkcyjna), stosujemy układ PIR + wełna mineralna lub wyłącznie wełnę twardą.',
  },
  {
    q: 'Czy ocieplenie można łączyć z przygotowaniem pod fotowoltaikę?',
    a: 'Jak najbardziej. Jeśli planujesz montaż paneli PV, termomodernizacja to idealny moment. Dopasowujemy sztywność izolacji i rodzaj krycia pod obciążenie paneli i sposób mocowania konstrukcji nośnej dla PV.',
  },
];

/* ------------------------------------------------------------------ */
/* Galeria — pusta = sekcja się nie renderuje.                        */
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
          _subject: `OCIEPLENIE · ${data.lokalizacja || '—'} · ${data.powierzchnia || '—'}`,
          zrodlo: 'landing:ocieplenie-dachu-plaskiego',
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
          <p>Zgłoszenie przyjęte. Oddzwaniamy w ciągu 24 h roboczych, żeby umówić wizję z pomiarami. Pilne? Dzwoń: {PHONE_DISPLAY}.</p>
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
            {sending ? 'Wysyłanie…' : 'Zamów audyt energetyczny'}
          </button>
        </fieldset>
      </form>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Landing                                                             */
/* ------------------------------------------------------------------ */

const TITLE = 'Docieplenie i ocieplenie dachu płaskiego — Szczecin | Bezpieczny Dach';
const DESCRIPTION =
  'Ocieplenie dachów płaskich płytami PIR, styropapą i wełną mineralną. ' +
  'Termomodernizacja razem z nową papą termozgrzewalną. ' +
  `Hale, bloki, obiekty publiczne od ${MIN_AREA_M2} m².`;

function OcieplenieDachuPlaskiego() {
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
            serviceName: 'Ocieplenie i docieplenie dachu płaskiego',
            description:
              'Termomodernizacja dachów płaskich płytami PIR, styropapą i wełną mineralną ' +
              'razem z nową papą termozgrzewalną. Hale, bloki, obiekty publiczne od 150 m².',
          }))}
        </script>
        <script type="application/ld+json">{jsonLd(faqSchema(FAQ_ITEMS))}</script>
        <script type="application/ld+json">
          {jsonLd(breadcrumbSchema([
            { name: 'Strona główna', path: '/' },
            { name: 'Ocieplenie dachu płaskiego', path: PATH },
          ]))}
        </script>
      </Helmet>

      <Header />

      <main className="landing landing--ocieplenie">

        {/* ---------------- PIERWSZY EKRAN ---------------- */}
        <section className="landing-hero">
          <div className="container">
            <h1>
              Ocieplenie dachu płaskiego — płyty PIR, styropapa i wełna mineralna
              twarda razem z nową papą termozgrzewalną
            </h1>

            <p className="landing-hero__lead">
              Termomodernizacja z uwzględnieniem współczynnika przenikania ciepła U ≤ 0,15 W/m²K.
              Jedna ekipa robi ocieplenie i nowe pokrycie — jeden harmonogram, jedna gwarancja na
              cały układ warstw. <strong>Realizacje od {MIN_AREA_M2} m² powierzchni dachu.</strong>
            </p>

            <div className="landing-hero__cta">
              <PhoneLink className="btn btn--call">
                <span aria-hidden="true">📞</span> Zadzwoń: {PHONE_DISPLAY}
              </PhoneLink>
              <a href="#wycena" className="btn btn--outline">Zamów audyt energetyczny</a>
            </div>

            <ul className="landing-hero__trust">
              <li>Obliczenia cieplne i dobór grubości izolacji pod wymagania techniczne</li>
              <li>Jedna ekipa: ocieplenie + nowe krycie papą = nie ma winnego przy problemie</li>
              <li>Atlas Ward · MG Project · DUNA · TBS Goleniów · TBS Drawsko Pomorskie · Jednostka Wojskowa WSM Szczecin · Durable</li>
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

        {/* ---------------- MATERIAŁY IZOLACYJNE ---------------- */}
        <section className="landing-section" aria-labelledby="materialy">
          <div className="container">
            <h2 id="materialy">Materiały izolacyjne — kiedy co stosujemy</h2>
            <p className="landing-section__lead">
              Dobór technologii zależy od wymagań cieplnych, warunków pożarowych, wysokości attyki
              i budżetu. Poniżej najczęściej stosowane układy na dachach płaskich.
            </p>

            <ul className="diag-list">
              <li>
                <h3>Płyty PIR (PUR)</h3>
                <p>
                  Najwyższa izolacyjność przy najmniejszej grubości. Idealne gdy warstwa izolacyjna musi być jak najcieńsza, przy zachowaniu najwyższych parametrów cieplnych
                  lub ogranicza nas wysokość attyki. Lambda λ = 0,022–0,026 W/mK.
                </p>
              </li>
              <li>
                <h3>Styropapa (styropian + papka spiekana)</h3>
                <p>
                  Ekonomiczne rozwiązanie do renowacji na starych dachach z dobrą paroizolacją.
                  Szybka aplikacja, dobra cena za jednostkę izolacji.
                </p>
              </li>
              <li>
                <h3>Wełna mineralna twarda</h3>
                <p>
                  Obowiązkowa przy wymaganiach przeciwpożarowych (obiekty użyteczności publicznej,
                  hale z produkcją). Niepalna, paroprzepuszczalna.
                </p>
              </li>
              <li>
                <h3>Płyty klinowe do formowania spadków</h3>
                <p>
                  Pomagają odprowadzać wodę na starych dachach bez odpowiedniego spadku.
                  To lżejszy i szybszy sposób na wykonanie spadków niż ciężkie wyrównywanie
                  całej powierzchni dachu.
                </p>
              </li>
              <li>
                <h3>Dwukomorowe układy izolacji (PIR + wełna)</h3>
                <p>
                  Kombinacja najwyższej szczelności cieplnej i odporności ogniowej. Dla obiektów,
                  gdzie bezpieczeństwo i oszczędności są równie ważne.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ---------------- JEDEN WYKONAWCA CZY DWA ---------------- */}
        <section className="landing-section landing-section--alt" aria-labelledby="jeden-wykonawca">
          <div className="container">
            <h2 id="jeden-wykonawca">
              Dlaczego ocieplenie i nową papę musisz zrobić u jednego wykonawcy
            </h2>

            <div className="compare">
              <div className="compare__col">
                <h3>Jeden wykonawca na cały układ warstw</h3>
                <ul>
                  <li>Jedna gwarancja — nie ma dyskusji czy problem jest w izolacji czy w papie</li>
                  <li>Jeden harmonogram — nie czekasz 3 tygodnie na drugą ekipę między etapami</li>
                  <li>Spójna dokumentacja — inspektor nadzoru widzi jedną ofertę i jeden protokół</li>
                  <li>Odpowiedzialność nie jest dzielona — w razie problemu wiesz, kogo dzwonić</li>
                </ul>
              </div>
              <div className="compare__col">
                <h3>Dwie ekipy = podwójny problem</h3>
                <ul>
                  <li>Każdy wykonawca wini drugiego za przeciek lub zawilgocenie</li>
                  <li>Przerwy między etapami = ryzyko zawilgocenia izolacji deszczem</li>
                  <li>Dwa kosztorysy, dwa terminy, dwa protokoły do koordynacji</li>
                  <li>Gwarancja nie obejmuje miejsc styku obu robót</li>
                </ul>
              </div>
            </div>

            <p className="landing-section__note">
              Nie liczymy grubości izolacji „na oko&quot;. Każda oferta ma obliczony współczynnik U
              dla całego układu warstw — razem z mostkami cieplnymi od attyk i wpustów. Wiesz, jaki
              efekt cieplny dostaniesz.
            </p>
          </div>
        </section>

        {/* ---------------- PRZEBIEG TERMOMODERNIZACJI ---------------- */}
        <section className="landing-section" aria-labelledby="przebieg">
          <div className="container">
            <h2 id="przebieg">Jak prowadzimy termomodernizację z nowym kryciem</h2>
            <ol className="steps">
              <li>
                <h3>Audyt energetyczny i pomiary</h3>
                <p>
                  Pomiary istniejącej grubości izolacji, ocena mostków cieplnych, obliczenia
                  współczynnika U. Sugerujemy wariant optymalny i wariant premium z dofinansowaniem.
                </p>
              </li>
              <li>
                <h3>Dobór materiałów i układ warstw</h3>
                <p>
                  Wybór technologii (PIR / styropapa / wełna) wraz z grubością i sposobem mocowania.
                  Określenie wymagań przeciwpożarowych.
                </p>
              </li>
              <li>
                <h3>Demontaż starego pokrycia → nowa izolacja → nowa papa</h3>
                <p>
                  Całość w jednym cyklu, bez przerw między etapami. Każda warstwa do odbioru przed
                  położeniem następnej.
                </p>
              </li>
              <li>
                <h3>Końcowe pomiary i dokumentacja</h3>
                <p>
                  Protokoły odbioru, karty materiałowe wszystkich warstw, obliczenia cieplne,
                  pisemna gwarancja na cały układ.
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
              <h2 id="realizacje">Realizacje ociepleń dachów płaskich</h2>
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
              i Koszalin — wyjazd na audyt w ciągu 24 godzin roboczych. Przy większych
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
            <h2 id="zglos">Zamów audyt energetyczny dachu</h2>
            <p className="landing-form__lead">
              Trzy pola. Oddzwaniamy w ciągu 24 godzin roboczych i umawiamy wizję z pomiarem
              istniejącej izolacji i obliczeniami U. Wizyta i przygotowanie oferty są bezpłatne.
            </p>

            <ShortLeadForm />

            <p className="landing-form__alt">
              Wolisz od razu porozmawiać? <PhoneLink>{PHONE_DISPLAY}</PhoneLink>
            </p>
          </div>
        </section>

      </main>

      <Footer />
      <StickyCallBar showAfter={400} formHref="#wycena" formText="Zamów audyt" />
    </>
  );
}

export default OcieplenieDachuPlaskiego;
