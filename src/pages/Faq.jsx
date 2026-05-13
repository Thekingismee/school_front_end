import React, { useState } from "react";
import { QuestionCircleOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { ChevronDown, MapPin } from "lucide-react";

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const faqData = [
    {
      category: "Admission et Inscription",
      items: [
        {
          question: "Quels sont les critères d'admission ?",
          answer: "L'admission au Groupe Scolaire L'Atome se base sur plusieurs critères : le dossier scolaire, les résultats académiques, une visite de l'établissement. Nous recherchons des élèves motivés et capables de s'adapter à notre projet pédagogique trilingue."
        },
        {
          question: "Quel est le processus d'inscription ?",
          answer: "Le processus d'inscription comprend 4 étapes : 1) Pré-inscription en ligne, 2) Visite personnalisée de l'établissement, 3) Dépôt du dossier d'inscription avec documents requis, 4) Entretien et validation de l'admission."
        },
        {
          question: "Quand ouvre l'inscription pour l'année prochaine ?",
          answer: "Les inscriptions pour la nouvelle année scolaire ouvrent généralement en juillet. Nous recommandons une inscription anticipée car les places sont limitées."
        },
     
      ]
    },
    {
      category: "Tarifs et Modalités de Paiement",
      items: [
        {
          question: "Quels sont les frais de scolarité ?",
          answer: "Les frais de scolarité varient selon le cycle et incluent les frais pédagogiques, l'assurance scolaire et les services optionnels. "
        },
       
        {
          question: "Y a-t-il des réductions pour plusieurs enfants ?",
          answer: "Oui ! Nous proposons des réductions familiales : 5% à partir du 2e enfant et 10% à partir du 3e enfant inscrit dans notre établissement."
        },
      
      ]
    },
    {
      category: "Vie Scolaire et Pédagogie",
      items: [
        {
          question: "Quel est le modèle pédagogique du Groupe Scolaire ?",
          answer: "Notre approche combine un enseignement multilingue(Français, Arabe, Anglais,espagnol) avec une pédagogie moderne, soutenue par le numérique et des projets concrets. Nous valorisons l'autonomie, la créativité et l'esprit critique."
        },
        {
          question: "Quels sont les horaires d'école ?",
          answer: "L’école fonctionne en système continu de 8h30 à 17h30 pour tous les cycles. Les horaires sont organisés selon le niveau : Maternelle, Primaire, Collège et Lycée, avec une répartition adaptée des heures de cours. Au lycée, le volume horaire est structuré en heures selon les matières ."
        },
       
        {
          question: "Y a-t-il des activités extrascolaires ?",
          answer: "L'école organise régulièrement des sorties éducatives, des journées à thème et des ateliers de découverte pour enrichir le parcours des élèves."
        }
      ]
    },
    {
      category: "Langues et Enseignement",
      items: [
        {
          question: "À quel âge commence l'apprentissage des langues ?",
          answer: "L'enseignement multilingue débute dès la maternelle. Les enfants sont exposés progressivement au français, à l’arabe, à l’anglais et à l’espagnol par des enseignants spécialisés"
        },
        {
          question: "Comment est assuré un bon niveau dans les quatres langues ?",
          answer: "Nos enseignants sont natifs ou bilingues certifiés. Nous adoptons une pédagogie plurilingue avec des contenus variés : cours structurés, projets, activités interactives et immersion progressive en arabe, français, anglais et espagnol ."
        },
        {
          question: "Les élèves passent-ils des certifications externes ?",
          answer: "Oui, nous préparons nos élèves aux certifications internationales : Cambridge English"
        }
      ]
    },
    {
      category: "Transports et Sécurité",
      items: [
        {
          question: "Y a-t-il un service de transport scolaire ?",
          answer: "Oui, nous proposons un service de transport optionnel avec des bus sécurisés couvrant plusieurs zones. Vous pouvez consulter les itinéraires précis sur notre portail parent."
        },
        {
          question: "Comment assurez-vous la sécurité des élèves ?",
          answer: "La sécurité est notre priorité : portail sécurisé,  personnel formé aux premiers secours, protocoles d'urgence testés régulièrement, et assurance scolaire complète."
        
     },  
     
      ]
    },
    {
      category: "Suivi Pédagogique et P parents",
      items: [
        {
          question: "Comment puis-je suivre les progrès de mon enfant ?",
          answer: "Via notre application mobile L'Atome App : notes, emploi du temps, bulletins, communications directes avec les enseignants. Des bulletins trimestriels et rencontres parents-prof sont également prévus."
        },
        {
          question: "Peut-on communiquer facilement avec les enseignants ?",
          answer: "Oui ! L'application mobile offre une messagerie directe avec les enseignants. Des réunions parents-prof régulières et des permanences sont aussi disponibles."
        },
        {
          question: "Que faire si mon enfant a des difficultés scolaires ?",
          answer: "Notre équipe offre un suivi individualisé : évaluations diagnostiques, remarques et recommandations personnalisées, aide devoirs, et soutien pédagogique adapté."
        },
        {
          question: "Y a-t-il un service d'orientation au lycée ?",
          answer: "Oui, un conseiller en orientation travaille avec les élèves dès la 3e pour explorer les métiers, les filières et préparer leur projet d'avenir."
        }
      ]
    },
    {
      category: "Documentation et Autres",
      items: [
        {
          question: "Quels documents dois-je fournir pour l'inscription ?",
          answer: "Les documents à fournir varient selon le niveau. De manière générale, pour tous les niveaux : certificat de radiation, copie de l’acte de naissance, 6 photos d’identité récentes, copie de la carte nationale du père ou du tuteur, chemise cartonnée et carte d’élève (pour les anciens élèves). Pour le primaire et le collège/lycée, des documents supplémentaires peuvent être demandés comme le dossier scolaire validé, un dossier en plastique bleu, la carte d’élève verte ou un certificat médical selon les cas."
        },
        {
          question: "Comment accéder au portail parent ?",
          answer: "Un identifiant et mot de passe vous sont fournis après l'inscription. Vous pouvez télécharger l'application L'Atome App ou accéder via le portail web pour un suivi complet."
        },
       
        {
          question: "Comment signaler un problème ou une préoccupation ?",
          answer: "Vous pouvez contacter directement la direction, utiliser l'application de messagerie, ou écrire un mail. Nous avons aussi une boîte suggestions pour améliorer continuellement notre service."
        }
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  return (
    <>
      {/* <header className="faq-hero">
        <div className="faq-hero-overlay"></div>
        <div className="faq-hero-content">
          <QuestionCircleOutlined className="faq-hero-icon" />
          <h1>Foire Aux Questions</h1>
          <p>Trouvez les réponses à vos questions sur l'admission, la vie scolaire et notre projet pédagogique.</p>
        </div>
      </header> */}
       <header className="header-hero">
                <img src="/inscrip2.jpg" alt="Recrutement Groupe Scolaire L'Atome" className="hero-background" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="titre">Foire Aux Questions</h1>
                    <p className="hero-subtitle">Trouvez les réponses à vos questions.</p>
                </div>
            </header>

      <main className="faq-page">
        <section className="faq-intro">
          <div className="intro-content">
            <h2>Vos questions, nos réponses</h2>
            <p>
              Nous avons compilé les questions les plus souvent posées par nos familles. Si vous ne trouvez pas la
              réponse à votre question, n'hésitez pas à nous contacter directement.
            </p>
          </div>
        </section>

        <section className="faq-accordions">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="faq-category">
              <h2 className="category-title">{category.category}</h2>
              <div className="accordions-list">
                {category.items.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 100 + itemIndex;
                  const isActive = activeAccordion === globalIndex;

                  return (
                    <div key={itemIndex} className={`accordion-item ${isActive ? "active" : ""}`}>
                      <button
                        className="accordion-header"
                        onClick={() => toggleAccordion(globalIndex)}
                        aria-expanded={isActive}
                        aria-controls={`panel-${globalIndex}`}
                      >
                        <span className="accordion-title">{item.question}</span>
                        <ChevronDown className={`accordion-icon ${isActive ? "open" : ""}`} />
                      </button>
                      {isActive && (
                        <div id={`panel-${globalIndex}`} className="accordion-content">
                          <p>{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        {/* <section className="faq-cta">
          <div className="cta-content">
            <h2>Vous n'avez pas trouvé votre réponse ?</h2>
            <p>Notre équipe est à votre disposition pour répondre à toutes vos questions.</p>
            <div className="contact-methods">
              <div className="contact-method">
                <PhoneOutlined className="contact-icon" />
                <div>
                  <h4>Téléphone</h4>
                  <p>+212 5 XX XXX XX XX</p>
                </div>
              </div>
              <div className="contact-method">
                <MailOutlined className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>contact@atome-school.ma</p>
                </div>
              </div>
              <div className="contact-method">
                <MapPin className="contact-icon" />
                <div>
                  <h4>Adresse</h4>
                  <p>Rue XYZ, Quartier ABC, Casablanca</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      <style jsx>{`

                      .header-hero { position: relative; text-align: center; min-height: 550px; overflow: hidden; display: flex; align-items: center; justify-content: center; }
                .hero-background { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
                .hero-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.5) 100%); z-index: 1; }
                .hero-content { position: relative; z-index: 2; padding: 140px 70px; }
                .titre { text-shadow: 2px 2px 30px rgba(0, 0, 0, 0.5); font-size: 4rem; font-weight: bold; font-family: 'Georgia', 'Times New Roman', serif; color: #fff; margin: 0 0 16px 0; }
                .hero-subtitle { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 1.2rem; color: rgba(255, 255, 255, 0.9); margin: 0; }

        .faq-hero {
          position: relative;
          min-height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          overflow: hidden;
          text-align: center;
          color: white;
        }

        .faq-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.2);
        }

        .faq-hero-content {
          position: relative;
          z-index: 2;
          padding: 60px 20px;
          max-width: 800px;
        }

        .faq-hero-icon {
          font-size: 64px;
          margin-bottom: 20px;
          display: block;
        }

        .faq-hero-content h1 {
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          font-weight: 800;
          margin: 0 0 16px;
          line-height: 1.1;
        }

        .faq-hero-content p {
          font-size: 1.1rem;
          line-height: 1.8;
          margin: 0;
          opacity: 0.95;
        }

        .faq-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .faq-intro {
          text-align: center;
          margin-bottom: 60px;
        }

        .intro-content h2 {
          font-size: 2.4rem;
          color: #10263b;
          margin: 0 0 16px;
        }

        .intro-content p {
          font-size: 1.1rem;
          color: #4b596d;
          line-height: 1.8;
          max-width: 600px;
          margin: 0 auto;
        }

        .faq-accordions {
          margin-bottom: 80px;
        }

        .faq-category {
          margin-bottom: 48px;
        }

        .category-title {
          font-size: 1.8rem;
          color: #1d4ed8;
          margin: 0 0 24px;
          padding-bottom: 12px;
          border-bottom: 2px solid #1d4ed8;
          font-weight: 700;
        }

        .accordions-list {
          display: grid;
          gap: 12px;
        }

        .accordion-item {
          background: white;
          border: 1px solid rgba(16, 40, 74, 0.1);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(15, 30, 60, 0.05);
          transition: all 0.3s ease;
        }

        .accordion-item:hover {
          box-shadow: 0 8px 20px rgba(15, 30, 60, 0.1);
        }

        .accordion-item.active {
          border-color: #1d4ed8;
          box-shadow: 0 8px 24px rgba(29, 78, 216, 0.15);
        }

        .accordion-header {
          width: 100%;
          padding: 20px 24px;
          background: white;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          transition: all 0.3s ease;
          font-size: 1.05rem;
          font-weight: 600;
        }

        .accordion-header:hover {
          background: #f8fafc;
        }

        .accordion-item.active .accordion-header {
          background: #f0f6ff;
        }

        .accordion-title {
          color: #10263b;
          text-align: left;
          flex: 1;
        }

        .accordion-icon {
          font-size: 20px;
          color: #1d4ed8;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .accordion-icon.open {
          transform: rotate(180deg);
        }

        .accordion-content {
          padding: 0 24px 24px;
          background: #f8fafc;
          border-top: 1px solid #e5e7eb;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .accordion-content p {
          margin: 0;
          color: #4b596d;
          line-height: 1.8;
          font-size: 1rem;
        }

        .faq-cta {
          background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
          border-radius: 24px;
          padding: 60px 40px;
          color: white;
          text-align: center;
        }

        .cta-content h2 {
          font-size: 2.2rem;
          margin: 0 0 12px;
          font-weight: 800;
        }

        .cta-content > p {
          font-size: 1.1rem;
          margin: 0 0 40px;
          opacity: 0.9;
        }

        .contact-methods {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          text-align: left;
          backdrop-filter: blur(10px);
        }

        .contact-icon {
          font-size: 32px;
          flex-shrink: 0;
        }

        .contact-method h4 {
          margin: 0 0 4px;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .contact-method p {
          margin: 0;
          font-size: 0.95rem;
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .faq-hero-content h1 {
            font-size: 2.2rem;
          }

          .category-title {
            font-size: 1.5rem;
          }

          .accordion-header {
            padding: 16px 20px;
            font-size: 1rem;
          }

          .accordion-content {
            padding: 0 20px 20px;
          }

          .faq-cta {
            padding: 40px 24px;
          }

          .cta-content h2 {
            font-size: 1.8rem;
          }

          .contact-methods {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 520px) {
          .faq-hero {
            min-height: 340px;
          }

          .intro-content h2,
          .cta-content h2 {
            font-size: 1.8rem;
          }

          .intro-content p,
          .cta-content > p {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Faq;
