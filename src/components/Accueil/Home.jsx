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

  return (
    <div>

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
          Inscrivez vos enfants dès maintenant <RightOutlined style={{ marginLeft: '10px', fontSize: '20px' }} />
        </Button>
        <HomeActualites />

    </div>


  );
}


export default Home;