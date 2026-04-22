// import CycleTemplate from "../components/Cycle/CycleTemplate";
// import ActivitesPrimaire from "../components/Primaire/ActivitesPrimaire";

// const Primaire = () => {
//     return (
//         <>
//             <header className="header1">
//                 <div className="header-overlay"></div>
//                 <h1 className="inscription-titre">Primaire</h1>
//             </header>

//             <CycleTemplate
//                 // Section 1 : Hero
//                 titre1="Primaire"
//                 text1="Les fondamentaux de l'éducation avec une approche pédagogique innovante. Notre école primaire accueille les enfants de 6 à 11 ans pour construire les bases solides de leur avenir académique et personnel dans un environnement stimulant et bienveillant."
//                 image1="/CE2.jpg"
//                 // Section 2 : Contenu (sans galerie)
//                 titre2="Construire les bases de demain"
//                 text2="Nos enseignants passionnés accompagnent chaque élève dans la maîtrise des savoirs fondamentaux. Lecture, écriture, mathématiques et découverte du monde se conjuguent à l'esprit critique et à la créativité pour former des citoyens engagés."
//                 // Activités insérées entre le texte et HomeGallery
//                 activitesComponent={<ActivitesPrimaire />}
//             />

//             <style jsx>{`
//                 .header1 {
//                     position: relative;
//                     text-align: center;
//                     padding: 200px 70px;
//                     font-size: 2rem;
//                     font-weight: bold;
//                     color: #fff;
//                     background-image: url("/primprim2.jpg");
//                     background-size: cover;
//                     background-position: center 30%;
//                     background-repeat: no-repeat;
//                     background-attachment: fixed;
//                     clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
//                     z-index: 1;
//                     image-rendering: -webkit-optimize-contrast;
//                     image-rendering: crisp-edges;
//                 }

//                 .header-overlay {
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     bottom: 0;
//                     background: linear-gradient(
//                         135deg,
//                         rgba(0, 0, 0, 0.55) 0%,
//                         rgba(0, 0, 0, 0.45) 50%,
//                         rgba(0, 0, 0, 0.55) 100%
//                     );
//                     z-index: 1;
//                 }

//                 .inscription-titre {
//                     position: relative;
//                     z-index: 2;
//                     text-shadow: 3px 3px 20px rgba(0, 0, 0, 0.6);
//                     font-size: 5rem;
//                     font-weight: 800;
//                     font-family: "Poppins", "Montserrat", "Segoe UI", sans-serif;
//                     color: #fff;
//                     letter-spacing: 3px;
//                     margin: 0;
//                     display: inline-block;
//                     animation: fadeInUp 0.8s ease-out;
//                     background: linear-gradient(135deg, #fff, #f0f0f0);
//                     -webkit-background-clip: text;
//                     background-clip: text;
//                     color: transparent;
//                     text-shadow: none;
//                 }

//                 @keyframes fadeInUp {
//                     from {
//                         opacity: 0;
//                         transform: translateY(40px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }

//                 // .inscription-titre::after {
//                 //     content: "";
//                 //     position: absolute;
//                 //     bottom: -15px;
//                 //     left: 50%;
//                 //     transform: translateX(-50%);
//                 //     width: 80px;
//                 //     height: 3px;
//                 //     background: linear-gradient(
//                 //         90deg,
//                 //         transparent,
//                 //         #ffa500,
//                 //         #ff6b35,
//                 //         transparent
//                 //     );
//                 //     border-radius: 3px;
//                 //     animation: fadeInUp 0.8s ease-out 0.3s both;
//                 // }

//                 @media (max-width: 992px) {
//                     .header1 {
//                         padding: 150px 50px;
//                     }

//                     .inscription-titre {
//                         font-size: 3.8rem;
//                         letter-spacing: 2px;
//                     }
//                 }

//                 @media (max-width: 768px) {
//                     .header1 {
//                         padding: 120px 40px;
//                         background-position: center 40%;
//                     }

//                     .inscription-titre {
//                         font-size: 2.8rem;
//                         letter-spacing: 1px;
//                     }

//                     .inscription-titre::after {
//                         width: 60px;
//                         bottom: -12px;
//                     }
//                 }

//                 @media (max-width: 576px) {
//                     .header1 {
//                         padding: 100px 20px;
//                         background-position: center 35%;
//                     }

//                     .inscription-titre {
//                         font-size: 2.2rem;
//                     }

//                     .inscription-titre::after {
//                         width: 50px;
//                         bottom: -10px;
//                     }
//                 }
//             `}</style>
//         </>
//     );
// };

// export default Primaire;
import CycleTemplate from "../components/Cycle/CycleTemplate";
import ActivitesPrimaire from "../components/Primaire/ActivitesPrimaire";

const Primaire = () => {
    // ⭐⭐⭐ AJOUTEZ VOS IMAGES ICI (SANS TEXTE) ⭐⭐⭐
    const primaireCarouselImages = [
        { src: "/primaire/image1.jpg" },
        { src: "/primaire/image2.jpg" },
        { src: "/primaire/image3.jpg" },
        { src: "/primaire/image4.jpg" },
        { src: "/primaire/image5.jpg" }
    ];
    // ⭐ FIN DE LA ZONE À MODIFIER ⭐

    return (
        <>
            <header className="header1">
                <div className="header-overlay"></div>
                <h1 className="inscription-titre">Primaire</h1>
            </header>

            <CycleTemplate
                titre1="Primaire"
                text1="Les fondamentaux de l'éducation avec une approche pédagogique innovante. Notre école primaire accueille les enfants de 6 à 11 ans pour construire les bases solides de leur avenir académique et personnel dans un environnement stimulant et bienveillant."
                titre2="Construire les bases de demain"
                text2="Nos enseignants passionnés accompagnent chaque élève dans la maîtrise des savoirs fondamentaux. Lecture, écriture, mathématiques et découverte du monde se conjuguent à l'esprit critique et à la créativité pour former des citoyens engagés."
                activitesComponent={<ActivitesPrimaire />}
                carouselImages={primaireCarouselImages}
            />

            <style jsx>{`
                .header1 {
                    position: relative;
                    text-align: center;
                    padding: 200px 70px;
                    font-size: 2rem;
                    font-weight: bold;
                    color: #fff;
                    background-image: url("/primprim2.jpg");
                    background-size: cover;
                    background-position: center 30%;
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

export default Primaire;
