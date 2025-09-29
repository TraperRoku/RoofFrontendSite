import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Phone, MapPin, Clock, Shield, CheckCircle, CheckCheckIcon, PhoneCall } from 'lucide-react';
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
 id: 16,
  category: 'Koszty i Wycena',
  // ZMIANA: Pytanie ukierunkowane na lokalizację
  question: 'Jak wygląda nasz obszar działania i czy pracujemy w całym Szczecinie?',
  answer: 'Jesteśmy lokalnym partnerem i działamy głównie na terenie **Szczecina** (całe miasto i dzielnice) oraz w całym **województwie zachodniopomorskim**. W przypadku dużych projektów dekarskich jesteśmy elastyczni. Zawsze staramy się znaleźć rozwiązanie dopasowane do potrzeb klienta.',
  image: images.dachPlaski,
  tips: ['Dach idealny pod fotowoltaikę', 'Doradzamy przy uzyskaniu dotacji na ocieplenie', 'Kompleksowy montaż „pod klucz” w Szczecinie']
},
  {
    id: 1,
    category: 'Koszty i Wycena',
    // ZMIANA: Pytanie bardziej konkretne
    question: 'Jaki jest koszt wymiany metra kwadratowego dachu płaskiego w Szczecinie?',
    answer: 'Koszt **wymiany dachu płaskiego** jest zróżnicowany i zależy od powierzchni, wybranego **materiału (papa, EPDM, PVC)**, stanu konstrukcji i dostępu. Oferujemy **DARMOWĄ wycenę** z dojazdem na terenie Szczecina, bez żadnych zobowiązań.',
    image: images.kosztorys,
    tips: ['Darmowa wycena w 24h', 'Rozłożenie płatności na raty', 'Profesjonalne doradztwo materiałowe']
  },
  {
    id: 2,
    category: 'Materiały',
    // ZMIANA: Pytanie zawiera kluczową frazę
    question: 'Czy papa termozgrzewalna jest rekomendowana na dach płaski?',
    answer: '**Papa termozgrzewalna** to sprawdzone i ekonomiczne rozwiązanie do **renowacji dachów płaskich**. Oferuje dobrą trwałość (10-15 lat) przy konkurencyjnej cenie, szczególnie polecana dla garaży, magazynów i budynków gospodarczych.',
    image: images.papa,
    tips: ['Ekonomiczne rozwiązanie', 'Szybki montaż', 'Sprawdzona technologia']
  },
  {
    id: 3,
    category: 'Konserwacja',
    // ZMIANA: Pytanie zawiera kluczową frazę
    question: 'Jak często należy przeprowadzać konserwację dachu płaskiego w Szczecinie?',
    answer: '**Dach płaski** wymaga **profesjonalnego przeglądu** **2 razy w roku** - wiosną i jesienią. Regularna konserwacja obejmuje: czyszczenie wpustów, kontrolę połączeń i sprawdzenie membran. Profesjonalny przegląd **wydłuża żywotność dachu** nawet o 30%.',
    image: images.konserwacja,
    tips: ['Przegląd 2x w roku', 'Czyszczenie wpustów', 'Kontrola membran i złączy']
  },
  {
    id: 4,
    category: 'Materiały',
    // ZMIANA: Pytanie zawiera kluczową frazę
    question: 'Membrana EPDM czy PCV - który materiał jest lepszy na dach płaski?',
    answer: '**EPDM** (elastyczna guma) jest idealna dla skomplikowanych kształtów, lekka i szybka w montażu. **PCV** to rozwiązanie premium – odporne na UV, idealne pod **tarasy** i **dachy zielone**. Wybór zależy od przeznaczenia dachu i budżetu klienta w Szczecinie.',
    image: images.membrana,
    tips: ['EPDM - elastyczność i szybkość', 'PCV - wytrzymałość i estetyka', 'Dostosowanie do potrzeb i budżetu']
  },
  {
    id: 5,
    category: 'Awarie',
    question: 'Co robić, gdy nagle przecieka dach płaski w domu lub firmie?',
    answer: 'NATYCHMIAST **zabezpiecz wnętrze** i zadzwoń na nasze **Pogotowie Dachowe Szczecin**! Działamy w trybie **24h/7**. Każda godzina zwłoki zwiększa straty. Nasze ekipy ratunkowe są gotowe do natychmiastowej interwencji na terenie Szczecina i okolic.',
    image: images.awaria,
    tips: ['Działamy 24/7 (alarm)', 'Zabezpieczenie tymczasowe', 'Szybka naprawa uszczelnień']
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
  question: 'Czy trzeba zrywać starą papę przed położeniem nowej warstwy?',
  answer: 'Nie zawsze. Jeśli istniejąca papa jest w dobrym stanie, możemy zastosować nową warstwę bez jej usuwania, co przyspiesza i obniża koszt prac. Przed decyzją wykonujemy dokładną ocenę techniczną, aby mieć pewność, że nowa warstwa będzie trwała i szczelna.',
  image: images.papa,
  tips: ['Ocena techniczna przed pracą', 'Oszczędność czasu i pieniędzy', 'Bezpieczne i sprawdzone rozwiązania']
},
{
  id: 10,
  category: 'Materiały',
  question: 'Jaki materiał jest najlepszy na dach płaski?',
  answer: 'Wszystko zależy od potrzeb i budżetu. Papa termozgrzewalna to sprawdzone i ekonomiczne rozwiązanie. Membrana PCV zapewnia wysoką trwałość i odporność na UV. EPDM to materiał wyjątkowo elastyczny i długowieczny. Każdy z nich ma swoje zalety – pomożemy dobrać najlepszy wariant do Twojego dachu.',
  image: images.membrana,
  tips: ['Papa – ekonomiczne i trwałe', 'PCV – odporność na UV', 'EPDM – elastyczność i żywotność']
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
  answer: 'To zależy od projektu – przy kompleksowej renowacji proponujemy również montaż ocieplenia, np. z płyt PIR, wełny mineralnej lub styropianu dachowego. Koszt ustalamy indywidualnie.',
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
},

];

