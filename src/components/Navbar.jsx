import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import ContactPopup from './Accueil/ContactPopup';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo à gauche */}
        <div className="logo">
          <img src="/Logo Atome-AR-FR+Slogan-Final.png" alt="Logo" />
        </div>

        {/* Liens au centre */}
        <ul className="nav-links">
          <li><a href="/">Accueil</a></li>

          {/* À propos de nous avec dropdown */}
          <li
            className="dropdown-trigger"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/about">
              À propos de nous
              <ChevronDown size={16} />
            </a>
            {activeDropdown === 'about' && (
              <ul className="dropdown-menu">
                <li><a href="/LeGroupe">Le Groupe</a></li>
                <li><a href="/NotreEtablissement">Etablissement</a></li>
                <li className="nested-dropdown">
                  <a href="/ParcoursScolaire">
                    Parcours Scolaire
                    <ChevronDown size={14} />
                  </a>
                  <ul className="nested-menu">
                    <li><a href="/maternelle">Maternel</a></li>
                    <li><a href="/primaire">Primaire</a></li>
                    <li><a href="/college">College</a></li>
                    <li><a href="/lycee">Lycee</a></li>
                  </ul>
                </li>
                <li><a href="/VieScolaire">Vie Scolaire</a></li>
              </ul>
            )}
          </li>

          {/* Administration avec dropdown */}
          <li
            className="dropdown-trigger"
            onMouseEnter={() => handleMouseEnter('admin')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/administration">
              Admissions
              <ChevronDown size={16} />
            </a>
            {activeDropdown === 'admin' && (
              <ul className="dropdown-menu">
                <li><a href="/why">Pourquoi L'Atome</a></li>
                <li><a href="/ModalitesInscription">Modalites d'inscription</a></li>
                <li><a href="/inscription">Demande d'inscription</a></li>
                <li><a href="/rendez-vous">Demande de visite/ Rendez-vous</a></li>
                <li><a href="/join-us">Nous rejoindre</a></li>
                <li><a href="/tarifs-et-frais">Tarfis et frais de scolarité</a></li>
              </ul>
            )}
          </li>

          <li><a href="/posts">Postes</a></li>

          <li
            className="dropdown-trigger"
            onMouseEnter={() => handleMouseEnter('parents')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/espace-parents">
              Espace Parents
              <ChevronDown size={16} />
            </a>
            {activeDropdown === 'parents' && (
              <ul className="dropdown-menu">
                <li><a href="/koolschool">KoolSchool</a></li>
                <li><a href="/faq">FAQ</a></li>
              </ul>
            )}
          </li>

          <li>
            {/* <a href="/blog">Contact</a> */}

            <button className='button1' onClick={() => setIsContactOpen(true)}>
              Nous contacter
            </button></li>

        </ul>

        {/* Bouton Appeler nous à droite */}
        <button className="call-button" onClick={() => setIsContactOpen(true)}>
          Appeler nous
          <Phone size={18} />
        </button>
      </div>
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      <style jsx>{`
        .navbar {
          background: #ffffff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
          
        }

        .navbar-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 120px;
        }

        .logo img {
          height: 110px;
          margin-left: 40px;
          width: auto;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2.5rem;
          margin: 0;
          padding: 0;
          align-items: center;
        }

        .nav-links > li {
          position: relative;
        }

        .nav-links a, .button1 {
          text-decoration: none;
          color: #333;
          font-family: 'Poppins', 'Inter', 'Roboto', sans-serif; /* Vous pouvez remplacer par votre police */
          // font-weight: 500;
          font-size: 16px;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: color 0.3s ease;
          padding: 1.5rem 0;
          font-weight: 600;
          background: transparent;
          border: none;
          border: 0;
          outline: 0;
          cursor: pointer;
        }

        .nav-links a:hover, .button1:hover {
          color: #2563eb;
        }

        .dropdown-trigger {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          border-radius: 3px;
          min-width: 200px;
          padding: 0.5rem 0;
          list-style: none;
          animation: slideDown 0.2s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-menu li {
          position: relative;
        }

        .dropdown-menu a {
          padding: 0.75rem 1.5rem;
          display: block;
          color: #555;
          font-size: 14px;
        }

        .dropdown-menu a:hover {
          // background: #f8fafc;
          color: #2563eb;
        }

        /* Nested dropdown (Lien 3) */
        .nested-dropdown {
          position: relative;
        }

        .nested-dropdown > a {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nested-menu {
          position: absolute;
          left: 100%;
          top: 0;
          background: white;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          border-radius: 3px;
          min-width: 180px;
          padding: 0.5rem 0;
          list-style: none;
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s ease;
        }

        .nested-dropdown:hover .nested-menu {
          opacity: 1;
          visibility: visible;
        }

        .call-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #e58b46ff 0%, #f7852eff 100%);
          color: white;
          border: none;
          padding: 0.875rem 1.75rem;
          border-radius: 10px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
        }

        .call-button:hover {
            background: #7e4f2cff;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .nav-links {
            gap: 1.5rem;
          }
          
          .nav-links a {
            font-size: 14px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;