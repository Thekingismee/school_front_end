import React, { useState } from "react";
import CyclesSection from "../components/Accueil/CyclesSection";
import HomeValeurs from "../components/Accueil/HomeValeurs";
import Cantine from "../components/Accueil/Cantine";
import Partenaires from "../components/Accueil/Partenaires";
import Temoignages from "../components/Accueil/Temoignages";
import HomeGallery from "../components/Accueil/HomeGallery";
import HomeActualites from "../components/Accueil/HomeActualites ";

function DotGrid({
    style,
    color = "#f97316",
    opacity = 0.4,
    size = 3,
    gap = 12,
    cols = 7,
    rows = 6
}) {
    const width = cols * gap;
    const height = rows * gap;
    return (
        <svg width={width} height={height} style={{ ...style, opacity }}>
            {Array.from({ length: rows }).map((_, r) =>
                Array.from({ length: cols }).map((_, c) => (
                    <circle
                        key={`${r}-${c}`}
                        cx={c * gap + gap / 2}
                        cy={r * gap + gap / 2}
                        r={size / 2}
                        fill={color}
                    />
                ))
            )}
        </svg>
    );
}

function CircleOutline({ style, color = "#1e3a8a" }) {
    return (
        <svg width="90" height="90" viewBox="0 0 90 90" style={style}>
            <circle
                cx="45"
                cy="45"
                r="40"
                stroke={color}
                strokeWidth="2.5"
                fill="none"
                opacity="0.25"
            />
            <circle
                cx="45"
                cy="45"
                r="28"
                stroke={color}
                strokeWidth="1.2"
                fill="none"
                opacity="0.15"
                strokeDasharray="5 4"
            />
        </svg>
    );
}

function ParcoursScolaire() {
    const [timestamp] = useState(Date.now());
    const [hoveredBtn, setHoveredBtn] = useState(null);

    return (
        <div>
            {/* Hero Section avec overlay blanc transparent */}
            <header className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="hero-title-main">Parcours</span>
                        <span className="hero-title-accent">Scolaire</span>
                    </h1>
                    <p className="hero-subtitle">
                        Un chemin éducatif cohérent, exigeant et épanouissant
                    </p>
                    <div className="hero-decoration">
                        <span className="hero-line"></span>
                    </div>
                </div>
            </header>

            {/* Section principale avec le contenu existant */}
            <div>
                <section style={styles.section}>
                    <div style={styles.container}>
                        {/* Right: Image collage with decorative motifs */}
                        <div style={styles.imageCol}>
                            <DotGrid
                                style={{
                                    position: "absolute",
                                    top: -20,
                                    right: -10,
                                    zIndex: 1
                                }}
                                color="#f97316"
                                opacity={0.35}
                            />
                            <CircleOutline
                                style={{
                                    position: "absolute",
                                    bottom: 10,
                                    left: -30,
                                    zIndex: 1
                                }}
                                color="#1e3a8a"
                            />
                            <DotGrid
                                style={{
                                    position: "absolute",
                                    bottom: 30,
                                    right: 20,
                                    zIndex: 1
                                }}
                                color="#1e3a8a"
                                opacity={0.2}
                                size={4}
                                gap={10}
                                cols={4}
                                rows={4}
                            />

                            <div style={styles.imgWrapMain}>
                                <img
                                    src={`/gslatome.jpg?t=${timestamp}`}
                                    alt="Vue extérieure de l'école"
                                    style={styles.imgMain}
                                    onError={e => {
                                        e.target.src =
                                            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80";
                                    }}
                                />
                                <div style={styles.imgMainAccent} />
                            </div>
                        </div>

                        {/* Left: Text content */}
                        <div style={styles.textCol}>
                            <span style={styles.eyebrow}>
                                On est là pour vous
                            </span>
                            <h2 style={styles.heading}>
                                Un chemin
                                <br />
                                <em style={styles.headingAccent}>
                                    éducatif cohérent, exigeant et épanouissant.
                                </em>
                            </h2>
                            <p style={styles.body}>
                                Dès la maternelle, chaque étape est pensée pour
                                accompagner l'enfant dans son développement
                                global. Nous offrons un cadre bienveillant et
                                stimulant où l'apprentissage est synonyme de
                                découverte, de curiosité et de plaisir. Nos
                                programmes sont conçus pour développer
                                l'autonomie, la créativité et l'esprit critique,
                                tout en préparant solidement aux exigences du
                                collège et du lycée.
                            </p>

                            <div style={styles.btnRow}>
                                <a href="/about"
                                    style={{
                                        ...styles.btnPrimary,
                                        ...(hoveredBtn === "contact"
                                            ? styles.btnPrimaryHover
                                            : {})
                                    }}
                                    onMouseEnter={() =>
                                        setHoveredBtn("contact")
                                    }
                                    onMouseLeave={() => setHoveredBtn(null)}
                                >
                                    À propos de nous
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        style={{ marginLeft: 8 }}
                                    >
                                        <path
                                            d="M3 8h10M9 4l4 4-4 4"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </div>

                            <p style={styles.trust}>
                                Réponse garantie sous 24h · Pas de démarchage
                                commercial
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <CyclesSection />
            <Temoignages />
            <HomeGallery />

            <style jsx>{`
                /* ===== HERO SECTION AVEC OVERLAY BLANC TRANSPARENT ===== */
                .hero-section {
                    position: relative;
                    min-height: 85vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background-image: url("/parcours2.jpg");
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    overflow: hidden;
                }

                /* Superposition blanc transparent */
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

                .hero-title-main {
                    font-size: 3rem;
                    font-weight: 400;
                    letter-spacing: 2px;
                    color: rgba(0, 0, 0, 0.7);
                    font-family: "Poppins", "Segoe UI", "Montserrat", sans-serif;
                    text-transform: uppercase;
                    animation: slideInLeft 0.8s ease-out;
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

                .hero-subtitle {
                    font-size: 1.3rem;
                    font-weight: 400;
                    margin-top: 40px;
                    color: rgba(0, 0, 0, 0.6);
                    font-family: "Poppins", "Segoe UI", sans-serif;
                    letter-spacing: 1px;
                    animation: fadeInUp 0.8s ease-out 0.3s both;
                }

                .hero-decoration {
                    margin-top: 30px;
                    animation: fadeInUp 0.8s ease-out 0.5s both;
                }

                .hero-line {
                    display: inline-block;
                    width: 60px;
                    height: 2px;
                    background: #ee721f;
                    border-radius: 2px;
                    position: relative;
                }

                .hero-line::before,
                .hero-line::after {
                    content: "";
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: #ee721f;
                    top: 50%;
                    transform: translateY(-50%);
                }

                .hero-line::before {
                    left: -20px;
                }

                .hero-line::after {
                    right: -20px;
                }

                /* Animations */
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

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-60px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
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

                /* Responsive */
                @media (max-width: 992px) {
                    .hero-title-main {
                        font-size: 2rem;
                    }

                    .hero-title-accent {
                        font-size: 3.5rem;
                    }

                    .hero-subtitle {
                        font-size: 1.1rem;
                    }
                }

                @media (max-width: 768px) {
                    .hero-section {
                        min-height: 70vh;
                    }

                    .hero-title-main {
                        font-size: 1.5rem;
                    }

                    .hero-title-accent {
                        font-size: 2.5rem;
                    }

                    .hero-title-accent::before {
                        width: 60px;
                    }

                    .hero-subtitle {
                        font-size: 1rem;
                        margin-top: 25px;
                    }
                }

                @media (max-width: 576px) {
                    .hero-section {
                        min-height: 60vh;
                    }

                    .hero-title-main {
                        font-size: 1.2rem;
                    }

                    .hero-title-accent {
                        font-size: 2rem;
                    }

                    .hero-subtitle {
                        font-size: 0.9rem;
                        margin-top: 20px;
                    }
                }
            `}</style>
        </div>
    );
}

