import React, { useState, useCallback, useEffect } from 'react';
import './Realization.css';
import { Link } from 'react-router-dom';

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

const imageAlts = [
  'Papa termozgrzewalna montaż na dachu płaskim Szczecin - Bezpieczny Dach',
  'Docieplenie dachu wełną mineralną Szczecin - realizacja Bezpieczny Dach',
  'Membrana EPDM na dachu płaskim Szczecin - profesjonalna instalacja',
  'Papa termozgrzewalna uszczelnianie dachu płaskiego Szczecin',
  'Docieplanie dachu płaskiego styropianem Szczecin - Bezpieczny Dach',
  'System rynnowy na dachu - odwodnienie dachu płaskiego Szczecin',
  'Izolacja termiczna dachu przemysłowego Szczecin - membrana PVC',
  'Membrana PVC montaż na dachu płaskim Szczecin - Bezpieczny Dach',
  'Papa termozgrzewalna dach mansardowy Szczecin - gwarancja 10 lat',
  'Docieplenie dachu wełną mineralną PIR - remont domu Szczecin',
  'Naprawa dachu czyszczenie rynien Szczecin - konserwacja',
  'Membrana EPDM system balastowy Szczecin - dachy płaskie',
  'Papa termozgrzewalna naprawa kominów Szczecin - obróbka blacharskie',
  'Docieplenie dachu PIR płyty izolacyjne Szczecin - oszczędność energii',
  'Modernizacja dachu płaskiego papa termozgrzewalna Szczecin',
  'Docieplanie dachu wełną mineralną budynek Szczecin - montaż',
  'Membrana PVC naprawa dachu garażu Szczecin - Bezpieczny Dach',
  'Papa termozgrzewalna renowacja dachu płaskiego Szczecin',
  'Docieplenie dachu z styropianem modernizacja budynku',
  'Remont dachu wielorodzinnego papa termozgrzewalna Szczecin',
  'Naprawa przecieków dachu izolacja membrana Szczecin',
  'System balastowy membrana EPDM przygotowanie panele fotowoltaika',
  'Docieplanie dachu nad tarasem wełna mineralna Szczecin',
  'Papa termozgrzewalna docieplenie energooszczędne Szczecin',
  'Pokrycie dachu trapezowe membrana PVC Szczecin - Bezpieczny Dach',
  'Naprawa dachu po wichurze uszczelnianie papa Szczecin',
  'Docieplenie dachu styropianem wymiana pokrycia dachowego',
  'Membrana EPDM zabezpieczenie dachu przed zimą Szczecin',
  'Papa termozgrzewalna montaż dachówka cementowa - połaci dachowe',
  'Dachy skośne remonty papa termozgrzewalna Szczecin - solidne',
  'Naprawa elementów metalowych dachu obróbka blacharska',
  'Membrana PVC realizacja dachu z płyt warstwowych Szczecin',
  'Docieplenie dachu systemy odwodnienia Szczecin - funkcjonalność',
  'Papa termozgrzewalna dachy trapezowe rozwiązania ekonomiczne',
  'Zadaszenie wejścia membrana EPDM rozwiązanie eleganckie Szczecin',
  'Konstrukcja dachu więźba dachowa montaż precyzyjny Szczecin',
  'Docieplanie dachu poddasza użytkowego wełna mineralna Szczecin',
  'Papa termozgrzewalna obróbka blacharskie kalenica dachu',
  'Modernizacja dachu blachodachówka papa termozgrzewalna Szczecin',
  'Instalacja dachu papy termozgrzewalnej gwarancja 15 lat',
  'Docieplenie dachu dwuspadowego remont zmiana nachylenia',
  'Papa termozgrzewalna nowy dach budynek mieszkalny Szczecin'
];

function Realization() {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setCurrentImageIndex((prev) => (prev + 1) % imageFiles.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + imageFiles.length) % imageFiles.length);
  }, []);

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
            <strong>Ponad setki wykonanych dachów.</strong> Każde zdjęcie to historia
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
            <div className="stat-number">500+</div>
            <div className="stat-label">zrealizowanych dachów</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99%</div>
            <div className="stat-label">zadowolonych klientów</div>
          </div>
        </div>

        <div className="gallery-grid">
          {imageFiles.map((src, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => handleImageClick(index)}
              role="button"
              tabIndex={0}
              aria-label={`Pokaż zdjęcie: ${imageAlts[index]}`}
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
          <h3>Chcesz taki dach? Zadzwoń teraz!</h3>
          <p>Nasi konsultanci czekają, aby omówić Twój projekt i przedstawić bezpłatną wycenę</p>
          <a href="tel:+48518144882" className="cta-button">Zadzwoń: 518 144 882</a>
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
                  srcSet={imageFiles[currentImageIndex].replace(/\.(jpg|jpeg|png)$/, '.webp')}
                  type="image/webp"
                />
                <img
                  src={imageFiles[currentImageIndex]}
                  alt={imageAlts[currentImageIndex]}
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