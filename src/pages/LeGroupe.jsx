// import React, { useState } from "react";
// import Temoignages from "../components/Accueil/Temoignages";
// import HomeGallery from "../components/Accueil/HomeGallery";
// import ContactPopup from "../components/Accueil/ContactPopup";

// function LeGroupe() {
//   const [isContactOpen, setIsContactOpen] = useState(false);

//   return (
//     <div>
//  <header className="header1">
//             <h1 className='inscription-titre'>Le Groupe Scolaire L'Atome</h1>
//         </header>


//         <section className="about-section">
//       <div className="about-container">
//         {/* Partie Gauche : Image */}
//         <div className="about-image-wrapper">
//           <img src="/Learning-rafiki.png" alt="Groupe Scolaire L'Atome" />
//         </div>

//         {/* Partie Droite : Contenu */}
//         <div className="about-content">
//           <h1>Un projet éducatif ambitieux, une communauté engagée</h1>
          
//           <p>
//   Situé à <strong>Lissasfa à Casablanca</strong>, le <strong>Groupe Scolaire l'Atome</strong> est un établissement éducatif engagé dans la réussite et l’épanouissement des élèves. Grâce à une approche pédagogique moderne et un encadrement de qualité, l’école accompagne les enfants dès la <strong>maternelle jusqu’au secondaire</strong> dans un environnement structuré, sécurisé et propice à l’apprentissage.
// </p>

// <p>
//   Le <strong>Groupe Scolaire l'Atome à Lissasfa</strong> met l’accent sur un enseignement rigoureux, l’apprentissage des langues et le développement des compétences essentielles du XXIe siècle. À travers un <strong>suivi pédagogique personnalisé</strong> et des activités éducatives variées, l’établissement prépare chaque élève à réussir son parcours scolaire tout en cultivant les valeurs de <strong>respect, responsabilité et ouverture</strong>.
// </p>
          
//           <div className="about-cta">
//             <p>Des questions ? </p>
//             <button className="btn-contact" onClick={() => setIsContactOpen(true)}>Contactez-nous</button>
//           </div>
//         </div>
//       </div>
//     </section>





//      <section className="about-section2">
//       <div className="about-container">
//         {/* Partie Gauche : Image */}
//         <div className="about-image-wrapper2">
//           <img src="/college.jpg" alt="Groupe Scolaire L'Atome" />
//         </div>

//         {/* Partie Droite : Contenu */}
//         <div className="about-content2">
//           <h1>Une équipe aux valeurs partagées</h1>
//           <p>
// Le projet éducatif du Monceau repose sur l’implication de femmes et d’hommes de terrain: fondateurs, directions d’établissements, coordinateurs pédagogiques, enseignants, éducateurs, personnels de vie scolaire et administratifs.
// Tous œuvrent ensemble, avec rigueur et bienveillance, pour accompagner chaque élève dans sa singularité et son potentiel
// </p>          
//           <div className="about-cta2">
//             <button className="equipe-btn">L’équipe dirigeante</button>
//           </div>
//         </div>
//       </div>
//     </section>
//         <HomeGallery />
//         <Temoignages />
//         <ContactPopup
//         isOpen={isContactOpen}
//         onClose={() => setIsContactOpen(false)}
//       />






// <style jsx>{`

