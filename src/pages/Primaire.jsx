import CycleTemplate from "../components/Cycle/CycleTemplate";
import ActivitesPrimaire from "../components/Primaire/ActivitesPrimaire";

const Primaire = () => {
    // ⭐⭐⭐ AJOUTEZ VOS IMAGES ICI (SANS TEXTE) ⭐⭐⭐
    const primaireCarouselImages = [
       { src: "/PRIM11.jpg" },
       { src: "/PRIM4.jpg" },
      { src: "/PRIM1.jpg" },
       { src: "/PRIM7.jpg" },
      { src: "/PRIM17.jpg" }, 
    //   { src: "/PRIM2.jpg" },
       
     
    //   { src: "/PRIM8.jpg" },
    //   { src: "/PRIM9.jpg" },
       { src: "/PRIM10.jpg" }
        
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
                    background-image: url("/tranparent2.png");
                    background-size: cover;
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    background-color: #c7ad57;
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
