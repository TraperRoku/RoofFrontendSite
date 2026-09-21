import React, { useState, useCallback, useEffect } from 'react';
import './Realization.css';
import { Link } from 'react-router-dom';
import PhoneLink from './PhoneLink';

const importAll = (r) =>
  r
    .keys()
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map(r);

const imagesContext = require.context(
  '../components/photos_to_deploy/',
  false,
  /\.(jpg|jpeg|png|webp)$/
);

const imageFiles = importAll(imagesContext);

// POPRAWKA: Limit zdjęć na stronie głównej — pokazujemy tylko 8
// Reszta jest dostępna na /realizacje
const HOME_GALLERY_LIMIT = 9;

const imageAlts = [
  'Papa termozgrzewalna montaż na dachu płaskim Szczecin - Bezpieczny Dach',
  'Docieplenie dachu wełną mineralną Szczecin - realizacja Bezpieczny Dach',
  'Papa termozgrzewalna SBS na dachu płaskim Szczecin - profesjonalny montaż',
  'Papa termozgrzewalna uszczelnianie dachu płaskiego Szczecin',
  'Docieplanie dachu płaskiego styropianem Szczecin - Bezpieczny Dach',
  'System rynnowy na dachu - odwodnienie dachu płaskiego Szczecin',
  'Izolacja termiczna dachu płaskiego przemysłowego Szczecin - papa termozgrzewalna SBS',
  'Papa termozgrzewalna SBS montaż na dachu płaskim Szczecin - Bezpieczny Dach',
  'Papa termozgrzewalna na dachu płaskim Szczecin - gwarancja 10 lat',
  'Docieplenie dachu wełną mineralną PIR - remont budynku Szczecin',
  'Naprawa dachu czyszczenie rynien Szczecin - konserwacja',
  'Papa termozgrzewalna SBS system balastowy Szczecin - dachy płaskie',
  'Papa termozgrzewalna naprawa kominów Szczecin - obróbka blacharskie',
  'Docieplenie dachu PIR płyty izolacyjne Szczecin - oszczędność energii',
  'Modernizacja dachu płaskiego papa termozgrzewalna Szczecin',
  'Docieplanie dachu wełną mineralną budynek Szczecin - montaż',
  'Papa termozgrzewalna SBS naprawa dachu płaskiego Szczecin - Bezpieczny Dach',
  'Papa termozgrzewalna renowacja dachu płaskiego Szczecin',
  'Docieplenie dachu z styropianem modernizacja budynku',
  'Remont dachu wielorodzinnego papa termozgrzewalna Szczecin',
  'Naprawa przecieków dachu izolacja papa termozgrzewalna Szczecin',
  'System balastowy papa termozgrzewalna SBS przygotowanie pod panele fotowoltaiczne Szczecin',
  'Docieplanie dachu nad tarasem wełna mineralna Szczecin',
  'Papa termozgrzewalna docieplenie energooszczędne Szczecin',
  'Pokrycie dachu płaskiego trapezowego papa termozgrzewalna SBS Szczecin - Bezpieczny Dach',
  'Naprawa dachu po wichurze uszczelnianie papa Szczecin',
  'Docieplenie dachu styropianem wymiana pokrycia dachowego',
  'Papa termozgrzewalna SBS zabezpieczenie dachu płaskiego przed zimą Szczecin',
  'Papa termozgrzewalna SBS na dachu płaskim Szczecin - profesjonalny montaż',
  'Papa termozgrzewalna SBS remonty dachów płaskich Szczecin - solidne wykonanie',
  'Naprawa elementów metalowych dachu obróbka blacharska',
  'Papa termozgrzewalna SBS realizacja dachu z płyt warstwowych Szczecin',
  'Docieplenie dachu systemy odwodnienia Szczecin - funkcjonalność',
  'Papa termozgrzewalna dachy trapezowe rozwiązania ekonomiczne',
  'Zadaszenie wejścia papa termozgrzewalna SBS rozwiązanie eleganckie Szczecin',
  'Ocieplenie dachu płaskiego płytami PIR Szczecin - precyzyjny montaż',
  'Docieplanie dachu płaskiego wełną mineralną Szczecin - precyzyjny montaż',
  'Papa termozgrzewalna SBS obróbki blacharskie na dachu płaskim Szczecin',
  'Modernizacja dachu płaskiego papa termozgrzewalna SBS Szczecin',
  'Instalacja dachu papy termozgrzewalnej gwarancja 15 lat',
  'Docieplenie dachu płaskiego płyty PIR remont uszczelnienie Szczecin',
  'Papa termozgrzewalna nowy dach budynek mieszkalny Szczecin'
];

