import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, MapPin, Clock, Shield, CheckCircle } from 'lucide-react';
import Footer from '../footer';
import Header from '../Header';
import './FAQ.css'; 
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PhoneLink from '../PhoneLink';

import hero from '../photos_to_deploy/40.webp';
import dachPlaski from '../realizacje/thumbs/41.webp';
import papa from '../realizacje/thumbs/44.webp';
import membrana from '../realizacje/thumbs/69.webp';
import konserwacja from '../realizacje/thumbs/62.webp';
import awaria from '../realizacje/thumbs/21.webp';
import kosztorys from '../realizacje/thumbs/54.webp';


const images = {
  hero: hero,
  dachPlaski: dachPlaski,
  papa: papa,
  membrana: membrana,
  konserwacja: konserwacja,
  awaria: awaria,
  kosztorys: kosztorys,
 
};

const faqData = [
{
  id: 1,
  category: 'Materiały',
  question: 'Czy papa termozgrzewalna nadaje się do dachów płaskich?',
  answer: 'Tak. Papa termozgrzewalna SBS to sprawdzone rozwiązanie na dachy płaskie, hale, magazyny i garaże. Dobieramy odpowiedni materiał do stanu i przeznaczenia dachu.',
    image: images.papa,
    tips: ['Sprawdzone rozwiązanie', 'Szybkie wykonanie', 'Dobór do dachu']
  },
  {
  id: 2,
  category: 'Konserwacja',
  question: 'Jak często sprawdzać dach płaski?',
  answer: 'Najlepiej sprawdzać dach dwa razy w roku: wiosną i jesienią. Warto wtedy oczyścić odpływy, obejrzeć papę i sprawdzić, czy nie ma pęknięć albo przecieków.',
  image: images.konserwacja,
  tips: ['Dwa przeglądy w roku', 'Czyste odpływy', 'Szybkie wykrycie problemu']
  },
  {
  id: 3,
  category: 'Awarie',
  question: 'Co zrobić, gdy przecieka dach?',
  answer: 'Zabezpiecz miejsce w środku budynku i skontaktuj się z nami. Ustalimy przyczynę przecieku, wykonamy zabezpieczenie i zaproponujemy dalsze prace.',
  image: images.awaria,
  tips: ['Zabezpiecz wnętrze', 'Zadzwoń do nas', 'Szybka diagnoza']
  },
{
  id: 4,
  category: 'Konserwacja',
  question: 'Po czym poznać, że dach wymaga sprawdzenia?',
  answer: 'Warto zlecić przegląd, gdy pojawiają się zacieki, wilgoć, pęcherze na papie, pęknięcia albo mech przy krawędziach. Szybka reakcja pomaga ograniczyć zakres napraw.',
  image: images.konserwacja,
  tips: ['Zacieki', 'Wilgoć i pęknięcia', 'Nie czekaj z reakcją']
},
{
  id: 5,
  category: 'Awarie',
  question: 'Co zrobić, gdy na dachu stoi woda?',
  answer: 'Najpierw sprawdzamy odpływy i miejsce, w którym zatrzymuje się woda. Jeśli problemem jest brak odpowiedniego spadku, dobieramy rozwiązanie, które ułatwi jej odprowadzenie.',
  image: images.awaria,
  tips: ['Sprawdzenie odpływów', 'Ocena spadku', 'Szybka reakcja']
},
{
  id: 6,
  category: 'Materiały',
  question: 'Czy trzeba usuwać starą papę?',
  answer: 'Nie zawsze. Jeśli stara papa jest sucha, stabilna i dobrze trzyma się podłoża, możemy przygotować ją pod nową warstwę. Najpierw oceniamy dach na miejscu.',
  image: images.papa,
  tips: ['Ocena dachu', 'Mniej prac', 'Dobór rozwiązania']
},
{
  id: 7,
  category: 'Konserwacja',
  question: 'Czy można samodzielnie dbać o dach płaski?',
  answer: 'Można usuwać liście i pilnować, aby odpływy były drożne. Naprawy, zgrzewanie papy i prace na wysokości lepiej powierzyć dekarzom.',
  image: images.konserwacja,
  tips: ['Czyść odpływy', 'Dbaj o bezpieczeństwo', 'Naprawy zostaw fachowcom']
},
{
  id: 8,
  category: 'Awarie',
  question: 'Jak szybko możecie przyjechać w razie awarii?',
  answer: 'W Szczecinie i okolicach staramy się przyjechać możliwie szybko. Termin ustalamy podczas rozmowy, zależnie od pilności zgłoszenia, pogody i dostępności ekipy.',
  image: images.awaria,
  tips: ['Szybki kontakt', 'Ocena awarii', 'Telefon: 518 144 882']
},
{
  id: 9,
  category: 'Materiały',
  question: 'Czy na dachu płaskim można zamontować panele?',
  answer: 'Tak. Przed montażem sprawdzamy stan dachu, jego nośność i szczelność. Możemy przygotować pokrycie tak, aby było gotowe pod instalację paneli.',
  image: images.dachPlaski,

  tips: ['Sprawdzenie dachu', 'Bezpieczne mocowanie', 'Przygotowanie pod panele']
},

];

