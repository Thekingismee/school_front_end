import React from "react";
import { RightOutlined } from "@ant-design/icons";
import HomeValeurs from "../components/Accueil/HomeValeurs";
import Cantine from "../components/Accueil/Cantine";
import Temoignages from "../components/Accueil/Temoignages";
import Button from "../components/Accueil/Button";
import { Mail, MapPin, Phone } from "lucide-react";

function NotreEtablissement() {

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.5!2d-7.6812941!3d33.5374443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62cbe72870d3b%3A0x1edb5fa572f0aac!2sGroupe%20scolaire%20L%E2%80%99atome!5e0!3m2!1sfr!2sma!4v1710000000000";

  return (
    <div>

      {/* ===== HERO ===== */}
      <div className="header2">
        <div className="hero-overlay"></div>
        <img src="/AT2.jpg" alt="Notre Établissement" className="hero-image" />
        <div className="hero-content">
          {/* <div className="hero-badge">Découvrez</div> */}
          <h1 className="hero-title">
            Notre<br />
            <span className="hero-title-accent">Établissement</span>
          </h1>
          <p className="hero-subtitle">Un cadre d'excellence au service de la réussite de vos enfants</p>
          <div className="hero-divider"></div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </div>

      {/* ===== SECTION CONTACT ===== */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-image-wrapper">
            <img
              src="/AT2.jpg"
              alt="Illustration contact"
              className="contact-image"
            />
          </div>
          <div className="contact-content">
            <span className="etab-label">Restons en contact</span>
            <h2 className="contact-title">Nous contacter</h2>
            <div className="contact-links">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <MapPin size={20} /> Localisation
              </a>
              <a href="tel:+212666666666" className="contact-link">
                <Phone size={20} /> +212 6666666666
              </a>
              <a href="mailto:test@gmail.com" className="contact-link">
                <Mail size={20} /> gslatome@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION MAP ===== */}
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

      {/* ===== COMPOSANTS ===== */}
      <HomeValeurs />
      <Cantine />
      <Temoignages />
      <Button href="/inscription">
        Inscrivez vos enfants dès maintenant <RightOutlined style={{ marginLeft: '10px', fontSize: '20px' }} />
      </Button>

      <style jsx>{`
        /* ===== HERO ===== */
        .header2 {
          width: 100%;
          height: 92vh;
          min-height: 580px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          display: block;
          filter: brightness(0.55) saturate(1.15) contrast(1.05);
          transform: scale(1.04);
          transition: transform 8s ease-out;
        }

        .header2:hover .hero-image {
          transform: scale(1);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            160deg,
            rgba(0, 30, 80, 0.55) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(238, 114, 31, 0.3) 100%
          );
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: #fff;
          padding: 0 24px;
          max-width: 800px;
          animation: heroFadeIn 1.2s ease-out both;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(8px);
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 8px 22px;
          border-radius: 50px;
          margin-bottom: 24px;
          font-family: "Trebuchet MS", Helvetica, sans-serif;
        }

        .hero-title {
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin: 0 0 20px 0;
          font-family: 'Georgia', 'Times New Roman', serif;
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
          letter-spacing: -1px;
        }

        .hero-title-accent {
          color: #ffa600;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          color: rgba(255, 255, 255, 0.88);
          font-family: "Trebuchet MS", Helvetica, sans-serif;
          margin: 0 0 28px 0;
          font-weight: 400;
          letter-spacing: 0.5px;
        }

        .hero-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #ffa600, #2563eb);
          border-radius: 2px;
          margin: 0 auto;
        }

        .hero-scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          width: 28px;
          height: 44px;
          border: 2px solid rgba(255, 255, 255, 0.5);
          border-radius: 14px;
          display: flex;
          justify-content: center;
          padding-top: 7px;
        }

        .scroll-dot {
          width: 5px;
          height: 10px;
          background: #fff;
          border-radius: 3px;
          animation: scrollBounce 1.8s ease-in-out infinite;
        }

        @keyframes heroFadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scrollBounce {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(10px);
            opacity: 0.4;
          }
        }

        /* ===== CONTACT SECTION ===== */
        .contact-section {
          padding: 60px 20px;
          background: #ffffff;
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

        .contact-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .contact-title {
          margin: 0;
          padding-bottom: 15px;
          font-family: 'Georgia', serif;
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: #0f172a;
          position: relative;
          display: inline-block;
        }

        .contact-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 3px;
          border-radius: 2px;
          background: linear-gradient(90deg, #f97316, #1e3a8a);
        }

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
          transform: translateX(5px);
        }

        /* ===== MAP SECTION ===== */
        .map-section {
          padding: 60px 20px;
          background: #f8fafc;
        }

        .map-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .map-wrapper {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
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

        /* ===== RESPONSIVE ===== */
        @media (max-width: 992px) {
          .header2 {
            height: 70vh;
            min-height: 480px;
          }
        }

        @media (max-width: 768px) {
          .header2 {
            height: 60vh;
            min-height: 380px;
          }
          
          .map-section {
            padding: 40px 16px;
          }
          
          .map-wrapper {
            padding-bottom: 75%;
            border-radius: 8px;
          }
          
          .contact-container {
            flex-direction: column;
            text-align: center;
            gap: 40px;
          }
          
          .contact-title::after {
            left: 50%;
            transform: translateX(-50%);
          }
          
          .contact-links {
            align-items: center;
          }
        }

        @media (max-width: 576px) {
          .header2 {
            height: 50vh;
            min-height: 300px;
          }
          
          .hero-scroll-indicator {
            display: none;
          }
          
          .hero-badge {
            font-size: 0.75rem;
            padding: 6px 16px;
          }
          
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
          
          .contact-link:hover {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default NotreEtablissement;