// import React, { useState } from 'react';

// const HomeValeurs = () => {

//   const services = [
//     {
//       id: 1,
//       title: 'Apprentissage et plaisir',
//       image: '/serv.jpg',
//       fallbackImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
//       position: { top: '10%', left: '15%' }
//     },
//     {
//       id: 2,
//       title: 'Lieu convivial',
//       image: '/serv2.jpg',
//       fallbackImage: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&q=80',
//       position: { top: '10%', right: '15%' }
//     },
//     {
//       id: 3,
//       title: 'Sécurité des enfants',
//       image: '/serv3.jpg',
//       fallbackImage: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80',
//       position: { bottom: '0%', left: '50%', transform: 'translateX(-50%)' }
//     }
//   ];

//   return (
//     <section className="homeservices-section">
//       <div className="homeservices-container">
//         {/* Titre principal */}
//         <div className="homeservices-header">
//           <span className="homeservices-label">Ce que nous offrons</span>
//           <h2 className="homeservices-title">Nos Valeurs</h2>
//         </div>

//         {/* Constellation de services */}
//         <div className="homeservices-constellation">
//           {/* Lignes de connexion SVG */}
//           <svg className="homeservices-lines" viewBox="0 0 800 600" preserveAspectRatio="none">
//             <path
//               className="connection-line"
//               d="M 200 150 Q 400 100 600 150"
//               stroke="#168ff94c"
//               strokeWidth="2"
//               fill="none"
//               strokeDasharray="8 4"
//             />
//             <path
//               className="connection-line"
//               d="M 200 150 Q 300 350 400 450"
//               stroke="#168ff94c"
//               strokeWidth="2"
//               fill="none"
//               strokeDasharray="8 4"
//             />
//             <path
//               className="connection-line"
//               d="M 600 150 Q 500 350 400 450"
//               stroke="#168ff94c"
//               strokeWidth="2"
//               fill="none"
//               strokeDasharray="8 4"
//             />
//           </svg>

//           {/* Cercles décoratifs */}
//           <div className="homeservices-orbit orbit-1" />
//           <div className="homeservices-orbit orbit-2" />
//           <div className="homeservices-orbit orbit-3" />

//           {/* Services */}
//           {services.map((service, index) => (
//             <div
//               key={service.id}
//               className={`homeservices-node active`}
//               style={service.position}
//             >
//               {/* Cercle principal */}
//               <div className="homeservices-circle">
//                 <div className="homeservices-image-wrapper">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     onError={(e) => {
//                       e.target.src = service.fallbackImage;
//                     }}
//                   />
//                 </div>
//               </div>

//               {/* Titre flottant */}
//               <div className="homeservices-floating-title">
//                 <h3 className="homeservices-name">{service.title}</h3>
//               </div>
//             </div>
//           ))}

//           {/* Centre décoratif */}
//           {/* <div className="homeservices-center">
//             <div className="center-icon">
//               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                 <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//               </svg>
//             </div>
//           </div> */}

//           <img src="/Logo Atome-AR-FR+Slogan-Final.png" alt="" srcset="" className="homeservices-center" style={{width:"140px", height:"140px"}}/>

//         </div>
//       </div>

//       <style jsx>{`

//         /* Texture subtile */
//         .homeservices-section::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background-image:
//             radial-gradient(circle at 20% 30%, rgba(249, 115, 22, 0.03) 0%, transparent 50%),
//             radial-gradient(circle at 80% 70%, rgba(30, 58, 138, 0.03) 0%, transparent 50%);
//           pointer-events: none;
//         }

//         .homeservices-container {
//           max-width: 1000px;
//           margin: 0 auto;
//           position: relative;
//           z-index: 1;
//         }

//         /* En-tête */
//         .homeservices-header {
//           text-align: center;
//           margin-bottom: 60px;
//         }

//         .homeservices-label {
//           display: block;
//           font-family: 'Arial', sans-serif;
//           font-size: 0.75rem;
//           font-weight: 600;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: #f97316;
//           margin-bottom: 12px;
//         }

