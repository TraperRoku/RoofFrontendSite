
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import './footer.css';
import PhoneLink from '../components/PhoneLink';  // ← dodaj
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
            <i className="fas fa-map-marker-alt"></i> Mosty 9D, 72-132 Mosty<br />
            <i className="fas fa-phone"></i> <PhoneLink>+48 518 144 882</PhoneLink><br />
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
            Poniedziałek – Piątek: 07:00 – 18:00<br />
            Sobota: 08:00 – 14:00
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