// import CycleTemplate from '../components/Cycle/CycleTemplate';

// const Primaire = () => {
//   return (
//     <>
//       <header className="header1">
//         <h1 className='inscription-titre'>Primaire</h1>
//       </header>
//       <CycleTemplate
//         // Section 1 : Hero
//         titre1="Primaire"
//         text1="Les fondamentaux de l'éducation avec une approche pédagogique innovante. Notre école primaire accueille les enfants de 6 à 11 ans pour construire les bases solides de leur avenir académique et personnel dans un environnement stimulant et bienveillant."
//         image1="/serv.jpg"

//         // Section 2 : Contenu + Galerie
//         titre2="Construire les bases de demain"
//         text2="Nos enseignants passionnés accompagnent chaque élève dans la maîtrise des savoirs fondamentaux. Lecture, écriture, mathématiques et découverte du monde se conjuguent à l'esprit critique et à la créativité pour former des citoyens engagés."
//         image2="/serv.jpg"
//         image3="/serv.jpg"
//         image4="/serv.jpg"
//         image5="/serv.jpg"
//         textimage3="Lecture et expression"
//         textimage4="Mathématiques ludiques"
//         textimage5="Découverte du monde"
//       />
//       <style jsx>{`
//         .header1 {
//           text-align: center;
//           padding: 130px 70px;
//           font-size: 2rem;
//           font-weight: bold;
//           color: #fff;
//           background-image: url("/serv3.jpg");
//           background-size: cover;
//           background-position: center;
//           background-repeat: no-repeat;
//           clip-path: shape(from 0 0,vline to 100%,curve to 4.17% calc(100% - 15.5px) with 2.78% calc(100% - 15px),curve to 6.94% calc(100% - 9px) with 5.56% calc(100% - 16px),curve to 9.72% calc(100% - 20px) with 8.33% calc(100% - 2px),curve to 12.5% calc(100% - 44px) with 11.11% calc(100% - 38px),curve to 15.28% calc(100% - 27.5px) with 13.89% calc(100% - 50px),curve to 18.06% calc(100% - 20.5px) with 16.67% calc(100% - 5px),curve to 20.83% calc(100% - 23.5px) with 19.44% calc(100% - 36px),curve to 23.61% calc(100% - 10.5px) with 22.22% calc(100% - 11px),curve to 26.39% calc(100% - 5.5px) with 25% calc(100% - 10px),curve to 29.17% calc(100% - 9.5px) with 27.78% calc(100% - 1px),curve to 31.94% calc(100% - 11.5px) with 30.56% calc(100% - 18px),curve to 34.72% calc(100% - 20px) with 33.33% calc(100% - 5px),curve to 37.5% calc(100% - 23px) with 36.11% calc(100% - 35px),curve to 40.28% calc(100% - 28px) with 38.89% calc(100% - 11px),curve to 43.06% calc(100% - 24.5px) with 41.67% calc(100% - 45px),curve to 45.83% calc(100% - 25.5px) with 44.44% calc(100% - 4px),curve to 48.61% calc(100% - 44.5px) with 47.22% calc(100% - 47px),curve to 51.39% calc(100% - 31px) with 50% calc(100% - 42px),curve to 54.17% calc(100% - 26.5px) with 52.78% calc(100% - 20px),curve to 56.94% calc(100% - 23.5px) with 55.56% calc(100% - 33px),curve to 59.72% calc(100% - 13.5px) with 58.33% calc(100% - 14px),curve to 62.5% calc(100% - 26.5px) with 61.11% calc(100% - 13px),curve to 65.28% calc(100% - 41px) with 63.89% calc(100% - 40px),curve to 68.06% calc(100% - 28.5px) with 66.67% calc(100% - 42px),curve to 70.83% calc(100% - 7.5px) with 69.44% calc(100% - 15px),curve to 73.61% calc(100% - 12.5px) with 72.22% calc(100% - 0px),curve to 76.39% calc(100% - 27.5px) with 75% calc(100% - 25px),curve to 79.17% calc(100% - 28px) with 77.78% calc(100% - 30px),curve to 81.94% calc(100% - 27px) with 80.56% calc(100% - 26px),curve to 84.72% calc(100% - 34px) with 83.33% calc(100% - 28px),curve to 87.5% calc(100% - 28px) with 86.11% calc(100% - 40px),curve to 90.28% calc(100% - 31px) with 88.89% calc(100% - 16px),curve to 93.06% calc(100% - 37px) with 91.67% calc(100% - 46px),curve to 95.83% calc(100% - 23.5px) with 94.44% calc(100% - 28px),curve to 100% 100% with 97.22% calc(100% - 19px),vline to 0, hline to 0);
//         }
//         .inscription-titre {
//           text-shadow: 2px 2px 30px #000;
//           font-size: 4rem;
//           font-weight: bold;
//           font-family: "Courier New", Courier, monospace;
//           color: #fff;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Primaire;

