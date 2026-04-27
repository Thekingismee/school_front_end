import { useState } from "react";

const cardsData = [
    {
        title: "Pédagogie innovante",
        subtitle: "Méthodes modernes & adaptées",
        icon: (
            <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
        ),
        text:
            "Nous adoptons des méthodes pédagogiques innovantes qui s'adaptent au rythme et aux besoins de chaque élève, favorisant l'autonomie et la curiosité intellectuelle."
    },
    {
        title: "Encadrement bienveillant",
        subtitle: "Une équipe à l'écoute",
        icon: (
            <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
        ),
        text:
            "Notre équipe enseignante qualifiée assure un suivi personnalisé dans un cadre bienveillant, où chaque enfant se sent en confiance pour apprendre et progresser."
    },
    {
        title: "Infrastructures modernes",
        subtitle: "Un cadre propice à l'apprentissage",
        icon: (
            <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
        ),
        text:
            "Des salles de classe équipées, des espaces de vie agréables et des outils numériques de pointe pour offrir les meilleures conditions d'apprentissage."
    },
    {
        title: "Vie scolaire riche",
        subtitle: "Activités & épanouissement",
        icon: (
            <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" />
            </svg>
        ),
        text:
            "Un programme périscolaire varié — sport, art, culture, numérique — qui contribue au développement global de chaque élève au-delà des matières académiques."
    }
];

export default function WhyCards() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = i => setOpenIndex(openIndex === i ? null : i);

    return (
        <section className="why-cards-section">
            <h2 className="why-cards-title">Pourquoi choisir L'Atome ?</h2>
            <p className="why-cards-subtitle">
                Découvrez ce qui nous rend unique
            </p>

            <div className="cards-container">
                {cardsData.map((card, i) => {
                    const isOpen = openIndex === i;
                    return (
                        <div
                            key={i}
                            className={`why-card ${
                                isOpen ? "why-card--open" : ""
                            }`}
                        >
                            {/* En-tête cliquable */}
                            <button
                                className="card-header-btn"
                                onClick={() => toggle(i)}
                                aria-expanded={isOpen}
                            >
                                <div className="card-icon-title">
                                    <div className="card-icon-circle">
                                        {card.icon}
                                    </div>
                                    <div>
                                        <div className="card-title-text">
                                            {card.title}
                                        </div>
                                        <div className="card-subtitle-text">
                                            {card.subtitle}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`plus-btn ${
                                        isOpen ? "plus-btn--open" : ""
                                    }`}
                                >
                                    <span>{isOpen ? "×" : "+"}</span>
                                </div>
                            </button>

                            <div className="card-divider" />

                            {/* Corps avec le paragraphe */}
                            <div
                                className={`card-body ${
                                    isOpen ? "card-body--open" : ""
                                }`}
                            >
                                <p className="card-body-text">{card.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <style jsx>{`
                .why-cards-section {
                    padding: 4rem 2rem;
                    width: 73%;
                    margin: 20px auto;
                    font-family: "Trebuchet MS", Helvetica, sans-serif;
                }

                .why-cards-title {
                    text-align: center;
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #1a56a5;
                    margin-bottom: 0.5rem;
                }

                .why-cards-subtitle {
                    text-align: center;
                    font-size: 1rem;
                    color: #666;
                    margin-bottom: 2.5rem;
                }

                /* Container vertical - les cartes s'empilent */
                .cards-container {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                    max-width: 800px;
                    margin: 0 auto;
                }

                /* ── Carte ── */
                .why-card {
                    border: 2px solid #1a56a5;
                    border-radius: 12px;
                    background: transparent;
                    overflow: hidden;
                    transition: box-shadow 0.2s;
                    width: 100%;
                }

                .why-card:hover {
                    box-shadow: 0 4px 18px rgba(26, 86, 165, 0.2);
                }

                /* ── En-tête ── */
                .card-header-btn {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1.1rem 1.25rem;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    gap: 12px;
                    font-family: "Trebuchet MS", Helvetica, sans-serif;
                }

                .card-icon-title {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .card-icon-circle {
                    width: 42px;
                    height: 42px;
                    border-radius: 50%;
                    background: #1a56a5;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .card-title-text {
                    font-size: 1rem;
                    font-weight: 700;
                    color: #1a56a5;
                    text-align: left;
                }

                .card-subtitle-text {
                    font-size: 0.78rem;
                    color: #0d3b73;
                    margin-top: 2px;
                    text-align: left;
                }

                /* ── Bouton + ── */
                .plus-btn {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    border: 2px solid #1a56a5;
                    background: transparent;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    transition: background 0.2s;
                }

                .plus-btn span {
                    font-size: 20px;
                    line-height: 1;
                    color: #1a56a5;
                    font-weight: 400;
                    display: block;
                    margin-top: -1px;
                    transition: transform 0.25s;
                }

                .plus-btn--open {
                    background: #1a56a5;
                }

                .plus-btn--open span {
                    color: white;
                }

                /* ── Séparateur ── */
                .card-divider {
                    height: 1px;
                    background: #1a56a5;
                    opacity: 0.2;
                    margin: 0 1.25rem;
                }

                /* ── Corps accordéon ── */
                .card-body {
                    max-height: 0;
                    overflow: hidden;
                    padding: 0 1.25rem;
                    transition: max-height 0.35s ease, padding 0.25s;
                }

                .card-body--open {
                    max-height: 300px;
                    padding: 0 1.25rem 1.25rem;
                }

                /* ── Texte ── */
                .card-body-text {
                    font-size: 0.95rem;
                    line-height: 1.7;
                    color: #1a56a5;
                    background: transparent;
                    border-left: 3px solid #1a56a5;
                    padding-left: 12px;
                    margin: 0;
                    margin-top: 1rem;
                }

                /* ── Responsive ── */
                @media (max-width: 768px) {
                    .why-cards-section {
                        width: 95%;
                        padding: 2.5rem 1rem;
                    }

                    .cards-container {
                        gap: 1rem;
                    }
                }
            `}</style>
        </section>
    );
}
