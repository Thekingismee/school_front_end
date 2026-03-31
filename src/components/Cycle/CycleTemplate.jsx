import React from 'react';
import Temoignages from '../Accueil/Temoignages';
import HomeGallery from '../Accueil/HomeGallery';

const CycleTemplate = ({
  // Section 1 : Hero (texte droite, image gauche)
  titre1,
  text1,
  image1,
  
  // Section 2 : Contenu (titre + texte + galerie 4 images)
  titre2,
  text2,
  image2,
  image3,
  image4,
  image5,
  textimage3,
  textimage4,
  textimage5
}) => {
  return (
    <div className="cycle-template">
      {/* Section 1 : Hero - Image gauche, Texte droite */}
      <section className="cycle-hero">
        <div className="cycle-hero-container">
          <div className="cycle-hero-image-wrapper">
            <div className="cycle-hero-image">
              <img src={image1} alt={titre1} />
            </div>
            {/* <div className="cycle-hero-badge">
              <span>Cycle {titre1}</span>
            </div> */}
          </div>
          <div className="cycle-hero-content">
            <span className="cycle-hero-label">Découvrez notre</span>
            <h1 className="cycle-hero-title">{titre1}</h1>
            <div className="cycle-hero-line" />
            <p className="cycle-hero-text">{text1}</p>
            <a href="/aboutUs" className="cycle-hero-btn">
              À propos de nous
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Section 2 : Contenu + Galerie */}
      <section className="cycle-content">
        <div className="cycle-content-container">
          {/* En-tête */}
          <div className="cycle-content-header">
            <span className="cycle-content-label">Notre approche</span>
            <h2 className="cycle-content-title">{titre2}</h2>
            <div className="cycle-content-line" />
            <p className="cycle-content-text">{text2}</p>
          </div>

          {/* Galerie 4 images */}
          <div className="cycle-gallery">
            {/* Image 2 (grande, sans texte sous) */}
            <div className="cycle-gallery-item cycle-gallery-item--large">
              <div className="cycle-gallery-image">
                <img src={image2} alt="Image principale" />
                <div className="cycle-gallery-overlay" />
              </div>
            </div>

            {/* 3 images avec légendes */}
            <div className="cycle-gallery-item">
              <div className="cycle-gallery-image">
                <img src={image3} alt={textimage3} />
              </div>
              <div className="cycle-gallery-caption">
                <span className="caption-number">01</span>
                <span className="caption-text">{textimage3}</span>
              </div>
            </div>

            <div className="cycle-gallery-item">
              <div className="cycle-gallery-image">
                <img src={image4} alt={textimage4} />
              </div>
              <div className="cycle-gallery-caption">
                <span className="caption-number">02</span>
                <span className="caption-text">{textimage4}</span>
              </div>
            </div>

            <div className="cycle-gallery-item">
              <div className="cycle-gallery-image">
                <img src={image5} alt={textimage5} />
              </div>
              <div className="cycle-gallery-caption">
                <span className="caption-number">03</span>
                <span className="caption-text">{textimage5}</span>
              </div>
            </div>
          </div>
        </div>
      </section>


        <HomeGallery />
        <Temoignages />
        
      <style jsx>{`
        .cycle-template {
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }

        /* Section Hero */
        .cycle-hero {
          padding: 100px 24px;
          position: relative;
          overflow: hidden;
        }

        .cycle-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255, 149, 44, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .cycle-hero-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .cycle-hero-image-wrapper {
          position: relative;
        }

        .cycle-hero-image {
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(255, 255, 255, 0.5) inset;
          position: relative;
        }

        .cycle-hero-image::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 30%;
          background: linear-gradient(to top, rgba(0,0,0,0.2), transparent);
          pointer-events: none;
        }

        .cycle-hero-image img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
        }

        .cycle-hero-badge {
          position: absolute;
          bottom: -20px;
          right: 30px;
          background: linear-gradient(135deg, #ff952c 0%, #ff7b1c 100%);
          color: white;
          padding: 16px 28px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          box-shadow: 0 10px 30px rgba(255, 149, 44, 0.3);
        }

        .cycle-hero-content {
          padding: 20px 0;
        }

        .cycle-hero-label {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #ff952c;
          margin-bottom: 20px;
        }

        .cycle-hero-title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 3.2rem;
          color: #1a1a2e;
          margin: 0 0 20px 0;
          line-height: 1.1;
          font-weight: 700;
        }

        .cycle-hero-line {
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #f97316, #1e3a8a);
          border-radius: 2px;
          margin-bottom: 24px;
        }

        .cycle-hero-text {
          font-size: 1.15rem;
          line-height: 1.9;
          color: #4a5568;
          margin: 0 0 32px 0;
        }

        .cycle-hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          background: linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%);
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(26, 26, 46, 0.2);
        }

        .cycle-hero-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(26, 26, 46, 0.3);
        }

        /* Section Content */
        .cycle-content {
          padding: 100px 24px;
          background: #ffffff;
          position: relative;
        }

        .cycle-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
        }

        .cycle-content-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .cycle-content-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 80px;
        }

        .cycle-content-label {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #ff952c;
          margin-bottom: 16px;
          padding: 8px 16px;
          border-radius: 20px;
        }

        .cycle-content-title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 2.4rem;
          color: #1a1a2e;
          margin: 0 0 16px 0;
          font-weight: 700;
        }

        .cycle-content-line {
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #1e3a8a);
          border-radius: 2px;
          margin: 0 auto 24px;
        }

        .cycle-content-text {
          font-size: 1.1rem;
          line-height: 1.9;
          color: #4a5568;
          margin: 0;
        }

        /* Galerie */
        .cycle-gallery {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 24px;
        }

        .cycle-gallery-item {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cycle-gallery-item--large {
          grid-row: span 2;
          grid-column: span 2;
        }

        .cycle-gallery-image {
          border-radius: 4px;
          overflow: hidden;
          flex: 1;
          position: relative;
          min-height: 200px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }

        .cycle-gallery-item--large .cycle-gallery-image {
          min-height: 100%;
        }

        .cycle-gallery-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .cycle-gallery-image:hover img {
          transform: scale(1.05);
        }

        .cycle-gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 149, 44, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .cycle-gallery-caption {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 8px;
        }

        .caption-number {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff952c 0%, #ff7b1c 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .caption-text {
          font-size: 1rem;
          color: #1a1a2e;
          font-weight: 500;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .cycle-hero {
            padding: 60px 24px;
          }

          .cycle-hero-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .cycle-hero-image {
            order: -1;
          }

          .cycle-hero-image img {
            height: 350px;
          }

          .cycle-hero-badge {
            bottom: -15px;
            right: 20px;
            padding: 12px 20px;
            font-size: 0.85rem;
          }

          .cycle-hero-title {
            font-size: 2.4rem;
          }

          .cycle-gallery {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
          }

          .cycle-gallery-item--large {
            grid-row: span 1;
            grid-column: span 2;
          }

          .cycle-gallery-item--large .cycle-gallery-image {
            min-height: 300px;
          }
        }

        @media (max-width: 640px) {
          .cycle-hero-title {
            font-size: 2rem;
          }

          .cycle-content-title {
            font-size: 1.8rem;
          }

          .cycle-gallery {
            grid-template-columns: 1fr;
          }

          .cycle-gallery-item--large {
            grid-column: span 1;
          }

          .cycle-gallery-item--large .cycle-gallery-image {
            min-height: 250px;
          }

          .cycle-hero-btn {
            width: 100%;
            justify-content: center;
          }

          .cycle-hero{
            padding: 100px 24px;
            position: relative;
            
            bottom: 0;
            left: 0;
            right: 0;
            height: 30%;
            background: linear-gradient(to top, rgbaa(0,0,0,0.2), transparent);
            pointer-events: none;
            width: 100%;
            height: 500px;
            object-fit: cover;
            display: block;
            
            }
            .cycle-hero{
            bottom: 0;
            left: 0;
            right: 0;
            height: 30%;
            background: linear-gradient(to top, rgbaa(0,0,0,0.2), transparent);
            pointer-events: none;
            width: 100%;
            height: 500px;
            object-fit: cover;
            display: block;
            }
        }
      `}</style>
    </div>
  );
};

export default CycleTemplate;