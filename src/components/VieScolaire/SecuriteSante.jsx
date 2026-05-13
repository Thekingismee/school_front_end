// import React from 'react';

// const SecuriteSante = () => {
//   return (
//     <section className="securite-section">
//       <div className="securite-container">
//         {/* Paragraphe central */}
//         <div className="securite-intro">
//           <span className="securite-label">Notre Engagement</span>
//           <h2 className="securite-title">Sécurité & Santé</h2>
//           <p className="securite-texte">
//             La sécurité et le bien-être de vos enfants sont au cœur de nos préoccupations. 
//             Nous mettons en place des mesures rigoureuses pour garantir un environnement 
//             sain, protégé et bienveillant, où chaque élève peut évoluer en toute sérénité.
//           </p>
//         </div>

//         {/* Deux blocs côte à côte */}
//         <div className="securite-grille">
//           {/* Bloc 1 : Environnement protégé */}
//           <div className="securite-bloc">
//             <div className="securite-icone">
//               <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//               </svg>
//             </div>
//             <h3 className="securite-bloc-titre">
//               Un environnement protégé, sain et bienveillant
//             </h3>
//             <p className="securite-bloc-texte">
//               La sécurité des élèves est une priorité absolue. Nos établissements sont 
//               équipés de systèmes de surveillance modernes, de contrôles d'accès stricts 
//               et de protocoles d'urgence éprouvés. Les espaces sont conçus pour minimiser 
//               les risques et favoriser l'épanouissement dans un cadre sécurisé.
//             </p>
//             <ul className="securite-liste">
//               <li>Surveillance vidéo 24h/24</li>
//               <li>Contrôle d'accès sécurisé</li>
//               <li>Protocoles d'urgence testés régulièrement</li>
//               <li>Espaces sans danger adaptés aux enfants</li>
//             </ul>
//           </div>

//           {/* Bloc 2 : Encadrement médical */}
//           <div className="securite-bloc">
//             <div className="securite-icone securite-icone--vert">
//               <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                 <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
//               </svg>
//             </div>
//             <h3 className="securite-bloc-titre">
//               Un encadrement médical rigoureux
//             </h3>
//             <p className="securite-bloc-texte">
//               Chaque site dispose d'une infirmerie, d'un personnel qualifié et d'un 
//               protocole clair en cas d'urgence. Notre équipe médicale assure un suivi 
//               quotidien de la santé des élèves et intervient immédiatement si nécessaire. 
//               Les parents sont informés en temps réel de toute situation.
//             </p>
//             <ul className="securite-liste">
//               <li>Infirmerie sur chaque site</li>
//               <li>Personnel médical qualifié présent</li>
//               <li>Protocoles d'urgence clairs et efficaces</li>
//               <li>Communication immédiate avec les parents</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .securite-section {
//           padding: 80px 24px;
//           font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
//         }

//         .securite-container {
//           max-width: 1000px;
//           margin: 0 auto;
//         }

//         /* Introduction centrale */
//         .securite-intro {
//           text-align: center;
//           max-width: 700px;
//           margin: 0 auto 60px;
//         }

//         .securite-label {
//           display: block;
//           font-family: 'Arial', sans-serif;
//           font-size: 0.875rem;
//           font-weight: 600;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: #f97316;
//           margin-bottom: 16px;
//         }

//         .securite-title {
//           font-family: Georgia, serif;
//           font-size: 2.2rem;
//           color: #1a1a2e;
//           margin: 0 0 24px 0;
//           font-weight: 600;
//         }

//         .securite-texte {
//           font-size: 1.1rem;
//           line-height: 1.8;
//           color: #4a5568;
//           margin: 0;
//         }

//         /* Grille des deux blocs */
//         .securite-grille {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 40px;
//         }

//         /* Bloc individuel */
//         .securite-bloc {
//           padding: 10px;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 5px;
//           text-align: center;
//         }

//         /* Icône */
//         .securite-icone {
//           width: 64px;
//           height: 64px;
//           background: #e0f4f8;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: #219ebc;
//           margin-bottom: 24px;
//         }

//         .securite-icone--vert {
//           background: #dcfce7;
//           color: #16a34a;
//         }

//         /* Titre du bloc */
//         .securite-bloc-titre {
//           font-family: Georgia, serif;
//           font-size: 1.3rem;
//           color: #1a1a2e;
//           margin: 0 0 16px 0;
//           line-height: 1.4;
//           font-weight: 600;
//         }

//         /* Texte du bloc */
//         .securite-bloc-texte {
//           font-size: 1rem;
//           line-height: 1.7;
//           color: #4a5568;
//           margin: 0 0 24px 0;
//         }

//         /* Liste */
//         .securite-liste {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }

//         .securite-liste li {
//           position: relative;
//           padding-left: 24px;
//           margin-bottom: 12px;
//           font-size: 0.95rem;
//           color: #4a5568;
//           line-height: 1.5;
//         }

//         .securite-liste li::before {
//           content: '✓';
//           position: absolute;
//           left: 0;
//           color: #219ebc;
//           font-weight: 700;
//         }

//         .securite-bloc:last-child .securite-liste li::before {
//           color: #16a34a;
//         }

//         /* Responsive */
//         @media (max-width: 768px) {
//           .securite-grille {
//             grid-template-columns: 1fr;
//             gap: 24px;
//           }

//           .securite-bloc {
//             padding: 30px;
//           }

//           .securite-title {
//             font-size: 1.8rem;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default SecuriteSante;




import React from 'react';

const SecuriteSante = () => {
  return (
    <section className="securite-section">
      <div className="securite-container">
        {/* Paragraphe central */}
        <div className="securite-intro">
          <span className="securite-label">Notre Engagement</span>
          <h2 className="securite-title">Un cadre d'exception</h2>
          <p className="securite-texte">
             Offrez à votre enfant un environnement où sécurité rime avec modernité. 
    Entre équipements de pointe et protocoles rigoureux, nous créons les conditions 
    idéales pour son épanouissement et sa réussite.
          </p>
        </div>

        {/* Deux blocs côte à côte */}
        <div className="securite-grille">
          {/* Bloc 1 : Environnement protégé */}
          <div className="securite-bloc">
            <div className="securite-icone">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="securite-bloc-titre">
                 Environnement protégé
            </h3>
            {/* <p className="securite-bloc-texte">
              La sécurité des élèves est une priorité absolue. Nos établissements sont 
              équipés de systèmes de surveillance modernes, de contrôles d'accès stricts 
              et de protocoles d'urgence éprouvés. Les espaces sont conçus pour minimiser 
              les risques et favoriser l'épanouissement dans un cadre sécurisé.
            </p> */}
            <ul className="securite-liste">
              <li>Surveillance vidéo 24h/24</li>
             <li>Contrôle d'accès sécurisé</li>
             <li>Protocoles d'urgence testés</li>
             <li>Espaces adaptés aux enfants</li>
            </ul>
          </div>

          {/* Bloc 2 : Infrastructure parfaite pour un enseignement de qualité */}
          <div className="securite-bloc">
            <div className="securite-icone securite-icone--vert">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16v16H4z" />
                <path d="M9 4v16" />
                <path d="M15 4v16" />
                <path d="M4 9h16" />
                <path d="M4 15h16" />
              </svg>
            </div>
            <h3 className="securite-bloc-titre">
                  Infrastructures modernes
            </h3>
            {/* <p className="securite-bloc-texte">
              Nos établissements disposent d'infrastructures modernes et adaptées pour 
              offrir un cadre d'apprentissage exceptionnel. Des salles de classe 
              intelligentes aux laboratoires équipés, en passant par des espaces 
              numériques innovants, tout est conçu pour favoriser l'excellence 
              académique et l'épanouissement des élèves.
            </p> */}
            <ul className="securite-liste">
               <li>Salles de classe modernes</li>
               <li>Équipements numériques performants</li>
               <li>Connectivité haut débit</li>
               <li>Bibliothèques et ressources documentaires</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .securite-section {
          padding: 80px 24px;
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }

        .securite-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        /* Introduction centrale */
        .securite-intro {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
        }

        .securite-label {
          display: block;
          font-family: 'Arial', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 16px;
        }

        .securite-title {
          font-family: Georgia, serif;
          font-size: 2.2rem;
          color: #1a1a2e;
          margin: 0 0 24px 0;
          font-weight: 600;
        }

        .securite-texte {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #4a5568;
          margin: 0;
        }

        /* Grille des deux blocs */
        .securite-grille {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        /* Bloc individuel */
        .securite-bloc {
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          text-align: center;
        }

        /* Icône */
        .securite-icone {
          width: 64px;
          height: 64px;
          background: #e0f4f8;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #219ebc;
          margin-bottom: 24px;
        }

        .securite-icone--vert {
          background: #dcfce7;
          color: #16a34a;
        }

        /* Titre du bloc */
        .securite-bloc-titre {
          font-family: Georgia, serif;
          font-size: 1.3rem;
          color: #1a1a2e;
          margin: 0 0 16px 0;
          line-height: 1.4;
          font-weight: 600;
        }

        /* Texte du bloc */
        .securite-bloc-texte {
          font-size: 1rem;
          line-height: 1.7;
          color: #4a5568;
          margin: 0 0 24px 0;
        }

        /* Liste */
        .securite-liste {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .securite-liste li {
          position: relative;
          padding-left: 24px;
          margin-bottom: 12px;
          font-size: 0.95rem;
          color: #4a5568;
          line-height: 1.5;
        }

        .securite-liste li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #219ebc;
          font-weight: 700;
        }

        .securite-bloc:last-child .securite-liste li::before {
          color: #16a34a;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .securite-grille {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .securite-bloc {
            padding: 30px;
          }

          .securite-title {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SecuriteSante;