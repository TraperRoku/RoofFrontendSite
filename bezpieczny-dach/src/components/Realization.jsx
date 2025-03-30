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

  const images = [
     { src: img1, alt: 'Realizacja dachu 1' },
     { src: img2, alt: 'Realizacja dachu 2' },
     { src: img3, alt: 'Realizacja dachu 3' },
     { src: img4, alt: 'Realizacja dachu 4' },
     { src: img5, alt: 'Realizacja dachu 5' },
     { src: img6, alt: 'Realizacja dachu 6' },
     { src: img7, alt: 'Realizacja dachu 7' },
     { src: img8, alt: 'Realizacja dachu 8' },
     { src: img9, alt: 'Realizacja dachu 9' },
     { src: img10, alt: 'Realizacja dachu 10' },
     { src: img11, alt: 'Realizacja dachu 11' },
     { src: img12, alt: 'Realizacja dachu 12' },
     { src: img13, alt: 'Realizacja dachu 13' },
     { src: img14, alt: 'Realizacja dachu 14' },
     { src: img15, alt: 'Realizacja dachu 15' },
    
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
           Każdy projekt to dla nas coś więcej niż zlecenie – to okazja, by pokazać nasze umiejętności i rzemiosło.
            Dzięki pasji, doświadczeniu i bliskiej współpracy z klientami powstają dachy, które zachwycają estetyką i służą przez lata. 
            Z dumą prezentujemy nasze realizacje – najlepszy dowód na to, że zawsze dajemy z siebie 110%. 
            Sprawdź nasze projekty i przekonaj się sam!</p>

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