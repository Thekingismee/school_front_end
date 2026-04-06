// components/College/ActivitesCollege.jsx
import React from "react";
import {
    FlaskConical,
    Globe2,
    Calculator,
    Palette,
    Laptop,
    Heart,
    Briefcase,
    Trophy
} from "lucide-react";

const ActivitesCollege = () => {
    const activitesCollege = [
        {
            id: 1,
            titre: "Sciences Expérimentales",
            icone: FlaskConical,
            couleur: "#e76f51",
            description:
                "Physique, chimie et SVT avec travaux pratiques, projets scientifiques et sorties pédagogiques pour éveiller la curiosité scientifique."
        },
        {
            id: 2,
            titre: "Langues & Culture",
            icone: Globe2,
            couleur: "#2a9d8f",
            description:
                "Anglais, arabe, français avec immersion culturelle, échanges internationaux et ateliers de communication pour une ouverture sur le monde."
        },
        {
            id: 3,
            titre: "Mathématiques & Logique",
            icone: Calculator,
            couleur: "#264653",
            description:
                "Raisonnement mathématique, algorithmique, résolution de problèmes et préparation aux concours pour développer la pensée logique."
        },
        {
            id: 4,
            titre: "Arts & Créativité",
            icone: Palette,
            couleur: "#f4a261",
            description:
                "Arts plastiques, théâtre, musique et ateliers d'écriture pour l'expression personnelle et le développement de la sensibilité artistique."
        },
        {
            id: 5,
            titre: "Numérique & Technologie",
            icone: Laptop,
            couleur: "#606c38",
            description:
                "Programmation, robotique, design digital et culture numérique pour maîtriser les outils du 21ème siècle."
        },
        {
            id: 6,
            titre: "Bien-être & Développement",
            icone: Heart,
            couleur: "#e76f51",
            description:
                "Éducation à la santé, gestion des émotions, prévention et accompagnement psycho-éducatif pour un épanouissement personnel."
        },
        {
            id: 7,
            titre: "Orientation & Projets",
            icone: Briefcase,
            couleur: "#2a9d8f",
            description:
                "Découverte des métiers, stages en entreprise, construction du projet d'orientation et accompagnement personnalisé."
        },
        {
            id: 8,
            titre: "Sports & Défis",
            icone: Trophy,
            couleur: "#f4a261",
            description:
                "Activités sportives variées, compétitions inter-classes, sports collectifs pour l'esprit d'équipe et le leadership."
        }
    ];

    return (
        <section className="activites-college">
            <div className="activites-container">
                <div className="activites-header">
                    <span className="activites-label">Notre Programme</span>
                    <h2 className="activites-title">Activités Pédagogiques</h2>
                    <p className="activites-intro">
                        Un parcours enrichissant pour développer compétences,
                        autonomie et confiance en soi
                    </p>
                </div>

                <div className="activites-grille">
                    {activitesCollege.map(activite => {
                        const Icone = activite.icone;
                        return (
                            <article
                                key={activite.id}
                                className="activite-carte"
                                style={{ "--couleur": activite.couleur }}
                            >
                                <div className="activite-icone">
                                    <Icone size={32} strokeWidth={1.5} />
                                </div>

                                <h3 className="activite-titre">
                                    {activite.titre}
                                </h3>

                                <div className="activite-separateur" />

                                <p className="activite-description">
                                    {activite.description}
                                </p>

                                <div className="activite-point" />
                            </article>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                .activites-college {
                    padding: 80px 24px;
                    background: #faf9f8;
                    font-family: "Georgia", "Times New Roman", serif;
                }

                .activites-container {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .activites-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .activites-label {
                    display: block;
                    font-family: "Arial", sans-serif;
                    font-size: 0.875rem;
                    font-weight: 600;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: #f97316;
                    margin-bottom: 16px;
                }

                .activites-title {
                    font-size: clamp(1.5rem, 5vw, 2.5rem);
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0 0 16px 0;
                    letter-spacing: 0.05em;
                }

                .activites-intro {
                    font-family: "Arial", sans-serif;
                    font-size: 1.05rem;
                    color: #78716c;
                    margin: 0;
                    font-weight: 400;
                    max-width: 700px;
                    margin: 0 auto;
                }

                .activites-grille {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 32px;
                }

                .activite-carte {
                    position: relative;
                    border-radius: 4px;
                    padding: 40px 24px;
                    text-align: center;
                    border: 1px solid #e7e5e4;
                    background: #ffffff;
                    transition: all 0.25s ease;
                }

                .activite-carte::before {
                    content: "";
                    position: absolute;
                    top: -1px;
                    right: -1px;
                    width: 20px;
                    height: 20px;
                    background: #ffffffff;
                    border-bottom: 1px solid #e7e5e4;
                    border-left: 1px solid #e7e5e4;
                    border-radius: 0 0 0 4px;
                }

                .activite-carte:hover {
                    border-color: var(--couleur);
                    transform: translateY(-4px);
                    box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.08);
                }

                .activite-icone {
                    width: 64px;
                    height: 64px;
                    margin: 0 auto 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--couleur);
                    background: #fafaf9;
                    border-radius: 50%;
                    border: 1px solid #e7e5e4;
                    transition: all 0.25s ease;
                }

                .activite-carte:hover .activite-icone {
                    background: var(--couleur);
                    color: #ffffff;
                    border-color: var(--couleur);
                }

                .activite-titre {
                    font-size: 1.15rem;
                    color: #292524;
                    margin: 0 0 16px 0;
                    font-weight: 600;
                    letter-spacing: -0.01em;
                }

                .activite-separateur {
                    width: 30px;
                    height: 2px;
                    background: var(--couleur);
                    margin: 0 auto 20px;
                    opacity: 0.6;
                    transition: width 0.25s ease;
                }

                .activite-carte:hover .activite-separateur {
                    width: 50px;
                    opacity: 1;
                }

                .activite-description {
                    font-family: "Arial", sans-serif;
                    font-size: 0.9rem;
                    line-height: 1.6;
                    color: #57534e;
                    margin: 0;
                }

                .activite-point {
                    position: absolute;
                    bottom: 16px;
                    right: 16px;
                    width: 6px;
                    height: 6px;
                    background: var(--couleur);
                    border-radius: 50%;
                    opacity: 0;
                    transition: opacity 0.25s ease;
                }

                .activite-carte:hover .activite-point {
                    opacity: 0.4;
                }

                @media (max-width: 1100px) {
                    .activites-grille {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 28px;
                    }
                }

                @media (max-width: 800px) {
                    .activites-grille {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 24px;
                    }

                    .activites-college {
                        padding: 60px 20px;
                    }
                }

                @media (max-width: 576px) {
                    .activites-grille {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }

                    .activites-college {
                        padding: 50px 16px;
                    }

                    .activite-carte {
                        padding: 32px 20px;
                    }
                }
            `}</style>
        </section>
    );
};

export default ActivitesCollege;
