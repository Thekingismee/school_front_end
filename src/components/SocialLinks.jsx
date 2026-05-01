// src/components/SocialLinks.jsx
import { WhatsApp, Facebook, Instagram } from "@mui/icons-material";
import React from "react";

const SocialLinks = () => {
  // Configuration des liens
  const links = [
    {
      name: "WhatsApp",
      icon: <WhatsApp />,
      url: `https://wa.me/+212670653333?text=${encodeURIComponent("Bonjour, je souhaite plus d'informations.")}`,
      color: "#25D366",
      ariaLabel: "Nous contacter sur WhatsApp",
      title: "Discuter sur WhatsApp",
    },
    {
      name: "Instagram",
      icon: <Instagram />,
      url: "https://www.instagram.com/gslatome",
      color: "#E4405F",
      ariaLabel: "Nous suivre sur Instagram",
      title: "Voir notre profil Instagram",
    },
    {
      name: "Facebook",
      icon: <Facebook />,
      url: "https://www.facebook.com/groupescolairelatome",
      color: "#1877F2",
      ariaLabel: "Nous suivre sur Facebook",
      title: "Voir notre page Facebook",
    },
  ];

  // Styles du conteneur fixe
  const containerStyle = {
    position: "fixed",
    bottom: "20px",
    left: "20px",
    zIndex: 9999,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  // Styles de base pour chaque bouton
  const getLinkStyle = (color, index) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60px",
    height: "60px",
    backgroundColor: color,
    borderRadius: "50%",
    boxShadow: `0 4px 14px ${color}66`,
    textDecoration: "none",
    transition: "all 0.3s ease",
    animation: `pulse-${index} 2s infinite`, // Animation unique par index
    color: "#ffffff",
  });

  const iconStyle = {
    width: "32px",
    height: "32px",
    fill: "#ffffff",
  };

  // Génération dynamique des keyframes pour chaque couleur
  const generateKeyframes = () => {
    return links.map((link, index) => {
      // Convertir hex en rgba pour l'animation (avec opacité)
      const hex = link.color.replace("#", "");
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      
      return `
        @keyframes pulse-${index} {
          0% { box-shadow: 0 0 0 0 rgba(${r}, ${g}, ${b}, 0.7); }
          70% { box-shadow: 0 0 0 12px rgba(${r}, ${g}, ${b}, 0); }
          100% { box-shadow: 0 0 0 0 rgba(${r}, ${g}, ${b}, 0); }
        }
      `;
    }).join("");
  };

  // Animation et responsive
  const animationStyle = `
    ${generateKeyframes()}
    
    /* Hover effect */
    .social-btn:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3) !important;
    }
    
    /* Responsive mobile */
    @media (max-width: 768px) {
      .social-container {
        bottom: 15px !important;
        left: 15px !important;
        gap: 10px !important;
      }
      .social-btn {
        width: 50px !important;
        height: 50px !important;
      }
      .social-btn svg {
        width: 26px !important;
        height: 26px !important;
      }
    }
  `;

  return (
    <>
      <style>{animationStyle}</style>
      <div style={containerStyle} className="social-container">
        {links.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            style={getLinkStyle(link.color, index)}
            aria-label={link.ariaLabel}
            title={link.title}
          >
            {React.cloneElement(link.icon, { style: iconStyle })}
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialLinks;