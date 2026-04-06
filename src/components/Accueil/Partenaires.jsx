import React, { useState, useEffect, useCallback } from "react";

const Partenaires = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Liste des partenaires (logos)
    const partenaires = [
        {
            id: 1,
            //   name: 'cambridge',
            logo: "/cambridge.jpg",
            fallback:
                "https://via.placeholder.com/150x80/1e3a8a/ffffff?text=MINISTERE"
        }
        // {
        //   id: 1,
        // //   name: 'cambridge',
        //   logo: '/ESP.jpg',
        //   fallback: 'https://via.placeholder.com/150x80/1e3a8a/ffffff?text=MINISTERE'
        // }
    ];

    // Nombre de logos visibles (impair pour avoir un centre)
    const visibleCount = 5;
    const halfVisible = Math.floor(visibleCount / 2);

    // Navigation
    const nextSlide = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % partenaires.length);
    }, [partenaires.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex(
            prev => (prev - 1 + partenaires.length) % partenaires.length
        );
    }, [partenaires.length]);

    // Auto-défilement
    useEffect(() => {
        const timer = setInterval(nextSlide, 3000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    // Obtenir les logos à afficher avec leur position relative
    const getVisibleLogos = () => {
        const logos = [];
        for (let i = -halfVisible; i <= halfVisible; i++) {
            const index =
                (currentIndex + i + partenaires.length) % partenaires.length;
            logos.push({
                ...partenaires[index],
                position: i // -2, -1, 0, 1, 2 pour 5 éléments
            });
        }
        return logos;
    };

    return (
        <section className="partenaires-section">
            <div className="partenaires-container">
                <h2 className="partenaires-title">Nos Partenaires</h2>

                <div className="partenaires-carousel">
                    {/* Flèche gauche */}
                    <button
                        className="partenaires-arrow partenaires-prev"
                        onClick={prevSlide}
                        aria-label="Précédent"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    {/* Conteneur des logos */}
                    <div className="partenaires-track">
                        {getVisibleLogos().map(partenaire => (
                            <div
                                key={`${partenaire.id}-${partenaire.position}`}
                                className={`partenaires-item ${
                                    partenaire.position === 0
                                        ? "partenaires-center"
                                        : ""
                                }`}
                                style={{
                                    transform: `translateX(${partenaire.position *
                                        100}%) scale(${
                                        partenaire.position === 0 ? 1.2 : 0.85
                                    })`,
                                    opacity:
                                        Math.abs(partenaire.position) <= 1
                                            ? 1
                                            : 0.5,
                                    zIndex:
                                        partenaire.position === 0
                                            ? 10
                                            : 5 - Math.abs(partenaire.position)
                                }}
                            >
                                <div className="partenaires-logo-box">
                                    <img
                                        src={partenaire.logo}
                                        alt="partenaires"
                                        onError={e => {
                                            e.target.src = partenaire.fallback;
                                        }}
                                    />
                                </div>
                                {/* {partenaire.position === 0 && (
                  <span className="partenaires-name">{partenaire.name}</span>
                )} */}
                            </div>
                        ))}
                    </div>

                    <button
                        className="partenaires-arrow partenaires-next"
                        onClick={nextSlide}
                        aria-label="Suivant"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>

                {/* Indicateurs */}
                <div className="partenaires-dots">
                    {partenaires.map((_, index) => (
                        <button
                            key={index}
                            className={`partenaires-dot ${
                                index === currentIndex ? "active" : ""
                            }`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Partenaire ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                //          .partenaires-section {
                //            padding: 60px 24px;
                //         //    background-color: #f8fafc;
                //            overflow: hidden;
                //              background: #458cf6ff;
                //    clip-path: shape(from 0 0,curve to 4.17% 21px with 2.78% 1px,curve to 6.94% 21.5px with 5.56% 41px,curve to 9.72% 10.5px with 8.33% 2px,curve to 12.5% 33px with 11.11% 19px,curve to 15.28% 29.5px with 13.89% 47px,curve to 18.06% 11.5px with 16.67% 12px,curve to 20.83% 12.5px with 19.44% 11px,curve to 23.61% 18px with 22.22% 14px,curve to 26.39% 13px with 25% 22px,curve to 29.17% 13.5px with 27.78% 4px,curve to 31.94% 29px with 30.56% 23px,curve to 34.72% 26.5px with 33.33% 35px,curve to 37.5% 16px with 36.11% 18px,curve to 40.28% 17px with 38.89% 14px,curve to 43.06% 18px with 41.67% 20px,curve to 45.83% 13.5px with 44.44% 16px,curve to 48.61% 21px with 47.22% 11px,curve to 51.39% 34px with 50% 31px,curve to 54.17% 38px with 52.78% 37px,curve to 56.94% 25px with 55.56% 39px,curve to 59.72% 28.5px with 58.33% 11px,curve to 62.5% 46px with 61.11% 46px,curve to 65.28% 40.5px with 63.89% 46px,curve to 68.06% 24.5px with 66.67% 35px,curve to 70.83% 28.5px with 69.44% 14px,curve to 73.61% 36.5px with 72.22% 43px,curve to 76.39% 21px with 75% 30px,curve to 79.17% 20.5px with 77.78% 12px,curve to 81.94% 29.5px with 80.56% 29px,curve to 84.72% 21px with 83.33% 30px,curve to 87.5% 6.5px with 86.11% 12px,curve to 90.28% 23.5px with 88.89% 1px,curve to 93.06% 39.5px with 91.67% 46px,curve to 95.83% 32.5px with 94.44% 33px,curve to 100% 0 with 97.22% 32px,vline to 100%,curve to 95.83% calc(100% - 21px) with 97.22% calc(100% - 27px),curve to 93.06% calc(100% - 28.5px) with 94.44% calc(100% - 15px),curve to 90.28% calc(100% - 29px) with 91.67% calc(100% - 42px),curve to 87.5% calc(100% - 33px) with 88.89% calc(100% - 16px),curve to 84.72% calc(100% - 29px) with 86.11% calc(100% - 50px),curve to 81.94% calc(100% - 28.5px) with 83.33% calc(100% - 8px),curve to 79.17% calc(100% - 34.5px) with 80.56% calc(100% - 49px),curve to 76.39% calc(100% - 23.5px) with 77.78% calc(100% - 20px),curve to 73.61% calc(100% - 29px) with 75% calc(100% - 27px),curve to 70.83% calc(100% - 29.5px) with 72.22% calc(100% - 31px),curve to 68.06% calc(100% - 20px) with 69.44% calc(100% - 28px),curve to 65.28% calc(100% - 26.5px) with 66.67% calc(100% - 12px),curve to 62.5% calc(100% - 36px) with 63.89% calc(100% - 41px),curve to 59.72% calc(100% - 36px) with 61.11% calc(100% - 31px),curve to 56.94% calc(100% - 38.5px) with 58.33% calc(100% - 41px),curve to 54.17% calc(100% - 33.5px) with 55.56% calc(100% - 36px),curve to 51.39% calc(100% - 38.5px) with 52.78% calc(100% - 31px),curve to 48.61% calc(100% - 30px) with 50% calc(100% - 46px),curve to 45.83% calc(100% - 7px) with 47.22% calc(100% - 14px),curve to 43.06% calc(100% - 23px) with 44.44% calc(100% - 0px),curve to 40.28% calc(100% - 41px) with 41.67% calc(100% - 46px),curve to 37.5% calc(100% - 40px) with 38.89% calc(100% - 36px),curve to 34.72% calc(100% - 34px) with 36.11% calc(100% - 44px),curve to 31.94% calc(100% - 18px) with 33.33% calc(100% - 24px),curve to 29.17% calc(100% - 27px) with 30.56% calc(100% - 12px),curve to 26.39% calc(100% - 32px) with 27.78% calc(100% - 42px),curve to 23.61% calc(100% - 28px) with 25% calc(100% - 22px),curve to 20.83% calc(100% - 40px) with 22.22% calc(100% - 34px),curve to 18.06% calc(100% - 31px) with 19.44% calc(100% - 46px),curve to 15.28% calc(100% - 12px) with 16.67% calc(100% - 16px),curve to 12.5% calc(100% - 9px) with 13.89% calc(100% - 8px),curve to 9.72% calc(100% - 11.5px) with 11.11% calc(100% - 10px),curve to 6.94% calc(100% - 20.5px) with 8.33% calc(100% - 13px),curve to 4.17% calc(100% - 20px) with 5.56% calc(100% - 28px),curve to 0 100% with 2.78% calc(100% - 12px),vline to 0);
                //  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);  /* Rectangle parfait */
                //          }
                .partenaires-section {
                    padding: 60px 24px;
                    background: #458cf6ff;
                    clip-path: none; /* Supprime complètement le clip-path */
                    /* OU */
                    clip-path: polygon(
                        0 0,
                        100% 0,
                        100% 100%,
                        0 100%
                    ); /* Rectangle parfait */
                }

                .partenaires-container {
                    max-width: 1000px;
                    margin: 0 auto;
                    text-align: center;
                }

                .partenaires-title {
                    font-family: Georgia, serif;
                    font-size: 1.8rem;
                    color: #0f172a;
                    margin: 0 0 40px 0;
                }

                /* Carrousel */
                .partenaires-carousel {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 180px;
                }

                /* Piste des logos */
                .partenaires-track {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                /* Item individuel */
                .partenaires-item {
                    position: absolute;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .partenaires-logo-box {
                    width: 200px;
                    height: 130px;
                    background: #ffffff;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 16px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
                    transition: box-shadow 0.3s ease;
                }

                .partenaires-center .partenaires-logo-box {
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
                }

                .partenaires-logo-box img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    filter: grayscale(100%);
                    opacity: 0.7;
                    transition: all 0.3s ease;
                }

                .partenaires-center .partenaires-logo-box img {
                    filter: grayscale(0%);
                    opacity: 1;
                }

                .partenaires-name {
                    font-family: Arial, sans-serif;
                    font-size: 0.8rem;
                    color: #475569;
                    font-weight: 500;
                    white-space: nowrap;
                    animation: fadeIn 0.3s ease;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-5px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Flèches */
                .partenaires-arrow {
                    position: absolute;
                    z-index: 20;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    color: #475569;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .partenaires-arrow:hover {
                    background: #f97316;
                    border-color: #f97316;
                    color: #ffffff;
                }

                .partenaires-prev {
                    left: 0;
                }

                .partenaires-next {
                    right: 0;
                }

                /* Indicateurs */
                .partenaires-dots {
                    display: flex;
                    justify-content: center;
                    gap: 8px;
                    margin-top: 30px;
                }

                .partenaires-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50px;
                    background: #cbd5e1;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .partenaires-dot.active {
                    background: #000;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .partenaires-carousel {
                        height: 150px;
                    }

                    .partenaires-logo-box {
                        width: 100px;
                        height: 60px;
                        padding: 12px;
                    }

                    .partenaires-arrow {
                        width: 36px;
                        height: 36px;
                    }

                    .partenaires-prev {
                        left: -10px;
                    }

                    .partenaires-next {
                        right: -10px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Partenaires;
