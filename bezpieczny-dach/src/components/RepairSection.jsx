import React from 'react';
import './RepairSection.css';

function RepairSection() {
  return (
    <section className="repair-section">
      <div className="container">
        <h1>Profesjonalna naprawa dachów w Szczecinie</h1>
        
        <div className="intro-text">
          <p>
            <strong>Bezpieczny Dach</strong> oferuje kompleksowe naprawy dachów w Szczecinie i okolicach. 
            Działamy na rynku od 15 lat, zapewniając najwyższą jakość usług dekarskich dla klientów indywidualnych i firm.
          </p>
        </div>
        
        <div className="benefits-section">
          <h2>Dlaczego warto wybrać nasze usługi dekarskie w Szczecinie?</h2>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <div className="benefit-content">
                <h3>Gwarancja jakości</h3>
                <p>Wszystkie naprawy dachów objęte są wieloletnią gwarancją</p>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <div className="benefit-content">
                <h3>Darmowa wycena</h3>
                <p>Bezpłatnie przyjedziemy i przygotujemy kosztorys</p>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <div className="benefit-content">
                <h3>Szybki termin realizacji</h3>
                <p>Naprawimy Twój dach w Szczecinie w ekspresowym tempie</p>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <div className="benefit-content">
                <h3>Indywidualne podejście</h3>
                <p>Dopasowujemy rozwiązania do Twoich potrzeb i budżetu</p>
              </div>
            </div>
            
            
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <div className="benefit-content">
                <h3>Doświadczony zespół</h3>
                <p>Nad każdym projektem pracują wykwalifikowani dekarze ze Szczecina</p>
              </div>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <div className="benefit-content">
                <h3>Obsługa awarii 24/7</h3>
                <p>Szybka pomoc w przypadku nagłych uszkodzeń dachu – nawet w weekendy</p>
              </div>
            </div>
          </div>
        
            
        </div>
      
        
        <div className="cta-box">
          <p>Potrzebujesz profesjonalnej naprawy dachu w Szczecinie?</p>
          <div className="contact-info">Zadzwoń do nas: <a href="tel:+48518144882" className="phone-number">+48 518 144 882</a></div>

         <a className="cta-button" href="tel:+48518144882">
             Bezpłatna wycena
        </a>
        </div>
      </div>
    </section>
  );
}


export default RepairSection;