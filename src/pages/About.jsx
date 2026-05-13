// import React from "react";
// import {
//   Ear,
//   HeartHandshake,
//   Users,
//   BookOpen,
//   Brain,
//   HandHeart,
//   Route,
//   Lightbulb,
// } from "lucide-react";
// import Temoignages from "../components/Accueil/Temoignages";

// const About = () => {
//   // 🎯 Contenu des cartes — icônes vectorielles chaleureuses
//   const orientationOffers = [
//     {
//       id: "comprendre",
//       title: "Comprendre les troubles",
//       description: "Ateliers pour identifier avec bienveillance les signes précoces.",
//       Icon: Ear,
//       color: "emerald",
//     },
//     {
//       id: "accompagnement",
//       title: "Accompagnement personnalisé",
//       description: "Un référent dédié et un suivi taillé pour votre enfant.",
//       Icon: HeartHandshake,
//       color: "blue",
//     },
//     {
//       id: "parole",
//       title: "Groupes de parole",
//       description: "Échanger avec d'autres parents dans un espace sécurisé.",
//       Icon: Users,
//       color: "violet",
//     },
//     // {
//     //   id: "ressources",
//     //   title: "Ressources & guides",
//     //   description: "Bibliothèque spécialisée et accès à des experts.",
//     //   Icon: BookOpen,
//     //   color: "amber",
//     // },
//     {
//       id: "soutien",
//       title: "Soutien psychologique",
//       description: "Accompagnement par des psychologues spécialisés.",
//       Icon: Brain,
//       color: "rose",
//     },
//     {
//       id: "ateliers",
//       title: "Ateliers parents-enfants",
//       description: "Moments complices pour renforcer vos liens.",
//       Icon: HandHeart,
//       color: "teal",
//     },
//     {
//       id: "suivi",
//       title: "Suivi pas à pas",
//       description: "Des professionnels attentifs à chaque étape.",
//       Icon: Route,
//       color: "indigo",
//     },
//     // {
//     //   id: "formation",
//     //   title: "Ateliers de formation",
//     //   description: "Sessions pratiques pour gagner en confiance.",
//     //   Icon: Lightbulb,
//     //   color: "orange",
//     // },
//   ];

//   // ♾️ Duplication pour le défilement infini
//   const infiniteCards = [...orientationOffers, ...orientationOffers];

//   return (
//     <>
//       {/* ===== HERO : Image pleine hauteur, sans texte ===== */}
//       {/* <header className="hero-section">
//         <picture className="hero-picture">
//           <source media="(min-width: 1024px)" srcSet="/about8.jpg?w=1920&q=85" />
//           <source media="(min-width: 768px)" srcSet="/about8.jpg?w=1200&q=80" />
//           <img
//             src="/about8.jpg?w=800&q=75"
//             alt="Équipe bienveillante du Groupe Scolaire L'Atome"
//             className="hero-image"
//             loading="eager"
//             fetchPriority="high"
//             onError={(e) => {
//               e.currentTarget.src =
//                 "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80";
//               e.currentTarget.alt = "Ambiance chaleureuse de notre école";
//             }}
//           />
//         </picture>
//         <div className="hero-grain" aria-hidden="true" />
//       </header> */}
//       <header className="header-hero">
//                 <img 
//             src="/about8.jpg?w=800&q=75"
//                 alt="Recrutement Groupe Scolaire L'Atome" className="hero-background" />
//                 <div className="hero-overlay"></div>
//                 <div className="hero-content">
//                     <h1 className="titre">À propos de nous</h1>
//                     <p className="hero-subtitle">Nous croyons en un apprentissage basé sur les valeurs, la créativité et le développement des compétences.</p>
//                 </div>
//             </header>

