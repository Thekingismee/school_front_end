import React, { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import ContactPopup from "./Accueil/ContactPopup";

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isContactOpen, setIsContactOpen] = useState(false);

    const handleMouseEnter = menu => {
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
                    <li>
                        <a href="/">Accueil</a>
                    </li>

                    {/* À propos de nous avec dropdown */}
                    <li
                        className="dropdown-trigger"
                        onMouseEnter={() => handleMouseEnter("about")}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="/about">
                            À propos de nous
                            <ChevronDown size={16} />
                        </a>
                        {activeDropdown === "about" && (
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="/LeGroupe">Le Groupe</a>
                                </li>
                                <li>
                                    <a href="/NotreEtablissement">
                                        Etablissement
                                    </a>
                                </li>
                                <li className="nested-dropdown">
                                    <a href="/ParcoursScolaire">
                                        Parcours Scolaire
                                        <ChevronDown size={14} />
                                    </a>
                                    <ul className="nested-menu">
                                        <li>
                                            <a href="/maternelle">Maternelle</a>
                                        </li>
                                        <li>
                                            <a href="/primaire">Primaire</a>
                                        </li>
                                        <li>
                                            <a href="/college">Collège</a>
                                        </li>
                                        <li>
                                            <a href="/lycee">Lycée</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/VieScolaire">Vie Scolaire</a>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Administration avec dropdown */}
                    <li
                        className="dropdown-trigger"
                        onMouseEnter={() => handleMouseEnter("admin")}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="/administration">
                            Admissions
                            <ChevronDown size={16} />
                        </a>
                        {activeDropdown === "admin" && (
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="/why">Pourquoi L'Atome</a>
                                </li>
                                <li>
                                    <a href="/ModalitesInscription">
                                        Modalites d'inscription
                                    </a>
                                </li>
                                <li>
                                    <a href="/inscription">
                                        Demande d'inscription
                                    </a>
                                </li>
                                <li>
                                    <a href="/rendez-vous">
                                        Demande de visite/ Rendez-vous
                                    </a>
                                </li>
                                <li>
                                    <a href="/join-us">Nous rejoindre</a>
                                </li>
                                <li>
                                    <a href="/tarifs-et-frais">
                                        Tarfis et frais de scolarité
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <a href="/posts">Postes</a>
                    </li>

                    <li
                        className="dropdown-trigger"
                        onMouseEnter={() => handleMouseEnter("parents")}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="/espace-parents">
                            Espace Parents
                            <ChevronDown size={16} />
                        </a>
                        {activeDropdown === "parents" && (
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="/koolschool">KoolSchool</a>
                                </li>
                                <li>
                                    <a href="/faq">FAQ</a>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        {/* <a href="/blog">Contact</a> */}

                        <button
                            className="button1"
                            onClick={() => setIsContactOpen(true)}
                        >
                            Nous contacter
                        </button>
                    </li>
                </ul>

                {/* Bouton Appeler nous à droite */}
                <button
                    className="call-button"
                    onClick={() => setIsContactOpen(true)}
                >
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

                .nav-links a,
                .button1 {
                    text-decoration: none;
                    color: #333;
                    font-family: "Poppins", "Inter", "Roboto", sans-serif; /* Vous pouvez remplacer par votre police */
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

                .nav-links a:hover,
                .button1:hover {
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
                    background: linear-gradient(
                        135deg,
                        #e58b46ff 0%,
                        #f7852eff 100%
                    );
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











// import React, { useState, useEffect } from "react";
// import { ChevronDown, Phone, Menu, X } from "lucide-react";
// import ContactPopup from "./Accueil/ContactPopup";

// const Navbar = () => {
//     const [activeDropdown, setActiveDropdown] = useState(null);
//     const [isContactOpen, setIsContactOpen] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [mobileOpenSubmenus, setMobileOpenSubmenus] = useState({});

//     // Toggle pour les sous-menus mobiles (accordéon)
//     const toggleMobileSubmenu = (key) => {
//         setMobileOpenSubmenus(prev => ({
//             ...prev,
//             [key]: !prev[key]
//         }));
//     };

//     // Fermer le menu mobile quand on clique sur un lien
//     const handleMobileLinkClick = () => {
//         setIsMobileMenuOpen(false);
//         setMobileOpenSubmenus({});
//     };

//     // Fermer le menu si on redimensionne vers desktop
//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth > 768) {
//                 setIsMobileMenuOpen(false);
//                 setMobileOpenSubmenus({});
//             }
//         };
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     // Empêcher le scroll du body quand le menu mobile est ouvert
//     useEffect(() => {
//         document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
//         return () => { document.body.style.overflow = 'unset'; };
//     }, [isMobileMenuOpen]);

//     const handleMouseEnter = menu => setActiveDropdown(menu);
//     const handleMouseLeave = () => setActiveDropdown(null);

//     return (
//         <nav className="navbar">
//             <div className="navbar-container">
//                 {/* Logo */}
//                 <div className="logo">
//                     <img src="/Logo Atome-AR-FR+Slogan-Final.png" alt="Logo" />
//                 </div>

//                 {/* Hamburger Menu (Mobile) */}
//                 <button 
//                     className="mobile-toggle"
//                     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                     aria-label="Toggle menu"
//                 >
//                     {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                 </button>

//                 {/* Liens de navigation */}
//                 <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
//                     <li>
//                         <a href="/" onClick={handleMobileLinkClick}>Accueil</a>
//                     </li>

//                     {/* À propos de nous - Dropdown */}
//                     <li className="dropdown-trigger">
//                         {/* Version Desktop (hover) */}
//                         <a 
//                             href="/about" 
//                             className="desktop-only"
//                             onMouseEnter={() => handleMouseEnter("about")}
//                             onMouseLeave={handleMouseLeave}
//                         >
//                             À propos de nous
//                             <ChevronDown size={16} />
//                         </a>
                        
//                         {/* Version Mobile (click) */}
//                         <button 
//                             className="mobile-only dropdown-toggle"
//                             onClick={() => toggleMobileSubmenu('about')}
//                         >
//                             À propos de nous
//                             <ChevronDown 
//                                 size={16} 
//                                 className={`chevron ${mobileOpenSubmenus['about'] ? 'open' : ''}`} 
//                             />
//                         </button>
                        
//                         {/* Dropdown Menu */}
//                         <ul className={`dropdown-menu ${activeDropdown === "about" ? 'desktop-visible' : ''} ${mobileOpenSubmenus['about'] ? 'mobile-visible' : ''}`}>
//                             <li><a href="/LeGroupe" onClick={handleMobileLinkClick}>Le Groupe</a></li>
//                             <li><a href="/NotreEtablissement" onClick={handleMobileLinkClick}>Etablissement</a></li>
                            
//                             {/* Nested Dropdown - Parcours Scolaire */}
//                             <li className="nested-dropdown">
//                                 <a href="/ParcoursScolaire" className="desktop-only">
//                                     Parcours Scolaire
//                                     <ChevronDown size={14} />
//                                 </a>
//                                 <button 
//                                     className="mobile-only dropdown-toggle nested-toggle"
//                                     onClick={() => toggleMobileSubmenu('parcours')}
//                                 >
//                                     Parcours Scolaire
//                                     <ChevronDown 
//                                         size={14} 
//                                         className={`chevron ${mobileOpenSubmenus['parcours'] ? 'open' : ''}`} 
//                                     />
//                                 </button>
//                                 <ul className={`nested-menu ${mobileOpenSubmenus['parcours'] ? 'mobile-visible' : ''}`}>
//                                     <li><a href="/maternelle" onClick={handleMobileLinkClick}>Maternelle</a></li>
//                                     <li><a href="/primaire" onClick={handleMobileLinkClick}>Primaire</a></li>
//                                     <li><a href="/college" onClick={handleMobileLinkClick}>Collège</a></li>
//                                     <li><a href="/lycee" onClick={handleMobileLinkClick}>Lycée</a></li>
//                                 </ul>
//                             </li>
                            
//                             <li><a href="/VieScolaire" onClick={handleMobileLinkClick}>Vie Scolaire</a></li>
//                         </ul>
//                     </li>

//                     {/* Admissions - Dropdown */}
//                     <li className="dropdown-trigger">
//                         <a 
//                             href="/administration" 
//                             className="desktop-only"
//                             onMouseEnter={() => handleMouseEnter("admin")}
//                             onMouseLeave={handleMouseLeave}
//                         >
//                             Admissions
//                             <ChevronDown size={16} />
//                         </a>
//                         <button 
//                             className="mobile-only dropdown-toggle"
//                             onClick={() => toggleMobileSubmenu('admin')}
//                         >
//                             Admissions
//                             <ChevronDown 
//                                 size={16} 
//                                 className={`chevron ${mobileOpenSubmenus['admin'] ? 'open' : ''}`} 
//                             />
//                         </button>
//                         <ul className={`dropdown-menu ${activeDropdown === "admin" ? 'desktop-visible' : ''} ${mobileOpenSubmenus['admin'] ? 'mobile-visible' : ''}`}>
//                             <li><a href="/why" onClick={handleMobileLinkClick}>Pourquoi L'Atome</a></li>
//                             <li><a href="/ModalitesInscription" onClick={handleMobileLinkClick}>Modalites d'inscription</a></li>
//                             <li><a href="/inscription" onClick={handleMobileLinkClick}>Demande d'inscription</a></li>
//                             <li><a href="/rendez-vous" onClick={handleMobileLinkClick}>Demande de visite/ Rendez-vous</a></li>
//                             <li><a href="/join-us" onClick={handleMobileLinkClick}>Nous rejoindre</a></li>
//                             <li><a href="/tarifs-et-frais" onClick={handleMobileLinkClick}>Tarifs et frais de scolarité</a></li>
//                         </ul>
//                     </li>

//                     <li>
//                         <a href="/posts" onClick={handleMobileLinkClick}>Postes</a>
//                     </li>

//                     {/* Espace Parents - Dropdown */}
//                     <li className="dropdown-trigger">
//                         <a 
//                             href="/espace-parents" 
//                             className="desktop-only"
//                             onMouseEnter={() => handleMouseEnter("parents")}
//                             onMouseLeave={handleMouseLeave}
//                         >
//                             Espace Parents
//                             <ChevronDown size={16} />
//                         </a>
//                         <button 
//                             className="mobile-only dropdown-toggle"
//                             onClick={() => toggleMobileSubmenu('parents')}
//                         >
//                             Espace Parents
//                             <ChevronDown 
//                                 size={16} 
//                                 className={`chevron ${mobileOpenSubmenus['parents'] ? 'open' : ''}`} 
//                             />
//                         </button>
//                         <ul className={`dropdown-menu ${activeDropdown === "parents" ? 'desktop-visible' : ''} ${mobileOpenSubmenus['parents'] ? 'mobile-visible' : ''}`}>
//                             <li><a href="/koolschool" onClick={handleMobileLinkClick}>KoolSchool</a></li>
//                             <li><a href="/faq" onClick={handleMobileLinkClick}>FAQ</a></li>
//                         </ul>
//                     </li>

//                     <li>
//                         <button className="button1" onClick={() => { setIsContactOpen(true); handleMobileLinkClick(); }}>
//                             Nous contacter
//                         </button>
//                     </li>
//                 </ul>

//                 {/* Bouton Appeler nous (Desktop) */}
//                 <button className="call-button desktop-only" onClick={() => setIsContactOpen(true)}>
//                     Appeler nous
//                     <Phone size={18} />
//                 </button>
//             </div>

//             {/* Overlay pour mobile */}
//             {isMobileMenuOpen && <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)} />}

//             <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

//             <style jsx>{`
//                 .navbar {
//                     background: #ffffff;
//                     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//                     position: sticky;
//                     top: 0;
//                     z-index: 1000;
//                 }

//                 .navbar-container {
//                     max-width: 1400px;
//                     margin: 0 auto;
//                     padding: 0 2rem;
//                     display: flex;
//                     align-items: center;
//                     justify-content: space-between;
//                     height: 120px;
//                     position: relative;
//                 }

//                 .logo img {
//                     height: 110px;
//                     margin-left: 40px;
//                     width: auto;
//                 }

//                 .nav-links {
//                     display: flex;
//                     list-style: none;
//                     gap: 2.5rem;
//                     margin: 0;
//                     padding: 0;
//                     align-items: center;
//                 }

//                 .nav-links > li {
//                     position: relative;
//                 }

//                 .nav-links a,
//                 .button1,
//                 .dropdown-toggle {
//                     text-decoration: none;
//                     color: #333;
//                     font-family: "Poppins", "Inter", "Roboto", sans-serif;
//                     font-size: 16px;
//                     display: flex;
//                     align-items: center;
//                     gap: 5px;
//                     transition: color 0.3s ease;
//                     padding: 1.5rem 0;
//                     font-weight: 600;
//                     background: transparent;
//                     border: none;
//                     outline: 0;
//                     cursor: pointer;
//                 }

//                 .dropdown-toggle {
//                     width: 100%;
//                     justify-content: space-between;
//                     padding: 1rem 0;
//                 }

//                 .nav-links a:hover,
//                 .button1:hover {
//                     color: #2563eb;
//                 }

//                 .chevron {
//                     transition: transform 0.3s ease;
//                 }
//                 .chevron.open {
//                     transform: rotate(180deg);
//                 }

//                 /* === DESKTOP DROPDOWNS === */
//                 .dropdown-trigger {
//                     position: relative;
//                 }

//                 .dropdown-menu {
//                     position: absolute;
//                     top: 100%;
//                     left: 0;
//                     background: white;
//                     box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
//                     border-radius: 3px;
//                     min-width: 200px;
//                     padding: 0.5rem 0;
//                     list-style: none;
//                     animation: slideDown 0.2s ease;
//                     display: none;
//                     z-index: 1001;
//                 }

//                 .dropdown-menu.desktop-visible {
//                     display: block;
//                 }

//                 @keyframes slideDown {
//                     from { opacity: 0; transform: translateY(-10px); }
//                     to { opacity: 1; transform: translateY(0); }
//                 }

//                 .dropdown-menu li { position: relative; }

//                 .dropdown-menu a {
//                     padding: 0.75rem 1.5rem;
//                     display: block;
//                     color: #555;
//                     font-size: 14px;
//                 }

//                 .dropdown-menu a:hover { color: #2563eb; }

//                 /* Nested dropdown desktop */
//                 .nested-dropdown { position: relative; }
//                 .nested-dropdown > a {
//                     display: flex;
//                     justify-content: space-between;
//                     align-items: center;
//                 }

//                 .nested-menu {
//                     position: absolute;
//                     left: 100%;
//                     top: 0;
//                     background: white;
//                     box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
//                     border-radius: 3px;
//                     min-width: 180px;
//                     padding: 0.5rem 0;
//                     list-style: none;
//                     display: none;
//                 }

//                 .nested-dropdown:hover .nested-menu {
//                     display: block;
//                 }

//                 /* === BOUTONS === */
//                 .call-button {
//                     display: flex;
//                     align-items: center;
//                     gap: 8px;
//                     background: linear-gradient(135deg, #e58b46ff 0%, #f7852eff 100%);
//                     color: white;
//                     border: none;
//                     padding: 0.875rem 1.75rem;
//                     border-radius: 10px;
//                     font-weight: 600;
//                     font-size: 15px;
//                     cursor: pointer;
//                 }
//                 .call-button:hover { background: #7e4f2cff; }

//                 .button1 {
//                     background: linear-gradient(135deg, #e58b46ff 0%, #f7852eff 100%);
//                     color: white;
//                     padding: 0.75rem 1.5rem;
//                     border-radius: 8px;
//                     font-weight: 600;
//                 }

//                 /* === MOBILE TOGGLE === */
//                 .mobile-toggle {
//                     display: none;
//                     background: none;
//                     border: none;
//                     cursor: pointer;
//                     padding: 0.5rem;
//                     color: #333;
//                     z-index: 1002;
//                 }

//                 /* === MOBILE OVERLAY === */
//                 .mobile-overlay {
//                     display: none;
//                     position: fixed;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     bottom: 0;
//                     background: rgba(0,0,0,0.5);
//                     z-index: 999;
//                 }

//                 /* === RESPONSIVE === */
//                 @media (max-width: 1024px) {
//                     .nav-links { gap: 1.5rem; }
//                     .nav-links a { font-size: 14px; }
//                 }

//                 @media (max-width: 768px) {
//                     .navbar-container {
//                         height: 80px;
//                         padding: 0 1rem;
//                     }

//                     .logo img {
//                         height: 70px;
//                         margin-left: 0;
//                     }

//                     /* Afficher le hamburger */
//                     .mobile-toggle {
//                         display: flex;
//                     }

//                     /* Cacher les éléments desktop */
//                     .desktop-only { display: none !important; }
//                     .mobile-only { display: flex !important; }
//                     .call-button.desktop-only { display: none; }

//                     /* Menu mobile */
//                     .nav-links {
//                         position: fixed;
//                         top: 80px;
//                         left: 0;
//                         right: 0;
//                         bottom: 0;
//                         background: white;
//                         flex-direction: column;
//                         align-items: flex-start;
//                         padding: 1rem 1.5rem;
//                         gap: 0;
//                         overflow-y: auto;
//                         transform: translateY(-100%);
//                         opacity: 0;
//                         visibility: hidden;
//                         transition: all 0.3s ease;
//                         z-index: 1000;
//                     }

//                     .nav-links.mobile-open {
//                         transform: translateY(0);
//                         opacity: 1;
//                         visibility: visible;
//                     }

//                     .nav-links > li {
//                         width: 100%;
//                         border-bottom: 1px solid #eee;
//                     }

//                     .nav-links a,
//                     .nav-links .button1,
//                     .nav-links .dropdown-toggle {
//                         width: 100%;
//                         padding: 1rem 0;
//                         justify-content: space-between;
//                     }

//                     /* Dropdowns mobiles - style accordéon */
//                     .dropdown-menu {
//                         position: static;
//                         box-shadow: none;
//                         min-width: 100%;
//                         padding: 0;
//                         max-height: 0;
//                         overflow: hidden;
//                         transition: max-height 0.3s ease;
//                         display: block !important;
//                         background: #f9f9f9;
//                         border-radius: 0;
//                     }

//                     .dropdown-menu.mobile-visible {
//                         max-height: 500px;
//                     }

//                     .dropdown-menu a {
//                         padding: 0.875rem 1rem 0.875rem 1.5rem;
//                         font-size: 14px;
//                         color: #444;
//                     }

//                     /* Nested menu mobile */
//                     .nested-menu {
//                         position: static;
//                         box-shadow: none;
//                         min-width: 100%;
//                         padding: 0;
//                         max-height: 0;
//                         overflow: hidden;
//                         transition: max-height 0.3s ease;
//                         display: block !important;
//                         background: #f0f0f0;
//                     }

//                     .nested-menu.mobile-visible {
//                         max-height: 300px;
//                     }

//                     .nested-menu a {
//                         padding: 0.75rem 1rem 0.75rem 2.5rem;
//                         font-size: 13px;
//                     }

//                     /* Afficher overlay */
//                     .mobile-overlay {
//                         display: block;
//                     }

//                     /* Bouton contact en bas du menu mobile */
//                     .nav-links > li:last-child {
//                         padding: 1rem 0;
//                         border-bottom: none;
//                     }
//                 }
//             `}</style>
//         </nav>
//     );
// };

// export default Navbar;