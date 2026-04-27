import React, { useState, useEffect } from "react";
import Temoignages from "../Accueil/Temoignages";
import HomeGallery from "../Accueil/HomeGallery";

const CycleTemplate = ({
    // Section 1 : Hero (texte droite, carrousel gauche)
    titre1,
    text1,

    // Section 2 : Contenu (titre + texte)
    titre2,
    text2,

    // Composant d'activités
    activitesComponent,

    // ===== PROPS POUR LE CARROUSEL (à passer depuis chaque page) =====
    carouselImages // Tableau d'images pour le carrousel
    // ================================================================
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Changement automatique toutes les 4 secondes
    useEffect(() => {
        // Ne démarrer le carrousel que si des images sont fournies
        if (!carouselImages || carouselImages.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex =>
                prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [carouselImages]);

    const nextSlide = () => {
        if (!carouselImages || carouselImages.length === 0) return;
        setCurrentIndex(prevIndex =>
            prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        if (!carouselImages || carouselImages.length === 0) return;
        setCurrentIndex(prevIndex =>
            prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
        );
    };

    // Si pas d'images, ne pas afficher le carrousel
    const hasImages = carouselImages && carouselImages.length > 0;

    return (
        <div className="cycle-template">
            {/* Section 1 : Hero - Carrousel à gauche, Texte à droite */}
            <section className="cycle-hero">
                <div className="cycle-hero-container">
                    <div className="cycle-hero-image-wrapper">
                        {hasImages ? (
                            // Carrousel si des images sont fournies
                            <div className="carousel-container">
                                <button
                                    className="carousel-btn prev"
                                    onClick={prevSlide}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M15 18l-6-6 6-6" />
                                    </svg>
                                </button>

                                <div className="carousel">
                                    {carouselImages.map((image, index) => (
                                        <div
                                            key={index}
                                            className={`carousel-slide ${
                                                index === currentIndex
                                                    ? "active"
                                                    : ""
                                            }`}
                                            style={{
                                                transform: `translateX(-${currentIndex *
                                                    100}%)`
                                            }}
                                        >
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="carousel-image"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <button
                                    className="carousel-btn next"
                                    onClick={nextSlide}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </button>
                            </div>
                        ) : (
                            // Fallback : image statique par défaut (optionnel)
                            <div className="fallback-image">
                                <img src="/default-school.jpg" alt="École" />
                            </div>
                        )}
                    </div>

                    <div className="cycle-hero-content">
                        <span className="cycle-hero-label">
                            Découvrez notre
                        </span>
                        <h1 className="cycle-hero-title">{titre1}</h1>
                        <div className="cycle-hero-line" />
                        <p className="cycle-hero-text">{text1}</p>
                        <a href="/aboutUs" className="cycle-hero-btn">
                            À propos de nous
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Section 2 : Contenu */}
            <section className="cycle-content">
                <div className="cycle-content-container">
                    <div className="cycle-content-header">
                        <span className="cycle-content-label">
                            Notre approche
                        </span>
                        <h2 className="cycle-content-title">{titre2}</h2>
                        <div className="cycle-content-line" />

                        <div className="paragraphe-container">
                            <div className="moving-shine"></div>
                            <p className="cycle-content-text">{text2}</p>
                        </div>
                    </div>

                    {activitesComponent && (
                        <div className="activites-wrapper">
                            {activitesComponent}
                        </div>
                    )}
                </div>
            </section>

            <HomeGallery />
            <Temoignages />

            <style jsx>{`
                .cycle-template {
                    font-family: "Segoe UI", system-ui, -apple-system,
                        sans-serif;
                }

                /* Section Hero */
                .cycle-hero {
                    padding: 100px 24px;
                    position: relative;
                    overflow: hidden;
                }

                .cycle-hero::before {
                    content: "";
                    position: absolute;
                    top: -50%;
                    right: -20%;
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(
                        circle,
                        rgba(255, 149, 44, 0.08) 0%,
                        transparent 70%
                    );
                    pointer-events: none;
                }

                .cycle-hero-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    align-items: center;
                    position: relative;
                    z-index: 1;
                }

                .cycle-hero-image-wrapper {
                    position: relative;
                }

                /* Fallback image */
                .fallback-image {
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                }

                .fallback-image img {
                    width: 100%;
                    height: 450px;
                    object-fit: cover;
                }

                /* Carrousel */
                .carousel-container {
                    position: relative;
                    width: 100%;
                    height: 450px;
                    overflow: hidden;
                    border-radius: 20px;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25),
                        0 0 0 1px rgba(255, 255, 255, 0.3) inset;
                    background-color: #f5f5f5;
                }

                .carousel {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    overflow: hidden;
                }

                .carousel-slide {
                    min-width: 100%;
                    height: 100%;
                    transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                }

                .carousel-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.5s ease;
                }

                .carousel-slide:hover .carousel-image {
                    transform: scale(1.05);
                }

                .carousel-btn {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(255, 255, 255, 0.9);
                    color: #333;
                    border: none;
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    z-index: 10;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
                }

                .carousel-btn:hover {
                    background: white;
                    transform: translateY(-50%) scale(1.1);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
                }

                .prev {
                    left: 20px;
                }

                .next {
                    right: 20px;
                }

                .cycle-hero-content {
                    padding: 20px 0;
                }

                .cycle-hero-label {
                    display: inline-block;
                    font-size: 0.85rem;
                    font-weight: 600;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: #ff952c;
                    margin-bottom: 20px;
                }

                .cycle-hero-title {
                    font-family: Georgia, "Times New Roman", serif;
                    font-size: 3.2rem;
                    color: #1a1a2e;
                    margin: 0 0 20px 0;
                    line-height: 1.1;
                    font-weight: 700;
                }

                .cycle-hero-line {
                    width: 60px;
                    height: 4px;
                    background: linear-gradient(90deg, #f97316, #1e3a8a);
                    border-radius: 2px;
                    margin-bottom: 24px;
                }

                .cycle-hero-text {
                    font-size: 1.15rem;
                    line-height: 1.9;
                    color: #4a5568;
                    margin: 0 0 32px 0;
                }

                .cycle-hero-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    padding: 16px 32px;
                    background: linear-gradient(
                        135deg,
                        #1a1a2e 0%,
                        #2d2d44 100%
                    );
                    color: white;
                    text-decoration: none;
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 30px rgba(26, 26, 46, 0.2);
                }

                .cycle-hero-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 40px rgba(26, 26, 46, 0.3);
                }

                /* Section Content */
                .cycle-content {
                    padding: 100px 24px;
                    background: #ffffff;
                    position: relative;
                }

                .cycle-content::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        #e2e8f0,
                        transparent
                    );
                }

                .cycle-content-container {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .cycle-content-header {
                    text-align: center;
                    max-width: 800px;
                    margin: 0 auto 80px;
                }

                .cycle-content-label {
                    display: inline-block;
                    font-size: 0.8rem;
                    font-weight: 600;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    color: #ff952c;
                    margin-bottom: 16px;
                    padding: 8px 16px;
                    border-radius: 20px;
                }

                .cycle-content-title {
                    font-family: Georgia, "Times New Roman", serif;
                    font-size: 2.4rem;
                    color: #1a1a2e;
                    margin: 0 0 16px 0;
                    font-weight: 700;
                }

                .cycle-content-line {
                    width: 50px;
                    height: 3px;
                    background: linear-gradient(90deg, #f97316, #1e3a8a);
                    border-radius: 2px;
                    margin: 0 auto 24px;
                }

                .paragraphe-container {
                    position: relative;
                    background: linear-gradient(
                        135deg,
                        #1e2d56 0%,
                        #5c8aec 50%,
                        #1e3a8a 100%
                    );
                    border-radius: 20px;
                    padding: 45px 55px;
                    margin: 40px auto 0 auto;
                    max-width: 850px;
                    box-shadow: 0 15px 35px rgba(30, 58, 138, 0.25);
                    overflow: hidden;
                    animation: pulse 2s ease-in-out infinite;
                }

                @keyframes pulse {
                    0% {
                        transform: scale(1);
                        box-shadow: 0 15px 35px rgba(30, 58, 138, 0.25);
                    }
                    50% {
                        transform: scale(1.02);
                        box-shadow: 0 25px 45px rgba(30, 58, 138, 0.4);
                    }
                    100% {
                        transform: scale(1);
                        box-shadow: 0 15px 35px rgba(30, 58, 138, 0.25);
                    }
                }

                .moving-shine {
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(255, 255, 255, 0.2),
                        transparent
                    );
                    animation: shine 3s infinite;
                }

                @keyframes shine {
                    0% {
                        left: -100%;
                    }
                    20% {
                        left: 100%;
                    }
                    100% {
                        left: 100%;
                    }
                }

                .paragraphe-container .cycle-content-text {
                    color: #ffffff;
                    margin: 0;
                    font-size: 1.1rem;
                    line-height: 1.8;
                    position: relative;
                    z-index: 1;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
                }

                .activites-wrapper {
                    margin: 60px 0 0 0;
                }

                @media (max-width: 968px) {
                    .cycle-hero {
                        padding: 60px 24px;
                    }

                    .cycle-hero-container {
                        grid-template-columns: 1fr;
                        gap: 50px;
                    }

                    .carousel-container,
                    .fallback-image img {
                        height: 380px;
                    }

                    .cycle-hero-title {
                        font-size: 2.4rem;
                    }
                }

                @media (max-width: 768px) {
                    .carousel-container,
                    .fallback-image img {
                        height: 320px;
                    }

                    .carousel-btn {
                        width: 40px;
                        height: 40px;
                    }

                    .prev {
                        left: 12px;
                    }

                    .next {
                        right: 12px;
                    }

                    .paragraphe-container {
                        padding: 25px 20px;
                        margin: 30px 15px 0 15px;
                        border-radius: 16px;
                    }

                    .paragraphe-container .cycle-content-text {
                        font-size: 1rem;
                        line-height: 1.7;
                    }
                }

                @media (max-width: 640px) {
                    .cycle-hero-title {
                        font-size: 2rem;
                    }

                    .cycle-content-title {
                        font-size: 1.8rem;
                    }

                    .cycle-hero-btn {
                        width: 100%;
                        justify-content: center;
                    }

                    .carousel-container,
                    .fallback-image img {
                        height: 260px;
                        border-radius: 16px;
                    }

                    .carousel-btn {
                        width: 35px;
                        height: 35px;
                    }
                }
            `}</style>
        </div>
    );
};

export default CycleTemplate;
