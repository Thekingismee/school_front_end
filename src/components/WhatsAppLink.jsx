// src/components/WhatsAppLink.jsx
import { WhatsApp } from "@mui/icons-material";
import React from "react";

const WhatsAppLink = () => {
  const phoneNumber = "212666666666"; // Remplace par ton numéro
  const message = "Bonjour, je souhaite plus d'informations.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Styles inline pour le conteneur fixe
  const containerStyle = {
    position: "fixed",
    bottom: "20px",
    left: "20px",
    zIndex: 9999,
  };

  // Styles pour le lien/bouton
  const linkStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60px",
    height: "60px",
    backgroundColor: "#25D366",
    borderRadius: "50%",
    boxShadow: "0 4px 14px rgba(37, 211, 102, 0.4)",
    textDecoration: "none",
    transition: "all 0.3s ease",
    animation: "pulse 2s infinite",
  };

  // Styles pour l'icône SVG
  const iconStyle = {
    width: "32px",
    height: "32px",
    fill: "#ffffff",
  };

  // Keyframes pour l'animation de pulsation (injectée via une balise style)
  const animationStyle = `
    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
      70% { box-shadow: 0 0 0 12px rgba(37, 211, 102, 0); }
      100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
    }
    @media (max-width: 768px) {
      .whatsapp-btn {
        width: 50px !important;
        height: 50px !important;
      }
      .whatsapp-btn svg {
        width: 26px !important;
        height: 26px !important;
      }
    }
  `;

  return (
    <>
      <style>{animationStyle}</style>
      <div style={containerStyle}>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
          style={linkStyle}
          aria-label="Nous contacter sur WhatsApp"
          title="Discuter sur WhatsApp"
        >
          {/* SVG Icone WhatsApp officielle */}
          <WhatsApp style={iconStyle}/>
          {/* <svg
            style={iconStyle}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.533.678 4.95 1.918 7.05L2 30l7.184-1.866A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 26c-2.21 0-4.368-.597-6.277-1.727l-.45-.266-4.02 1.04 1.088-3.907-.283-.483A11.944 11.944 0 014 16c0-6.617 5.383-12 12-12s12 5.383 12 12-5.383 12-12 12zm6.54-8.86c-.36-.18-2.126-1.05-2.454-1.17-.328-.12-.566-.18-.804.18-.238.36-.924 1.17-1.132 1.41-.208.24-.416.27-.774.09-.36-.18-1.517-.56-2.89-1.78-1.07-.954-1.79-2.13-1.998-2.49-.208-.36-.022-.556.156-.734.162-.162.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.804-1.94-1.102-2.66-.29-.7-.586-.61-.804-.62l-.69-.01c-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3.01 0 1.78 1.29 3.5 1.47 3.74.18.24 2.54 3.88 6.15 5.44.86.37 1.53.59 2.05.76.86.27 1.64.23 2.26.14.69-.1 2.126-.87 2.424-1.71.298-.84.298-1.56.21-1.71-.088-.15-.328-.24-.688-.42z"/>
          </svg> */}
        </a>
      </div>
    </>
  );
};

export default WhatsAppLink;