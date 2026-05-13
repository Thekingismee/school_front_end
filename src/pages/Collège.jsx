import CycleTemplate from "../components/Cycle/CycleTemplate";
import ActivitesCollege from "../components/Collège/ActivitesCollege.jsx";

const College = () => {
    // ⭐⭐⭐ AJOUTEZ VOS IMAGES ICI (SANS TEXTE) ⭐⭐⭐
    const collegeCarouselImages = [
       { src: "/COLL12.jpg" },
                { src: "/COLL14.jpg" },

        { src: "/COLL13.jpg" }
    ];
    // ⭐ FIN DE LA ZONE À MODIFIER ⭐

    return (
        <>
            <header className="header1">
                <div className="header-overlay"></div>
                <h1 className="inscription-titre">Collège</h1>
            </header>

            <CycleTemplate
                titre1="Collège"
                text1="Un accompagnement personnalisé pendant ces années de transition essentielles. Notre collège accueille les élèves de 11 à 15 ans pour les guider dans le développement de leur autonomie, l'approfondissement des savoirs et l'orientation vers leur avenir."
                titre2="Des années décisives pour grandir"
                text2="Nos équipes pédagogiques spécialisées accompagnent les adolescents dans cette période de transformation. Entre exigence académique et soutien bienveillant, nous préparons nos élèves à affronter avec confiance les défis du lycée et au-delà."
                activitesComponent={<ActivitesCollege />}
                carouselImages={collegeCarouselImages}
            />

            <style jsx>{`
                // .header1 {
                //     position: relative;
                //     text-align: center;
                //     // padding: 200px 70px;
                //     min-height: 100vh;  /* Au lieu de padding fixe */

                //     font-size: 2rem;
                //     font-weight: bold;
                //     color: #fff;
                //     background-image: url("COLL9.jpg");
                //     background-size: cover;
                //    background-position: top center;  /* Change center center en top center */
                //     // background-position: center center;
                //     background-repeat: no-repeat;
                //     background-attachment: fixed;
                //     // clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                // }
.header1 {
    position: relative;
    text-align: center;
    padding: 200px 70px;  /* REMETTRE cette ligne et enlever min-height */
    /* min-height: 100vh;  à SUPPRIMER */
    /* width: 100%;  à SUPPRIMER */
    /* display: flex;  à SUPPRIMER */
    /* align-items: center;  à SUPPRIMER */
    /* justify-content: center;  à SUPPRIMER */
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    background-image: url("COLL999.jpg");
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    background-attachment: fixed;
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
                    position: relative;
                    text-align: center;
                    padding: 20px;
                    font-size: 2rem;
                    color: #fff;
                    background-image: url("/tranparent2.png");
                    background-size: cover;
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    background-color: #57c77e;
                }
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

export default College;
