import React from "react";

const CyclesSection = () => {
    const cycles = [
        {
            id: 1,
            title: "Maternelle",
            image: "/Mat.jpg",
            fallbackImage:
                "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80",
            description:
                "Un premier pas vers l'apprentissage dans un environnement sécurisé et stimulant. Éveil, découverte et socialisation pour les petits de 3 à 6 ans.",
            color: "#f97316" // Orange
        },
        {
            id: 2,
            title: "Primaire",
            image: "/CE2.jpg",
            fallbackImage:
                "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
            description:
                "Les fondamentaux de l'éducation avec une approche pédagogique innovante. Lecture, écriture, mathématiques et découverte du monde pour construire les bases solides.",
            color: "#1e3a8a" // Bleu marine
        },
        {
            id: 3,
            title: "College",
            image: "/college.jpg",
            fallbackImage:
                "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
            description:
                "Un accompagnement personnalisé pendant ces années de transition. Développement de l'autonomie, approfondissement des savoirs et orientation vers le futur.",
            color: "#059669" // Vert
        },
        {
            id: 4,
            title: "Lycee",
            image: "/lycee.jpg",
            fallbackImage:
                "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80",
            description:
                "Préparation aux examens et à l'enseignement supérieur. Excellence académique, projets innovants et ouverture internationale pour des parcours de réussite.",
            color: "#7c3aed" // Violet
        }
    ];

    return (
        <section className="cycles-section">
            <div className="container">
                {/* Titre de section */}
                <div className="section-header">
                    <span className="subtitle">Notre Offre Éducative</span>
                    <h2 className="title1">NOS CYCLES</h2>
                    <div className="title-underline" />
                </div>

                {/* Grille des cycles */}
                <div className="cycles-grid">
                    {cycles.map((cycle, index) => (
                        <div
                            key={cycle.id}
                            className="cycle-card"
                            style={{ "--cycle-color": cycle.color }}
                        >
                            {/* Image ronde qui sort du top */}
                            <div className="image-wrapper">
                                <div className="image-circle">
                                    <img
                                        src={cycle.image}
                                        alt={cycle.title}
                                        onError={e => {
                                            e.target.src = cycle.fallbackImage;
                                        }}
                                    />
                                    <div className="image-border" />
                                </div>
                                {/* Élément décoratif */}
                                <div className="decoration-ring" />
                            </div>

                            {/* Contenu */}
                            <div className="card-content">
                                <h3 className="cycle-title">{cycle.title}</h3>
                                <div className="title-line" />
                                <p className="cycle-description">
                                    {cycle.description}
                                </p>

                                <a
                                    href={`/${cycle.title.toLowerCase()}`}
                                    className="cycle-link"
                                >
                                    En savoir plus
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>

                            {/* Numéro du cycle en arrière-plan */}
                            <span className="cycle-number">0{index + 1}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .cycles-section {
                    padding: 80px 24px 100px;
                    background: linear-gradient(
                        180deg,
                        #f8fafc 0%,
                        #ffffff 100%
                    );
                    position: relative;
                    overflow: hidden;
                    font-family: "Georgia", "Times New Roman", serif;
                }

                /* Texture de fond subtile */
                .cycles-section::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: radial-gradient(
                            circle at 20% 80%,
                            rgba(249, 115, 22, 0.03) 0%,
                            transparent 50%
                        ),
                        radial-gradient(
                            circle at 80% 20%,
                            rgba(30, 58, 138, 0.03) 0%,
                            transparent 50%
                        );
                    pointer-events: none;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 1;
                }

                /* Header de section */
                .section-header {
                    text-align: center;
                    margin-bottom: 100px;
                }

                .subtitle {
                    display: block;
                    font-family: "Arial", sans-serif;
                    font-size: 0.875rem;
                    font-weight: 600;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: #f97316;
                    margin-bottom: 16px;
                }

                .title1 {
                    font-size: clamp(2.5rem, 5vw, 3.5rem);
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0;
                    letter-spacing: 0.05em;
                }

                .title-underline {
                    width: 80px;
                    height: 4px;
                    background: linear-gradient(90deg, #f97316, #1e3a8a);
                    margin: 24px auto 0;
                    border-radius: 2px;
                }

                /* Grille des cycles */
                .cycles-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 40px 30px;
                }

                /* Carte individuelle */
                .cycle-card {
                    position: relative;
                    background: #ffffff;
                    border-radius: 8px;
                    padding: 0 24px 40px;
                    text-align: center;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05),
                        0 10px 15px -3px rgba(0, 0, 0, 0.08);
                    border: 1px solid rgba(0, 0, 0, 0.05);
                }

                /* Wrapper de l'image */
                .image-wrapper {
                    position: relative;
                    margin-top: -60px;
                    margin-bottom: 24px;
                    display: flex;
                    justify-content: center;
                }

                /* Cercle d'image principal */
                .image-circle {
                    position: relative;
                    width: 140px;
                    height: 140px;
                    border-radius: 50%;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
                        0 0 0 8px #ffffff;
                    z-index: 2;
                    transition: transform 0.4s ease;
                }

                .cycle-card:hover .image-circle {
                    transform: scale(1.05);
                }

                .image-circle img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s ease;
                }

                .cycle-card:hover .image-circle img {
                    transform: scale(1.1);
                }

                /* Bordure colorée animée */
                .image-border {
                    position: absolute;
                    top: -4px;
                    left: -4px;
                    right: -4px;
                    bottom: -4px;
                    border-radius: 50%;
                    border: 3px solid var(--cycle-color);
                    opacity: 0;
                    transform: scale(0.9);
                    transition: all 0.4s ease;
                }

                .cycle-card:hover .image-border {
                    opacity: 1;
                    transform: scale(1);
                }

                /* Anneau décoratif */
                .decoration-ring {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 160px;
                    height: 160px;
                    border: 2px dashed var(--cycle-color);
                    border-radius: 50%;
                    opacity: 0.3;
                    animation: rotate 20s linear infinite;
                    pointer-events: none;
                }

                @keyframes rotate {
                    from {
                        transform: translate(-50%, -50%) rotate(0deg);
                    }
                    to {
                        transform: translate(-50%, -50%) rotate(360deg);
                    }
                }

                /* Contenu de la carte */
                .card-content {
                    position: relative;
                    z-index: 1;
                }

                .cycle-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0 0 12px 0;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .title-line {
                    width: 40px;
                    height: 3px;
                    background: var(--cycle-color);
                    margin: 0 auto 20px;
                    border-radius: 2px;
                    transition: width 0.3s ease;
                }

                .cycle-card:hover .title-line {
                    width: 60px;
                }

                .cycle-description {
                    font-family: "Arial", sans-serif;
                    font-size: 0.95rem;
                    line-height: 1.7;
                    color: #64748b;
                    margin: 0 0 24px 0;
                }

                .cycle-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-family: "Arial", sans-serif;
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: var(--cycle-color);
                    text-decoration: none;
                    transition: all 0.3s ease;
                }

                .cycle-link:hover {
                    gap: 12px;
                }

                .cycle-link svg {
                    transition: transform 0.3s ease;
                }

                .cycle-link:hover svg {
                    transform: translateX(4px);
                }

                /* Numéro en arrière-plan */
                .cycle-number {
                    position: absolute;
                    bottom: 20px;
                    right: 20px;
                    font-size: 5rem;
                    font-weight: 700;
                    color: var(--cycle-color);
                    opacity: 0.05;
                    line-height: 1;
                    pointer-events: none;
                    font-family: "Arial", sans-serif;
                }

                /* Responsive */
                @media (max-width: 1024px) {
                    .cycles-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 80px 30px;
                    }
                }

                @media (max-width: 640px) {
                    .cycles-section {
                        padding: 80px 20px 60px;
                    }

                    .section-header {
                        margin-bottom: 80px;
                    }

                    .cycles-grid {
                        grid-template-columns: 1fr;
                        gap: 80px;
                    }

                    .image-circle {
                        width: 120px;
                        height: 120px;
                    }

                    .decoration-ring {
                        width: 140px;
                        height: 140px;
                    }

                    .cycle-title {
                        font-size: 1.25rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default CyclesSection;
