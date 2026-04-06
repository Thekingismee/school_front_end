// components/Maternelle/ActivitesMaternelle.jsx
import React from "react";
import {
    Puzzle,
    Paintbrush,
    Music2,
    Baby,
    Flower2,
    Smile,
    BookOpen,
    Dumbbell
} from "lucide-react";

const ActivitesMaternelle = () => {
    const activitesMaternelle = [
        {
            id: 1,
            titre: "Jeux d'Éveil",
            icone: Puzzle,
            couleur: "#e76f51",
            description:
                "Activités ludiques pour développer la motricité fine, la coordination et la résolution de problèmes à travers des jeux adaptés aux tout-petits."
        },
        {
            id: 2,
            titre: "Arts Créatifs",
            icone: Paintbrush,
            couleur: "#f4a261",
            description:
                "Peinture, collage, modelage et dessin pour exprimer sa créativité, développer son imagination et sa motricité fine."
        },
        {
            id: 3,
            titre: "Éveil Musical",
            icone: Music2,
            couleur: "#e9c46a",
            description:
                "Chansons, comptines, découverte des instruments et rythmes pour développer l'oreille musicale et l'expression corporelle."
        },
        {
            id: 4,
            titre: "Psychomotricité",
            icone: Baby,
            couleur: "#2a9d8f",
            description:
                "Activités corporelles pour maîtriser son corps, développer l'équilibre, la coordination et la confiance en soi."
        },
        {
            id: 5,
            titre: "Découverte de la Nature",
            icone: Flower2,
            couleur: "#606c38",
            description:
                "Exploration du jardin, ateliers sensoriels, jardinage et observation du vivant pour éveiller la curiosité écologique."
        },
        {
            id: 6,
            titre: "Socialisation",
            icone: Smile,
            couleur: "#e76f51",
            description:
                "Jeux collectifs, ateliers d'expression, apprentissage du partage et de la vie en groupe pour développer l'intelligence sociale."
        },
        {
            id: 7,
            titre: "Premières Lectures",
            icone: BookOpen,
            couleur: "#264653",
            description:
                "Découverte des livres, comptines, histoires animées et ateliers de langage pour éveiller le goût de la lecture."
        },
        {
            id: 8,
            titre: "Activités Sportives",
            icone: Dumbbell,
            couleur: "#f4a261",
            description:
                "Parcours moteurs, jeux d'adresse et activités physiques adaptées pour développer l'énergie et la coordination."
        }
    ];

    return (
        <section className="activites-maternelle">
            <div className="activites-container">
                <div className="activites-header">
                    <span className="activites-label">Notre Programme</span>
                    <h2 className="activites-title">Activités d'Éveil</h2>
                    <p className="activites-intro">
                        Des activités douces et adaptées pour éveiller la
                        curiosité et accompagner les premiers pas de chaque
                        enfant
                    </p>
                </div>

                <div className="activites-grille">
                    {activitesMaternelle.map(activite => {
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
                .activites-maternelle {
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

                    .activites-maternelle {
                        padding: 60px 20px;
                    }
                }

                @media (max-width: 576px) {
                    .activites-grille {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }

                    .activites-maternelle {
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

export default ActivitesMaternelle;
