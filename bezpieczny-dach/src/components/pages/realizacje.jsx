import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../footer';
import '../pages/Realizacje.css';

function Realizacje() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadProgress, setLoadProgress] = useState(0);

  // Ładowanie obrazów z lepszą obsługą błędów
  useEffect(() => {
    const totalImages = 91;
    let cancelled = false;
    const loadedImages = [];

    const loadImage = async (i) => {
      try {
        const [thumb, full] = await Promise.all([
          import(`../realizacje/thumbs/${i}.webp`),
          import(`../realizacje/thumbs/${i}f.webp`)
        ]);
        
        return {
          id: i,
          thumb: thumb.default,
          full: full.default,
          title: `Papa termozgrzewalna membrana EPDM realizacja ${i} Szczecin`,
          alt: `Papa termozgrzewalna docieplenie dachu płaskiego membrana EPDM montaż realizacja ${i} Szczecin - Bezpieczny Dach`
        };
      } catch (err) {
        console.warn(`Nie można załadować zdjęcia ${i}`);
        return null;
      }
    };

    const loadImages = async () => {
      try {
        setIsLoading(true);
        setLoadProgress(0);

        // Ładuj wszystkie obrazy równolegle, ale w partiach
        const batchSize = 10;
        for (let i = 1; i <= totalImages; i += batchSize) {
          if (cancelled) return;
          
          const batchEnd = Math.min(i + batchSize - 1, totalImages);
          const batchPromises = [];
          
          for (let j = i; j <= batchEnd; j++) {
            batchPromises.push(loadImage(j));
          }
          
          const batchResults = await Promise.all(batchPromises);
          const validImages = batchResults.filter(img => img !== null);
          
          loadedImages.push(...validImages);
          
          if (!cancelled) {
            setGalleryImages([...loadedImages]);
            setLoadProgress(Math.round((loadedImages.length / totalImages) * 100));
          }
          
          // Małe opóźnienie między partiami
          await new Promise(resolve => setTimeout(resolve, 50));
        }

        if (!cancelled) {
          setIsLoading(false);
          if (loadedImages.length === 0) {
            setError('Nie znaleziono żadnych zdjęć w galerii');
          }
        }
      } catch (error) {
        if (!cancelled) {
          setError('Wystąpił problem podczas ładowania galerii');
          console.error('Błąd ładowania zdjęć:', error);
          setIsLoading(false);
        }
      }
    };

    loadImages();
    return () => { cancelled = true; };
  }, []);

  const openImage = useCallback((image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeImage = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  }, []);

  const navigate = useCallback((direction) => {
    setCurrentImageIndex(prev => {
      const total = galleryImages.length;
      if (total === 0) return prev;

      let newIndex = prev + direction;
      if (newIndex < 0) newIndex = total - 1;
      if (newIndex >= total) newIndex = 0;

      setSelectedImage(galleryImages[newIndex]);
      return newIndex;
    });
  }, [galleryImages]);

  const goToPrevious = useCallback(() => navigate(-1), [navigate]);
  const goToNext = useCallback(() => navigate(1), [navigate]);

  // Obsługa klawiatury
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'Escape': closeImage(); break;
        case 'ArrowLeft': goToPrevious(); break;
        case 'ArrowRight': goToNext(); break;
        default: break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeImage, goToPrevious, goToNext]);

  return (
    <>
      <Helmet>
        <title>Realizacje dachów płaskich i dociepleń | Bezpieczny Dach Szczecin</title>
        <meta 
          name="description" 
          content="Galeria zrealizowanych projektów: montaż papy termozgrzewalnej, docieplenia dachów płaskich i renowacje. Przykłady naszych realizacji w Szczecinie." 
        />
        <link rel="canonical" href="https://www.bezpiecznydach.pl/realizacje" />

        <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Strona Główna",
              "item": "https://www.bezpiecznydach.pl/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Nasze Realizacje",
              "item": "https://www.bezpiecznydach.pl/realizacje"
            }
          ]
        }
        `}
        </script>
      </Helmet>

      <Header />

      <main className="realizacje-container">
        {/* Sekcja hero */}
        <section className="hero-sectionR">
          <div className="hero-contentR">
            <h1>Galeria zrealizowanych projektów — dekarz Szczecin</h1>
            <p className="hero-subtitle">
              Zobacz przykłady naszych prac - <strong>papa termozgrzewalna</strong> i profesjonalne{' '}
              <strong>docieplenia dachów płaskich</strong> w Szczecinie i okolicach.
            </p>
          </div>
        </section>

        {/* Galeria */}
        <section className="gallery-section">
          <h2>NASZE PRACE: MONTAŻ PAPY I DOCIEPLENIA DACHÓW</h2>
          <p className="gallery-description">
            Kliknij w zdjęcie, aby je powiększyć. Wszystkie projekty zrealizowane przez firmę Bezpieczny Dach.
          </p>
          
          {isLoading ? (
            <div className="loading-spinner">
              <div className="spinner"></div>
              <p>Ładowanie galerii... {loadProgress}%</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${loadProgress}%` }}></div>
              </div>
            </div>
          ) : error ? (
            <div className="error-message">
              <p>{error}</p>
              <p>Prosimy spróbować ponownie później lub skontaktować się z nami.</p>
            </div>
          ) : galleryImages.length === 0 ? (
            <div className="error-message">
              <p>Brak dostępnych zdjęć w galerii.</p>
            </div>
          ) : (
            <>
             
              <div className="gallery-grid">
                {galleryImages.map((image, index) => (
                  <div 
                    key={image.id} 
                    className="gallery-item"
                    onClick={() => openImage(image, index)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        openImage(image, index);
                      }
                    }}
                  >
                    <img 
                      src={image.thumb} 
                      alt={image.alt} 
                      className="gallery-thumb"
                      loading="lazy"
                      width="400"
                      height="300"
                    />
                    <div className="image-overlay">
                      <span className="zoom-icon" aria-hidden="true"></span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>
      </main>

      {/* Sekcja CTA */}
      <section className="contact-cta">
        <div className="cta-container">
          <h2>Zainteresowany naszymi usługami?</h2>
          <p>Skontaktuj się z nami, aby omówić Twój projekt</p>
          <div className="cta-buttons">
            <a href="tel:+48518144882" className="cta-button-primary">Zadzwoń: 518 144 882</a>
            <Link to="/#contact" className="cta-button-secondary">Formularz kontaktowy</Link>
          </div>
        </div>
      </section>

      {/* Modal z powiększonym zdjęciem */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImage}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-button" 
              onClick={closeImage}
              aria-label="Zamknij zdjęcie"
            >
              &times;
            </button>
            
            <button 
              className="nav-button prev-button" 
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              aria-label="Poprzednie zdjęcie"
            >
              ‹
            </button>
            
            <div className="image-container">
              <img 
                src={selectedImage.full} 
                alt={selectedImage.alt} 
                className="modal-image"
              />
              <div className="image-counter">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            </div>
            
            <button 
              className="nav-button next-button" 
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              aria-label="Następne zdjęcie"
            >
              ›
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Realizacje;