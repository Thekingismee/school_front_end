import React from "react";

const HomeValeurs = () => {
    const services = [
        {
            id: 1,
            title: "Apprentissage et plaisir",
            image: "/APPplai.jpg",
            fallbackImage:
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80"
        },
        {
            id: 2,
            title: "Excellence éducative",
            image: "/EDUC.jpg",
            fallbackImage:
                "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=300&q=80"
        },
        {
            id: 3,
            title: "Lieu convivial",
            image: "/lieu.jpg",
            fallbackImage:
                "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=300&q=80"
        },
        {
            id: 4,
            title: "Ambiance studieuse",
            image: "/sec.jpg",
            fallbackImage:
                "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&q=80"
        },
        {
            id: 5,
            title: "Croissance pédagogique",
            image: "/croi.jpg",
            fallbackImage:
                "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&q=80"
        },
        {
            id: 6,
            title: "Bien-être émotionnel",
            image: "/Mental.jpg",
            fallbackImage:
                "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&q=80"
        }
    ];

    const n = services.length;
    const radiusPct = 38;
    const cx = 50;
    const cy = 50;

    return (
        <section className="valeurs-section">
            <div className="valeurs-header">
                <span className="valeurs-label">Ce que nous offrons</span>
                <h2 className="valeurs-title">Nos Valeurs</h2>
            </div>

            <div className="orbit-canvas">
                {/* Anneaux décoratifs */}
                <div className="orbit-ring orbit-ring-1" />
                <div className="orbit-ring orbit-ring-2" />
                <div className="orbit-ring orbit-ring-3" />

                {/* Lignes de connexion SVG */}
                <svg
                    className="orbit-svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid meet"
                >
                    {services.map((_, i) => {
                        const angle = (2 * Math.PI * i) / n - Math.PI / 2;
                        const nx = cx + radiusPct * Math.cos(angle);
                        const ny = cy + radiusPct * Math.sin(angle);
                        return (
                            <line
                                key={i}
                                x1={cx}
                                y1={cy}
                                x2={nx}
                                y2={ny}
                                stroke="rgba(22,143,249,0.22)"
                                strokeWidth="0.4"
                                strokeDasharray="2 1.5"
                                style={{
                                    animation: `dashflow 18s linear ${i *
                                        -3}s infinite`
                                }}
                            />
                        );
                    })}
                </svg>

                {/* Nœuds des valeurs positionnés en cercle */}
                {services.map((service, i) => {
                    const angle = (2 * Math.PI * i) / n - Math.PI / 2;
                    const nx = cx + radiusPct * Math.cos(angle);
                    const ny = cy + radiusPct * Math.sin(angle);
                    return (
                        <div
                            key={service.id}
                            className="orbit-node"
                            style={{ left: `${nx}%`, top: `${ny}%` }}
                        >
                            <div className="orbit-node-circle">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    onError={e => {
                                        e.target.src = service.fallbackImage;
                                    }}
                                />
                            </div>
                            <span className="orbit-node-label">
                                {service.title}
                            </span>
                        </div>
                    );
                })}

                {/* ⭐ NOYAU CENTRAL AVEC IMAGE "lgnoyau" BIEN CENTRÉE ⭐ */}
                <div className="orbit-center">
                    <div className="center-wrapper">
                        <img
                            src="/lgnoyau.png" // ← Votre image "lgnoyau"
                            alt="Noyau Atome"
                            className="center-logo"
                        />
                    </div>
                </div>
                {/* ⭐ FIN ZONE À MODIFIER ⭐ */}
            </div>

            <style jsx>{`
                .valeurs-section {
                    padding: 60px 20px 80px;
                    background: linear-gradient(
                        135deg,
                        #fefaf5 0%,
                        #ffffff 100%
                    );
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                /* En-tête */
                .valeurs-header {
                    text-align: center;
                    margin-bottom: 48px;
                }
                .valeurs-label {
                    display: block;
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: #f97316;
                    margin-bottom: 10px;
                }
                .valeurs-title {
                    font-family: Georgia, serif;
                    font-size: clamp(1.8rem, 4vw, 2.6rem);
                    color: #0f172a;
                    margin: 0;
                    position: relative;
                    display: inline-block;
                }
                .valeurs-title::after {
                    content: "";
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 60px;
                    height: 3px;
                    background: linear-gradient(90deg, #f97316, #1e3a8a);
                    border-radius: 2px;
                }

                /* Canvas orbital — carré responsive */
                .orbit-canvas {
                    position: relative;
                    width: min(680px, 92vw);
                    height: min(680px, 92vw);
                }

                /* Anneaux rotatifs */
                .orbit-ring {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    border-radius: 50%;
                    border: 1.5px dashed;
                    transform: translate(-50%, -50%);
                    pointer-events: none;
                }
                .orbit-ring-1 {
                    width: 54%;
                    height: 54%;
                    border-color: rgba(249, 115, 22, 0.2);
                    animation: orbitSpin 35s linear infinite;
                }
                .orbit-ring-2 {
                    width: 76%;
                    height: 76%;
                    border-color: rgba(22, 143, 249, 0.15);
                    animation: orbitSpin 55s linear infinite reverse;
                }
                .orbit-ring-3 {
                    width: 95%;
                    height: 95%;
                    border-color: rgba(22, 143, 249, 0.07);
                    animation: orbitSpin 75s linear infinite;
                }
                @keyframes orbitSpin {
                    from {
                        transform: translate(-50%, -50%) rotate(0deg);
                    }
                    to {
                        transform: translate(-50%, -50%) rotate(360deg);
                    }
                }

                /* SVG lignes */
                .orbit-svg {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                }
                @keyframes dashflow {
                    to {
                        stroke-dashoffset: -20;
                    }
                }

                /* ⭐ NOYAU CENTRAL - PARFAITEMENT CENTRÉ ⭐ */
                .orbit-center {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 20;
                    width: 28%;
                    height: 28%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .center-wrapper {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: transparent;
                    border-radius: 50%;
                }

                .center-logo {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    object-position: center; /* Force le centrage parfait */
                    display: block;
                    animation: breathe 3s ease-in-out infinite;
                    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
                }

                @keyframes breathe {
                    0%,
                    100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.05);
                    }
                }
                /* ⭐ FIN NOYAU CENTRAL ⭐ */

                /* Nœuds */
                .orbit-node {
                    position: absolute;
                    transform: translate(-50%, -50%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    cursor: pointer;
                    z-index: 10;
                    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .orbit-node:hover {
                    transform: translate(-50%, -50%) scale(1.08);
                    z-index: 30;
                }

                .orbit-node-circle {
                    width: clamp(80px, 16vw, 130px);
                    height: clamp(80px, 16vw, 130px);
                    border-radius: 50%;
                    overflow: hidden;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.13),
                        0 0 0 3px rgba(255, 255, 255, 0.9),
                        0 0 0 5px rgba(22, 143, 249, 0.3);
                    transition: box-shadow 0.35s ease;
                    background: white;
                }
                .orbit-node:hover .orbit-node-circle {
                    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.2),
                        0 0 0 3px rgba(255, 255, 255, 0.95),
                        0 0 0 8px rgba(22, 143, 249, 0.65);
                }
                .orbit-node-circle img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.5s ease;
                }
                .orbit-node:hover .orbit-node-circle img {
                    transform: scale(1.12);
                }

                .orbit-node-label {
                    font-size: clamp(0.55rem, 1.2vw, 0.72rem);
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: #0f172a;
                    text-align: center;
                    white-space: nowrap;
                    position: relative;
                    transition: color 0.3s;
                }
                .orbit-node:hover .orbit-node-label {
                    color: #168ff9;
                }
                .orbit-node-label::after {
                    content: "";
                    position: absolute;
                    bottom: -5px;
                    left: 50%;
                    width: 24px;
                    height: 2px;
                    background: #168ff9;
                    border-radius: 1px;
                    transform: translateX(-50%) scaleX(0);
                    transition: transform 0.3s ease;
                }
                .orbit-node:hover .orbit-node-label::after {
                    transform: translateX(-50%) scaleX(1);
                }

                /* Mobile */
                @media (max-width: 500px) {
                    .orbit-node-label {
                        white-space: normal;
                        width: 80px;
                        text-align: center;
                    }

                    .orbit-center {
                        width: 32%;
                        height: 32%;
                    }
                }
            `}</style>
        </section>
    );
};

export default HomeValeurs;
