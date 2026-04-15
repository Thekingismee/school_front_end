// code sans card

// import CycleTemplate from '../components/Cycle/CycleTemplate';

// const College = () => {
//   return (
//     <>
//       <header className="header1">
//         <div className="header-overlay"></div>
//         <h1 className='inscription-titre'>Collège</h1>
//       </header>
//       <CycleTemplate
//         // Section 1 : Hero
//         titre1="Collège"
//         text1="Un accompagnement personnalisé pendant ces années de transition essentielles. Notre collège accueille les élèves de 11 à 15 ans pour les guider dans le développement de leur autonomie, l'approfondissement des savoirs et l'orientation vers leur avenir."
//         image1="/college.jpg"

//         // Section 2 : Contenu + Galerie
//         titre2="Des années décisives pour grandir"
//         text2="Nos équipes pédagogiques spécialisées accompagnent les adolescents dans cette période de transformation. Entre exigence académique et soutien bienveillant, nous préparons nos élèves à affronter avec confiance les défis du lycée et au-delà."
//         image2="/serv.jpg"
//         image3="/serv.jpg"
//         image4="/serv.jpg"
//         image5="/serv.jpg"
//         textimage3="Sciences et technologie"
//         textimage4="Langues et culture"
//         textimage5="Arts et expression"
//       />
//       <style jsx>{`
//         .header1 {
//           /* ===== CONTENEUR PRINCIPAL AVEC HAUTEUR AGRANDIE ===== */
//           position: relative;
//           text-align: center;
//           padding: 200px 70px;
//           font-size: 2rem;
//           font-weight: bold;
//           color: #fff;
//           background-image: url("/Back.jpg");
//           background-size: cover;
//           background-position: center 30%;
//           background-repeat: no-repeat;
//           background-attachment: fixed;

//           /* Ligne droite au lieu des vagues */
//           clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

//           /* Amélioration de la qualité d'image */
//           image-rendering: -webkit-optimize-contrast;
//           image-rendering: crisp-edges;
//         }

//         /* Superposition pour améliorer la lisibilité du texte */
//         .header-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: linear-gradient(
//             135deg,
//             rgba(0, 0, 0, 0.55) 0%,
//             rgba(0, 0, 0, 0.45) 50%,
//             rgba(0, 0, 0, 0.55) 100%
//           );
//           z-index: 1;
//         }

//         .inscription-titre {
//           /* ===== TITRE AVEC POLICE CLAIRE ===== */
//           position: relative;
//           z-index: 2;
//           text-shadow: 3px 3px 20px rgba(0, 0, 0, 0.6);
//           font-size: 5rem;
//           font-weight: 800;
//           font-family: 'Poppins', 'Montserrat', 'Segoe UI', sans-serif;
//           color: #fff;
//           letter-spacing: 3px;
//           margin: 0;
//           display: inline-block;
//           animation: fadeInUp 0.8s ease-out;
//         }

//         /* Ligne décorative sous le titre */
//         .inscription-titre::after {
//           content: '';
//           position: absolute;
//           bottom: -15px;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 80px;
//           height: 3px;
//           background: linear-gradient(90deg, transparent, #ffa500, #ff6b35, transparent);
//           border-radius: 3px;
//           animation: fadeInUp 0.8s ease-out 0.3s both;
//         }

//         /* Animation pour le titre */
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         /* Version responsive pour mobile */
//         @media (max-width: 992px) {
//           .header1 {
//             padding: 150px 50px;
//           }

//           .inscription-titre {
//             font-size: 3.8rem;
//             letter-spacing: 2px;
//           }
//         }

//         @media (max-width: 768px) {
//           .header1 {
//             padding: 120px 40px;
//             background-position: center 40%;
//           }

//           .inscription-titre {
//             font-size: 2.8rem;
//             letter-spacing: 1px;
//           }

//           .inscription-titre::after {
//             width: 60px;
//             bottom: -12px;
//           }
//         }

