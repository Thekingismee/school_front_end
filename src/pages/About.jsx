




// import React from "react";
// import Temoignages from "../components/Accueil/Temoignages";

// const About = () => {
//     // Données des cartes - Orientation pour parents troublés
//     const orientationCards = [
//         {
//             id: 1,
//             title: "Comprendre les troubles d'apprentissage",
//             description: "Ateliers mensuels pour identifier et comprendre les signes précoces des troubles dys, TDAH et autres difficultés spécifiques.",
//             icon: "👂", // Écouter - humanisé
//         },
//         {
//             id: 2,
//             title: "Accompagnement personnalisé",
//             description: "Un référent dédié pour chaque famille, des réunions régulières et un suivi adapté aux besoins spécifiques de votre enfant.",
//             icon: "🤗", // Accueil chaleureux
//         },
//         {
//             id: 3,
//             title: "Groupes de parole entre parents",
//             description: "Échanger avec d'autres parents vivant des situations similaires, partager vos expériences et trouver du soutien.",
//             icon: "💭", // Pensée/Parole
//         },
//         {
//             id: 4,
//             title: "Ressources et documentation",
//             description: "Bibliothèque spécialisée, guides pratiques et accès à des experts pour vous informer et vous guider au quotidien.",
//             icon: "📖", // Livre ouvert
//         },
//         {
//             id: 5,
//             title: "Soutien psychologique",
//             description: "Accès à des psychologues spécialisés pour aider votre enfant mais aussi vous accompagner, vous parents.",
//             icon: "🌱", // Croissance/Épanouissement
//         },
//         {
//             id: 6,
//             title: "Ateliers parents-enfants",
//             description: "Moments privilégiés pour renforcer la complicité et apprendre ensemble des stratégies adaptées.",
//             icon: "👨‍👩‍👧", // Famille
//         },
//         {
//             id: 7,
//             title: "Suivi personnalisé",
//             description: "Un accompagnement individuel avec des professionnels dédiés à chaque étape du parcours scolaire.",
//             icon: "✋", // Main tendue
//         },
//         {
//             id: 8,
//             title: "Ateliers de formation",
//             description: "Des formations pratiques pour vous donner les clés pour accompagner votre enfant au quotidien.",
//             icon: "⭐", // Étoile - savoir
//         }
//     ];

//     // Dupliquer les cartes pour un effet de défilement continu
//     const duplicatedCards = [...orientationCards, ...orientationCards, ...orientationCards];

//     return (
//         <>
//             {/* Hero Section avec about1.jpg */}
//             <header className="hero-section">
//                 <div className="hero-image-wrapper">
//                     <img src="/about8.jpg" alt="À propos du Groupe Scolaire L'Atome" className="hero-background" />
//                 </div>
//                 <div className="hero-overlay"></div>
//                 <div className="hero-content">
//                     <h1 className="hero-title">
//                         <span className="hero-title-main">À propos</span>
//                         <span className="hero-title-accent">de nous</span>
//                     </h1>
//                     <p className="hero-subtitle">
//                         Un accompagnement bienveillant pour chaque famille, chaque enfant
//                     </p>
//                     <div className="hero-decoration">
//                         <span className="hero-line"></span>
//                     </div>
//                 </div>
//             </header>

