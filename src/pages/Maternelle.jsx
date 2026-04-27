import CycleTemplate from "../components/Cycle/CycleTemplate";
import ActivitesMaternelle from "../components/Maternelle/ActivitesMaternelle";

const Maternelle = () => {
    // ⭐⭐⭐ AJOUTEZ VOS IMAGES ICI (SANS TEXTE) ⭐⭐⭐
    const maternelleCarouselImages = [
        { src: "/lieu.jpg" },
        { src: "/lieu.jpg" },
        { src: "/lieu.jpg" },
        { src: "/lieu.jpg" },
        { src: "/lieu.jpg" }
    ];
    // ⭐ FIN DE LA ZONE À MODIFIER ⭐

    return (
        <>
            <header className="header1">
                <div className="header-overlay"></div>
                <h1 className="inscription-titre">Maternelle</h1>
            </header>

            <CycleTemplate
                titre1="Maternelle"
                text1="Un premier pas vers l'apprentissage dans un environnement sécurisé et stimulant. Notre école maternelle accueille les enfants de 3 à 6 ans dans des classes petites et encadrées, où l'éveil, la découverte et la socialisation sont au cœur de notre pédagogie."
                titre2="Une pédagogie adaptée aux tout-petits"
                text2="Nos équipes éducatives spécialisées accompagnent chaque enfant dans son développement global. À travers le jeu, l'exploration sensorielle et les activités créatives, nous favorisons l'autonomie, la confiance en soi et l'ouverture au monde."
                activitesComponent={<ActivitesMaternelle />}
                carouselImages={maternelleCarouselImages}
            />

            <style jsx>{`
                .header1 {
                    position: relative;
                    text-align: center;
                    padding: 180px 70px;
                    font-size: 2rem;
                    font-weight: bold;
                    color: #fff;
                    background-image: url("/matmat3.jpg");
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                }

                .header-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(
                        135deg,
                        rgba(0, 0, 0, 0.55),
                        rgba(0, 0, 0, 0.45),
                        rgba(0, 0, 0, 0.55)
                    );
                    z-index: 1;
                }

                .inscription-titre {
                    position: relative;
                    z-index: 2;
                    text-shadow: 3px 3px 20px rgba(0, 0, 0, 0.6);
                    font-size: 4.5rem;
                    font-weight: 800;
                    font-family: "Poppins", "Montserrat", sans-serif;
                    color: #fff;
                    letter-spacing: 3px;
                    margin: 0;
                    display: inline-block;
                    animation: fadeInUp 0.8s ease-out;
                }

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

                @media (max-width: 768px) {
                    .header1 {
                        padding: 120px 40px;
                    }
                    .inscription-titre {
                        font-size: 2.8rem;
                    }
                }
            `}</style>
        </>
    );
};

export default Maternelle;
