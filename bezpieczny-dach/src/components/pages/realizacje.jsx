import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const loadImages = async () => {
      try {
        const images = [];
        for (let i = 1; i <= 91; i++) {
          try {
            const thumb = await import(`../realizacje/thumbs/${i}.webp`);
            const full = await import(`../realizacje/thumbs/${i}f.webp`);
            
            images.push({
              id: i,
              thumb: thumb.default,
              full: full.default,
              title: `Realizacja ${i}`,
              alt: `Profesjonalne docieplenie dachu - realizacja ${i}`
            });
          } catch (err) {
            console.warn(`Nie znaleziono zdjęcia ${i}.webp lub ${i}f.webp`);
          }
        }
        setGalleryImages(images);
      } catch (error) {
        setError('Wystąpił problem podczas ładowania galerii');
        console.error('Błąd ładowania zdjęć:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  const openImage = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    const newIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentImageIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  // Obsługa klawiatury
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeImage();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex, galleryImages, goToPrevious, goToNext]);

  return (
    <>
      <Helmet>
        <title>Nasze Realizacje | Bezpieczny Dach Szczecin</title>
        <meta 
          name="description" 
          content="Zobacz nasze realizacje dociepleń dachów w Szczecinie i okolicach. Profesjonalne wykonanie i zadowoleni klienci." 
        />
        <link rel="canonical" href="https://www.bezpiecznydach.pl/realizacje" />
      </Helmet>

      <Header />

      <main className="realizacje-container">
        {/* Sekcja hero */}
        <section className="hero-sectionR">
          <div className="hero-contentR">
            <h1>NASZE REALIZACJE</h1>
            <p className="hero-subtitle">Zobacz przykłady naszych prac - profesjonalne docieplenia dachów w Szczecinie</p>
          </div>
        </section>

        {/* Galeria */}
        <section className="gallery-section">
          <h2>ZOBACZ NASZE PRACE</h2>
          <p className="gallery-description">Kliknij w zdjęcie, aby je powiększyć</p>
          
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
              
              {/* SEO - Ukryta lista zdjęć dla robotów */}
              <div className="seo-image-list" aria-hidden="true" style={{ display: 'none' }}>
                {galleryImages.map((image) => (
                  <img 
                    key={`seo-${image.id}`} 
                    src={image.full} 
                    alt={image.alt}
                  />
                ))}
              </div>
            </>
          )}
        </section>
      </main>

      {/* Sekcja CTA - przeniesiona poza main dla lepszego pozycjonowania */}
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