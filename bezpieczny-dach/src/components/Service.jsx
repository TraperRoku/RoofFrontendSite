import React from 'react';
import './Service.css';
import imgFix from '../components/photos_to_deploy/1.webp';
import imgBuild from '../components/photos/roofFix.jpg';
import imgPut from '../components/photos/roofReno.jpg';
import roofBuildGif from '../components/photos/roofBuild.gif';

const services = [
  { 
    src: imgFix, 
    alt: 'Profesjonalna naprawa dachów płaskich w Szczecinie',
    title: 'Dachy płaskie i papa termozgrzewalna',
    description: 'Specjalizacja: naprawy i renowacje dachów płaskich. Głównie pracujemy z papą termozgrzewalna - mamy duże doświadczenie z tego materiału.',
    features: [
      'Natychmiastowa naprawa przecieków',
      'Pełna wymiana pokrycia',
      'Zielone dachy i tarasy'
    ]
  },
  { 
    src: imgBuild, 
    alt: 'Montaż systemów rynnowych w Szczecinie',
    title: 'Systemy rynnowe',
    description: 'Bezpieczne odprowadzanie wody: montujemy systemy od sprawdzonych producentów, odporne na intensywne opady.',
    features: [
      'Odporność na zalodzenie',
      'Cicha praca'
    ]
  },
  { 
    src: imgPut, 
    alt: 'Profesjonalna konserwacja dachów Szczecin',
    title: 'Przeglądy dachów',
    description: 'Lepsze zapobieganie niż naprawa: nasze przeglądy wykrywają usterki zanim przerodzą się w kosztowne naprawy.',
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
        <h2>Dlaczego warto wybrać nasze usługi dekarskie?</h2>
        <p className="service-intro">
          <strong>Łączymy 15 lat doświadczenia z nowoczesnymi technologiami.</strong>
          Specjalizujemy się głównie w <span className="highlight">papie termozgrzewnej premium</span> - mamy ogromne doświadczenie z tego materiału.
          Dodatkowo oferujemy rozwiązania z membran EPDM i PVC dla specjalnych zastosowań.
          Każdy dach wykonujemy z najwyższą dbałością o szczegóły.
        </p>        <div className="service-gif-wrapper">
          <img src={roofBuildGif} alt="zgifowany dach z papą termozgrzewalną" className="service-gif" />
        </div>      </div>

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
                    <span className="feature-icon" aria-hidden="true"></span>
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
