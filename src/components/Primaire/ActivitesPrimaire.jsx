// components/Primaire/ActivitesPrimaire.jsx
import React from "react";
import {
    BookOpen,
    Calculator,
    Globe,
    Palette,
    Microscope,
    Heart,
    Code,
    Music
} from "lucide-react";

const ActivitesPrimaire = () => {
    const activitesPrimaire = [
        {
            id: 1,
            titre: "Lecture & Expression",
            icone: BookOpen,
            couleur: "#e76f51",
            description:
                "Ateliers de lecture à voix haute, compréhension de textes, théâtre et expression orale pour développer le langage et l'imaginaire."
        },
        {
            id: 2,
            titre: "Mathématiques Ludiques",
            icone: Calculator,
            couleur: "#2a9d8f",
            description:
                "Découverte des nombres par le jeu, résolution de problèmes concrets, ateliers de logique et défis mathématiques collaboratifs."
        },
        {
            id: 3,
            titre: "Découverte du Monde",
            icone: Globe,
            couleur: "#264653",
            description:
                "Exploration des continents, découverte des cultures, sensibilisation à l'environnement et aux enjeux planétaires."
        },
        {
            id: 4,
            titre: "Arts Créatifs",
            icone: Palette,
            couleur: "#f4a261",
            description:
                "Dessin, peinture, modelage et travaux manuels pour développer la créativité et la motricité fine."
        },
        {
            id: 5,
            titre: "Sciences & Expériences",
            icone: Microscope,
            couleur: "#606c38",
            description:
                "Ateliers scientifiques, expériences amusantes, découverte du vivant et initiation à la démarche expérimentale."
        },
        {
            id: 6,
            titre: "Sport & Bien-être",
            icone: Heart,
            couleur: "#e76f51",
            description:
                "Activités physiques variées, jeux collectifs, yoga enfant pour l'équilibre corporel et émotionnel."
        },
        {
            id: 7,
            titre: "Initiation Numérique",
            icone: Code,
            couleur: "#2a9d8f",
            description:
                "Découverte du code, robotique éducative, utilisation créative des outils numériques en toute sécurité."
        },
        {
            id: 8,
            titre: "Éveil Musical",
            icone: Music,
            couleur: "#f4a261",
            description:
                "Chant, percussions, découverte des instruments et expression rythmique pour développer l'oreille musicale."
        }
    ];

    return (
        <section className="activites-primaire">
            <div className="activites-container">
                <div className="activites-header">
                    <span className="activites-label">Notre Programme</span>
                    <h2 className="activites-title">Activités Pédagogiques</h2>
                    <p className="activites-intro">
                        Un apprentissage diversifié pour éveiller la curiosité
                        et révéler les talents de chaque enfant
                    </p>
                </div>

                <div className="activites-grille">
                    {activitesPrimaire.map(activite => {
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
                .activites-primaire {
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

                    .activites-primaire {
                        padding: 60px 20px;
                    }
                }

                @media (max-width: 576px) {
                    .activites-grille {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }

                    .activites-primaire {
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

export default ActivitesPrimaire;
