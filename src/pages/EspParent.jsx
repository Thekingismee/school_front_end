import React, { useState } from "react";
import HomeGallery from "../components/Accueil/HomeGallery";
import Temoignages from "../components/Accueil/Temoignages";
import { RightOutlined, MailOutlined, BellOutlined, CaretRightOutlined } from "@ant-design/icons";

const EspParent = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const notifications = [
    {
      title: "Recevez les actualités de l'école",
      description: "Soyez informé en temps réel des événements, des dates importantes et des changements de planning."
    },
    {
      title: "Alertes administratives",
      description: "Recevez les informations relatives aux factures, aux remises à jour de règlement et aux communications officielles."
    },
    {
      title: "Rappels personnalisés",
      description: "Ne manquez aucune échéance grâce aux rappels pour les réunions parents, les vacances et les activités extrascolaires."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  return (
    <>
      <header className="inscription-header-hero">
        <img src="/inscrip2.jpg" alt="Recrutement Groupe Scolaire L'Atome" className="hero-background" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="inscription-titre">Espace parents</h1>
          <p className="hero-subtitle">Un espace pensé pour accompagner les familles au quotidien.</p>
        </div>
      </header>

      <main className="parent-page">
        <section className="parent-section parent-intro">
          <div className="parent-image">
            <img src="/lieu.jpg" alt="Parents et enfants au groupe scolaire" onError={(e) => e.target.style.display = 'none'} />
          </div>
          <div className="parent-copy">
            <p className="eyebrow" style={{color:"#e58028"}}>Un espace dédié aux parents</p>
            <h2>Tout ce dont vous avez besoin pour suivre la scolarité de votre enfant</h2>
            <p>
              Nous mettons à votre disposition un espace performant et intuitif pour suivre les actualités de l'établissement, recevoir les notifications importantes et accéder facilement aux services dédiés aux familles.
            </p>
            <ul>
              <li><RightOutlined /> Suivi pédagogique clair et structuré</li>
              <li><RightOutlined /> Informations pratiques en un seul endroit</li>
              <li><RightOutlined /> Un accompagnement responsable et transparent</li>
            </ul>
          </div>
        </section>

        <section className="parent-app">
          <div className="app-copy">
            <p className="eyebrow" style={{color:"#e58028"}}>Connexion à l'application l'Atome</p>
            <h2>Accédez à l'application mobile dédiée aux parents</h2>
            <p>
              Suivez les notes, consultez l'emploi du temps, communiquez avec les enseignants et recevez toutes les alertes directement depuis votre smartphone.
            </p>
            <div className="app-features">
              <div className="feature-item"><MailOutlined /> Messagerie instantanée</div>
              <div className="feature-item"><BellOutlined /> Notifications en temps réel</div>
              <div className="feature-item"><RightOutlined /> Suivi administratif simplifié</div>
            </div>
          </div>
          {/* <div className="app-preview">
            <img src="/app-mockup.png" alt="Aperçu de l'application l'Atome" onError={(e) => e.target.style.display = 'none'} />
          </div> */}
        </section>

        <section className="parent-section parent-newsletter">
          <div className="newsletter-copy">
            <p className="eyebrow" style={{color:"#e58028"}}>Newsletter & Notifications</p>
            <h2>Restez informé et recevez les dernières actualités</h2>
            <p>
              Inscrivez-vous à notre newsletter pour recevoir les informations importantes sur la vie scolaire, les événements et les dates clés. Grâce aux notifications, vous ne manquez rien du quotidien de votre enfant.
            </p>
          </div>
          <div className="newsletter-accordion">
            {notifications.map((item, index) => (
              <div key={index} className={`accordion-item ${activeAccordion === index ? "active" : ""}`}>
                <button className="accordion-header" onClick={() => toggleAccordion(index)}>
                  <span>{item.title}</span>
                  <CaretRightOutlined className={activeAccordion === index ? "open" : ""} />
                </button>
                {activeAccordion === index && (
                  <div className="accordion-body">
                    <p>{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <HomeGallery />
      <Temoignages />

      <style jsx>{`
        .inscription-header-hero { position: relative; text-align: center; min-height: 560px; overflow: hidden; display: flex; align-items: center; justify-content: center; }
        .hero-background { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
        .hero-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.5) 100%); z-index: 1; }
        .hero-content { position: relative; z-index: 2; padding: 120px 24px; max-width: 920px; }
        .inscription-titre { text-shadow: 2px 2px 30px rgba(0, 0, 0, 0.5); font-size: clamp(2.8rem, 5vw, 4rem); font-weight: bold; font-family: 'Georgia', 'Times New Roman', serif; color: #fff; margin: 0 0 16px 0; }
        .hero-subtitle { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 1.1rem; color: rgba(255, 255, 255, 0.9); margin: 0; }

        .parent-page { max-width: 1200px; margin: 0 auto; padding: 60px 20px 40px; }
        .parent-section { margin-bottom: 60px; display: grid; gap: 32px; align-items: center; }

        .parent-intro { grid-template-columns: 1fr 1fr; }
        .parent-image img { width: 100%; height: auto; border-radius: 50%; object-fit: cover; box-shadow: 0 24px 60px rgba(16, 38, 59, 0.12); }
        .parent-copy { padding: 24px; }
        .eyebrow { display: inline-block; text-transform: uppercase; letter-spacing: 0.2em; font-size: 0.8rem; color: #1d4ed8; font-weight: 700; margin-bottom: 18px; }
        .parent-copy h2 { margin: 0 0 18px; font-size: clamp(2rem, 3vw, 2.8rem); color: #10263b; line-height: 1.1; }
        .parent-copy p { margin: 0 0 24px; color: #475569; line-height: 1.85; font-size: 1rem; }
        .parent-copy ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 14px; }
        .parent-copy li { display: flex; align-items: flex-start; gap: 12px; color: #334155; font-size: 1rem; }
        .parent-copy li svg { color: #1d4ed8; margin-top: 4px; }

        .parent-app { grid-template-columns: 0.95fr 1fr; background: #f8fbff; border-radius: 28px; padding: 36px; box-shadow: 0 24px 80px rgba(15, 30, 60, 0.08); margin-bottom: 60px; }
        .app-copy { padding-right: 20px; }
        .app-copy h2 { margin: 0 0 18px; font-size: clamp(2rem, 3vw, 2.6rem); color: #10263b; }
        .app-copy p { color: #475569; line-height: 1.8; margin: 0 0 24px; }
        .app-features { display: grid; gap: 14px; }
        .feature-item { display: flex; align-items: center; gap: 12px; color: #334155; font-weight: 600; }
        .feature-item svg { color: #1d4ed8; font-size: 1.2rem; }
        .app-preview img { width: 100%; border-radius: 28px; object-fit: cover; box-shadow: 0 24px 80px rgba(15, 30, 60, 0.08); }

        .parent-newsletter { grid-template-columns: 1fr 1fr; }
        .newsletter-copy { padding: 24px; }
        .newsletter-copy h2 { margin: 0 0 18px; font-size: clamp(2rem, 3vw, 2.6rem); color: #10263b; }
        .newsletter-copy p { margin: 0; color: #475569; line-height: 1.8; }
        .newsletter-accordion { display: grid; gap: 14px; }

        .accordion-item { border-radius: 16px; overflow: hidden; border: 1px solid rgba(15, 23, 42, 0.1); background: white; box-shadow: 0 14px 30px rgba(15, 30, 60, 0.05); }
        .accordion-header { width: 100%; padding: 22px 24px; display: flex; align-items: center; justify-content: space-between; border: none; background: white; cursor: pointer; transition: background 0.3s ease; font-size: 1rem; font-weight: 700; color: #10263b; }
        .accordion-header:hover { background: #f8fafc; }
        .accordion-body { padding: 18px 24px 24px; background: #f8fafc; }
        .accordion-body p { margin: 0; color: #475569; line-height: 1.8; }
        .accordion-header .anticon { transition: transform 0.3s ease; color: #1d4ed8; }
        .accordion-header .anticon.open { transform: rotate(90deg); }

        @media (max-width: 1024px) {
          .parent-intro,
          .parent-app,
          .parent-newsletter { grid-template-columns: 1fr; }
          .parent-app, .parent-newsletter { padding: 28px; }
        }

        @media (max-width: 720px) {
          .inscription-header-hero { min-height: 420px; }
          .hero-content { padding: 100px 24px; }
          .parent-page { padding: 40px 16px 30px; }
          .parent-copy, .newsletter-copy { padding: 20px 0; }
          .app-copy { padding-right: 0; }
        }

        @media (max-width: 520px) {
          .inscription-titre { font-size: 2.4rem; }
          .hero-subtitle { font-size: 1rem; }
          .accordion-header { padding: 18px 20px; }
          .accordion-body { padding: 16px 20px 20px; }
        }
      `}</style>
    </>
  );
};

export default EspParent;
