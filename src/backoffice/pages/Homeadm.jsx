import React from 'react';

const Homeadm = () => {
  return (
    <>
      {/* Styles encapsulés pour un fichier autonome. 
          En production, préférez un fichier CSS séparé ou CSS Modules. */}
      <style>
        {`
          .home-root {
            /* Centre verticalement et horizontalement sur tout l'écran */
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            width: 100%;
            
            /* CONTRAINTE RESPECTÉE : aucun fond */
            background: none !important;
            margin: 0;
            padding: 2rem;
            box-sizing: border-box;
          }

          .links-container {
            display: flex;
            gap: 1.5rem;
            flex-wrap: wrap;
            justify-content: center;
          }

          .nav-link {
            text-decoration: none;
            color: #1a202c;
            font-family: system-ui, -apple-system, sans-serif;
            font-size: 1rem;
            font-weight: 500;
            letter-spacing: 0.02em;
            padding: 0.85rem 1.6rem;
            border-radius: 10px;
            border: 1.5px solid #cbd5e0;
            
            /* Aucun fond sur les liens non plus */
            background: none;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            white-space: nowrap;
          }

          .nav-link:hover {
            color: #2563eb;
            border-color: #2563eb;
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(37, 99, 235, 0.15);
          }

          .nav-link:active {
            transform: translateY(0);
            box-shadow: 0 2px 8px rgba(37, 99, 235, 0.1);
          }
        `}
      </style>

      <main className="home-root">
        <nav className="links-container" aria-label="Navigation principale">
          <a href="/inscriptions" className="nav-link">Inscriptions</a>
          <a href="/messages" className="nav-link">Messages</a>
          <a href="/rendez-vous-liste" className="nav-link">Liste des rendez vous</a>
          <a href="/joinUs" className="nav-link">listes des demandes</a>
          <a href="/ActualitesList" className="nav-link">ActualitesList</a>
        </nav>
      </main>
    </>
  );
};

export default Homeadm;