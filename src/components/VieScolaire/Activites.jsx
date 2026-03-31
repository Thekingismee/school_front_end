import React from 'react';
import { 
  Palette, 
  Globe, 
  FlaskConical, 
  HeartPulse, 
  Leaf 
} from 'lucide-react';

const Activites = () => {
  const activites = [
    {
      id: 1,
      titre: 'Arts & Création',
      icone: Palette,
      couleur: '#e76f51',
      description: 'Ateliers de peinture, dessin, musique et théâtre pour développer la créativité et l\'expression artistique de chaque enfant.'
    },
    {
      id: 2,
      titre: 'Culture & Langues',
      icone: Globe,
      couleur: '#2a9d8f',
      description: 'Immersion linguistique, découverte des cultures du monde et ateliers de communication pour des citoyens du monde ouverts et tolérants.'
    },
    {
      id: 3,
      titre: 'Sciences & Logique',
      icone: FlaskConical,
      couleur: '#264653',
      description: 'Expérimentations scientifiques, programmation ludique et résolution de problèmes pour éveiller la curiosité intellectuelle.'
    },
    {
      id: 4,
      titre: 'Sport & Bien-être',
      icone: HeartPulse,
      couleur: '#f4a261',
      description: 'Activités physiques variées, yoga et méditation pour développer la motricité, la confiance en soi et l\'équilibre émotionnel.'
    },
    {
      id: 5,
      titre: 'Citoyenneté & Environnement',
      icone: Leaf,
      couleur: '#606c38',
      description: 'Projets écologiques, actions solidaires et engagement local pour former des citoyens responsables et conscients.'
    }
  ];

  return (
    <section className="activites-section">
      <div className="activites-container">
        {/* En-tête */}
        <div className="activites-header">
          <span className="activites-label">Nos Domaines</span>
          <h2 className="activites-title">Activités</h2>
          <p className="activites-intro">
            Un épanouissement complet par le découvert et la pratique
          </p>
        </div>

        {/* Grille 3-2 */}
        <div className="activites-grille">
          {activites.map((activite) => {
            const Icone = activite.icone;
            return (
              <article 
                key={activite.id} 
                className="activite-carte"
                style={{ '--couleur': activite.couleur }}
              >
                <div className="activite-icone">
                  <Icone size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="activite-titre">{activite.titre}</h3>
                
                <div className="activite-separateur" />
                
                <p className="activite-description">
                  {activite.description}
                </p>

                <div className="activite-point" />
              </article>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .activites-section {
          padding: 100px 24px;
          font-family: 'Georgia', 'Times New Roman', serif;
        }

        .activites-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* En-tête */
        .activites-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .activites-label {
          display: block;
          font-family: 'Arial', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 16px;
        }

        .activites-title {
          font-size: clamp(1.5rem, 5vw, 2.5rem);
          font-weight: 700;
          color: #0f172a;
          margin: 0;
          letter-spacing: 0.05em;
        }

        .activites-intro {
          font-family: 'Arial', sans-serif;
          font-size: 1.05rem;
          color: #78716c;
          margin: 0;
          font-weight: 400;
        }

        /* Grille 3-2 */
        .activites-grille {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        /* Carte individuelle - Style papier/carton */
        .activite-carte {
          position: relative;
          border-radius: 4px;
          padding: 40px 32px;
          text-align: center;
          border: 1px solid #e7e5e4;
          transition: all 0.25s ease;
        }

        /* Coins légèrement usés pour effet organique */
        .activite-carte::before {
          content: '';
          position: absolute;
          top: -1px;
          right: -1px;
          width: 20px;
          height: 20px;
          background: #ffffffff;
          border-bottom: 1px solid #e7e5e4;
          border-left: 1px solid #e7e5e4;
          border-radius: 0 0 0 4px;
        }

        /* Effet hover subtil */
        .activite-carte:hover {
          border-color: var(--couleur);
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.08);
        }

        /* Icône */
        .activite-icone {
          width: 64px;
          height: 64px;
          margin: 0 auto 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--couleur);
          background: #fafaf9;
          border-radius: 50%;
          border: 1px solid #e7e5e4;
          transition: all 0.25s ease;
        }

        .activite-carte:hover .activite-icone {
          background: var(--couleur);
          color: #ffffff;
          border-color: var(--couleur);
        }

        /* Titre */
        .activite-titre {
          font-size: 1.25rem;
          color: #292524;
          margin: 0 0 16px 0;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        /* Séparateur */
        .activite-separateur {
          width: 30px;
          height: 2px;
          background: var(--couleur);
          margin: 0 auto 20px;
          opacity: 0.6;
          transition: width 0.25s ease;
        }

        .activite-carte:hover .activite-separateur {
          width: 50px;
          opacity: 1;
        }

        /* Description */
        .activite-description {
          font-family: 'Arial', sans-serif;
          font-size: 0.95rem;
          line-height: 1.7;
          color: #57534e;
          margin: 0;
        }

        /* Point décoratif */
        .activite-point {
          position: absolute;
          bottom: 16px;
          right: 16px;
          width: 6px;
          height: 6px;
          background: var(--couleur);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .activite-carte:hover .activite-point {
          opacity: 0.4;
        }

        /* Responsive : 2 colonnes */
        @media (max-width: 900px) {
          .activites-grille {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }
        }

        /* Responsive : 1 colonne */
        @media (max-width: 600px) {
          .activites-section {
            padding: 60px 20px;
          }

          .activites-grille {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .activite-carte {
            padding: 32px 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default Activites;