//             {/* Section de présentation */}
//             <section className="intro-section">
//                 <div className="intro-container">
//                     <div className="intro-text">
//                         <h2>Bienvenue au Groupe Scolaire L'Atome</h2>
//                         <p>
//                             Depuis notre création, nous croyons que chaque enfant mérite une éducation adaptée à ses besoins uniques. 
//                             Nous comprenons que le parcours éducatif peut parfois être semé d'embûches, surtout lorsque votre enfant 
//                             rencontre des difficultés d'apprentissage.
//                         </p>
//                         <p>
//                             C'est pourquoi nous avons développé une approche spécialement conçue pour accompagner les parents 
//                             qui se sentent parfois perdus ou dépassés. Notre équipe est là pour vous guider, vous soutenir et 
//                             vous offrir les ressources nécessaires pour aider votre enfant à s'épanouir.
//                         </p>
//                     </div>
//                     <div className="intro-stats">
//                         <div className="stat">
//                             <span className="stat-number">15+</span>
//                             <span className="stat-label">Années d'expérience</span>
//                         </div>
//                         <div className="stat">
//                             <span className="stat-number">500+</span>
//                             <span className="stat-label">Familles accompagnées</span>
//                         </div>
//                         <div className="stat">
//                             <span className="stat-number">95%</span>
//                             <span className="stat-label">Parents satisfaits</span>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Section des cartes d'orientation - Carrousel horizontal infini */}
//             <section className="cards-section">
//                 <div className="section-header">
//                     <h2>Orientation pour <span className="highlight">parents troublés</span></h2>
//                     <p>Un accompagnement sur mesure pour vous aider à y voir plus clair</p>
//                 </div>

//                 <div className="carousel-container">
//                     <div className="carousel-track">
//                         {duplicatedCards.map((card, index) => (
//                             <div
//                                 key={`${card.id}-${index}`}
//                                 className="orientation-card"
//                             >
//                                 <div className="card-icon">
//                                     <span>{card.icon}</span>
//                                 </div>
//                                 <h3>{card.title}</h3>
//                                 <p>{card.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Composant Temoignages */}
//             <Temoignages />

//             <style jsx>{`
//                 /* ===== HERO SECTION ===== */
//                 .hero-section {
//                     position: relative;
//                     min-height: 85vh;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     text-align: center;
//                     overflow: hidden;
//                 }

//                 .hero-image-wrapper {
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     width: 100%;
//                     height: 100%;
//                     z-index: 0;
//                 }

//                 .hero-background {
//                     width: 100%;
//                     height: 100%;
//                     object-fit: cover;
//                     animation: scaleIn 1.5s ease-out;
//                 }

//                 @keyframes scaleIn {
//                     from {
//                         transform: scale(1.1);
//                     }
//                     to {
//                         transform: scale(1);
//                     }
//                 }

//                 .hero-overlay {
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     bottom: 0;
//                     background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%);
//                     z-index: 1;
//                 }

//                 .hero-content {
//                     position: relative;
//                     z-index: 2;
//                     max-width: 900px;
//                     padding: 20px;
//                     animation: fadeInUp 0.9s ease-out;
//                 }

//                 .hero-title {
//                     margin: 0;
//                     display: flex;
//                     flex-direction: column;
//                     gap: 15px;
//                 }

//                 .hero-title-main {
//                     font-size: 3rem;
//                     font-weight: 400;
//                     letter-spacing: 2px;
//                     color: rgba(255, 255, 255, 0.95);
//                     font-family: "Poppins", "Segoe UI", "Montserrat", sans-serif;
//                     text-transform: uppercase;
//                     animation: slideInLeft 0.8s ease-out;
//                 }

//                 .hero-title-accent {
//                     font-size: 5rem;
//                     font-weight: 800;
//                     letter-spacing: 4px;
//                     color: #ee721f;
//                     font-family: "Playfair Display", "Times New Roman", serif;
//                     text-transform: uppercase;
//                     text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3);
//                     animation: slideInRight 0.8s ease-out;
//                     position: relative;
//                     display: inline-block;
//                 }

//                 .hero-title-accent::before {
//                     content: "";
//                     position: absolute;
//                     bottom: -15px;
//                     left: 50%;
//                     transform: translateX(-50%);
//                     width: 100px;
//                     height: 3px;
//                     background: linear-gradient(90deg, transparent, #ee721f, #ee721f, transparent);
//                     border-radius: 3px;
//                 }

//                 .hero-subtitle {
//                     font-size: 1.3rem;
//                     font-weight: 400;
//                     margin-top: 40px;
//                     color: white;
//                     font-family: "Poppins", "Segoe UI", sans-serif;
//                     letter-spacing: 1px;
//                     text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
//                     animation: fadeInUp 0.8s ease-out 0.3s both;
//                 }