// code avec card  et images
// import React from 'react';
// import Temoignages from '../Accueil/Temoignages';
// import HomeGallery from '../Accueil/HomeGallery';
// import {
//   BookOpen,
//   Calculator,
//   Globe,
//   Palette,
//   Microscope,
//   Heart,
//   Code,
//   Music
// } from 'lucide-react';

// const CycleTemplate = ({
//   // Section 1 : Hero (texte droite, image gauche)
//   titre1,
//   text1,
//   image1,

//   // Section 2 : Contenu (titre + texte + galerie 4 images)
//   titre2,
//   text2,
//   image2,
//   image3,
//   image4,
//   image5,
//   textimage3,
//   textimage4,
//   textimage5
// }) => {
//   // Activités adaptées au primaire (6-11 ans)
//   const activitesPrimaire = [
//     {
//       id: 1,
//       titre: 'Lecture & Expression',
//       icone: BookOpen,
//       couleur: '#e76f51',
//       description: 'Ateliers de lecture à voix haute, compréhension de textes, théâtre et expression orale pour développer le langage et l\'imaginaire.'
//     },
//     {
//       id: 2,
//       titre: 'Mathématiques Ludiques',
//       icone: Calculator,
//       couleur: '#2a9d8f',
//       description: 'Découverte des nombres par le jeu, résolution de problèmes concrets, ateliers de logique et défis mathématiques collaboratifs.'
//     },
//     {
//       id: 3,
//       titre: 'Découverte du Monde',
//       icone: Globe,
//       couleur: '#264653',
//       description: 'Exploration des continents, découverte des cultures, sensibilisation à l\'environnement et aux enjeux planétaires.'
//     },
//     {
//       id: 4,
//       titre: 'Arts Créatifs',
//       icone: Palette,
//       couleur: '#f4a261',
//       description: 'Dessin, peinture, modelage et travaux manuels pour développer la créativité et la motricité fine.'
//     },
//     {
//       id: 5,
//       titre: 'Sciences & Expériences',
//       icone: Microscope,
//       couleur: '#606c38',
//       description: 'Ateliers scientifiques, expériences amusantes, découverte du vivant et initiation à la démarche expérimentale.'
//     },
//     {
//       id: 6,
//       titre: 'Sport & Bien-être',
//       icone: Heart,
//       couleur: '#e76f51',
//       description: 'Activités physiques variées, jeux collectifs, yoga enfant pour l\'équilibre corporel et émotionnel.'
//     },
//     {
//       id: 7,
//       titre: 'Initiation Numérique',
//       icone: Code,
//       couleur: '#2a9d8f',
//       description: 'Découverte du code, robotique éducative, utilisation créative des outils numériques en toute sécurité.'
//     },
//     {
//       id: 8,
//       titre: 'Éveil Musical',
//       icone: Music,
//       couleur: '#f4a261',
//       description: 'Chant, percussions, découverte des instruments et expression rythmique pour développer l\'oreille musicale.'
//     }
//   ];

