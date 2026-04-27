import React, { useRef } from 'react';

const Cantine = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("La lecture automatique a été empêchée par le navigateur");
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="cantine-section">
      <div className="cantine-container">
        {/* Texte à gauche */}
        <div className="cantine-text">
          <span className="cantine-label">Expérience immersive</span>
          <h2 className="cantine-title">Visite virtuelle</h2>
          <p className="cantine-paragraph">
            Découvrez l'excellence de notre établissement à travers une visite virtuelle complète. 
            Parcourez nos infrastructures modernes, nos espaces d'apprentissage innovants 
            et nos installations conçues pour offrir un cadre d'exception à chaque élève. 
            Une immersion unique qui vous permet de visualiser l'environnement où vos enfants 
            s'épanouiront chaque jour.
          </p>
          <a href="/visite-virtuelle" className="cantine-link">
            Explorer la visite
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Vidéo à droite - Activation au survol */}
        <div className="cantine-video">
          <div 
            className="video-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <video 
              ref={videoRef}
              controls
              loop
              poster="/cantine.jpg"
              className="cantine-video-player"
            >
              <source src="/cantine.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cantine-section {
          padding: 80px 24px;
          background: linear-gradient(135deg, #ffffff 0%, #fef9f5 100%);
          position: relative;
        }

        .cantine-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .cantine-text {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .cantine-label {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: #f97316;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .cantine-title {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: clamp(2.5rem, 5vw, 2.5rem);
          color: #0f172a;
          margin: 0;
          position: relative;
          display: inline-block;
        }

        .cantine-title::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #1e3a8a);
          border-radius: 2px;
        }

        .cantine-paragraph {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          line-height: 1.7;
          color: #475569;
          margin: 8px 0 0 0;
        }

        .cantine-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: #f97316;
          text-decoration: none;
          margin-top: 8px;
          transition: all 0.3s ease;
          width: fit-content;
        }

        .cantine-link svg {
          transition: transform 0.3s ease;
        }

        .cantine-link:hover {
          color: #1e3a8a;
          gap: 12px;
        }

        .cantine-link:hover svg {
          transform: translateX(5px);
        }

        .cantine-video {
          position: relative;
        }

        .video-wrapper {
          position: relative;
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          background: #0f172a;
          box-shadow: 0 25px 45px -12px rgba(0, 0, 0, 0.25);
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          cursor: pointer;
        }

        .video-wrapper:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 30px 55px -15px rgba(0, 0, 0, 0.35);
        }

        .cantine-video-player {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 20px;
        }

        @media (max-width: 968px) {
          .cantine-container {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .cantine-title::after {
            left: 0;
          }

          .cantine-text {
            text-align: left;
          }

          .cantine-link {
            align-self: flex-start;
          }
        }

        @media (max-width: 768px) {
          .cantine-section {
            padding: 60px 20px;
          }

          .video-wrapper {
            border-radius: 16px;
          }

          .cantine-video-player {
            border-radius: 16px;
          }
        }

        @media (max-width: 480px) {
          .cantine-section {
            padding: 48px 16px;
          }

          .cantine-label {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Cantine;