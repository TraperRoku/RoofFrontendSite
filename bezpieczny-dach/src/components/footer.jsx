// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Bezpieczny Dach Szczecin</h3>
          <p>Profesjonalne usługi dekarskie od 15 lat</p>
        </div>
        
        <div className="footer-section">
          <h4>Kontakt</h4>
          <p>
            <i className="fas fa-map-marker-alt"></i> Ul. Dekarska 15, 70-000 Szczecin<br />
            <i className="fas fa-phone"></i> +48 518 144 882<br />
            <i className="fas fa-envelope"></i> bezpiecznydach@gmail.com
          </p>
        
          <div className="social-icon">
            <a 
              href="https://www.facebook.com/profile.php?id=61575175164575" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Godziny otwarcia</h4>
          <p>
            Całodobowo 00:00 - 24:00<br />
            Dzwonić w nagłych wypadkach
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bezpieczny Dach. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}

export default Footer;