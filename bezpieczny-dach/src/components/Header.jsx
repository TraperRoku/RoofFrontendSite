// Header.js
import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import './Header.css';
import logo from '../components/photos/logo.webp';
import { Link } from 'react-router-dom';
import PhoneLink from './PhoneLink';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
        scrollToTop();
    }, [scrollToTop]);


    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) closeMenu();
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [closeMenu]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => document.body.classList.remove('no-scroll');
    }, [isMenuOpen]);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                {/* Logo */}
                <div className="logo-section">
                    <Link to="/" className="logo-link" onClick={closeMenu}>
                        <img src={logo} alt="Dekarska Pomoc - Dachy płaskie Szczecin" className="logo" />
                        <div className="logo-text">
                            <span className="company-name">Dekarska Pomoc</span>
                            <span className="tagline">Dachy płaskie Szczecin</span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <div className="nav-primary">
                        <Link to="/" className="nav-link" onClick={closeMenu}>Strona główna</Link>
                        <Link to="/dachy-plaskie" className="nav-link featured" onClick={closeMenu}>Dachy płaskie</Link>
                        <Link to="/papa-termozgrzewalna" className="nav-link featured" onClick={closeMenu}>Papa Termozgrzewalna</Link>
                        <Link to="/wykonawstwo" className="nav-link" onClick={closeMenu}>Usługi dekarskie</Link>
                        <Link to="/realizacje" className="nav-link" onClick={closeMenu}>Realizacje</Link>
                        <Link to="/#contact" className="nav-link" onClick={closeMenu}>Kontakt</Link>
                    </div>
                    <div className="nav-secondary">
                        <Link to="/docieplanie-dachow" className="nav-link-small" onClick={closeMenu}>Izolacja</Link>
                        <Link to="/o-nas" className="nav-link-small" onClick={closeMenu}>O nas</Link>
                        <Link to="/faq" className="nav-link-small" onClick={closeMenu}>Baza wiedzy</Link>
                    </div>
                </nav>

                {/* Contact & Social */}
                <div className="header-actions">
                    <div className="contact-info">
                        <span className="phone-label">Zadzwoń teraz:</span>
                        <PhoneLink className="phone-number" onClick={closeMenu} >
                            <FontAwesomeIcon icon={faPhone} />
                            518 144 882
                            </PhoneLink>
                    </div>
                    <div className="social-links">
                        <a
                            href="https://www.facebook.com/profile.php?id=61575175164575"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook - Dekarska Pomoc Szczecin"
                            className="social-link"
                            onClick={closeMenu}
                        >
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-toggle"
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation menu"
                >
                    <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </span>
                </button>
            </div>

            {/* Mobile Overlay */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>

            {/* Mobile Menu */}
            <nav className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-header">
                    <span className="mobile-menu-title">Menu</span>
                    {/* ✕ PRZYCISK ZAMKNIĘCIA */}
                    <button
                        className="mobile-close-btn"
                        onClick={closeMenu}
                        aria-label="Zamknij menu"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                
           <PhoneLink className="phone-number" onClick={closeMenu}>
  <FontAwesomeIcon icon={faPhone} />
  518 144 882
</PhoneLink>

                <div className="mobile-nav-links">
                    <div className="mobile-nav-group">
                        <h4>Główne usługi</h4>
                        <Link to="/" onClick={closeMenu}>Strona główna</Link>
                        <Link to="/dachy-plaskie" onClick={closeMenu} className="featured">Dachy płaskie Szczecin</Link>
                        <Link to="/papa-termozgrzewalna" onClick={closeMenu} className="featured">Papa termozgrzewalna</Link>
                        <Link to="/wykonawstwo" onClick={closeMenu}>Usługi dekarskie</Link>
                        <Link to="/realizacje" onClick={closeMenu}>Realizacje</Link>
                        <Link to="/#contact" onClick={closeMenu}>Kontakt</Link>
                    </div>
                    <div className="mobile-nav-group">
                        <h4>Informacje</h4>
                        <Link to="/docieplanie-dachow" onClick={closeMenu}>Izolacja dachów</Link>
                        <Link to="/o-nas" onClick={closeMenu}>O nas</Link>
                        <Link to="/faq" onClick={closeMenu}>Baza wiedzy</Link>
                    </div>
                </div>

                <div className="mobile-menu-footer">
                    <div className="mobile-contact">
                     <PhoneLink className="phone-number" onClick={closeMenu}>
  <FontAwesomeIcon icon={faPhone} />
  518 144 882
</PhoneLink>
                        <p className="mobile-location">Szczecin i okolice</p>
                    </div>
                    <div className="mobile-social">
                        <a
                            href="https://www.facebook.com/profile.php?id=61575175164575"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            onClick={closeMenu}
                        >
                            <FontAwesomeIcon icon={faFacebookF} />
                            Facebook
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;