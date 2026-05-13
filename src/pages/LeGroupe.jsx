import React, { useState } from "react";
import Temoignages from "../components/Accueil/Temoignages";
import HomeGallery from "../components/Accueil/HomeGallery";
import ContactPopup from "../components/Accueil/ContactPopup";

function LeGroupe() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <div>
            {/* Hero Section - Style blanc transparent comme NotreEtablissement */}
            <header className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="hero-title-main">
                            Le Groupe Scolaire
                        </span>
                        <span className="hero-title-accent">L'Atome</span>
                    </h1>
                    <p className="hero-subtitle">
                        L'excellence éducative au cœur de Casablanca
                    </p>
                    <div className="hero-decoration">
                        <span className="hero-line"></span>
                    </div>
                </div>
            </header>

            {/* Section 1 - Présentation principale */}
            <section className="about-section">
                <div className="about-container">
                    {/* Partie Gauche : Image */}
                    <div className="about-image-wrapper">
                        <img
                            src="/Learning-rafiki.png"
                            alt="Groupe Scolaire L'Atome"
                        />
                    </div>

                    {/* Partie Droite : Contenu */}
                    <div className="about-content">
                        <h1>
                            Un projet éducatif ambitieux
                            {/* , une communauté engagée */}
                        </h1>

                        {/* Premier paragraphe avec lignes alignées */}
                        <div className="paragraph-wrapper">
                            {/* <p className="para-line">
                                Situé à <strong>Lissasfa à Casablanca</strong>,
                                le <strong>Groupe Scolaire l'Atome</strong> est
                                un établissement éducatif engagé dans la
                                réussite et l'épanouissement des élèves.
                            </p>
                            <p className="para-line">
                                Grâce à une approche pédagogique moderne et un
                                encadrement de qualité, l'école accompagne les
                                enfants dès la{" "}
                                <strong>maternelle jusqu'au secondaire</strong>{" "}
                                dans un environnement structuré, sécurisé et
                                propice à l'apprentissage.
                            </p> */}
                        </div>

                        {/* Deuxième paragraphe avec lignes alignées */}
                        {/* <div className="paragraph-wrapper">
                            <p className="para-line">
                                Le{" "}
                                <strong>
                                    Groupe Scolaire l'Atome
                                </strong>{" "}
                                met l'accent sur un enseignement rigoureux,
                                l'apprentissage des langues et le développement
                                des compétences essentielles du XXIe siècle.
                            </p>
                            <p className="para-line">
                                À travers un{" "}
                                <strong>suivi pédagogique personnalisé</strong>{" "}
                                et des activités éducatives variées,
                                l'établissement prépare chaque élève à réussir
                                son parcours scolaire tout en cultivant les
                                valeurs de{" "}
                                <strong>
                                    respect, responsabilité et ouverture
                                </strong>
                                .
                            </p>
                        </div> */}

                        <div className="paragraph-wrapper">
  <p className="para-line">
    <strong>
      Le Groupe Scolaire l'Atome met l'accent sur un enseignement rigoureux,
      l'apprentissage des langues et le développement des compétences
      essentielles.
    </strong>
  </p>
  <p className="para-line">
    <strong>
      À travers un suivi pédagogique personnalisé et des activités éducatives
      variées, l'établissement prépare chaque élève à réussir son parcours
      scolaire tout en cultivant les valeurs de respect, responsabilité et
      ouverture.
    </strong>
  </p>
