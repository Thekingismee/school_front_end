import React, { useState } from 'react';

const HomeGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      id: 1,
      src: '/serv.jpg',
      fallback: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80'
    },
    {
      id: 2,
      src: '/primaire.jpg',
      fallback: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80'
    },
    {
      id: 3,
      src: '/maternelle.jpg',
      fallback: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80'
    },
    {
      id: 4,
      src: '/lycee.jpg',
      fallback: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80'
    },
    {
      id: 5,
      src: '/college.jpg',
      fallback: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80'
    },
    {
      id: 6,
      src: '/serv2.jpg',
      fallback: 'https://images.unsplash.com/photo-1427504745634-b521b4249ef7?w=600&q=80'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 2 + images.length) % images.length);
  };

  // Obtenir les 2 images actuelles
  const getVisibleImages = () => {
    return [
      images[currentIndex],
      images[(currentIndex + 1) % images.length]
    ];
  };

  return (
    <section className="homegallery-section">
      <div className="homegallery-container">
        {/* Titre */}
        <h2 className="homegallery-title">Galerie</h2>

        {/* Zone des images */}
        <div className="homegallery-viewport">
          {/* Bouton gauche */}
          <button 
            className="homegallery-btn homegallery-prev"
            onClick={prevSlide}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Images */}
          <div className="homegallery-track">
            {getVisibleImages().map((image, index) => (
              <div 
                key={`${image.id}-${currentIndex}`}
                className="homegallery-image"
                style={{
                  animation: index === 0 ? 'slideFromLeft 0.4s ease' : 'slideFromRight 0.4s ease'
                }}
              >
                <img
                  src={image.src}
                  alt={`Photo ${image.id}`}
                  onError={(e) => {
                    e.target.src = image.fallback;
                  }}
                />
              </div>
            ))}
          </div>

          {/* Bouton droite */}
          <button 
            className="homegallery-btn homegallery-next"
            onClick={nextSlide}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .homegallery-section {
          padding: 60px 24px;
          margin-top:100px;
          background-color: #FFB347;
            // padding-block: 50px;

        }

        .homegallery-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .homegallery-title {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: clamp(2.5rem, 5vw, 2.5rem);
          color: #0f172a;
          text-align: center;
          margin: 0 0 60px 0;
          position: relative;
          display: inline-block;
          width: 100%;
        }
          .homegallery-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #1e3a8a);
          border-radius: 2px;
        }

        .homegallery-viewport {
          position: relative;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .homegallery-track {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          overflow: hidden;
        }

        .homegallery-image {
          aspect-ratio: 4/3;
          overflow: hidden;
          border-radius: 2px;
        }

        .homegallery-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Animations */
        @keyframes slideFromLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        /* Boutons */
        .homegallery-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #ffffffff;
          color: #000;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.2s ease;
        }

        

        /* Responsive */
        @media (max-width: 640px) {
          .homegallery-track {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeGallery;