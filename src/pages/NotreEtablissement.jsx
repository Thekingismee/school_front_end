import React from "react";
import { RightOutlined } from "@ant-design/icons";
import HomeValeurs from "../components/Accueil/HomeValeurs";
import Cantine from "../components/Accueil/Cantine";
import Temoignages from "../components/Accueil/Temoignages";
import Button from "../components/Accueil/Button";
import { Locate, Mail, MapPin, Phone } from "lucide-react";
import { LocationOn } from "@mui/icons-material";

function NotreEtablissement() {


      const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.5!2d-7.6812941!3d33.5374443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62cbe72870d3b%3A0x1edb5fa572f0aac!2sGroupe%20scolaire%20L%E2%80%99atome!5e0!3m2!1sfr!2sma!4v1710000000000";

  return (
    <div>
 <header className="header2">
            <h1 className='inscription-titre'>Notre Établissement</h1>
        </header>

<section className="contact-section">
      <div className="contact-container">
        
        {/* Partie Gauche : Image */}
        <div className="contact-image-wrapper">
          <img 
            src="/AT2.jpg" 
            alt="Illustration contact" 
            className="contact-image"
          />
        </div>

        {/* Partie Droite : Contenu */}
        <div className="contact-content">
                <span className="etab-label">Restons en contact</span>
          <h2 className="contact-title">Nous contacter</h2>


          
          <div className="contact-links">
            {/* Lien 1 : Localisation */}
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
                <MapPin/> Localisation
            </a>

            {/* Lien 2 : Téléphone */}
            <a 
              href="tel:+212666666666" 
              className="contact-link"
            >
                <Phone/> +212 6666666666
            </a>

            {/* Lien 3 : Email */}
            <a 
              href="mailto:test@gmail.com" 
              className="contact-link"
            >
                <Mail/> test@gmail.com
            </a>
          </div>
        </div>

      </div>
    </section>


    <section className="map-section">
      <div className="map-container">
        <div className="map-wrapper">
          <iframe
            src={mapUrl}
            title="Localisation Groupe scolaire L'atome"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map-iframe"
          ></iframe>
        </div>
            
      </div>
    </section>
        <HomeValeurs />
        <Cantine />
        <Temoignages />
        <Button href="/inscription">
          Inscrivez vos enfants dès maintenant <RightOutlined style={{ marginLeft: '10px', fontSize: '20px' }} />
        </Button>

<style jsx>{`
/* --- Section Principale --- */
// .map-section {
//   padding: 60px 20px;
//   background: #ffb703;
// //   padding-block: 50px;
//   clip-path: shape(from 0 0,curve to 4.17% 21px with 2.78% 1px,curve to 6.94% 21.5px with 5.56% 41px,curve to 9.72% 10.5px with 8.33% 2px,curve to 12.5% 33px with 11.11% 19px,curve to 15.28% 29.5px with 13.89% 47px,curve to 18.06% 11.5px with 16.67% 12px,curve to 20.83% 12.5px with 19.44% 11px,curve to 23.61% 18px with 22.22% 14px,curve to 26.39% 13px with 25% 22px,curve to 29.17% 13.5px with 27.78% 4px,curve to 31.94% 29px with 30.56% 23px,curve to 34.72% 26.5px with 33.33% 35px,curve to 37.5% 16px with 36.11% 18px,curve to 40.28% 17px with 38.89% 14px,curve to 43.06% 18px with 41.67% 20px,curve to 45.83% 13.5px with 44.44% 16px,curve to 48.61% 21px with 47.22% 11px,curve to 51.39% 34px with 50% 31px,curve to 54.17% 38px with 52.78% 37px,curve to 56.94% 25px with 55.56% 39px,curve to 59.72% 28.5px with 58.33% 11px,curve to 62.5% 46px with 61.11% 46px,curve to 65.28% 40.5px with 63.89% 46px,curve to 68.06% 24.5px with 66.67% 35px,curve to 70.83% 28.5px with 69.44% 14px,curve to 73.61% 36.5px with 72.22% 43px,curve to 76.39% 21px with 75% 30px,curve to 79.17% 20.5px with 77.78% 12px,curve to 81.94% 29.5px with 80.56% 29px,curve to 84.72% 21px with 83.33% 30px,curve to 87.5% 6.5px with 86.11% 12px,curve to 90.28% 23.5px with 88.89% 1px,curve to 93.06% 39.5px with 91.67% 46px,curve to 95.83% 32.5px with 94.44% 33px,curve to 100% 0 with 97.22% 32px,vline to 100%,curve to 95.83% calc(100% - 21px) with 97.22% calc(100% - 27px),curve to 93.06% calc(100% - 28.5px) with 94.44% calc(100% - 15px),curve to 90.28% calc(100% - 29px) with 91.67% calc(100% - 42px),curve to 87.5% calc(100% - 33px) with 88.89% calc(100% - 16px),curve to 84.72% calc(100% - 29px) with 86.11% calc(100% - 50px),curve to 81.94% calc(100% - 28.5px) with 83.33% calc(100% - 8px),curve to 79.17% calc(100% - 34.5px) with 80.56% calc(100% - 49px),curve to 76.39% calc(100% - 23.5px) with 77.78% calc(100% - 20px),curve to 73.61% calc(100% - 29px) with 75% calc(100% - 27px),curve to 70.83% calc(100% - 29.5px) with 72.22% calc(100% - 31px),curve to 68.06% calc(100% - 20px) with 69.44% calc(100% - 28px),curve to 65.28% calc(100% - 26.5px) with 66.67% calc(100% - 12px),curve to 62.5% calc(100% - 36px) with 63.89% calc(100% - 41px),curve to 59.72% calc(100% - 36px) with 61.11% calc(100% - 31px),curve to 56.94% calc(100% - 38.5px) with 58.33% calc(100% - 41px),curve to 54.17% calc(100% - 33.5px) with 55.56% calc(100% - 36px),curve to 51.39% calc(100% - 38.5px) with 52.78% calc(100% - 31px),curve to 48.61% calc(100% - 30px) with 50% calc(100% - 46px),curve to 45.83% calc(100% - 7px) with 47.22% calc(100% - 14px),curve to 43.06% calc(100% - 23px) with 44.44% calc(100% - 0px),curve to 40.28% calc(100% - 41px) with 41.67% calc(100% - 46px),curve to 37.5% calc(100% - 40px) with 38.89% calc(100% - 36px),curve to 34.72% calc(100% - 34px) with 36.11% calc(100% - 44px),curve to 31.94% calc(100% - 18px) with 33.33% calc(100% - 24px),curve to 29.17% calc(100% - 27px) with 30.56% calc(100% - 12px),curve to 26.39% calc(100% - 32px) with 27.78% calc(100% - 42px),curve to 23.61% calc(100% - 28px) with 25% calc(100% - 22px),curve to 20.83% calc(100% - 40px) with 22.22% calc(100% - 34px),curve to 18.06% calc(100% - 31px) with 19.44% calc(100% - 46px),curve to 15.28% calc(100% - 12px) with 16.67% calc(100% - 16px),curve to 12.5% calc(100% - 9px) with 13.89% calc(100% - 8px),curve to 9.72% calc(100% - 11.5px) with 11.11% calc(100% - 10px),curve to 6.94% calc(100% - 20.5px) with 8.33% calc(100% - 13px),curve to 4.17% calc(100% - 20px) with 5.56% calc(100% - 28px),curve to 0 100% with 2.78% calc(100% - 12px),vline to 0);
// }


.map-section {
  padding: 60px 20px;
  background: #f8fafc;
  clip-path: none;
}
.map-container {
  max-width: 1000px;
  margin: 0 auto;
}

/* --- Wrapper pour l'iframe (Responsive) --- */
.map-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* Ratio 16:9 */
  height: 0;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  background-color: #e5e7eb;
}

.map-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 12px;
}



/* --- Responsive --- */
@media (max-width: 768px) {
  .map-section {
    padding: 40px 16px;
  }

  .map-wrapper {
    padding-bottom: 75%; /* Ratio plus carré sur mobile */
    border-radius: 8px;
  }
}






















// .header2{
//   text-align: center;
//   padding: 130px  70px;
//   font-size: 2rem;
//   font-weight: bold;
//   color: #fff;
// //   background: #780000;
//   background-image: url("/AT2.jpg");
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   clip-path: shape(from 0 0,vline to 100%,curve to 4.17% calc(100% - 15.5px) with 2.78% calc(100% - 15px),curve to 6.94% calc(100% - 9px) with 5.56% calc(100% - 16px),curve to 9.72% calc(100% - 20px) with 8.33% calc(100% - 2px),curve to 12.5% calc(100% - 44px) with 11.11% calc(100% - 38px),curve to 15.28% calc(100% - 27.5px) with 13.89% calc(100% - 50px),curve to 18.06% calc(100% - 20.5px) with 16.67% calc(100% - 5px),curve to 20.83% calc(100% - 23.5px) with 19.44% calc(100% - 36px),curve to 23.61% calc(100% - 10.5px) with 22.22% calc(100% - 11px),curve to 26.39% calc(100% - 5.5px) with 25% calc(100% - 10px),curve to 29.17% calc(100% - 9.5px) with 27.78% calc(100% - 1px),curve to 31.94% calc(100% - 11.5px) with 30.56% calc(100% - 18px),curve to 34.72% calc(100% - 20px) with 33.33% calc(100% - 5px),curve to 37.5% calc(100% - 23px) with 36.11% calc(100% - 35px),curve to 40.28% calc(100% - 28px) with 38.89% calc(100% - 11px),curve to 43.06% calc(100% - 24.5px) with 41.67% calc(100% - 45px),curve to 45.83% calc(100% - 25.5px) with 44.44% calc(100% - 4px),curve to 48.61% calc(100% - 44.5px) with 47.22% calc(100% - 47px),curve to 51.39% calc(100% - 31px) with 50% calc(100% - 42px),curve to 54.17% calc(100% - 26.5px) with 52.78% calc(100% - 20px),curve to 56.94% calc(100% - 23.5px) with 55.56% calc(100% - 33px),curve to 59.72% calc(100% - 13.5px) with 58.33% calc(100% - 14px),curve to 62.5% calc(100% - 26.5px) with 61.11% calc(100% - 13px),curve to 65.28% calc(100% - 41px) with 63.89% calc(100% - 40px),curve to 68.06% calc(100% - 28.5px) with 66.67% calc(100% - 42px),curve to 70.83% calc(100% - 7.5px) with 69.44% calc(100% - 15px),curve to 73.61% calc(100% - 12.5px) with 72.22% calc(100% - 0px),curve to 76.39% calc(100% - 27.5px) with 75% calc(100% - 25px),curve to 79.17% calc(100% - 28px) with 77.78% calc(100% - 30px),curve to 81.94% calc(100% - 27px) with 80.56% calc(100% - 26px),curve to 84.72% calc(100% - 34px) with 83.33% calc(100% - 28px),curve to 87.5% calc(100% - 28px) with 86.11% calc(100% - 40px),curve to 90.28% calc(100% - 31px) with 88.89% calc(100% - 16px),curve to 93.06% calc(100% - 37px) with 91.67% calc(100% - 46px),curve to 95.83% calc(100% - 23.5px) with 94.44% calc(100% - 28px),curve to 100% 100% with 97.22% calc(100% - 19px),vline to 0, hline to 0);
// }
.header2 {
  text-align: center;
  padding: 130px 70px;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  background-image: url("/AT2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  clip-path: none;  /* ← À MODIFIER ICI */
}
  .inscription-titre{
    text-shadow: 2px 2px 30px #000;
    font-size: 4rem;
    font-weight: bold;
    font-family: "Courier New", Courier, monospace;
    color: #fff;
  }
/* --- Conteneur Principal --- */
.contact-section {
  padding: 60px 20px;
  color: #333;
}
  

.contact-container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 50px;
}


 .etab-label {
          display: block;
          font-family: 'Arial', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 12px;
        }

       

/* --- Partie Image (Gauche) --- */
.contact-image-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
}

.contact-image {
  max-width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  border-radius: 2px;
}

/* --- Partie Contenu (Droite) --- */
.contact-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contact-title {
//   font-weight: 700;
  margin: 0;
  padding-bottom: 15px;


            font-family: 'Georgia', serif;
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: #0f172a;
          margin: 0;
          position: relative;
          display: inline-block;

}

/* Petite ligne décorative sous le titre */
.contact-title::after {
  bottom: 0;
  left: 0;
  width: 60px;
  border-radius: 2px;
  content: '';
          position: absolute;
        //   transform: translateX(-50%);
          height: 3px;
          background: linear-gradient(90deg, #f97316, #1e3a8a);
}

/* --- Liens de contact --- */
.contact-links {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  color: #444;
  font-size: 1.1rem;
  padding: 12px 16px;
  transition: all 0.3s ease;
  font-family: "Trebuchet MS", Helvetica, sans-serif;

}

.contact-link:hover {
  color: #2563eb;
}



/* --- Responsive (Mobile & Tablette) --- */
@media (max-width: 900px) {
  .contact-container {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }

  .contact-title::after {
    left: 50%;
    transform: translateX(-50%); /* Centre la ligne décorative */
  }

  .contact-link:hover {
    transform: translateX(0); /* Désactive le déplacement sur mobile */
  }

  .contact-links {
    align-items: center; /* Centre les liens sur mobile */
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 40px 16px;
  }

  .contact-title {
    font-size: 1.5rem;
  }

  .contact-link {
    font-size: 1rem;
    width: 100%;
    justify-content: center;
  }


}
`}</style>
    </div>


  );
}


export default NotreEtablissement;