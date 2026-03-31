import CycleTemplate from '../components/Cycle/CycleTemplate';

const Primaire = () => {
  return (
    <>
      <header className="header1">
        <h1 className='inscription-titre'>Primaire</h1>
      </header>
      <CycleTemplate
        // Section 1 : Hero
        titre1="Primaire"
        text1="Les fondamentaux de l'éducation avec une approche pédagogique innovante. Notre école primaire accueille les enfants de 6 à 11 ans pour construire les bases solides de leur avenir académique et personnel dans un environnement stimulant et bienveillant."
        image1="/serv.jpg"
        
        // Section 2 : Contenu + Galerie
        titre2="Construire les bases de demain"
        text2="Nos enseignants passionnés accompagnent chaque élève dans la maîtrise des savoirs fondamentaux. Lecture, écriture, mathématiques et découverte du monde se conjuguent à l'esprit critique et à la créativité pour former des citoyens engagés."
        image2="/serv.jpg"
        image3="/serv.jpg"
        image4="/serv.jpg"
        image5="/serv.jpg"
        textimage3="Lecture et expression"
        textimage4="Mathématiques ludiques"
        textimage5="Découverte du monde"
      />
      <style jsx>{`
        .header1 {
          text-align: center;
          padding: 130px 70px;
          font-size: 2rem;
          font-weight: bold;
          color: #fff;
          background-image: url("/serv3.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          clip-path: shape(from 0 0,vline to 100%,curve to 4.17% calc(100% - 15.5px) with 2.78% calc(100% - 15px),curve to 6.94% calc(100% - 9px) with 5.56% calc(100% - 16px),curve to 9.72% calc(100% - 20px) with 8.33% calc(100% - 2px),curve to 12.5% calc(100% - 44px) with 11.11% calc(100% - 38px),curve to 15.28% calc(100% - 27.5px) with 13.89% calc(100% - 50px),curve to 18.06% calc(100% - 20.5px) with 16.67% calc(100% - 5px),curve to 20.83% calc(100% - 23.5px) with 19.44% calc(100% - 36px),curve to 23.61% calc(100% - 10.5px) with 22.22% calc(100% - 11px),curve to 26.39% calc(100% - 5.5px) with 25% calc(100% - 10px),curve to 29.17% calc(100% - 9.5px) with 27.78% calc(100% - 1px),curve to 31.94% calc(100% - 11.5px) with 30.56% calc(100% - 18px),curve to 34.72% calc(100% - 20px) with 33.33% calc(100% - 5px),curve to 37.5% calc(100% - 23px) with 36.11% calc(100% - 35px),curve to 40.28% calc(100% - 28px) with 38.89% calc(100% - 11px),curve to 43.06% calc(100% - 24.5px) with 41.67% calc(100% - 45px),curve to 45.83% calc(100% - 25.5px) with 44.44% calc(100% - 4px),curve to 48.61% calc(100% - 44.5px) with 47.22% calc(100% - 47px),curve to 51.39% calc(100% - 31px) with 50% calc(100% - 42px),curve to 54.17% calc(100% - 26.5px) with 52.78% calc(100% - 20px),curve to 56.94% calc(100% - 23.5px) with 55.56% calc(100% - 33px),curve to 59.72% calc(100% - 13.5px) with 58.33% calc(100% - 14px),curve to 62.5% calc(100% - 26.5px) with 61.11% calc(100% - 13px),curve to 65.28% calc(100% - 41px) with 63.89% calc(100% - 40px),curve to 68.06% calc(100% - 28.5px) with 66.67% calc(100% - 42px),curve to 70.83% calc(100% - 7.5px) with 69.44% calc(100% - 15px),curve to 73.61% calc(100% - 12.5px) with 72.22% calc(100% - 0px),curve to 76.39% calc(100% - 27.5px) with 75% calc(100% - 25px),curve to 79.17% calc(100% - 28px) with 77.78% calc(100% - 30px),curve to 81.94% calc(100% - 27px) with 80.56% calc(100% - 26px),curve to 84.72% calc(100% - 34px) with 83.33% calc(100% - 28px),curve to 87.5% calc(100% - 28px) with 86.11% calc(100% - 40px),curve to 90.28% calc(100% - 31px) with 88.89% calc(100% - 16px),curve to 93.06% calc(100% - 37px) with 91.67% calc(100% - 46px),curve to 95.83% calc(100% - 23.5px) with 94.44% calc(100% - 28px),curve to 100% 100% with 97.22% calc(100% - 19px),vline to 0, hline to 0);
        }
        .inscription-titre {
          text-shadow: 2px 2px 30px #000;
          font-size: 4rem;
          font-weight: bold;
          font-family: "Courier New", Courier, monospace;
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default Primaire;