//       {/* ===== INTRO : Présentation chaleureuse ===== */}
//       <section className="intro-section">
//         <div className="intro-container">
//           <div className="intro-content">
//             <h2 className="intro-title">
//               Bienvenue au <span className="highlight">Groupe Scolaire L'Atome</span>
//             </h2>
//             <div className="intro-text">
//               <p>
//                 Depuis plus de 15 ans, nous croyons profondément que chaque enfant 
//                 possède une manière unique d'apprendre et de grandir. Nous savons aussi 
//                 que le parcours scolaire peut parfois sembler complexe, surtout lorsque 
//                 votre enfant rencontre des difficultés spécifiques.
//               </p>
//               <p>
//                 C'est pour cela que nous avons construit une approche centrée sur 
//                l'écoute, la bienveillance et l'accompagnement. 
//                 Notre équipe est à vos côtés pas seulement pour enseigner, mais 
//                 pour comprendre, guider et soutenir toute la famille.
//               </p>
//             </div>

//             <div className="intro-stats">
//               <StatItem number="15+" label="Années d'expérience" />
//               <StatItem number="500+" label="Familles accompagnées" />
//               {/* <StatItem number="95%" label="Parents satisfaits" /> */}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== CARTES HORIZONTALES : Carousel infini ===== */}
//       <section className="offers-section">
//         <div className="section-header">
//           <h2>
//             Un accompagnement pensé <span className="highlight">pour vous</span>
//           </h2>
//           <p className="section-subtitle">
//             Parce que chaque famille est unique, nous proposons des ressources 
//             adaptées à vos besoins et à votre rythme.
//           </p>
//         </div>

//         <div className="carousel-wrapper">
//           <div className="carousel-track">
//             {infiniteCards.map((card, index) => (
//               <article
//                 key={`${card.id}-${index}`}
//                 className="offer-card-horizontal"
//                 style={{ "--accent-color": getAccentColor(card.color) }}
//               >
//                 {/* Icône à gauche */}
//                 <div className="card-icon-wrapper">
//                   <card.Icon className="card-icon" size={28} strokeWidth={1.5} />
//                   <div className="icon-glow" />
//                 </div>

//                 {/* Texte à droite */}
//                 <div className="card-content">
//                   <h3 className="card-title">{card.title}</h3>
//                   <p className="card-description">{card.description}</p>
//                 </div>

//                 {/* Ligne décorative en bas */}
//                 <div className="card-accent-line" />
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== TÉMOIGNAGES ===== */}
//       <Temoignages />

//       {/* ===== STYLES ===== */}
//       <style jsx>{`
//         /* ===== BASE ===== */
//         * { box-sizing: border-box; }

//                         .header-hero { position: relative; text-align: center; min-height: 550px; overflow: hidden; display: flex; align-items: center; justify-content: center; }
//                 .hero-background { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
//                 .hero-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.5) 100%); z-index: 1; }
//                 .hero-content { position: relative; z-index: 2; padding: 140px 70px; }
//                 .titre { text-shadow: 2px 2px 30px rgba(0, 0, 0, 0.5); font-size: 4rem; font-weight: bold; font-family: 'Georgia', 'Times New Roman', serif; color: #fff; margin: 0 0 16px 0; }
//                 .hero-subtitle { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 1.2rem; color: rgba(255, 255, 255, 0.9); margin: 0; }


//         /* ===== HERO SECTION ===== */
//         .hero-section {
//           position: relative;
//           height: 85vh;
//           min-height: 500px;
//           max-height: 900px;
//           overflow: hidden;
//           background: #0f172a;
//         }

//         .hero-picture {
//           position: absolute;
//           inset: 0;
//           width: 100%;
//           height: 100%;
//         }

//         .hero-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           object-position: center 30%;
//           animation: gentleZoom 12s ease-out forwards;
//         }

//         @keyframes gentleZoom {
//           0% { transform: scale(1.03); }
//           100% { transform: scale(1); }
//         }