//         @media (max-width: 576px) {
//           .header1 {
//             padding: 100px 20px;
//             background-position: center 35%;
//           }

//           .inscription-titre {
//             font-size: 2.2rem;
//           }

//           .inscription-titre::after {
//             width: 50px;
//             bottom: -10px;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default College;

import CycleTemplate from "../components/Cycle/CycleTemplate";
import ActivitesCollege from "../components/Collège/ActivitesCollege.jsx";

const College = () => {
    return (
        <>
            <header className="header1">
                <div className="header-overlay"></div>
                <h1 className="inscription-titre">Collège</h1>
            </header>

            <CycleTemplate
                // Section 1 : Hero
                titre1="Collège"
                text1="Un accompagnement personnalisé pendant ces années de transition essentielles. Notre collège accueille les élèves de 11 à 15 ans pour les guider dans le développement de leur autonomie, l'approfondissement des savoirs et l'orientation vers leur avenir."
                image1="/college.jpg"
                // Section 2 : Contenu (sans galerie)
                titre2="Des années décisives pour grandir"
                text2="Nos équipes pédagogiques spécialisées accompagnent les adolescents dans cette période de transformation. Entre exigence académique et soutien bienveillant, nous préparons nos élèves à affronter avec confiance les défis du lycée et au-delà."
                // Activités insérées entre le texte et HomeGallery
                activitesComponent={<ActivitesCollege />}
            />

            <style jsx>{`
                .header1 {
                    position: relative;
                    text-align: center;
                    padding: 200px 70px;
                    font-size: 2rem;
                    font-weight: bold;
                    color: #fff;
                    background-image: url("/collg3.jpg");
                    background-size: cover;
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                    image-rendering: -webkit-optimize-contrast;
                    image-rendering: crisp-edges;
                }

                .header-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(
                        135deg,
                        rgba(0, 0, 0, 0.55) 0%,
                        rgba(0, 0, 0, 0.45) 50%,
                        rgba(0, 0, 0, 0.55) 100%
                    );
                    z-index: 1;
                }

                .inscription-titre {
                    position: relative;
                    z-index: 2;
                    text-shadow: 3px 3px 20px rgba(0, 0, 0, 0.6);
                    font-size: 5rem;
                    font-weight: 800;
                    font-family: "Poppins", "Montserrat", "Segoe UI", sans-serif;
                    color: #fff;
                    letter-spacing: 3px;
                    margin: 0;
                    display: inline-block;
                    animation: fadeInUp 0.8s ease-out;
                }

                // .inscription-titre::after {
                //     content: "";
                //     position: absolute;
                //     bottom: -15px;
                //     left: 50%;
                //     transform: translateX(-50%);
                //     width: 80px;
                //     height: 3px;
                //     background: linear-gradient(
                //         90deg,
                //         transparent,
                //         #ffa500,
                //         #ff6b35,
                //         transparent
                //     );
                //     border-radius: 3px;
                //     animation: fadeInUp 0.8s ease-out 0.3s both;
                // }

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

                @media (max-width: 992px) {
                    .header1 {
                        padding: 150px 50px;
                    }

                    .inscription-titre {
                        font-size: 3.8rem;
                        letter-spacing: 2px;
                    }
                }

                @media (max-width: 768px) {
                    .header1 {
                        padding: 120px 40px;
                        background-position: center 40%;
                    }

                    .inscription-titre {
                        font-size: 2.8rem;
                        letter-spacing: 1px;
                    }

                    .inscription-titre::after {
                        width: 60px;
                        bottom: -12px;
                    }
                }

                @media (max-width: 576px) {
                    .header1 {
                        padding: 100px 20px;
                        background-position: center 35%;
                    }

                    .inscription-titre {
                        font-size: 2.2rem;
                    }

                    .inscription-titre::after {
                        width: 50px;
                        bottom: -10px;
                    }
                }
            `}</style>
        </>
    );
};

export default College;
