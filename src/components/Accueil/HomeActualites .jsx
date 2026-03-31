import React, { useState } from 'react';

const HomeActualites = () => {

  const actualites = [
    {
      id: 1,
      image: '/actu1.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
      date: '15 Mars 2024',
      categorie: 'Sport',
      titre: 'Concours Sportifs Interclasses 2026',
      description: ' Participez aux grands concours sportifs organisés par notre école. Venez encourager nos équipes, partager des moments de dépassement de soi et célébrer l’esprit d’équipe. Au programme : épreuves athlétiques, jeux collectifs et remise des prix en présence de tous les participants.'
    },
    {
      id: 2,
      image: '/marchv.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
      date: '10 Mars 2024',
      categorie: 'Commémoration',
      titre: 'Célébration de la Marche Verte : l’engagement de nos élèves',
      description: 'À l’occasion de l’anniversaire de la Marche Verte, nos élèves ont organisé une journée de commémoration mêlant activités citoyennes et expressions artistiques. Au programme : expositions sur l’histoire nationale, chants patriotiques et témoignages autour des valeurs d’unité et de fidélité. Une belle occasion de transmettre la mémoire collective aux jeunes générations.'
    },
    {
  id: 3,
  image: '/actu3.jpg',
  fallbackImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80',
  date: '05 Septembre 2026',
  categorie: 'Vie Scolaire',
  titre: 'Rentrée 2026: une nouvelle année commence !',
  description: 'Sourires, cartables neufs et retrouvailles chaleureuses ont marqué le coup d\'envoi de cette rentrée 2026 au Groupe Scolaire L\'Atome. Élèves, familles et équipe éducative se sont retrouvés dans une ambiance festive et bienveillante pour accueillir cette nouvelle année scolaire. Un moment de joie et d\'enthousiasme qui donne le ton d\'une année placée sous le signe de la réussite et du partage.'
}
  ];

  // Fonction pour tronquer le texte
  const tronquerTexte = (texte, maxLength = 120) => {
    if (texte.length <= maxLength) return texte;
    return texte.substring(0, maxLength).trim() + '...';
  };

  return (
    <section className="home-actu-section">
      <div className="home-actu-container">
        {/* En-tête de section */}
        <div className="home-actu-header">
          <span className="home-actu-surtitle">Restez Informés</span>
          <h2 className="home-actu-main-title">Nos Actualités</h2>
          <div className="home-actu-title-bar" />
          <p className="home-actu-intro">
            Découvrez les dernières nouvelles de notre école et suivez la vie de notre communauté éducative.
          </p>
        </div>

        {/* Grille des actualités */}
        <div className="home-actu-grid">
          {actualites.map((actu, index) => (
            <article 
              key={actu.id}
              className="home-actu-card"
            >
              {/* Conteneur image */}
              <div className="home-actu-image-wrapper">
                <div className="home-actu-image-box">
                  <img
                    src={actu.image}
                    alt={actu.titre}
                    className="home-actu-img"
                    onError={(e) => {
                      e.target.src = actu.fallbackImage;
                    }}
                  />
                  <div className="home-actu-image-overlay" />
                </div>
                
                {/* Badge catégorie */}
                <span className="home-actu-categorie">
                  {actu.categorie}
                </span>
              </div>

              {/* Contenu textuel */}
              <div className="home-actu-content">
                {/* Date */}
                <div className="home-actu-date-box">
                  <svg className="home-actu-calendar-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span className="home-actu-date-text">{actu.date}</span>
                </div>
                <h3 className="home-actu-titre">
                  <a href={`/actualites/${actu.id}`} className="home-actu-titre-link">
                    {actu.titre}
                  </a>
                </h3>
                
                <p className="home-actu-description">
                  {tronquerTexte(actu.description, 140)}
                </p>

                <a 
                  href={`/actualites/${actu.id}`} 
                  className="home-actu-lire-suite"
                >
                  <span className="home-actu-lire-text">Lire la suite</span>
                  <svg 
                    className={`home-actu-arrow`}
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .home-actu-section {
          padding: 80px 24px;
          background-color: #f8fafc;
          position: relative;
          font-family: 'Georgia', 'Times New Roman', serif;
        }

        .home-actu-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
        }

        .home-actu-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* En-tête */
        .home-actu-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .home-actu-surtitle {
          display: inline-block;
          font-family: 'Arial', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 12px;
          padding: 6px 16px;
        }

        .home-actu-main-title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 16px 0;
        }

        .home-actu-title-bar {
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #f97316, #1e3a8a);
          margin: 0 auto 20px;
          border-radius: 2px;
        }

        .home-actu-intro {
          font-family: 'Arial', sans-serif;
          font-size: 1.05rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Grille */
        .home-actu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 50px;
        }

        /* Carte d'actualité */
        .home-actu-card {
          position: relative;
          background: #ffffff;
          border-radius: 5px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
        }


        /* Image */
        .home-actu-image-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .home-actu-image-box {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .home-actu-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .home-actu-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            transparent 60%,
            rgba(15, 23, 42, 0.4) 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        /* Catégorie badge */
        .home-actu-categorie {
          position: absolute;
          top: 16px;
          right: 16px;
          color: #f97316;
          font-family: 'Arial', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          z-index: 2;
        }

        /* Date */
        .home-actu-date-box {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          gap: 6px;
          font-family: 'Arial', sans-serif;
          font-size: 0.9rem;
          color: #1e3a8a;
          z-index: 2;
          font-weight: 600;
        }

        .home-actu-calendar-icon {
          width: 16px;
          height: 16px;
          stroke-width: 2px;
          color: #1e3a8a;
        }

        /* Contenu */
        .home-actu-content {
          padding: 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .home-actu-titre {
          margin: 0 0 12px 0;
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.3;
        }

        .home-actu-titre-link {
          color: #0f172a;
          text-decoration: none;
          transition: color 0.3s ease;
        }


        .home-actu-description {
          font-family: 'Arial', sans-serif;
          font-size: 0.95rem;
          line-height: 1.7;
          color: #64748b;
          margin: 0 0 20px 0;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Lire la suite */
        .home-actu-lire-suite {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Arial', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: #1e3a8a;
          text-decoration: none;
          margin-top: auto;
          transition: all 0.3s ease;
        }

        .home-actu-lire-text {
          position: relative;
        }

        .home-actu-lire-text::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #1e3a8a;
          transition: width 0.3s ease;
        }


        .home-actu-arrow {
          transition: transform 0.3s ease;
        }

        

        /* Footer */
        .home-actu-footer {
          text-align: center;
        }

        .home-actu-btn-tout {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: transparent;
          color: #1e3a8a;
          font-family: 'Arial', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          border: 2px solid #1e3a8a;
          border-radius: 50px;
          transition: all 0.3s ease;
        }

     
        /* Responsive */
        @media (max-width: 1024px) {
          .home-actu-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .home-actu-section {
            padding: 60px 20px;
          }

          .home-actu-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .home-actu-image-wrapper {
            height: 200px;
          }

          .home-actu-content {
            padding: 20px;
          }

          .home-actu-titre {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeActualites;