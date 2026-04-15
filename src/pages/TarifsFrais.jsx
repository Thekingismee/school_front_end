import React, { useState } from "react";
import ContactPopup from "../components/Accueil/ContactPopup";
import {
    Calendar,
    TrendingUp,
    Clock,
    Users,
    Shield,
    FileText,
    CheckCircle,
    Bus,
    Utensils,
    Home,
    GraduationCap,
    Heart,
    Star,
    Sparkles
} from "lucide-react";

function Tarifs() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = index => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    // Modalités de paiement
    const modalitesPaiement = [
        {
            titre: "Paiement Annuel",
            icon: <Calendar size={32} />,
            details: [
                "Paiement unique à la rentrée",
                "Économisez 3% sur le total annuel"
            ],
            recommended: false,
            couleur: "#004494"
        },
        {
            titre: "Paiement Trimestriel",
            icon: <TrendingUp size={32} />,
            details: [
                "3 versements (40% - 30% - 30%)",
                "Sans frais supplémentaires",
                "Formule la plus plébiscitée"
            ],
            recommended: true,
            couleur: "#ee721f"
        },
        {
            titre: "Paiement Mensuel",
            icon: <Clock size={32} />,
            details: [
                "10 mensualités de septembre à juin",
                "Sans frais supplémentaires",
                "Maximum de flexibilité"
            ],
            recommended: false,
            couleur: "#004494"
        }
    ];

    // Réductions familiales
    const reductions = [
        {
            enfants: "Deuxième enfant",
            reduction: "5%",
            description: "Réduction sur l'intégralité des frais de scolarité",
            icon: <Heart size={22} />
        },
        {
            enfants: "Troisième enfant",
            reduction: "8%",
            description: "Réduction sur l'intégralité des frais de scolarité",
            icon: <Heart size={22} />
        },
        {
            enfants: "Quatrième enfant et plus",
            reduction: "12%",
            description: "Réduction sur l'intégralité des frais de scolarité",
            icon: <Heart size={22} />
        },
        {
            enfants: "Inscription anticipée",
            reduction: "5%",
            description: "Pour toute inscription avant le 31 mars",
            icon: <Star size={22} />
        },
        {
            enfants: "Paiement comptant",
            reduction: "3%",
            description: "Remise supplémentaire sur le total annuel",
            icon: <Sparkles size={22} />
        }
    ];

    // FAQ Dynamique
    const faqItems = [
        {
            question:
                "Les frais de scolarité sont-ils déductibles des impôts ?",
            reponse:
                "Oui, sous certaines conditions. Notre équipe vous fournit les attestations nécessaires pour votre déclaration fiscale. Nous vous conseillons de consulter votre expert-comptable pour plus de détails."
        },
        {
            question: "Existe-t-il des aides financières ?",
            reponse:
                "Absolument ! Nous avons mis en place un fonds de solidarité interne qui étudie chaque situation avec bienveillance et confidentialité. N'hésitez pas à nous contacter pour en discuter."
        },
        {
            question: "Peut-on modifier la formule en cours d'année ?",
            reponse:
                "Oui, un passage d'une formule à l'autre est possible en cours d'année, sans aucun frais supplémentaire. Il suffit d'en faire la demande auprès de notre service financier."
        },
        {
            question: "Les fournitures sont-elles incluses ?",
            reponse:
                "Oui, les manuels scolaires et les fournitures de base sont inclus dans les frais de scolarité pour tous les niveaux. Seuls les équipements spécifiques (trotinette, calculatrice scientifique, etc.) sont à la charge des familles."
        }
    ];

    return (
        <div>
            {/* Hero Section - Style cohérent avec la page Why */}
            <header className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="hero-title-accent">Tarifs</span>
                    </h1>
                </div>
            </header>

            {/* Section introduction avec valeurs */}
            <section className="intro-section">
                <div className="container">
                    <div className="intro-grid">
                        <div className="intro-card">
                            <div className="intro-icon">🔍</div>
                            <h3>Transparence totale</h3>
                            <p>
                                Pas de frais cachés, pas de surprises. Chaque
                                euro est justifié et expliqué clairement.
                            </p>
                        </div>
                        <div className="intro-card">
                            <div className="intro-icon">🤝</div>
                            <h3>Accompagnement personnalisé</h3>
                            <p>
                                Notre équipe est à votre écoute pour trouver la
                                solution de paiement la plus adaptée.
                            </p>
                        </div>
                        <div className="intro-card">
                            <div className="intro-icon">⚖️</div>
                            <h3>Équité & Solidarité</h3>
                            <p>
                                Un fonds d'entraide existe pour les familles
                                traversant des difficultés passagères.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modalités de paiement - Version humanisée */}
            <section className="modalites-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">
                            Flexibilité maximale
                        </span>
                        <h2>Des modalités de paiement pensées pour vous</h2>
                        <p>
                            Choisissez la formule qui s'adapte le mieux à votre
                            situation familiale
                        </p>
                    </div>

                    <div className="modalites-grid">
                        {modalitesPaiement.map((modalite, index) => (
                            <div
                                key={index}
                                className={`modalite-card ${
                                    modalite.recommended ? "recommended" : ""
                                }`}
                            >
                                {modalite.recommended && (
                                    <div className="recommended-badge">
                                        ⭐ Formule recommandée
                                    </div>
                                )}
                                <div
                                    className="modalite-icon"
                                    style={{ color: modalite.couleur }}
                                >
                                    {modalite.icon}
                                </div>
                                <h3>{modalite.titre}</h3>
                                <ul>
                                    {modalite.details.map((detail, i) => (
                                        <li key={i}>
                                            <CheckCircle size={18} />
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className="btn-choose"
                                    onClick={() => setIsContactOpen(true)}
                                >
                                    Je choisis cette formule
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Réductions familiales - Version améliorée avec cartes alignées */}
            <section className="reductions-section">
                <div className="container">
                    <div className="reductions-header">
                        <span className="section-badge white">
                            Avantages familiaux
                        </span>
                        <h2>Des réductions pour les fratries</h2>
                        <p>
                            Nous encourageons les familles nombreuses en offrant
                            des remises progressives et attractives
                        </p>
                    </div>

                    <div className="reductions-grid">
                        {reductions.map((red, index) => (
                            <div key={index} className="reduction-card">
                                <div className="reduction-icon-wrapper">
                                    <div className="reduction-icon">
                                        {red.icon}
                                    </div>
                                </div>
                                <div className="reduction-content">
                                    <h4>{red.enfants}</h4>
                                    <div className="reduction-percent">
                                        {red.reduction}
                                    </div>
                                    <p>{red.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="reductions-note">
                        <Shield size={20} />
                        <p>
                            Ces réductions sont cumulables dans la limite de 15%
                            du montant total des frais de scolarité.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section Règlement financier */}
            <section className="reglement-section">
                <div className="container">
                    <div className="reglement-card">
                        <div className="reglement-icon">
                            <FileText size={32} />
                        </div>
                        <div className="reglement-text">
                            <h3>Règlement financier complet</h3>
                            <p>
                                Consultez notre document officiel pour plus de
                                détails sur les conditions générales, les
                                garanties et les procédures en cas de
                                difficultés de paiement.
                            </p>
                        </div>
                        <button
                            className="btn-reglement"
                            onClick={() => setIsContactOpen(true)}
                        >
                            <FileText size={18} />
                            Télécharger le règlement
                        </button>
                    </div>
                </div>
            </section>

            {/* FAQ Dynamique - Version interactive */}
            <section className="faq-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">
                            Questions fréquentes
                        </span>
                        <h2>On répond à vos questions</h2>
                        <p>
                            Retrouvez les réponses aux interrogations les plus
                            courantes
                        </p>
                    </div>

                    <div className="faq-container">
                        {faqItems.map((item, index) => (
                            <div
                                key={index}
                                className={`faq-item ${
                                    activeFaq === index ? "active" : ""
                                }`}
                            >
                                <div
                                    className="faq-question"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="faq-icon">
                                        {activeFaq === index ? "−" : "+"}
                                    </span>
                                    <h3>{item.question}</h3>
                                </div>
                                <div className="faq-reponse">
                                    <p>{item.reponse}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="faq-contact">
                        <p>Vous n'avez pas trouvé votre réponse ?</p>
                        <button
                            className="btn-contact-faq"
                            onClick={() => setIsContactOpen(true)}
                        >
                            Contactez notre service financier
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="cta-section">
                <div className="cta-overlay"></div>
                <div className="cta-content">
                    <h2>Prêt à inscrire votre enfant ?</h2>
                    <p>
                        Une équipe dédiée vous accompagne dans toutes vos
                        démarches administratives et financières
                    </p>
                    <div className="cta-buttons">
                        <button
                            className="btn-primary"
                            onClick={() => setIsContactOpen(true)}
                        >
                            Demander un rendez-vous
                        </button>
                        <button
                            className="btn-secondary"
                            onClick={() => setIsContactOpen(true)}
                        >
                            Télécharger la brochure
                        </button>
                    </div>
                </div>
            </section>

            <ContactPopup
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />

            <style jsx>{`
                /* ===== HERO SECTION - STYLE COHÉRENT AVEC PAGE WHY ===== */
                .hero-section {
                    position: relative;
                    min-height: 85vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background-image: url("/tarr.jpg");
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    overflow: hidden;
                }

                .hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(255, 255, 255, 0.85);
                    z-index: 1;
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    max-width: 900px;
                    padding: 20px;
                    animation: fadeInUp 0.9s ease-out;
                }

                .hero-title {
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .hero-title-accent {
                    font-size: 5rem;
                    font-weight: 800;
                    letter-spacing: 4px;
                    color: #ee721f;
                    font-family: "Playfair Display", "Times New Roman", serif;
                    text-transform: uppercase;
                    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
                    animation: slideInRight 0.8s ease-out;
                    position: relative;
                    display: inline-block;
                }

                .hero-title-accent::before {
                    content: "";
                    position: absolute;
                    bottom: -15px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 100px;
                    height: 3px;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        #ee721f,
                        #ee721f,
                        transparent
                    );
                    border-radius: 3px;
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

                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(60px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                /* Intro Section */
                .intro-section {
                    padding: 60px 5%;
                    background: #ffffff;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .intro-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                }

                .intro-card {
                    text-align: center;
                    padding: 35px 25px;
                    background: #f8fafc;
                    border-radius: 20px;
                    transition: all 0.3s ease;
                }

                .intro-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
                }

                .intro-icon {
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                }

                .intro-card h3 {
                    color: #004494;
                    margin-bottom: 12px;
                    font-size: 1.2rem;
                }

                .intro-card p {
                    color: #64748b;
                    line-height: 1.6;
                    font-size: 0.9rem;
                }

                /* Modalités section */
                .modalites-section {
                    padding: 80px 5%;
                    background: linear-gradient(
                        135deg,
                        #f8fafc 0%,
                        #ffffff 100%
                    );
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 50px;
                }

                .section-badge {
                    display: inline-block;
                    background: rgba(238, 114, 31, 0.1);
                    color: #ee721f;
                    padding: 6px 20px;
                    border-radius: 40px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    margin-bottom: 16px;
                }

                .section-header h2 {
                    font-size: 2.2rem;
                    color: #004494;
                    margin-bottom: 16px;
                    font-family: "Playfair Display", serif;
                }

                .section-header p {
                    color: #64748b;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .modalites-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                }

                .modalite-card {
                    background: white;
                    padding: 40px 25px;
                    border-radius: 24px;
                    text-align: center;
                    position: relative;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                }

                .modalite-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                }

                .modalite-card.recommended {
                    border: 2px solid #ee721f;
                    transform: scale(1.02);
                }

                .recommended-badge {
                    position: absolute;
                    top: -12px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: #ee721f;
                    color: white;
                    padding: 5px 18px;
                    border-radius: 30px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    white-space: nowrap;
                }

                .modalite-icon {
                    margin-bottom: 25px;
                }

                .modalite-card h3 {
                    font-size: 1.4rem;
                    color: #004494;
                    margin-bottom: 20px;
                }

                .modalite-card ul {
                    list-style: none;
                    padding: 0;
                    margin-bottom: 30px;
                }

                .modalite-card li {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 8px 0;
                    color: #4a5568;
                    font-size: 0.9rem;
                }

                .modalite-card li svg {
                    color: #22c55e;
                    flex-shrink: 0;
                }

                .btn-choose {
                    background: transparent;
                    border: 2px solid #ee721f;
                    color: #ee721f;
                    padding: 10px 24px;
                    border-radius: 40px;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .btn-choose:hover {
                    background: #ee721f;
                    color: white;
                }

                /* Réductions section - Version améliorée */
                .reductions-section {
                    padding: 80px 5%;
                    background: linear-gradient(
                        135deg,
                        #004494 0%,
                        #003377 100%
                    );
                    color: white;
                }

                .reductions-header {
                    text-align: center;
                    margin-bottom: 50px;
                }

                .reductions-header .section-badge.white {
                    background: rgba(255, 255, 255, 0.2);
                    color: #ee721f;
                }

                .reductions-header h2 {
                    font-size: 2rem;
                    margin-bottom: 16px;
                    color: white;
                    font-family: "Playfair Display", serif;
                }

                .reductions-header p {
                    color: rgba(255, 255, 255, 0.85);
                }

                .reductions-grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 20px;
                    margin-bottom: 30px;
                }

                .reduction-card {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border-radius: 16px;
                    padding: 20px;
                    text-align: center;
                    transition: all 0.3s ease;
                }

                .reduction-card:hover {
                    background: rgba(255, 255, 255, 0.18);
                    transform: translateY(-5px);
                }

                .reduction-icon-wrapper {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 15px;
                }

                .reduction-icon {
                    width: 55px;
                    height: 55px;
                    background: rgba(238, 114, 31, 0.25);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #ee721f;
                }

                .reduction-content h4 {
                    font-size: 1rem;
                    margin-bottom: 8px;
                    color: white;
                }

                .reduction-percent {
                    font-size: 1.8rem;
                    font-weight: 800;
                    color: #ee721f;
                    margin-bottom: 8px;
                }

                .reduction-content p {
                    font-size: 0.7rem;
                    opacity: 0.85;
                    margin: 0;
                }

                .reductions-note {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    padding: 15px;
                    background: rgba(255, 255, 255, 0.08);
                    border-radius: 12px;
                    font-size: 0.85rem;
                    text-align: center;
                }

                /* Règlement section */
                .reglement-section {
                    padding: 60px 5%;
                    background: #f8fafc;
                }

                .reglement-card {
                    max-width: 900px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 30px;
                    background: white;
                    padding: 30px 40px;
                    border-radius: 20px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
                }

                .reglement-icon {
                    color: #ee721f;
                }

                .reglement-text {
                    flex: 1;
                }

                .reglement-text h3 {
                    color: #004494;
                    margin-bottom: 8px;
                }

                .reglement-text p {
                    color: #64748b;
                    font-size: 0.9rem;
                }

                .btn-reglement {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    background: transparent;
                    border: 2px solid #ee721f;
                    color: #ee721f;
                    padding: 12px 28px;
                    border-radius: 40px;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .btn-reglement:hover {
                    background: #ee721f;
                    color: white;
                }

                /* FAQ Dynamique */
                .faq-section {
                    padding: 80px 5%;
                    background: #ffffff;
                }

                .faq-container {
                    max-width: 900px;
                    margin: 0 auto 40px;
                }

                .faq-item {
                    background: #f8fafc;
                    border-radius: 16px;
                    margin-bottom: 16px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }

                .faq-question {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    padding: 20px 25px;
                    cursor: pointer;
                    transition: background 0.3s ease;
                }

                .faq-question:hover {
                    background: #f1f5f9;
                }

                .faq-icon {
                    width: 28px;
                    height: 28px;
                    background: #ee721f;
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                    font-weight: bold;
                    flex-shrink: 0;
                }

                .faq-question h3 {
                    font-size: 1rem;
                    color: #004494;
                    margin: 0;
                    font-weight: 600;
                }

                .faq-reponse {
                    max-height: 0;
                    padding: 0 25px;
                    overflow: hidden;
                    transition: all 0.4s ease;
                }

                .faq-item.active .faq-reponse {
                    max-height: 200px;
                    padding: 0 25px 20px 65px;
                }

                .faq-reponse p {
                    color: #64748b;
                    line-height: 1.6;
                    font-size: 0.9rem;
                    margin: 0;
                }

                .faq-contact {
                    text-align: center;
                    margin-top: 40px;
                    padding: 30px;
                    background: #f8fafc;
                    border-radius: 20px;
                }

                .faq-contact p {
                    margin-bottom: 15px;
                    color: #004494;
                    font-weight: 500;
                }

                .btn-contact-faq {
                    background: #ee721f;
                    color: white;
                    border: none;
                    padding: 12px 32px;
                    border-radius: 40px;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .btn-contact-faq:hover {
                    background: #004494;
                    transform: translateY(-2px);
                }

                /* CTA Section */
                .cta-section {
                    position: relative;
                    padding: 80px 20px;
                    text-align: center;
                    background-image: url("/cta-bg.jpg");
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                }

                .cta-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 68, 148, 0.92);
                }

                .cta-content {
                    position: relative;
                    z-index: 2;
                    max-width: 700px;
                    margin: 0 auto;
                }

                .cta-content h2 {
                    color: white;
                    font-size: 2rem;
                    margin-bottom: 15px;
                    font-family: "Playfair Display", serif;
                }

                .cta-content p {
                    color: rgba(255, 255, 255, 0.9);
                    margin-bottom: 30px;
                }

                .cta-buttons {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                .btn-primary {
                    background: #ee721f;
                    color: white;
                    border: none;
                    padding: 14px 32px;
                    border-radius: 40px;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .btn-primary:hover {
                    background: white;
                    color: #004494;
                    transform: translateY(-2px);
                }

                .btn-secondary {
                    background: transparent;
                    border: 2px solid white;
                    color: white;
                    padding: 12px 30px;
                    border-radius: 40px;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .btn-secondary:hover {
                    background: white;
                    color: #004494;
                }

                /* Responsive */
                @media (max-width: 1024px) {
                    .hero-title-accent {
                        font-size: 3.5rem;
                    }

                    .intro-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }

                    .modalites-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }

                    .reductions-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .hero-section {
                        min-height: 70vh;
                    }

                    .hero-title-accent {
                        font-size: 2.5rem;
                    }

                    .hero-title-accent::before {
                        width: 60px;
                    }

                    .intro-grid {
                        grid-template-columns: 1fr;
                    }

                    .modalites-grid {
                        grid-template-columns: 1fr;
                    }

                    .reductions-grid {
                        grid-template-columns: 1fr;
                    }

                    .reglement-card {
                        flex-direction: column;
                        text-align: center;
                    }

                    .section-header h2 {
                        font-size: 1.5rem;
                    }

                    .cta-buttons {
                        flex-direction: column;
                        align-items: center;
                    }

                    .btn-primary,
                    .btn-secondary {
                        width: 80%;
                    }

                    .faq-question {
                        padding: 15px 20px;
                    }

                    .faq-item.active .faq-reponse {
                        padding: 0 20px 15px 55px;
                    }

                    .faq-icon {
                        width: 24px;
                        height: 24px;
                        font-size: 1rem;
                    }
                }

                @media (max-width: 576px) {
                    .hero-section {
                        min-height: 60vh;
                    }

                    .hero-title-accent {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </div>
    );
}

export default Tarifs;