// //       .header1{
// //   text-align: center;
// //   padding: 130px  70px;
// //   font-size: 2rem;
// //   font-weight: bold;
// //   color: #fff;
// // //   background: #780000;
// //   background-image: url("/serv3.jpg");
// //   background-size: cover;
// //   background-position: center;
// //   background-repeat: no-repeat;
// //   clip-path: shape(from 0 0,vline to 100%,curve to 4.17% calc(100% - 15.5px) with 2.78% calc(100% - 15px),curve to 6.94% calc(100% - 9px) with 5.56% calc(100% - 16px),curve to 9.72% calc(100% - 20px) with 8.33% calc(100% - 2px),curve to 12.5% calc(100% - 44px) with 11.11% calc(100% - 38px),curve to 15.28% calc(100% - 27.5px) with 13.89% calc(100% - 50px),curve to 18.06% calc(100% - 20.5px) with 16.67% calc(100% - 5px),curve to 20.83% calc(100% - 23.5px) with 19.44% calc(100% - 36px),curve to 23.61% calc(100% - 10.5px) with 22.22% calc(100% - 11px),curve to 26.39% calc(100% - 5.5px) with 25% calc(100% - 10px),curve to 29.17% calc(100% - 9.5px) with 27.78% calc(100% - 1px),curve to 31.94% calc(100% - 11.5px) with 30.56% calc(100% - 18px),curve to 34.72% calc(100% - 20px) with 33.33% calc(100% - 5px),curve to 37.5% calc(100% - 23px) with 36.11% calc(100% - 35px),curve to 40.28% calc(100% - 28px) with 38.89% calc(100% - 11px),curve to 43.06% calc(100% - 24.5px) with 41.67% calc(100% - 45px),curve to 45.83% calc(100% - 25.5px) with 44.44% calc(100% - 4px),curve to 48.61% calc(100% - 44.5px) with 47.22% calc(100% - 47px),curve to 51.39% calc(100% - 31px) with 50% calc(100% - 42px),curve to 54.17% calc(100% - 26.5px) with 52.78% calc(100% - 20px),curve to 56.94% calc(100% - 23.5px) with 55.56% calc(100% - 33px),curve to 59.72% calc(100% - 13.5px) with 58.33% calc(100% - 14px),curve to 62.5% calc(100% - 26.5px) with 61.11% calc(100% - 13px),curve to 65.28% calc(100% - 41px) with 63.89% calc(100% - 40px),curve to 68.06% calc(100% - 28.5px) with 66.67% calc(100% - 42px),curve to 70.83% calc(100% - 7.5px) with 69.44% calc(100% - 15px),curve to 73.61% calc(100% - 12.5px) with 72.22% calc(100% - 0px),curve to 76.39% calc(100% - 27.5px) with 75% calc(100% - 25px),curve to 79.17% calc(100% - 28px) with 77.78% calc(100% - 30px),curve to 81.94% calc(100% - 27px) with 80.56% calc(100% - 26px),curve to 84.72% calc(100% - 34px) with 83.33% calc(100% - 28px),curve to 87.5% calc(100% - 28px) with 86.11% calc(100% - 40px),curve to 90.28% calc(100% - 31px) with 88.89% calc(100% - 16px),curve to 93.06% calc(100% - 37px) with 91.67% calc(100% - 46px),curve to 95.83% calc(100% - 23.5px) with 94.44% calc(100% - 28px),curve to 100% 100% with 97.22% calc(100% - 19px),vline to 0, hline to 0);
// // }
// .header1 {
//   text-align: center;
//   padding: 130px 70px;
//   font-size: 2rem;
//   font-weight: bold;
//   color: #fff;
//   background-image: url("/serv3.jpg");
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);  /* Rectangle simple */
// }
//   .inscription-titre{
//     text-shadow: 2px 2px 30px #000;
//     font-size: 4rem;
//     font-weight: bold;
//     font-family: "Courier New", Courier, monospace;
//     color: #fff;
//   }






// /* --- Conteneur Principal --- */
// .about-section2 {
//   padding: 80px 20px;
//   background-color: #f9fafb; /* Gris très clair pour différencier du blanc */
//   color: #333;
// }

// .about-container2 {
//   max-width: 1200px;
//   margin: 0 auto;
//   display: flex;
//     font-family: "Trebuchet MS", Helvetica, sans-serif;

//   align-items: center; /* Centre verticalement image et texte */
//   gap: 60px; /* Espace entre l'image et le contenu */
// }

// /* --- Partie Image (Gauche) --- */
// .about-image-wrapper2 {
//   flex: 1; /* Prend 50% de l'espace disponible */
//   display: flex;
//   justify-content: center;
// }

// .about-image-wrapper2 img {
//   max-width: 100%;
//   height: auto;
// //   border-radius: 12px; /* Coins arrondis modernes */
// border-radius: 51% 49% 77% 23% / 41% 26% 74% 59%;
//   object-fit: cover;
// }

