// import React, { useState, useEffect, useCallback } from 'react';

// const Temoignages = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const temoignages = [
//     {
//       id: 1,
//       nom: 'Sarah Benali',
//       type: 'Parent',
//       avatar: '/tem.png',
//       fallbackAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
//       texte: 'Nous sommes extrêmement satisfaits de l\'évolution de notre fille depuis son arrivée à l\'école. Les enseignants sont à l\'écoute et l\'accompagnement personnalisé fait toute la différence. Notre fille a gagné en confiance et en autonomie.',
//       note: 5
//     },
//     {
//       id: 2,
//       nom: 'Karim Moussaoui',
//       type: 'Parent',
//       avatar: '/tem.png',
//       fallbackAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
//       texte: 'Le projet pédagogique de cette école est remarquable. Mon fils progresse à son rythme tout en développant sa curiosité. La communication avec l\'équipe est excellente et nous nous sentons vraiment impliqués dans la scolarité de notre enfant.',
//       note: 5
//     },
//     {
//       id: 3,
//       nom: 'Léa Martin',
//       type: 'Élève',
//       avatar: '/tem.png',
//       fallbackAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
//       texte: 'J\'adore venir à l\'école ! Les cours sont interactifs et les professeurs expliquent très bien. J\'ai fait beaucoup d\'amis et j\'ai découvert ma passion pour les sciences grâce aux ateliers pratiques. Je me sens bien préparée pour le lycée.',
//       note: 5
//     },
//     {
//       id: 4,
//       nom: 'Ahmed Tazi',
//       type: 'Parent',
//       avatar: '/tem.png',
//       fallbackAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
//       texte: 'Excellente école avec des valeurs fondamentales solides. Le respect, l\'excellence et le bien-être de l\'enfant sont au cœur de leur démarche. Nous avons vu une nette amélioration dans les résultats scolaires de notre fils, mais surtout dans son attitude positive.',
//       note: 5
//     },
//     {
//       id: 5,
//       nom: 'Emma Bernard',
//       type: 'Élève',
//       avatar: '/tem.png',
//       fallbackAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
//       texte: 'Les activités extrascolaires sont géniales ! Je fais partie du club de théâtre et cela m\'a beaucoup aidée à surmonter ma timidité. Les professeurs sont compréhensifs et nous encouragent toujours à donner le meilleur de nous-mêmes.',
//       note: 5
//     }
//   ];

//   const nextSlide = useCallback(() => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentIndex((prev) => (prev + 1) % temoignages.length);
//     setTimeout(() => setIsAnimating(false), 500);
//   }, [isAnimating, temoignages.length]);

//   const prevSlide = useCallback(() => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentIndex((prev) => (prev - 1 + temoignages.length) % temoignages.length);
//     setTimeout(() => setIsAnimating(false), 500);
//   }, [isAnimating, temoignages.length]);

//   // Auto-défilement
//   useEffect(() => {
//     const timer = setInterval(nextSlide, 6000);
//     return () => clearInterval(timer);
//   }, [nextSlide]);

//   // Générer les étoiles
//   const renderStars = (note) => {
//     return Array.from({ length: 5 }, (_, i) => (
//       <svg
//         key={i}
//         className={`temoignage-star ${i < note ? 'filled' : ''}`}
//         width="20"
//         height="20"
//         viewBox="0 0 24 24"
//         fill={i < note ? 'currentColor' : 'none'}
//         stroke="currentColor"
//         strokeWidth="2"
//       >
//         <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//       </svg>
//     ));
//   };

//   return (
//     <section className="temoignages-section">
//       <div className="temoignages-container">
//         {/* En-tête */}
//         <div className="temoignages-header">
//           <span className="temoignages-label">Ils nous font confiance</span>
//           <h2 className="temoignages-title">Témoignages</h2>
//         </div>

//         {/* Slider */}
//         <div className="temoignages-slider">
//           {/* Flèche gauche */}
//           <button 
//             className="temoignage-arrow temoignage-prev"
//             onClick={prevSlide}
//             aria-label="Témoignage précédent"
//           >
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M15 18l-6-6 6-6" />
//             </svg>
//           </button>

