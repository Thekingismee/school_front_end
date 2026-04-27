import React from "react";

const Button = ({
    children,
    onClick,
    href,
    type = "button",
    className = "",
    variant = "primary" // 'primary' | 'secondary'
}) => {
    const baseStyles = `
    .btn {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 24px 32px;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 700;
      color: #ffffff;
      background: #1e3a8a; /* AJOUTÉ : Bleu marine FIXE visible par défaut */
      border: none;
      cursor: pointer;
      overflow: hidden;
      text-decoration: none;
      transition: all 0.3s ease;
      z-index: 1;
      font-family: Arial, sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border-radius: 4px; /* AJOUTÉ : Petits coins arrondis */
    }

    /* Fond animé qui glisse depuis la gauche pour le survol */
    .btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #ffb347; /* Orange comme HomeGallery */
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      z-index: -1;
      border-radius: 4px;
    }

    /* Effet au hover - l'orange glisse et couvre le bleu */
    .btn:hover::before {
      transform: scaleX(1);
    }

    /* Couleur du texte au hover */
    .btn:hover {
      color: #0f172a; /* Texte foncé sur orange */
    }

    /* État focus pour accessibilité */
    .btn:focus-visible {
      outline: 2px solid #f97316;
      outline-offset: 2px;
    }

    /* État actif (clic) */
    .btn:active {
      transform: scale(0.98);
      transition: transform 0.1s ease;
    }

    /* Désactivé */
    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    }
  `;

    const props = {
        className: `btn ${className}`,
        onClick,
        type: href ? undefined : type,
        disabled:
            onClick === undefined && href === undefined ? false : undefined
    };

    return (
        <div className="btn-wrapper">
            {href ? (
                <a href={href} {...props}>
                    {children}
                </a>
            ) : (
                <button {...props}>{children}</button>
            )}
            <style jsx>{baseStyles}</style>
            <style jsx>{`
                .btn-wrapper {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    padding: 40px 0;
                }
            `}</style>
        </div>
    );
};

export default Button;