//         .hero-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             to bottom,
//             rgba(15, 23, 42, 0.15) 0%,
//             rgba(15, 23, 42, 0.35) 50%,
//             rgba(15, 23, 42, 0.55) 100%
//           );
//           pointer-events: none;
//           z-index: 1;
//         }

//         .hero-grain {
//           position: absolute;
//           inset: 0;
//           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
//           opacity: 0.7;
//           pointer-events: none;
//           mix-blend-mode: overlay;
//           z-index: 2;
//         }

//         /* ===== INTRO SECTION ===== */
//         .intro-section {
//           padding: 5rem 1.5rem;
//           background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
//         }

//         .intro-container {
//           max-width: 900px;
//           margin: 0 auto;
//         }

//         .intro-title {
//           font-size: clamp(1.8rem, 4vw, 2.5rem);
//           font-weight: 600;
//           color: #0f172a;
//           text-align: center;
//           margin-bottom: 2rem;
//           font-family: "Playfair Display", Georgia, serif;
//           line-height: 1.3;
//         }

//         .intro-title .highlight {
//           color: #ee721f;
//           position: relative;
//           display: inline-block;
//         }

//         .intro-title .highlight::after {
//           content: "";
//           position: absolute;
//           bottom: 4px;
//           left: 0;
//           right: 0;
//           height: 10px;
//           background: rgba(238, 114, 31, 0.15);
//           border-radius: 8px;
//           z-index: -1;
//         }

//         .intro-text {
//           font-size: 1.1rem;
//           line-height: 1.9;
//           color: #475569;
//           margin-bottom: 3rem;
//           font-family: "Inter", system-ui, sans-serif;
//         }

//         .intro-text p { margin-bottom: 1.2rem; }
//         .intro-text strong { color: #1e293b; font-weight: 600; }

//         .intro-stats {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
//           gap: 1.5rem;
//           padding-top: 1rem;
//         }

//         .stat-item {
//           text-align: center;
//           padding: 1.5rem 1rem;
//           background: white;
//           border-radius: 16px;
//           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }

//         .stat-item:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
//         }

//         .stat-number {
//           display: block;
//           font-size: 2rem;
//           font-weight: 700;
//           color: #ee721f;
//           margin-bottom: 0.5rem;
//           font-family: "Poppins", sans-serif;
//         }

//         .stat-label {
//           font-size: 0.9rem;
//           color: #64748b;
//           font-weight: 500;
//         }

//         /* ===== OFFERS SECTION — Cartes horizontales ===== */
//         .offers-section {
//           padding: 4rem 0 6rem;
//           background: #f1f5f9;
//           overflow: hidden;
//         }

//         .section-header {
//           text-align: center;
//           max-width: 700px;
//           margin: 0 auto 3.5rem;
//           padding: 0 1.5rem;
//         }

//         .section-header h2 {
//           font-size: clamp(1.6rem, 3.5vw, 2.2rem);
//           font-weight: 600;
//           color: #0f172a;
//           margin-bottom: 1rem;
//           font-family: "Playfair Display", serif;
//         }

//         .section-header .highlight {
//           color: #ee721f;
//           font-style: italic;
//         }

//         .section-subtitle {
//           font-size: 1.1rem;
//           color: #64748b;
//           line-height: 1.7;
//           font-family: "Inter", sans-serif;
//         }

//         /* Carousel */
//         .carousel-wrapper {
//           position: relative;
//           width: 100%;
//           overflow: hidden;
//           mask-image: linear-gradient(
//             to right,
//             transparent,
//             black 8%,
//             black 92%,
//             transparent
//           );
//         }

//         .carousel-track {
//           display: flex;
//           gap: 1rem;
//           padding: 0 1rem;
//           animation: scrollInfinite 50s linear infinite;
//           width: max-content;
//         }

//         .carousel-track:hover {
//           animation-play-state: paused;
//         }

//         @keyframes scrollInfinite {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }

