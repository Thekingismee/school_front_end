import React from "react";
import HeroCarousel from "../../Accueil/HeroCarousel";
import CyclesSection from "../../Accueil/CyclesSection";
import HomeActualites from "../../Accueil/HomeActualites ";
import Cantine from "../../Accueil/Cantine";
import Partenaires from "../../Accueil/Partenaires";
import Temoignages from "../../Accueil/Temoignages";
import Button from "../../Accueil/Button";
import { RightOutlined } from "@ant-design/icons";
import HomeGallery from "../../Accueil/HomeGallery";
import HomeValeurs from "../../Accueil/HomeValeurs";
import Layout from "../../../containers/Layout/Layout";
import HomeInfo from "../../Accueil/HomeInfo";

function Home() {

  return (
    <div>
      <Layout>

        <HeroCarousel />
        <HomeInfo/>
        <CyclesSection />
        <HomeValeurs />
        <Cantine />
        <Partenaires />
        <Temoignages />
        <HomeGallery />
        <Button onClick={() => console.log('Clic !')}>
          Inscrivez vos enfants dès maintenant <RightOutlined style={{ marginLeft: '10px', fontSize: '20px' }} />
        </Button>
        <HomeActualites />

      </Layout>

    </div>


  );
}


export default Home;