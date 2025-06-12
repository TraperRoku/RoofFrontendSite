import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Phone, MapPin, Clock, Shield, CheckCircle } from 'lucide-react';
import Footer from '../footer';
import Header from '../Header';
import './FAQ.css'; 
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import hero from '../photos_to_deploy/40.webp';
import dachPlaski from '../realizacje/thumbs/41.webp';
import papa from '../realizacje/thumbs/44.webp';
import membrana from '../realizacje/thumbs/69.webp';
import konserwacja from '../realizacje/thumbs/62.webp';
import awaria from '../realizacje/thumbs/21.webp';
import kosztorys from '../realizacje/thumbs/54.webp';
import foto from '../photos/solar.webp';

const images = {
  hero: hero,
  dachPlaski: dachPlaski,
  papa: papa,
  membrana: membrana,
  konserwacja: konserwacja,
  awaria: awaria,
  kosztorys: kosztorys,
  foto: foto
};

const faqData = [
  {
    id: 1,
    category: 'Koszty i Wycena',
    question: 'Ile kosztuje wymiana dachu płaskiego ?',
    answer: 'Koszt wymiany dachu płaskiego zależy od wielu czynników: powierzchni dachu, wybranego materiału (papa termozgrzewalna 180-250 zł/m², membrana EPDM 250-350 zł/m², PCV 300-450 zł/m²), stanu konstrukcji oraz dostępności dachu. Oferujemy DARMOWĄ wycenę z dojazdem w Szczecinie i okolicach.',
    image: images.kosztorys,
    tips: ['Darmowa wycena w 24h', 'Rozłożenie płatności na raty', 'Profesjonalne doradztwo']
  },
  {
    id: 2,
    category: 'Materiały',
    question: 'Czy papa termozgrzewalna to dobry wybór?',
    answer: 'Papa termozgrzewalna to sprawdzone i ekonomiczne rozwiązanie, idealne dla prostych dachów bez skomplikowanych detali. Oferuje dobrą trwałość (10-15 lat) przy konkurencyjnej cenie. Szczególnie polecana dla garaży, magazynów i budynków gospodarczych.',
    image: images.papa,
    tips: ['Ekonomiczne rozwiązanie', 'Szybki montaż', 'Sprawdzona technologia']
  },
  {
    id: 3,
    category: 'Konserwacja',
    question: 'Jak często należy konserwować dach płaski?',
    answer: 'Dach płaski wymaga przeglądu 2 razy w roku - wiosną i jesienią. Regularna konserwacja obejmuje: czyszczenie wpustów dachowych, kontrolę połączeń, sprawdzenie membran przy kominach i przewietrznikach. Profesjonalny przegląd wydłuża żywotność dachu nawet o 30%.',
    image: images.konserwacja,
    tips: ['Przegląd 2x w roku', 'Czyszczenie wpustów', 'Kontrola membran']
  },
  {
    id: 4,
    category: 'Materiały',
    question: 'Membrana EPDM czy PCV - co wybrać?',
    answer: 'EPDM to elastyczna guma, idealna dla skomplikowanych kształtów dachów, lekka i szybka w montażu. PCV to rozwiązanie premium - odporne na UV, mechaniczne uszkodzenia, idealne pod tarasy i dachy zielone. Wybór zależy od przeznaczenia dachu i budżetu.',
    image: images.membrana,
    tips: ['EPDM - elastyczność', 'PCV - wytrzymałość', 'Dostosowanie do potrzeb']
  },
  {
    id: 5,
    category: 'Awarie',
    question: 'Co robić gdy przecieka dach płaski?',
    answer: 'NATYCHMIAST zabezpiecz wnętrze przed wodą i zadzwoń do nas! Działamy w trybie 24h. Tymczasowo możesz położyć folię na przeciekające miejsce, ale pamiętaj - każda godzina zwłoki to większe straty. Nasze ekipy ratunkowe są gotowe do natychmiastowej interwencji.',
    image: images.awaria,
    tips: ['Działamy 24/7', 'Zabezpieczenie tymczasowe', 'Szybka naprawa']
  },

  {
  id: 6,
  category: 'Koszty i Wycena',
  question: 'Czy można rozłożyć koszt naprawy dachu na raty?',
  answer: 'Tak, oferujemy elastyczne formy płatności, w tym możliwość rozłożenia kosztów na wygodne raty. Wystarczy zgłosić taką chęć podczas wyceny – przygotujemy indywidualną ofertę finansowania.',
  image: images.kosztorys,
  tips: ['Płatność ratalna', 'Brak ukrytych kosztów', 'Elastyczne warunki']
},
{
  id: 7,
  category: 'Konserwacja',
  question: 'Jakie objawy wskazują na konieczność przeglądu dachu?',
  answer: 'Do niepokojących sygnałów należą: zacieki na suficie, odpadające fragmenty izolacji, nieprzyjemny zapach wilgoci lub mech na krawędziach. Regularny przegląd pozwala uniknąć kosztownych napraw.',
  image: images.konserwacja,
  tips: ['Zacieki = ostrzeżenie', 'Wilgoć = ryzyko pleśni', 'Reaguj szybko']
},
{
  id: 8,
  category: 'Awarie',
  question: 'Co zrobić, gdy woda stoi na dachu płaskim?',
  answer: 'Zalegająca woda może prowadzić do uszkodzeń. Przyczyną może być niedrożny wpust lub brak spadku. Skontaktuj się z nami – przeprowadzimy inspekcję i zaproponujemy rozwiązanie, np. korektę spadku lub dodatkowy odpływ.',
  image: images.awaria,
  tips: ['Kontrola wpustów', 'Inspekcja spadków', 'Szybka reakcja = mniejsze koszty']
},
{
  id: 9,
  category: 'Materiały',
  question: 'Czy można położyć nową warstwę na starą papę?',
  answer: 'Tak, ale pod warunkiem, że stara warstwa jest stabilna i nieprzemakalna. Przed montażem nowej warstwy wykonujemy próbę szczelności i ocenę przyczepności. W niektórych przypadkach konieczne jest usunięcie starej papy.',
  image: images.papa,
  tips: ['Audyt stanu dachu', 'Możliwość nadbudowy', 'Bezpieczeństwo najważniejsze']
},
{
  id: 10,
  category: 'Materiały',
  question: 'Jaki materiał jest najlepszy pod taras na dachu płaskim?',
  answer: 'Najlepiej sprawdza się membrana PCV lub EPDM – są odporne na UV i elastyczne, a dodatkowo można je zabezpieczyć warstwą ochronną pod wykończenie tarasu. Pamiętaj o odpowiednim drenażu!',
  image: images.membrana,
  tips: ['PCV – odporność na UV', 'EPDM – elastyczność', 'Taras = dodatkowe obciążenie']
},
{
  id: 11,
  category: 'Koszty i Wycena',
  question: 'Czy wycena obejmuje również sprawdzenie konstrukcji dachu?',
  answer: 'Tak, nasza darmowa wycena obejmuje również ocenę stanu konstrukcji nośnej oraz warstw izolacyjnych. To pozwala precyzyjnie dobrać technologię naprawy.',
  image: images.kosztorys,
  tips: ['Ocena konstrukcji GRATIS', 'Bez zobowiązań', 'Pełna dokumentacja']
},
{
  id: 12,
  category: 'Materiały',
  question: 'Czy izolacja termiczna jest wliczona w cenę dachu?',
  answer: 'To zależy od projektu – przy kompleksowej renowacji proponujemy również montaż ocieplenia, np. z płyt PIR lub styropianu dachowego. Koszt ustalamy indywidualnie.',
  image: images.dachPlaski,
  tips: ['Ocieplenie poprawia komfort', 'Możliwość dopłaty z programu Czyste Powietrze', 'Indywidualna wycena']
},
{
  id: 13,
  category: 'Konserwacja',
  question: 'Czy można samodzielnie konserwować dach płaski?',
  answer: 'Tak, ale z zachowaniem ostrożności. Zalecamy usuwanie liści i sprawdzanie odpływów. Prace z użyciem ognia lub chemii zostaw specjalistom.',
  image: images.konserwacja,
  tips: ['Bezpieczne czyszczenie', 'Uwaga na ogień!', 'Lepsze efekty z fachowcem']
},
{
  id: 14,
  category: 'Awarie',
  question: 'Jak szybko możecie dojechać w razie awarii?',
  answer: 'W Szczecinie i okolicach działamy ekspresowo – nawet w ciągu 2 godzin od zgłoszenia. Zgłoszenia przyjmujemy 24/7.',
  image: images.awaria,
  tips: ['Ekspresowy dojazd', 'Pogotowie dachowe', 'Telefon alarmowy: 518 144 882']
},
{
  id: 15,
  category: 'Materiały',
  question: 'Czy dach płaski nadaje się pod panele fotowoltaiczne?',
  answer: 'Jak najbardziej – dachy płaskie są wręcz idealne do montażu paneli PV. Zapewniamy odpowiednie wzmocnienia i szczelność systemu.',
  image: images.foto,
  tips: ['Idealna powierzchnia dla PV', 'Pomoc w dofinansowaniach', 'Montaż pod klucz']
}
];