//         /* ===== CARTE HORIZONTALE — Design mince et élégant ===== */
//         .offer-card-horizontal {
//           flex: 0 0 340px;
//           height: 95px; /* Hauteur réduite pour un format horizontal */
//           background: white;
//           border-radius: 14px;
//           padding: 0 1.25rem;
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           position: relative;
//           box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
//           border: 1px solid rgba(226, 232, 240, 0.7);
//           transition: all 0.3s ease;
//           cursor: default;
//           overflow: hidden;
//         }

//         .offer-card-horizontal:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
//           border-color: transparent;
//         }

//         /* Icône à gauche */
//         .card-icon-wrapper {
//           position: relative;
//           width: 44px;
//           height: 44px;
//           border-radius: 12px;
//           background: var(--accent-color, rgba(238, 114, 31, 0.12));
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-shrink: 0;
//           transition: transform 0.3s ease;
//         }

//         .offer-card-horizontal:hover .card-icon-wrapper {
//           transform: scale(1.08);
//         }

//         .card-icon {
//           color: #0f172a;
//           transition: transform 0.3s ease;
//         }

//         .offer-card-horizontal:hover .card-icon {
//           transform: scale(1.05);
//         }

//         .icon-glow {
//           position: absolute;
//           inset: -15px;
//           border-radius: 50%;
//           background: var(--accent-color, rgba(238, 114, 31, 0.2));
//           opacity: 0;
//           filter: blur(12px);
//           transition: opacity 0.3s ease;
//         }

//         .offer-card-horizontal:hover .icon-glow {
//           opacity: 1;
//         }

//         /* Contenu texte à droite */
//         .card-content {
//           flex: 1;
//           min-width: 0;
//           padding: 0.5rem 0;
//         }

//         .card-title {
//           font-size: 0.95rem;
//           font-weight: 600;
//           color: #0f172a;
//           margin: 0 0 0.25rem 0;
//           font-family: "Poppins", sans-serif;
//           line-height: 1.3;
//           white-space: nowrap;
//           overflow: hidden;
//           text-overflow: ellipsis;
//         }

//         .card-description {
//           font-size: 0.8rem;
//           color: #64748b;
//           margin: 0;
//           font-family: "Inter", sans-serif;
//           line-height: 1.4;
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }

//         /* Ligne accentuée en bas */
//         .card-accent-line {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           height: 2px;
//           background: var(--accent-color, linear-gradient(90deg, #ee721f, #f97316));
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 0.3s ease;
//         }

//         .offer-card-horizontal:hover .card-accent-line {
//           transform: scaleX(1);
//         }

//         /* ===== RESPONSIVE ===== */
//         @media (max-width: 992px) {
//           .hero-section { height: 75vh; }
//           .offer-card-horizontal { flex: 0 0 310px; height: 90px; }
//         }

//         @media (max-width: 768px) {
//           .hero-section { height: 60vh; min-height: 400px; }
//           .hero-image { object-position: center 40%; }
//           .hero-overlay {
//             background: linear-gradient(
//               to bottom,
//               rgba(15, 23, 42, 0.1) 0%,
//               rgba(15, 23, 42, 0.25) 50%,
//               rgba(15, 23, 42, 0.45) 100%
//             );
//           }
//           .intro-section { padding: 3.5rem 1.25rem; }
//           .intro-title { font-size: 1.6rem; }
//           .intro-text { font-size: 1.05rem; }
//           .intro-stats {
//             grid-template-columns: repeat(3, 1fr);
//             gap: 1rem;
//           }
//           .stat-number { font-size: 1.7rem; }
//           .section-header h2 { font-size: 1.5rem; }
//           .section-subtitle { font-size: 1rem; }
//           .carousel-track { gap: 0.85rem; }
//           .offer-card-horizontal {
//             flex: 0 0 280px;
//             height: 85px;
//             padding: 0 1rem;
//           }
//           .card-icon-wrapper {
//             width: 40px;
//             height: 40px;
//             border-radius: 10px;
//           }
//           .card-title { font-size: 0.9rem; }
//           .card-description { font-size: 0.75rem; }
//         }

