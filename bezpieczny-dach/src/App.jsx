import React, { Suspense, lazy, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Service from './components/Service';
import ContactSection from './components/ContactSection';
import Realization from './components/Realization';
import RepairSection from './components/RepairSection';
import Testimonials from './components/Testimonials';
import Footer from './components/footer';
import RecentProjects from './components/RecentProjects';


import {
  canonical,
  localBusinessSchema,
  jsonLd,
  MIN_AREA_M2,
  PHONE_DISPLAY,
  BUSINESS,
} from './seo/site';

import './App.css';

/* ------------------------------------------------------------------ */
/* Lazy routes — Realizacje i jej galeria nie mogą siedzieć w bundlu    */
/* ładowanym przy wejściu na stronę główną.                            */
/* ------------------------------------------------------------------ */

const DachyPlaskie          = lazy(() => import('./components/pages/dachy-plaskie'));
const PapaTermozgrzewalna   = lazy(() => import('./components/pages/papaTermozgrzewalna'));
const DocieplanieDachow     = lazy(() => import('./components/pages/docieplanie-dachow'));
const AboutUs               = lazy(() => import('./components/pages/aboutUs'));
const Wykonawstwo           = lazy(() => import('./components/pages/wykonawstwo'));
const FAQ                   = lazy(() => import('./components/pages/faq'));
const Realizacje            = lazy(() => import('./components/pages/realizacje'));

const NaprawaDachuPlaskiego = lazy(() => import('./components/pages/naprawa-dachu-plaskiego'));
const KryciePapaTermo       = lazy(() => import('./components/pages/krycie-papa-termozgrzewalna'));
const RemontDachuZPapy      = lazy(() => import('./components/pages/remont-dachu-z-papy'));
const OcieplenieDachuPlask  = lazy(() => import('./components/pages/ocieplenie-dachu-plaskiego'));

/* ------------------------------------------------------------------ */
/* ScrollToHashElement                                                 */
/* ------------------------------------------------------------------ */

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const el = document.querySelector(location.hash);
    if (!el) return;
    const t = setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
    return () => clearTimeout(t);
  }, [location]);

  return null;
}

/* ------------------------------------------------------------------ */
/* B2B Trust Strip — widoczny OD RAZU pod Hero (dowody społeczne B2B)  */
/* ------------------------------------------------------------------ */

