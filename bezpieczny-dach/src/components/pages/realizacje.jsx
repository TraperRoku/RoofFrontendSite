import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../footer';
import '../pages/Realizacje.css';
import PhoneLink from '../PhoneLink';

const galleryAltTexts = [
  'Zgrzewanie papy nawierzchniowej SBS na dachu hali produkcyjnej Szczecin',
  'Termoizolacja dachu płaskiego płytami PIR — obiekt przemysłowy Goleniów',
  'Renowacja pokrycia bitumicznego na budynku wspólnoty mieszkaniowej Szczecin',
  'Krycie dachu płaskiego papą termozgrzewalną SBS na magazynie zachodniopomorskie',
  'Docieplanie styropapą i montaż papy SBS — hala 1500 m² Szczecin',
  'Dwuwarstwowa papa SBS podkładowa i nawierzchniowa na dachu wielkopowierzchniowym',
  'Uszczelnianie dylatacji na dachu płaskim obiektu użyteczności publicznej',
  'Wymiana papy podkładowej i nawierzchniowej — remont dachu Szczecin',
  'Przygotowanie podłoża pod papę termozgrzewalną SBS — hala Goleniów',
  'Wpusty dachowe i system odwodnienia — szczelne połączenia z papą SBS',
  'Termoizolacja wełną twardą i papa SBS — dach wspólnoty mieszkaniowej',
  'Obróbka komina i parapetu papą termozgrzewalną SBS na dachu płaskim',
  'System balastowy z papą SBS — przygotowanie dachu pod panele fotowoltaiczne Szczecin',
  'Punktowa naprawa przecieków — uszczelnienie papą termozgrzewalną SBS',
  'Modernizacja dachu płaskiego: PIR i dwuwarstwowa papa SBS — budynek biurowy Szczecin',
  'Renowacja starych warstw papy bitumicznej — administracja wojewódzka',
  'Papa nawierzchniowa SBS łupkowa — dach hali magazynowej Szczecin',
  'Termomodernizacja PIR — redukcja strat ciepła na dachu płaskim B2B',
  'Diagnostyka przecieków — odkrywki kontrolne na dachu płaskim Szczecin',
  'Zgrzewanie papy SBS na płytach warstwowych — hala produkcyjna zachodniopomorskie',
  'Płyty spadkowe PIR i papa SBS — prawidłowe spadki i odwodnienie dachu',
  'Remont dachu nad halą podziemną — pełne uszczelnienie SBS Szczecin',
  'Wełna mineralna twarda ROCKWOOL + papa podkładowa SBS — obiekt publiczny',
  'Wymiana pokrycia w szkole podstawowej — papa SBS obiekt użyteczności publicznej',
  'Krycie dachu płaskiego dla generalnego wykonawcy — kontrakt B2B Goleniów',
  'Styropapa i dwuwarstwowa papa SBS — centrum logistyczne Szczecin',
  'Zgrzewanie papy nawierzchniowej SBS — dach 2000 m² hala produkcyjna',
  'Szczelne obróbki wyłazów i przejść instalacyjnych — papa termozgrzewalna SBS',
  'Remont dachu bloku mieszkalnego — wspólnota Szczecin dokumentacja powykonawcza',
  'Czyszczenie i gruntowanie podłoża — przygotowanie pod nową papę SBS',
  'System wentylowany papy SBS — brak pęcherzy i pęknięć na dachu płaskim',
  'Protokół odbioru technicznego dachu płaskiego z papy SBS — dokumentacja DWU',
  'Naprawa attyki i wpustów — trwałe uszczelnienie papą SBS Szczecin',
  'Nowy dach płaski na centrum handlowym — pełny system izolacji PIR + SBS',
  'Płyty PIR lambda 0,022 — najwyższa klasa energetyczna dachu płaskiego',
  'Kontrola szczelności dachu płaskiego przed zimą — przegląd okresowy SBS',
  'Realizacja dachu dla TBS Goleniów — papa SBS i docieplenie wełną',
  'Papa podkładowa wentylowana + nawierzchniowa SBS — standard dekarstwa',
  'Uszczelnianie połączenia ściana-dach — kołnierz z papy SBS Szczecin',
  'Demontaż starej papy i montaż nowego systemu SBS — remont generalny',
  'Obciążenie śniegiem — projektowana termoizolacja dachu płaskiego PIR',
  'Krycie dachu na obiekcie wojskowym — realizacja przetargowa B2B SBS',
  'Przegląd jesienny dachów płaskich — uszczelnienia i konserwacja papy SBS',
  'Praca ekipy dekarskiej na wysokości — montaż dwuwarstwowej papy SBS',
  'Zabezpieczenie dachu płaskiego podczas budowy — tymczasowa papa SBS',
  'Dach płaski z papą SBS na budynku szpitala — obiekt użyteczności publicznej',
  'Naprawa po gradobiciu — wymiana uszkodzonej papy nawierzchniowej SBS',
  'Montaż świetlików dachowych i szczelne obróbki papą termozgrzewalną SBS',
  'Papa SBS na dachu płaskim hali podziemnej — wodoszczelność klasy W3',
  'Dwuwarstwowe krycie papy SBS na hali 1200 m² — Szczecin realizacja',
  'Termoizolacja inwertowana — styropapa geowłóknina balast kamienny SBS',
  'Zgrzewanie naroży i załamań — precyzyjna praca z papą termozgrzewalną',
  'Dach płaski na obiekcie inwentarskim — papa SBS odporna na środowisko Goleniów',
  'Realizacja dla Jednostki Wojskowej — dachy płaskie z papą SBS dokumentacja',
  'Krycie dachu płaskiego na warsztacie — papa SBS wentylowana',
  'Usuwanie śniegu i lodu z dachu płaskiego — profilaktyka uszkodzeń SBS',
  'Papa SBS na dachu płaskim biurowca — estetyka i trwałość 15 lat gwarancji',
  'Łączenie starych warstw papy z nowym systemem SBS — renowacja Szczecin',
  'Konstrukcja nośna pod izolację — sprawdzenie nośności przed dociepleniem',
  'Montaż barierki bezpieczeństwa i punktów asekuracyjnych — BHP na dachu SBS',
  'Dach płaski z zielenią ekstensywną — system SBS z warstwą drenującą Szczecin',
  'Badania termowizyjne — wykrywanie mostków cieplnych na dachu płaskim',
  'Papa samoprzylepna na trudno dostępnych fragmentach dachu płaskiego SBS',
  'Przygotowanie projektu technicznego — systemy dachowe ICOPAL Swisspor Nexxler',
  'Naprawa po awarii kanalizacji — uszczelnienie uszkodzonej papy SBS',
  'Dach płaski na obiekcie TBS — wieloletnia współpraca z zarządcą nieruchomości',
  'Wymiana obróbek blacharskich — obróbka blacha tytanowo-cynkowa + papa SBS',
  'System zabezpieczenia przeciwpożarowego dachu płaskiego — papa SBS klasa E',
  'Kontrola jakości zgrzewów — testy szczelności na zakończenie prac SBS',
  'Dach płaski na obiekcie handlowym — intensywny ruch pieszy na dachu SBS',
  'Papa SBS na obiekcie inwentarskim — odporność biologiczna i chemiczna',
  'Zabezpieczenie przed korozją — papa SBS na stalowej konstrukcji dachu',
  'Montaż anten i urządzeń — szczelne przejścia przez dach płaski SBS',
  'Kompletny odbiór techniczny — protokół zdjęciowy i karty materiałowe',
  'Dach płaski na węźle komunikacyjnym — system specjalny papa SBS',
  'Naprawa dachu w trakcie użytkowania — etapowy remont bez zakłóceń',
  'Termomodernizacja dofinansowana z UE — dokumentacja dla wniosku PIR SBS',
  'Papa SBS na dachu płaskim stadionu — odporność na ekstremalne warunki',
  'Zgrzewanie automatyczne papy SBS — równomierne zgrzewy duża powierzchnia',
  'Ochrona przeciwpowodziowa — podwyższone obróbki na dachu płaskim SBS',
  'Dach płaski na obiekcie muzeum — stabilne warunki wilgotności SBS PIR',
  'System odwadniania — hydroforowe wpusty dachowe papa SBS Szczecin',
  'Inwentaryzacja dachu płaskiego — raport stanu technicznego i plan napraw',
  'Papa SBS na schodach zewnętrznych — antypoślizgowa powierzchnia',
  'Krycie dachu płaskiego na obiekcie dworca — wysoka estetyka SBS łupkowa',
  'Współpraca podwykonawcza — standardy BHP i dokumentacja Generalnego Wykonawcy',
  'Remont dachu po 20 latach — pełna wymiana izolacji i papy SBS Szczecin',
  'Zabezpieczenie prac dekarskich — siatki bezpieczeństwa i pasy SBS',
  'Gotowy dach płaski z papą SBS — satysfakcja klienta B2B zachodniopomorskie',
  'Odbiór powykonawczy z inspektorem nadzoru — dach płaski z papą SBS Szczecin',
  'Kontrola termowizyjna po termomodernizacji — dach płaski z izolacją PIR i papą SBS'
];

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
        const text = galleryAltTexts[(i - 1) % galleryAltTexts.length];
        return {
          id: i,
          thumb: thumb.default,
          full: full.default,
          title: text,
          alt: text + ' — Bezpieczny Dach'
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
            <PhoneLink className="cta-button-primary">Zadzwoń: 518 144 882</PhoneLink>
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