//           {/* Carte active */}
//           <div className="temoignage-card-wrapper">
//             {temoignages.map((temoignage, index) => (
//               <div
//                 key={temoignage.id}
//                 className={`temoignage-card ${index === currentIndex ? 'active' : ''}`}
//                 style={{
//                   transform: `translateX(${(index - currentIndex) * 100}%)`,
//                   opacity: index === currentIndex ? 1 : 0,
//                   position: index === currentIndex ? 'relative' : 'absolute'
//                 }}
//               >
//                 {/* Ligne décorative */}
//                 <div className="temoignage-line" />
                
//                 {/* Profil */}
//                 <div className="temoignage-profil">
//                   <div className="temoignage-avatar">
//                     <img
//                       src={temoignage.avatar}
//                       alt={temoignage.nom}
//                       onError={(e) => {
//                         e.target.src = temoignage.fallbackAvatar;
//                       }}
//                     />
//                   </div>
//                   <div className="temoignage-info">
//                     <h3 className="temoignage-nom">{temoignage.nom}</h3>
//                     <span className="temoignage-type">{temoignage.type}</span>
//                   </div>
//                 </div>

//                 {/* Texte */}
//                 <p className="temoignage-texte">{temoignage.texte}</p>

//                 {/* Étoiles */}
//                 <div className="temoignage-stars">
//                   {renderStars(temoignage.note)}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Flèche droite */}
//           <button 
//             className="temoignage-arrow temoignage-next"
//             onClick={nextSlide}
//             aria-label="Témoignage suivant"
//           >
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M9 18l6-6-6-6" />
//             </svg>
//           </button>
//         </div>

//         {/* Indicateurs */}
//         {/* <div className="temoignage-dots">
//           {temoignages.map((_, index) => (
//             <button
//               key={index}
//               className={`temoignage-dot ${index === currentIndex ? 'active' : ''}`}
//               onClick={() => {
//                 if (!isAnimating) {
//                   setIsAnimating(true);
//                   setCurrentIndex(index);
//                   setTimeout(() => setIsAnimating(false), 500);
//                 }
//               }}
//               aria-label={`Témoignage ${index + 1}`}
//             />
//           ))}
//         </div> */}
//       </div>

//       <style jsx>{`
//         .temoignages-section {
//           padding: 80px 24px;
//           background-color: #ffffff;
//         }

//         .temoignages-container {
//           max-width: 950px; /* Reduced from 1300 to give breathing room */
//           width: 100%; /* Ensure it doesn't exceed screen */
//           margin: 0 auto;
//         }

//         /* En-tête */
//         .temoignages-header {
//           text-align: center;
//           margin-bottom: 50px;
//         }

//         .temoignages-label {
//           font-family: Arial, sans-serif;
//           font-size: 0.8rem;
//           font-weight: 600;
//           color: #f97316;
//           text-transform: uppercase;
//           letter-spacing: 0.1em;
//         }
// .temoignages-title {
//   font-family: 'Georgia', 'Times New Roman', serif;
//   font-size: clamp(2rem, 4vw, 2.8rem);
//   color: #0f172a;
//   text-align: center;
//   margin: 0 0 60px 0;
//   position: relative;
//   display: inline-block;
//   width: 100%;
// }

// .temoignages-title::after {
//   content: '';
//   position: absolute;
//   bottom: -15px;
//   left: 50%;
//   transform: translateX(-50%);
//   width: 80px;
//   height: 3px;
//   background: linear-gradient(90deg, #f97316, #1e3a8a);
//   border-radius: 2px;
// }
//         /* Slider */
//         .temoignages-slider {
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 20px;
//         }

//         /* Wrapper de la carte */
//         .temoignage-card-wrapper {
//           position: relative;
//           width: 100%;
//           max-width: 1100px; /* Adjusted to fit within the container with arrows */
//           min-height: 320px;
//           overflow: hidden;
//         }