function HomeTrustStrip() {
  return (
    <section className="home-trust-strip" aria-label="Zaufali nam — referencje B2B">
      <div className="container">
        <p className="home-trust-strip__label">
          Pracujemy dla instytucji, wspólnot mieszkaniowych i generalnych wykonawców
        </p>

        <ul className="home-trust-strip__grid">
          <li className="home-trust-strip__item">
            <div className="home-trust-strip__icon" aria-hidden="true">🏗️</div>
            <strong>Atlas Ward</strong>
            <span>Generalny Wykonawca</span>
          </li>
          <li className="home-trust-strip__item">
            <div className="home-trust-strip__icon" aria-hidden="true">🏗️</div>
            <strong>MG Project</strong>
            <span>Generalny Wykonawca</span>
          </li>
          <li className="home-trust-strip__item">
            <div className="home-trust-strip__icon" aria-hidden="true">🏗️</div>
            <strong>DUNA</strong>
            <span>Generalny Wykonawca</span>
          </li>
          <li className="home-trust-strip__item">
            <div className="home-trust-strip__icon" aria-hidden="true">🏢</div>
            <strong>TBS Goleniów</strong>
            <span>Towarzystwo Budownictwa Społecznego</span>
          </li>
          <li className="home-trust-strip__item">
            <div className="home-trust-strip__icon" aria-hidden="true">🎖️</div>
            <strong>Jednostka Wojskowa WSM</strong>
            <span>Szczecin — obiekty wojskowe</span>
          </li>
          <li className="home-trust-strip__item">
            <div className="home-trust-strip__icon" aria-hidden="true">🏭</div>
            <strong>Durable</strong>
            <span>Serwis dachów — Przecław, Szczecin</span>
          </li>
          <li className="home-trust-strip__item">
            <div className="home-trust-strip__icon" aria-hidden="true">👷</div>
            <strong>Generalni wykonawcy</strong>
            <span>Podwykonawstwo dekarskie w postępowaniach</span>
          </li>
        </ul>

        <div className="home-trust-strip__badges" aria-label="Dowody kompetencji">
          <span className="home-trust-strip__badge">15 lat doświadczenia w branży</span>
          <span className="home-trust-strip__badge">700+ zrealizowanych projektów B2B</span>
          <span className="home-trust-strip__badge">Pełna dokumentacja powykonawcza</span>
          <span className="home-trust-strip__badge">Praca z inspektorem nadzoru</span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Treść SEO strony głównej                                            */
/*                                                                     */
/* Kopia B2B: świadomie odrzuca małe zlecenia (< 150 m²),             */
/* buduje komunikację wokół dokumentacji, odbiorów i audytu.          */
/* Ujednolicone liczby projektów: 700+, doświadczenie: 15 lat.        */
/* ------------------------------------------------------------------ */

function SEOContent() {
  return (
    <section className="seo-content">
      <div className="container">

        <div className="seo-intro">
          <h2 className="seo-main-heading">
            Dachy płaskie i papa termozgrzewalna — Szczecin i województwo zachodniopomorskie
          </h2>
          <p className="seo-lead">
            Jesteśmy specjalistyczną firmą dekarską z <strong>15-letnim doświadczeniem</strong>,
            która pracuje <strong>wyłącznie na dachach płaskich</strong>. Kryjemy, remontujemy,
            naprawiamy i ocieplamy pokrycia z papy termozgrzewalnej SBS na halach produkcyjnych
            i magazynowych, blokach mieszkaniowych, obiektach użyteczności publicznej oraz
            kontraktach dla generalnych wykonawców.
          </p>
          <p className="seo-qualifier">
            Główny profil działalności to zlecenia pow. {MIN_AREA_M2} m² (hale, wspólnoty).
            Wykonujemy również mniejsze dachy i garaże w miarę dostępności wolnych terminów.
          </p>
        </div>

        <div className="seo-grid">

          <article className="seo-card">
            <h3>
              <Link to="/krycie-papa-termozgrzewalna">
                Krycie dachu papą termozgrzewalną SBS
              </Link>
            </h3>
            <p>
              Dwuwarstwowe systemowe pokrycia z pap modyfikowanych SBS — zgrzewane na całej
              powierzchni lub mocowane mechanicznie, w zależności od podłoża i wymagań projektu.
              Dla wspólnot, instytucji i generalnych wykonawców.
            </p>
            <ul className="seo-list">
              <li>Podłoża betonowe, blacha trapezowa, płyta warstwowa, przygotowana stara papa</li>
              <li>Krycie bezpośrednio na styropapie, płytach PIR lub twardej wełnie mineralnej</li>
              <li>Obróbki attyk, kominów, wpustów, świetlików, wyłazów i dylatacji konstrukcyjnych</li>
              <li>Protokóły odbiorów częściowych, karty materiałowe DWU i gwarancja pisemna</li>
            </ul>
          </article>

          <article className="seo-card">
            <h3>
              <Link to="/remont-dachu-z-papy">
                Remont dachu z papy termozgrzewalnej
              </Link>
            </h3>
            <p>
              Kompleksowy remont inwestycyjny: demontaż starego pokrycia, naprawa podłoża,
              ewentualna termomodernizacja i nowy dwuwarstwowy układ SBS. Prowadzimy remonty
              pod nadzorem inspektora, z odbiorami częściowymi i pełną dokumentacją.
            </p>
            <ul className="seo-list">
              <li>Wywóz i utylizacja odpadów dekarskich na uprawnionych składowiskach</li>
              <li>Odkrywki kontrolne oceniające zawilgocenie izolacji termicznej</li>
              <li>Możliwość realizacji fragmentami przy ciągłym użytkowaniu budynku</li>
              <li>Przygotowanie dachu pod fotowoltaikę i zielone dachy użytkowe</li>
            </ul>
          </article>

          <article className="seo-card">
            <h3>
              <Link to="/naprawa-dachu-plaskiego">
                Naprawa i uszczelnianie dachu płaskiego
              </Link>
            </h3>
            <p>
              Diagnostyka źródła przecieku z odkrywkami kontrolnymi i trwałe uszczelnienie.
              Wyjazd na obiekt w ciągu 24 godzin roboczych dla zleceń od 150 m² powierzchni dachu.
            </p>
            <ul className="seo-list">
              <li>Rozszczelnione zgrzewy i zakłady po 10–15 latach eksploatacji</li>
              <li>Pęknięcia przy attykach, dylatacjach i przejściach przez połać</li>
              <li>Nieszczelne obróbki kominów, wpustów dachowych i świetlików</li>
              <li>Pęcherze, odspojenia i zawilgocona izolacja pod pokryciem</li>
            </ul>
          </article>

          <article className="seo-card">
            <h3>
              <Link to="/ocieplenie-dachu-plaskiego">
                Ocieplenie i termomodernizacja dachu płaskiego
              </Link>
            </h3>
            <p>
              Kompleksowa termomodernizacja razem z nowym pokryciem z papy — jedna ekipa,
              jeden harmonogram, jedna pisemna gwarancja na cały układ warstw. Obliczenia
              współczynnika U zgodne z aktualnymi normami WT 2021.
            </p>
            <ul className="seo-list">
              <li>Styropapa z papą nawierzchniową SBS — ekonomiczne rozwiązanie</li>
              <li>Płyty PIR/PUR — najwyższa izolacyjność przy najmniejszej grubości</li>
              <li>Wełna mineralna twarda — obowiązkowa przy wymaganiach PPOŻ</li>
              <li>Płyty klinowe do lekkiego i szybkiego wykonania spadków</li>
            </ul>
          </article>

        </div>

        <div className="seo-faq">
          <h2>Pytania techniczne, które najczęściej zadają inwestorzy B2B</h2>

          <div className="seo-faq-list">
            <div className="seo-faq-item">
              <h3>Czy pracujecie jako podwykonawca generalnego wykonawcy?</h3>
              <p>
                Tak. Realizujemy zakresy dekarskie na zlecenie generalnych wykonawców
                oraz startujemy w postępowaniach przetargowych na roboty pokryciowe.
                Wystawiamy pełną dokumentację powykonawczą, uczestniczymy w odbiorach
                częściowych i końcowych, pracujemy według harmonogramów Gantta.
                Znamy standardy BHP wymagane na dużych budowach.
              </p>
            </div>

            <div className="seo-faq-item">
              <h3>Czy można kryć nową papą na istniejącym pokryciu bez demontażu?</h3>
              <p>
                Bywa to możliwe, jeśli podłoże jest suche, warstwy nie są zawilgocone,
                a istniejące pokrycie nie przekracza dwóch warstw. Rozstrzyga o tym
                <strong> odkrywka kontrolna wykonana na wizji lokalnej</strong>,
                a nie oględziny z poziomu gruntu lub zdjęcie z drona. Jeśli izolacja
                pod spodem jest mokra — demontaż jest konieczny i mówimy to na wizji,
                zanim wystawimy ofertę.
              </p>
            </div>

            <div className="seo-faq-item">
              <h3>Jak duże obiekty i z jakiego minimum przyjmujecie?</h3>
              <p>
                Główny profil działalności to zlecenia pow. {MIN_AREA_M2} m² (hale, wspólnoty).
                Wykonujemy również mniejsze dachy i garaże w miarę dostępności wolnych terminów.
                Górnej granicy nie mamy: realizujemy
                pojedyncze inwestycje nawet na kilka tysięcy metrów kwadratowych.
              </p>
            </div>

            <div className="seo-faq-item">
              <h3>Czy wystawiacie dokumentację powykonawczą i karty materiałowe?</h3>
              <p>
                Tak. Dla każdej inwestycji przekazujemy protokół końcowy odbioru,
                pełne karty techniczne materiałów (DWU), schematy detali krycia
                oraz pisemną gwarancję na wykonanie. Jeśli inwestor wymaga
                dodatkowo protokołów odbiorów częściowych po każdej warstwie
                układu — realizujemy to w standardzie, bez dopłat.
              </p>
            </div>
          </div>

          <Link to="/faq" className="see-more-button">Zobacz pełną bazę wiedzy technicznej</Link>
        </div>

        <div className="seo-area">
          <h2>Obszar działania i dojazdu</h2>
          <p>
            <strong>Szczecin, Goleniów, Stargard, Police, Gryfino, Nowogard, Świnoujście
            i Koszalin.</strong> Wyjazd na wizję lokalną — w ciągu 24 godzin roboczych.
            Przy kontraktach powyżej 2000 m² realizujemy prace na terenie całej Polski.
          </p>
        </div>

      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Strona główna — nowa hierarchia:                                    */
/*                                                                     */
/*  Header → Hero → TRUST STRIP B2B (widoczne OD RAZU) → Usługi →     */
/*  Realizacje → Opinie → SEO content → Awaryjne → Kontakt → Footer   */
/* ------------------------------------------------------------------ */

function HomePage() {
  const schema = localBusinessSchema({
    path: '/',
    description:
      'Specjalistyczne wykonawstwo dachów płaskich i pokryć z papy termozgrzewalnej SBS ' +
      'w Szczecinie i województwie zachodniopomorskim. Krycie, remonty, naprawy i ocieplenia ' +
      `hali, bloków, obiektów publicznych. Główny profil działalności to zlecenia pow. ${MIN_AREA_M2} m², a mniejsze dachy i garaże wykonujemy w miarę dostępności. ` +
      'Audyt techniczny na obiekcie — 518 144 882',
  });

  return (
    <div>
      <Helmet>
        <html lang="pl" />
        <title>
          Dachy płaskie i papa termozgrzewalna SBS — Szczecin | {BUSINESS.legalName}
        </title>
        <meta
          name="description"
          content={
            'Specjalistyczne wykonawstwo dachów płaskich: krycie papą termozgrzewalną SBS, ' +
            'remonty, naprawy i ocieplenia hale, bloków, obiektów publicznych. ' +
            `Główny profil działalności to zlecenia pow. ${MIN_AREA_M2} m²; mniejsze dachy i garaże realizujemy w miarę dostępności. Dokumentacja powykonawcza, audyt techniczny — ${PHONE_DISPLAY}`
          }
        />

        <link rel="canonical" href={canonical('/')} />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large"
        />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:url" content={canonical('/')} />
        <meta
          property="og:title"
          content={`Dachy płaskie i papa termozgrzewalna — Szczecin | ${BUSINESS.legalName}`}
        />
        <meta
          property="og:description"
          content={
            'Specjalistyczne wykonawstwo dachów płaskich dla B2B. Hale, bloki, obiekty ' +
            `publiczne — głównie pow. ${MIN_AREA_M2} m². Referencje: Atlas Ward, MG Project, DUNA, TBS Goleniów, WSM Szczecin, Durable.`
          }
        />

        <script type="application/ld+json">{jsonLd(schema)}</script>
      </Helmet>

      <ScrollToHashElement />
      <Header />
      <main>
        <HeroSection />
        <HomeTrustStrip />
        <RecentProjects />
        <Realization />
        <Service />
        <Testimonials />
        <SEOContent />
        <RepairSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ */

function RouteFallback() {
  return <div className="route-fallback" style={{ minHeight: '60vh' }} aria-hidden="true" />;
}

function App() {
  return (
    <Router>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Landingi dedykowane Google Ads */}
          <Route path="/naprawa-dachu-plaskiego"     element={<NaprawaDachuPlaskiego />} />
          <Route path="/krycie-papa-termozgrzewalna" element={<KryciePapaTermo />} />
          <Route path="/remont-dachu-z-papy"         element={<RemontDachuZPapy />} />
          <Route path="/ocieplenie-dachu-plaskiego"  element={<OcieplenieDachuPlask />} />

          {/* Strony serwisowe / organiczne */}
          <Route path="/dachy-plaskie"        element={<DachyPlaskie />} />
          <Route path="/papa-termozgrzewalna" element={<PapaTermozgrzewalna />} />
          <Route path="/docieplanie-dachow"   element={<DocieplanieDachow />} />
          <Route path="/wykonawstwo"          element={<Wykonawstwo />} />
          <Route path="/realizacje"           element={<Realizacje />} />
          <Route path="/o-nas"                element={<AboutUs />} />
          <Route path="/faq"                  element={<FAQ />} />

          {/* Literówka w Final URL reklamy nie może kończyć się białą stroną */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