const categories = ['Wszystkie', 'Koszty i Wycena', 'Materiały', 'Konserwacja', 'Awarie'];

function FAQ() {
  const [activeCategory, setActiveCategory] = useState('Wszystkie');
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredFAQ = activeCategory === 'Wszystkie' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const generateSchemaMarkup = () => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${faq.answer} ${faq.tips.join(' ')}`
        }
      }))
    };
  };

  return (
    <div className="faq-container">
      <Helmet>
        <title>Baza wiedzy o dachach płaskich - najczęstsze pytania i odpowiedzi</title>
        <meta name="description" content="Kompletny przewodnik po dachach płaskich - koszty, materiały, konserwacja i naprawy awaryjne. Eksperci z 15-letnim doświadczeniem odpowiadają na wszystkie pytania." />
        <link rel="canonical" href="https://www.bezpiecznydach.pl/baza-wiedzy" />
        <script type="application/ld+json">
          {JSON.stringify(generateSchemaMarkup())}
        </script>
        <link rel="preload" href={images.hero} as="image" />
      </Helmet>
      
      <Header />
      
      <main className="faq-main">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              BAZA WIEDZY - ODPOWIEDZI NA WSZYSTKIE PYTANIA!
            </h1>
            <p className="hero-subtitle">
              15 lat doświadczenia | 1000+ zadowolonych klientów | Eksperci od dachów płaskich
            </p>
            <div>
              <a 
                href="tel:+48518144882" 
                className="cta-button"
                aria-label="Zadzwoń do nas pod numer 518 144 882"
              >
                MASZ PYTANIE? ZADZWOŃ: 518 144 882
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src={images.hero} 
              alt="Eksperci od dachów płaskich - Bezpieczny Dach Szczecin"
              width="800"
              height="600"
              loading="eager"
            />
          </div>
        </section>

        {/* Quick Stats */}
        <section className="stats-section" aria-label="Statystyki firmy">
          {[
            { icon: Shield, number: '15+', text: 'LAT DOŚWIADCZENIA' },
            { icon: CheckCircle, number: '1000+', text: 'ZADOWOLONYCH KLIENTÓW' },
            { icon: Clock, number: '24/7', text: 'POGOTOWIE DACHOWE' },
            { icon: Phone, number: '100%', text: 'ZADOWOLENIE KLIENTÓW' }
          ].map((stat, index) => (
            <div key={index} className="stat-card">
              <stat.icon size={40} className="stat-icon" aria-hidden="true" />
              <div className="stat-number">
                {stat.number}
              </div>
              <div className="stat-text">
                {stat.text}
              </div>
            </div>
          ))}
        </section>

        {/* Category Filter */}
        <section className="category-section" aria-label="Filtruj pytania według kategorii">
          <h2 className="section-title">
            WYBIERZ KATEGORIĘ PYTAŃ
          </h2>
          <div className="category-buttons" role="tablist">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`category-button ${activeCategory === category ? 'active' : ''}`}
                role="tab"
                aria-selected={activeCategory === category}
                aria-controls={`${category}-tab`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* FAQ Items */}
        <section className="faq-items-section" id="faq-questions">
          <div className="faq-items-container">
            {filteredFAQ.map((faq) => (
              <div key={faq.id} className="faq-item">
                <div 
                  onClick={() => toggleFAQ(faq.id)}
                  className={`faq-question ${openFAQ === faq.id ? 'active' : ''}`}
                  role="button"
                  tabIndex="0"
                  aria-expanded={openFAQ === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                  onKeyDown={(e) => e.key === 'Enter' && toggleFAQ(faq.id)}
                >
                  <div>
                    <span className="faq-category">
                      {faq.category}
                    </span>
                    <h3 className="faq-question-text" id={`faq-question-${faq.id}`}>
                      {faq.question}
                    </h3>
                  </div>
                  {openFAQ === faq.id ? 
                    <ChevronUp size={24} className="chevron-icon" aria-hidden="true" /> : 
                    <ChevronDown size={24} className="chevron-icon" aria-hidden="true" />
                  }
                </div>
                
                {openFAQ === faq.id && (
                  <div 
                    id={`faq-answer-${faq.id}`}
                    className="faq-answer"
                    aria-labelledby={`faq-question-${faq.id}`}
                  >
                    <div className="answer-content">
                      <div className="answer-text">
                        <p>
                          {faq.answer}
                        </p>
                        
                        <div className="tips-box">
                          <h4>
                            ✓ KLUCZOWE INFORMACJE:
                          </h4>
                          <ul>
                            {faq.tips.map((tip, index) => (
                              <li key={index}>
                                <span className="tip-bullet" aria-hidden="true">•</span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="answer-image">
                        <img 
                          src={faq.image} 
                          alt={faq.question}
                          width="400"
                          height="300"
                          loading={isClient ? "lazy" : "eager"}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="emergency-cta" aria-label="Nagły wypadek - kontakt">
          <h2>
            NIE ZNALAZŁEŚ ODPOWIEDZI? ZADZWOŃ!
          </h2>
          <p>
            Nasi eksperci odpowiedzą na wszystkie pytania - od 7:00 do 20:00, 7 dni w tygodniu
          </p>
          <div className="cta-buttons">
            <a 
              href="tel:+48518144882"
              className="cta-button-primary"
              aria-label="Zadzwoń na numer alarmowy 518 144 882"
            >
              📞 ZADZWOŃ: 518 144 882
            </a>
            <Link 
              to="/#contact"
              className="cta-button-secondary"
              aria-label="Przejdź do formularza kontaktowego"
            >
              📧 FORMULARZ KONTAKTOWY
            </Link>
          </div>
        </section>

        {/* Contact Info */}
        <section className="contact-info" aria-label="Dane kontaktowe">
          <h3>
            BEZPIECZNY DACH - TWÓJ PARTNER W SZCZECINIE
          </h3>
          <div className="contact-details">
            <div className="contact-item">
              <Phone size={20} className="contact-icon" aria-hidden="true" />
              <span>518 144 882</span>
            </div>
            <div className="contact-item">
              <MapPin size={20} className="contact-icon" aria-hidden="true" />
              <span>Szczecin i okolice</span>
            </div>
            <div className="contact-item">
              <Clock size={20} className="contact-icon" aria-hidden="true" />
              <span>7:00 - 20:00</span>
            </div>
            <div className="contact-item">
              <CheckCircle size={20} className="contact-icon" aria-hidden="true" />
              <span>Profesjonalne doradztwo</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default FAQ;