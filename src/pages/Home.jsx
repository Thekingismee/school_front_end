import React from "react";
import { RightOutlined } from "@ant-design/icons";
import HeroCarousel from "../components/Accueil/HeroCarousel";
import HomeInfo from "../components/Accueil/HomeInfo";
import CyclesSection from "../components/Accueil/CyclesSection";
import HomeValeurs from "../components/Accueil/HomeValeurs";
import Cantine from "../components/Accueil/Cantine";
import Partenaires from "../components/Accueil/Partenaires";
import Temoignages from "../components/Accueil/Temoignages";
import Button from "../components/Accueil/Button";
import HomeGallery from "../components/Accueil/HomeGallery";
import HomeActualites from "../components/Accueil/HomeActualites ";
import Services from "../components/Accueil/Services";

function Home() {


  const handleLogout = async () => {
    try {
      await fetch('http://localhost:8000/logout', {
        method: 'POST', // ou 'GET' selon ton API
        credentials: 'include', // pour envoyer les cookies/session si nécessaire
      });
      // Optionnel : rediriger ou mettre à jour l'état après déconnexion
      window.location.href = '/';
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };
  return (
    <div>

{/* <button onClick={handleLogout}>
      Déconnexion
    </button> */}
        <HeroCarousel />
        <HomeInfo/>
        <CyclesSection />
        <HomeValeurs />
        <Services />
        <Cantine />
        <Partenaires />
        <Temoignages />
        <HomeGallery />
        <Button href="/inscription">
          Inscrivez vos enfants{" "}<span className="span">dès maintenant</span> <RightOutlined style={{ marginLeft: '10px', fontSize: '20px' }} />
        </Button>
        <HomeActualites />

<style jsx>{`
          
          .span {
margin-left: 7px;         }
   @media (max-width: 640px) {
          .span {
            display: none;
          }
          
}
            `}
</style>
    </div>


  );
}


export default Home;