//                 .hero-decoration {
//                     margin-top: 30px;
//                     animation: fadeInUp 0.8s ease-out 0.5s both;
//                 }

//                 .hero-line {
//                     display: inline-block;
//                     width: 60px;
//                     height: 2px;
//                     background: #ee721f;
//                     border-radius: 2px;
//                     position: relative;
//                 }

//                 .hero-line::before,
//                 .hero-line::after {
//                     content: "";
//                     position: absolute;
//                     width: 10px;
//                     height: 10px;
//                     border-radius: 50%;
//                     background: #ee721f;
//                     top: 50%;
//                     transform: translateY(-50%);
//                 }

//                 .hero-line::before {
//                     left: -20px;
//                 }

//                 .hero-line::after {
//                     right: -20px;
//                 }

//                 /* ===== INTRO SECTION ===== */
//                 .intro-section {
//                     padding: 80px 5%;
//                     background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
//                 }

//                 .intro-container {
//                     max-width: 1200px;
//                     margin: 0 auto;
//                     display: flex;
//                     flex-wrap: wrap;
//                     gap: 50px;
//                     align-items: center;
//                 }

//                 .intro-text {
//                     flex: 2;
//                 }

//                 .intro-text h2 {
//                     font-size: 2.5rem;
//                     color: #333;
//                     margin-bottom: 25px;
//                     font-family: "Playfair Display", serif;
//                     position: relative;
//                     display: inline-block;
//                 }

//                 .intro-text h2::after {
//                     content: "";
//                     position: absolute;
//                     bottom: -10px;
//                     left: 0;
//                     width: 60px;
//                     height: 3px;
//                     background: #ee721f;
//                 }

//                 .intro-text p {
//                     font-size: 1.1rem;
//                     line-height: 1.8;
//                     color: #666;
//                     margin-bottom: 20px;
//                 }

//                 .intro-stats {
//                     flex: 1;
//                     display: flex;
//                     flex-direction: column;
//                     gap: 30px;
//                 }

//                 .stat {
//                     text-align: center;
//                     padding: 25px;
//                     background: white;
//                     border-radius: 15px;
//                     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
//                     transition: transform 0.3s ease, box-shadow 0.3s ease;
//                 }

//                 .stat:hover {
//                     transform: translateY(-5px);
//                     box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
//                 }

//                 .stat-number {
//                     display: block;
//                     font-size: 2.5rem;
//                     font-weight: bold;
//                     color: #ee721f;
//                     margin-bottom: 10px;
//                 }

//                 .stat-label {
//                     font-size: 1rem;
//                     color: #666;
//                 }

//                 /* ===== CARROUSEL HORIZONTAL INFINI ===== */
//                 .cards-section {
//                     padding: 80px 0;
//                     background: #f0f2f5;
//                     overflow: hidden;
//                 }

//                 .section-header {
//                     text-align: center;
//                     margin-bottom: 60px;
//                     padding: 0 20px;
//                 }

//                 .section-header h2 {
//                     font-size: 2.5rem;
//                     color: #333;
//                     margin-bottom: 15px;
//                     font-family: "Playfair Display", serif;
//                 }

//                 .section-header .highlight {
//                     color: #ee721f;
//                     position: relative;
//                     display: inline-block;
//                 }

//                 .section-header .highlight::after {
//                     content: "";
//                     position: absolute;
//                     bottom: 5px;
//                     left: 0;
//                     right: 0;
//                     height: 8px;
//                     background: rgba(238, 114, 31, 0.2);
//                     z-index: -1;
//                 }

//                 .section-header p {
//                     font-size: 1.2rem;
//                     color: #666;
//                 }

//                 .carousel-container {
//                     width: 100%;
//                     overflow: hidden;
//                     position: relative;
//                 }

//                 .carousel-track {
//                     display: flex;
//                     gap: 30px;
//                     animation: scrollHorizontal 40s linear infinite;
//                     width: fit-content;
//                 }

//                 .carousel-track:hover {
//                     animation-play-state: paused;
//                 }

