import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../footer';
import ContactSection from '../ContactSection';
import PhoneLink from '../PhoneLink';
import { canonical, BUSINESS } from '../../seo/site';
import pvcRoof from '../realizacje/thumbs/88f.webp';
import './MembranaPVC.css';

const FAQ_ITEMS = [
  {
    question: 'Na jakich obiektach wykonujecie pokrycia z membrany PVC?',
    answer: 'Pracujemy przede wszystkim na dachach hal i magazynów, a także na budynkach usługowych, obiektach użyteczności publicznej i dachach budynków mieszkalnych. Zakres dobieramy do konstrukcji oraz stanu podłoża. Mniejsze obiekty również możemy ocenić indywidualnie.',
  },
  {
    question: 'Jak łączone są arkusze membrany PVC?',
    answer: 'Zakłady membrany zgrzewa się gorącym powietrzem. Szczegóły przy attykach, wpustach, przejściach instalacyjnych i krawędziach wykonuje się zgodnie z wymaganiami konkretnego systemu.',
  },
  {
    question: 'Czy membranę PVC można ułożyć na istniejącym pokryciu?',
    answer: 'Możliwość renowacji zależy od stanu i rodzaju istniejących warstw. Przed doborem rozwiązania oceniamy podłoże; przy materiałach bitumicznych może być wymagana warstwa rozdzielająca, zgodnie z dokumentacją producenta membrany.',
  },
  {
    question: 'Od czego zależy wycena dachu z membrany PVC?',
    answer: 'Na cenę wpływają między innymi powierzchnia i geometria dachu, rodzaj podłoża, sposób mocowania, liczba detali oraz zakres przygotowania i docieplenia. Po oględzinach przygotowujemy wycenę dopasowaną do obiektu.',
  },
];

