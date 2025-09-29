import React from 'react';
import './Service.css';
import imgFix from '../components/photos_to_deploy/1.webp';
import imgBuild from '../components/photos_to_deploy/17.webp';
import imgPut from '../components/photos/roofReno.jpg';

const services = [
  { 
    src: imgFix, 
    alt: 'Profesjonalna naprawa dachów płaskich w Szczecinie',
     title: 'DACHY PŁASKIE & PAPA TERMOZGRZEWALNA',
    description: 'SPECJALIZACJA: Naprawy i renowacje dachów płaskich. Stosujemy wyłącznie certyfikowane membrany EPDM i PVC najwyższej jakości.',
    features: [
      'Natychmiastowa naprawa przecieków',
      'Pełna wymiana pokrycia',
      'Zielone dachy i tarasy'
    ]
  },
  { 
    src: imgBuild, 
    alt: 'Montaż systemów rynnowych w Szczecinie',
    title: 'SYSTEMY RYNOWE',
    description: 'BEZPIECZNE ODPROWADZANIE WODY: Montujemy wyłącznie systemy od najlepszych producentów, które wytrzymają nawet najsilniejsze ulewy.',
    features: [
      'Odporność na zalodzenie',
      'Cicha praca'
    ]
  },
  { 
    src: imgPut, 
    alt: 'Profesjonalna konserwacja dachów Szczecin',
    title: 'PRZEGLĄDY DACHÓW',
    description: 'LEPIEJ ZAPOBIEGAĆ NIŻ NAPRAWIAĆ: nasze przeglądy dachów wykrywają usterki, zanim przerodzą się w kosztowne naprawy!',
    features: [
      'Bezinwazyjne badania',
      'Raport z zaleceniami',
      'Oszczędność do 70% na naprawach'
    ]
  },
];

function Service() {
  return (
    <section id="services" className="service">
      <div className="service-header">
        <h2>DLACZEGO WARTO WYBRAĆ NASZE USŁUGI DEKARSKIE?</h2>
        <p className="service-intro">
          <strong>Jako jedyni w Szczecinie łączymy 15-letnie doświadczenie z nowoczesnymi technologiami! </strong>
          Specjalizujemy się w najtrwalszych rozwiązaniach: <span className="highlight">membrany EPDM</span>, 
          <span className="highlight"> ultracienkie PVC</span> i <span className="highlight">papa termozgrzewalna premium</span>. 
          Każdy dach wykonujemy z precyzją godną mistrzów cechowych.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-image-container">
              <img src={service.src} alt={service.alt} className="service-image" />
              <div className="service-overlay">
                <h3>{service.title}</h3>
              </div>
            </div>
            <div className="service-content">
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <span className="feature-icon" aria-label="Zaleta">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
