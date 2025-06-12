
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import './Header.css';
import logo from '../components/photos/logo.webp';
import { Link } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handlePhoneClick = () => {
        closeMenu();
        window.location.href = 'tel:+48518144882';
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isMenuOpen]);

    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Dekarska Pomoc Logo" className="logo" />
            </div>
            
            <button 
                className="mobile-menu-button" 
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-label="Menu"
            >
                <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </span>
            </button>

            <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="nav-links">
                    
                    <Link to="/#home" onClick={closeMenu}>Strona główna</Link>
                    <Link to="/dachy-plaskie" onClick={closeMenu}>Dachy płaskie</Link>
                    <Link to="/docieplanie-dachow" onClick={closeMenu}>Izolacja</Link>
                    <Link to="/o-nas" onClick={closeMenu}>O nas</Link>
                    <Link to="/wykonawstwo" onClick={closeMenu}>Wykonawstwo</Link>
                    <Link to="/baza-wiedzy" onClick={closeMenu}>Baza wiedzy</Link>
                    <Link to="/realizacje" onClick={closeMenu}>Realizacje</Link>
                    <Link to="/#contact" onClick={closeMenu}>Kontakt</Link>
                  
                </div>
                
            
                <div className="header-social">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61575175164575" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </div>
                
                <button className="btn-primary" onClick={handlePhoneClick}>
                    Zadzwoń do nas +48 518 144 882
                </button>
            </nav>
        </header>
    );
}

export default Header;