import React, { useState } from 'react';

const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSent(true);
    
    setTimeout(() => {
      setIsSent(false);
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        sujet: '',
        message: ''
      });
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="contactpopup-overlay" onClick={onClose}>
      <div className="contactpopup-modal" onClick={(e) => e.stopPropagation()}>
        {/* Bouton fermer */}
        <button className="contactpopup-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* En-tête */}
        <div className="contactpopup-header">
          <h2 className="contactpopup-title">Contactez-nous</h2>
          <p className="contactpopup-subtitle">
            Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
          </p>
        </div>

        {/* Formulaire */}
        {isSent ? (
          <div className="contactpopup-success">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <p>Message envoyé avec succès !</p>
          </div>
        ) : (
          <form className="contactpopup-form" onSubmit={handleSubmit}>
            <div className="contactpopup-row">
              <div className="contactpopup-field">
                <label htmlFor="nom">Nom complet *</label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                />
              </div>
              
              <div className="contactpopup-field">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div className="contactpopup-row">
              <div className="contactpopup-field">
                <label htmlFor="telephone">Téléphone</label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="+212 6 00 00 00 00"
                />
              </div>
              
              <div className="contactpopup-field">
                <label htmlFor="sujet">Sujet *</label>
                <select
                  id="sujet"
                  name="sujet"
                  value={formData.sujet}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choisir un sujet</option>
                  <option value="admission">Admission</option>
                  <option value="information">Demande d'information</option>
                  <option value="visite">Visite guidée</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>

            <div className="contactpopup-field">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Votre message..."
              />
            </div>

            <button 
              type="submit" 
              className="contactpopup-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="contactpopup-spinner" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer le message
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </>
              )}
            </button>
          </form>
        )}
      </div>

      <style jsx>{`
        .contactpopup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .contactpopup-modal {
          background: #ffffff;
          border-radius: 16px;
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          padding: 40px;
          animation: slideUp 0.3s ease;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Bouton fermer */
        .contactpopup-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: #f1f5f9;
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .contactpopup-close:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        /* En-tête */
        .contactpopup-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .contactpopup-title {
          font-family: 'Georgia', serif;
          font-size: 1.8rem;
          color: #0f172a;
          margin: 0 0 12px 0;
        }

        .contactpopup-subtitle {
          font-family: 'Arial', sans-serif;
          font-size: 0.95rem;
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }

        /* Formulaire */
        .contactpopup-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contactpopup-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .contactpopup-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .contactpopup-field label {
          font-family: 'Arial', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: #374151;
        }

        .contactpopup-field input,
        .contactpopup-field select,
        .contactpopup-field textarea {
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-family: 'Arial', sans-serif;
          font-size: 0.95rem;
          color: #0f172a;
          background: #ffffff;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .contactpopup-field input:focus,
        .contactpopup-field select:focus,
        .contactpopup-field textarea:focus {
          border-color: #f97316;
        }

        .contactpopup-field textarea {
          resize: vertical;
          min-height: 120px;
        }

        /* Bouton submit */
        .contactpopup-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 32px;
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: #ffffff;
          border: none;
          border-radius: 8px;
          font-family: 'Arial', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
        }

        .contactpopup-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(249, 115, 22, 0.3);
        }

        .contactpopup-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Spinner */
        .contactpopup-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: #ffffff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Success message */
        .contactpopup-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding: 40px;
          text-align: center;
          animation: fadeIn 0.5s ease;
        }

        .contactpopup-success p {
          font-family: 'Arial', sans-serif;
          font-size: 1.1rem;
          color: #10b981;
          font-weight: 600;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 640px) {
          .contactpopup-modal {
            padding: 30px 20px;
          }

          .contactpopup-row {
            grid-template-columns: 1fr;
          }

          .contactpopup-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPopup;