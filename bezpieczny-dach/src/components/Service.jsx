import React from 'react';
import './Service.css';
import imgFix from '../components/photos_to_deploy/1.jpg';
import imgBuild from '../components/photos_to_deploy/17.webp';
import imgPut from '../components/photos/roofReno.jpg';

const services = [
  { 
    src: imgFix, 
    alt: 'Naprawa dachów',
    title: 'Dachy płaskie',
    description: 'Pofesjonalna naprawa i konserwacja dachów płaskich, zapewniająca trwałość i odporność na warunki atmosferyczne.'
  },
  { 
    src: imgBuild, 
    alt: 'Remonty dachów',
    title: 'Systemy Rynnowe',
    description: 'Montaż i serwis systemów rynnowych, które skutecznie chronią budynek przed wilgocią i zalaniem.'
  },
  { 
    src: imgPut, 
    alt: 'Krycie dachów',
    title: 'Konserwacja i przeglądy dachów',
    description: 'Regularne przeglądy i konserwacja dachów, które zapobiegają kosztownym naprawom i wydłużają żywotność pokrycia dachowego.'
  },
];

function Service() {
  return (
    <section id="services" className="service">
      <h2>Nasze Usługi</h2>
      <p>Nasza specjalność to pokrycia dachowe z papy termozgrzewalnej, PVC i EPDM, ale oferujemy również szeroki wachlarz usług dekarskich
      Bez względu na rodzaj materiału czy poziom skomplikowania, każde zlecenie wykonujemy z najwyższą precyzją, gwarantując trwałość i estetykę na długie lata.</p>

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