//         @media (max-width: 480px) {
//           .hero-section { height: 50vh; }
//           .intro-stats { grid-template-columns: 1fr; }
//           .offer-card-horizontal { flex: 0 0 260px; height: 80px; }
//         }

//         /* ===== ACCESSIBILITÉ ===== */
//         @media (prefers-reduced-motion: reduce) {
//           .hero-image,
//           .offer-card-horizontal,
//           .stat-item,
//           .carousel-track {
//             animation: none !important;
//             transition: none !important;
//           }
//         }

//         .offer-card-horizontal:focus-within {
//           outline: 2px solid #3b82f6;
//           outline-offset: 2px;
//         }
//       `}</style>
//     </>
//   );
// };

// /* ===== Composant StatItem ===== */
// const StatItem = ({ number, label }) => (
//   <div className="stat-item">
//     <span className="stat-number">{number}</span>
//     <span className="stat-label">{label}</span>
//   </div>
// );

// /* ===== Helper couleurs ===== */
// const getAccentColor = (colorName) => {
//   const palette = {
//     emerald: "rgba(16, 185, 129, 0.12)",
//     blue: "rgba(59, 130, 246, 0.12)",
//     violet: "rgba(139, 92, 246, 0.12)",
//     amber: "rgba(245, 158, 11, 0.12)",
//     rose: "rgba(244, 63, 94, 0.12)",
//     teal: "rgba(20, 184, 166, 0.12)",
//     indigo: "rgba(99, 102, 241, 0.12)",
//     orange: "rgba(249, 115, 22, 0.12)",
//   };
//   return palette[colorName] || "rgba(238, 114, 31, 0.12)";
// };

// export default About;




