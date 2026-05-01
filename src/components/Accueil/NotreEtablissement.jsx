import React from "react";
import { RightOutlined } from "@ant-design/icons";
import HomeValeurs from "../components/Accueil/HomeValeurs";
import Cantine from "../components/Accueil/Cantine";
import Temoignages from "../components/Accueil/Temoignages";
import Button from "../components/Accueil/Button";
import { Locate, Mail, MapPin, Phone } from "lucide-react";
import { LocationOn } from "@mui/icons-material";

function NotreEtablissement() {
    const mapUrl =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.5!2d-7.6812941!3d33.5374443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62cbe72870d3b%3A0x1edb5fa572f0aac!2sGroupe%20scolaire%20L%E2%80%99atome!5e0!3m2!1sfr!2sma!4v1710000000000";

    return (
        <div>
            {/* Hero Section avec overlay blanc transparent */}
            <header className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="hero-title-main">Découvrez</span>
                        <span className="hero-title-accent">
                            Notre Établissement
                        </span>
                    </h1>
                    <p className="hero-subtitle">
                        Un cadre d'apprentissage exceptionnel au service de la
                        réussite
                    </p>
                    <div className="hero-decoration">
                        <span className="hero-line"></span>
                    </div>
                </div>
            </header>

            {/* Section Contact */}
            <section className="contact-section">
                <div className="contact-container">
                    {/* Partie Gauche : Image */}
                    <div className="contact-image-wrapper">
                        <img
                            src="/AT2.jpg"
                            alt="Illustration contact"
                            className="contact-image"
                        />
                    </div>

                    {/* Partie Droite : Contenu */}
                    <div className="contact-content">
                        <span className="etab-label">Restons en contact</span>
                        <h2 className="contact-title">Nous contacter</h2>

                        <div className="contact-links">
                            {/* Lien 1 : Localisation */}
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                            >
                                <MapPin size={20} /> Localisation
                            </a>

                            {/* Lien 2 : Téléphone */}
                            <a
                                href="tel:+212522903052"
                                className="contact-link"
                            >
                                <Phone size={20} /> +212 522903052
                            </a>

                            {/* Lien 3 : Email */}
                            <a
                                href="mailto:test@gmail.com"
                                className="contact-link"
                            >
                                <Mail size={20} /> test@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Carte */}
            <section className="map-section">
                <div className="map-container">
                    <div className="map-wrapper">
                        <iframe
                            src={mapUrl}
                            title="Localisation Groupe scolaire L'atome"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="map-iframe"
                        ></iframe>
                    </div>
                </div>
            </section>

            <HomeValeurs />
            <Cantine />
            <Temoignages />

            <Button href="/inscription">
                Inscrivez vos enfants dès maintenant{" "}
                <RightOutlined
                    style={{ marginLeft: "10px", fontSize: "20px" }}
                />
            </Button>

            <style jsx>{`
                /* ===== HERO SECTION AVEC OVERLAY BLANC TRANSPARENT ===== */
                .hero-section {
                    position: relative;
                    min-height: 85vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background-image: url("/AT2.jpg");
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

                /* --- Section Contact --- */
                .contact-section {
                    padding: 60px 20px;
                    color: #333;
                    background: #fff;
                }

                .contact-container {
                    max-width: 1100px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    gap: 50px;
                }

                .etab-label {
                    display: block;
                    font-family: "Poppins", "Arial", sans-serif;
                    font-size: 0.75rem;
                    font-weight: 600;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: #f97316;
                    margin-bottom: 12px;
                }

                /* --- Partie Image (Gauche) --- */
                .contact-image-wrapper {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                }

                .contact-image {
                    max-width: 100%;
                    height: auto;
                    max-height: 400px;
                    object-fit: contain;
                    border-radius: 2px;
                }

                /* --- Partie Contenu (Droite) --- */
                .contact-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                }

                .contact-title {
                    font-family: "Playfair Display", "Georgia", serif;
                    font-size: clamp(2rem, 4vw, 2.8rem);
                    color: #0f172a;
                    margin: 0;
                    position: relative;
                    display: inline-block;
                    padding-bottom: 15px;
                }

                /* Petite ligne décorative sous le titre */
                .contact-title::after {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 60px;
                    height: 3px;
                    background: linear-gradient(90deg, #f97316, #ee721f);
                    border-radius: 2px;
                }

                /* --- Liens de contact --- */
                .contact-links {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .contact-link {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    text-decoration: none;
                    color: #444;
                    font-size: 1.1rem;
                    padding: 12px 16px;
                    transition: all 0.3s ease;
                    font-family: "Poppins", "Trebuchet MS", Helvetica,
                        sans-serif;
                    border-radius: 8px;
                }

                .contact-link:hover {
                    color: #ee721f;
                    background: rgba(238, 114, 31, 0.05);
                    transform: translateX(5px);
                }

                /* --- Section Carte --- */
                .map-section {
                    padding: 60px 20px;
                    background: #f8fafc;
                    clip-path: none;
                }

                .map-container {
                    max-width: 1000px;
                    margin: 0 auto;
                }

                /* --- Wrapper pour l'iframe (Responsive) --- */
                .map-wrapper {
                    position: relative;
                    width: 100%;
                    padding-bottom: 56.25%; /* Ratio 16:9 */
                    height: 0;
                    overflow: hidden;
                    border-radius: 12px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
                    background-color: #e5e7eb;
                }

                .map-iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border: 0;
                    border-radius: 12px;
                }

                /* --- Responsive --- */
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

                @media (max-width: 900px) {
                    .contact-container {
                        flex-direction: column;
                        text-align: center;
                        gap: 40px;
                    }

                    .contact-title::after {
                        left: 50%;
                        transform: translateX(-50%);
                    }

                    .contact-links {
                        align-items: center;
                    }

                    .contact-link:hover {
                        transform: translateX(0);
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

                    .map-section {
                        padding: 40px 16px;
                    }

                    .map-wrapper {
                        padding-bottom: 75%;
                        border-radius: 8px;
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

                    .contact-section {
                        padding: 40px 16px;
                    }

                    .contact-title {
                        font-size: 1.5rem;
                    }

                    .contact-link {
                        font-size: 1rem;
                        width: 100%;
                        justify-content: center;
                    }
                }
            `}</style>
        </div>
    );
}

export default NotreEtablissement;
