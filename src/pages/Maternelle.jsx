// import CycleTemplate from '../components/Cycle/CycleTemplate';

// const Maternelle = () => {
//   return (
//     <>
//      <header className="header1">
//             <h1 className='inscription-titre'>Maternelle</h1>
//         </header>
//     <CycleTemplate
//       // Section 1 : Hero
//       titre1="Maternelle"
//       text1="Un premier pas vers l'apprentissage dans un environnement sécurisé et stimulant. Notre école maternelle accueille les enfants de 3 à 6 ans dans des classes petites et encadrées, où l'éveil, la découverte et la socialisation sont au cœur de notre pédagogie."
//       image1="/Mat.jpg"

//       // Section 2 : Contenu + Galerie
//       titre2="Une pédagogie adaptée aux tout-petits"
//       text2="Nos équipes éducatives spécialisées accompagnent chaque enfant dans son développement global. À travers le jeu, l'exploration sensorielle et les activités créatives, nous favorisons l'autonomie, la confiance en soi et l'ouverture au monde."
//       image2="/serv.jpg"
//       image3="/serv.jpg"
//       image4="/serv.jpg"
//       image5="/serv.jpg"
//       textimage3="Apprentissage par le jeu"
//       textimage4="Activités créatives"
//       textimage5="Eveil sensoriel"
//       />
//       <style jsx>{`
// //       .header1{
// //   text-align: center;
// //   padding: 130px  70px;
// //   font-size: 2rem;
// //   font-weight: bold;
// //   color: #fff;
// // //   background: #780000;
// //   background-image: url("/openb.jpg");
// //   background-size: cover;
// //   background-position: center;
// //   background-repeat: no-repeat;
// //   clip-path: shape(from 0 0,vline to 100%,curve to 4.17% calc(100% - 15.5px) with 2.78% calc(100% - 15px),curve to 6.94% calc(100% - 9px) with 5.56% calc(100% - 16px),curve to 9.72% calc(100% - 20px) with 8.33% calc(100% - 2px),curve to 12.5% calc(100% - 44px) with 11.11% calc(100% - 38px),curve to 15.28% calc(100% - 27.5px) with 13.89% calc(100% - 50px),curve to 18.06% calc(100% - 20.5px) with 16.67% calc(100% - 5px),curve to 20.83% calc(100% - 23.5px) with 19.44% calc(100% - 36px),curve to 23.61% calc(100% - 10.5px) with 22.22% calc(100% - 11px),curve to 26.39% calc(100% - 5.5px) with 25% calc(100% - 10px),curve to 29.17% calc(100% - 9.5px) with 27.78% calc(100% - 1px),curve to 31.94% calc(100% - 11.5px) with 30.56% calc(100% - 18px),curve to 34.72% calc(100% - 20px) with 33.33% calc(100% - 5px),curve to 37.5% calc(100% - 23px) with 36.11% calc(100% - 35px),curve to 40.28% calc(100% - 28px) with 38.89% calc(100% - 11px),curve to 43.06% calc(100% - 24.5px) with 41.67% calc(100% - 45px),curve to 45.83% calc(100% - 25.5px) with 44.44% calc(100% - 4px),curve to 48.61% calc(100% - 44.5px) with 47.22% calc(100% - 47px),curve to 51.39% calc(100% - 31px) with 50% calc(100% - 42px),curve to 54.17% calc(100% - 26.5px) with 52.78% calc(100% - 20px),curve to 56.94% calc(100% - 23.5px) with 55.56% calc(100% - 33px),curve to 59.72% calc(100% - 13.5px) with 58.33% calc(100% - 14px),curve to 62.5% calc(100% - 26.5px) with 61.11% calc(100% - 13px),curve to 65.28% calc(100% - 41px) with 63.89% calc(100% - 40px),curve to 68.06% calc(100% - 28.5px) with 66.67% calc(100% - 42px),curve to 70.83% calc(100% - 7.5px) with 69.44% calc(100% - 15px),curve to 73.61% calc(100% - 12.5px) with 72.22% calc(100% - 0px),curve to 76.39% calc(100% - 27.5px) with 75% calc(100% - 25px),curve to 79.17% calc(100% - 28px) with 77.78% calc(100% - 30px),curve to 81.94% calc(100% - 27px) with 80.56% calc(100% - 26px),curve to 84.72% calc(100% - 34px) with 83.33% calc(100% - 28px),curve to 87.5% calc(100% - 28px) with 86.11% calc(100% - 40px),curve to 90.28% calc(100% - 31px) with 88.89% calc(100% - 16px),curve to 93.06% calc(100% - 37px) with 91.67% calc(100% - 46px),curve to 95.83% calc(100% - 23.5px) with 94.44% calc(100% - 28px),curve to 100% 100% with 97.22% calc(100% - 19px),vline to 0, hline to 0);
// // }
// //   .inscription-titre{
// //     text-shadow: 2px 2px 30px #000;
// //     font-size: 4rem;
// //     font-weight: bold;
// //     font-family: "Courier New", Courier, monospace;
// //     color: #fff;
// //   }

