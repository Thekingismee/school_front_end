import React, { useState } from "react";
import Temoignages from "../components/Accueil/Temoignages";
import HomeGallery from "../components/Accueil/HomeGallery";
import Button from "../components/Accueil/Button";
import { ArrowRightOutlined, CheckCircleOutlined, RightOutlined } from "@ant-design/icons";

const Admission = () => {
   const steps = [
    { number: '01', title: 'Préinscription', description: 'Remplissez le formulaire en ligne' },
    { number: '02', title: 'Visite personnalisée', description: 'Découvrez nos installations' },
    { number: '03', title: 'Dossier d\'inscription', description: 'Déposez vos documents' },
    { number: '04', title: 'Entretien/Test', description: 'Positionnement de l\'élève' },
    { number: '05', title: 'Validation', description: 'Confirmation de l\'inscription' }
  ];

    return (
        <>
            <header className="header-hero">
                <img src="/inscrip2.jpg" alt="Recrutement Groupe Scolaire L'Atome" className="hero-background" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="titre">Admission</h1>
                    <p className="hero-subtitle">Candidature spontanée & opportunités de carrière</p>
                </div>
            </header>
<div className="rejoindre-section">
<div className="container">
        <div className="content-wrapper">
          <div className="image-content">
            <img src="/matmat2.jfif" alt="Élèves et environnement du Groupe Scolaire L'Atome" />
          </div>
          <div className="text-content">
            <h2 className="section-title">Rejoindre L'Atome</h2>
            <p className="section-text">
              C’est bien plus qu’une inscription : c’est choisir un projet éducatif d’excellence, humain et tourné vers l’avenir.
            </p>
            <p className="section-text">
              Notre processus d’admission est conçu pour être simple, fluide et personnalisé, afin d’accompagner chaque famille dans son choix et chaque élève dans son intégration.
            </p>
            <p className="contact-btn">Des questions?
                 <a href="/contact" className="contact-link">
               Contactez-Nous <ArrowRightOutlined />
            </a>
            </p>
           
          </div>

        </div>
      </div>
</div>
          

           <section className="modalites-section">
      <div className="container">
        <div className="content-wrapper">
          {/* Partie Gauche : Contenu texte */}
          <div className="text-content">
            <h2 className="section-title">Modalités d'inscription</h2>
            <p className="section-text">
              Au <strong>Groupe Scolaire L'Atome</strong>, les modalités d'inscription sont conçues pour être claires, accessibles et rassurantes pour les familles. Chaque étape est expliquée de manière précise afin de faciliter les démarches, de la prise de contact jusqu'à la confirmation de l'inscription.
            </p>
            <p className="section-text">
              Notre équipe accompagne les parents tout au long du processus, en apportant des réponses personnalisées et en assurant un suivi attentif. Cette organisation permet une inscription fluide, dans un climat de confiance, en accord avec les valeurs éducatives du <strong>Groupe Scolaire L'Atome</strong>.
            </p>
            <a className="cta-button" href="/ModalitesInscription">
              Modalités d’inscription  <RightOutlined />
            </a>


          </div>

          {/* Partie Droite : Breadcrumb/Stepper */}
          <div className="breadcrumb-content">
            <div className="steps-container">
              {steps.map((step, index) => (
                <div key={index} className="step-item">
                  <div className="step-connector">
                    {index !== steps.length - 1 && <div className="connector-line"></div>}
                  </div>
                  <div className="step-number">
                    <span>{step.number}</span>
                    {index < steps.length - 1 && <CheckCircleOutlined className="check-icon" />}
                  </div>
                  <div className="step-info">
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
      </section>


      <div className="rejoindre-section">
<div className="container">
        <div className="content-wrapper">
          <div className="text-content">
            <h2 className="section-title">Formulaire de pré-inscription</h2>
            <p className="section-text">
              Ce formulaire nous permet de mieux connaître votre profil ainsi que vos besoins, afin de préparer votre dossier d’inscription dans les meilleures conditions. Il facilite l’étude de votre demande, l’orientation vers l’établissement et le niveau les plus adaptés, et permet d’organiser votre visite de manière efficace. Cette étape nous aide à vous offrir un accompagnement personnalisé tout au long du processus d’inscription au <strong>Groupe Scolaire L'Atome</strong>.
            </p>
           
            <Button href="/inscription">
           Inscrivez vos enfants dès maintenant
        </Button>
           
          </div>
          <div className="image-content">
            <img src="/matmat2.jfif" alt="Élèves et environnement du Groupe Scolaire L'Atome" />
          </div>

        </div>
      </div>
</div>



 <div className="rejoindre-section">
<div className="container">
        <div className="content-wrapper">
          <div className="image-content">
            <img src="/matmat2.jfif" alt="Élèves et environnement du Groupe Scolaire L'Atome" />
          </div>
          <div className="text-content">
            <h2 className="section-title">Demande de visite / rendez-vous</h2>
            <p className="section-text">
              Cette demande de visite ou de rendez-vous vous permet de découvrir le <strong>Groupe Scolaire L'Atome</strong>, ses établissements, ses infrastructures et son projet pédagogique. Elle nous aide à organiser un échange personnalisé afin de répondre à vos questions, vous présenter notre approche éducative et vous accompagner dans votre démarche d’inscription dans les meilleures conditions.
            </p>
           
            <Button href="/rendez-vous">Rencontrer nous</Button>
           
          </div>

        </div>
      </div>
</div>



        
        <HomeGallery />
        <Temoignages />


            <style jsx>{`
                .header-hero { position: relative; text-align: center; min-height: 550px; overflow: hidden; display: flex; align-items: center; justify-content: center; }
                .hero-background { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
                .hero-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.5) 100%); z-index: 1; }
                .hero-content { position: relative; z-index: 2; padding: 140px 70px; }
                .titre { text-shadow: 2px 2px 30px rgba(0, 0, 0, 0.5); font-size: 4rem; font-weight: bold; font-family: 'Georgia', 'Times New Roman', serif; color: #fff; margin: 0 0 16px 0; }
                .hero-subtitle { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 1.2rem; color: rgba(255, 255, 255, 0.9); margin: 0; }
            
                 .rejoindre-section {
          padding: 100px 0;
          background: #ffffff;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .content-wrapper {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }

        /* Styles du texte */
        .text-content {
          padding-right: 20px;
        }
        .section-title {
          font-size: 2.6rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 24px 0;
          line-height: 1.2;
          position: relative;
          padding-bottom: 16px;
        }
        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 70px;
          height: 4px;
          border-radius: 2px;
          background: linear-gradient(90deg, #f97316, #1e3a8a);
        }
        .section-text {
          font-size: 1.1rem;
          color: #475569;
          line-height: 1.8;
          margin: 0 0 16px 0;
        }
        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #f68c3b;
          transition: all 0.3s ease;
          cursor: pointer;
        }
          .contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          text-decoration: none;
          font-size: 1.1rem;
          margin-top: 12px;
        }
        .contact-link:hover {
          color: #1d4ed8;
          gap: 14px;
        }
        .contact-link :global(.anticon) {
          font-size: 1rem;
          transition: transform 0.3s ease;
        }
        .contact-link:hover :global(.anticon) {
          transform: translateX(4px);
        }

        /* Styles de l'image */
        .image-content {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }
        .image-content img {
          width: 100%;
          height: 450px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .image-content:hover img {
          transform: scale(1.03);
        }
        /* Élément décoratif subtil derrière l'image */
        .image-content::before {
          content: '';
          position: absolute;
          top: -12px;
          right: -12px;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          z-index: -1;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .text-content {
            padding-right: 0;
            text-align: center;
          }
          .section-title::after {
            left: 50%;
            transform: translateX(-50%);
          }
          .image-content {
            max-width: 600px;
            margin: 0 auto;
          }
        }
        @media (max-width: 576px) {
          .rejoindre-section { padding: 60px 0; }
          .section-title { font-size: 2rem; }
          .section-text { font-size: 1rem; }
          .image-content img { height: 300px; }
        }
      



        .modalites-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        /* Partie Gauche - Texte */
        .text-content {
          padding-top: 20px;
        }
        .section-title {
          font-size: 2.6rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 28px 0;
          line-height: 1.2;
          position: relative;
          padding-bottom: 16px;
        }
        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 70px;
          height: 4px;
          background: linear-gradient(90deg, #f97316, #1e3a8a);
          border-radius: 2px;
        }
        .section-text {
          font-size: 1.1rem;
          color: #475569;
          line-height: 1.9;
          margin: 0 0 20px 0;
        }
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          border: 2px solid rgba(59, 131, 246, 0.52);
          color: rgba(23, 60, 119, 0.73);
          padding: 16px 32px;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 10px;
          cursor: pointer;
          margin-top: 16px;
          transition: all 0.3s ease;
        }
        
        

        /* Partie Droite - Breadcrumb */
        .breadcrumb-content {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          position: sticky;
          top: 100px;
        }
        
        .steps-container {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .step-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 20px 0;
          position: relative;
          transition: all 0.3s ease;
        }
        .step-item:hover {
          transform: translateX(5px);
        }
        .step-item:hover .step-number {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          transform: scale(1.05);
        }
        .step-connector {
          position: relative;
          width: 20px;
          flex-shrink: 0;
        }
        .connector-line {
          position: absolute;
          top: 50px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: calc(100% - 20px);
          background: linear-gradient(180deg, #3b82f6, #8b5cf6);
          opacity: 0.3;
        }
        .step-number {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f0f9ff, #e0e7ff);
          color: #3b82f6;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
          flex-shrink: 0;
          position: relative;
          transition: all 0.3s ease;
          border: 2px solid rgba(59, 130, 246, 0.2);
        }
        .check-icon {
          position: absolute;
          bottom: -5px;
          right: -5px;
          background: #10b981;
          color: white;
          border-radius: 50%;
          font-size: 0.9rem;
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .step-info {
          flex: 1;
          padding-top: 8px;
        }
        .step-title {
          font-size: 1.15rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 6px 0;
        }
        .step-description {
          font-size: 0.95rem;
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .breadcrumb-content {
            position: static;
            max-width: 600px;
            margin: 0 auto;
            width: 100%;
          }
        }
        @media (max-width: 576px) {
          .modalites-section { padding: 60px 0; }
          .section-title { font-size: 2rem; }
          .section-text { font-size: 1rem; }
          .breadcrumb-content { padding: 30px 20px; }
          .step-item { padding: 15px 0; }
          .step-number { width: 40px; height: 40px; font-size: 1rem; }
          .step-title { font-size: 1.05rem; }
          .step-description { font-size: 0.9rem; }
        }
            
            `}</style>
        </>
    );
};

export default Admission;