function MembranaPVC() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Wykonawstwo dachów z membrany PVC',
    serviceType: 'Montaż i renowacja pokryć dachowych z membrany PVC',
    provider: {
      '@type': 'RoofingContractor',
      name: BUSINESS.legalName,
      telephone: '+48518144882',
      url: canonical('/membrana-pvc'),
    },
    areaServed: BUSINESS.addressRegion,
    url: canonical('/membrana-pvc'),
  };

  return (
    <>
      <Helmet>
        <title>Dachy z membrany PVC Szczecin i zachodniopomorskie | Bezpieczny Dach</title>
        <meta
          name="description"
          content="Wykonujemy dachy z membrany PVC na halach, magazynach i innych obiektach. Dobór systemu, zgrzewanie detali i wycena po oględzinach. Zadzwoń: 518 144 882."
        />
        <link rel="canonical" href={canonical('/membrana-pvc')} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dachy z membrany PVC | Bezpieczny Dach" />
        <meta property="og:description" content="Wykonawstwo pokryć dachowych z membrany PVC na halach i innych obiektach w województwie zachodniopomorskim." />
        <meta property="og:url" content={canonical('/membrana-pvc')} />
        <meta property="og:image" content={pvcRoof} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header />

      <main className="pvc-page">
        <section className="pvc-hero">
          <div className="pvc-shell">
            <div className="pvc-hero__grid">
              <div className="pvc-hero__content">
                <p className="pvc-eyebrow">Dachy płaskie · Szczecin i zachodniopomorskie</p>
                <h1>Membrana PVC na dachy hal i nie tylko</h1>
                <p className="pvc-hero__lead">
                  Wykonujemy pokrycia z membran PVC na obiektach przemysłowych,
                  magazynowych, usługowych i mieszkalnych. Dobieramy sposób
                  mocowania i detale do konstrukcji dachu oraz wymagań systemu.
                </p>
                <div className="pvc-hero__actions">
                  <PhoneLink className="pvc-button pvc-button--primary">Zadzwoń: 518 144 882</PhoneLink>
                  <a className="pvc-button pvc-button--secondary" href="#contact">Poproś o wycenę</a>
                </div>
              </div>
              <figure className="pvc-hero__image">
                <img
                  src={pvcRoof}
                  alt="Pokrycie dachu płaskiego membraną PVC z widocznymi zgrzewanymi zakładami"
                  width="1440"
                  height="810"
                  fetchPriority="high"
                />
                <figcaption>Pokrycie dachu płaskiego membraną PVC</figcaption>
              </figure>
            </div>
            <ul className="pvc-hero__facts" aria-label="Zakres usług">
              <li>Hale i magazyny</li>
              <li>Obiekty usługowe i mieszkalne</li>
              <li>Nowe dachy i renowacje</li>
            </ul>
          </div>
        </section>

        <section className="pvc-section pvc-scope">
          <div className="pvc-shell">
            <div className="pvc-section__heading">
              <p className="pvc-eyebrow">System dopasowany do dachu</p>
              <h2>Jedna technologia, różne typy obiektów</h2>
              <p>
                Membrany PVC sprawdzają się na rozległych dachach płaskich, ale
                o prawidłowym rozwiązaniu decydują warunki konkretnej inwestycji:
                podłoże, układ warstw, odwodnienie i sposób użytkowania dachu.
              </p>
            </div>
            <div className="pvc-scope__grid">
              <article className="pvc-scope__item">
                <span className="pvc-scope__number">01</span>
                <h3>Hale i magazyny</h3>
                <p>Planowanie prac na dużych połaciach z uwzględnieniem podłoża, obróbek i organizacji obiektu.</p>
              </article>
              <article className="pvc-scope__item">
                <span className="pvc-scope__number">02</span>
                <h3>Budynki usługowe i publiczne</h3>
                <p>Pokrycia nowych dachów i modernizacje obiektów o zróżnicowanej geometrii oraz liczbie detali.</p>
              </article>
              <article className="pvc-scope__item">
                <span className="pvc-scope__number">03</span>
                <h3>Wspólnoty i mniejsze obiekty</h3>
                <p>Oceniamy również dachy budynków mieszkalnych oraz mniejsze zlecenia, zależnie od zakresu i dostępności terminów.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="pvc-method">
          <div className="pvc-shell pvc-method__grid">
            <div>
              <p className="pvc-eyebrow">Ważne są warstwy i detale</p>
              <h2>Jak przebiega wykonanie pokrycia PVC?</h2>
              <p>
                Membranę mocuje się mechanicznie, klei lub układa w innym
                rozwiązaniu przewidzianym przez producenta i projekt. Zakłady
                łączy się gorącym powietrzem, a obróbki przy attykach, wpustach
                i przejściach instalacyjnych wymagają starannego dopasowania.
              </p>
              <p>
                Przy renowacji sprawdzamy istniejące warstwy. PVC nie powinno
                stykać się bezpośrednio z niektórymi materiałami bitumicznymi,
                dlatego w zależności od układu może być potrzebna warstwa
                rozdzielająca wskazana w dokumentacji systemu.
              </p>
              <Link className="pvc-text-link" to="/papa-termozgrzewalna">
                Zobacz również pokrycia z papy termozgrzewalnej <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ol className="pvc-process">
              <li><span>01</span><div><h3>Oględziny i pomiary</h3><p>Ustalamy stan podłoża, geometrię dachu i zakres prac.</p></div></li>
              <li><span>02</span><div><h3>Dobór rozwiązania</h3><p>Określamy układ warstw, mocowanie oraz sposób wykończenia detali.</p></div></li>
              <li><span>03</span><div><h3>Montaż membrany</h3><p>Przygotowujemy podłoże, układamy membranę i zgrzewamy zakłady.</p></div></li>
              <li><span>04</span><div><h3>Kontrola i odbiór</h3><p>Sprawdzamy newralgiczne połączenia i uzgadniamy zakończenie robót.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="pvc-section pvc-faq">
          <div className="pvc-shell pvc-faq__inner">
            <div className="pvc-section__heading">
              <p className="pvc-eyebrow">Przed rozpoczęciem prac</p>
              <h2>Pytania o membrany PVC</h2>
            </div>
            <div className="pvc-faq__list">
              {FAQ_ITEMS.map(({ question, answer }) => (
                <details className="pvc-faq__item" key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default MembranaPVC;