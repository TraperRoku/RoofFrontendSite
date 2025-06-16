import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Header'
import Footer from '../footer'
import '../pages/DachyPlaskie.css';
import { Link } from 'react-router-dom';

import dach1 from '../photos_to_deploy/8.webp';
import dach2 from '../photos_to_deploy/9.webp';
import dach3 from '../photos_to_deploy/3.webp';
import dach4 from '../photos_to_deploy/23.webp';
import dach5 from '../photos/solar.webp';
import dach6 from '../realizacje/thumbs/73f.webp'; 
import dach7 from '../photos_to_deploy/14.webp';
import dach8 from '../photos/EPDM.webp';



function DachyPlaskie(){
  return (
    <>
<Helmet>
  <title>Profesjonalne Dachy Płaskie Szczecin | ☎ 518 144 882</title>
  <meta 
    name="description" 
    content="SPECJALIZUJEMY SIĘ w dachach płaskich w Szczecinie! Membrana EPDM, PVC, papa termozgrzewalna." 
  />
  <link rel="canonical" href="https://www.bezpiecznydach.pl/dachy-plaskie" />
</Helmet>
      
      <Header />
      
      <main className="dachy-plaskie-container">
    

        <section className="hero-section">
          <div className="hero-content">
            <h1>DACHY PŁASKIE - EKSPERCI OD 15 LAT!</h1>
            <p className="hero-subtitle">Najwyższa jakość wykonania | Darmowa wycena |<br></br> Gwarancja jakości</p>
            <div className="hero-cta">
              <a href="tel:+48518144882" className="cta-button">ZADZWOŃ TERAZ: 518 144 882</a>
            </div>
          </div>
          <div className="hero-image">
            <img src={dach1} alt="Profesjonalny montaż dachu płaskiego w Szczecinie" />
          </div>
        </section>

        <section className="benefits-section">
          <h2>DLACZEGO WARTO WYBRAĆ NASZE DACHY PŁASKIE?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <h3>Natychmiastowa Naprawa Przecieków</h3>
              <p>Działamy w 24h od zgłoszenia - zatrzymujemy wodę zanim zniszczy Twój dom!</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <h3>Sprawdzone Materiały Od Renomowanych Producentów</h3>
              <p>Używamy wyłącznie certyfikowanych rozwiązań od uznanych dostawców – gwarancja trwałości i jakości.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <h3>Setki Udanych Realizacji</h3>
              <p>15 lat doświadczenia na dachach – nasze doświadczenie to Twoje bezpieczeństwo!</p>
            </div>
          </div>
        </section>

        <section className="gallery-section">
          <h2>NASZE REALIZACJE DACHÓW PŁASKICH</h2>
          <p className="gallery-subtitle">Zobacz jak transformujemy dachy w naszych projektach</p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={dach2} alt="Dach płaski przed i po remoncie - Szczecin" />
              <p>Pełna wymiana pokrycia dachowego</p>
            </div>
            <div className="gallery-item">
              <img src={dach3} alt="Montaż membrany EPDM na dachu płaskim" />
              <p>Specjalistyczny montaż EPDM</p>
            </div>
            <div className="gallery-item">
              <img src={dach4} alt="Zielony dach na tarasie - Szczecin" />
              <p>Zielony taras na dachu płaskim</p>
            </div>
            <div className="gallery-item">
              <img src={dach5} alt="Dach płaski pod fotowoltaikę" />
              <p>Przygotowanie pod instalację PV</p>
            </div>
          </div>
        </section>

        <section className="emergency-section">
          <div className="emergency-content">
            <h2>PRZECIEK NA DACHU PŁASKIM? DZIAŁAMY W 24H!</h2>
            <p>Nie czekaj aż woda zniszczy Twój dom! Zadzwoń do naszych ekspertów:</p>
            <a href="tel:+48518144882" className="emergency-button">AWARIA DACHU? ☎ 518 144 882</a>
          </div>
        </section>

        <section className="systems-section">
          <h2>SPECJALISTYCZNE SYSTEMY DACHÓW PŁASKICH</h2>
          <p>Oferujemy 4 sprawdzone rozwiązania dopasowane do Twoich potrzeb:</p>


          <div className="system-card reverse">
    <div className="system-image">
      <img src={dach7} alt="Papa termozgrzewalna" />
    </div>
    <div className="system-content">
      <h3>SYSTEM Z PAPĄ<br></br> TERMOZGRZEWALNĄ</h3>
      <p><strong>Ekonomia i sprawdzona trwałość!</strong> Idealny gdy:</p>
      <ul>
        <li>Szukasz rozwiązania budżetowego</li>
       <li>Cenisz solidność i sprawdzone technologie</li>
        <li>Zależy Ci na szybkiej realizacji</li>
      </ul>
      <p className="system-cta">Zadzwoń chętnie doradzimy: <a href="tel:+48518144882">518 144 882</a></p>
    </div>
  </div>


          
          <div className="system-card">
            <div className="system-image">
              <img src={dach8} alt="System klejony EPDM" />
            </div>
            <div className="system-content">
              <h3>SYSTEM EPDM</h3>
              <p><strong>Ulubiony wybór klientów!</strong> Idealny gdy:</p>
              <ul>
                <li>Masz skomplikowany kształt dachu</li>
                <li>Potrzebujesz lekkiego rozwiązania</li>
                <li>Zależy Ci na szybkim montażu</li>
              </ul>
              <p className="system-cta">Sprawdź czy pasuje do Twojego dachu: <a href="tel:+48518144882">518 144 882</a></p>
            </div>
          </div>

          <div className="system-card reverse">
            <div className="system-image">
              <img src={dach6} alt="System balastowy EPDM" />
            </div>
            <div className="system-content">
              <h3>MEMBRANA PCV</h3>
              <p><strong>Dla wymagających klientów!</strong> Wybierz gdy:</p>
              <ul>
                <li>Chcesz stworzyć taras użytkowy<br></br> lub dach zielony</li>
                <li>Wymagasz odporności na UV<br></br> i uszkodzenia</li>
                <li>Potrzebujesz dodatkowej izolacji</li>
              </ul>
              <p className="system-cta">Zapytaj o szczegóły: <a href="tel:+48518144882">518 144 882</a></p>
            </div>
          </div>

          <div className="system-card">
            <div className="system-image">
              <img src={dach5} alt="System pod fotowoltaikę" />
            </div>
            <div className="system-content">
              <h3>SYSTEM POD FOTOWOLTAIKĘ</h3>
              <p><strong>Przyszłościowe rozwiązanie!</strong> Wybierz gdy:</p>
              <ul>
                <li>Planujesz instalację fotowoltaiczną</li>
                <li>Chcesz zmniejszyć rachunki za prąd</li>
                <li>Szukasz rozwiązania na 20+ lat</li>
              </ul>
              <p className="system-cta">Zadzwoń po darmową konsultację: <a href="tel:+48518144882">518 144 882</a></p>
            </div>
          </div>
        </section>

        <section className="guarantee-section">
  <h2>DLACZEGO KLIENCI POLECAJĄ NAS NAJCHĘTNIEJ?</h2>
  <div className="guarantee-content">
    <div className="guarantee-badge">
      <div className="guarantee-years">1000+</div>
      <div className="guarantee-text">ZADOWOLONYCH KLIENTÓW</div>
    </div>
    <div className="guarantee-text-content">
      <p>Jesteśmy firmą dekarską, która zdobyła zaufanie mieszkańców dzięki:</p>
      <ul>
        <li>Rzetelnej wycenie bez ukrytych kosztów</li>
        <li>Natychmiastowej reakcji na awarie dachów</li>
        <li>Realizacjom zgodnym z najnowszymi standardami technicznymi</li>
      </ul>
      <p><strong>Nasze dachy mówią same za siebie – sam się przekonaj!</strong></p>
    </div>
  </div>
</section>


<section className="contact-cta">
          <h2>MASZ PYTANIA? DZWOŃ - ODPOWIEMY NA WSZYSTKO!</h2>
          <p>Nasi doradcy czekają od 7:00 do 20:00, 7 dni w tygodniu</p>
          <div className="cta-buttons">
            <a href="tel:+48518144882" className="cta-button-primary">ZADZWOŃ: 518 144 882</a>
            <Link to="/#contact" className="cta-button-secondary">FORMULARZ KONTAKTOWY</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default DachyPlaskie;