// .header1 {
//   /* ===== CONTENEUR PRINCIPAL AVEC HAUTEUR AGRANDIE ===== */
//   text-align: center;
//   padding: 180px 70px; /* Augmenté de 130px à 180px pour plus de hauteur */
//   font-size: 2rem;
//   font-weight: bold;
//   color: #fff;
//   background-image: url("/openb.jpg");
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-attachment: fixed; /* Effet parallax pour meilleure qualité d'image */

//   /* Ligne droite au lieu des vagues */
//   clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

//   /* Position relative pour la superposition */
//   position: relative;
//   z-index: 1;

//   /* Amélioration de la qualité d'image */
//   image-rendering: -webkit-optimize-contrast;
//   image-rendering: crisp-edges;
// }

// /* Superposition légère pour améliorer la lisibilité du texte */
// .header1::before {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: rgba(0, 0, 0, 0.4); /* Légère superposition sombre */
//   z-index: -1;
// }

// .inscription-titre {
//   /* ===== TITRE AVEC POLICE PLUS CLAIRE ===== */
//   text-shadow: 2px 2px 30px rgba(0, 0, 0, 0.5);
//   font-size: 4.5rem; /* Légèrement augmenté */
//   font-weight: 800; /* Plus gras pour meilleure lisibilité */
//   font-family: 'Poppins', 'Montserrat', 'Segoe UI', 'Courier New', sans-serif;
//   color: #fff;
//   letter-spacing: 2px;
//   margin: 0;
//   position: relative;
//   display: inline-block;
//   animation: fadeInUp 0.8s ease-out;
// }

// /* Animation optionnelle pour le titre */
// @keyframes fadeInUp {
//   from {
//     opacity: 0;
//     transform: translateY(30px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// /* Version responsive pour mobile */
// @media (max-width: 768px) {
//   .header1 {
//     padding: 120px 40px; /* Hauteur adaptée pour mobile */
//   }

//   .inscription-titre {
//     font-size: 2.8rem; /* Taille adaptée pour mobile */
//     letter-spacing: 1px;
//   }
// }

// @media (max-width: 576px) {
//   .header1 {
//     padding: 100px 20px;
//   }

//   .inscription-titre {
//     font-size: 2rem;
//   }
// }
//     `}</style>
//       </>
//   );
// };

// export default Maternelle;
// code sans card 1

import CycleTemplate from "../components/Cycle/CycleTemplate";
import ActivitesMaternelle from "../components/Maternelle/ActivitesMaternelle";

const Maternelle = () => {
    return (
        <>
            <header className="header1">
                <h1 className="inscription-titre">Maternelle</h1>
            </header>

            <CycleTemplate
                // Section 1 : Hero
                titre1="Maternelle"
                text1="Un premier pas vers l'apprentissage dans un environnement sécurisé et stimulant. Notre école maternelle accueille les enfants de 3 à 6 ans dans des classes petites et encadrées, où l'éveil, la découverte et la socialisation sont au cœur de notre pédagogie."
                image1="/Mat.jpg"
                // Section 2 : Contenu (sans galerie)
                titre2="Une pédagogie adaptée aux tout-petits"
                text2="Nos équipes éducatives spécialisées accompagnent chaque enfant dans son développement global. À travers le jeu, l'exploration sensorielle et les activités créatives, nous favorisons l'autonomie, la confiance en soi et l'ouverture au monde."
                // Activités insérées entre le texte et HomeGallery
                activitesComponent={<ActivitesMaternelle />}
            />

            <style jsx>{`
                .header1 {
                    text-align: center;
                    padding: 180px 70px;
                    font-size: 2rem;
                    font-weight: bold;
                    color: #fff;
                    background-image: url("/openb.jpg");
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                    position: relative;
                    z-index: 1;
                    image-rendering: -webkit-optimize-contrast;
                    image-rendering: crisp-edges;
                }

                .header1::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.4);
                    z-index: -1;
                }

                .inscription-titre {
                    text-shadow: 2px 2px 30px rgba(0, 0, 0, 0.5);
                    font-size: 4.5rem;
                    font-weight: 800;
                    font-family: "Poppins", "Montserrat", "Segoe UI",
                        "Courier New", sans-serif;
                    color: #fff;
                    letter-spacing: 2px;
                    margin: 0;
                    position: relative;
                    display: inline-block;
                    animation: fadeInUp 0.8s ease-out;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
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
                        letter-spacing: 1px;
                    }
                }

                @media (max-width: 576px) {
                    .header1 {
                        padding: 100px 20px;
                    }

                    .inscription-titre {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </>
    );
};

export default Maternelle;
