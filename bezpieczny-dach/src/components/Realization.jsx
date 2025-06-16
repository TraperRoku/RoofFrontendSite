import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './footer';
import './pages/Realizacje.css';

function Realizacje() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [setLoadedCount] = useState(0);

  // Enhanced image loading with better error handling
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
            title: `Realizacja nr ${i} - Bezpieczny Dach Szczecin`,
            alt: `Profesjonalne docieplenie dachu w Szczecinie - realizacja ${i}`,
            description: `Zdjęcie przedstawiające wykonaną przez nas usługę docieplenia dachu w województwie zachodniopomorskim`
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
        
        // First batch for quick preview
        const firstBatch = await loadBatch(1, Math.min(batchSize, totalImages));
        if (cancelled) return;
        
        setGalleryImages(firstBatch);
        setLoadedCount(firstBatch.length);
        setIsLoading(false);

        // Load remaining images in background
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

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex(prev => {
      const newIndex = (prev - 1 + galleryImages.length) % galleryImages.length;
      return newIndex;
    });
    setSelectedImage(galleryImages[(currentImageIndex - 1 + galleryImages.length) % galleryImages.length]);
  }, [galleryImages, currentImageIndex]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex(prev => {
      const newIndex = (prev + 1) % galleryImages.length;
      return newIndex;
    });
    setSelectedImage(galleryImages[(currentImageIndex + 1) % galleryImages.length]);
  }, [galleryImages, currentImageIndex]);

  // Keyboard navigation
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

  // Generate schema markup for images
  const generateImageSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": galleryImages.slice(0, 10).map((image, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "ImageObject",
          "contentUrl": image.full,
          "description": image.description,
          "name": image.title
        }
      }))
    };
  };

  return (
    <>
      <Helmet>
        <title>Realizacje Dociepleń Dachów w Szczecinie | Bezpieczny Dach</title>
        <meta 
          name="description" 
          content="Zobacz nasze realizacje dociepleń dachów w Szczecinie i okolicach. Ponad 90 wykonanych projektów - dachy płaskie, skośne, zielone. Profesjonalne wykonanie i zadowoleni klienci." 
        />
        <meta name="keywords" content="realizacje dociepleń dachów Szczecin, zdjęcia dachów płaskich, wykonane dachy Szczecin, galeria prac dekarskich, przykłady dociepleń" />
        <link rel="canonical" href="https://www.bezpiecznydach.pl/realizacje" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Realizacje Dociepleń Dachów w Szczecinie | Bezpieczny Dach" />
        <meta property="og:description" content="Zobacz nasze realizacje dociepleń dachów w Szczecinie. Ponad 90 wykonanych projektów - profesjonalne wykonanie i zadowoleni klienci." />
        <meta property="og:url" content="https://www.bezpiecznydach.pl/realizacje" />
        <meta property="og:image" content={galleryImages[0]?.full || ''} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Realizacje Dociepleń Dachów w Szczecinie | Bezpieczny Dach" />
        <meta name="twitter:description" content="Zobacz nasze realizacje dociepleń dachów w Szczecinie. Ponad 90 wykonanych projektów - profesjonalne wykonanie i zadowoleni klienci." />
        <meta name="twitter:image" content={galleryImages[0]?.full || ''} />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Realizacje Dociepleń Dachów w Szczecinie",
            "description": "Galeria realizacji dociepleń dachów wykonanych przez Bezpieczny Dach w Szczecinie",
            "publisher": {
              "@type": "LocalBusiness",
              "name": "Bezpieczny Dach Szczecin",
              "image": galleryImages[0]?.full || '',
              "telephone": "+48518144882",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Szczecin",
                "addressRegion": "Zachodniopomorskie"
              }
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateImageSchema())}
        </script>
      </Helmet>

      <Header />

      <main className="realizacje-container">
        {/* Enhanced Hero Section */}
        <section className="hero-sectionR" aria-label="Galeria realizacji">
          <div className="hero-contentR">
            <h1>NASZE REALIZACJE W SZCZECINIE</h1>
            <p className="hero-subtitle">Ponad 90 profesjonalnie wykonanych dociepleń dachów w województwie zachodniopomorskim</p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-text">lat doświadczenia</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">90+</span>
                <span className="stat-text">zrealizowanych projektów</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-text">zadowolonych klientów</span>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section with Better Structure */}
        <section className="gallery-section" itemScope itemType="https://schema.org/ImageGallery">
          <div className="section-header">
            <h2>GALERIA NASZYCH PRAC</h2>
            <p className="gallery-description">Kliknij w zdjęcie, aby zobaczyć szczegóły realizacji</p>
          </div>
          
          {isLoading ? (
            <div className="loading-spinner" aria-live="polite">Ładowanie galerii...</div>
          ) : error ? (
            <div className="error-message" role="alert">{error}</div>
          ) : (
            <>
              <div className="gallery-grid">
                {galleryImages.map((image, index) => (
                  <figure 
                    key={image.id} 
                    className="gallery-item"
                    onClick={() => openImage(image, index)}
                    itemScope
                    itemType="https://schema.org/ImageObject"
                  >
                    <img 
                      src={image.thumb} 
                      alt={image.alt} 
                      className="gallery-thumb"
                      loading="lazy"
                      width="400"
                      height="300"
                      itemProp="thumbnail"
                    />
                    <div className="image-overlay">
                      <span className="zoom-icon" aria-hidden="true">🔍</span>
                      <figcaption className="sr-only">{image.title}</figcaption>
                    </div>
                    <meta itemProp="description" content={image.description} />
                  </figure>
                ))}
              </div>
              
              {/* SEO - Hidden image list for crawlers */}
              <div className="seo-image-list" aria-hidden="true" style={{ display: 'none' }}>
                {galleryImages.map((image) => (
                  <img 
                    key={`seo-${image.id}`} 
                    src={image.full} 
                    alt={image.alt}
                    title={image.title}
                  />
                ))}
              </div>
            </>
          )}
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <h2>OPINIE NASZYCH KLIENTÓW</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <blockquote>
                "Profesjonalne podejście i terminowa realizacja. Dach po dociepleniu wygląda idealnie, a w domu jest znacznie cieplej."
              </blockquote>
              <cite>- Anna, Szczecin</cite>
            </div>
            <div className="testimonial-card">
              <blockquote>
                "Zależało mi na dobrej izolacji dachu płaskiego. Ekipa Bezpieczny Dach wykonała pracę perfekcyjnie, z dbałością o szczegóły."
              </blockquote>
              <cite>- Marek, Police</cite>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced CTA Section */}
      <section className="contact-cta" aria-label="Kontakt">
        <div className="cta-container">
          <h2>CHCESZ TAKI EFEKT U SIEBIE?</h2>
          <p>Skontaktuj się z nami, aby omówić Twój projekt docieplenia dachu</p>
          <div className="cta-content">
            <div className="cta-benefits">
              <ul>
                <li>Darmowa wycena z dojazdem</li>
                <li>Gwarancja na wykonane prace</li>
                <li>Profesjonalne doradztwo</li>
                <li>Możliwość finansowania</li>
              </ul>
            </div>
            <div className="cta-buttons">
              <a href="tel:+48518144882" className="cta-button-primary">
                <span aria-hidden="true">📞</span> ZADZWOŃ: 518 144 882
              </a>
              <Link to="/#contact" className="cta-button-secondary">
                <span aria-hidden="true">✉️</span> FORMULARZ KONTAKTOWY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImage} role="dialog" aria-modal="true" aria-label="Powiększone zdjęcie">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-button" 
              onClick={closeImage}
              aria-label="Zamknij podgląd zdjęcia"
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
              &larr;
            </button>
            
            <div className="image-container">
              <img 
                src={selectedImage.full} 
                alt={selectedImage.alt} 
                className="modal-image"
                width="1200"
                height="900"
                itemProp="contentUrl"
              />
              <p className="image-title">
                {selectedImage.title} <span>({currentImageIndex + 1}/{galleryImages.length})</span>
              </p>
            </div>
            
            <button 
              className="nav-button next-button" 
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              aria-label="Następne zdjęcie"
            >
              &rarr;
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Realizacje;