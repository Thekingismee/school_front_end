import React, { useState } from "react";
import ContactPopup from "../components/Accueil/ContactPopup";
import HomeInfo from "../components/Accueil/HomeInfo";
import { HeartHandshake, Wallet, ShieldCheck, ArrowRight, CheckCircle, Calendar, CreditCard, Clock, Users, Sparkles, Heart, Star } from "lucide-react";

function Tarifs() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isCarouselHovered, setIsCarouselHovered] = useState(false);

    // Valeurs fondamentales — présentées avec humanité et authenticité
    const coreValues = [
        {
            icon: HeartHandshake,
            title: "Bienveillance avant tout",
            description: "Chaque situation est unique. Nous écoutons et adaptons nos solutions à votre réalité.",
            color: "rose"
        },
        {
            icon: Wallet,
            title: "Souplesse financière",
            description: "Des formules de paiement pensées pour votre confort : annuel, trimestriel ou mensuel.",
            color: "blue"
        },
        {
            icon: ShieldCheck,
            title: "Transparence totale",
            description: "Aucune surprise. Chaque poste est expliqué clairement dès le premier échange.",
            color: "emerald"
        },
        {
            icon: Users,
            title: "Accompagnement personnalisé",
            description: "Notre équipe est à votre écoute pour construire ensemble le meilleur projet.",
            color: "amber"
        }
    ];

    // Duplication pour défilement infini
    const infiniteValues = [...coreValues, ...coreValues, ...coreValues];

    return (
        <div className="tarifs-page">
            {/* ===== HERO SECTION ===== */}
            <header className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="hero-title-accent">Nos Tarifs</span>
                    </h1>
                    <p className="hero-subtitle">
                        Une éducation d'excellence accessible, pensée pour chaque famille
                    </p>
                    <div className="hero-decoration">
                        <span className="hero-line"></span>
                    </div>
                </div>
            </header>

  {/* ===== VALEURS FONDAMENTALES — Cartes horizontales minces en mouvement infini ===== */}
            <section className="values-section">
                <div className="section-header">
                    <h2>Notre engagement <span className="highlight">pour vous</span></h2>
                    <p className="section-subtitle">
                        Au-delà des chiffres, des valeurs qui nous guident au quotidien
                    </p>
                </div>

                <div 
                    className="values-carousel-wrapper"
                    onMouseEnter={() => setIsCarouselHovered(true)}
                    onMouseLeave={() => setIsCarouselHovered(false)}
                >
                    <div 
                        className="values-carousel-track"
                        style={{ animationPlayState: isCarouselHovered ? 'paused' : 'running' }}
                    >
                        {infiniteValues.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <article
                                    key={`${value.title}-${index}`}
                                    className="value-card-horizontal"
                                    style={{ "--accent-color": getAccentColor(value.color) }}
                                >
                                    <div className="card-icon-wrapper">
                                        <Icon className="card-icon" size={24} strokeWidth={1.8} />
                                        <div className="icon-glow" />
                                    </div>
                                    <div className="card-content">
                                        <h3 className="card-title">{value.title}</h3>
                                        <p className="card-description">{value.description}</p>
                                    </div>
                                    <div className="card-accent-line" />
                                </article>
                            );
                        })}
                    </div>
                    <div className="carousel-fade-left" aria-hidden="true" />
                    <div className="carousel-fade-right" aria-hidden="true" />
                </div>
            </section>

           
            {/* ===== BOUTON CONTACT — Après les formules ===== */}
            <section className="contact-cta-section">
                <div className="contact-cta-wrapper">
                    <div className="contact-cta-overlay" aria-hidden="true" />
                    <div className="contact-cta-content">
                        <div className="contact-cta-text">
                            <h3>Une question sur nos tarifs ?</h3>
                            <p>Notre équipe vous répond sous 24h pour établir un devis personnalisé</p>
                        </div>
                        <button className="contact-cta-btn" onClick={() => setIsContactOpen(true)}>
                            <span className="btn-text">Demander un devis</span>
                            <ArrowRight className="btn-icon" size={18} />
                        </button>
                    </div>
                </div>
            </section>
            
            {/* ===== FORMULES DE PAIEMENT — Simples et rassurantes ===== */}
            <section className="payment-section">
                <div className="section-header">
                    <h2>Des modalités de paiement <span className="highlight">flexibles</span></h2>
                    <p className="section-subtitle">
                        Choisissez le rythme qui vous convient, sans pression
                    </p>
                </div>

                <div className="payment-grid">
                    <div className="payment-card">
                        <div className="payment-icon"><Calendar size={32} /></div>
                        <h3 className="payment-title">Paiement annuel</h3>
                        <span className="payment-benefit">−3% de remise</span>
                        <p className="payment-desc">Un seul règlement à la rentrée. Simple et économique.</p>
                        <button className="btn-choose" onClick={() => setIsContactOpen(true)}>
                            En savoir plus <ArrowRight size={16} />
                        </button>
                    </div>

                    <div className="payment-card highlighted">
                        <div className="payment-icon"><CreditCard size={32} /></div>
                        <span className="badge-populaire">⭐ La plus choisie</span>
                        <h3 className="payment-title">Paiement trimestriel</h3>
                        <span className="payment-benefit">3 versements par an</span>
                        <p className="payment-desc">L'option équilibrée, préférée par nos familles.</p>
                        <button className="btn-choose" onClick={() => setIsContactOpen(true)}>
                            En savoir plus <ArrowRight size={16} />
                        </button>
                    </div>

                    <div className="payment-card">
                        <div className="payment-icon"><Clock size={32} /></div>
                        <h3 className="payment-title">Paiement mensuel</h3>
                        <span className="payment-benefit">10 prélèvements</span>
                        <p className="payment-desc">De septembre à juin, pour lisser votre budget en douceur.</p>
                        <button className="btn-choose" onClick={() => setIsContactOpen(true)}>
                            En savoir plus <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </section>

         
            {/* ===== COMPOSANT HOMEINFO ===== */}
            <HomeInfo />

            {/* ===== POPUP CONTACT ===== */}
            <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

            <style jsx>{`
                /* ===== BASE ===== */
                * { box-sizing: border-box; }

                .tarifs-page {
                    font-family: "Inter", system-ui, sans-serif;
                    color: #1e293b;
                    background: #ffffff;
                }

                /* ===== HERO SECTION ===== */
                .hero-section {
                    position: relative;
                    min-height: 60vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background-image: url("/tarr.jpg");
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

                .hero-title-accent {
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 800;
                    letter-spacing: 2px;
                    color: #ee721f;
                    font-family: "Playfair Display", serif;
                    text-transform: uppercase;
                    position: relative;
                    display: inline-block;
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
                    margin: 0 auto 2.5rem;
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
                    font-size: 1rem;
                    color: #64748b;
                    line-height: 1.6;
                    font-family: "Inter", sans-serif;
                }

                /* ===== TRANSPARENCY SECTION ===== */
                .transparency-section {
                    padding: 4rem 1.5rem 2rem;
                    background: #ffffff;
                }

                .included-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                    gap: 1.5rem;
                    max-width: 1000px;
                    margin: 0 auto 2rem;
                }

                .included-card {
                    text-align: center;
                    padding: 1.5rem;
                    background: #f8fafc;
                    border-radius: 16px;
                    transition: all 0.3s ease;
                }

                .included-card:hover {
                    transform: translateY(-4px);
                    background: #ffffff;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
                }

                .included-icon {
                    color: #ee721f;
                    margin-bottom: 1rem;
                }

                .included-card h3 {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    color: #0f172a;
                }

                .included-card p {
                    font-size: 0.9rem;
                    color: #64748b;
                    line-height: 1.5;
                }

                .transparency-note {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 1rem;
                    background: #fef9f5;
                    border-radius: 12px;
                    max-width: 500px;
                    margin: 0 auto;
                    color: #ee721f;
                    font-size: 0.85rem;
                }

                /* ===== PAYMENT SECTION ===== */
                .payment-section {
                    padding: 2rem 1.5rem 4rem;
                    background: #f8fafc;
                }

                .payment-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                    max-width: 1000px;
                    margin: 0 auto;
                }

                .payment-card {
                    background: white;
                    border-radius: 20px;
                    padding: 2rem;
                    text-align: center;
                    position: relative;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
                    border: 1px solid #e8e8e8;
                }

                .payment-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                    border-color: #ee721f30;
                }

                .payment-card.highlighted {
                    border-color: #ee721f;
                    background: linear-gradient(135deg, #ffffff 0%, #fef9f5 100%);
                }

                .payment-icon {
                    margin-bottom: 1rem;
                    color: #ee721f;
                }

                .badge-populaire {
                    position: absolute;
                    top: -12px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: linear-gradient(135deg, #ee721f, #f97316);
                    color: white;
                    font-size: 0.7rem;
                    font-weight: 600;
                    padding: 4px 14px;
                    border-radius: 20px;
                    white-space: nowrap;
                }

                .payment-title {
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0.5rem 0;
                }

                .payment-benefit {
                    display: inline-block;
                    background: rgba(238, 114, 31, 0.1);
                    color: #ee721f;
                    font-size: 0.8rem;
                    font-weight: 600;
                    padding: 4px 12px;
                    border-radius: 8px;
                    margin-bottom: 1rem;
                }

                .payment-desc {
                    font-size: 0.9rem;
                    color: #64748b;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                }

                .btn-choose {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 10px 24px;
                    background: transparent;
                    color: #0f172a;
                    border: 1.5px solid #cbd5e1;
                    border-radius: 30px;
                    font-weight: 600;
                    font-size: 0.85rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .btn-choose:hover {
                    background: #0f172a;
                    color: white;
                    border-color: #0f172a;
                }

                .payment-card.highlighted .btn-choose {
                    border-color: #ee721f;
                    color: #ee721f;
                }

                .payment-card.highlighted .btn-choose:hover {
                    background: #ee721f;
                    color: white;
                }

                /* ===== CONTACT CTA ===== */
                .contact-cta-section {
                    padding: 2rem 1.5rem;
                    background: #ffffff;
                }

                .contact-cta-wrapper {
                    position: relative;
                    max-width: 800px;
                    margin: 0 auto;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
                }

                .contact-cta-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, #ee721f 0%, #004494 100%);
                    z-index: 1;
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

                .contact-cta-text h3 {
                    color: white;
                    font-size: 1.2rem;
                    font-weight: 600;
                    margin: 0 0 0.3rem 0;
                }

                .contact-cta-text p {
                    color: rgba(255, 255, 255, 0.9);
                    margin: 0;
                    font-size: 0.85rem;
                }

                .contact-cta-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 12px 28px;
                    background: rgba(255, 255, 255, 0.15);
                    color: white;
                    border: 1.5px solid rgba(255, 255, 255, 0.4);
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 0.9rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(8px);
                }

                .contact-cta-btn:hover {
                    background: rgba(255, 255, 255, 0.25);
                    transform: translateY(-2px);
                }

                .btn-icon {
                    transition: transform 0.3s ease;
                }

                .contact-cta-btn:hover .btn-icon {
                    transform: translateX(4px);
                }

                /* ===== VALUES SECTION — Carousel horizontal mince ===== */
                .values-section {
                    padding: 3rem 0;
                    background: #f8fafc;
                    overflow: hidden;
                }

                .values-carousel-wrapper {
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                    padding: 1rem 0;
                }

                .values-carousel-track {
                    display: flex;
                    gap: 1.2rem;
                    padding: 0.5rem 1rem;
                    animation: scrollInfinite 40s linear infinite;
                    width: max-content;
                }

                .values-carousel-track:hover {
                    animation-play-state: paused;
                }

                @keyframes scrollInfinite {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }

                .carousel-fade-left,
                .carousel-fade-right {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    width: 60px;
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

                /* Carte horizontale mince */
                .value-card-horizontal {
                    flex: 0 0 360px;
                    height: 80px;
                    background: white;
                    border-radius: 14px;
                    padding: 0 1.2rem;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    position: relative;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
                    border: 1px solid rgba(226, 232, 240, 0.7);
                    transition: all 0.35s ease;
                    overflow: hidden;
                }

                .value-card-horizontal:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
                }

                .card-icon-wrapper {
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    background: var(--accent-color, rgba(238, 114, 31, 0.12));
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .card-icon {
                    color: #0f172a;
                }

                .icon-glow {
                    position: absolute;
                    inset: -15px;
                    border-radius: 50%;
                    background: var(--accent-color, rgba(238, 114, 31, 0.2));
                    opacity: 0;
                    filter: blur(12px);
                    transition: opacity 0.3s ease;
                    pointer-events: none;
                }

                .value-card-horizontal:hover .icon-glow {
                    opacity: 1;
                }

                .card-content {
                    flex: 1;
                    min-width: 0;
                }

                .card-title {
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: #0f172a;
                    margin: 0 0 0.2rem 0;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .card-description {
                    font-size: 0.78rem;
                    color: #64748b;
                    margin: 0;
                    line-height: 1.4;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .card-accent-line {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 2.5px;
                    background: var(--accent-color, #ee721f);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.35s ease;
                }

                .value-card-horizontal:hover .card-accent-line {
                    transform: scaleX(1);
                }

                /* ===== TRUST SECTION — Cadre bleu inspiré du logo ===== */
                .trust-section {
                    padding: 4rem 1.5rem;
                    background: linear-gradient(135deg, #004494 0%, #002d5f 100%);
                    position: relative;
                }

                .trust-container {
                    max-width: 800px;
                    margin: 0 auto;
                    text-align: center;
                    color: white;
                }

                .trust-icon {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 1.5rem;
                    color: #ee721f;
                }

                .trust-container h2 {
                    font-size: clamp(1.6rem, 3.5vw, 2.2rem);
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    font-family: "Playfair Display", serif;
                }

                .trust-container h2 .highlight {
                    color: #ee721f;
                    font-style: italic;
                }

                .trust-container p {
                    font-size: 1rem;
                    line-height: 1.7;
                    margin-bottom: 1.5rem;
                    opacity: 0.95;
                }

                .trust-quote {
                    font-style: italic;
                    padding: 1rem 2rem;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 20px;
                    margin: 1.5rem 0;
                }

                .trust-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 12px 28px;
                    background: #ee721f;
                    color: white;
                    border: none;
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-top: 1rem;
                }

                .trust-btn:hover {
                    background: #f97316;
                    transform: translateY(-2px);
                    box-shadow: 0 12px 30px rgba(238, 114, 31, 0.3);
                }

                /* ===== RESPONSIVE ===== */
                @media (max-width: 768px) {
                    .hero-section { min-height: 50vh; }
                    .hero-title-accent { font-size: 2rem; }
                    
                    .payment-grid { gap: 1.5rem; }
                    .payment-card { padding: 1.5rem; }
                    
                    .value-card-horizontal { flex: 0 0 300px; height: 75px; }
                    .card-title { font-size: 0.85rem; }
                    .card-description { font-size: 0.72rem; }
                    
                    .contact-cta-content {
                        flex-direction: column;
                        text-align: center;
                        padding: 1.2rem;
                    }
                    .contact-cta-btn { width: 100%; justify-content: center; }
                    
                    .carousel-fade-left, .carousel-fade-right { width: 30px; }
                    
                    .trust-container h2 { font-size: 1.5rem; }
                    .trust-quote { padding: 1rem; }
                }

                @media (max-width: 480px) {
                    .included-grid { grid-template-columns: 1fr; }
                    .value-card-horizontal { flex: 0 0 270px; height: 70px; padding: 0 1rem; }
                    .card-icon-wrapper { width: 38px; height: 38px; }
                    .card-title { font-size: 0.8rem; }
                }

                @media (prefers-reduced-motion: reduce) {
                    .value-card-horizontal,
                    .payment-card,
                    .trust-btn,
                    .values-carousel-track {
                        animation: none !important;
                        transition: none !important;
                    }
                }
            `}</style>
        </div>
    );
}

const getAccentColor = (colorName) => {
    const palette = {
        rose: "rgba(244, 63, 94, 0.12)",
        blue: "rgba(59, 130, 246, 0.12)",
        emerald: "rgba(16, 185, 129, 0.12)",
        amber: "rgba(245, 158, 11, 0.12)"
    };
    return palette[colorName] || "rgba(238, 114, 31, 0.12)";
};

export default Tarifs;