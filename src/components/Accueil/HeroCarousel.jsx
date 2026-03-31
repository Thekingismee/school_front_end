import React, { useState, useEffect, useCallback } from 'react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Données des slides
  const slides = [
    {
      id: 2,
      image: '/1maternelle.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80',
      titleBgColor: '#1e3a8a', // Bleu marine
      title: 'Inscriptions Ouvertes',
      paragraph: 'Apprentissage Amusant',
      buttonText: 'Inscrivez votre enfant dès maintenant',
      buttonLink: '/inscription'
    },
    {
      id: 1,
      image: '/1lycee.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80',
      titleBgColor: '#f24d42ff', // Orange
      title: 'Programes d\'etudes conforme',
      paragraph: 'PLAISIR DE SAVOIR',
      buttonText: 'Inscrivez votre enfant dès maintenant',
      buttonLink: '/inscription'
    },
    
  ];

  // Navigation vers slide suivant
  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating, slides.length]);

  // Navigation vers slide précédent
  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating, slides.length]);

  // Navigation vers slide spécifique
  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  // Défilement automatique
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="hero-section">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
            }}
          >
            {/* Image de fond */}
            <div className="slide-background">
              <img
                src={slide.image}
                alt={slide.title}
                onError={(e) => {
                  e.target.src = slide.fallbackImage;
                }}
              />
              <div className="overlay" />
            </div>

            {/* Contenu textuel à gauche */}
            <div className="slide-content">
              <div className="content-wrapper">
                {/* Titre avec animation slide from left */}
                <div 
                  className="title-container"
                  style={{ '--title-bg': slide.titleBgColor }}
                >
                  <h1 className={`title ${index === currentSlide ? 'animate-slide-right' : ''}`}>
                    {slide.title}
                  </h1>
                </div>

                {/* Paragraphe avec animation fade in */}
                <p className={`paragraph ${index === currentSlide ? 'animate-fade-in' : ''}`}>
                  {slide.paragraph}
                </p>

                {/* Bouton avec animation slide from bottom */}
                <div className="button-wrapper">
                  <a
                    href={slide.buttonLink}
                    className={`cta-button ${index === currentSlide ? 'animate-slide-up' : ''}`}
                    style={{ 
                      '--button-hover-bg': slide.titleBgColor 
                    }}
                  >
                    {slide.buttonText}
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      className="arrow-icon"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Flèches de navigation */}
        <button 
          className="nav-arrow prev" 
          onClick={prevSlide}
          aria-label="Slide précédent"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button 
          className="nav-arrow next" 
          onClick={nextSlide}
          aria-label="Slide suivant"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 600px;
          max-height: 700px;
          overflow: hidden;
          background-color: #0f172a;
          font-family: 'Georgia', 'Times New Roman', serif;
        }

        // .carousel-container {
        //   position: relative;
        //   width: 100%;
        //   height: 80%;
        // }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          visibility: hidden;
        }

        .slide.active {
          opacity: 1;
          visibility: visible;
        }

        /* Background Image */
        .slide-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .slide-background img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: scale(1.1);
          transition: transform 6s ease;
        }

        .slide.active .slide-background img {
          transform: scale(1);
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        //   background: linear-gradient(
        //     90deg,
        //     rgba(15, 23, 42, 0.95) 0%,
        //     rgba(15, 23, 42, 0.8) 40%,
        //     rgba(15, 23, 42, 0.4) 100%
        //   );
          z-index: 2;
        }

        /* Content Layout */
        .slide-content {
          position: relative;
          z-index: 3;
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 8%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .content-wrapper {
          max-width: 600px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* Title avec background color */
        .title-container {
          display: inline-block;
          overflow: hidden;
        }

        .title {
          display: inline-block;
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin: 0;
          padding: 10px 32px;
          background-color: var(--title-bg);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          transform: translateX(-100%);
          opacity: 0;
          font-family: 'Poppins', sans-serif;
        }

        /* Animation Slide Right pour le titre */
        .animate-slide-right {
          animation: slideRight 0.8s cubic-bezier(0.2, 1, 1, 1) forwards;
          animation-delay: 0.6s;
        }

        @keyframes slideRight {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        /* Paragraphe */
        .paragraph {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          color: rgba(255, 255, 255, 1);
          line-height: 1.8;
          font-family: 'Arial', sans-serif;
          margin: 0;
          transform: translateY(20px);
          font-weight: 800;
          font-family: 'Poppins', sans-serif;
          opacity: 0;
        }

        /* Animation Fade In pour le paragraphe */
        .animate-fade-in {
          animation: fadeIn 0.8s ease forwards;
          animation-delay: 0.6s;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Bouton */
        .button-wrapper {
          margin-top: 6px;
          overflow: hidden;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 36px;
          background-color: var(--button-bg);
          color: #ffffff;
          border: 1px solid #ffffff9f;
          font-family: 'Arial', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          transform: translateY(100%);
          opacity: 0;
        }

        /* Animation Slide Up pour le bouton */
        .animate-slide-up {
          animation: slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 1s;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .cta-button:hover {
          background-color: var(--button-hover-bg);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
        }

        .cta-button:hover .arrow-icon {
          transform: translateX(4px);
        }

        .arrow-icon {
          transition: transform 0.3s ease;
        }

        /* Navigation Arrows */
        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-arrow:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-50%) scale(1.1);
        }

        .nav-arrow.prev {
          left: 30px;
        }

        .nav-arrow.next {
          right: 30px;
        }

       

       

       

        @keyframes progress {
          from { width: 0; }
          to { width: 100%; }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-section {
            min-height: 600px;
          }

          .slide-content {
            padding: 0 5%;
            align-items: flex-end;
            padding-bottom: 120px;
          }

          .title {
            padding: 12px 20px;
            font-size: 2rem;
          }

          .cta-button {
            padding: 14px 28px;
            font-size: 0.9rem;
          }

          .nav-arrow {
            width: 45px;
            height: 45px;
          }

          .nav-arrow.prev {
            left: 15px;
          }

          .nav-arrow.next {
            right: 15px;
          }

        
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;