// import React, { useState } from 'react';

// const HomeGallery = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const images = [
//     {
//       id: 1,
//       src: '/hiver.jpg',
//       fallback: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80'
//     },
//     {
//       id: 2,
//       src: '/hennè.jpg',
//       fallback: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80'
//     },
//     {
//       id: 3,
//       src: '/sortie.jpg',
//       fallback: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80'
//     },
//     {
//       id: 4,
//       src: '/lycee.jpg',
//       fallback: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80'
//     },
//     {
//       id: 5,
//       src: '/college.jpg',
//       fallback: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80'
//     },
//     {
//       id: 6,
//       src: '/serv2.jpg',
//       fallback: 'https://images.unsplash.com/photo-1427504745634-b521b4249ef7?w=600&q=80'
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 2) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 2 + images.length) % images.length);
//   };

//   // Obtenir les 2 images actuelles
//   const getVisibleImages = () => {
//     return [
//       images[currentIndex],
//       images[(currentIndex + 1) % images.length]
//     ];
//   };

//   return (
//     <section className="homegallery-section">
//       <div className="homegallery-container">
//         {/* Titre */}
//         <h2 className="homegallery-title">Galerie</h2>

//         {/* Zone des images */}
//         <div className="homegallery-viewport">
//           {/* Bouton gauche */}
//           <button 
//             className="homegallery-btn homegallery-prev"
//             onClick={prevSlide}
//           >
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M15 18l-6-6 6-6" />
//             </svg>
//           </button>

//           {/* Images */}
//           <div className="homegallery-track">
//             {getVisibleImages().map((image, index) => (
//               <div 
//                 key={`${image.id}-${currentIndex}`}
//                 className="homegallery-image"
//                 style={{
//                   animation: index === 0 ? 'slideFromLeft 0.4s ease' : 'slideFromRight 0.4s ease'
//                 }}
//               >
//                 <img
//                   src={image.src}
//                   alt={`Photo ${image.id}`}
//                   onError={(e) => {
//                     e.target.src = image.fallback;
//                   }}
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Bouton droite */}
//           <button 
//             className="homegallery-btn homegallery-next"
//             onClick={nextSlide}
//           >
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M9 18l6-6-6-6" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       <style jsx>{`
//   //       .homegallery-section {
//   //         padding: 60px 24px;
//   //         margin-top:100px;
//   //         background-color: #e54646ff;
//   //           // padding-block: 50px;
//   // clip-path: shape(from 0 0,curve to 4.17% 21px with 2.78% 1px,curve to 6.94% 21.5px with 5.56% 41px,curve to 9.72% 10.5px with 8.33% 2px,curve to 12.5% 33px with 11.11% 19px,curve to 15.28% 29.5px with 13.89% 47px,curve to 18.06% 11.5px with 16.67% 12px,curve to 20.83% 12.5px with 19.44% 11px,curve to 23.61% 18px with 22.22% 14px,curve to 26.39% 13px with 25% 22px,curve to 29.17% 13.5px with 27.78% 4px,curve to 31.94% 29px with 30.56% 23px,curve to 34.72% 26.5px with 33.33% 35px,curve to 37.5% 16px with 36.11% 18px,curve to 40.28% 17px with 38.89% 14px,curve to 43.06% 18px with 41.67% 20px,curve to 45.83% 13.5px with 44.44% 16px,curve to 48.61% 21px with 47.22% 11px,curve to 51.39% 34px with 50% 31px,curve to 54.17% 38px with 52.78% 37px,curve to 56.94% 25px with 55.56% 39px,curve to 59.72% 28.5px with 58.33% 11px,curve to 62.5% 46px with 61.11% 46px,curve to 65.28% 40.5px with 63.89% 46px,curve to 68.06% 24.5px with 66.67% 35px,curve to 70.83% 28.5px with 69.44% 14px,curve to 73.61% 36.5px with 72.22% 43px,curve to 76.39% 21px with 75% 30px,curve to 79.17% 20.5px with 77.78% 12px,curve to 81.94% 29.5px with 80.56% 29px,curve to 84.72% 21px with 83.33% 30px,curve to 87.5% 6.5px with 86.11% 12px,curve to 90.28% 23.5px with 88.89% 1px,curve to 93.06% 39.5px with 91.67% 46px,curve to 95.83% 32.5px with 94.44% 33px,curve to 100% 0 with 97.22% 32px,vline to 100%,curve to 95.83% calc(100% - 21px) with 97.22% calc(100% - 27px),curve to 93.06% calc(100% - 28.5px) with 94.44% calc(100% - 15px),curve to 90.28% calc(100% - 29px) with 91.67% calc(100% - 42px),curve to 87.5% calc(100% - 33px) with 88.89% calc(100% - 16px),curve to 84.72% calc(100% - 29px) with 86.11% calc(100% - 50px),curve to 81.94% calc(100% - 28.5px) with 83.33% calc(100% - 8px),curve to 79.17% calc(100% - 34.5px) with 80.56% calc(100% - 49px),curve to 76.39% calc(100% - 23.5px) with 77.78% calc(100% - 20px),curve to 73.61% calc(100% - 29px) with 75% calc(100% - 27px),curve to 70.83% calc(100% - 29.5px) with 72.22% calc(100% - 31px),curve to 68.06% calc(100% - 20px) with 69.44% calc(100% - 28px),curve to 65.28% calc(100% - 26.5px) with 66.67% calc(100% - 12px),curve to 62.5% calc(100% - 36px) with 63.89% calc(100% - 41px),curve to 59.72% calc(100% - 36px) with 61.11% calc(100% - 31px),curve to 56.94% calc(100% - 38.5px) with 58.33% calc(100% - 41px),curve to 54.17% calc(100% - 33.5px) with 55.56% calc(100% - 36px),curve to 51.39% calc(100% - 38.5px) with 52.78% calc(100% - 31px),curve to 48.61% calc(100% - 30px) with 50% calc(100% - 46px),curve to 45.83% calc(100% - 7px) with 47.22% calc(100% - 14px),curve to 43.06% calc(100% - 23px) with 44.44% calc(100% - 0px),curve to 40.28% calc(100% - 41px) with 41.67% calc(100% - 46px),curve to 37.5% calc(100% - 40px) with 38.89% calc(100% - 36px),curve to 34.72% calc(100% - 34px) with 36.11% calc(100% - 44px),curve to 31.94% calc(100% - 18px) with 33.33% calc(100% - 24px),curve to 29.17% calc(100% - 27px) with 30.56% calc(100% - 12px),curve to 26.39% calc(100% - 32px) with 27.78% calc(100% - 42px),curve to 23.61% calc(100% - 28px) with 25% calc(100% - 22px),curve to 20.83% calc(100% - 40px) with 22.22% calc(100% - 34px),curve to 18.06% calc(100% - 31px) with 19.44% calc(100% - 46px),curve to 15.28% calc(100% - 12px) with 16.67% calc(100% - 16px),curve to 12.5% calc(100% - 9px) with 13.89% calc(100% - 8px),curve to 9.72% calc(100% - 11.5px) with 11.11% calc(100% - 10px),curve to 6.94% calc(100% - 20.5px) with 8.33% calc(100% - 13px),curve to 4.17% calc(100% - 20px) with 5.56% calc(100% - 28px),curve to 0 100% with 2.78% calc(100% - 12px),vline to 0);

