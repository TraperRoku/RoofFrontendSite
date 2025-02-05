import React from 'react';
import './Service.css';
import imgFix from '../components/photos/roofFix.jpg';
import imgBuild from '../components/photos/roofBuild.jpg';
import imgPut from '../components/photos/roofReno.jpg';

const services = [
  { 
    src: imgFix, 
    alt: 'Naprawa dachów',
    title: 'Naprawa dachów',
    description: 'Profesjonalna naprawa wszelkich uszkodzeń i przecieków'
  },
  { 
    src: imgBuild, 
    alt: 'Remonty dachów',
    title: 'Remonty dachów',
    description: 'Kompleksowe remonty i modernizacje istniejących pokryć'
  },
  { 
    src: imgPut, 
    alt: 'Krycie dachów',
    title: 'Krycie dachów',
    description: 'Profesjonalne krycie dachów różnymi materiałami'
  },
];

function Service() {
  return (
    <section id="services" className="service">
      <h2>Nasze Usługi</h2>
      <p>Specjalizujemy się w układaniu papy, jednak nasze doświadczenie obejmuje szeroki zakres usług dekarskich.<br />
        Zajmujemy się kompleksowym wykonywaniem dachów, od tradycyjnych pokryć, przez nowoczesne rozwiązania, aż po remonty i naprawy.<br />
        Bez względu na rodzaj materiału czy stopień trudności, każde zlecenie realizujemy z najwyższą starannością, zapewniając trwałość 
        i estetykę na długie lata.</p>

      <div className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.src} alt={service.alt} />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;