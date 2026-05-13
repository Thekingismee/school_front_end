import React, { useState } from "react";
import Temoignages from "../components/Accueil/Temoignages";
import HomeGallery from "../components/Accueil/HomeGallery";
import ContactPopup from "../components/Accueil/ContactPopup";
import Activites from "../components/VieScolaire/Activites";
// import Services from "../components/Accueil/Services";
import ServicesCantineTransportGarderie from "../components/VieScolaire/ServicesCantineTransportGarderie";
import SecuriteSante from "../components/VieScolaire/SecuriteSante";
import WhyCards from "../components/Accueil/WhyCards";

function Why() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <div>
          {/* Hero Section modernisée avec overlay blanc transparent */}
<header className="hero-section">
    <div className="hero-overlay"></div>
    <div className="hero-content">
        <h1 className="hero-title">
            <span className="hero-title-main">Pourquoi</span>
            <span className="hero-title-accent">L'Atome ?</span>
        </h1>
        <p className="hero-subtitle">
            Une école à taille humaine, une vision à haute ambition
        </p>
        <div className="hero-decoration">
            <span className="hero-line"></span>
        </div>
    </div>
</header>

            {/* Section about-section supprimée */}

            <WhyCards />

            {/* <Activites /> */}
            <HomeGallery />

            <Temoignages />
            <ContactPopup
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />

            <style jsx>{`
                /* ===== HERO SECTION MODERNISÉE AVEC OVERLAY BLANC TRANSPARENT ===== */
                .hero-section {
                    position: relative;
                    min-height: 85vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background-image: url("/main.jpg");
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

                /* Responsive Hero Section */
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

export default Why;