const styles = {
    section: {
        position: "relative",
        padding: "80px 24px 90px",
        overflow: "hidden",
        fontFamily: "'Georgia', 'Times New Roman', serif"
    },
    container: {
        maxWidth: 1140,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 64,
        alignItems: "center",
        position: "relative",
        zIndex: 2
    },
    textCol: {
        display: "flex",
        flexDirection: "column",
        gap: 0
    },
    eyebrow: {
        display: "inline-block",
        fontSize: "0.78rem",
        fontFamily: "'Arial', sans-serif",
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "#f97316",
        marginBottom: 16
    },
    heading: {
        fontSize: "2.6rem",
        fontWeight: 400,
        color: "#0f172a",
        lineHeight: 1.2,
        margin: "0 0 20px 0"
    },
    headingAccent: {
        color: "#1e3a8a",
        fontStyle: "italic"
    },
    body: {
        fontSize: "1.05rem",
        color: "#475569",
        lineHeight: 1.8,
        fontFamily: "'Arial', sans-serif",
        margin: "0 0 32px 0"
    },
    btnRow: {
        display: "flex",
        gap: 14,
        flexWrap: "wrap",
        alignItems: "center"
    },
    btnPrimary: {
        outline: "none",
        border: "none",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        padding: "13px 28px",
        background: "linear-gradient(135deg, #e58b46ff 0%, #f7852eff 100%)",
        color: "#fff",
        fontFamily: "'Arial', sans-serif",
        fontWeight: 600,
        fontSize: "0.95rem",
        borderRadius: 4,
        textDecoration: "none",
        boxShadow: "0 2px 12px rgba(249,115,22,0.28)",
        transition: "all 0.2s ease",
        letterSpacing: "0.01em"
    },
    btnPrimaryHover: {
        backgroundColor: "#ea6c10",
        boxShadow: "0 4px 20px rgba(249,115,22,0.4)",
        transform: "translateY(-1px)"
    },
    trust: {
        marginTop: 18,
        fontSize: "0.78rem",
        color: "#94a3b8",
        fontFamily: "'Arial', sans-serif",
        letterSpacing: "0.02em"
    },
    imageCol: {
        position: "relative",
        height: 420
    },
    imgWrapMain: {
        position: "absolute",
        top: 0,
        right: 0,
        width: "100%",
        height: "100%",
        zIndex: 3
    },
    imgMain: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: 6,
        display: "block",
        boxShadow: "0 16px 40px rgba(15,23,42,0.14)"
    },
    imgMainAccent: {
        position: "absolute",
        bottom: -6,
        right: -6,
        width: "100%",
        height: "100%",
        border: "3px solid #f97316",
        borderRadius: 6,
        zIndex: -1,
        opacity: 0.5
    }
};

export default ParcoursScolaire;
