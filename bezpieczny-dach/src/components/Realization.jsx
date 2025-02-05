import React, { useState } from 'react';
import './Realization.css';
import imgFix from '../components/photos/roofFix.jpg';
import imgBuild from '../components/photos/roofBuild.jpg';
import imgPut from '../components/photos/roofReno.jpg';


function Realization() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
     { src: imgFix, alt: 'Realizacja dachu 1' },
     { src: imgBuild, alt: 'Realizacja dachu 2' },
     { src: imgPut, alt: 'Realizacja dachu 3' },
    
  ];

  
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="realization" className="realization">
      <div className="realization-container">
        <h2>Nasze Realizacje</h2>
        <p>Od ponad 15 lat tworzymy dachy, które nie tylko chronią domy, ale stają się ich prawdziwą ozdobą. 
          Każdy projekt to dla nas coś więcej niż zlecenie — to okazja, by pokazać, co naprawdę potrafimy. 
          Dzięki pasji, doświadczeniu i współpracy z naszymi klientami powstają dachy, które cieszą oko i służą przez lata. 
          Z dumą prezentujemy efekty naszej pracy, które są najlepszym dowodem na to, że zawsze dajemy z siebie 110%. 
          Sprawdź nasze realizacje i przekonaj się sam!</p>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item" onClick={() => handleImageClick(image.src)}>
              <img src={image.src} alt={image.alt} />
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
              <img src={selectedImage} alt="Powiększone zdjęcie" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Realization;