//         /* Carte individuelle */
//         .temoignage-card {
//         //   background: #f8fafc;
//           border-radius: 2px;
//           padding: 40px;
//           transition: all 0.5s ease;
//           width: 100%;
//           border: 1px solid #e2e8f0;
//           box-sizing: border-box; /* Crucial for padding not to cause overflow */
//           top: 0;
//           left: 0;
//         }

//         .temoignage-card.active {
//           position: relative;
//         }

//         /* Ligne décorative */
//         // .temoignage-line {
//         //   width: 50px;
//         //   height: 3px;
//         //   background: #f97316;
//         //   margin-bottom: 24px;
//         //   border-radius: 2px;
//         // }

//         /* Profil */
//         .temoignage-profil {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//           margin-bottom: 20px;
//         }

//         .temoignage-avatar {
//           width: 60px;
//           height: 60px;
//         //   border-radius: 50%;
//           overflow: hidden;
//         //   border: 3px solid #f97316;
//           flex-shrink: 0;
//         }

//         .temoignage-avatar img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         .temoignage-info {
//           display: flex;
//           flex-direction: column;
//           gap: 4px;
//         }

//         .temoignage-nom {
//           font-family: Georgia, serif;
//           font-size: 1.25rem;
//           font-weight: 700;
//           color: #0f172a;
//           margin: 0;
//         }

//         .temoignage-type {
//           font-family: Arial, sans-serif;
//           font-size: 0.85rem;
//           color: #64748b;
//           text-transform: uppercase;
//           letter-spacing: 0.05em;
//         }

//         /* Texte */
//         .temoignage-texte {
//           font-family: Arial, sans-serif;
//           font-size: 1rem;
//           line-height: 1.8;
//           color: #475569;
//           margin: 0 0 24px 0;
//           font-style: italic;
//           white-space: pre-line;
//         }

//         /* Étoiles */
//         .temoignage-stars {
//           display: flex;
//           gap: 4px;
//         }

//         .temoignage-star {
//           color: #e2e8f0;
//           transition: color 0.2s ease;
//         }

//         .temoignage-star.filled {
//           color: #fbbf24;
//         }

//         /* Flèches */
//         .temoignage-arrow {
//           width: 50px;
//           height: 50px;
//           border-radius: 50%;
//           background: #ffffff;
//           border: 2px solid #e2e8f0;
//           color: #475569;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           flex-shrink: 0;
//         }

//         .temoignage-arrow:hover {
//           background: #f97316;
//           border-color: #f97316;
//           color: #ffffff;
//         }

//         /* Indicateurs */
//         .temoignage-dots {
//           display: flex;
//           justify-content: center;
//           gap: 10px;
//           margin-top: 30px;
//         }

//         // .temoignage-dot {
//         //   width: 10px;
//         //   height: 10px;
//         //   border-radius: 50%;
//         //   background: #e2e8f0;
//         //   border: none;
//         //   cursor: pointer;
//         //   transition: all 0.3s ease;
//         // }

//         // .temoignage-dot.active {
//         //   background: #f97316;
//         //   transform: scale(1.2);
//         // }

//         /* Responsive */
//         @media (max-width: 768px) {
//           .temoignages-slider {
//             gap: 10px;
//           }

//           .temoignage-card-wrapper {
//             min-height: 380px;
//           }

//           .temoignage-card {
//             padding: 24px;
//           }

//           .temoignage-arrow {
//             width: 40px;
//             height: 40px;
//           }

//           .temoignage-texte {
//             font-size: 0.95rem;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Temoignages;


import React, { useState, useEffect, useCallback } from 'react';

