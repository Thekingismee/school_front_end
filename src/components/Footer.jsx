import React, { useState } from 'react';
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState('');

const handleSubscribe = async () => {
  if (!email) {
    setMessage("Veuillez entrer un email");
    return;
  }

  try {
    setLoading(true);
    setMessage('');

    const response = await axios.post('http://localhost:8000/api/subscribers', {
      email: email
    });

    setMessage("✔️ Inscription réussie !");
    setEmail('');

  } catch (error) {
    if (error.response?.data?.message) {
      setMessage(error.response.data.message);
    } else {
      setMessage("❌ Erreur serveur");
    }
  } finally {
    setLoading(false);
  }
};
  return (
    <>
      <div className='footer1'></div>
      <footer className="footer-section">
        <div className="footer-container">

          {/* Nos Contacts */}
          <div className="footer-col">
            <h3 className="footer-title">Nos Contacts</h3>
            <div className="footer-contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.19 15.9a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
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

          {/* Liens Rapides */}
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

          {/* Restez informés */}
          <div className="footer-col right-col">
            <h3 className="footer-title">Restez informés</h3>
            <p className="footer-newsletter-text">Abonnez-vous à notre newsletter</p>
            <div className="footer-form">
             <input
  type="email"
  placeholder="Votre adresse email"
  className="footer-input"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<button
  className="footer-submit-btn"
  onClick={handleSubscribe}
  disabled={loading}
>
  {loading ? "Envoi..." : "S'abonner"}
</button>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} École. Tous droits réservés.</p>
        </div>

        <style jsx>{`
          .footer1 {
            background: #0f172a;
            padding: 70px 0 20px;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            margin: 0;
            line-height: 0;
          }

          .footer-section {
            background-color: #0f172a;
            color: #f8fafc;
            font-family: 'Arial', sans-serif;
            padding-top: 60px;
            margin-top: -1px;
            position: relative;
            z-index: 1;
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

          .footer-links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 12px;
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
            font-size: 1rem;
            transition: background 0.3s ease;
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

          /* ===== RESPONSIVE ===== */

          /* Tablette */
          @media (max-width: 900px) {
            .footer-container {
              grid-template-columns: repeat(2, 1fr);
              gap: 40px 30px;
            }

            /* La 3e colonne prend toute la largeur */
            .footer-col:last-child {
              grid-column: 1 / -1;
            }
          }

          /* Mobile */
          @media (max-width: 600px) {
            .footer1 {
              padding: 40px 0 15px;
            }

            .footer-section {
              padding-top: 40px;
            }

            .footer-container {
              grid-template-columns: 1fr;
              gap: 36px;
              padding: 0 20px 48px;
            }

            .footer-col:last-child {
              grid-column: auto;
            }

            .footer-title {
              font-size: 1.25rem;
            }

            .footer-contact-item {
              font-size: 0.95rem;
            }

            .footer-links a {
              font-size: 0.95rem;
            }

            .footer-input,
            .footer-submit-btn {
              font-size: 0.95rem;
            }

            .footer-submit-btn {
              width: 100%;
              text-align: center;
            }

            .footer-bottom {
              padding: 20px 16px;
              font-size: 0.82rem;
            }
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;