const categories = ['Wszystkie', 'Koszty i Wycena', 'Materiały', 'Konserwacja', 'Awarie'];

function FAQ() {
  const [activeCategory, setActiveCategory] = useState('Wszystkie');
  const [openFAQ, setOpenFAQ] = useState(null);

  const filteredFAQ = activeCategory === 'Wszystkie' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const generateSchemaMarkup = () => {
    const mainEntities = faqData
      .filter(faq => faq.category !== 'Awarie')
      .slice(0, 10)
      .map(faq => ({
        "@type": "Question",
        "name": faq.question.replace('?', ' w Szczecinie?'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${faq.answer} ${faq.tips.join('. ')}. Specjalizujemy się w wykonawstwie dachów płaskich na terenie Szczecina i okolic.`
        }
      }));

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": mainEntities,
      "author": {
        "@type": "Organization",
        "name": "Bezpieczny Dach Szczecin",
        "url": "https://www.bezpiecznydach.pl",
        "sameAs": [
          "https://www.facebook.com/bezpiecznydachszczecin",
          "https://www.instagram.com/bezpiecznydachszczecin"
        ]
      }
    };
  };

  return (
    <div className="faq-container">
      <Helmet>
        <title>FAQ o Dachach Płaskich - Eksperckie Odpowiedzi | Bezpieczny Dach Szczecin</title>
        <meta name="description" content="Kompletny poradnik o dachach płaskich - koszty, materiały (papa, EPDM, PVC), konserwacja i naprawy awaryjne w Szczecinie. Eksperci z 15-letnim doświadczeniem." />
        <meta name="keywords" content="dachy płaskie szczecin, papa termozgrzewalna, membrana EPDM, naprawa dachu, koszt wymiany dachu, konserwacja dachu płaskiego" />
        <link rel="canonical" href="https://www.bezpiecznydach.pl/baza-wiedzy" />
        
        {/* Social Media Meta Tags */}
        <meta property="og:title" content="FAQ o Dachach Płaskich - Eksperckie Odpowiedzi | Bezpieczny Dach Szczecin" />
        <meta property="og:description" content="Wszystko co musisz wiedzieć o dachach płaskich - od materiałów po awarie. Specjaliści z Szczecina odpowiadają na najczęstsze pytania." />
        <meta property="og:url" content="https://www.bezpiecznydach.pl/baza-wiedzy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={images.hero} />
        <meta property="og:site_name" content="Bezpieczny Dach Szczecin" />
        
     
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify(generateSchemaMarkup())}
        </script>
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Strona główna",
              "item": "https://www.bezpiecznydach.pl"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Baza wiedzy",
              "item": "https://www.bezpiecznydach.pl/faq-dachy-plaskie"
            }]
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="faq-main">
        {/* Hero Section */}
        <section className="hero-section" itemScope itemType="https://schema.org/WPHeader">
          <div className="hero-content">
            <h1 className="hero-title" itemProp="headline">
              BAZA WIEDZY - ODPOWIEDZI NA WSZYSTKIE PYTANIA!
            </h1>
            <p className="hero-subtitle" itemProp="description">
              15 lat doświadczenia | 1000+ zadowolonych klientów | Eksperci od dachów płaskich
            </p>
            <div>
              <a 
                href="tel:+48518144882" 
                className="cta-button"
                aria-label="Zadzwoń do nas pod numer 518 144 882"
                itemProp="telephone"
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
              itemProp="image"
            />
          </div>
        </section>

        {/* Quick Stats */}
        <section className="stats-section" aria-label="Statystyki firmy" itemScope itemType="https://schema.org/Organization">
          {[
            { icon: Shield, number: '15+', text: 'LAT DOŚWIADCZENIA' },
            { icon: CheckCircle, number: '1000+', text: 'ZADOWOLONYCH KLIENTÓW' },
            { icon: Clock, number: '24/7', text: 'POGOTOWIE DACHOWE' },
            { icon: Phone, number: '100%', text: 'ZADOWOLENIE KLIENTÓW' }
          ].map((stat, index) => (
            <div key={index} className="stat-card">
              <stat.icon size={40} className="stat-icon" aria-hidden="true" />
              <div className="stat-number" itemProp="foundingDate">
                {stat.number}
              </div>
              <div className="stat-text">
                {stat.text}
              </div>
            </div>
          ))}
        </section>

        {/* Introduction Section */}
        <section className="intro-section">
          <h2 className="section-title">Eksperckie porady o dachach płaskich w Szczecinie i w okolicach</h2>
          <div className="intro-content">
            <p>Jako <strong>specjaliści od dachów płaskich z 15-letnim doświadczeniem w Szczecinie i za granicą </strong>, zebraliśmy odpowiedzi na najczęstsze pytania naszych klientów. W tej bazie wiedzy znajdziesz praktyczne informacje o:</p>
            <ul className="benefits-list">
              <li><strong>Kosztach wymiany i naprawy</strong> dachów płaskich w woj. zachodniopomorskim</li>
              <li>Porównaniu <strong>papa termozgrzewalna vs membrana PVC/EPDM</strong></li>
              <li><strong>Konserwacji</strong> - jak dbać o dach płaski przez cały rok</li>
              <li>Postępowaniu w <strong>awaryjnych sytuacjach</strong> (przecieki, zalegająca woda)</li>
            </ul>
            <p>Nie znalazłeś odpowiedzi? <a href="tel:+48518144882" className="inline-link">Zadzwoń do naszych specjalistów: 518 144 882</a> - doradzimy bezpłatnie!</p>
          </div>
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
  <div 
    key={faq.id} 
    className="faq-item" 
    // Dodajemy itemprop dla FAQPage schema (chociaż schema.org działa lepiej z <script type="application/ld+json">)
    itemProp="mainEntity" 
    itemScope 
    itemType="https://schema.org/Question" 
  >
    <h3 // Zmieniamy div na h3 - jest to bardziej semantyczne
      onClick={() => toggleFAQ(faq.id)}
      className={`faq-question ${openFAQ === faq.id ? 'active' : ''}`}
      role="button"
      tabIndex="0"
      aria-expanded={openFAQ === faq.id}
      aria-controls={`faq-answer-${faq.id}`}
      onKeyDown={(e) => e.key === 'Enter' && toggleFAQ(faq.id)}
      itemProp="name" // Atrybut itemprop dla schematu Question
    >
      <div>
        <span className="faq-category">
          {faq.category}
        </span>
        <span className="faq-question-text" id={`faq-question-${faq.id}`}>
          {faq.question}
        </span>
      </div>
      {openFAQ === faq.id ? 
        <ChevronUp size={24} className="chevron-icon" aria-hidden="true" /> : 
        <ChevronDown size={24} className="chevron-icon" aria-hidden="true" />
      }
    </h3> 
    
    {openFAQ === faq.id && (
      <div 
        id={`faq-answer-${faq.id}`}
        className="faq-answer"
        aria-labelledby={`faq-question-${faq.id}`}
        itemProp="acceptedAnswer" // Atrybut itemprop dla schematu Answer
        itemScope 
        itemType="https://schema.org/Answer" 
      >
        <div className="answer-content">
          <div className="answer-text">
            <p itemProp="text"> 
              {faq.answer}
            </p>
            
            <div className="tips-box">
              {/* ... reszta kodu tip-box bez zmian ... */}
            </div>
          </div>
          
          <div className="answer-image">
            <img 
              src={faq.image} 
              alt={`${faq.question.replace('?', '')} - porady ekspertów Bezpieczny Dach Szczecin`}
              width="400"
              height="300"
              loading="lazy"
              className="faq-image"
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
              <CheckCheckIcon size={20} className="contact-icon" aria-hidden="true" />
              <span>Profesjonalizm</span>
            </div>
              <div className="contact-item">
              <CheckCircle size={20} className="contact-icon" aria-hidden="true" />
              <span>Elastyczność</span>
            </div>
              <div className="contact-item">
              <PhoneCall size={20} className="contact-icon" aria-hidden="true" />
              <span>Dzwoń śmiało</span>
            </div>
          </div>
        </section>
      
      </main>

      
     
        <Footer />
  
    </div>
    
  );
}

export default FAQ;