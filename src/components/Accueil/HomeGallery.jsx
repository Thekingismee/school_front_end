import React, { useState } from "react";

const HomeGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            id: 1,
            src: "/CHEF2.jpg",
            fallback:
                "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80"
        },
        {
            id: 2,
            src: "/hiver.jpg",
            fallback:
                "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80"
        },
        {
            id: 3,
            src: "/sortie.jpg",
            fallback:
                "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80"
        },
        {
            id: 4,
            src: "/fillette.jpg",
            fallback:
                "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80"
        },
        {
            id: 5,
            src: "/sor1.jpg",
            fallback:
                "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80"
        },
        {
            id: 6,
            src: "/sor2.jpg",
            fallback:
                "https://images.unsplash.com/photo-1427504745634-b521b4249ef7?w=600&q=80"
        },
        {
            id: 7,
            src: "/sp.jpg",
            fallback:
                "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80"
        },
        {
            id: 8,
            src: "/rima.jpg",
            fallback:
                "https://images.unsplash.com/photo-1544717305-38b9144f7a1f?w=600&q=80"
        },
        {
            id: 9,
            src: "/sind.jpg",
            fallback:
                "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex(prev => (prev + 2) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex(prev => (prev - 2 + images.length) % images.length);
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
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
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
                                    animation:
                                        index === 0
                                            ? "slideFromLeft 0.4s ease"
                                            : "slideFromRight 0.4s ease"
                                }}
                            >
                                <img
                                    src={image.src}
                                    alt={`Photo ${image.id}`}
                                    onError={e => {
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
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>

            <style jsx>{`
                .homegallery-section {
                    padding: 60px 24px;
                    margin-top: 100px;
                    background-color: #ffb347;
                    // padding-block: 50px;
                }

                .homegallery-container {
                    max-width: 900px;
                    margin: 0 auto;
                }

                .homegallery-title {
                    font-family: "Georgia", "Times New Roman", serif;
                    font-size: clamp(2.5rem, 5vw, 2.5rem);
                    color: #0f172a;
                    text-align: center;
                    margin: 0 0 60px 0;
                    position: relative;
                    display: inline-block;
                    width: 100%;
                }
                .homegallery-title::after {
                    content: "";
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

// import React, { useState, useEffect } from 'react';

// const HomeGallery = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const images = [

//     {
//       id: 3,
//       src: '/CHEF2.jpg',
//       fallback: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80'
//     },
//      {
//       id: 1,
//       src: '/hiver.jpg',
//       fallback: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80'
//     },
//     {
//       id: 2,
//       src: '/sortie.jpg',
//       fallback: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80'
//     },
//     {
//       id: 4,
//       src: '/lycee.jpg',
//       fallback: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80'
//     },

//     {
//       id: 5,
//       src: '/sor1.jpg',
//       fallback: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80'
//     },
//     {
//       id: 6,
//       src: '/sor2.jpg',
//       fallback: 'https://images.unsplash.com/photo-1427504745634-b521b4249ef7?w=600&q=80'
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 2) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   const getVisibleImages = () => {
//     return [
//       images[currentIndex],
//       images[(currentIndex + 1) % images.length]
//     ];
//   };

//   return (
//     <section className="homegallery-section">
//       <div className="homegallery-container">
//         <h2 className="homegallery-title">Galerie</h2>

//         <div className="homegallery-viewport">
//           <div className="homegallery-track">
//             {getVisibleImages().map((image, index) => (
//               <div
//                 key={`${image.id}-${currentIndex}`}
//                 className="homegallery-image"
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
//         </div>
//       </div>

//       <style jsx>{`
//         .homegallery-section {
//           padding: 100px 24px;
//           background-color: #FFB347;
//           width: 100%;
//           position: relative;
//           overflow: hidden;
//         }

//         /* Décoration de fond subtile (optionnelle) */
//         .homegallery-section::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background-image: radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
//           pointer-events: none;
//         }

//         .homegallery-container {
//           max-width: 1200px;
//           margin: 0 auto;
//           position: relative;
//           z-index: 2;
//         }

//         /* TITRE - STYLE IDENTIQUE À SERVICES */
//         .homegallery-title {
//           font-family: 'Georgia', 'Times New Roman', serif;
//           font-size: clamp(2rem, 4vw, 2.8rem);
//           color: #0f172a;
//           text-align: center;
//           margin: 0 0 60px 0;
//           position: relative;
//           display: inline-block;
//           width: 100%;
//         }

//         .homegallery-title::after {
//           content: '';
//           position: absolute;
//           bottom: -15px;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 80px;
//           height: 3px;
//           background: linear-gradient(90deg, #f97316, #1e3a8a);
//           border-radius: 2px;
//         }

//         .homegallery-viewport {
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .homegallery-track {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 24px;
//           width: 100%;
//           overflow: hidden;
//         }

//         .homegallery-image {
//           aspect-ratio: 4 / 3;
//           overflow: hidden;
//           border-radius: 12px;
//           box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.02);
//           animation: slideIn 0.6s ease-out;
//         }

//         .homegallery-image img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//           transition: transform 0.3s ease;
//         }

//         .homegallery-image:hover img {
//           transform: scale(1.05);
//         }

//         @keyframes slideIn {
//           from {
//             transform: translateX(100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }

//         .homegallery-image:first-child {
//           animation: slideInLeft 0.6s ease-out;
//         }

//         @keyframes slideInLeft {
//           from {
//             transform: translateX(-100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }

//         @media (max-width: 768px) {
//           .homegallery-section {
//             padding: 70px 20px;
//           }

//           .homegallery-title {
//             margin-bottom: 50px;
//           }

//           .homegallery-track {
//             gap: 16px;
//           }
//         }

//         @media (max-width: 640px) {
//           .homegallery-track {
//             grid-template-columns: 1fr;
//           }

//           .homegallery-image:first-child {
//             animation: slideIn 0.6s ease-out;
//           }
//         }

//         @media (max-width: 480px) {
//           .homegallery-section {
//             padding: 60px 16px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HomeGallery;