const Temoignages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const temoignages = [
    {
      id: 3,
      nom: 'Sophia Martin',
      prenom: 'Sophia',
      type: 'Maman d\'élève',
      ville: 'Casablanca',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      fallbackAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      texte: 'J\'adore venir à l\'école ! Les cours sont interactifs et les professeurs expliquent très bien. J\'ai fait beaucoup d\'amis et j\'ai découvert ma passion pour les sciences grâce aux ateliers pratiques. Je me sens bien préparée pour le lycée.',
      note: 5
    },
    {
      id: 2,
      nom: 'Karim Moussaoui',
      prenom: 'Karim',
      type: 'Parent d\'élève',
      ville: 'Casablanca',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      fallbackAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      texte: 'Le projet pédagogique de cette école est remarquable. Mon fils progresse à son rythme tout en développant sa curiosité. La communication avec l\'équipe est excellente et nous nous sentons vraiment impliqués dans la scolarité de notre enfant.',
      note: 5
    },
    
    {
      id: 4,
      nom: 'Ahmed Tazi',
      prenom: 'Ahmed',
      type: 'Parent d\'élève',
      ville: 'Casablanca',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      fallbackAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
      texte: 'Excellente école avec des valeurs fondamentales solides. Le respect, l\'excellence et le bien-être de l\'enfant sont au cœur de leur démarche. Nous avons vu une nette amélioration dans les résultats scolaires de notre fils, mais surtout dans son attitude positive.',
      note: 5
    },
    {
      id: 5,
      nom: 'Sara bensouda',
      prenom: 'Sara',
      type: 'Élève',
      ville: 'Casablanca',
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
      fallbackAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
      texte: 'Les activités extrascolaires sont géniales ! Je fais partie du club de théâtre et cela m\'a beaucoup aidée à surmonter ma timidité. Les professeurs sont compréhensifs et nous encouragent toujours à donner le meilleur de nous-mêmes.',
      note: 5
    }
  ];

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % temoignages.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, temoignages.length]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + temoignages.length) % temoignages.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, temoignages.length]);

  // Auto-défilement
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Générer les étoiles
  const renderStars = (note) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`temoignage-star ${i < note ? 'filled' : ''}`}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={i < note ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ));
  };

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
          {/* Flèche gauche */}
          <button 
            className="temoignage-arrow temoignage-prev"
            onClick={prevSlide}
            aria-label="Témoignage précédent"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Carte active */}
          <div className="temoignage-card-wrapper">
            {temoignages.map((temoignage, index) => (
              <div
                key={temoignage.id}
                className={`temoignage-card ${index === currentIndex ? 'active' : ''}`}
                style={{
                  transform: `translateX(${(index - currentIndex) * 100}%)`,
                  opacity: index === currentIndex ? 1 : 0,
                  position: index === currentIndex ? 'relative' : 'absolute'
                }}
              >
                {/* Profil - Version humanisée */}
                <div className="temoignage-profil">
                  <div className="temoignage-avatar">
                    <img
                      src={temoignage.avatar}
                      alt={temoignage.nom}
                      onError={(e) => {
                        e.target.src = temoignage.fallbackAvatar;
                      }}
                    />
                  </div>
                  <div className="temoignage-info">
                    <h3 className="temoignage-nom">
                      {temoignage.prenom}
                      <span className="temoignage-badge">
                        {temoignage.type === 'Parent d\'élève' ? '👨‍👩‍👧' : '🎓'}
                      </span>
                    </h3>
                    <div className="temoignage-meta">
                      <span className="temoignage-type">{temoignage.type}</span>
                      <span className="temoignage-separator">•</span>
                      <span className="temoignage-ville">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {temoignage.ville}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Citation avec guillemets */}
                <div className="temoignage-quote">
                  <svg className="temoignage-quote-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M10 11h-4v-4h4v4z M18 11h-4v-4h4v4z" />
                    <path d="M6 7v10 M14 7v10" />
                  </svg>
                  <p className="temoignage-texte">{temoignage.texte}</p>
                </div>

                {/* Étoiles et signature */}
                <div className="temoignage-footer">
                  <div className="temoignage-stars">
                    {renderStars(temoignage.note)}
                  </div>
                  <div className="temoignage-signature">
                    — {temoignage.prenom}, {temoignage.type}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Flèche droite */}
          <button 
            className="temoignage-arrow temoignage-next"
            onClick={nextSlide}
            aria-label="Témoignage suivant"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .temoignages-section {
          padding: 80px 24px;
          background-color: #ffffff;
        }

        .temoignages-container {
          max-width: 950px;
          width: 100%;
          margin: 0 auto;
        }

        /* En-tête */
        .temoignages-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .temoignages-label {
          font-family: Arial, sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          color: #f97316;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .temoignages-title {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: #0f172a;
          text-align: center;
          margin: 0 0 60px 0;
          position: relative;
          display: inline-block;
          width: 100%;
        }

        .temoignages-title::after {
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

        /* Slider */
        .temoignages-slider {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        /* Wrapper de la carte */
        .temoignage-card-wrapper {
          position: relative;
          width: 100%;
          max-width: 1100px;
          min-height: 380px;
          overflow: hidden;
        }

        /* Carte individuelle */
        .temoignage-card {
          border-radius: 24px;
          padding: 32px;
          transition: all 0.5s ease;
          width: 100%;
          background: #ffffff;
          border: 1px solid #f1f5f9;
          box-shadow: 0 20px 35px -15px rgba(0, 0, 0, 0.05);
          box-sizing: border-box;
          top: 0;
          left: 0;
        }

        .temoignage-card.active {
          position: relative;
        }

        /* Profil humanisé */
        .temoignage-profil {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 24px;
        }

        .temoignage-avatar {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          overflow: hidden;
          background: linear-gradient(135deg, #f97316, #fbbf24);
          padding: 2px;
          flex-shrink: 0;
        }

        .temoignage-avatar img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          background: white;
        }

        .temoignage-info {
          flex: 1;
        }

        .temoignage-nom {
          font-family: Georgia, serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 6px 0;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .temoignage-badge {
          font-size: 1.1rem;
        }

        .temoignage-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .temoignage-type {
          font-family: Arial, sans-serif;
          font-size: 0.8rem;
          color: #f97316;
          font-weight: 500;
          background: #fff7ed;
          padding: 4px 10px;
          border-radius: 20px;
        }

        .temoignage-separator {
          color: #e2e8f0;
          font-size: 0.7rem;
        }

        .temoignage-ville {
          font-family: Arial, sans-serif;
          font-size: 0.75rem;
          color: #64748b;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .temoignage-ville svg {
          width: 12px;
          height: 12px;
        }

        /* Citation */
        .temoignage-quote {
          position: relative;
          margin: 20px 0 20px 0;
        }

        .temoignage-quote-icon {
          position: absolute;
          top: -10px;
          left: -8px;
          color: #f97316;
          opacity: 0.3;
          pointer-events: none;
        }

        /* Texte */
        .temoignage-texte {
          font-family: Arial, sans-serif;
          font-size: 1rem;
          line-height: 1.7;
          color: #334155;
          margin: 0;
          font-style: normal;
          padding-left: 28px;
        }

        /* Footer */
        .temoignage-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #f1f5f9;
        }

        .temoignage-stars {
          display: flex;
          gap: 4px;
        }

        .temoignage-star {
          color: #e2e8f0;
          transition: color 0.2s ease;
        }

        .temoignage-star.filled {
          color: #fbbf24;
        }

        .temoignage-signature {
          font-family: Georgia, serif;
          font-size: 0.85rem;
          color: #94a3b8;
          font-style: italic;
        }

        /* Flèches */
        .temoignage-arrow {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .temoignage-arrow:hover {
          background: #f97316;
          border-color: #f97316;
          color: #ffffff;
          transform: scale(1.05);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .temoignages-slider {
            gap: 10px;
          }

          .temoignage-card-wrapper {
            min-height: 420px;
          }

          .temoignage-card {
            padding: 24px;
          }

          .temoignage-arrow {
            width: 40px;
            height: 40px;
          }

          .temoignage-texte {
            font-size: 0.9rem;
            padding-left: 20px;
          }

          .temoignage-avatar {
            width: 55px;
            height: 55px;
          }

          .temoignage-nom {
            font-size: 1.1rem;
          }

          .temoignage-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 480px) {
          .temoignage-profil {
            flex-direction: column;
            text-align: center;
          }

          .temoignage-meta {
            justify-content: center;
          }

          .temoignage-quote-icon {
            display: none;
          }

          .temoignage-texte {
            padding-left: 0;
            text-align: center;
          }

          .temoignage-footer {
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Temoignages;