// /* --- Partie Contenu (Droite) --- */
// .about-content2 {
//   flex: 1;
// }

// .about-content2 h1 {
//   font-size: 2.5rem;
//   font-weight: 700;
//   margin-bottom: 24px;
//   color: #1a1a1a;
//   line-height: 1.2;
//       font-family: "Trebuchet MS", Helvetica, sans-serif;

// }

// .about-content2 p {
//   font-size: 1.1rem;
//   line-height: 1.8; /* Meilleure lisibilité */
//   color: #555;
//   margin-bottom: 32px;
//   text-align: justify; /* Optionnel : pour un bloc de texte propre */
//       font-family: "Trebuchet MS", Helvetica, sans-serif;

// }

// /* --- Bouton CTA --- */
// .about-cta2 {
//   display: flex;
// }

// .equipe-btn {
//   padding: 14px 32px;
//   font-size: 1rem;
//   font-weight: 600;
//   color: #ffffff;
//   background-color: #2563eb; /* Bleu moderne */
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
// }

// .equipe-btn:hover {
//   background-color: #1d4ed8; /* Bleu plus foncé au survol */
//   transform: translateY(-2px); /* Léger effet de soulèvement */
//   box-shadow: 0 6px 12px rgba(37, 99, 235, 0.3);
// }

// /* --- Responsive (Mobile & Tablette) --- */
// @media (max-width: 992px) {
//   .about-container2 {
//     flex-direction: column; /* Empile les éléments verticalement */
//     gap: 40px;
//     text-align: center; /* Centre le texte sur mobile */
//   }

//   .about-content2 p {
//     text-align: left; /* Garde le texte aligné à gauche pour la lecture */
//   }

//   .about-cta2 {
//     justify-content: center; /* Centre le bouton */
//   }

//   .about-content2 h1 {
//     font-size: 2rem;
//   }
// }

// @media (max-width: 576px) {
//   .about-section2 {
//     padding: 40px 16px;
//   }

//   .about-content2 h1 {
//     font-size: 1.75rem;
//   }

//   .about-content2 p {
//     font-size: 1rem;
//   }

//   .equipe-btn {
//     width: 100%; /* Bouton pleine largeur sur très petits écrans */
//   }
// }









//   /* Section principale avec fond */
// .about-section {
//       background-image: linear-gradient(to right, rgb(255, 180, 83), #ffa600da, #ee721f);

//   padding: 4rem 2rem;
//   width: 73%;
//   margin: 20px auto;
//   border-radius: 10px;
//   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
//   font-family: "Trebuchet MS", Helvetica, sans-serif;
// }


// /* Conteneur Flexbox pour la mise en page Gauche/Droite */
// .about-container {
//   display: flex;
//   flex-direction: row; /* Image à gauche, texte à droite */
//   align-items: center; /* Centrer verticalement */
//   justify-content: center;
//   max-width: 1100px;
//   margin: 0 auto;
//   gap: 3rem; /* Espace entre l'image et le texte */
// }

// /* Styles pour l'image */
// .about-image-wrapper {
//   flex: 1; /* Prend 50% de l'espace disponible */
//   max-width: 500px;
// }

// .about-image-wrapper img {
//   width: 100%;
//   object-fit: cover;
// }

// /* Styles pour le contenu texte */
// .about-content {
//   flex: 1; /* Prend 50% de l'espace disponible */
//   color: #333;
//   line-height: 1.6;
// }

// .about-content h1 {
//   font-size: 2.4rem;
//   margin-bottom: 1.9rem;
//   color: #ffffffff;
//   font-weight: 700;  
//   -webkit-text-stroke: 2px #004494;
//   text-stroke: 2px #004494; 
// }

// .about-content p {
//   margin-bottom: 1rem;
//   font-size: 1rem;
//   color: #000;
// }

// /* Zone du bouton */
// .about-cta {
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   margin-top: 1.5rem;
// }

// .about-cta p {
//   margin: 0;
//   font-weight: 500;
// }

