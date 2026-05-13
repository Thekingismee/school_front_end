import CycleTemplate from "../components/Cycle/CycleTemplate";
import ActivitesLycee from "../components/Lycée/ActivitesLycee.jsx";

const Lycee = () => {
    // ⭐⭐⭐ AJOUTEZ VOS IMAGES ICI (SANS TEXTE) ⭐⭐⭐
    const lyceeCarouselImages = [
         { src: "/LYC10.jpg" },
           { src: "/LYC8.jpg" },
                 { src: "/LYC0.jpg" },
                //    { src: "/LYC00.jpg" },
                
                 
                  { src: "/LYC12.jpg" }

    ];
    // ⭐ FIN DE LA ZONE À MODIFIER ⭐

    return (
        <>
            <header className="header1">
                <div className="header-overlay"></div>
                <h1 className="inscription-titre">Lycée</h1>
            </header>

            <CycleTemplate
                titre1="Lycée"
                text1="Préparation aux examens et à l'enseignement supérieur dans un cadre d'excellence. Notre lycée accueille les élèves de 15 à 18 ans pour les accompagner vers la réussite de leur baccalauréat et l'élaboration de leur projet d'avenir avec ambition et méthode."
                titre2="L'excellence au service de l'avenir"
                text2="Nos enseignants d'expérience préparent les lycéens aux défis des examens nationaux et à la poursuite d'études supérieures. Excellence académique, projets innovants et ouverture internationale caractérisent notre approche pour des parcours de réussite."
                activitesComponent={<ActivitesLycee />}
                carouselImages={lyceeCarouselImages}
            />

            <style jsx>{`
                .header1 {
                    position: relative;
                    text-align: center;
                    padding: 200px 70px;
                    font-size: 2rem;
                    font-weight: bold;
                    color: #fff;
                    background-image: url("/tranparent2.png");
                    background-size: cover;
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    background-color: #57a6c7;
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
                    font-size: 5rem;
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

export default Lycee;