//                 .orientation-card {
//                     flex: 0 0 350px;
//                     background: white;
//                     border-radius: 20px;
//                     padding: 30px;
//                     transition: all 0.3s ease;
//                     box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
//                     cursor: pointer;
//                 }

//                 .orientation-card:hover {
//                     transform: translateY(-5px);
//                     box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
//                 }

//                 /* Icône épurée - juste un trait, pas de couleur */
//                 .card-icon {
//                     width: 60px;
//                     height: 60px;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     margin-bottom: 25px;
//                     transition: transform 0.3s ease;
//                 }

//                 .card-icon span {
//                     font-size: 2.5rem;
//                     opacity: 0.7;
//                     transition: opacity 0.3s ease;
//                 }

//                 .orientation-card:hover .card-icon span {
//                     opacity: 1;
//                 }

//                 .orientation-card h3 {
//                     font-size: 1.3rem;
//                     color: #333;
//                     margin-bottom: 15px;
//                     font-family: "Poppins", sans-serif;
//                     line-height: 1.4;
//                 }

//                 .orientation-card p {
//                     color: #666;
//                     line-height: 1.6;
//                     margin: 0;
//                     font-size: 0.95rem;
//                 }

//                 @keyframes scrollHorizontal {
//                     0% {
//                         transform: translateX(0);
//                     }
//                     100% {
//                         transform: translateX(-33.33%);
//                     }
//                 }

//                 /* ===== RESPONSIVE ===== */
//                 @media (max-width: 992px) {
//                     .hero-title-main {
//                         font-size: 2rem;
//                     }
//                     .hero-title-accent {
//                         font-size: 3.5rem;
//                     }
//                     .orientation-card {
//                         flex: 0 0 300px;
//                     }
//                 }

//                 @media (max-width: 768px) {
//                     .hero-section {
//                         min-height: 70vh;
//                     }
//                     .hero-title-main {
//                         font-size: 1.5rem;
//                     }
//                     .hero-title-accent {
//                         font-size: 2.5rem;
//                     }
//                     .intro-container {
//                         flex-direction: column;
//                     }
//                     .intro-stats {
//                         flex-direction: row;
//                         flex-wrap: wrap;
//                         justify-content: center;
//                     }
//                     .stat {
//                         min-width: 150px;
//                     }
//                     .orientation-card {
//                         flex: 0 0 280px;
//                         padding: 20px;
//                     }
//                     .card-icon span {
//                         font-size: 2rem;
//                     }
//                     .orientation-card h3 {
//                         font-size: 1.1rem;
//                     }
//                     .orientation-card p {
//                         font-size: 0.85rem;
//                     }
//                 }

//                 @media (max-width: 576px) {
//                     .hero-section {
//                         min-height: 60vh;
//                     }
//                     .hero-title-main {
//                         font-size: 1.2rem;
//                     }
//                     .hero-title-accent {
//                         font-size: 2rem;
//                     }
//                     .hero-subtitle {
//                         font-size: 0.9rem;
//                     }
//                     .intro-text h2 {
//                         font-size: 1.8rem;
//                     }
//                     .section-header h2 {
//                         font-size: 1.8rem;
//                     }
//                     .orientation-card {
//                         flex: 0 0 260px;
//                         padding: 18px;
//                     }
//                 }

//                 /* ===== ANIMATIONS ===== */
//                 @keyframes fadeInUp {
//                     from {
//                         opacity: 0;
//                         transform: translateY(40px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }

//                 @keyframes slideInLeft {
//                     from {
//                         opacity: 0;
//                         transform: translateX(-60px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateX(0);
//                     }
//                 }

//                 @keyframes slideInRight {
//                     from {
//                         opacity: 0;
//                         transform: translateX(60px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateX(0);
//                     }
//                 }
//             `}</style>
//         </>
//     );
// };

// export default About;





import React from "react";
import {
  Ear,
  HeartHandshake,
  Users,
  BookOpen,
  Brain,
  HandHeart,
  Route,
  Lightbulb,
} from "lucide-react";
import Temoignages from "../components/Accueil/Temoignages";