function Realization() {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // POPRAWKA: Wyświetlamy tylko pierwsze 8 zdjęć na stronie głównej
  const displayedImages = imageFiles.slice(0, HOME_GALLERY_LIMIT);

  const handleImageClick = useCallback((index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const handleNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % displayedImages.length);
  }, [displayedImages.length]);

  const handlePrev = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + displayedImages.length) % displayedImages.length);
  }, [displayedImages.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === 'Escape') handleCloseModal();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, handleCloseModal, handleNext, handlePrev]);

  return (
    <section id="realization" className="realization">
      <div className="realization-container">
        <div className="section-header">
          <h2>Nasze realizacje dekarskie w Szczecinie — dowód umiejętności</h2>

          <p className="section-subtitle">
            <strong>700+ zrealizowanych projektów B2B.</strong> Każde zdjęcie to historia
            <span className="highlight"> perfekcyjnego wykonania</span>, <span className="highlight">dbałości o szczegóły</span> i
            <span className="highlight"> zadowolonego klienta</span>. Zobacz, jak zmieniamy zwykłe dachy w
            <strong> trwałe, estetyczne i bezproblemowe konstrukcje</strong>.
          </p>
        </div>

        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">lat doświadczenia</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">700+</div>
            <div className="stat-label">zrealizowanych projektów B2B</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99%</div>
            <div className="stat-label">zadowolonych klientów</div>
          </div>
        </div>

        <div className="gallery-grid">
          {/* POPRAWKA: slice do HOME_GALLERY_LIMIT (8 zdjęć) zamiast wszystkich */}
          {displayedImages.map((src, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => handleImageClick(index)}
              role="button"
              tabIndex={0}
              aria-label={`Pokaż zdjęcie: ${imageAlts[index]}`}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  handleImageClick(index);
                }
              }}
            >
              <img
                src={src}
                alt={imageAlts[index]}
                loading="lazy"
                className="gallery-image"
                width="400"
                height="400"
              />
              <div className="gallery-item-overlay">
                <div className="overlay-content">
                  <span className="zoom-icon" aria-hidden="true"></span>
                  <span className="overlay-text">Zobacz szczegóły realizacji</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link to="/realizacje" className="see-more-button">Zobacz więcej realizacji</Link>

        <div className="cta-section">
          <h2>Chcesz taki dach? Zadzwoń teraz!</h2>
          <p>Nasi konsultanci czekają, aby omówić Twój projekt i przedstawić bezpłatną wycenę</p>
          <PhoneLink className="cta-button">Zadzwoń: 518 144 882</PhoneLink>
        </div>

        {isModalOpen && (
          <div className="modal" onClick={handleCloseModal}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-image-title"
            >
              <span
                className="close-button"
                onClick={handleCloseModal}
                aria-label="Zamknij"
              >
                &times;
              </span>

              <picture>
                <source
                  srcSet={displayedImages[currentImageIndex].replace(/\.(jpg|jpeg|png)$/, '.webp')}
                  type="image/webp"
                />
                <img
                  src={displayedImages[currentImageIndex]}
                  alt={imageAlts[currentImageIndex]}
                  className="modal-image"
                  id="modal-image-title"
                />
              </picture>

              <div className="modal-navigation">
                <button
                  className="nav-button prev-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  aria-label="Poprzednie zdjęcie"
                >
                  &#10094;
                </button>
                <button
                  className="nav-button next-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  aria-label="Następne zdjęcie"
                >
                  &#10095;
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Realization;