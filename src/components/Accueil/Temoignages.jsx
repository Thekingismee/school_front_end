import React, { useState, useEffect, useCallback } from 'react';

const temoignages = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
];

const Temoignages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % temoignages.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + temoignages.length) % temoignages.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="temoignages-section">
      <div className="temoignages-container">

        {/* En-tête */}
        <div className="temoignages-header">
          <span className="temoignages-label">Ils nous font confiance</span>
          <h2 className="temoignages-title">Témoignages</h2>
        </div>

        {/* Slider */}
        <div className="temoignages-slider">
          <button
            className="temoignage-arrow"
            onClick={prevSlide}
            aria-label="Témoignage précédent"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="temoignage-card-wrapper">
            {temoignages.map((_, index) => (
              <div
                key={index}
                className={`temoignage-card ${index === currentIndex ? 'active' : ''}`}
              >
                <img
                  src="/temg.png"
                  alt={`Témoignage ${index + 1}`}
                  className="temoignage-img"
                />
              </div>
            ))}
          </div>

          <button
            className="temoignage-arrow"
            onClick={nextSlide}
            aria-label="Témoignage suivant"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="temoignage-dots">
          {temoignages.map((_, index) => (
            <button
              key={index}
              className={`temoignage-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              aria-label={`Témoignage ${index + 1}`}
            />
          ))}
        </div>

      </div>

      <style jsx>{`
        .temoignages-section {
          padding: 80px 24px;
          background: #ffffff;
        }

        .temoignages-container {
          max-width: 960px;
          margin: 0 auto;
        }

        /* Header */
        .temoignages-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .temoignages-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: #f97316;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .temoignages-title {
          font-family: Georgia, serif;
          font-size: clamp(2rem, 4vw, 2.5rem);
          color: #0f172a;
          margin: 10px 0 0;
          font-weight: 700;
        }

        /* Slider layout */
        .temoignages-slider {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        /* Card wrapper */
        .temoignage-card-wrapper {
          position: relative;
          flex: 1;
          overflow: hidden;
          border-radius: 4px;
        }

        /* Each card */
        .temoignage-card {
          display: none;
          width: 100%;
        }

        .temoignage-card.active {
          display: block;
          animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(12px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* Image */
        .temoignage-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        /* Arrows */
        .temoignage-arrow {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .temoignage-arrow:hover {
          background: #f97316;
          border-color: #f97316;
          color: #ffffff;
        }

        /* Dots */
        .temoignage-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 24px;
        }

        .temoignage-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #e2e8f0;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .temoignage-dot.active {
          background: #f97316;
          transform: scale(1.3);
        }

        /* Responsive */
        @media (max-width: 640px) {
          .temoignages-section {
            padding: 56px 16px;
          }

          .temoignage-arrow {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </section>
  );
};

export default Temoignages;


