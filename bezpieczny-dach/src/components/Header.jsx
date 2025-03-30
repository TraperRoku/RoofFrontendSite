import React, { useState } from 'react';
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
                <button className="btn-primary" a href="#contact" onClick={closeMenu}>
            
                    Zadzwoń do nas +48 518 144 882
                </button>
            </nav>
        </header>
    );
}

export default Header;