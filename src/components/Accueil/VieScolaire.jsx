import React, { useState } from "react";
import Temoignages from "../components/Accueil/Temoignages";
import HomeGallery from "../components/Accueil/HomeGallery";
import ContactPopup from "../components/Accueil/ContactPopup";
import Activites from "../components/VieScolaire/Activites";
// import Services from "../components/Accueil/Services";
import ServicesCantineTransportGarderie from "../components/VieScolaire/ServicesCantineTransportGarderie";
// import SecuriteSante from "../components/VieScolaire/SecuriteSante";

function VieScolaire() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <div>
            {/* Hero Section modernisée avec overlay blanc transparent */}
            <header className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">
                        {/* <span className="hero-title-main">Vie</span> */}
                        <span className="hero-title-accent"> Vie Scolaire</span>
                    </h1>
                    <p className="hero-subtitle">
                        Un cadre de vie enrichissant pour l'épanouissement de
                        vos enfants
                    </p>
                    <div className="hero-decoration">
                        <span className="hero-line"></span>
                    </div>
                </div>
            </header>

            <section className="about-section">
                <div className="about-container">
                    {/* Partie Droite : Contenu */}
                    <div className="about-content">
                        <h1>
                            Une école qui vit, un cadre qui protège, des
                            services qui facilitent le quotidien
                        </h1>

                        {/* <p>
              La vie scolaire au Groupe Scolaire l'Atome ne se limite pas aux salles de classe. Elle englobe tout ce qui contribue à l'épanouissement de l'élève : activités périscolaires, services quotidiens, sécurité, santé et accompagnement numérique. Nous offrons un environnement complet, bienveillant et structuré, qui place l'élève et sa famille au cœur de notre projet éducatif.
            </p>

            <p>
              Au sein du <strong>Groupe Scolaire l'Atome à Lissasfa</strong>, la vie scolaire est pensée pour accompagner chaque élève dans son développement global. Entre activités périscolaires, services pratiques et suivi personnalisé, nous créons un environnement bienveillant où chaque enfant peut s'épanouir, grandir et réussir, en toute sécurité.
            </p> */}
                        <p>
                            <span>
                                La vie scolaire au Groupe Scolaire l'Atome ne se
                                limite pas aux salles de classe.
                            </span>
                            <span>
                                Elle englobe tout ce qui contribue à
                                l'épanouissement de l'élève : activités
                                périscolaires, services quotidiens, sécurité,
                                santé et accompagnement numérique.
                            </span>
                            <span>
                                Nous offrons un environnement complet,
                                bienveillant et structuré, qui place l'élève et
                                sa famille au cœur de notre projet éducatif.
                            </span>
                        </p>

                        <div className="about-cta">
                            <p>Des questions ? </p>
                            <button
                                className="btn-contact"
                                onClick={() => setIsContactOpen(true)}
                            >
                                Contactez-nous
                            </button>
                        </div>
                    </div>

                    <div className="about-image-wrapper">
                        <img
                            src="/Learning-rafiki.png"
                            alt="Groupe Scolaire L'Atome"
                        />
                    </div>
                </div>
            </section>

            <HomeGallery />
            <Activites />
            {/* <Services/> */}
            {/* <ServicesCantineTransportGarderie /> */}
            <div id="services-cantine-transport-garderie" className="target-section-wrapper">
                <ServicesCantineTransportGarderie />
            </div>

            {/* <SecuriteSante /> */}
            <Temoignages />
            <ContactPopup
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />

            <style jsx>{`
                /* ===== HERO SECTION MODERNISÉE AVEC OVERLAY BLANC TRANSPARENT ===== */

               /* État initial : section légèrement décalée vers le haut + transparente */
    .target-section-wrapper {
        scroll-margin-top: 100px; /* Compensation pour header fixe */
    }
    
    /* Classe ajoutée dynamiquement quand on arrive via lien */
    .target-section-wrapper.highlight-descend {
        animation: descendHighlight 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    }
    
    @keyframes descendHighlight {
        0% {
            opacity: 0.85;
            transform: translateY(-30px) scale(0.98);
            filter: brightness(1.1);
        }
        40% {
            opacity: 1;
            transform: translateY(8px) scale(1.01);
            filter: brightness(1);
            box-shadow: 0 20px 40px rgba(238, 114, 31, 0.25);
        }
        70% {
            transform: translateY(-4px) scale(0.995);
            box-shadow: 0 12px 25px rgba(238, 114, 31, 0.15);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            box-shadow: 0 8px 20px rgba(238, 114, 31, 0.1);
        }
    }
    
    /* Effet de "vague descendante" optionnel (décoration) */
    .target-section-wrapper.highlight-descend::before {
        content: "";
        position: absolute;
        top: -100%;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            180deg,
            rgba(238, 114, 31, 0.15) 0%,
            transparent 60%
        );
        pointer-events: none;
        animation: waveDescend 0.8s ease-out forwards;
        z-index: -1;
    }
    
    @keyframes waveDescend {
        0% {
            top: -100%;
            opacity: 1;
        }
        100% {
            top: 100%;
            opacity: 0;
        }
    }
    
    /* Scroll fluide global avec easing "doux" */
    html {
        scroll-behavior: smooth;
        scroll-padding-top: 100px;
    }
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

                /* --- Section principale avec fond (inchangée) --- */
                .about-section {
                    background-image: linear-gradient(
                        to right,
                        #81b9eeff,
                        #4c97deff,
                        #4c97deff
                    );
                    padding: 4rem 2rem;
                    width: 73%;
                    margin: 20px auto;
                    border-radius: 10px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    font-family: "Trebuchet MS", Helvetica, sans-serif;
                }

                /* Conteneur Flexbox pour la mise en page Gauche/Droite */
                .about-container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    max-width: 1100px;
                    margin: 0 auto;
                    gap: 3rem;
                }

                /* Styles pour l'image */
                .about-image-wrapper {
                    flex: 1;
                    max-width: 500px;
                }

                .about-image-wrapper img {
                    width: 100%;
                    object-fit: cover;
                }

                /* Styles pour le contenu texte */
                .about-content {
                    flex: 1;
                    color: #333;
                    line-height: 1.6;
                }

                .about-content h1 {
                    font-size: 2.4rem;
                    margin-bottom: 1.9rem;
                    color: #ffffffff;
                    font-weight: 700;
                    -webkit-text-stroke: 2px #004494;
                    text-stroke: 2px #004494;

                    line-height: 1.3;
                }

                .about-content p {
                    // margin-bottom: 1rem;
                    // font-size: 1rem;
                    // color: #000;
                    margin-bottom: 1rem;
                    font-size: 1rem;
                    color: #000;
                }

                /* Zone du bouton */
                .about-cta {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-top: 1.5rem;
                }

                .about-cta p {
                    margin: 0;
                    font-weight: 500;
                }

                /* Style du bouton */
                .btn-contact {
                    background-color: transparent;
                    color: #2566b2ff;
                    border: none;
                    padding: 0px;
                    cursor: pointer;
                    transition: color 0.3s ease;
                    margin: 0;
                    font-size: 1rem;
                    font-weight: 500;
                    font-family: "Trebuchet MS", Helvetica, sans-serif;
                }

                .btn-contact:hover {
                    color: #004494;
                    text-decoration: underline;
                    text-underline-offset: 4px;
                }

                /* Responsive : Sur mobile, on empile verticalement */
                @media (max-width: 768px) {
                    .about-container {
                        flex-direction: column;
                        gap: 2rem;
                    }

                    .about-image-wrapper {
                        max-width: 100%;
                    }

                    .about-cta {
                        flex-direction: column;
                        align-items: flex-start;
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

export default VieScolaire;
