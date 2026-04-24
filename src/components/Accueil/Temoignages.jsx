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

//         .temoignages-title {
//           font-family: Georgia, serif;
//           font-size: clamp(2.5rem, 5vw, 2.5rem);
//           color: #0f172a;
//           margin: 12px 0 0 0;
//         }

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


