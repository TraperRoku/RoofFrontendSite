import React, { useState } from 'react';
import './Realization.css';
import img1 from '../components/photos_to_deploy/1.jpg';
import img2 from '../components/photos_to_deploy/2.jpg';
import img3 from '../components/photos_to_deploy/3.jpg';

import img4 from '../components/photos_to_deploy/4.jpg';
import img5 from '../components/photos_to_deploy/5.jpg';
import img6 from '../components/photos_to_deploy/6.jpg';

import img7 from '../components/photos_to_deploy/7.jpg';
import img8 from '../components/photos_to_deploy/8.jpg';
import img9 from '../components/photos_to_deploy/9.jpg';

import img10 from '../components/photos_to_deploy/10.jpg';
import img11 from '../components/photos_to_deploy/11.jpg';
import img12 from '../components/photos_to_deploy/12.jpg';

import img13 from '../components/photos_to_deploy/13.jpg';
import img14 from '../components/photos_to_deploy/14.jpg';
import img15 from '../components/photos_to_deploy/15.jpg';



function Realization() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAlt, setSelectedAlt] = useState("");

  const images = [
     { src: img1, alt: 'Naprawa dachu płaskiego w Szczecinie - wysokiej jakości hydroizolacja' },
     { src: img2, alt: 'Renowacja dachu spadzistego w Szczecinie - wymiana dachówki ceramicznej' },
     { src: img3, alt: 'Montaż nowego dachu z blachodachówki w Szczecinie - realizacja Bezpieczny Dach' },
     { src: img4, alt: 'Pokrycie dachu gontem bitumicznym w Szczecinie - profesjonalna usługa dekarska' },
     { src: img5, alt: 'Naprawa przeciekającego dachu w Szczecinie - uszczelnianie połaci dachowej' },
     { src: img6, alt: 'Instalacja systemu rynnowego na dachu w Szczecinie - kompleksowa usługa' },
     { src: img7, alt: 'Dach przemysłowy w Szczecinie - wykonanie izolacji termicznej i przeciwwilgociowej' },
     { src: img8, alt: 'Montaż okien dachowych Velux w Szczecinie - profesjonalna instalacja' },
     { src: img9, alt: 'Dach mansardowy w Szczecinie - realizacja Bezpieczny Dach z pełną gwarancją' },
     { src: img10, alt: 'Wymiana pokrycia dachowego na domu jednorodzinnym w Szczecinie - dachówka betonowa' },
     { src: img11, alt: 'Konserwacja dachu i czyszczenie rynien w Szczecinie - kompleksowa obsługa' },
     { src: img12, alt: 'Dach z blachy na rąbek stojący w Szczecinie - nowoczesne rozwiązanie' },
     { src: img13, alt: 'Naprawa kominów i obróbek blacharskich w Szczecinie - fachowa realizacja' },
     { src: img14, alt: 'Termoizolacja dachu poddasza w Szczecinie - energooszczędne rozwiązania' },
     { src: img15, alt: 'Modernizacja starego dachu w Szczecinie - kompleksowa realizacja z gwarancją' },
    
  ];

  
  const handleImageClick = (image) => {
    setSelectedImage(image.src);
    setSelectedAlt(image.alt);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="realization" className="realization">
      <div className="realization-container">
        <h2>Nasze Realizacje Dachów w Szczecinie</h2>
        <p>Od ponad 15 lat tworzymy dachy w Szczecinie i okolicach, które nie tylko chronią domy, ale stają się ich prawdziwą ozdobą.
           Każdy projekt to dla nas coś więcej niż zlecenie – to okazja, by pokazać nasze umiejętności i rzemiosło.
            Dzięki pasji, doświadczeniu i bliskiej współpracy z klientami powstają dachy, które zachwycają estetyką i służą przez lata. 
            Z dumą prezentujemy nasze realizacje – najlepszy dowód na to, że zawsze dajemy z siebie 110%. 
            Sprawdź nasze projekty dachów w Szczecinie i przekonaj się sam!</p>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item" onClick={() => handleImageClick(image)}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="gallery-item-overlay">
                <span>Kliknij, aby powiększyć</span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal" onClick={handleCloseModal}>
            <div className="modal-content">
              <span className="close-button">&times;</span>
              <img src={selectedImage} alt={selectedAlt} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Realization;