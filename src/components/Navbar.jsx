import React, { useState, useEffect } from "react";
import { ChevronDown, Phone, Menu, X } from "lucide-react";
import ContactPopup from "./Accueil/ContactPopup";

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileOpenSubmenus, setMobileOpenSubmenus] = useState({});

    const toggleMobileSubmenu = key => {
        setMobileOpenSubmenus(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleMobileLinkClick = () => {
        setIsMobileMenuOpen(false);
        setMobileOpenSubmenus({});
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMobileMenuOpen(false);
                setMobileOpenSubmenus({});
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    const handleMouseEnter = menu => setActiveDropdown(menu);
    const handleMouseLeave = () => setActiveDropdown(null);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="logo">
                    <img src="/Logo Atome-AR-FR+Slogan-Final.png" alt="Logo" />
                </div>

                {/* Hamburger (mobile) */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Nav Links */}
                <ul className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
                    <li>
                        <a href="/" onClick={handleMobileLinkClick}>Accueil</a>
                    </li>

                    {/* À propos de nous */}
                    <li
                        className="dropdown-trigger"
                        onMouseEnter={() => handleMouseEnter("about")}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Desktop */}
                        <a href="/about" className="desktop-link">
                            À propos de nous <ChevronDown size={16} />
                        </a>
                        {/* Mobile */}
                        <button
                            className="mobile-toggle-btn"
                            onClick={() => toggleMobileSubmenu("about")}
                        >
                            À propos de nous
                            <ChevronDown
                                size={16}
                                className={`chevron ${mobileOpenSubmenus["about"] ? "open" : ""}`}
                            />
                        </button>

                        <ul className={`dropdown-menu ${activeDropdown === "about" ? "desktop-visible" : ""} ${mobileOpenSubmenus["about"] ? "mobile-visible" : ""}`}>
                            <li><a href="/LeGroupe" onClick={handleMobileLinkClick}>Le Groupe</a></li>
                            <li><a href="/NotreEtablissement" onClick={handleMobileLinkClick}>Etablissement</a></li>

                            {/* Parcours Scolaire nested */}
                            <li className="nested-dropdown">
                                <a href="/ParcoursScolaire" className="desktop-link">
                                    Parcours Scolaire <ChevronDown size={14} />
                                </a>
                                <button
                                    className="mobile-toggle-btn nested-toggle-btn"
                                    onClick={() => toggleMobileSubmenu("parcours")}
                                >
                                    Parcours Scolaire
                                    <ChevronDown
                                        size={14}
                                        className={`chevron ${mobileOpenSubmenus["parcours"] ? "open" : ""}`}
                                    />
                                </button>
                                <ul className={`nested-menu ${mobileOpenSubmenus["parcours"] ? "mobile-visible" : ""}`}>
                                    <li><a href="/maternelle" onClick={handleMobileLinkClick}>Maternelle</a></li>
                                    <li><a href="/primaire" onClick={handleMobileLinkClick}>Primaire</a></li>
                                    <li><a href="/college" onClick={handleMobileLinkClick}>Collège</a></li>
                                    <li><a href="/lycee" onClick={handleMobileLinkClick}>Lycée</a></li>
                                </ul>
                            </li>

                            <li><a href="/VieScolaire" onClick={handleMobileLinkClick}>Vie Scolaire</a></li>
                        </ul>
                    </li>

                    {/* Admissions */}
                    <li
                        className="dropdown-trigger"
                        onMouseEnter={() => handleMouseEnter("admin")}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="/admission" className="desktop-link">
                            Admissions <ChevronDown size={16} />
                        </a>
                        <button
                            className="mobile-toggle-btn"
                            onClick={() => toggleMobileSubmenu("admin")}
                        >
                            Admissions
                            <ChevronDown
                                size={16}
                                className={`chevron ${mobileOpenSubmenus["admin"] ? "open" : ""}`}
                            />
                        </button>

                        <ul className={`dropdown-menu ${activeDropdown === "admin" ? "desktop-visible" : ""} ${mobileOpenSubmenus["admin"] ? "mobile-visible" : ""}`}>
                            <li><a href="/why" onClick={handleMobileLinkClick}>Pourquoi L'Atome ?</a></li>
                            <li><a href="/ModalitesInscription" onClick={handleMobileLinkClick}>Modalites d'inscription</a></li>
                            <li><a href="/inscription" onClick={handleMobileLinkClick}>Demande d'inscription</a></li>
                            <li><a href="/rendez-vous" onClick={handleMobileLinkClick}>Demande de visite / Rendez-vous</a></li>
                            <li><a href="/join-us" onClick={handleMobileLinkClick}>Nous rejoindre</a></li>
                            {/* <li><a href="/tarifs-et-frais" onClick={handleMobileLinkClick}>Tarifs et frais de scolarité</a></li> */}
                        </ul>
                    </li>

                    {/* <li>
                        <a href="/posts" onClick={handleMobileLinkClick}>Postes</a>
                    </li> */}

                    {/* Espace Parents */}
                    <li
                        className="dropdown-trigger"
                        onMouseEnter={() => handleMouseEnter("parents")}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="/espace-parents" className="desktop-link">
                            Espace Parents <ChevronDown size={16} />
                        </a>
                        <button
                            className="mobile-toggle-btn"
                            onClick={() => toggleMobileSubmenu("parents")}
                        >
                            Espace Parents
                            <ChevronDown
                                size={16}
                                className={`chevron ${mobileOpenSubmenus["parents"] ? "open" : ""}`}
                            />
                        </button>

                        <ul className={`dropdown-menu ${activeDropdown === "parents" ? "desktop-visible" : ""} ${mobileOpenSubmenus["parents"] ? "mobile-visible" : ""}`}>
                            <li><a href="/atomeApp" onClick={handleMobileLinkClick}>Application GS l'Atome</a></li>
                            <li><a href="/faq" onClick={handleMobileLinkClick}>FAQ</a></li>
                        </ul>
                    </li>

                    <li className="contact-li">
                        <button
                            className="button1"
                            onClick={() => {
                                setIsContactOpen(true);
                                handleMobileLinkClick();
                            }}
                        >
                            Nous contacter
                        </button>
                    </li>
                </ul>

                {/* Call button (desktop only) */}
                                 <a
                                href="tel:+212522903052"
                    className="call-button"
                >
                    Appeler nous <Phone size={18} />
                </a>
                           
            </div>

            {/* Overlay mobile */}
            {isMobileMenuOpen && (
                <div
                    className="mobile-overlay"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            <ContactPopup
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />

            <style jsx>{`
                /* ===== BASE ===== */
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
                    position: relative;
                }

                .logo img {
                    height: 110px;
                    margin-left: 40px;
                    width: auto;
                }

                /* ===== NAV LINKS ===== */
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
                    font-family: "Poppins", "Inter", "Roboto", sans-serif;
                    font-size: 16px;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    transition: color 0.3s ease;
                    padding: 1.5rem 0;
                    font-weight: 600;
                    background: transparent;
                    border: none;
                    outline: 0;
                    cursor: pointer;
                }

                .nav-links a:hover,
                .button1:hover {
                    color: #2563eb;
                }

                /* ===== DROPDOWN DESKTOP ===== */
                .dropdown-trigger {
                    position: relative;
                }

                .dropdown-menu {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    background: white;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
                    border-radius: 3px;
                    min-width: 220px;
                    padding: 0.5rem 0;
                    list-style: none;
                    z-index: 1001;
                    animation: slideDown 0.2s ease;
                }

                .dropdown-menu.desktop-visible {
                    display: block;
                }

                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                .dropdown-menu li {
                    position: relative;
                }

                .dropdown-menu a {
                    padding: 0.75rem 1.5rem;
                    display: flex;
                    color: #555;
                    font-size: 14px;
                    font-weight: 500;
                }

                .dropdown-menu a:hover {
                    color: #2563eb;
                }

                /* Nested */
                .nested-dropdown {
                    position: relative;
                }

                .nested-dropdown > .desktop-link {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .nested-menu {
                    display: none;
                    position: absolute;
                    left: 100%;
                    top: 0;
                    background: white;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
                    border-radius: 3px;
                    min-width: 180px;
                    padding: 0.5rem 0;
                    list-style: none;
                    z-index: 1002;
                }

                .nested-dropdown:hover .nested-menu {
                    display: block;
                }

                /* ===== CALL BUTTON ===== */
                .call-button {
                text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: linear-gradient(135deg, #e58b46 0%, #f7852e 100%);
                    color: white;
                    border: none;
                    padding: 0.875rem 1.75rem;
                    border-radius: 10px;
                    font-weight: 600;
                    font-size: 15px;
                    cursor: pointer;
                    transition: background 0.3s ease;
                    white-space: nowrap;
                }

                .call-button:hover {
                    background: #7e4f2c;
                }

                /* ===== MOBILE TOGGLE BUTTON (hamburger) ===== */
                .mobile-toggle {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0.5rem;
                    color: #333;
                    z-index: 1002;
                }

                /* Mobile dropdown buttons (hidden on desktop) */
                .mobile-toggle-btn {
                    display: none;
                }

                /* Chevron animation */
                .chevron {
                    transition: transform 0.3s ease;
                    flex-shrink: 0;
                }
                .chevron.open {
                    transform: rotate(180deg);
                }

                /* ===== OVERLAY ===== */
                .mobile-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.45);
                    z-index: 999;
                }

                /* ===== RESPONSIVE ===== */
                @media (max-width: 1024px) {
                    .nav-links { gap: 1.5rem; }
                    .nav-links a { font-size: 14px; }
                }

                @media (max-width: 768px) {
                    /* Navbar height réduite */
                    .navbar-container {
                        height: 75px;
                        padding: 0 1.25rem;
                    }

                    .logo img {
                        height: 65px;
                        margin-left: 0;
                    }

                    /* Afficher hamburger */
                    .mobile-toggle {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    /* Cacher call button desktop */
                    .call-button {
                        display: none;
                    }

                    /* Cacher liens desktop dans les dropdowns */
                    .desktop-link {
                        display: none !important;
                    }

                    /* Afficher boutons mobile */
                    .mobile-toggle-btn {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 100%;
                        background: none;
                        border: none;
                        cursor: pointer;
                        color: #333;
                        font-family: "Poppins", "Inter", "Roboto", sans-serif;
                        font-size: 15px;
                        font-weight: 600;
                        padding: 1rem 0;
                        outline: 0;
                        transition: color 0.3s ease;
                    }

                    .mobile-toggle-btn:hover {
                        color: #2563eb;
                    }

                    .nested-toggle-btn {
                        padding: 0.75rem 1.5rem;
                        font-size: 14px;
                        font-weight: 500;
                        color: #555;
                    }

                    /* Menu mobile - slide depuis le haut */
                    .nav-links {
                        position: fixed;
                        top: 75px;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: white;
                        flex-direction: column;
                        align-items: stretch;
                        padding: 0.5rem 1.5rem 2rem;
                        gap: 0;
                        overflow-y: auto;
                        transform: translateX(100%);
                        opacity: 0;
                        visibility: hidden;
                        transition: transform 0.3s ease, opacity 0.3s ease;
                        z-index: 1000;
                    }

                    .nav-links.mobile-open {
                        transform: translateX(0);
                        opacity: 1;
                        visibility: visible;
                    }

                    /* Séparateurs entre items */
                    .nav-links > li {
                        border-bottom: 1px solid #f0f0f0;
                        width: 100%;
                    }

                    .nav-links > li:last-child {
                        border-bottom: none;
                        padding: 1rem 0;
                    }

                    /* Liens simples mobile */
                    .nav-links > li > a {
                        padding: 1rem 0;
                        font-size: 15px;
                        width: 100%;
                        justify-content: space-between;
                    }

                    /* Dropdown mobile - accordéon */
                    .dropdown-menu {
                        position: static !important;
                        box-shadow: none;
                        border-radius: 0;
                        min-width: 100%;
                        padding: 0;
                        background: #f8f9fb;
                        border-left: 3px solid #e58b46;
                        margin-bottom: 0.5rem;
                        max-height: 0;
                        overflow: hidden;
                        transition: max-height 0.35s ease;
                        animation: none;

                        /* Écraser display:none du desktop */
                        display: block !important;
                    }

                    .dropdown-menu.mobile-visible {
                        max-height: 600px;
                    }

                    .dropdown-menu a {
                        padding: 0.8rem 1rem 0.8rem 1.25rem;
                        font-size: 14px;
                        color: #444;
                        font-weight: 500;
                    }

                    .dropdown-menu a:hover {
                        color: #2563eb;
                        background: #f0f4ff;
                    }

                    /* Nested menu mobile */
                    .nested-menu {
                        position: static !important;
                        box-shadow: none;
                        background: #eef0f5;
                        border-left: 3px solid #2563eb;
                        border-radius: 0;
                        min-width: 100%;
                        padding: 0;
                        max-height: 0;
                        overflow: hidden;
                        transition: max-height 0.3s ease;
                        display: block !important;
                        margin-left: 1rem;
                    }

                    .nested-menu.mobile-visible {
                        max-height: 300px;
                    }

                    .nested-menu a {
                        padding: 0.7rem 1rem 0.7rem 1.25rem;
                        font-size: 13px;
                        color: #555;
                    }

                    /* Bouton contact mobile */
                    .contact-li {
                        padding: 1rem 0 !important;
                        border-bottom: none !important;
                    }

                    .button1 {
                        background: linear-gradient(135deg, #e58b46 0%, #f7852e 100%);
                        color: white !important;
                        padding: 0.85rem 1.5rem !important;
                        border-radius: 10px;
                        width: 100%;
                        justify-content: center !important;
                        font-size: 15px !important;
                        transition: background 0.3s ease;
                    }

                    .button1:hover {
                        background: #7e4f2c !important;
                        color: white !important;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;