</div>

                        <div className="about-cta">
                            <p>Des questions ?</p>
                            <button
                                className="btn-contact"
                                onClick={() => setIsContactOpen(true)}
                            >
                                Contactez-nous
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 - Équipe et valeurs */}
            <section className="about-section2">
                <div className="about-container2">
                    {/* Partie Gauche : Contenu */}
                    <div className="about-content2">
                        {/* <h1>Une équipe aux valeurs partagées</h1> */}

                        <h1>
                            Vision collective
                        </h1>

                        <div className="text-lines">
                            <p className="line-1">
                                Le projet éducatif du{" "}
                                <strong>Groupe Scolaire L'Atome</strong> repose
                                sur l'implication de femmes et d'hommes de
                                terrain :
                                    fondateurs, directions d'établissements,
                                    coordinateurs pédagogiques,

                                    enseignants, éducateurs, personnels de vie
                                    scolaire et administratifs.

                                    Tous œuvrent ensemble, avec{" "}
                                rigueur et bienveillance, pour
                                accompagner chaque élève dans sa singularité et
                                son potentiel.
                            </p>
                           

                            {/* <p className="line-2">
                                <strong>
                                </strong>
                            </p> */}
                            {/* <p className="line-3">
                                <strong>
                                </strong>
                            </p> */}

                            {/* <p className="line-4">
                                
                            </p> */}
                        </div>

                        {/* <div className="about-cta2">
                            <button className="equipe-btn">
                                L'équipe dirigeante
                            </button>
                        </div> */}
                    </div>

                    {/* Partie Droite : Image */}
                    <div className="about-image-wrapper2">
                        <img
                            src="/equipp.jpg"
                            alt="Équipe Groupe Scolaire L'Atome"
                        />
                    </div>
                </div>
            </section>

            {/* Section 3 - Galerie */}
            <HomeGallery />

            {/* Section 4 - Témoignages */}
            <Temoignages />

            {/* Popup de contact */}
            <ContactPopup
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />

            <style jsx>{`
                /* ===== HERO SECTION AVEC OVERLAY BLANC TRANSPARENT (comme NotreEtablissement) ===== */
                .hero-section {
                    position: relative;
                    min-height: 85vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background-image: url("/puzzle.jpg");
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

                /* --- Section 1 --- */
                .about-section {
                    background-image: linear-gradient(
                        to right,
                        rgb(86, 83, 255),
                        #417ff1da,
                        #1f75ee
                    );
                    padding: 4rem 2rem;
                    width: 73%;
                    margin: 40px auto;
                    border-radius: 10px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    font-family: "Poppins", "Trebuchet MS", Helvetica,
                        sans-serif;
                }

                .about-container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    max-width: 1100px;
                    margin: 0 auto;
                    gap: 3rem;
                }

                .about-image-wrapper {
                    flex: 1;
                    max-width: 500px;
                }

                .about-image-wrapper img {
                    width: 100%;
                    object-fit: cover;
                }

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
                    font-family: "Playfair Display", "Trebuchet MS", serif;
                }

                /* Styles pour les paragraphes avec lignes alignées */
                .paragraph-wrapper {
                    margin-bottom: 1.5rem;
                }

                .para-line {
                    font-size: 1rem;
                    line-height: 1.8;
                    color: #000;
                    margin-bottom: 0.8rem;
                    text-align: justify;
                    font-family: "Poppins", "Trebuchet MS", Helvetica,
                        sans-serif;
                }

                .para-line:last-child {
                    margin-bottom: 0;
                }

                .about-cta {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-top: 1.5rem;
                }

                .about-cta p {
                    margin: 0;
                    font-weight: 500;
                    font-family: "Poppins", "Trebuchet MS", Helvetica,
                        sans-serif;
                }

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
                    font-family: "Poppins", "Trebuchet MS", Helvetica,
                        sans-serif;
                }

                .btn-contact:hover {
                    color: #004494;
                    text-decoration: underline;
                    text-underline-offset: 4px;
                }

                /* --- Section 2 avec lignes alignées --- */
                .about-section2 {
                    padding: 80px 20px;
                    background-color: #f9fafb;
                    color: #333;
                }

                .about-container2 {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 60px;
                    font-family: "Poppins", "Trebuchet MS", Helvetica,
                        sans-serif;
                }

                .about-image-wrapper2 {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                }

                .about-image-wrapper2 img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 51% 49% 77% 23% / 41% 26% 74% 59%;
                    object-fit: cover;
                }

                .about-content2 {
                    flex: 1;
                }

                .about-content2 h1 {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 24px;
                    color: #1a1a1a;
                    line-height: 1.2;
                    font-family: "Playfair Display", "Trebuchet MS", serif;
                }

                /* Styles pour les lignes de texte de la section 2 */
                .text-lines {
                    margin-bottom: 32px;
                }

                .text-lines p {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: #000000;
                    margin-bottom: 12px;
                    font-family: "Poppins", "Trebuchet MS", Helvetica,
                        sans-serif;
                }

                .line-1 {
                    margin-bottom: 16px;
                }

                .line-2,
                .line-3 {
                    margin-left: 20px;
                    margin-bottom: 8px;
                    font-style: italic;
                }

                .line-2 strong,
                .line-3 strong {
                    color: #ee721f;
                    font-weight: 600;
                }

                .line-4 {
                    margin-top: 20px;
                    margin-bottom: 0;
                }

                .line-4 strong {
                    color: #ee721f;
                }

                .about-cta2 {
                    display: flex;
                    margin-top: 24px;
                }

                .equipe-btn {
                    padding: 14px 32px;
                    font-size: 1rem;
                    font-weight: 600;
                    color: #ffffff;
                    background: linear-gradient(
                        135deg,
                        #ee721f 0%,
                        #ffa600 100%
                    );
                    border: none;
                    border-radius: 50px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(238, 114, 31, 0.3);
                    font-family: "Poppins", "Trebuchet MS", Helvetica,
                        sans-serif;
                }

                .equipe-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(238, 114, 31, 0.4);
                    background: linear-gradient(
                        135deg,
                        #ffa600 0%,
                        #ee721f 100%
                    );
                }

                /* --- Responsive --- */
                @media (max-width: 992px) {
                    .about-container,
                    .about-container2 {
                        flex-direction: column;
                        gap: 40px;
                        text-align: center;
                    }

                    .about-container2 {
                        flex-direction: column-reverse;
                    }

                    .about-content p {
                        text-align: left;
                    }

                    .about-cta,
                    .about-cta2 {
                        justify-content: center;
                    }

                    .about-content h1,
                    .about-content2 h1 {
                        font-size: 2rem;
                    }

                    .about-section {
                        width: 90%;
                    }

                    .line-2,
                    .line-3 {
                        margin-left: 0;
                    }

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

                    .text-lines p,
                    .para-line {
                        text-align: left;
                    }

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
                }

                @media (max-width: 576px) {
                    .about-section2 {
                        padding: 40px 16px;
                    }

                    .about-content h1,
                    .about-content2 h1 {
                        font-size: 1.75rem;
                    }

                    .text-lines p,
                    .para-line {
                        font-size: 1rem;
                    }

                    .equipe-btn {
                        width: 100%;
                    }

                    .about-section {
                        padding: 2rem 1rem;
                        width: 95%;
                    }

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

export default LeGroupe;