// /* Style du bouton */
// .btn-contact {
//   background-color: transparent;
//   color: #2566b2ff;
//   border: none;
//   padding: 0px;
//   cursor: pointer;
//   transition: color 0.3s ease;
//   margin: 0;
//   font-size: 1rem;
//   font-weight: 500;
//   font-family: "Trebuchet MS", Helvetica, sans-serif;
// }

// .btn-contact:hover {
//   color: #004494;
//   text-decoration: underline;
//   text-underline-offset: 4px;

// }

// /* Responsive : Sur mobile, on empile verticalement */
// @media (max-width: 768px) {
//   .about-container {
//     flex-direction: column; /* Image au dessus, texte en dessous */
//     gap: 2rem;
//   }

//   .about-image-wrapper {
//     max-width: 100%;
//   }

//   .about-cta {
//     flex-direction: column;
//     align-items: flex-start;
//   }
// }
//       `}</style>
//     </div>


//   );
// }


// export default LeGroupe;




import React, { useState } from "react";
import Temoignages from "../components/Accueil/Temoignages";
import HomeGallery from "../components/Accueil/HomeGallery";
import ContactPopup from "../components/Accueil/ContactPopup";

function LeGroupe() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div>
      {/* Hero Section améliorée */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <img src="/grsco2.jpg" alt="Groupe Scolaire L'Atome" className="hero-image" />
        <div className="hero-content">
          <div className="hero-badge">Bienvenue</div>
          <h1 className="hero-title">
            Groupe Scolaire<br />
            <span className="hero-title-accent">L'Atome</span>
          </h1>
          <p className="hero-subtitle">Former les esprits de demain, aujourd'hui à L'Atome</p>
          <div className="hero-divider"></div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">4</span>
              <span className="stat-label">Cycles</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="stat-number">+15</span>
              <span className="stat-label">Années</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Engagés</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </div>

      <section className="about-section">
        <div className="about-container">
          <div className="about-image-wrapper">
            <img src="/Learning-rafiki.png" alt="Groupe Scolaire L'Atome" />
          </div>
          <div className="about-content">
            <h1>Un projet éducatif ambitieux, une communauté engagée</h1>
            <p>
              Situé à <strong>Lissasfa à Casablanca</strong>, le <strong>Groupe Scolaire L'Atome</strong> est un établissement éducatif engagé dans la réussite et l'épanouissement des élèves. Grâce à une approche pédagogique moderne et un encadrement de qualité, l'école accompagne les enfants dès la <strong>maternelle jusqu'au secondaire</strong> dans un environnement structuré, sécurisé et propice à l'apprentissage.
            </p>
            <p>
              Le <strong>Groupe Scolaire L'Atome à Lissasfa</strong> met l'accent sur un enseignement rigoureux, l'apprentissage des langues et le développement des compétences essentielles du XXIe siècle. À travers un <strong>suivi pédagogique personnalisé</strong> et des activités éducatives variées, l'établissement prépare chaque élève à réussir son parcours scolaire tout en cultivant les valeurs de <strong>respect, responsabilité et ouverture</strong>.
            </p>
            <div className="about-cta">
              <p>Des questions ?</p>
              <button className="btn-contact" onClick={() => setIsContactOpen(true)}>Contactez-nous</button>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section2">
        <div className="about-container2">
          <div className="about-content2">
            <div className="values-title-wrapper">
              <h2 className="values-title">Équipes Pédagogiques</h2>
              <div className="title-underline"></div>
            </div>
            <p>
              Au Groupe Scolaire L'Atome, nos équipes pédagogiques sont composées de professionnels passionnés et dévoués : fondateurs, direction de l'établissement, coordinateurs pédagogiques, enseignants qualifiés, éducateurs attentifs, personnel de vie scolaire et administratifs. Tous travaillent ensemble, avec rigueur et bienveillance, pour accompagner chaque élève dans sa singularité et développer son plein potentiel.
            </p>
            <div className="about-cta2">
              <button className="equipe-btn">L'équipe dirigeante</button>
            </div>
          </div>
          <div className="about-image-wrapper2">
            <img src="/equipp.jpg" alt="Équipe pédagogique Groupe Scolaire L'Atome" />
          </div>
        </div>
      </section>

      <HomeGallery />
      <Temoignages />
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      <style jsx>{`
        /* ===== HERO SECTION ===== */
        .hero-section {
          width: 100%;
          height: 92vh;
          min-height: 580px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          display: block;
          filter: brightness(0.55) saturate(1.15) contrast(1.05);
          transform: scale(1.04);
          transition: transform 8s ease-out;
        }

        .hero-section:hover .hero-image {
          transform: scale(1.0);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            rgba(0, 30, 80, 0.55) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(238, 114, 31, 0.3) 100%
          );
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: #fff;
          padding: 0 24px;
          max-width: 800px;
          animation: heroFadeIn 1.2s ease-out both;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(8px);
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 8px 22px;
          border-radius: 50px;
          margin-bottom: 24px;
          font-family: "Trebuchet MS", Helvetica, sans-serif;
        }

        .hero-title {
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin: 0 0 20px 0;
          font-family: 'Georgia', 'Times New Roman', serif;
          text-shadow: 0 4px 30px rgba(0,0,0,0.4);
          letter-spacing: -1px;
        }

        .hero-title-accent {
          color: #ffa600;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          color: rgba(255, 255, 255, 0.88);
          font-family: "Trebuchet MS", Helvetica, sans-serif;
          margin: 0 0 28px 0;
          font-weight: 400;
          letter-spacing: 0.5px;
        }

        .hero-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #ffa600, #2563eb);
          border-radius: 2px;
          margin: 0 auto 32px auto;
        }

        .hero-stats {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          padding: 18px 36px;
        }

        .hero-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .stat-number {
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffa600;
          font-family: 'Georgia', serif;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: rgba(255,255,255,0.75);
          font-family: "Trebuchet MS", Helvetica, sans-serif;
        }

        .hero-stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.25);
        }

        .hero-scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          width: 28px;
          height: 44px;
          border: 2px solid rgba(255,255,255,0.5);
          border-radius: 14px;
          display: flex;
          justify-content: center;
          padding-top: 7px;
        }

        .scroll-dot {
          width: 5px;
          height: 10px;
          background: #fff;
          border-radius: 3px;
          animation: scrollBounce 1.8s ease-in-out infinite;
        }

        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0);    opacity: 1;   }
          50%       { transform: translateY(10px); opacity: 0.4; }
        }

        /* ===== SECTION 1 ===== */
        .about-section {
          background-image: linear-gradient(to right, rgb(255, 180, 83), #ffa600da, #ee721f);
          padding: 4rem 2rem;
          width: 73%;
          margin: 40px auto;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          font-family: "Trebuchet MS", Helvetica, sans-serif;
        }

        .about-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          max-width: 1100px;
          margin: 0 auto;
          gap: 3rem;
        }

        .about-image-wrapper {
          flex: 1;
          max-width: 500px;
        }

        .about-image-wrapper img {
          width: 100%;
          object-fit: cover;
        }

        .about-content {
          flex: 1;
          color: #333;
        }

        .about-content h1 {
          font-size: 2.4rem;
          margin-bottom: 1.9rem;
          color: #ffffffff;
          font-weight: 700;
          -webkit-text-stroke: 2px #004494;
          text-stroke: 2px #004494;
          line-height: 1.3;
        }

        .about-content p {
          margin-bottom: 1.2rem;
          font-size: 1rem;
          color: #1a1a1a;
          line-height: 1.8;
          text-align: justify;
        }

        .about-cta {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 1.5rem;
        }

        .about-cta p {
          margin: 0;
          font-weight: 500;
          color: #1a1a1a;
        }

        .btn-contact {
          background-color: transparent;
          color: #2566b2ff;
          border: none;
          padding: 0px;
          cursor: pointer;
          transition: color 0.3s ease;
          margin: 0;
          font-size: 1rem;
          font-weight: 500;
          font-family: "Trebuchet MS", Helvetica, sans-serif;
        }

        .btn-contact:hover {
          color: #004494;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        /* ===== SECTION 2 ===== */
        .about-section2 {
          padding: 80px 20px;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          color: #333;
          position: relative;
          overflow: hidden;
        }

        .about-section2::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(circle at 10% 20%, rgba(37, 99, 235, 0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-container2 {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 60px;
          position: relative;
          z-index: 2;
        }

        .about-content2 { flex: 1; }

        .values-title-wrapper {
          margin-bottom: 28px;
          position: relative;
        }

        .values-title {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          color: #0f172a;
          margin: 0;
          display: inline-block;
          animation: fadeInUp 0.6s ease-out;
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #f97316, #2563eb);
          border-radius: 2px;
          margin-top: 12px;
          animation: slideInLeft 0.5s ease-out 0.3s both;
        }

        .about-content2 p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #2d3a4a;
          margin-bottom: 32px;
          text-align: justify;
          font-family: "Trebuchet MS", Helvetica, sans-serif;
          animation: fadeInUp 0.6s ease-out 0.2s both;
        }

        .about-cta2 {
          display: flex;
          animation: fadeInUp 0.6s ease-out 0.4s both;
        }

        .equipe-btn {
          padding: 14px 32px;
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
          position: relative;
          overflow: hidden;
        }

        .equipe-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .equipe-btn:hover::before { width: 300px; height: 300px; }

        .equipe-btn:hover {
          background: linear-gradient(135deg, #1d4ed8, #1e40af);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(37, 99, 235, 0.3);
        }

        .about-image-wrapper2 {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .about-image-wrapper2 img {
          width: 100%;
          max-width: 480px;
          height: auto;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          border-radius: 51% 49% 77% 23% / 41% 26% 74% 59%;
          box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.15);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .about-image-wrapper2 img:hover {
          transform: scale(1.02);
          box-shadow: 0 25px 40px -15px rgba(0, 0, 0, 0.2);
        }

        /* ===== ANIMATIONS ===== */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); width: 0; }
          to   { opacity: 1; transform: translateX(0);     width: 80px; }
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 992px) {
          .hero-section { height: 70vh; min-height: 480px; }
          .hero-stats { gap: 20px; padding: 14px 24px; }
          .about-container2 { flex-direction: column-reverse; gap: 40px; text-align: center; }
          .about-content2 p { text-align: left; }
          .about-cta2 { justify-content: center; }
          .values-title-wrapper { text-align: center; }
          .title-underline { margin-left: auto; margin-right: auto; }
          .about-image-wrapper2 img { max-width: 400px; }
        }

        @media (max-width: 768px) {
          .hero-section { height: 60vh; min-height: 380px; }
          .stat-number { font-size: 1.4rem; }
          .hero-stats { gap: 16px; padding: 12px 18px; }
          .about-container { flex-direction: column; gap: 2rem; }
          .about-image-wrapper { max-width: 100%; }
          .about-cta { flex-direction: column; align-items: flex-start; }
          .about-section { width: 90%; padding: 2rem 1.5rem; margin: 30px auto; }
          .about-content h1 { font-size: 1.8rem; -webkit-text-stroke: 1px #004494; }
          .about-section2 { padding: 50px 20px; }
          .about-content2 p { font-size: 1rem; }
          .equipe-btn { width: 100%; }
          .about-image-wrapper2 img { max-width: 350px; }
        }

        @media (max-width: 576px) {
          .hero-section { height: 50vh; min-height: 300px; }
          .hero-scroll-indicator { display: none; }
          .hero-badge { font-size: 0.75rem; padding: 6px 16px; }
          .about-section { margin: 20px auto; }
          .about-section2 { padding: 40px 16px; }
          .values-title { font-size: 1.75rem; }
          .about-content2 p { font-size: 0.95rem; }
          .about-image-wrapper2 img { max-width: 280px; border-radius: 40% 60% 65% 35% / 45% 40% 60% 55%; }
        }
      `}</style>
    </div>
  );
}

export default LeGroupe;