import React from "react";
import {
  Ear,
  HeartHandshake,
  Users,
  Brain,
  HandHeart,
  Route,
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
  ];

  // ♾️ Duplication pour le défilement infini
  const infiniteCards = [...orientationOffers, ...orientationOffers];

  return (
    <>
      {/* ===== HERO ===== */}
      <header className="header-hero">
        <img 
          src="/about8.jpg?w=800&q=75"
          alt="Groupe Scolaire L'Atome" 
          className="hero-background" 
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="titre">À propos de nous</h1>
          <p className="hero-subtitle">Un cadre bienveillant pour réussir</p>
        </div>
      </header>

      {/* ===== INTRO : Présentation ===== */}
      <section className="intro-section">
        <div className="intro-container">
          <div className="intro-content">
            <h2 className="intro-title">Groupe Scolaire L'Atome</h2>
            <div className="intro-text">
              <p>
                Depuis plus de 15 ans, nous croyons profondément que chaque enfant possède une manière unique d'apprendre et de grandir. Nous savons aussi que le parcours scolaire peut parfois sembler complexe, surtout lorsque votre enfant rencontre des difficultés spécifiques. C'est pour cela que nous avons construit une approche centrée sur l'écoute, la bienveillance et l'accompagnement. Notre équipe est à vos côtés pas seulement pour enseigner, mais pour comprendre, guider et soutenir toute la famille.
              </p>
            </div>

            <div className="intro-stats">
              <StatItem number="15+" label="Années d'expérience" />
              <StatItem number="500+" label="Familles accompagnées" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CARTES HORIZONTALES : Carousel infini ===== */}
      <section className="offers-section">
        <div className="section-header">
          <h2 className="offers-title">Soutien personnalisé</h2>
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
                <div className="card-icon-wrapper">
                  <card.Icon className="card-icon" size={28} strokeWidth={1.5} />
                  <div className="icon-glow" />
                </div>

                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                </div>

                <div className="card-accent-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TÉMOIGNAGES ===== */}
      {/* <Temoignages /> */}

      {/* ===== STYLES ===== */}
      <style jsx>{`
        /* ===== BASE ===== */
        * { box-sizing: border-box; }

        /* ===== HERO SECTION ===== */
        .header-hero { 
          position: relative; 
          text-align: center; 
          min-height: 550px; 
          overflow: hidden; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
        }
        
        .hero-background { 
          position: absolute; 
          top: 0; 
          left: 0; 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          z-index: 0; 
        }
        
        .hero-overlay { 
          position: absolute; 
          top: 0; 
          left: 0; 
          right: 0; 
          bottom: 0; 
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.5) 100%); 
          z-index: 1; 
        }
        
        .hero-content { 
          position: relative; 
          z-index: 2; 
          padding: 140px 70px; 
        }
        
        /* Titre "À propos de nous" en ORANGE */
        .titre { 
          text-shadow: 2px 2px 30px rgba(0, 0, 0, 0.5); 
          font-size: 4rem; 
          font-weight: bold; 
          font-family: 'Georgia', 'Times New Roman', serif; 
          color: #ee721f;
          margin: 0 0 16px 0; 
        }
        
        /* Sous-titre plus bref */
        .hero-subtitle { 
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; 
          font-size: 1.2rem; 
          color: rgba(255, 255, 255, 0.95); 
          margin: 0; 
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

        /* Titre "Groupe Scolaire L'Atome" en NOIR avec style contact-title */
        .intro-title {
          font-family: "Playfair Display", "Georgia", serif;
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: #0f172a;
          margin: 0 0 2rem 0;
          position: relative;
          display: inline-block;
          padding-bottom: 15px;
          text-align: center;
          width: 100%;
        }

        .intro-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: #ee721f;
          border-radius: 3px;
        }

        .intro-text {
          font-size: 1.1rem;
          line-height: 1.9;
          color: #475569;
          margin-bottom: 3rem;
          font-family: "Inter", system-ui, sans-serif;
        }

        .intro-text p { 
          margin-bottom: 1.2rem; 
        }
        
        .intro-text strong { 
          color: #1e293b; 
          font-weight: 600; 
        }

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

        /* ===== OFFERS SECTION ===== */
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

        /* Titre "Soutien personnalisé" */
        .offers-title {
          font-family: "Playfair Display", "Georgia", serif;
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: #0f172a;
          margin: 0;
          position: relative;
          display: inline-block;
          padding-bottom: 15px;
        }

        .offers-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: #ee721f;
          border-radius: 3px;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #64748b;
          line-height: 1.7;
          font-family: "Inter", sans-serif;
          margin-top: 1.5rem;
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

        /* Cartes horizontales */
        .offer-card-horizontal {
          flex: 0 0 340px;
          height: 95px;
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
          .offer-card-horizontal { flex: 0 0 310px; height: 90px; }
        }

        @media (max-width: 768px) {
          .header-hero { min-height: 400px; }
          .hero-content { padding: 100px 20px; }
          .titre { font-size: 2.5rem; }
          .hero-subtitle { font-size: 1rem; }
          
          .intro-section { padding: 3.5rem 1.25rem; }
          .intro-title { font-size: 1.6rem; }
          .intro-text { font-size: 1rem; }
          .intro-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          .stat-number { font-size: 1.7rem; }
          
          .offers-title { font-size: 1.8rem; }
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
          .titre { font-size: 2rem; }
          .hero-subtitle { font-size: 0.9rem; }
          .intro-stats { grid-template-columns: 1fr; }
          .offer-card-horizontal { flex: 0 0 260px; height: 80px; }
          .offers-title { font-size: 1.5rem; }
        }

        @media (prefers-reduced-motion: reduce) {
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
    rose: "rgba(244, 63, 94, 0.12)",
    teal: "rgba(20, 184, 166, 0.12)",
    indigo: "rgba(99, 102, 241, 0.12)",
  };
  return palette[colorName] || "rgba(238, 114, 31, 0.12)";
};

export default About;