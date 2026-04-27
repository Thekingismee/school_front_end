import React, { useState } from 'react';
import { Send, CheckCircle, User, Phone, Mail, BookOpen, GraduationCap, Calendar, AlertCircle } from 'lucide-react';

const Inscription = () => {
  const [formData, setFormData] = useState({
    parentNom: '',
    telephone: '',
    email: '',
    eleveNom: '',
    etablissement: '',
    niveau: '',
    dateNaissance: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field when user types
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
      const response = await fetch('http://localhost:8000/api/inscriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Gestion des erreurs de validation Laravel (422)
        if (response.status === 422 && data.errors) {
          // Transformer les erreurs Laravel en format compatible
          const formattedErrors = {};
          Object.entries(data.errors).forEach(([key, messages]) => {
            // Convertir snake_case vers camelCase si nécessaire
            const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
            formattedErrors[camelKey] = messages[0]; // Prendre le premier message d'erreur
          });
          setErrors(formattedErrors);
          throw new Error('Veuillez corriger les erreurs du formulaire');
        }
        throw new Error(data.message || 'Une erreur est survenue lors de l\'envoi');
      }

      // Succès
      setIsSuccess(true);
      setFormData({
        parentNom: '',
        telephone: '',
        email: '',
        eleveNom: '',
        etablissement: '',
        niveau: '',
        dateNaissance: '',
        message: ''
      });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('Erreur d\'envoi:', error);
      if (error.message !== 'Veuillez corriger les erreurs du formulaire') {
        setApiError(error.message || 'Erreur de connexion au serveur');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const etablissements = [
    { value: '', label: 'Sélectionnez un établissement' },
    { value: 'maternelle', label: 'Maternelle' },
    { value: 'primaire', label: 'Primaire' },
    { value: 'college', label: 'Collège' },
    { value: 'lycee', label: 'Lycée' }
  ];

  const niveaux = {
    '': [{ value: '', label: 'Sélectionnez d\'abord un établissement' }],
    'maternelle': [
      { value: '', label: 'Sélectionnez un niveau' },
      { value: 'petite-section', label: 'Petite Section (3-4 ans)' },
      { value: 'moyenne-section', label: 'Moyenne Section (4-5 ans)' },
      { value: 'grande-section', label: 'Grande Section (5-6 ans)' }
    ],
    'primaire': [
      { value: '', label: 'Sélectionnez un niveau' },
      { value: 'cp', label: 'CP - Cours Préparatoire' },
      { value: 'ce1', label: 'CE1 - Cours Élémentaire 1' },
      { value: 'ce2', label: 'CE2 - Cours Élémentaire 2' },
      { value: 'cm1', label: 'CM1 - Cours Moyen 1' },
      { value: 'cm2', label: 'CM2 - Cours Moyen 2' }
    ],
    'college': [
      { value: '', label: 'Sélectionnez un niveau' },
      { value: '6eme', label: '6ème' },
      { value: '5eme', label: '5ème' },
      { value: '4eme', label: '4ème' },
      { value: '3eme', label: '3ème' }
    ],
    'lycee': [
      { value: '', label: 'Sélectionnez un niveau' },
      { value: 'seconde', label: 'Seconde' },
      { value: 'premiere', label: 'Première' },
      { value: 'terminale', label: 'Terminale' }
    ]
  };

  return (
    <>
      <header className="inscription-header-hero">
        <img 
          src="/inscrip2.jpg" 
          alt="Inscription Groupe Scolaire L'Atome" 
          className="hero-background"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="inscription-titre">Demande d'inscription</h1>
          <p className="hero-subtitle">Rejoignez la communauté éducative d'excellence</p>
        </div>
      </header>

      <section className="inscription-section">
        <div className="inscription-container">
          {/* En-tête */}
          <div className="inscription-header">
            <span className="inscription-badge">Admissions 2026-2027</span>
            <h2 className="inscription-title">Pré-inscription en ligne</h2>
            <div className="inscription-line"></div>
          </div>

          {/* Formulaire */}
          {isSuccess ? (
            <div className="inscription-success">
              <div className="success-icon">
                <CheckCircle size={48} strokeWidth={1.5} />
              </div>
              <h3>Demande envoyée avec succès !</h3>
              <p>Nous vous contacterons dans les plus brefs délais pour finaliser l'inscription.</p>
              <div className="success-info">
                <p>Un email de confirmation vous a été envoyé.</p>
              </div>
            </div>
          ) : (
            <form className="inscription-form" onSubmit={handleSubmit} noValidate>
              {/* Erreur API globale */}
              {apiError && (
                <div className="form-error-global">
                  <AlertCircle size={18} />
                  <span>{apiError}</span>
                </div>
              )}

              <div className="form-section">
                <h3 className="form-section-title">
                  <User size={20} />
                  Informations du parent
                </h3>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="parentNom">
                      Nom et prénom <span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                      <User size={18} className="input-icon" />
                      <input
                        type="text"
                        id="parentNom"
                        name="parentNom"
                        value={formData.parentNom}
                        onChange={handleChange}
                        required
                        placeholder="Votre nom complet"
                        className={errors.parentNom ? 'input-error' : ''}
                      />
                    </div>
                    {errors.parentNom && <span className="field-error">{errors.parentNom}</span>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="telephone">
                      Téléphone <span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                      <Phone size={18} className="input-icon" />
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        required
                        placeholder="+212 6 XX XX XX XX"
                        className={errors.telephone ? 'input-error' : ''}
                      />
                    </div>
                    {errors.telephone && <span className="field-error">{errors.telephone}</span>}
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="email">
                    Email <span className="optional">(facultatif)</span>
                  </label>
                  <div className="input-wrapper">
                    <Mail size={18} className="input-icon" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className={errors.email ? 'input-error' : ''}
                    />
                  </div>
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
              </div>

              <div className="form-section">
                <h3 className="form-section-title">
                  <GraduationCap size={20} />
                  Informations de l'élève
                </h3>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="eleveNom">
                      Nom et prénom de l'élève <span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                      <User size={18} className="input-icon" />
                      <input
                        type="text"
                        id="eleveNom"
                        name="eleveNom"
                        value={formData.eleveNom}
                        onChange={handleChange}
                        required
                        placeholder="Nom complet de l'élève"
                        className={errors.eleveNom ? 'input-error' : ''}
                      />
                    </div>
                    {errors.eleveNom && <span className="field-error">{errors.eleveNom}</span>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="dateNaissance">
                      Date de naissance <span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                      <Calendar size={18} className="input-icon" />
                      <input
                        type="date"
                        id="dateNaissance"
                        name="dateNaissance"
                        value={formData.dateNaissance}
                        onChange={handleChange}
                        required
                        className={errors.dateNaissance ? 'input-error' : ''}
                      />
                    </div>
                    {errors.dateNaissance && <span className="field-error">{errors.dateNaissance}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="etablissement">
                      Établissement <span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                      <BookOpen size={18} className="input-icon" />
                      <select
                        id="etablissement"
                        name="etablissement"
                        value={formData.etablissement}
                        onChange={handleChange}
                        required
                        className={errors.etablissement ? 'input-error' : ''}
                      >
                        {etablissements.map(etab => (
                          <option key={etab.value} value={etab.value}>
                            {etab.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.etablissement && <span className="field-error">{errors.etablissement}</span>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="niveau">
                      Niveau <span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                      <GraduationCap size={18} className="input-icon" />
                      <select
                        id="niveau"
                        name="niveau"
                        value={formData.niveau}
                        onChange={handleChange}
                        required
                        disabled={!formData.etablissement}
                        className={errors.niveau ? 'input-error' : ''}
                      >
                        {(niveaux[formData.etablissement] || niveaux['']).map(niv => (
                          <option key={niv.value} value={niv.value}>
                            {niv.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.niveau && <span className="field-error">{errors.niveau}</span>}
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message <span className="optional">(facultatif)</span></label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Questions particulières, informations complémentaires..."
                    className={errors.message ? 'input-error' : ''}
                  />
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>
              </div>

              <button 
                type="submit" 
                className="inscription-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer ma demande
                    <Send size={18} />
                  </>
                )}
              </button>

              <p className="form-footer">
                En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe pédagogique.
                Vos données sont traitées en toute confidentialité.
              </p>
            </form>
          )}
        </div>
      </section>

      <style jsx>{`
        .inscription-header-hero {
          position: relative;
          text-align: center;
          min-height: 550px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.5) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding: 140px 70px;
        }

        .inscription-titre {
          text-shadow: 2px 2px 30px rgba(0, 0, 0, 0.5);
          font-size: 4rem;
          font-weight: bold;
          font-family: 'Georgia', 'Times New Roman', serif;
          color: #fff;
          margin: 0 0 16px 0;
        }

        .hero-subtitle {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        .inscription-section {
          padding: 80px 24px;
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
        }

        .inscription-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .inscription-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .inscription-badge {
          display: inline-block;
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #f97316;
          background: rgba(249, 115, 22, 0.1);
          padding: 8px 20px;
          border-radius: 40px;
          margin-bottom: 24px;
        }

        .inscription-title {
          font-family: 'Georgia', serif;
          font-size: clamp(2rem, 4vw, 2.5rem);
          color: #0f172a;
          margin: 0 0 24px 0;
        }

        .inscription-line {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #1e3a8a);
          margin: 0 auto;
          border-radius: 2px;
        }

        .inscription-form {
          background: #ffffff;
          padding: 48px;
          border-radius: 24px;
          box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.08);
        }

        .form-error-global {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #dc2626;
          padding: 12px 16px;
          border-radius: 12px;
          margin-bottom: 24px;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
        }

        .form-section {
          margin-bottom: 32px;
          padding-bottom: 32px;
          border-bottom: 1px solid #eef2ff;
        }

        .form-section:last-of-type {
          border-bottom: none;
          padding-bottom: 0;
        }

        .form-section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 24px 0;
          padding-bottom: 12px;
          border-bottom: 2px solid #fef3e8;
        }

        .form-section-title svg {
          color: #f97316;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-field label {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: #334155;
        }

        .required {
          color: #f97316;
        }

        .optional {
          color: #94a3b8;
          font-weight: 400;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 14px;
          color: #94a3b8;
          pointer-events: none;
        }

        .form-field input,
        .form-field select,
        .form-field textarea {
          width: 100%;
          padding: 14px 16px 14px 44px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: #0f172a;
          background: #ffffff;
          outline: none;
          transition: all 0.2s ease;
        }

        .form-field textarea {
          padding: 14px 16px;
          resize: vertical;
        }

        .form-field input:focus,
        .form-field select:focus,
        .form-field textarea:focus {
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
        }

        .form-field input.input-error,
        .form-field select.input-error,
        .form-field textarea.input-error {
          border-color: #ef4444;
          background: #fef2f2;
        }

        .form-field input.input-error:focus,
        .form-field select.input-error:focus,
        .form-field textarea.input-error:focus {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }

        .field-error {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: #ef4444;
          margin-top: 4px;
        }

        .form-field input::placeholder,
        .form-field textarea::placeholder {
          color: #cbd5e1;
        }

        .form-field select:disabled {
          background: #f8fafc;
          cursor: not-allowed;
          color: #94a3b8;
        }

        .inscription-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          padding: 16px 32px;
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 16px;
        }

        .inscription-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(249, 115, 22, 0.3);
        }

        .inscription-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
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

        .form-footer {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: #94a3b8;
          text-align: center;
          margin-top: 24px;
        }

        .inscription-success {
          background: #ffffff;
          padding: 60px 40px;
          border-radius: 24px;
          box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .success-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: #059669;
        }

        .inscription-success h3 {
          font-family: 'Georgia', serif;
          font-size: 1.5rem;
          color: #0f172a;
          margin: 0 0 12px 0;
        }

        .inscription-success p {
          font-family: 'Inter', sans-serif;
          color: #64748b;
          margin: 0;
        }

        .success-info {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid #eef2ff;
        }

        .success-info p {
          font-size: 0.85rem;
          color: #94a3b8;
        }

        @media (max-width: 768px) {
          .inscription-header-hero {
            min-height: 450px;
          }

          .hero-content {
            padding: 100px 20px;
          }

          .inscription-titre {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .inscription-form {
            padding: 32px 24px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 20px;
          }

          .form-section {
            margin-bottom: 24px;
            padding-bottom: 24px;
          }
        }

        @media (max-width: 480px) {
          .inscription-section {
            padding: 60px 16px;
          }

          .inscription-header-hero {
            min-height: 400px;
          }

          .hero-content {
            padding: 80px 16px;
          }

          .inscription-titre {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 0.9rem;
          }

          .inscription-form {
            padding: 24px 20px;
          }

          .form-field input,
          .form-field select,
          .form-field textarea {
            padding: 12px 12px 12px 40px;
          }
        }
      `}</style>
    </>
  );
};

export default Inscription;