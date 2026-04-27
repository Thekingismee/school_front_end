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
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear errors when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
    if (apiError) setApiError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setApiError(null);

    try {
      const response = await fetch('http://localhost:8000/api/contact-messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Source': 'popup', // Optionnel : tracker la source
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Gestion des erreurs de validation Laravel (422)
        if (response.status === 422 && data.errors) {
          const formattedErrors = {};
          Object.entries(data.errors).forEach(([key, messages]) => {
            formattedErrors[key] = messages[0];
          });
          setErrors(formattedErrors);
          throw new Error('Veuillez corriger les erreurs du formulaire');
        }
        throw new Error(data.message || 'Une erreur est survenue lors de l\'envoi');
      }

      // ✅ Succès
      setIsSent(true);
      setFormData({ nom: '', email: '', telephone: '', sujet: '', message: '' });

      setTimeout(() => {
        setIsSent(false);
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Erreur d\'envoi:', error);
      if (error.message !== 'Veuillez corriger les erreurs du formulaire') {
        setApiError(error.message || 'Erreur de connexion au serveur');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="contactpopup-overlay" onClick={onClose}>
      <div className="contactpopup-modal" onClick={(e) => e.stopPropagation()}>
        {/* Bouton fermer */}
        <button className="contactpopup-close" onClick={onClose} aria-label="Fermer">
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
          <form className="contactpopup-form" onSubmit={handleSubmit} noValidate>
            {/* Erreur API globale */}
            {apiError && (
              <div className="contactpopup-error-global">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>{apiError}</span>
              </div>
            )}

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
                  className={errors.nom ? 'input-error' : ''}
                />
                {errors.nom && <span className="field-error">{errors.nom}</span>}
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
                  className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
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
                  className={errors.telephone ? 'input-error' : ''}
                />
                {errors.telephone && <span className="field-error">{errors.telephone}</span>}
              </div>

              <div className="contactpopup-field">
                <label htmlFor="sujet">Sujet *</label>
                <select
                  id="sujet"
                  name="sujet"
                  value={formData.sujet}
                  onChange={handleChange}
                  required
                  className={errors.sujet ? 'input-error' : ''}
                >
                  <option value="">Choisir un sujet</option>
                  <option value="admission">Admission</option>
                  <option value="information">Demande d'information</option>
                  <option value="visite">Visite guidée</option>
                  <option value="autre">Autre</option>
                </select>
                {errors.sujet && <span className="field-error">{errors.sujet}</span>}
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
                className={errors.message ? 'input-error' : ''}
              />
              {errors.message && <span className="field-error">{errors.message}</span>}
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

        .contactpopup-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contactpopup-error-global {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #dc2626;
          padding: 12px 16px;
          border-radius: 8px;
          font-family: 'Arial', sans-serif;
          font-size: 0.9rem;
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

        .contactpopup-field input.input-error,
        .contactpopup-field select.input-error,
        .contactpopup-field textarea.input-error {
          border-color: #ef4444;
          background: #fef2f2;
        }

        .contactpopup-field input.input-error:focus,
        .contactpopup-field select.input-error:focus,
        .contactpopup-field textarea.input-error:focus {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }

        .field-error {
          font-family: 'Arial', sans-serif;
          font-size: 0.75rem;
          color: #ef4444;
        }

        .contactpopup-field textarea {
          resize: vertical;
          min-height: 120px;
        }

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