const categories = ['Wszystkie', 'Materiały', 'Konserwacja', 'Awarie'];

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
        <title>FAQ - Dach płaski, papa, naprawa | Bezpieczny Dach Szczecin</title>
        <meta name="description" content="Odpowiedzi eksperta na pytania o dachach płaskich: koszty, materiały, konserwacja, naprawy awaryjne. Szczecin i wojewódzwo zachodniopomorskie." />
        <link rel="canonical" href="https://www.bezpiecznydach.pl/faq" />
        
        {/* Social Media Meta Tags */}
        <meta property="og:title" content="FAQ - Dach płaski, papa, naprawa | Bezpieczny Dach Szczecin" />
        <meta property="og:description" content="Odpowiedzi na pytania o dachach płaskich, materiałach, konserwacji i naprawach awaryjnych." />
        <meta property="og:url" content="https://www.bezpiecznydach.pl/faq" />
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
            <h1 className="hero-title1" itemProp="headline">
              FAQ - Odpowiedzi eksperta na pytania o dachach
            </h1>
            <p className="hero-subtitle1" itemProp="description">
              Porady od specjalistów z doświadczeniem na terenie Szczecina
            </p>
            <div>
            <PhoneLink className="cta-button" aria-label="Zadzwoń do nas pod numer 518 144 882" itemProp="telephone">
  Zadzwoń: 518 144 882
</PhoneLink>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src={images.hero} 
              alt="Eksperci od dachów płaskich i papy termozgrzewalnej SBS — Bezpieczny Dach Szczecin"
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
            { icon: Shield, number: '15+', text: 'lat doświadczenia' },
            { icon: CheckCircle, number: '700+', text: 'zrealizowanych projektów B2B' },
            { icon: Clock, number: '24h', text: 'reakcja na zgłoszenie' },
            { icon: Phone, number: '100%', text: 'zadowolenie klientów' }
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
          <h2 className="section-title">Odpowiedzi na pytania o dachach płaskich</h2>
          <div className="intro-content">
            <p>Jako specjaliści od dachów płaskich, zebraliśmy odpowiedzi na najczęstsze pytania naszych klientów. W tej bazie wiedzy znajdziesz informacje o:</p>
            <ul className="benefits-list">
              <li>Kosztach wymiany i naprawy dachów płaskich</li>
              <li>Dobór odpowiedniej grubości papy SBS i rodzaju ocieplenia do przeznaczenia dachu</li>
              <li>Konserwacji i opiece przez cały rok</li>
              <li>Postępowaniu w sytuacjach awaryjnych</li>
            </ul>
            <p>Nie znalazłeś odpowiedzi? 
              <PhoneLink className="inline-link" itemProp="telephone">Zadzwoń do naszych specjalistów: 518 144 882</PhoneLink></p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="category-section" aria-label="Filtruj pytania według kategorii">
          <h2 className="section-title">
            Kategorie pytań
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
    // KROK 1: Dodajemy klasę 'open' warunkowo do rodzica
    <div 
        key={faq.id} 
        className={`faq-item ${openFAQ === faq.id ? 'open' : ''}`}
        itemProp="mainEntity" 
        itemScope 
        itemType="https://schema.org/Question" 
    >
        <h3 
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
        <div className={`answer-content ${faq.id === 7 ? 'answer-content--full' : ''}`}>
          <div className="answer-text">
            <p itemProp="text"> 
              {faq.answer}
            </p>
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
            Potrzebujesz porad? Zadzwoń
          </h2>
          <p>
            Nasi specjaliści dostępni od poniedziałku do niedzieli, 7:00 - 20:00
          </p>
          <div className="cta-buttons">
            <PhoneLink
              className="cta-button-primary"
              aria-label="Zadzwoń na numer 518 144 882"
            >
              Zadzwoń: 518 144 882
            </PhoneLink>
            <Link 
              to="/#contact"
              className="cta-button-secondary"
              aria-label="Przejdź do formularza kontaktowego"
            >
              Formularz kontaktowy
            </Link>
          </div>
        </section>

        {/* Contact Info */}
        <section className="contact-info" aria-label="Dane kontaktowe">
          <h3>
            Bezpieczny Dach - Szczecin i okolice
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
              <span>7:00 - 20:00, każdego dnia</span>
            </div>
            <div className="contact-item">
              <CheckCircle size={20} className="contact-icon" aria-hidden="true" />
              <span>Profesjonalne usługi</span>
            </div>
          </div>
        </section>
      
      </main>

      
     
        <Footer />
  
    </div>
    
  );
}

export default FAQ;