const About = () => {
  // 🎯 Contenu des cartes — icônes vectorielles chaleureuses
  const orientationOffers = [
    {
      id: "comprendre",
      title: "Comprendre les troubles",
      description: "Ateliers pour identifier avec bienveillance les signes précoces.",
      Icon: Ear,
      color: "emerald",
    },
    {
      id: "accompagnement",
      title: "Accompagnement personnalisé",
      description: "Un référent dédié et un suivi taillé pour votre enfant.",
      Icon: HeartHandshake,
      color: "blue",
    },
    {
      id: "parole",
      title: "Groupes de parole",
      description: "Échanger avec d'autres parents dans un espace sécurisé.",
      Icon: Users,
      color: "violet",
    },
    {
      id: "ressources",
      title: "Ressources & guides",
      description: "Bibliothèque spécialisée et accès à des experts.",
      Icon: BookOpen,
      color: "amber",
    },
    {
      id: "soutien",
      title: "Soutien psychologique",
      description: "Accompagnement par des psychologues spécialisés.",
      Icon: Brain,
      color: "rose",
    },
    {
      id: "ateliers",
      title: "Ateliers parents-enfants",
      description: "Moments complices pour renforcer vos liens.",
      Icon: HandHeart,
      color: "teal",
    },
    {
      id: "suivi",
      title: "Suivi pas à pas",
      description: "Des professionnels attentifs à chaque étape.",
      Icon: Route,
      color: "indigo",
    },
    {
      id: "formation",
      title: "Ateliers de formation",
      description: "Sessions pratiques pour gagner en confiance.",
      Icon: Lightbulb,
      color: "orange",
    },
  ];

  // ♾️ Duplication pour le défilement infini
  const infiniteCards = [...orientationOffers, ...orientationOffers];

  return (
    <>
      {/* ===== HERO : Image pleine hauteur, sans texte ===== */}
      <header className="hero-section">
        <picture className="hero-picture">
          <source media="(min-width: 1024px)" srcSet="/about8.jpg?w=1920&q=85" />
          <source media="(min-width: 768px)" srcSet="/about8.jpg?w=1200&q=80" />
          <img
            src="/about8.jpg?w=800&q=75"
            alt="Équipe bienveillante du Groupe Scolaire L'Atome"
            className="hero-image"
            loading="eager"
            fetchPriority="high"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80";
              e.currentTarget.alt = "Ambiance chaleureuse de notre école";
            }}
          />
        </picture>
        {/* <div className="hero-overlay" aria-hidden="true" /> */}
        <div className="hero-grain" aria-hidden="true" />
      </header>

      {/* ===== INTRO : Présentation chaleureuse ===== */}
      <section className="intro-section">
        <div className="intro-container">
          <div className="intro-content">
            <h2 className="intro-title">
              Bienvenue au <span className="highlight">Groupe Scolaire L'Atome</span>
            </h2>
            <div className="intro-text">
              <p>
                Depuis plus de 15 ans, nous croyons profondément que chaque enfant 
                possède une manière unique d'apprendre et de grandir. Nous savons aussi 
                que le parcours scolaire peut parfois sembler complexe, surtout lorsque 
                votre enfant rencontre des difficultés spécifiques.
              </p>
              <p>
                C'est pour cela que nous avons construit une approche centrée sur 
                <strong> l'écoute, la bienveillance et l'accompagnement</strong>. 
                Notre équipe est à vos côtés — pas seulement pour enseigner, mais 
                pour comprendre, guider et soutenir toute la famille.
              </p>
            </div>

            <div className="intro-stats">
              <StatItem number="15+" label="Années d'expérience" />
              <StatItem number="500+" label="Familles accompagnées" />
              <StatItem number="95%" label="Parents satisfaits" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CARTES HORIZONTALES : Carousel infini ===== */}
      <section className="offers-section">
        <div className="section-header">
          <h2>
            Un accompagnement pensé <span className="highlight">pour vous</span>
          </h2>
          <p className="section-subtitle">
            Parce que chaque famille est unique, nous proposons des ressources 
            adaptées à vos besoins et à votre rythme.
          </p>
        </div>

        <div className="carousel-wrapper">
          <div className="carousel-track">
            {infiniteCards.map((card, index) => (
              <article
                key={`${card.id}-${index}`}
                className="offer-card-horizontal"
                style={{ "--accent-color": getAccentColor(card.color) }}
              >
                {/* Icône à gauche */}
                <div className="card-icon-wrapper">
                  <card.Icon className="card-icon" size={28} strokeWidth={1.5} />
                  <div className="icon-glow" />
                </div>

                {/* Texte à droite */}
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                </div>

                {/* Ligne décorative en bas */}
                <div className="card-accent-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TÉMOIGNAGES ===== */}
      <Temoignages />

      {/* ===== STYLES ===== */}
      <style jsx>{`
        /* ===== BASE ===== */
        * { box-sizing: border-box; }

        /* ===== HERO SECTION ===== */
        .hero-section {
          position: relative;
          height: 85vh;
          min-height: 500px;
          max-height: 900px;
          overflow: hidden;
          background: #0f172a;
        }

        .hero-picture {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          animation: gentleZoom 12s ease-out forwards;
        }

        @keyframes gentleZoom {
          0% { transform: scale(1.03); }
          100% { transform: scale(1); }
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(15, 23, 42, 0.15) 0%,
            rgba(15, 23, 42, 0.35) 50%,
            rgba(15, 23, 42, 0.55) 100%
          );
          pointer-events: none;
          z-index: 1;
        }

        .hero-grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
          opacity: 0.7;
          pointer-events: none;
          mix-blend-mode: overlay;
          z-index: 2;
        }

        /* ===== INTRO SECTION ===== */
        .intro-section {
          padding: 5rem 1.5rem;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
        }

        .intro-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .intro-title {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 600;
          color: #0f172a;
          text-align: center;
          margin-bottom: 2rem;
          font-family: "Playfair Display", Georgia, serif;
          line-height: 1.3;
        }

        .intro-title .highlight {
          color: #ee721f;
          position: relative;
          display: inline-block;
        }

        .intro-title .highlight::after {
          content: "";
          position: absolute;
          bottom: 4px;
          left: 0;
          right: 0;
          height: 10px;
          background: rgba(238, 114, 31, 0.15);
          border-radius: 8px;
          z-index: -1;
        }

        .intro-text {
          font-size: 1.1rem;
          line-height: 1.9;
          color: #475569;
          margin-bottom: 3rem;
          font-family: "Inter", system-ui, sans-serif;
        }

        .intro-text p { margin-bottom: 1.2rem; }
        .intro-text strong { color: #1e293b; font-weight: 600; }

        .intro-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1.5rem;
          padding-top: 1rem;
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem 1rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: #ee721f;
          margin-bottom: 0.5rem;
          font-family: "Poppins", sans-serif;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 500;
        }

        /* ===== OFFERS SECTION — Cartes horizontales ===== */
        .offers-section {
          padding: 4rem 0 6rem;
          background: #f1f5f9;
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 3.5rem;
          padding: 0 1.5rem;
        }

        .section-header h2 {
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 1rem;
          font-family: "Playfair Display", serif;
        }

        .section-header .highlight {
          color: #ee721f;
          font-style: italic;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #64748b;
          line-height: 1.7;
          font-family: "Inter", sans-serif;
        }

        /* Carousel */
        .carousel-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
        }

        .carousel-track {
          display: flex;
          gap: 1rem;
          padding: 0 1rem;
          animation: scrollInfinite 50s linear infinite;
          width: max-content;
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }

        @keyframes scrollInfinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* ===== CARTE HORIZONTALE — Design mince et élégant ===== */
        .offer-card-horizontal {
          flex: 0 0 340px;
          height: 95px; /* Hauteur réduite pour un format horizontal */
          background: white;
          border-radius: 14px;
          padding: 0 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          position: relative;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(226, 232, 240, 0.7);
          transition: all 0.3s ease;
          cursor: default;
          overflow: hidden;
        }

        .offer-card-horizontal:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
          border-color: transparent;
        }

        /* Icône à gauche */
        .card-icon-wrapper {
          position: relative;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--accent-color, rgba(238, 114, 31, 0.12));
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .offer-card-horizontal:hover .card-icon-wrapper {
          transform: scale(1.08);
        }

        .card-icon {
          color: #0f172a;
          transition: transform 0.3s ease;
        }

        .offer-card-horizontal:hover .card-icon {
          transform: scale(1.05);
        }

        .icon-glow {
          position: absolute;
          inset: -15px;
          border-radius: 50%;
          background: var(--accent-color, rgba(238, 114, 31, 0.2));
          opacity: 0;
          filter: blur(12px);
          transition: opacity 0.3s ease;
        }

        .offer-card-horizontal:hover .icon-glow {
          opacity: 1;
        }

        /* Contenu texte à droite */
        .card-content {
          flex: 1;
          min-width: 0;
          padding: 0.5rem 0;
        }

        .card-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 0.25rem 0;
          font-family: "Poppins", sans-serif;
          line-height: 1.3;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-description {
          font-size: 0.8rem;
          color: #64748b;
          margin: 0;
          font-family: "Inter", sans-serif;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Ligne accentuée en bas */
        .card-accent-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--accent-color, linear-gradient(90deg, #ee721f, #f97316));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .offer-card-horizontal:hover .card-accent-line {
          transform: scaleX(1);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 992px) {
          .hero-section { height: 75vh; }
          .offer-card-horizontal { flex: 0 0 310px; height: 90px; }
        }

        @media (max-width: 768px) {
          .hero-section { height: 60vh; min-height: 400px; }
          .hero-image { object-position: center 40%; }
          .hero-overlay {
            background: linear-gradient(
              to bottom,
              rgba(15, 23, 42, 0.1) 0%,
              rgba(15, 23, 42, 0.25) 50%,
              rgba(15, 23, 42, 0.45) 100%
            );
          }
          .intro-section { padding: 3.5rem 1.25rem; }
          .intro-title { font-size: 1.6rem; }
          .intro-text { font-size: 1.05rem; }
          .intro-stats {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
          .stat-number { font-size: 1.7rem; }
          .section-header h2 { font-size: 1.5rem; }
          .section-subtitle { font-size: 1rem; }
          .carousel-track { gap: 0.85rem; }
          .offer-card-horizontal {
            flex: 0 0 280px;
            height: 85px;
            padding: 0 1rem;
          }
          .card-icon-wrapper {
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }
          .card-title { font-size: 0.9rem; }
          .card-description { font-size: 0.75rem; }
        }

        @media (max-width: 480px) {
          .hero-section { height: 50vh; }
          .intro-stats { grid-template-columns: 1fr; }
          .offer-card-horizontal { flex: 0 0 260px; height: 80px; }
        }

        /* ===== ACCESSIBILITÉ ===== */
        @media (prefers-reduced-motion: reduce) {
          .hero-image,
          .offer-card-horizontal,
          .stat-item,
          .carousel-track {
            animation: none !important;
            transition: none !important;
          }
        }

        .offer-card-horizontal:focus-within {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
};

/* ===== Composant StatItem ===== */
const StatItem = ({ number, label }) => (
  <div className="stat-item">
    <span className="stat-number">{number}</span>
    <span className="stat-label">{label}</span>
  </div>
);

/* ===== Helper couleurs ===== */
const getAccentColor = (colorName) => {
  const palette = {
    emerald: "rgba(16, 185, 129, 0.12)",
    blue: "rgba(59, 130, 246, 0.12)",
    violet: "rgba(139, 92, 246, 0.12)",
    amber: "rgba(245, 158, 11, 0.12)",
    rose: "rgba(244, 63, 94, 0.12)",
    teal: "rgba(20, 184, 166, 0.12)",
    indigo: "rgba(99, 102, 241, 0.12)",
    orange: "rgba(249, 115, 22, 0.12)",
  };
  return palette[colorName] || "rgba(238, 114, 31, 0.12)";
};

export default About;