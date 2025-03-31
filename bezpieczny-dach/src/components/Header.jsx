import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../components/photos/logo.png';

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

    // In Header.jsx - Prevent body scrolling when menu is open
useEffect(() => {
    if (isMenuOpen) {
        document.body.classList.add('menu-open');
    } else {
        document.body.classList.remove('menu-open');
    }
    
    return () => {
        document.body.classList.remove('menu-open');
    };
}, [isMenuOpen]);

    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Dekarska Pomoc Logo" className="logo" />
            </div>
            
            <button className="mobile-menu-button" onClick={toggleMenu}>
                <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </span>
            </button>

            <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="nav-links">
                    <a href="#home" onClick={closeMenu}>Strona główna</a>
                    <a href="#services" onClick={closeMenu}>Usługi</a>
                    <a href="#realization" onClick={closeMenu}>Realizacje</a>
                    <a href="#contact" onClick={closeMenu}>Kontakt</a>
                </div>
                <button className="btn-primary" onClick={handlePhoneClick}>
                    Zadzwoń do nas +48 518 144 882
                </button>
            </nav>
        </header>
    );
}

export default Header;