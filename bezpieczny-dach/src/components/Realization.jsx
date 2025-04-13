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

import img16 from '../components/photos_to_deploy/16.jpg';
import img17 from '../components/photos_to_deploy/17.jpg';
import img18 from '../components/photos_to_deploy/18.jpg';
import img19 from '../components/photos_to_deploy/19.jpg';
import img20 from '../components/photos_to_deploy/20.jpg';
import img21 from '../components/photos_to_deploy/21.jpg';
import img22 from '../components/photos_to_deploy/22.jpg';
import img23 from '../components/photos_to_deploy/23.jpg';
import img24 from '../components/photos_to_deploy/24.jpg';
import img25 from '../components/photos_to_deploy/25.jpg';
import img26 from '../components/photos_to_deploy/26.jpg';
import img27 from '../components/photos_to_deploy/27.jpg';
import img28 from '../components/photos_to_deploy/28.jpg';
import img29 from '../components/photos_to_deploy/29.jpg';
import img30 from '../components/photos_to_deploy/30.jpg';
import img31 from '../components/photos_to_deploy/31.jpg';
import img32 from '../components/photos_to_deploy/32.jpg';
import img33 from '../components/photos_to_deploy/33.jpg';
import img34 from '../components/photos_to_deploy/34.jpg';
import img35 from '../components/photos_to_deploy/35.jpg';
import img36 from '../components/photos_to_deploy/36.jpg';
import img37 from '../components/photos_to_deploy/37.jpg';
import img38 from '../components/photos_to_deploy/38.jpg';
import img39 from '../components/photos_to_deploy/39.jpg';
import img40 from '../components/photos_to_deploy/40.jpg';
import img41 from '../components/photos_to_deploy/41.jpg';
import img42 from '../components/photos_to_deploy/42.jpg';




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
     { src: img16, alt: 'Montaż dachówki ceramicznej na nowym domu w Szczecinie - solidne wykonanie' },
{ src: img17, alt: 'Naprawa dachu garażowego w Szczecinie - estetyczne wykończenie' },
{ src: img18, alt: 'Renowacja połaci dachowej z papy - bezpieczny i trwały efekt' },
{ src: img19, alt: 'Wymiana starego pokrycia dachowego - nowoczesny wygląd budynku' },
{ src: img20, alt: 'Kompleksowy remont dachu w budynku wielorodzinnym w Szczecinie' },
{ src: img21, alt: 'Usuwanie przecieków i izolacja dachu z gwarancją szczelności' },
{ src: img22, alt: 'Bezpieczny montaż pokrycia dachu w trudnych warunkach' },
{ src: img23, alt: 'Naprawa dachu nad tarasem w Szczecinie - odporność na wilgoć' },
{ src: img24, alt: 'Termomodernizacja dachu - energooszczędna inwestycja w dom' },
{ src: img25, alt: 'Pokrycie dachu garażu blachą trapezową - szybka realizacja' },
{ src: img26, alt: 'Profesjonalna naprawa połaci dachowej po wichurze' },
{ src: img27, alt: 'Wymiana starej dachówki na nową - efekt odświeżonego dachu' },
{ src: img28, alt: 'Zabezpieczenie dachu przed zimą - uszczelnianie i konserwacja' },
{ src: img29, alt: 'Montaż pokrycia dachowego z dachówki cementowej - trwałość i estetyka' },
{ src: img30, alt: 'Dachy skośne w Szczecinie - solidna konstrukcja i wykończenie' },
{ src: img31, alt: 'Naprawa i malowanie elementów metalowych dachu' },
{ src: img32, alt: 'Realizacja dachu z płyt warstwowych - przemysłowa estetyka' },
{ src: img33, alt: 'Instalacja nowego systemu odwodnienia dachu - funkcjonalność i styl' },
{ src: img34, alt: 'Dachy z blachy trapezowej - ekonomiczne rozwiązania dekarskie' },
{ src: img35, alt: 'Zadaszenie nad wejściem - eleganckie i praktyczne rozwiązanie' },
{ src: img36, alt: 'Konstrukcja więźby dachowej w nowym budynku - precyzja montażu' },
{ src: img37, alt: 'Docieplanie dachu nad poddaszem użytkowym w Szczecinie' },
{ src: img38, alt: 'Montaż obróbek blacharskich i wykończenie kalenicy' },
{ src: img39, alt: 'Odnawianie dachu z blachodachówki po latach użytkowania' },
{ src: img40, alt: 'Instalacja dachu z papy termozgrzewalnej - technologia na lata' },
{ src: img41, alt: 'Przebudowa dachu dwuspadowego - zmiana kąta nachylenia' },
{ src: img42, alt: 'Finalna realizacja nowego dachu nad budynkiem mieszkalnym' },

    
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