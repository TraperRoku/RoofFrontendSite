import React, { useEffect, useState } from 'react';
import './RecentProjects.css';

import projectOne from './photos_to_deploy/miroslawiec/01-grunt.jpg';
import projectTwo from './photos_to_deploy/miroslawiec/02-izolacja-paro.jpg';
import projectThree from './photos_to_deploy/miroslawiec/03-IMG-4577.jpg';
import projectFour from './photos_to_deploy/miroslawiec/04-IMG-4579.jpg';
import projectFive from './photos_to_deploy/miroslawiec/05-IMG-4608.jpg';
import projectSix from './photos_to_deploy/miroslawiec/06-IMG-4669.jpg';
import projectSeven from './photos_to_deploy/miroslawiec/07-IMG-4717.jpg';
import projectEight from './photos_to_deploy/miroslawiec/08-IMG-4718.jpg';

const projects = [
  {
    date: '2026',
    title: 'Kompleksowe krycie dachów hangarów na lotnisku w Mirosławcu',
    intro:
      'Realizacja dla generalnego wykonawcy Atlas Ward Polska Sp. z o.o. obejmowała wykonanie obudowy dachów trzech wielkopowierzchniowych hangarów: jednego typu 1 oraz dwóch typu 3.',
    scope: [
      'Szczelna paraizolacja z papy wentylacyjnej',
      'Dwuwarstwowa izolacja z wełny mineralnej o łącznej grubości 21 cm',
      'Systemowe płyty spadkowe i kontrspadki dopasowane do projektu',
      'Dwie warstwy papy bitumicznej: podkładowa i wierzchnia',
      'Obróbka wpustów, przelewów, słupków, punktów asekuracyjnych i przejść instalacyjnych',
    ],
    images: [
      { src: projectOne, alt: 'Przygotowanie podłoża pod dach hangaru w Mirosławcu' },
      { src: projectTwo, alt: 'Wykonanie paroizolacji na dachu hangaru' },
      { src: projectThree, alt: 'Układanie izolacji termicznej na dachu hangaru' },
      { src: projectFour, alt: 'Prace przy warstwach izolacji dachu hangaru' },
      { src: projectFive, alt: 'Montaż systemowych płyt spadkowych na dachu hangaru' },
      { src: projectSix, alt: 'Przygotowanie połaci dachu pod papę bitumiczną' },
      { src: projectSeven, alt: 'Zgrzewanie papy na dachu hangaru' },
      { src: projectEight, alt: 'Gotowe pokrycie dachu hangaru w Mirosławcu' },
    ],
  },
];

function RecentProjects() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedImage(null);
    };

    document.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <section className="recent-projects" aria-labelledby="recent-projects-title">
      <div className="recent-projects__inner">
        <div className="recent-projects__heading">
          <span className="recent-projects__eyebrow">Ostatnie duże projekty</span>
          <h2 id="recent-projects-title">Realizacje, które wymagają doświadczenia</h2>
          <p>Pokazujemy zakres prac, które wykonujemy dla generalnych wykonawców i inwestorów B2B.</p>
        </div>

        {projects.map((project) => (
          <article className="recent-project" key={project.title}>
            <div className="recent-project__topline">
              <span className="recent-project__date">{project.date}</span>
              <span className="recent-project__partner">Generalny wykonawca: Atlas Ward Polska Sp. z o.o.</span>
            </div>
            <div className="recent-project__content">
              <div className="recent-project__description">
                <h3>{project.title}</h3>
                <p>{project.intro}</p>
                <h4>Zakres prac</h4>
                <ul>
                  {project.scope.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div className="recent-project__gallery" aria-label={`Zdjęcia: ${project.title}`}>
                {project.images.map((image) => (
                  <figure key={image.src}>
                    <button
                      type="button"
                      className="recent-project__image-button"
                      onClick={() => setSelectedImage(image)}
                      aria-label={`Powiększ zdjęcie: ${image.alt}`}
                    >
                      <img src={image.src} alt={image.alt} loading="lazy" />
                    </button>
                  </figure>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedImage && (
        <div
          className="recent-project__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Powiększone zdjęcie realizacji"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="recent-project__lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Zamknij powiększone zdjęcie"
          >
            ×
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default RecentProjects;