//         .homeservices-title {
//           font-family: 'Georgia', serif;
//           font-size: clamp(2.5rem, 5vw, 2.5rem);
//           color: #0f172a;
//           margin: 0;
//           position: relative;
//           display: inline-block;
//         }

//         .homeservices-title::after {
//           content: '';
//           position: absolute;
//           bottom: -10px;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 60px;
//           height: 3px;
//           background: linear-gradient(90deg, #f97316, #1e3a8a);
//           border-radius: 2px;
//         }

//         /* Constellation */
//         .homeservices-constellation {
//           position: relative;
//           height: 550px;
//           width: 100%;
//         }

//         /* Lignes de connexion */
//         .homeservices-lines {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           pointer-events: none;
//           z-index: 1;
//         }

//         .connection-line {
//           animation: dash 20s linear infinite;
//         }

//         @keyframes dash {
//           to {
//             stroke-dashoffset: -100;
//           }
//         }

//         /* Orbites décoratives */
//         .homeservices-orbit {
//           position: absolute;
//           border: 1px dashed #168ff94c;
//           border-radius: 50%;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//         }

//         .orbit-1 {
//           width: 400px;
//           height: 400px;
//           animation: rotate 30s linear infinite;
//         }

//         .orbit-2 {
//           width: 500px;
//           height: 500px;
//           animation: rotate 40s linear infinite reverse;
//         }

//         .orbit-3 {
//           width: 600px;
//           height: 600px;
//           animation: rotate 50s linear infinite;
//         }

//         @keyframes rotate {
//           from { transform: translate(-50%, -50%) rotate(0deg); }
//           to { transform: translate(-50%, -50%) rotate(360deg); }
//         }

//         /* Nœuds de service */
//         .homeservices-node {
//           position: absolute;
//           z-index: 10;
//           cursor: pointer;
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         /* Cercle principal */
//         .homeservices-circle {
//           position: relative;
//           width: 160px;
//           height: 160px;
//           border-radius: 50%;
//           overflow: visible;
//         }

//         .homeservices-image-wrapper {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           border-radius: 50%;
//           overflow: hidden;
//           box-shadow:
//             0 10px 40px rgba(0, 0, 0, 0.15),
//             0 0 0 4px rgba(255, 255, 255, 0.8),
//             0 0 0 8px #168ff94c;
//           transition: all 0.4s ease;
//         }

//         .homeservices-image-wrapper img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.6s ease;
//         }

//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-5px); }
//         }

//         /* Titre flottant */
//         .homeservices-floating-title {
//           position: absolute;
//           bottom: -50px;
//           left: 50%;
//           transform: translateX(-50%);
//           text-align: center;
//           white-space: nowrap;
//           opacity: 0.9;
//           transition: all 0.4s ease;
//         }

//         .homeservices-name {
//         font-family: 'Arial', sans-serif;
//           font-size: 0.85rem;
//           text-transform: uppercase;
//           letter-spacing: 0.05em;
//           font-weight: 600;
//           color: #0f172a;
//           margin: 0;
//           position: relative;
//         }

//         .homeservices-name::after {
//           content: '';
//           position: absolute;
//           bottom: -6px;
//           left: 50%;
//           transform: translateX(-50%) scaleX(0);
//           width: 30px;
//           height: 2px;
//           background: #168ff9ff;
//           transition: transform 0.3s ease;
//         }

//         /* Centre décoratif */
//         .homeservices-center {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           z-index: 5;
//         }

//         // .center-icon {
//         //   width: 60px;
//         //   height: 60px;
//         //   background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
//         //   border-radius: 50%;
//         //   display: flex;
//         //   align-items: center;
//         //   justify-content: center;
//         //   color: white;
//         //   box-shadow: 0 8px 30px rgba(249, 115, 22, 0.4);
//         //   animation: breathe 3s ease-in-out infinite;
//         // }

//         @keyframes breathe {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//         }

//         /* Responsive */
//         @media (max-width: 768px) {
//           .homeservices-constellation {
//             height: 800px;
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             gap: 80px;
//             padding-top: 40px;
//           }

//           .homeservices-node {
//             position: relative !important;
//             top: auto !important;
//             left: auto !important;
//             right: auto !important;
//             bottom: auto !important;
//             transform: none !important;
//           }

//           .homeservices-lines,
//           .homeservices-orbit,
//           .homeservices-center {
//             display: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HomeValeurs;

import React from "react";

const HomeValeurs = () => {
    const services = [
        {
            id: 1,
            title: "Apprentissage et plaisir",
            image: "/APPplai.jpg",
            fallbackImage:
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80"
        },
        {
            id: 2,
            title: "Excellence éducative",
            image: "/EDUC.jpg",
            fallbackImage:
                "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=300&q=80"
        },
        {
            id: 3,
            title: "Lieu convivial",
            image: "/lieu.jpg",
            fallbackImage:
                "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=300&q=80"
        },
        {
            id: 4,
            title: "Ambiance studieuse",
            image: "/sec.jpg",
            fallbackImage:
                "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&q=80"
        },
        {
            id: 5,
            title: "Croissance pédagogique",
            image: "/croi.jpg",
            fallbackImage:
                "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&q=80"
        },
        {
            id: 6,
            title: "Bien-être émotionnel",
            image: "/Mental.jpg",
            fallbackImage:
                "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&q=80"
        }
    ];

    const n = services.length;
    const radiusPct = 38;
    const cx = 50;
    const cy = 50;

    return (
        <section className="valeurs-section">
            <div className="valeurs-header">
                <span className="valeurs-label">Ce que nous offrons</span>
                <h2 className="valeurs-title">Nos Valeurs</h2>
            </div>

            <div className="orbit-canvas">
                {/* Anneaux décoratifs */}
                <div className="orbit-ring orbit-ring-1" />
                <div className="orbit-ring orbit-ring-2" />
                <div className="orbit-ring orbit-ring-3" />

                {/* Lignes de connexion SVG */}
                <svg
                    className="orbit-svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid meet"
                >
                    {services.map((_, i) => {
                        const angle = (2 * Math.PI * i) / n - Math.PI / 2;
                        const nx = cx + radiusPct * Math.cos(angle);
                        const ny = cy + radiusPct * Math.sin(angle);
                        return (
                            <line
                                key={i}
                                x1={cx}
                                y1={cy}
                                x2={nx}
                                y2={ny}
                                stroke="rgba(22,143,249,0.22)"
                                strokeWidth="0.4"
                                strokeDasharray="2 1.5"
                                style={{
                                    animation: `dashflow 18s linear ${i *
                                        -3}s infinite`
                                }}
                            />
                        );
                    })}
                </svg>

                {/* Nœuds des valeurs positionnés en cercle */}
                {services.map((service, i) => {
                    const angle = (2 * Math.PI * i) / n - Math.PI / 2;
                    const nx = cx + radiusPct * Math.cos(angle);
                    const ny = cy + radiusPct * Math.sin(angle);
                    return (
                        <div
                            key={service.id}
                            className="orbit-node"
                            style={{ left: `${nx}%`, top: `${ny}%` }}
                        >
                            <div className="orbit-node-circle">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    onError={e => {
                                        e.target.src = service.fallbackImage;
                                    }}
                                />
                            </div>
                            <span className="orbit-node-label">
                                {service.title}
                            </span>
                        </div>
                    );
                })}

                {/* Logo centré - CORRIGÉ */}
                <div className="orbit-center">
                    <img
                        src="/logostitre.png"
                        alt="Logo Atome"
                        className="center-logo"
                    />
                </div>
            </div>

            <style jsx>{`
                .valeurs-section {
                    padding: 60px 20px 80px;
                    background: linear-gradient(
                        135deg,
                        #fefaf5 0%,
                        #ffffff 100%
                    );
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                /* En-tête */
                .valeurs-header {
                    text-align: center;
                    margin-bottom: 48px;
                }
                .valeurs-label {
                    display: block;
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: #f97316;
                    margin-bottom: 10px;
                }
                .valeurs-title {
                    font-family: Georgia, serif;
                    font-size: clamp(1.8rem, 4vw, 2.6rem);
                    color: #0f172a;
                    margin: 0;
                    position: relative;
                    display: inline-block;
                }
                .valeurs-title::after {
                    content: "";
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 60px;
                    height: 3px;
                    background: linear-gradient(90deg, #f97316, #1e3a8a);
                    border-radius: 2px;
                }

                /* Canvas orbital — carré responsive */
                .orbit-canvas {
                    position: relative;
                    width: min(680px, 92vw);
                    height: min(680px, 92vw);
                }

                /* Anneaux rotatifs */
                .orbit-ring {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    border-radius: 50%;
                    border: 1.5px dashed;
                    transform: translate(-50%, -50%);
                    pointer-events: none;
                }
                .orbit-ring-1 {
                    width: 54%;
                    height: 54%;
                    border-color: rgba(249, 115, 22, 0.2);
                    animation: orbitSpin 35s linear infinite;
                }
                .orbit-ring-2 {
                    width: 76%;
                    height: 76%;
                    border-color: rgba(22, 143, 249, 0.15);
                    animation: orbitSpin 55s linear infinite reverse;
                }
                .orbit-ring-3 {
                    width: 95%;
                    height: 95%;
                    border-color: rgba(22, 143, 249, 0.07);
                    animation: orbitSpin 75s linear infinite;
                }
                @keyframes orbitSpin {
                    from {
                        transform: translate(-50%, -50%) rotate(0deg);
                    }
                    to {
                        transform: translate(-50%, -50%) rotate(360deg);
                    }
                }

                /* SVG lignes */
                .orbit-svg {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                }
                @keyframes dashflow {
                    to {
                        stroke-dashoffset: -20;
                    }
                }

                /* Logo central - CORRIGÉ */
                .orbit-center {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 20;
                    width: 22%;
                    height: 22%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .center-logo {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    background: white;
                    border-radius: 50%;
                    padding: 12px;
                    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12),
                        0 0 0 4px rgba(255, 255, 255, 0.9),
                        0 0 0 7px rgba(249, 115, 22, 0.28);
                    animation: breathe 3s ease-in-out infinite;
                    /* Suppression de object-position: center top qui causait le décalage */
                }

                @keyframes breathe {
                    0%,
                    100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.05);
                    }
                }

                /* Nœuds */
                .orbit-node {
                    position: absolute;
                    transform: translate(-50%, -50%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    cursor: pointer;
                    z-index: 10;
                    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .orbit-node:hover {
                    transform: translate(-50%, -50%) scale(1.08);
                    z-index: 30;
                }

                .orbit-node-circle {
                    width: clamp(80px, 16vw, 130px);
                    height: clamp(80px, 16vw, 130px);
                    border-radius: 50%;
                    overflow: hidden;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.13),
                        0 0 0 3px rgba(255, 255, 255, 0.9),
                        0 0 0 5px rgba(22, 143, 249, 0.3);
                    transition: box-shadow 0.35s ease;
                }
                .orbit-node:hover .orbit-node-circle {
                    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.2),
                        0 0 0 3px rgba(255, 255, 255, 0.95),
                        0 0 0 8px rgba(22, 143, 249, 0.65);
                }
                .orbit-node-circle img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.5s ease;
                }
                .orbit-node:hover .orbit-node-circle img {
                    transform: scale(1.12);
                }

                .orbit-node-label {
                    font-size: clamp(0.55rem, 1.2vw, 0.72rem);
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: #0f172a;
                    text-align: center;
                    white-space: nowrap;
                    position: relative;
                    transition: color 0.3s;
                }
                .orbit-node:hover .orbit-node-label {
                    color: #168ff9;
                }
                .orbit-node-label::after {
                    content: "";
                    position: absolute;
                    bottom: -5px;
                    left: 50%;
                    width: 24px;
                    height: 2px;
                    background: #168ff9;
                    border-radius: 1px;
                    transform: translateX(-50%) scaleX(0);
                    transition: transform 0.3s ease;
                }
                .orbit-node:hover .orbit-node-label::after {
                    transform: translateX(-50%) scaleX(1);
                }

                /* Mobile */
                @media (max-width: 500px) {
                    .orbit-node-label {
                        white-space: normal;
                        width: 80px;
                        text-align: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default HomeValeurs;
