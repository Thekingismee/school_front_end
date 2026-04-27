import React, { useState, useEffect } from "react";
import {
  MessageCircle,
  MapPin,
  FileCheck,
  BadgeCheck,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import ContactPopup from "../components/Accueil/ContactPopup";

function ModalitesInscription() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = index => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  // Données des étapes — icônes vectorielles chaleureuses
  const stepsData = [
    {
      id: "contact",
      title: "Prise de contact",
      description: "Formulaire en ligne ou appel pour fixer un rendez-vous personnalisé.",
      Icon: MessageCircle,
      color: "blue"
    },
    {
      id: "visite",
      title: "Visite et entretien",
      description: "Découverte des locaux et échange bienveillant avec l'équipe pédagogique.",
      Icon: MapPin,
      color: "emerald"
    },
    {
      id: "dossier",
      title: "Dépôt du dossier",
      description: "Fournissez les documents nécessaires à l'inscription en toute simplicité.",
      Icon: FileCheck,
      color: "amber"
    },
    {
      id: "confirmation",
      title: "Confirmation",
      description: "Validation du dossier, signature du contrat et règlement des frais.",
      Icon: BadgeCheck,
      color: "violet"
    }
  ];

  // ♾️ Duplication pour l'effet de défilement infini fluide
  const infiniteSteps = [...stepsData, ...stepsData, ...stepsData];

  // Données des documents par niveau
  const documentsData = [
    {
      title: "📋 Tous niveaux",
      subtext: "Documents communs à Maternelle, Primaire, Collège, Lycée",
      items: [
        "Certificat de radiation (quittant l'établissement précédent)",
        "Copie de l'acte de naissance",
        "6 photos d'identité récentes",
        "Copie de la carte nationale du père ou du tuteur",
        "Chemise cartonnée (dossier)",
        "Carte d'élève (pour les anciens élèves)"
      ]
    },
    {
      title: "🎓 Collège & Lycée",
      subtext: "Documents spécifiques pour les nouveaux inscrits",
      items: [
        "Certificat de départ signé par l'établissement précédent",
        "Copie de l'acte de naissance",
        "6 photos récentes",
        "Copie de la carte nationale du père ou du tuteur",
        "Carte d'élève verte (si disponible)",
        "Dossier en plastique bleu",
        "Dossier scolaire validé (notamment pour le baccalauréat)"
      ]
    },
    {
      title: "📚 Primaire",
      subtext: "Documents spécifiques pour le cycle primaire",
      items: [
        "Certificat de radiation",
        "Copie de l'acte de naissance",
        "6 photos d'identité",
        "Copie de la carte nationale du parent ou tuteur",
        "Dossier en plastique bleu",
        "Certificat médical (selon les cas)"
      ]
    }
  ];

  // Gestion de l'animation du carousel
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  return (
    <div>
      {/* ===== HERO SECTION — Style unifié avec titre en deux parties ===== */}
      <header className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-main">Modalités</span>
            <span className="hero-title-accent">d'Inscription</span>
          </h1>
          <p className="hero-subtitle">
            Un processus clair, transparent et rapide pour inscrire votre enfant
          </p>
          <div className="hero-decoration">
            <span className="hero-line"></span>
          </div>
        </div>
      </header>

      {/* ===== ÉTAPES D'INSCRIPTION — Carousel infini avec cartes horizontales ===== */}
      <section className="steps-section">
        <div className="section-header">
          <h2>
            Procédure en <span className="highlight">4 étapes</span>
          </h2>
          <p className="section-subtitle">
            Simple, rapide et accompagnée à chaque étape
          </p>
        </div>

        <div 
          className="steps-carousel-wrapper"
          onMouseEnter={() => setIsCarouselHovered(true)}
          onMouseLeave={() => setIsCarouselHovered(false)}
        >
          <div 
            className="steps-carousel-track"
            style={{ animationPlayState: isCarouselHovered ? 'paused' : 'running' }}
          >
            {infiniteSteps.map((step, index) => {
              const Icon = step.Icon;
              return (
                <article
                  key={`${step.id}-${index}`}
                  className="step-card-horizontal"
                  style={{ "--accent-color": getAccentColor(step.color) }}
                >
                  {/* Numéro d'étape */}
                  <div className="step-badge">{String((index % stepsData.length) + 1).padStart(2, '0')}</div>
                  
                  {/* Icône à gauche */}
                  <div className="card-icon-wrapper">
                    <Icon className="card-icon" size={26} strokeWidth={1.8} />
                    <div className="icon-glow" />
                  </div>

                  {/* Texte à droite */}
                  <div className="card-content">
                    <h3 className="card-title">{step.title}</h3>
                    <p className="card-description">{step.description}</p>
                  </div>

                  {/* Ligne décorative */}
                  <div className="card-accent-line" />
                </article>
              );
            })}
          </div>
          
          {/* Masques de fondu aux extrémités */}
          <div className="carousel-fade-left" aria-hidden="true" />
          <div className="carousel-fade-right" aria-hidden="true" />
        </div>
      </section>

      {/* ===== BOUTON CONTACT HORIZONTAL — Juste après les cartes ===== */}
      <section className="contact-cta-section">
        <div className="contact-cta-wrapper">
          {/* Overlay décoratif animé entre orange et bleu */}
          <div className="contact-cta-overlay" aria-hidden="true" />
          
          <div className="contact-cta-content">
            <div className="contact-cta-text">
              <h3>Une question sur votre dossier ?</h3>
              <p>Notre équipe administrative vous répond sous 24h</p>
            </div>
            
            <button
              className="contact-cta-btn"
              onClick={() => setIsContactOpen(true)}
            >
              <span className="btn-text">Nous contacter</span>
              <ArrowRight className="btn-icon" size={18} />
              <span className="btn-glow" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== DOCUMENTS REQUIS — Cards expandibles harmonisées ===== */}
      <section className="documents-section">
        <div className="section-header">
          <h2>
            Documents <span className="highlight">à fournir</span>
          </h2>
          <p className="section-subtitle">
            Cliquez sur chaque carte pour découvrir la liste complète
          </p>
        </div>

        <div className="documents-grid">
          {documentsData.map((doc, index) => (
            <div
              key={index}
              className={`doc-card ${expandedCard === index ? "expanded" : ""}`}
            >
              <button
                className="doc-card-header"
                onClick={() => toggleExpand(index)}
                aria-expanded={expandedCard === index}
              >
                <div className="doc-card-title">
                  <span className="doc-card-icon">{doc.title.split(" ")[0]}</span>
                  <div>
                    <h3>{doc.title.replace(doc.title.split(" ")[0], "").trim()}</h3>
                    <p className="doc-card-subtext">{doc.subtext}</p>
                  </div>
                </div>
                <ChevronDown 
                  className={`doc-card-toggle ${expandedCard === index ? "open" : ""}`} 
                  size={20} 
                />
              </button>
              
              <div className="doc-card-content">
                <ul className="documents-list">
                  {doc.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <span className="list-check">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== POPUP CONTACT ===== */}
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* ===== STYLES ===== */}
      <style jsx>{`
        /* ===== BASE ===== */
        * { box-sizing: border-box; }

        /* ===== HERO SECTION — Style unifié ===== */
        .hero-section {
          position: relative;
          min-height: 65vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-image: url("/walpap3.jpg");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.88);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          padding: 20px;
        }

        .hero-title {
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .hero-title-main {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 400;
          letter-spacing: 2px;
          color: rgba(15, 23, 42, 0.95);
          font-family: "Poppins", "Segoe UI", sans-serif;
          text-transform: uppercase;
        }

        .hero-title-accent {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          letter-spacing: 3px;
          color: #ee721f;
          font-family: "Playfair Display", serif;
          text-transform: uppercase;
          position: relative;
          display: inline-block;
          margin: 0 auto;
        }

        .hero-title-accent::before {
          content: "";
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #ee721f, transparent);
          border-radius: 3px;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.2rem);
          font-weight: 400;
          margin-top: 35px;
          color: #475569;
          font-family: "Inter", sans-serif;
          letter-spacing: 0.5px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-decoration {
          margin-top: 25px;
        }

        .hero-line {
          display: inline-block;
          width: 50px;
          height: 2px;
          background: #ee721f;
          border-radius: 2px;
          position: relative;
        }

        .hero-line::before,
        .hero-line::after {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ee721f;
          top: 50%;
          transform: translateY(-50%);
        }
        .hero-line::before { left: -18px; }
        .hero-line::after { right: -18px; }

        /* ===== SECTIONS COMMUNES ===== */
        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 3rem;
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

        /* ===== STEPS SECTION — Carousel infini avec cartes horizontales ===== */
        .steps-section {
          padding: 4rem 0 3rem;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
        }

        .steps-carousel-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 0.5rem 0;
        }

        .steps-carousel-track {
          display: flex;
          gap: 1.2rem;
          padding: 0.5rem 1rem;
          animation: scrollInfinite 45s linear infinite;
          width: max-content;
          will-change: transform;
        }

        .steps-carousel-track:hover {
          animation-play-state: paused;
        }

        @keyframes scrollInfinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        /* Masques de fondu aux bords pour effet de profondeur */
        .carousel-fade-left,
        .carousel-fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 10;
          pointer-events: none;
        }

        .carousel-fade-left {
          left: 0;
          background: linear-gradient(to right, #f8fafc 0%, transparent 100%);
        }

        .carousel-fade-right {
          right: 0;
          background: linear-gradient(to left, #f8fafc 0%, transparent 100%);
        }

        /* ===== CARTE HORIZONTALE — Plus longue et élégante ===== */
        .step-card-horizontal {
          flex: 0 0 400px; /* ← Plus longue : 400px au lieu de 320px */
          height: 105px;
          background: white;
          border-radius: 16px;
          padding: 0 1.4rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          position: relative;
          box-shadow: 0 2px 14px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(226, 232, 240, 0.7);
          transition: all 0.35s ease;
          overflow: hidden;
        }

        .step-card-horizontal:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
          border-color: transparent;
        }

        .step-badge {
          position: absolute;
          top: 10px;
          right: 14px;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--accent-color, #ee721f);
          background: rgba(238, 114, 31, 0.1);
          padding: 3px 10px;
          border-radius: 20px;
          letter-spacing: 0.5px;
        }

        .card-icon-wrapper {
          position: relative;
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: var(--accent-color, rgba(238, 114, 31, 0.12));
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.35s ease;
        }

        .step-card-horizontal:hover .card-icon-wrapper {
          transform: scale(1.1);
        }

        .card-icon {
          color: #0f172a;
          transition: transform 0.35s ease;
        }

        .step-card-horizontal:hover .card-icon {
          transform: scale(1.08);
        }

        .icon-glow {
          position: absolute;
          inset: -18px;
          border-radius: 50%;
          background: var(--accent-color, rgba(238, 114, 31, 0.25));
          opacity: 0;
          filter: blur(14px);
          transition: opacity 0.35s ease;
        }

        .step-card-horizontal:hover .icon-glow {
          opacity: 1;
        }

        .card-content {
          flex: 1;
          min-width: 0;
          padding: 0.5rem 0;
        }

        .card-title {
          font-size: 1rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 0.25rem 0;
          font-family: "Poppins", sans-serif;
          line-height: 1.35;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-description {
          font-size: 0.82rem;
          color: #64748b;
          margin: 0;
          font-family: "Inter", sans-serif;
          line-height: 1.45;
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
          height: 2.5px;
          background: var(--accent-color, linear-gradient(90deg, #ee721f, #f97316));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }

        .step-card-horizontal:hover .card-accent-line {
          transform: scaleX(1);
        }

        /* ===== CONTACT CTA — Bouton horizontal gradient ===== */
        .contact-cta-section {
          padding: 2rem 1.5rem 4rem;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
        }

        .contact-cta-wrapper {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
        }

        /* Overlay animé entre orange et bleu */
        .contact-cta-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #ee721f 0%, #004494 100%);
          opacity: 0.95;
          transition: opacity 0.4s ease;
          z-index: 1;
        }
        
        .contact-cta-overlay::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #004494 0%, #ee721f 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          animation: gradientShift 8s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.15; }
        }

        .contact-cta-wrapper:hover .contact-cta-overlay::after {
          opacity: 0.25;
        }

        .contact-cta-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 2rem;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .contact-cta-text {
          flex: 1;
          min-width: 200px;
        }

        .contact-cta-text h3 {
          color: white;
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 0.4rem 0;
          font-family: "Poppins", sans-serif;
        }

        .contact-cta-text p {
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          font-size: 0.95rem;
          font-family: "Inter", sans-serif;
        }

        .contact-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: rgba(255, 255, 255, 0.15);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-radius: 50px;
          font-family: "Poppins", sans-serif;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(8px);
        }

        .contact-cta-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.7);
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        }

        .contact-cta-btn:active {
          transform: translateY(0);
        }

        .btn-icon {
          transition: transform 0.3s ease;
        }

        .contact-cta-btn:hover .btn-icon {
          transform: translateX(4px);
        }

        .btn-glow {
          position: absolute;
          inset: -50%;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .contact-cta-btn:hover .btn-glow {
          opacity: 1;
        }

        /* ===== DOCUMENTS SECTION ===== */
        .documents-section {
          padding: 3rem 0 5rem;
          background: #f1f5f9;
        }

        .documents-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .doc-card {
          background: white;
          border: 1px solid #e8e8e8;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .doc-card:hover {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          border-color: #ee721f30;
        }

        .doc-card-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.2rem 1.5rem;
          cursor: pointer;
          background: white;
          transition: background 0.2s ease;
          border: none;
          text-align: left;
        }

        .doc-card-header:hover {
          background: #fef9f5;
        }

        .doc-card-title {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
        }

        .doc-card-icon {
          font-size: 1.8rem;
          flex-shrink: 0;
        }

        .doc-card-title h3 {
          margin: 0;
          color: #0f172a;
          font-size: 1.1rem;
          font-weight: 600;
          font-family: "Poppins", sans-serif;
        }

        .doc-card-subtext {
          margin: 0.2rem 0 0 0;
          font-size: 0.8rem;
          color: #64748b;
          font-family: "Inter", sans-serif;
        }

        .doc-card-toggle {
          color: #ee721f;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .doc-card-toggle.open {
          transform: rotate(180deg);
        }

        .doc-card-content {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, opacity 0.3s ease;
          padding: 0 1.5rem;
        }

        .doc-card.expanded .doc-card-content {
          max-height: 500px;
          opacity: 1;
          padding: 0 1.5rem 1.5rem;
        }

        .documents-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .documents-list li {
          padding: 0.7rem 0;
          border-bottom: 1px solid #f0f0f0;
          display: flex;
          align-items: flex-start;
          gap: 0.7rem;
          color: #475569;
          font-size: 0.9rem;
          font-family: "Inter", sans-serif;
          line-height: 1.5;
        }

        .documents-list li:last-child {
          border-bottom: none;
        }

        .list-check {
          color: #10b981;
          font-weight: 700;
          font-size: 1rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 992px) {
          .hero-title-main { font-size: 2.2rem; }
          .hero-title-accent { font-size: 3rem; }
          .step-card-horizontal { flex: 0 0 370px; height: 100px; }
        }

        @media (max-width: 768px) {
          .hero-section { min-height: 55vh; }
          .hero-title-main { font-size: 1.6rem; }
          .hero-title-accent { font-size: 2.3rem; }
          .hero-subtitle { font-size: 1rem; }
          
          .section-header h2 { font-size: 1.5rem; }
          .section-subtitle { font-size: 1rem; }
          
          .steps-carousel-track {
            gap: 1rem;
            animation-duration: 35s; /* Plus rapide sur mobile */
          }
          
          .step-card-horizontal {
            flex: 0 0 320px;
            height: 95px;
            padding: 0 1.2rem;
          }
          .card-title { font-size: 0.95rem; }
          .card-description { font-size: 0.78rem; }
          
          .contact-cta-content {
            flex-direction: column;
            text-align: center;
            padding: 1.2rem 1.5rem;
          }
          .contact-cta-btn {
            width: 100%;
            justify-content: center;
          }
          
          .doc-card-title h3 { font-size: 1rem; }
          .doc-card-subtext { font-size: 0.75rem; }
          
          .carousel-fade-left,
          .carousel-fade-right {
            width: 40px;
          }
        }

        @media (max-width: 480px) {
          .hero-title-accent { font-size: 1.9rem; }
          .step-card-horizontal { flex: 0 0 290px; height: 90px; }
          .doc-card-header { padding: 1rem 1.2rem; }
          .documents-list li { font-size: 0.85rem; }
          .contact-cta-text h3 { font-size: 1.15rem; }
          .contact-cta-text p { font-size: 0.9rem; }
        }

        /* ===== ACCESSIBILITÉ ===== */
        @media (prefers-reduced-motion: reduce) {
          .step-card-horizontal,
          .doc-card,
          .contact-cta-btn,
          .contact-cta-overlay::after,
          .steps-carousel-track {
            animation: none !important;
            transition: none !important;
          }
        }

        .doc-card-header:focus-visible,
        .contact-cta-btn:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}

/* ===== Helper couleurs pour les accents ===== */
const getAccentColor = (colorName) => {
  const palette = {
    blue: "rgba(59, 130, 246, 0.12)",
    emerald: "rgba(16, 185, 129, 0.12)",
    amber: "rgba(245, 158, 11, 0.12)",
    violet: "rgba(139, 92, 246, 0.12)",
  };
  return palette[colorName] || "rgba(238, 114, 31, 0.12)";
};

export default ModalitesInscription;