//   //       }

//         .homegallery-container {
//           max-width: 900px;
//           margin: 0 auto;
//         }

//         .homegallery-title {
//           font-family: 'Georgia', serif;
//           font-size: 2rem;
//           color: #ffffffff;
//           text-align: center;
//           margin: 0 0 40px 0;
//         }

//         .homegallery-viewport {
//           position: relative;
//           display: flex;
//           align-items: center;
//           gap: 20px;
//         }

//         .homegallery-track {
//           flex: 1;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 20px;
//           overflow: hidden;
//         }

//         .homegallery-image {
//           aspect-ratio: 4/3;
//           overflow: hidden;
//           border-radius: 2px;
//         }

//         .homegallery-image img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//         }

//         /* Animations */
//         @keyframes slideFromLeft {
//           from {
//             transform: translateX(-100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }

//         @keyframes slideFromRight {
//           from {
//             transform: translateX(100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }

//         /* Boutons */
//         .homegallery-btn {
//           width: 48px;
//           height: 48px;
//           border-radius: 50%;
//           background: #ffffffff;
//           color: #000;
//           border: none;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           flex-shrink: 0;
//           transition: background 0.2s ease;
//         }

        

//         /* Responsive */
//         @media (max-width: 640px) {
//           .homegallery-track {
//             grid-template-columns: 1fr;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HomeGallery;



import React, { useState, useEffect } from 'react';

const HomeGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
   
    {
      id: 3,
      src: '/CHEF2.jpg',
      fallback: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80'
    },
     {
      id: 1,
      src: '/hiver.jpg',
      fallback: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80'
    },
    {
      id: 2,
      src: '/sortie.jpg',
      fallback: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80'
    },
    {
      id: 4,
      src: '/lycee.jpg',
      fallback: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80'
    },
    
    {
      id: 5,
      src: '/sor1.jpg',
      fallback: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80'
    },
    {
      id: 6,
      src: '/sor2.jpg',
      fallback: 'https://images.unsplash.com/photo-1427504745634-b521b4249ef7?w=600&q=80'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const getVisibleImages = () => {
    return [
      images[currentIndex],
      images[(currentIndex + 1) % images.length]
    ];
  };

  return (
    <section className="homegallery-section">
      <div className="homegallery-container">
        <h2 className="homegallery-title">Galerie</h2>

        <div className="homegallery-viewport">
          <div className="homegallery-track">
            {getVisibleImages().map((image, index) => (
              <div 
                key={`${image.id}-${currentIndex}`}
                className="homegallery-image"
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
        </div>
      </div>

      <style jsx>{`
        .homegallery-section {
          padding: 100px 24px;
          background-color: #FFB347;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        /* Décoration de fond subtile (optionnelle) */
        .homegallery-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .homegallery-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* TITRE - STYLE IDENTIQUE À SERVICES */
        .homegallery-title {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: clamp(2rem, 4vw, 2.8rem);
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
          justify-content: center;
        }

        .homegallery-track {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          width: 100%;
          overflow: hidden;
        }

        .homegallery-image {
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.02);
          animation: slideIn 0.6s ease-out;
        }

        .homegallery-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }

        .homegallery-image:hover img {
          transform: scale(1.05);
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .homegallery-image:first-child {
          animation: slideInLeft 0.6s ease-out;
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .homegallery-section {
            padding: 70px 20px;
          }

          .homegallery-title {
            margin-bottom: 50px;
          }

          .homegallery-track {
            gap: 16px;
          }
        }

        @media (max-width: 640px) {
          .homegallery-track {
            grid-template-columns: 1fr;
          }
          
          .homegallery-image:first-child {
            animation: slideIn 0.6s ease-out;
          }
        }

        @media (max-width: 480px) {
          .homegallery-section {
            padding: 60px 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeGallery;