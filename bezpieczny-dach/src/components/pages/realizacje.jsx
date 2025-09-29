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
  const [loadedCount, setLoadedCount] = useState(0);

  // Ładowanie obrazów w partiach
  useEffect(() => {
    const batchSize = 10;
    const totalImages = 91;
    let cancelled = false;

    const loadBatch = async (start, end) => {
      const batch = [];
      for (let i = start; i <= end; i++) {
        try {
          const [thumb, full] = await Promise.all([
            import(`../realizacje/thumbs/${i}.webp`),
            import(`../realizacje/thumbs/${i}f.webp`)
          ]);
          
          batch.push({
            id: i,
            thumb: thumb.default,
            full: full.default,
            // [SEO OPTYMALIZACJA] Bardziej opisowy title i alt dla każdego zdjęcia
            title: `Realizacja dachu płaskiego w Szczecinie - Projekt ${i}`,
            alt: `Papa termozgrzewalna, docieplenie dachu płaskiego w Szczecinie - ZDJĘCIE ${i}`
          });
        } catch (err) {
          console.warn(`Nie znaleziono zdjęcia ${i}.webp`);
        }
      }
      return batch;
    };

    const loadImages = async () => {
      try {
        setIsLoading(true);
        
        const firstBatch = await loadBatch(1, Math.min(batchSize, totalImages));
        if (cancelled) return;
        
        setGalleryImages(firstBatch);
        setLoadedCount(firstBatch.length);
        setIsLoading(false);

        for (let i = batchSize + 1; i <= totalImages; i += batchSize) {
          const batchEnd = Math.min(i + batchSize - 1, totalImages);
          const newBatch = await loadBatch(i, batchEnd);
          if (cancelled) return;
          
          setGalleryImages(prev => [...prev, ...newBatch]);
          setLoadedCount(prev => prev + newBatch.length);
          await new Promise(resolve => setTimeout(resolve, 100));
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

// Poprawka nawigacji, aby była bardziej czysta
const navigate = useCallback((direction) => {
  setGalleryImages(currentImages => {
    const total = currentImages.length;
    if (total === 0) return currentImages;

    setCurrentImageIndex(prev => {
      let newIndex = prev + direction;
      if (newIndex < 0) newIndex = total - 1;
      if (newIndex >= total) newIndex = 0;

      setSelectedImage(currentImages[newIndex]);
      return newIndex;
    });
    return currentImages;
  });
}, []);

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
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeImage, goToPrevious, goToNext]);

  return (
    <>
      <Helmet>
        {/* [SEO OPTYMALIZACJA] Wzmocniony Title */}
        <title>⭐ Realizacje Dachów Płaskich i Dociepleń | Dekarz Szczecin | Bezpieczny Dach</title>
        
        {/* [SEO OPTYMALIZACJA] Wzmocniony Description (frazy kluczowe) */}
        <meta 
          name="description" 
          content="Galeria zrealizowanych projektów w Szczecinie. Zobacz montaż papy termozgrzewalnej, docieplenia dachów płaskich i renowacje. Sprawdź jakość naszych usług dekarskich." 
        />
        <link rel="canonical" href="https://www.bezpiecznydach.pl/realizacje" />

        {/* [SEO OPTYMALIZACJA] Dodanie struktury danych BreadcrumbList */}
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
            {/* [SEO OPTYMALIZACJA] Bardziej konkretny H1 */}
            <h1>GALERIA ZREALIZOWANYCH <br></br>PROJEKTÓW <br></br> DEKARZ SZCZECIN</h1>
            <p className="hero-subtitle">Zobacz przykłady naszych prac - **papa termozgrzewalna** i profesjonalne **docieplenia dachów płaskich** w Szczecinie i okolicach.</p>
          </div>
        </section>

        {/* Galeria */}
        <section className="gallery-section">
          {/* [SEO OPTYMALIZACJA] Bardziej konkretny H2 */}
          <h2>NASZE PRACE: MONTAŻ PAPY I DOCIEPLENIA DACHÓW</h2>
          <p className="gallery-description">Kliknij w zdjęcie, aby je powiększyć. Wszystkie projekty zrealizowane przez firmę Bezpieczny Dach.</p>
          
          {isLoading ? (
            <div className="loading-spinner">Ładowanie galerii...</div>
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : (
            <>
              <div className="gallery-grid">
                {galleryImages.map((image, index) => (
                  <div 
                    key={image.id} 
                    className="gallery-item"
                    onClick={() => openImage(image, index)}
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
                      <span className="zoom-icon">🔍</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* [SEO OPTYMALIZACJA] Usunięty zbędny ukryty blok - atrybuty ALT są teraz w kodzie */}
            </>
          )}
        </section>
      </main>

      {/* Sekcja CTA - (OK) */}
      <section className="contact-cta">
        <div className="cta-container">
          <h2>ZAINTERESOWANY NASZYMI USŁUGAMI?</h2>
          <p>Skontaktuj się z nami, aby omówić Twój projekt</p>
          <div className="cta-buttons">
            <a href="tel:+48518144882" className="cta-button-primary">ZADZWOŃ: 518 144 882</a>
            <Link to="/#contact" className="cta-button-secondary">FORMULARZ KONTAKTOWY</Link>
          </div>
        </div>
      </section>

      {/* Modal z powiększonym zdjęciem */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImage}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeImage}>&times;</button>
            
            <button className="nav-button prev-button" onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}>&larr;</button>
            
            <div className="image-container">
              <img 
                src={selectedImage.full} 
                alt={selectedImage.alt} 
                className="modal-image"
                width="1200"
                height="900"
              />
              <p className="image-title">{selectedImage.title} ({currentImageIndex + 1}/{galleryImages.length})</p>
            </div>
            
            <button className="nav-button next-button" onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}>&rarr;</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Realizacje;