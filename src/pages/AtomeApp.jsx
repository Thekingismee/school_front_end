import React, { useState } from "react";
import { DownloadOutlined, AppleOutlined, AndroidOutlined, CheckCircleOutlined, StarOutlined, UserOutlined, CalendarOutlined, BookOutlined, MessageOutlined } from "@ant-design/icons";
import Button from "../components/Accueil/Button";
import Temoignages from "../components/Accueil/Temoignages";

const AtomeApp = () => {
  const [activeTab, setActiveTab] = useState('features');

  // Liens officiels des stores
  const APP_STORE_LINK = "https://apps.apple.com/us/app/gs-latome/id6759558865";
  const PLAY_STORE_LINK = "https://play.google.com/store/apps/details?id=com.koolskools.atom";

  const features = [
    {
      icon: <UserOutlined />,
      title: "Profil élève",
      description: "Accès sécurisé au profil de votre enfant avec toutes les informations importantes."
    },
    {
      icon: <CalendarOutlined />,
      title: "Emploi du temps",
      description: "Consultez l'emploi du temps en temps réel et les modifications apportées."
    },
    {
      icon: <BookOutlined />,
      title: "Notes & bulletins",
      description: "Suivez les notes, les appréciations et téléchargez les bulletins scolaires."
    },
    {
      icon: <MessageOutlined />,
      title: "Messagerie",
      description: "Échangez directement avec les enseignants et l'administration scolaire."
    },
    {
      icon: <CheckCircleOutlined />,
      title: "Absences & retards",
      description: "Justifiez les absences en ligne et consultez l'historique des retards."
    },
    {
      icon: <StarOutlined />,
      title: "Activités extrascolaires",
      description: "Inscrivez-vous aux activités périscolaires et consultez les événements."
    }
  ];

  const testimonials = [
    {
      name: "Marie Dupont",
      role: "Parent d'élève",
      content: "L'application Atome a révolutionné notre quotidien. Plus besoin de chercher les bulletins dans le cartable !",
      rating: 5
    },
    {
      name: "Pierre Martin",
      role: "Parent d'élève",
      content: "Interface intuitive et fonctionnalités complètes. Un vrai gain de temps pour suivre la scolarité de mes enfants.",
      rating: 5
    },
    {
      name: "Sophie Leroy",
      role: "Parent d'élève",
      content: "La messagerie instantanée avec les professeurs est une fonctionnalité indispensable.",
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Section */}
      {/* <header className="app-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">Application Mobile</p>
            <h1>L'Atome App</h1>
            <p className="hero-subtitle">
              Restez connecté à la vie scolaire de vos enfants avec notre application mobile intuitive et sécurisée.
            </p>
            <div className="download-buttons">
              <a href={APP_STORE_LINK} target="_blank" rel="noopener noreferrer" className="store-btn">
                <AppleOutlined /> App Store
              </a>
              <a href={PLAY_STORE_LINK} target="_blank" rel="noopener noreferrer" className="store-btn">
                <AndroidOutlined /> Google Play
              </a>
            </div>
            <div className="store-badges">
              <span className="badge">✓ Gratuit</span>
              <span className="badge">✓ Sécurisé</span>
              <span className="badge">✓ Mise à jour régulière</span>
            </div>
          </div>
          <div className="hero-image">
            <img src="/app-mockup.png" alt="Atome App Mockup" onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<div class="mockup-placeholder">📱 Aperçu de l\'application</div>';
            }} />
          </div>
        </div>
      </header> */}

      {/* Navigation Tabs */}
      <nav className="app-nav">
        <div className="nav-container">
          <button
            className={`nav-tab ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Fonctionnalités
          </button>
          <button
            className={`nav-tab ${activeTab === 'download' ? 'active' : ''}`}
            onClick={() => setActiveTab('download')}
          >
            Téléchargement
          </button>
          {/* <button
            className={`nav-tab ${activeTab === 'testimonials' ? 'active' : ''}`}
            onClick={() => setActiveTab('testimonials')}
          >
            Avis
          </button> */}
        </div>
      </nav>

      {/* Content Sections */}
      <main className="app-main">
        {activeTab === 'features' && (
          <section className="features-section">
            <div className="section-header">
              <h2>Toutes les fonctionnalités à portée de main</h2>
              <p>Découvrez comment notre application facilite votre quotidien de parent.</p>
            </div>
            <div className="features-grid">
              {features.map((feature, index) => (
                <article key={index} className="feature-card">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'download' && (
          <section className="download-section">
            <div className="download-content">
              <div className="download-text">
                <h2>Téléchargez L'Atome App</h2>
                <p>Disponible gratuitement sur iOS et Android. Installation simple et sécurisée.</p>
                
                <div className="download-options">
                  <a href={APP_STORE_LINK} target="_blank" rel="noopener noreferrer" className="download-option">
                    <div className="platform-icon apple">
                      <AppleOutlined />
                    </div>
                    <div className="platform-info">
                      <h4>iOS - App Store</h4>
                      <p>Version 2.1.0 • 45 MB</p>
                      <small>Compatible iPhone & iPad • iOS 13.0+</small>
                    </div>
                    <DownloadOutlined className="download-arrow" />
                  </a>
                  
                  <a href={PLAY_STORE_LINK} target="_blank" rel="noopener noreferrer" className="download-option">
                    <div className="platform-icon android">
                      <AndroidOutlined />
                    </div>
                    <div className="platform-info">
                      <h4>Android - Google Play</h4>
                      <p>Version 2.1.0 • 38 MB</p>
                      <small>Compatible Android 8.0+</small>
                    </div>
                    <DownloadOutlined className="download-arrow" />
                  </a>
                </div>

                <div className="security-note">
                  <CheckCircleOutlined />
                  <span>Téléchargement sécurisé • Données chiffrées • Conformité RGPD</span>
                </div>
              </div>
              
              <div className="download-qr">
                {/* <div className="qr-wrapper"> */}
                  <img className="qr-wrapper" src="/qr-code.png" alt="QR Code de téléchargement" onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="qr-placeholder">🔲 QR Code</div>';
                  }} />
                {/* </div> */}
                <p>Scannez pour télécharger</p>
                <small>Compatible tous appareils</small>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'testimonials' && (
          <section className="testimonials-section">
            <div className="section-header">
              <h2>Ce que disent nos utilisateurs</h2>
              <p>Des parents satisfaits qui recommandent L'Atome App.</p>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <article key={index} className="testimonial-card">
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarOutlined key={i} className="star-filled" />
                    ))}
                  </div>
                  <p className="testimonial-content">"{testimonial.content}"</p>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* CTA Section */}
      <section className="app-cta">
        <div className="cta-content">
          <h2>Prêt à simplifier votre quotidien ?</h2>
          <p>Téléchargez L'Atome App et rejoignez notre communauté de parents connectés.</p>
          <div className="cta-buttons">
            <a href={APP_STORE_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn store-btn">
              <AppleOutlined /> App Store
            </a>
            <a href={PLAY_STORE_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn store-btn">
              <AndroidOutlined /> Google Play
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .app-hero {
          position: relative;
          min-height: 650px;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at top right, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                      radial-gradient(ellipse at bottom left, rgba(139, 92, 246, 0.15) 0%, transparent 50%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 50px;
          align-items: center;
          color: white;
        }

        .hero-text {
          max-width: 550px;
        }

        .eyebrow {
          color: #fbbf24;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .eyebrow::before {
          content: '✨';
        }

        .hero-content h1 {
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          font-weight: 800;
          margin: 0 0 24px;
          line-height: 1.05;
          background: linear-gradient(135deg, #fff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          line-height: 1.7;
          margin: 0 0 32px;
          color: rgba(255, 255, 255, 0.9);
        }

        .download-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .store-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: white;
          color: #0f172a;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
        }

        .store-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          color: #0f172a;
        }

        .store-btn :global(.anticon) {
          font-size: 1.3rem;
        }

        .store-badges {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
        }

        .badge::before {
          content: '✓';
          color: #22c55e;
          font-weight: bold;
        }

        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image img {
          width: 100%;
          max-width: 320px;
          height: auto;
          border-radius: 30px;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
          border: 8px solid rgba(255, 255, 255, 0.1);
        }

        .mockup-placeholder,
        .qr-placeholder {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, #334155, #475569);
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.1rem;
          border: 2px dashed rgba(255, 255, 255, 0.2);
        }

        .qr-placeholder {
          height: 150px;
          border-radius: 16px;
        }

        .app-nav {
          background: white;
          border-bottom: 1px solid #e5e7eb;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .nav-tab {
          padding: 18px 28px;
          border: none;
          background: none;
          font-size: 1rem;
          font-weight: 500;
          color: #64748b;
          cursor: pointer;
          border-bottom: 3px solid transparent;
          transition: all 0.25s ease;
          position: relative;
        }

        .nav-tab:hover {
          color: #3b82f6;
          background: #f8fafc;
        }

        .nav-tab.active {
          color: #3b82f6;
          border-bottom-color: #3b82f6;
          font-weight: 600;
        }

        .app-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 70px 24px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: #0f172a;
          margin: 0 0 16px;
          font-weight: 700;
        }

        .section-header p {
          font-size: 1.15rem;
          color: #64748b;
          margin: 0;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 28px;
        }

        .feature-card {
          background: white;
          border-radius: 20px;
          padding: 36px 32px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid #f1f5f9;
        }

        .feature-card:hover {
          transform: translateY(-6px);
        //   box-shadow: 0 12px 40px rgba(59, 130, 246, 0.15);
        //   border-color: rgba(59, 130, 246, 0.3);
        }

        .feature-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: #df881e;
          font-size: 28px;
          border: 2px solid rgba(203, 118, 34, 0.99);
          transition: all 0.3s ease;
        }

        .feature-card h3 {
          font-size: 1.3rem;
          color: #0f172a;
          margin: 0 0 14px;
          font-weight: 600;
        }

        .feature-card p {
          color: #64748b;
          line-height: 1.7;
          margin: 0;
          font-size: 1rem;
        }

        .download-section {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border-radius: 24px;
          padding: 56px;
          border: 1px solid #e2e8f0;
        }

        .download-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: start;
        }

        .download-text h2 {
          font-size: 2.3rem;
          color: #0f172a;
          margin: 0 0 16px;
          font-weight: 700;
        }

        .download-text p {
          color: #64748b;
          font-size: 1.1rem;
          margin: 0 0 40px;
          line-height: 1.7;
        }

        .download-options {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 32px;
        }

        .download-option {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .download-option:hover {
          transform: translateX(5px);
          border-color: #3b82f6;
        }

        .platform-icon {
          width: 60px;
          height: 60px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          flex-shrink: 0;
        }

        .platform-icon.apple {
          background: linear-gradient(135deg, #000, #333);
          color: white;
        }

        .platform-icon.android {
          background: linear-gradient(135deg, #3ddc84, #2ecc71);
          color: white;
        }

        .platform-info {
          flex: 1;
        }

        .platform-info h4 {
          margin: 0 0 4px;
          font-size: 1.15rem;
          color: #0f172a;
          font-weight: 600;
        }

        .platform-info p {
          margin: 0 0 2px;
          color: #64748b;
          font-weight: 500;
          font-size: 0.95rem;
        }

        .platform-info small {
          color: #94a3b8;
          font-size: 0.85rem;
        }

        .download-arrow {
          color: #94a3b8;
          font-size: 1.2rem;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .download-option:hover .download-arrow {
          color: #3b82f6;
          transform: translateX(4px);
        }

        .security-note {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: #ecfdf5;
          border-radius: 12px;
          border-left: 4px solid #22c55e;
        }

        .security-note :global(.anticon) {
          color: #22c55e;
          font-size: 1.3rem;
        }

        .security-note span {
          color: #065f46;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .download-qr {
          text-align: center;
          padding: 20px;
        }

        .qr-wrapper {
          background: white;
          padding: 20px;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
        }

        .download-qr img {
          width: 350px;
          height: 350px;
          object-fit: contain;
        }

        .download-qr p {
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 8px;
          font-size: 1.05rem;
        }

        .download-qr small {
          color: #64748b;
          font-size: 0.9rem;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 28px;
        }

        .testimonial-card {
          background: white;
          border-radius: 20px;
          padding: 36px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid #f1f5f9;
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
        }

        .rating {
          color: #fbbf24;
          margin-bottom: 20px;
          font-size: 1.1rem;
        }

        .star-filled {
          color: #fbbf24 !important;
        }

        .testimonial-content {
          font-size: 1.1rem;
          color: #334155;
          line-height: 1.7;
          margin: 0 0 24px;
          font-style: italic;
        }

        .testimonial-author strong {
          display: block;
          color: #0f172a;
          margin-bottom: 2px;
          font-size: 1.05rem;
        }

        .testimonial-author span {
          color: #64748b;
          font-size: 0.95rem;
        }

        .app-cta {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: white;
          padding: 90px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .app-cta::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
          border-radius: 50%;
        }

        .cta-content {
          max-width: 700px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .cta-content h2 {
          font-size: 2.6rem;
          margin: 0 0 20px;
          font-weight: 700;
          line-height: 1.2;
        }

        .cta-content p {
          font-size: 1.2rem;
          margin: 0 0 40px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-btn.store-btn {
          background: white;
          color: #0f172a;
          padding: 16px 32px;
          font-size: 1.05rem;
        }

        .cta-btn.store-btn:hover {
          background: #f8fafc;
          color: #0f172a;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 50px;
          }

          .hero-text {
            margin: 0 auto;
          }

          .download-buttons,
          .store-badges,
          .cta-buttons {
            justify-content: center;
          }

          .download-content {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .download-qr {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .app-hero {
            min-height: auto;
            padding: 60px 0;
          }

          .hero-content h1 {
            font-size: 2.3rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .features-grid,
          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .section-header h2,
          .download-text h2,
          .cta-content h2 {
            font-size: 2rem;
          }

          .download-section {
            padding: 40px 24px;
          }

          .nav-container {
            overflow-x: auto;
            justify-content: flex-start;
            padding: 0 16px;
          }

          .nav-tab {
            padding: 14px 20px;
            font-size: 0.95rem;
            white-space: nowrap;
          }
        }

        @media (max-width: 480px) {
          .download-buttons {
            flex-direction: column;
            align-items: center;
          }

          .store-btn {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-btn.store-btn {
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>
    </>
  );
};

export default AtomeApp;