//   return (
//     <div className="cycle-template">
//       {/* Section 1 : Hero - Image gauche, Texte droite */}
//       <section className="cycle-hero">
//         <div className="cycle-hero-container">
//           <div className="cycle-hero-image-wrapper">
//             <div className="cycle-hero-image">
//               <img src={image1} alt={titre1} />
//             </div>
//             {/* <div className="cycle-hero-badge">
//               <span>Cycle {titre1}</span>
//             </div> */}
//           </div>
//           <div className="cycle-hero-content">
//             <span className="cycle-hero-label">Découvrez notre</span>
//             <h1 className="cycle-hero-title">{titre1}</h1>
//             <div className="cycle-hero-line" />
//             <p className="cycle-hero-text">{text1}</p>
//             <a href="/aboutUs" className="cycle-hero-btn">
//               À propos de nous
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M5 12h14M12 5l7 7-7 7" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Section 2 : Contenu + Galerie */}
//       <section className="cycle-content">
//         <div className="cycle-content-container">
//           {/* En-tête */}
//           <div className="cycle-content-header">
//             <span className="cycle-content-label">Notre approche</span>
//             <h2 className="cycle-content-title">{titre2}</h2>
//             <div className="cycle-content-line" />
//             <p className="cycle-content-text">{text2}</p>
//           </div>

//           {/* SECTION ACTIVITÉS AJOUTÉE - ENTRE LE PARAGRAPHE ET LA GALERIE */}
//           <div className="cycle-activites">
//             <div className="activites-header">
//               <span className="activites-label">Notre Programme</span>
//               <h3 className="activites-title">Activités Pédagogiques</h3>
//               <p className="activites-intro">
//                 Un apprentissage diversifié pour éveiller la curiosité et révéler les talents de chaque enfant
//               </p>
//             </div>

//             <div className="activites-grille">
//               {activitesPrimaire.map((activite) => {
//                 const Icone = activite.icone;
//                 return (
//                   <article
//                     key={activite.id}
//                     className="activite-carte"
//                     style={{ '--couleur': activite.couleur }}
//                   >
//                     <div className="activite-icone">
//                       <Icone size={32} strokeWidth={1.5} />
//                     </div>

//                     <h4 className="activite-titre">{activite.titre}</h4>

//                     <div className="activite-separateur" />

//                     <p className="activite-description">
//                       {activite.description}
//                     </p>

//                     <div className="activite-point" />
//                   </article>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Galerie 4 images */}
//           <div className="cycle-gallery">
//             {/* Image 2 (grande, sans texte sous) */}
//             <div className="cycle-gallery-item cycle-gallery-item--large">
//               <div className="cycle-gallery-image">
//                 <img src={image2} alt="Image principale" />
//                 <div className="cycle-gallery-overlay" />
//               </div>
//             </div>

//             {/* 3 images avec légendes */}
//             <div className="cycle-gallery-item">
//               <div className="cycle-gallery-image">
//                 <img src={image3} alt={textimage3} />
//               </div>
//               <div className="cycle-gallery-caption">
//                 <span className="caption-number">01</span>
//                 <span className="caption-text">{textimage3}</span>
//               </div>
//             </div>

//             <div className="cycle-gallery-item">
//               <div className="cycle-gallery-image">
//                 <img src={image4} alt={textimage4} />
//               </div>
//               <div className="cycle-gallery-caption">
//                 <span className="caption-number">02</span>
//                 <span className="caption-text">{textimage4}</span>
//               </div>
//             </div>

//             <div className="cycle-gallery-item">
//               <div className="cycle-gallery-image">
//                 <img src={image5} alt={textimage5} />
//               </div>
//               <div className="cycle-gallery-caption">
//                 <span className="caption-number">03</span>
//                 <span className="caption-text">{textimage5}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//         <HomeGallery />
//         <Temoignages />

//       <style jsx>{`
//         .cycle-template {
//           font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
//         }

//         /* Section Hero */
//         .cycle-hero {
//           padding: 100px 24px;
//           position: relative;
//           overflow: hidden;
//         }

//         .cycle-hero::before {
//           content: '';
//           position: absolute;
//           top: -50%;
//           right: -20%;
//           width: 600px;
//           height: 600px;
//           background: radial-gradient(circle, rgba(255, 149, 44, 0.08) 0%, transparent 70%);
//           pointer-events: none;
//         }

//         .cycle-hero-container {
//           max-width: 1200px;
//           margin: 0 auto;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 80px;
//           align-items: center;
//           position: relative;
//           z-index: 1;
//         }

//         .cycle-hero-image-wrapper {
//           position: relative;
//         }

//         .cycle-hero-image {
//           border-radius: 4px;
//           overflow: hidden;
//           box-shadow:
//             0 25px 50px -12px rgba(0, 0, 0, 0.15),
//             0 0 0 1px rgba(255, 255, 255, 0.5) inset;
//           position: relative;
//         }

//         .cycle-hero-image::after {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           height: 30%;
//           background: linear-gradient(to top, rgba(0,0,0,0.2), transparent);
//           pointer-events: none;
//         }

//         .cycle-hero-image img {
//           width: 100%;
//           height: 500px;
//           object-fit: cover;
//           display: block;
//         }

//         .cycle-hero-badge {
//           position: absolute;
//           bottom: -20px;
//           right: 30px;
//           background: linear-gradient(135deg, #ff952c 0%, #ff7b1c 100%);
//           color: white;
//           padding: 16px 28px;
//           border-radius: 50px;
//           font-size: 0.9rem;
//           font-weight: 600;
//           box-shadow: 0 10px 30px rgba(255, 149, 44, 0.3);
//         }

//         .cycle-hero-content {
//           padding: 20px 0;
//         }

//         .cycle-hero-label {
//           display: inline-block;
//           font-size: 0.85rem;
//           font-weight: 600;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: #ff952c;
//           margin-bottom: 20px;
//         }

//         .cycle-hero-title {
//           font-family: Georgia, 'Times New Roman', serif;
//           font-size: 3.2rem;
//           color: #1a1a2e;
//           margin: 0 0 20px 0;
//           line-height: 1.1;
//           font-weight: 700;
//         }

//         .cycle-hero-line {
//           width: 60px;
//           height: 4px;
//           background: linear-gradient(90deg, #f97316, #1e3a8a);
//           border-radius: 2px;
//           margin-bottom: 24px;
//         }

//         .cycle-hero-text {
//           font-size: 1.15rem;
//           line-height: 1.9;
//           color: #4a5568;
//           margin: 0 0 32px 0;
//         }

//         .cycle-hero-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 12px;
//           padding: 16px 32px;
//           background: linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%);
//           color: white;
//           text-decoration: none;
//           border-radius: 50px;
//           font-weight: 600;
//           font-size: 1rem;
//           transition: all 0.3s ease;
//           box-shadow: 0 10px 30px rgba(26, 26, 46, 0.2);
//         }

//         .cycle-hero-btn:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 15px 40px rgba(26, 26, 46, 0.3);
//         }

//         /* Section Content */
//         .cycle-content {
//           padding: 100px 24px;
//           background: #ffffff;
//           position: relative;
//         }

//         .cycle-content::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 1px;
//           background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
//         }

//         .cycle-content-container {
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         .cycle-content-header {
//           text-align: center;
//           max-width: 800px;
//           margin: 0 auto 80px;
//         }

//         .cycle-content-label {
//           display: inline-block;
//           font-size: 0.8rem;
//           font-weight: 600;
//           letter-spacing: 0.15em;
//           text-transform: uppercase;
//           color: #ff952c;
//           margin-bottom: 16px;
//           padding: 8px 16px;
//           border-radius: 20px;
//         }

//         .cycle-content-title {
//           font-family: Georgia, 'Times New Roman', serif;
//           font-size: 2.4rem;
//           color: #1a1a2e;
//           margin: 0 0 16px 0;
//           font-weight: 700;
//         }

//         .cycle-content-line {
//           width: 50px;
//           height: 3px;
//           background: linear-gradient(90deg, #f97316, #1e3a8a);
//           border-radius: 2px;
//           margin: 0 auto 24px;
//         }

//         .cycle-content-text {
//           font-size: 1.1rem;
//           line-height: 1.9;
//           color: #4a5568;
//           margin: 0;
//         }

//         /* Section Activités ajoutée */
//         .cycle-activites {
//           margin: 60px 0 80px 0;
//           padding: 40px 0;
//           background: #faf9f8;
//           border-radius: 4px;
//         }

//         .activites-header {
//           text-align: center;
//           margin-bottom: 50px;
//         }

//         .activites-label {
//           display: block;
//           font-size: 0.75rem;
//           font-weight: 600;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: #ff952c;
//           margin-bottom: 12px;
//         }

//         .activites-title {
//           font-family: Georgia, 'Times New Roman', serif;
//           font-size: 1.8rem;
//           color: #1a1a2e;
//           margin: 0 0 12px 0;
//           font-weight: 700;
//         }

//         .activites-intro {
//           font-size: 0.95rem;
//           color: #4a5568;
//           margin: 0;
//           max-width: 600px;
//           margin: 0 auto;
//         }

//         .activites-grille {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 24px;
//           padding: 0 20px;
//         }

//         .activite-carte {
//           position: relative;
//           border-radius: 4px;
//           padding: 30px 20px;
//           text-align: center;
//           border: 1px solid #e7e5e4;
//           background: #ffffff;
//           transition: all 0.25s ease;
//         }

//         .activite-carte::before {
//           content: '';
//           position: absolute;
//           top: -1px;
//           right: -1px;
//           width: 20px;
//           height: 20px;
//           background: #ffffffff;
//           border-bottom: 1px solid #e7e5e4;
//           border-left: 1px solid #e7e5e4;
//           border-radius: 0 0 0 4px;
//         }

//         .activite-carte:hover {
//           border-color: var(--couleur);
//           transform: translateY(-4px);
//           box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.08);
//         }

//         .activite-icone {
//           width: 56px;
//           height: 56px;
//           margin: 0 auto 20px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: var(--couleur);
//           background: #fafaf9;
//           border-radius: 50%;
//           border: 1px solid #e7e5e4;
//           transition: all 0.25s ease;
//         }

//         .activite-carte:hover .activite-icone {
//           background: var(--couleur);
//           color: #ffffff;
//           border-color: var(--couleur);
//         }

//         .activite-titre {
//           font-size: 1rem;
//           color: #1a1a2e;
//           margin: 0 0 12px 0;
//           font-weight: 600;
//         }

//         .activite-separateur {
//           width: 25px;
//           height: 2px;
//           background: var(--couleur);
//           margin: 0 auto 15px;
//           opacity: 0.6;
//           transition: width 0.25s ease;
//         }

//         .activite-carte:hover .activite-separateur {
//           width: 40px;
//           opacity: 1;
//         }

//         .activite-description {
//           font-size: 0.85rem;
//           line-height: 1.6;
//           color: #4a5568;
//           margin: 0;
//         }

//         .activite-point {
//           position: absolute;
//           bottom: 12px;
//           right: 12px;
//           width: 5px;
//           height: 5px;
//           background: var(--couleur);
//           border-radius: 50%;
//           opacity: 0;
//           transition: opacity 0.25s ease;
//         }

//         .activite-carte:hover .activite-point {
//           opacity: 0.4;
//         }

//         /* Galerie */
//         .cycle-gallery {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           grid-template-rows: repeat(2, 1fr);
//           gap: 24px;
//         }

//         .cycle-gallery-item {
//           display: flex;
//           flex-direction: column;
//           gap: 16px;
//         }

//         .cycle-gallery-item--large {
//           grid-row: span 2;
//           grid-column: span 2;
//         }

//         .cycle-gallery-image {
//           border-radius: 4px;
//           overflow: hidden;
//           flex: 1;
//           position: relative;
//           min-height: 200px;
//           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
//         }

//         .cycle-gallery-item--large .cycle-gallery-image {
//           min-height: 100%;
//         }

//         .cycle-gallery-image img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//           transition: transform 0.5s ease;
//         }

//         .cycle-gallery-image:hover img {
//           transform: scale(1.05);
//         }

//         .cycle-gallery-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(135deg, rgba(255, 149, 44, 0.1) 0%, transparent 50%);
//           pointer-events: none;
//         }

//         .cycle-gallery-caption {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           padding: 0 8px;
//         }

//         .caption-number {
//           width: 32px;
//           height: 32px;
//           border-radius: 50%;
//           background: linear-gradient(135deg, #ff952c 0%, #ff7b1c 100%);
//           color: white;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 0.8rem;
//           font-weight: 700;
//           flex-shrink: 0;
//         }

//         .caption-text {
//           font-size: 1rem;
//           color: #1a1a2e;
//           font-weight: 500;
//         }

//         /* Responsive */
//         @media (max-width: 1100px) {
//           .activites-grille {
//             grid-template-columns: repeat(3, 1fr);
//             gap: 20px;
//           }
//         }

//         @media (max-width: 968px) {
//           .cycle-hero {
//             padding: 60px 24px;
//           }

//           .cycle-hero-container {
//             grid-template-columns: 1fr;
//             gap: 50px;
//           }

//           .cycle-hero-image {
//             order: -1;
//           }

//           .cycle-hero-image img {
//             height: 350px;
//           }

//           .cycle-hero-badge {
//             bottom: -15px;
//             right: 20px;
//             padding: 12px 20px;
//             font-size: 0.85rem;
//           }

//           .cycle-hero-title {
//             font-size: 2.4rem;
//           }

//           .cycle-gallery {
//             grid-template-columns: repeat(2, 1fr);
//             grid-template-rows: auto;
//           }

//           .cycle-gallery-item--large {
//             grid-row: span 1;
//             grid-column: span 2;
//           }

//           .cycle-gallery-item--large .cycle-gallery-image {
//             min-height: 300px;
//           }

//           .activites-grille {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         @media (max-width: 640px) {
//           .cycle-hero-title {
//             font-size: 2rem;
//           }

//           .cycle-content-title {
//             font-size: 1.8rem;
//           }

//           .cycle-gallery {
//             grid-template-columns: 1fr;
//           }

//           .cycle-gallery-item--large {
//             grid-column: span 1;
//           }

//           .cycle-gallery-item--large .cycle-gallery-image {
//             min-height: 250px;
//           }

//           .cycle-hero-btn {
//             width: 100%;
//             justify-content: center;
//           }

//           .activites-grille {
//             grid-template-columns: 1fr;
//           }

//           .cycle-activites {
//             margin: 40px 0 60px 0;
//             padding: 30px 0;
//           }

//           .activites-title {
//             font-size: 1.5rem;
//           }

//           .cycle-hero{
//             padding: 100px 24px;
//             position: relative;

//             bottom: 0;
//             left: 0;
//             right: 0;
//             height: 30%;
//             background: linear-gradient(to top, rgbaa(0,0,0,0.2), transparent);
//             pointer-events: none;
//             width: 100%;
//             height: 500px;
//             object-fit: cover;
//             display: block;

//             }
//             .cycle-hero{
//             bottom: 0;
//             left: 0;
//             right: 0;
//             height: 30%;
//             background: linear-gradient(to top, rgbaa(0,0,0,0.2), transparent);
//             pointer-events: none;
//             width: 100%;
//             height: 500px;
//             object-fit: cover;
//             display: block;
//             }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CycleTemplate;

// code simple  sans card
// import CycleTemplate from '../components/Cycle/CycleTemplate';

// const Primaire = () => {
//   return (
//     <>
//       <header className="header1">
//         <div className="header-overlay"></div>
//         <h1 className='inscription-titre'>Primaire</h1>
//       </header>
//       <CycleTemplate
//         // Section 1 : Hero
//         titre1="Primaire"
//         text1="Les fondamentaux de l'éducation avec une approche pédagogique innovante. Notre école primaire accueille les enfants de 6 à 11 ans pour construire les bases solides de leur avenir académique et personnel dans un environnement stimulant et bienveillant."
//         image1="/CE2.jpg"

//         // Section 2 : Contenu + Galerie
//         titre2="Construire les bases de demain"
//         text2="Nos enseignants passionnés accompagnent chaque élève dans la maîtrise des savoirs fondamentaux. Lecture, écriture, mathématiques et découverte du monde se conjuguent à l'esprit critique et à la créativité pour former des citoyens engagés."
//         image2="/serv.jpg"
//         image3="/serv.jpg"
//         image4="/serv.jpg"
//         image5="/serv.jpg"
//         textimage3="Lecture et expression"
//         textimage4="Mathématiques ludiques"
//         textimage5="Découverte du monde"
//       />
//       <style jsx>{`
//         .header1 {
//           /* ===== CONTENEUR PRINCIPAL ===== */
//           position: relative;
//           text-align: center;
//           padding: 200px 70px;
//           font-size: 2rem;
//           font-weight: bold;
//           color: #fff;
//           background-image: url("/openb.jpg");
//           background-size: cover;
//           background-position: center 30%; /* Ajuste la position pour mieux cadrer l'image */
//           background-repeat: no-repeat;
//           background-attachment: fixed;

//           /* Ligne droite */
//           clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

//           /* Pour que le contenu soit au-dessus de l'overlay */
//           z-index: 1;

//           /* Amélioration de la qualité d'image */
//           image-rendering: -webkit-optimize-contrast;
//           image-rendering: crisp-edges;
//         }

//         /* Superposition plus forte pour améliorer la lisibilité du texte */
//         .header-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: linear-gradient(
//             135deg,
//             rgba(0, 0, 0, 0.55) 0%,
//             rgba(0, 0, 0, 0.45) 50%,
//             rgba(0, 0, 0, 0.55) 100%
//           );
//           z-index: 1;
//         }

//         .inscription-titre {
//           /* ===== TITRE AVEC POLICE CLAIRE ===== */
//           position: relative;
//           z-index: 2;
//           text-shadow: 3px 3px 20px rgba(0, 0, 0, 0.6);
//           font-size: 5rem;
//           font-weight: 800;
//           font-family: 'Poppins', 'Montserrat', 'Segoe UI', sans-serif;
//           color: #fff;
//           letter-spacing: 3px;
//           margin: 0;
//           display: inline-block;
//           animation: fadeInUp 0.8s ease-out;
//           background: linear-gradient(135deg, #fff, #f0f0f0);
//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;
//           text-shadow: none;
//         }

//         /* Alternative avec couleur blanche simple si le dégradé ne fonctionne pas */
//         .inscription-titre-simple {
//           color: #fff;
//           text-shadow: 3px 3px 20px rgba(0, 0, 0, 0.6);
//         }

//         /* Animation pour le titre */
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         /* Ajout d'un effet de brillance au titre */
//         .inscription-titre::after {
//           content: '';
//           position: absolute;
//           bottom: -15px;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 80px;
//           height: 3px;
//           background: linear-gradient(90deg, transparent, #ffa500, #ff6b35, transparent);
//           border-radius: 3px;
//           animation: fadeInUp 0.8s ease-out 0.3s both;
//         }

//         /* Version responsive pour mobile */
//         @media (max-width: 992px) {
//           .header1 {
//             padding: 150px 50px;
//           }

//           .inscription-titre {
//             font-size: 3.8rem;
//             letter-spacing: 2px;
//           }
//         }

//         @media (max-width: 768px) {
//           .header1 {
//             padding: 120px 40px;
//             background-position: center 40%;
//           }

//           .inscription-titre {
//             font-size: 2.8rem;
//             letter-spacing: 1px;
//           }

//           .inscription-titre::after {
//             width: 60px;
//             bottom: -12px;
//           }
//         }

//         @media (max-width: 576px) {
//           .header1 {
//             padding: 100px 20px;
//             background-position: center 35%;
//           }

//           .inscription-titre {
//             font-size: 2.2rem;
//           }

//           .inscription-titre::after {
//             width: 50px;
//             bottom: -10px;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Primaire;

import CycleTemplate from "../components/Cycle/CycleTemplate";
import ActivitesPrimaire from "../components/Primaire/ActivitesPrimaire";

const Primaire = () => {
    return (
        <>
            <header className="header1">
                <div className="header-overlay"></div>
                <h1 className="inscription-titre">Primaire</h1>
            </header>

            <CycleTemplate
                // Section 1 : Hero
                titre1="Primaire"
                text1="Les fondamentaux de l'éducation avec une approche pédagogique innovante. Notre école primaire accueille les enfants de 6 à 11 ans pour construire les bases solides de leur avenir académique et personnel dans un environnement stimulant et bienveillant."
                image1="/CE2.jpg"
                // Section 2 : Contenu (sans galerie)
                titre2="Construire les bases de demain"
                text2="Nos enseignants passionnés accompagnent chaque élève dans la maîtrise des savoirs fondamentaux. Lecture, écriture, mathématiques et découverte du monde se conjuguent à l'esprit critique et à la créativité pour former des citoyens engagés."
                // Activités insérées entre le texte et HomeGallery
                activitesComponent={<ActivitesPrimaire />}
            />

            <style jsx>{`
                .header1 {
                    position: relative;
                    text-align: center;
                    padding: 200px 70px;
                    font-size: 2rem;
                    font-weight: bold;
                    color: #fff;
                    background-image: url("/primprim2.jpg");
                    background-size: cover;
                    background-position: center 30%;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                    z-index: 1;
                    image-rendering: -webkit-optimize-contrast;
                    image-rendering: crisp-edges;
                }

                .header-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(
                        135deg,
                        rgba(0, 0, 0, 0.55) 0%,
                        rgba(0, 0, 0, 0.45) 50%,
                        rgba(0, 0, 0, 0.55) 100%
                    );
                    z-index: 1;
                }

                .inscription-titre {
                    position: relative;
                    z-index: 2;
                    text-shadow: 3px 3px 20px rgba(0, 0, 0, 0.6);
                    font-size: 5rem;
                    font-weight: 800;
                    font-family: "Poppins", "Montserrat", "Segoe UI", sans-serif;
                    color: #fff;
                    letter-spacing: 3px;
                    margin: 0;
                    display: inline-block;
                    animation: fadeInUp 0.8s ease-out;
                    background: linear-gradient(135deg, #fff, #f0f0f0);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    text-shadow: none;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                // .inscription-titre::after {
                //     content: "";
                //     position: absolute;
                //     bottom: -15px;
                //     left: 50%;
                //     transform: translateX(-50%);
                //     width: 80px;
                //     height: 3px;
                //     background: linear-gradient(
                //         90deg,
                //         transparent,
                //         #ffa500,
                //         #ff6b35,
                //         transparent
                //     );
                //     border-radius: 3px;
                //     animation: fadeInUp 0.8s ease-out 0.3s both;
                // }

                @media (max-width: 992px) {
                    .header1 {
                        padding: 150px 50px;
                    }

                    .inscription-titre {
                        font-size: 3.8rem;
                        letter-spacing: 2px;
                    }
                }

                @media (max-width: 768px) {
                    .header1 {
                        padding: 120px 40px;
                        background-position: center 40%;
                    }

                    .inscription-titre {
                        font-size: 2.8rem;
                        letter-spacing: 1px;
                    }

                    .inscription-titre::after {
                        width: 60px;
                        bottom: -12px;
                    }
                }

                @media (max-width: 576px) {
                    .header1 {
                        padding: 100px 20px;
                        background-position: center 35%;
                    }

                    .inscription-titre {
                        font-size: 2.2rem;
                    }

                    .inscription-titre::after {
                        width: 50px;
                        bottom: -10px;
                    }
                }
            `}</style>
        </>
    );
};

export default Primaire;
