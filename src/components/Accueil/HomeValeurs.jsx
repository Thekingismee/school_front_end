import React, { useState } from 'react';

const HomeValeurs = () => {

  const services = [
    {
      id: 1,
      title: 'Apprentissage et plaisir',
      image: '/serv.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
      position: { top: '10%', left: '15%' }
    },
    {
      id: 2,
      title: 'Lieu convivial',
      image: '/serv2.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&q=80',
      position: { top: '10%', right: '15%' }
    },
    {
      id: 3,
      title: 'Sécurité des enfants',
      image: '/serv3.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80',
      position: { bottom: '0%', left: '50%', transform: 'translateX(-50%)' }
    }
  ];

  return (
    <section className="homeservices-section">
      <div className="homeservices-container">
        {/* Titre principal */}
        <div className="homeservices-header">
          <span className="homeservices-label">Ce que nous offrons</span>
          <h2 className="homeservices-title">Nos Valeurs</h2>
        </div>

        {/* Constellation de services */}
        <div className="homeservices-constellation">
          {/* Lignes de connexion SVG */}
          <svg className="homeservices-lines" viewBox="0 0 800 600" preserveAspectRatio="none">
            <path 
              className="connection-line"
              d="M 200 150 Q 400 100 600 150"
              stroke="#168ff94c"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 4"
            />
            <path 
              className="connection-line"
              d="M 200 150 Q 300 350 400 450"
              stroke="#168ff94c"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 4"
            />
            <path 
              className="connection-line"
              d="M 600 150 Q 500 350 400 450"
              stroke="#168ff94c"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 4"
            />
          </svg>

          {/* Cercles décoratifs */}
          <div className="homeservices-orbit orbit-1" />
          <div className="homeservices-orbit orbit-2" />
          <div className="homeservices-orbit orbit-3" />

          {/* Services */}
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`homeservices-node active`}
              style={service.position}
            >
              {/* Cercle principal */}
              <div className="homeservices-circle">
                <div className="homeservices-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    onError={(e) => {
                      e.target.src = service.fallbackImage;
                    }}
                  />
                </div>
              </div>

              {/* Titre flottant */}
              <div className="homeservices-floating-title">
                <h3 className="homeservices-name">{service.title}</h3>
              </div>
            </div>
          ))}

          {/* Centre décoratif */}
          {/* <div className="homeservices-center">
            <div className="center-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div> */}

          <img src="/Logo Atome-AR-FR+Slogan-Final.png" alt="" srcset="" className="homeservices-center" style={{width:"140px", height:"140px"}}/>


        </div>
      </div>

      <style jsx>{`

        /* Texture subtile */
        .homeservices-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(249, 115, 22, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(30, 58, 138, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .homeservices-container {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* En-tête */
        .homeservices-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .homeservices-label {
          display: block;
          font-family: 'Arial', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 12px;
        }

        .homeservices-title {
          font-family: 'Georgia', serif;
          font-size: clamp(2.5rem, 5vw, 2.5rem);
          color: #0f172a;
          margin: 0;
          position: relative;
          display: inline-block;
        }

        .homeservices-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #1e3a8a);
          border-radius: 2px;
        }

        /* Constellation */
        .homeservices-constellation {
          position: relative;
          height: 550px;
          width: 100%;
        }

        /* Lignes de connexion */
        .homeservices-lines {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .connection-line {
          animation: dash 20s linear infinite;
        }

        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }

        /* Orbites décoratives */
        .homeservices-orbit {
          position: absolute;
          border: 1px dashed #168ff94c;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .orbit-1 {
          width: 400px;
          height: 400px;
          animation: rotate 30s linear infinite;
        }

        .orbit-2 {
          width: 500px;
          height: 500px;
          animation: rotate 40s linear infinite reverse;
        }

        .orbit-3 {
          width: 600px;
          height: 600px;
          animation: rotate 50s linear infinite;
        }

        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        /* Nœuds de service */
        .homeservices-node {
          position: absolute;
          z-index: 10;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

     

        /* Cercle principal */
        .homeservices-circle {
          position: relative;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          overflow: visible;
        }

        .homeservices-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 
            0 10px 40px rgba(0, 0, 0, 0.15),
            0 0 0 4px rgba(255, 255, 255, 0.8),
            0 0 0 8px #168ff94c;
          transition: all 0.4s ease;
        }


        .homeservices-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }




        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        /* Titre flottant */
        .homeservices-floating-title {
          position: absolute;
          bottom: -50px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          white-space: nowrap;
          opacity: 0.9;
          transition: all 0.4s ease;
        }

        .homeservices-name {
        font-family: 'Arial', sans-serif;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
          color: #0f172a;
          margin: 0;
          position: relative;
        }

        .homeservices-name::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 30px;
          height: 2px;
          background: #168ff9ff;
          transition: transform 0.3s ease;
        }

    

  


        /* Centre décoratif */
        .homeservices-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 5;
        }

        // .center-icon {
        //   width: 60px;
        //   height: 60px;
        //   background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
        //   border-radius: 50%;
        //   display: flex;
        //   align-items: center;
        //   justify-content: center;
        //   color: white;
        //   box-shadow: 0 8px 30px rgba(249, 115, 22, 0.4);
        //   animation: breathe 3s ease-in-out infinite;
        // }

        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .homeservices-constellation {
            height: 800px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 80px;
            padding-top: 40px;
          }

          .homeservices-node {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            right: auto !important;
            bottom: auto !important;
            transform: none !important;
          }

          .homeservices-lines,
          .homeservices-orbit,
          .homeservices-center {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeValeurs;