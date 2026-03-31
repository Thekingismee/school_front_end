import React from 'react';

const Footer = () => {
  return (
    <>
    <div className='footer1'></div>
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* À gauche : Nos Contacts */}
        <div className="footer-col">
          <h3 className="footer-title">Nos Contacts</h3>
          <div className="footer-contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+212 5 00 00 00 00</span>
          </div>
          <div className="footer-contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>contact@ecole.ma</span>
          </div>
        </div>

        {/* Au centre : Liens Rapides */}
        <div className="footer-col">
          <h3 className="footer-title">Liens Rapides</h3>
          <ul className="footer-links">
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos de nous</a></li>
            <li><a href="/programmes">Nos Programmes</a></li>
            <li><a href="/admission">Admission</a></li>
            <li><a href="/actualites">Actualités</a></li>
          </ul>
        </div>

        {/* À droite : Restez informés */}
        <div className="footer-col right-col">
          <h3 className="footer-title">Restez informés</h3>
          <p className="footer-newsletter-text">
            Abonnez-vous à notre newsletter
          </p>
          <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              className="footer-input"
              required 
            />
            <button type="submit" className="footer-submit-btn">
              S'abonner
            </button>
          </form>
        </div>

      </div>

      {/* Copyright en bas */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} École. Tous droits réservés.</p>
      </div>

      <style jsx>{`

// .footer1 {
//   background: #0f172a;
//   padding: 70px 0 20px;
//   clip-path: shape(from 0 100%,vline to 0,curve to 4.17% 13px with 2.78% 9px,curve to 6.94% 16px with 5.56% 17px,curve to 9.72% 31.5px with 8.33% 15px,curve to 12.5% 39px with 11.11% 48px,curve to 15.28% 24px with 13.89% 30px,curve to 18.06% 21px with 16.67% 18px,curve to 20.83% 22px with 19.44% 24px,curve to 23.61% 21.5px with 22.22% 20px,curve to 26.39% 17px with 25% 23px,curve to 29.17% 7.5px with 27.78% 11px,curve to 31.94% 7px with 30.56% 4px,curve to 34.72% 17px with 33.33% 10px,curve to 37.5% 12.5px with 36.11% 24px,curve to 40.28% 19.5px with 38.89% 1px,curve to 43.06% 37.5px with 41.67% 38px,curve to 45.83% 27.5px with 44.44% 37px,curve to 48.61% 23.5px with 47.22% 18px,curve to 51.39% 18px with 50% 29px,curve to 54.17% 27px with 52.78% 7px,curve to 56.94% 42.5px with 55.56% 47px,curve to 59.72% 33.5px with 58.33% 38px,curve to 62.5% 33.5px with 61.11% 29px,curve to 65.28% 32px with 63.89% 38px,curve to 68.06% 20.5px with 66.67% 26px,curve to 70.83% 21.5px with 69.44% 15px,curve to 73.61% 20.5px with 72.22% 28px,curve to 76.39% 29px with 75% 13px,curve to 79.17% 47px with 77.78% 45px,curve to 81.94% 26.5px with 80.56% 49px,curve to 84.72% 17.5px with 83.33% 4px,curve to 87.5% 27.5px with 86.11% 31px,curve to 90.28% 22px with 88.89% 24px,curve to 93.06% 31.5px with 91.67% 20px,curve to 95.83% 33px with 94.44% 43px,curve to 100% 0 with 97.22% 23px,vline to 100%, hline to 0);

//   margin: 0;
//   line-height: 0; /* évite les espacements fantômes */
//   }
.footer1 {
  background: #0f172a;
  padding: 70px 0 20px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);  /* Rectangle simple */
  margin: 0;
  line-height: 0;
}
        .footer-section {
          background-color: #0f172a;
          color: #f8fafc;
          font-family: 'Arial', sans-serif;
          padding-top: 60px;
        }
          .footer-section {
  margin-top: -1px; /* compense un éventuel gap de 1px */
  position: relative;
  z-index: 1; /* assure que le footer reste au-dessus si besoin */
}

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px 60px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-title {
          font-family: 'Georgia', serif;
          font-size: 1.5rem;
          margin: 0 0 10px 0;
          color: #ffffff;
          position: relative;
          padding-bottom: 12px;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 40px;
          height: 3px;
          background: #f97316;
          border-radius: 2px;
        }

        /* Contacts */
        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #cbd5e1;
          font-size: 1rem;
        }
        
        .footer-contact-item svg {
          color: #f97316;
          flex-shrink: 0;
        }

        /* Alignment Center Column */
        .center-col {
           align-items: center;
        }
        .center-col .footer-title::after {
          left: 50%;
          transform: translateX(-50%);
        }

        /* Links */
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        //   align-items: center;
        }

        .footer-links a {
          color: #cbd5e1;
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 1rem;
        }

        .footer-links a:hover {
          color: #f97316;
        }

        /* Newsletter */
        .right-col {
          align-items: flex-start;
        }

        .footer-newsletter-text {
          color: #cbd5e1;
          line-height: 1.6;
          margin: 0 0 10px 0;
          font-size: 1rem;
        }

        .footer-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .footer-input {
          padding: 12px 16px;
          border-radius: 6px;
          border: 1px solid #334155;
          background-color: #1e293b;
          color: #ffffff;
          font-family: inherit;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .footer-input:focus {
          border-color: #f97316;
        }

        .footer-input::placeholder {
          color: #64748b;
        }

        .footer-submit-btn {
          padding: 12px 24px;
          background: linear-gradient(135deg, #e58b46 0%, #f7852e 100%);
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .footer-submit-btn:hover {
          background: #7e4f2c;
        }

        .footer-bottom {
          text-align: center;
          padding: 24px;
          border-top: 1px solid #334155;
          background-color: #0b1120;
          color: #94a3b8;
          font-size: 0.9rem;
        }
        
        .footer-bottom p {
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .footer-container {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .center-col {
            align-items: flex-start;
          }
          .center-col .footer-title::after {
            left: 0;
            transform: none;
          }
          .footer-links {
            align-items: flex-start;
          }
        }

        @media (max-width: 600px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .center-col {
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
    </>
  );
};

export default Footer;
