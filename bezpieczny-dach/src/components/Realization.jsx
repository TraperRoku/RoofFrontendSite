import React, { useState, useCallback, useEffect } from 'react';
import './Realization.css';

// Automatyczne ładowanie i sortowanie obrazów
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

// Lista altów – w tej samej kolejności co obrazy
const imageAlts = [
  'Naprawa dachu płaskiego w Szczecinie - wysokiej jakości hydroizolacja',
  'Renowacja dachu spadzistego w Szczecinie - wymiana dachówki ceramicznej',
  'Montaż nowego dachu z blachodachówki w Szczecinie - realizacja Bezpieczny Dach',
  'Pokrycie dachu gontem bitumicznym w Szczecinie - profesjonalna usługa dekarska',
  'Naprawa przeciekającego dachu w Szczecinie - uszczelnianie połaci dachowej',
  'Instalacja systemu rynnowego na dachu w Szczecinie - kompleksowa usługa',
  'Dach przemysłowy w Szczecinie - wykonanie izolacji termicznej i przeciwwilgociowej',
  'Montaż okien dachowych Velux w Szczecinie - profesjonalna instalacja',
  'Dach mansardowy w Szczecinie - realizacja Bezpieczny Dach z pełną gwarancją',
  'Wymiana pokrycia dachowego na domu jednorodzinnym w Szczecinie - dachówka betonowa',
  'Konserwacja dachu i czyszczenie rynien w Szczecinie - kompleksowa obsługa',
  'Dach z blachy na rąbek stojący w Szczecinie - nowoczesne rozwiązanie',
  'Naprawa kominów i obróbek blacharskich w Szczecinie - fachowa realizacja',
  'Termoizolacja dachu poddasza w Szczecinie - energooszczędne rozwiązania',
  'Modernizacja starego dachu w Szczecinie - kompleksowa realizacja z gwarancją',
  'Montaż dachówki ceramicznej na nowym domu w Szczecinie - solidne wykonanie',
  'Naprawa dachu garażowego w Szczecinie - estetyczne wykończenie',
  'Renowacja połaci dachowej z papy - bezpieczny i trwały efekt',
  'Wymiana starego pokrycia dachowego - nowoczesny wygląd budynku',
  'Kompleksowy remont dachu w budynku wielorodzinnym w Szczecinie',
  'Usuwanie przecieków i izolacja dachu z gwarancją szczelności',
  'Bezpieczny montaż pokrycia dachu w trudnych warunkach',
  'Naprawa dachu nad tarasem w Szczecinie - odporność na wilgoć',
  'Termomodernizacja dachu - energooszczędna inwestycja w dom',
  'Pokrycie dachu garażu blachą trapezową - szybka realizacja',
  'Profesjonalna naprawa połaci dachowej po wichurze',
  'Wymiana starej dachówki na nową - efekt odświeżonego dachu',
  'Zabezpieczenie dachu przed zimą - uszczelnianie i konserwacja',
  'Montaż pokrycia dachowego z dachówki cementowej - trwałość i estetyka',
  'Dachy skośne w Szczecinie - solidna konstrukcja i wykończenie',
  'Naprawa i malowanie elementów metalowych dachu',
  'Realizacja dachu z płyt warstwowych - przemysłowa estetyka',
  'Instalacja nowego systemu odwodnienia dachu - funkcjonalność i styl',
  'Dachy z blachy trapezowej - ekonomiczne rozwiązania dekarskie',
  'Zadaszenie nad wejściem - eleganckie i praktyczne rozwiązanie',
  'Konstrukcja więźby dachowej w nowym budynku - precyzja montażu',
  'Docieplanie dachu nad poddaszem użytkowym w Szczecinie',
  'Montaż obróbek blacharskich i wykończenie kalenicy',
  'Odnawianie dachu z blachodachówki po latach użytkowania',
  'Instalacja dachu z papy termozgrzewalnej - technologia na lata',
  'Przebudowa dachu dwuspadowego - zmiana kąta nachylenia',
  'Finalna realizacja nowego dachu nad budynkiem mieszkalnym'
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
          <h2>NASZE REALIZACJE - DOWÓD NASZYCH UMIEJĘTNOŚĆI DEKARSKICH</h2>
          <div className="underline"></div>
          <p className="section-subtitle">
            <strong>Ponad setki wykonanych dachów!</strong> Każde zdjęcie to historia
            <span className="highlight"> perfekcyjnego wykonania</span>, <span className="highlight">dbałości o szczegóły</span> i
            <span className="highlight"> zadowolonego klienta</span>. Zobacz, jak zmieniamy zwykłe dachy w
            <strong> trwałe, piękne i bezproblemowe konstrukcje</strong>.
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
  height="300"
/>
              <div className="gallery-item-overlay">
                <div className="overlay-content">
                  <span className="zoom-icon">🔍</span>
                  <span className="overlay-text">Zobacz szczegóły realizacji</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <h3>CHCESZ TAKI DACH? ZADZWOŃ TERAZ!</h3>
          <p>Nasi konsultanci czekają, aby omówić Twój projekt i przedstawić bezpłatną wycenę</p>
          <a href="tel:+48518144882" className="cta-button">ZADZWOŃ: 518 144 882</a>
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

              <div className="image-description">
                {imageAlts[currentImageIndex]}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Realization;
