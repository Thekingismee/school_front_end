import React, { useState } from "react";
import ContactPopup from "../components/Accueil/ContactPopup";

function ModalitesInscription() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleExpand = index => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    // Données des documents par niveau
    const documentsData = [
        {
            title: "📋 Maternelle / Primaire / Collège / Lycée",
            subtext: "Documents communs à tous les niveaux",
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
            title: "🎓 Collège & Lycée (Nouveaux élèves)",
            subtext: "Documents spécifiques pour les nouveaux inscrits",
            items: [
                "Certificat de départ (radiation) signé par l'établissement précédent",
                "Copie de l'acte de naissance",
                "6 photos récentes",
                "Copie de la carte nationale du père ou du tuteur",
                "Carte d'élève verte (si disponible)",
                "Dossier en plastique bleu",
                "Dossier scolaire validé (notamment pour les élèves du baccalauréat)"
            ]
        },
        {
            title: "📚 Primaire (Cycle primaire)",
            subtext: "Documents spécifiques pour le primaire",
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

    return (
        <div>
            {/* Hero Section - Version originale conservée */}
            <header className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="hero-title-accent">
                            Modalités d'Inscription
                        </span>
                    </h1>
                    <p className="hero-subtitle">
                        Un processus clair, transparent et rapide pour inscrire
                        votre enfant
                    </p>
                </div>
            </header>

             {/* Section Contact Rapide */}
            <section className="contact-section">
                <div className="container">
                    <div className="contact-banner">
                        <div className="contact-banner-content">
                            <h3>Une question sur votre dossier ?</h3>
                            <p>
                                Notre équipe administrative est à votre
                                disposition pour vous accompagner
                            </p>
                        </div>
                        <button
                            className="contact-banner-btn"
                            onClick={() => setIsContactOpen(true)}
                        >
                            Nous contacter
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Popup */}
            <ContactPopup
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />

            {/* Section Documents requis avec Cards Expandibles */}
            <section className="documents-section">
                <div className="container">
                    <h2 className="section-title">Documents à fournir</h2>
                    <p className="section-description">
                        Selon le niveau scolaire de votre enfant, les documents
                        requis peuvent varier. Cliquez sur chaque carte pour
                        plus de détails.
                    </p>
                    <div className="documents-expandable-grid">
                        {documentsData.map((doc, index) => (
                            <div
                                key={index}
                                className={`expandable-card ${
                                    expandedCard === index ? "expanded" : ""
                                }`}
                            >
                                <div
                                    className="card-header"
                                    onClick={() => toggleExpand(index)}
                                >
                                    <div className="card-title">
                                        <span className="card-icon">
                                            {doc.title.split(" ")[0]}
                                        </span>
                                        <div>
                                            <h3>{doc.title}</h3>
                                            <p className="card-subtext">
                                                {doc.subtext}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card-toggle">
                                        {expandedCard === index ? "−" : "+"}
                                    </div>
                                </div>
                                <div className="card-content">
                                    <ul className="documents-list">
                                        {doc.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                <span className="list-icon">
                                                    ✓
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

          

            <style jsx>{`
                /* ===== HERO SECTION ORIGINALE CONSERVÉE ===== */
                .hero-section {
                    position: relative;
                    min-height: 70vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background-image: url("/walpap3.jpg");
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                }

                .hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(255, 255, 255, 0.88);
                    z-index: 1;
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    max-width: 900px;
                    padding: 20px;
                }

                .hero-title-accent {
                    font-size: 4rem;
                    font-weight: 800;
                    color: #ee721f;
                    font-family: "Playfair Display", serif;
                    text-transform: uppercase;
                }

                .hero-subtitle {
                    font-size: 1.2rem;
                    margin-top: 20px;
                    color: #333;
                }

                /* ===== SECTIONS COMMUNES ===== */
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .section-title {
                    text-align: center;
                    font-size: 2.2rem;
                    font-weight: 700;
                    color: #004494;
                    margin-bottom: 1rem;
                    position: relative;
                }

                .section-title:after {
                    content: "";
                    display: block;
                    width: 60px;
                    height: 3px;
                    background: #ee721f;
                    margin: 15px auto 0;
                }

                .section-description {
                    text-align: center;
                    color: #666;
                    max-width: 700px;
                    margin: 0 auto 3rem auto;
                    line-height: 1.6;
                }

                /* ===== STEPS SECTION ===== */
                .steps-section {
                    padding: 5rem 0;
                    background: #f8f9fa;
                }

                .steps-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                    gap: 2rem;
                }

                .step-card {
                    background: white;
                    padding: 2rem;
                    border-radius: 16px;
                    text-align: center;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .step-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                }

                .step-number {
                    width: 50px;
                    height: 50px;
                    background: #ee721f;
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin: 0 auto 1.5rem;
                }

                .step-card h3 {
                    color: #004494;
                    margin-bottom: 1rem;
                    font-size: 1.2rem;
                }

                .step-card p {
                    color: #666;
                    line-height: 1.5;
                    font-size: 0.9rem;
                }

                /* ===== DOCUMENTS SECTION AVEC CARDS EXPANDIBLES ===== */
                .documents-section {
                    padding: 5rem 0;
                    background: white;
                }

                .documents-expandable-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    max-width: 900px;
                    margin: 0 auto;
                }

                .expandable-card {
                    background: white;
                    border: 1px solid #e8e8e8;
                    border-radius: 16px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
                }

                .expandable-card:hover {
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
                    border-color: #ee721f30;
                }

                .card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.5rem;
                    cursor: pointer;
                    background: white;
                    transition: background 0.2s ease;
                }

                .card-header:hover {
                    background: #fef9f5;
                }

                .card-title {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    flex: 1;
                }

                .card-icon {
                    font-size: 2rem;
                }

                .card-title h3 {
                    margin: 0;
                    color: #004494;
                    font-size: 1.2rem;
                    font-weight: 600;
                }

                .card-subtext {
                    margin: 0.25rem 0 0 0;
                    font-size: 0.8rem;
                    color: #888;
                }

                .card-toggle {
                    font-size: 1.8rem;
                    font-weight: 300;
                    color: #ee721f;
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    transition: all 0.2s ease;
                }

                .card-toggle:hover {
                    background: #ee721f10;
                }

                .card-content {
                    max-height: 0;
                    opacity: 0;
                    overflow: hidden;
                    transition: max-height 0.4s ease, opacity 0.3s ease;
                    padding: 0 1.5rem;
                }

                .expandable-card.expanded .card-content {
                    max-height: 600px;
                    opacity: 1;
                    padding: 0 1.5rem 1.5rem 1.5rem;
                }

                .documents-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .documents-list li {
                    padding: 0.75rem 0;
                    border-bottom: 1px solid #f0f0f0;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    color: #444;
                    font-size: 0.9rem;
                }

                .documents-list li:last-child {
                    border-bottom: none;
                }

                .list-icon {
                    color: #ee721f;
                    font-weight: bold;
                    font-size: 1rem;
                }

                /* ===== CONTACT SECTION ===== */
                .contact-section {
                    padding: 4rem 0 5rem 0;
                    background: #f8f9fa;
                }

                .contact-banner {
                    background: linear-gradient(
                        135deg,
                        #004494 0%,
                        #002d5f 100%
                    );
                    border-radius: 20px;
                    padding: 3rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 1.5rem;
                }

                .contact-banner-content h3 {
                    color: white;
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                }

                .contact-banner-content p {
                    color: rgba(255, 255, 255, 0.8);
                    margin: 0;
                }

                .contact-banner-btn {
                    background: #ee721f;
                    color: white;
                    border: none;
                    padding: 12px 32px;
                    border-radius: 40px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-size: 1rem;
                }

                .contact-banner-btn:hover {
                    background: #d45f12;
                    transform: translateY(-2px);
                }

                /* ===== RESPONSIVE ===== */
                @media (max-width: 992px) {
                    .hero-title-accent {
                        font-size: 3rem;
                    }

                    .section-title {
                        font-size: 1.8rem;
                    }

                    .contact-banner {
                        flex-direction: column;
                        text-align: center;
                    }
                }

                @media (max-width: 768px) {
                    .hero-title-accent {
                        font-size: 2.2rem;
                    }

                    .hero-subtitle {
                        font-size: 1rem;
                    }

                    .steps-grid {
                        grid-template-columns: 1fr;
                    }

                    .card-header {
                        padding: 1rem;
                    }

                    .card-title h3 {
                        font-size: 1rem;
                    }

                    .card-icon {
                        font-size: 1.5rem;
                    }

                    .contact-banner {
                        padding: 2rem;
                    }

                    .contact-banner-content h3 {
                        font-size: 1.2rem;
                    }
                }

                @media (max-width: 576px) {
                    .hero-title-accent {
                        font-size: 1.8rem;
                    }

                    .section-title {
                        font-size: 1.5rem;
                    }

                    .card-title {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.5rem;
                    }

                    .documents-list li {
                        font-size: 0.8rem;
                    }
                }
            `}</style>
        </div>
    );
}

export default ModalitesInscription;




