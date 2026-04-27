import React, { useState, useEffect } from 'react';

// 🔧 Remplacez par votre URL Laravel ou utilisez import.meta.env.VITE_API_URL
const API_BASE_URL = 'http://localhost:8000/api/v1';

// 🔐 Fonction de génération de mot de passe sécurisé
const generateStrongPassword = (length = 12) => {
  const charset = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
  };
  
  // Au moins un caractère de chaque catégorie
  let password = [
    charset.lower[Math.floor(Math.random() * charset.lower.length)],
    charset.upper[Math.floor(Math.random() * charset.upper.length)],
    charset.numbers[Math.floor(Math.random() * charset.numbers.length)],
    charset.symbols[Math.floor(Math.random() * charset.symbols.length)]
  ];
  
  const allChars = Object.values(charset).join('');
  for (let i = password.length; i < length; i++) {
    password.push(allChars[Math.floor(Math.random() * allChars.length)]);
  }
  
  // Mélanger le tableau
  return password.sort(() => Math.random() - 0.5).join('');
};

// 📋 Fonction de copie dans le presse-papiers
const copyToClipboard = async (text, onCopied) => {
  try {
    await navigator.clipboard.writeText(text);
    onCopied(true);
    setTimeout(() => onCopied(false), 2000);
  } catch (err) {
    console.error('Échec de la copie:', err);
  }
};

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Modal & Form
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '', 
    email: '', 
    password: ''
    // password_confirmation supprimé
  });
  const [formErrors, setFormErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  
  // États pour les boutons password
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);

  // 🔄 Charger les utilisateurs au montage ou changement de page
  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const fetchUsers = async (page) => {
    setLoading(true);
    setErrorMsg('');
    try {
      const res = await fetch(`${API_BASE_URL}/users?page=${page}`);
      if (!res.ok) throw new Error('Erreur lors du chargement');
      const json = await res.json();
      setUsers(json.data);
      setMeta(json.meta);
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 📝 Gestion du formulaire
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (formErrors[e.target.name]) {
      setFormErrors(prev => ({ ...prev, [e.target.name]: null }));
    }
  };

  const handleGeneratePassword = () => {
    const newPassword = generateStrongPassword(14);
    setFormData(prev => ({ ...prev, password: newPassword }));
    setCopied(false);
    if (formErrors.password) {
      setFormErrors(prev => ({ ...prev, password: null }));
    }
  };

  const handleCopyPassword = () => {
    if (formData.password) {
      copyToClipboard(formData.password, setCopied);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormErrors({});
    setSuccessMsg('');
    setErrorMsg('');

    try {
      // 💡 Option: ajouter password_confirmation côté frontend si requis par Laravel
      const payload = {
        ...formData,
        password_confirmation: formData.password // Pour compatibilité backend
      };

      const res = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 422) setFormErrors(data.errors);
        else setErrorMsg(data.message || 'Erreur serveur');
        return;
      }

      setSuccessMsg(data.message);
      setFormData({ name: '', email: '', password: '' });
      setIsModalOpen(false);
      setShowPassword(false);
      setCopied(false);
      
      // 🔄 Recharger la liste
      fetchUsers(meta?.total_pages > 1 ? meta.total_pages : 1);
    } catch (err) {
      setErrorMsg('Erreur réseau');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= (meta?.total_pages || 1)) {
      setCurrentPage(page);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setFormErrors({});
    setSuccessMsg('');
    setShowPassword(false);
    setCopied(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: '', email: '', password: '' });
    setFormErrors({});
    setShowPassword(false);
    setCopied(false);
  };

  return (
    <>
      <div className="um-wrapper">
        <div className="um-container">
          <h2 className="um-title">👥 Gestion des Utilisateurs</h2>

          {successMsg && <div className="um-alert success">✅ {successMsg}</div>}
          {errorMsg && <div className="um-alert error">❌ {errorMsg}</div>}

          <div className="um-header">
            <h3 className="um-subtitle">Liste ({meta?.total || 0})</h3>
            <button className="um-btn um-btn-primary" onClick={openModal}>+ Ajouter</button>
          </div>

          {loading && users.length === 0 ? (
            <p className="um-loading">⏳ Chargement...</p>
          ) : (
            <>
              <div className="um-table-wrapper">
                <table className="um-table">
                  <thead>
                    <tr>
                      <th>ID</th><th>Nom</th><th>Email</th><th>Créé le</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{new Date(user.created_at).toLocaleDateString('fr-FR')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {meta && meta.total_pages > 1 && (
                <div className="um-pagination">
                  <button 
                    className="um-pagination-btn" 
                    disabled={!meta.links.prev} 
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    ⬅ Précédent
                  </button>
                  <span className="um-pagination-info">
                    Page {meta.current_page} / {meta.total_pages}
                  </span>
                  <button 
                    className="um-pagination-btn" 
                    disabled={!meta.links.next} 
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Suivant ➡
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* 🔽 Modal */}
      {isModalOpen && (
        <div className="um-modal-overlay" onClick={closeModal}>
          <div className="um-modal" onClick={e => e.stopPropagation()}>
            <div className="um-modal-header">
              <h3>➕ Nouvel Utilisateur</h3>
              <button className="um-modal-close" onClick={closeModal}>&times;</button>
            </div>
            <form onSubmit={handleSubmit} className="um-modal-form">
              <div className="um-form-group">
                <label className="um-form-label">Nom *</label>
                <input 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="ex: MRX" 
                  required 
                  className={`um-form-input ${formErrors.name ? 'um-input-error' : ''}`}
                />
                {formErrors.name && <span className="um-error-text">{formErrors.name[0]}</span>}
              </div>
              <div className="um-form-group">
                <label className="um-form-label">Email *</label>
                <input 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="mrx@example.com" 
                  required 
                  className={`um-form-input ${formErrors.email ? 'um-input-error' : ''}`}
                />
                {formErrors.email && <span className="um-error-text">{formErrors.email[0]}</span>}
              </div>
              
              {/* Champ Mot de passe avec actions */}
              <div className="um-form-group">
                <label className="um-form-label">Mot de passe *</label>
                <div className="um-password-wrapper">
                  <input 
                    name="password" 
                    type={showPassword ? 'text' : 'password'} 
                    value={formData.password} 
                    onChange={handleChange} 
                    placeholder="••••••••" 
                    required 
                    className={`um-form-input um-form-input-password ${formErrors.password ? 'um-input-error' : ''}`}
                  />
                  <div className="um-password-actions">
                    <button 
                      type="button" 
                      className="um-password-btn um-password-toggle" 
                      onClick={() => setShowPassword(!showPassword)}
                      title={showPassword ? 'Masquer' : 'Afficher'}
                    >
                      {showPassword ? '🙈' : '👁️'}
                    </button>
                    <button 
                      type="button" 
                      className="um-password-btn um-password-generate" 
                      onClick={handleGeneratePassword}
                      title="Générer un mot de passe"
                    >
                      🎲
                    </button>
                    <button 
                      type="button" 
                      className={`um-password-btn um-password-copy ${copied ? 'copied' : ''}`} 
                      onClick={handleCopyPassword}
                      disabled={!formData.password}
                      title="Copier le mot de passe"
                    >
                      {copied ? '✅' : '📋'}
                    </button>
                  </div>
                </div>
                {formErrors.password && <span className="um-error-text">{formErrors.password[0]}</span>}
                <p className="um-password-hint">
                  💡 Cliquez sur 🎲 pour générer un mot de passe sécurisé automatiquement
                </p>
              </div>
              
              <button type="submit" className="um-btn um-btn-submit" disabled={loading}>
                {loading ? 'Création...' : 'Créer l\'utilisateur'}
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        /* ===== Layout Principal ===== */
        .um-wrapper {
          min-height: 100vh;
          background-color: #f9fafb;
          padding: 2rem 1rem;
        }

        .um-container {
          max-width: 800px;
          margin: 0 auto;
          background: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          font-family: system-ui, -apple-system, sans-serif;
        }

        /* ===== Titres ===== */
        .um-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .um-subtitle {
          font-size: 1.125rem;
          font-weight: 600;
          color: #374151;
        }

        /* ===== Alerts ===== */
        .um-alert {
          padding: 0.75rem 1rem;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .um-alert.success {
          background-color: #d1fae5;
          color: #065f46;
          border: 1px solid #a7f3d0;
        }

        .um-alert.error {
          background-color: #fee2e2;
          color: #991b1b;
          border: 1px solid #fecaca;
        }

        /* ===== Header avec bouton ===== */
        .um-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        /* ===== Boutons ===== */
        .um-btn {
          padding: 0.6rem 1rem;
          border: none;
          border-radius: 0.375rem;
          font-weight: 500;
          font-size: 0.875rem;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.1s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
        }

        .um-btn:active {
          transform: scale(0.98);
        }

        .um-btn-primary {
          background-color: #ea580c;
          color: white;
        }

        .um-btn-primary:hover:not(:disabled) {
          background-color: #c2410c;
        }

        .um-btn-primary:disabled {
          background-color: #fb923c;
          cursor: not-allowed;
          opacity: 0.8;
        }

        .um-btn-submit {
          width: 100%;
          padding: 0.75rem;
          background-color: #3b82f6;
          color: white;
          margin-top: 0.5rem;
        }

        .um-btn-submit:hover:not(:disabled) {
          background-color: #2563eb;
        }

        .um-btn-submit:disabled {
          background-color: #93c5fd;
          cursor: not-allowed;
        }

        /* ===== Table ===== */
        .um-table-wrapper {
          overflow-x: auto;
          border-radius: 0.5rem;
          border: 1px solid #e5e7eb;
        }

        .um-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          font-size: 0.875rem;
        }

        .um-table thead {
          background-color: #f9fafb;
        }

        .um-table th {
          padding: 0.75rem 1rem;
          text-align: left;
          font-weight: 600;
          color: #374151;
          border-bottom: 1px solid #e5e7eb;
          white-space: nowrap;
        }

        .um-table td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #f3f4f6;
          color: #1f2937;
        }

        .um-table tbody tr:hover {
          background-color: #f9fafb;
        }

        .um-table tbody tr:last-child td {
          border-bottom: none;
        }

        /* ===== Pagination ===== */
        .um-pagination {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .um-pagination-btn {
          padding: 0.5rem 1rem;
          background-color: white;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          color: #374151;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .um-pagination-btn:hover:not(:disabled) {
          background-color: #f9fafb;
          border-color: #9ca3af;
        }

        .um-pagination-btn:disabled {
          color: #9ca3af;
          cursor: not-allowed;
          opacity: 0.6;
        }

        .um-pagination-info {
          font-size: 0.875rem;
          color: #6b7280;
          font-weight: 500;
        }

        /* ===== Loading ===== */
        .um-loading {
          text-align: center;
          padding: 2rem;
          color: #6b7280;
          font-size: 1rem;
        }

        /* ===== Modal Overlay ===== */
        .um-modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 100;
          padding: 1rem;
          animation: um-fade-in 0.2s ease;
        }

        @keyframes um-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* ===== Modal Content ===== */
        .um-modal {
          background: white;
          padding: 1.5rem;
          border-radius: 0.75rem;
          width: 100%;
          max-width: 450px;
          position: relative;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          animation: um-slide-up 0.3s ease;
        }

        @keyframes um-slide-up {
          from { 
            opacity: 0; 
            transform: translateY(20px) scale(0.98); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }

        .um-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #e5e7eb;
        }

        .um-modal-header h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #111827;
          margin: 0;
        }

        .um-modal-close {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #6b7280;
          line-height: 1;
          padding: 0.25rem;
          border-radius: 0.25rem;
          transition: background-color 0.2s ease, color 0.2s ease;
        }

        .um-modal-close:hover {
          background-color: #f3f4f6;
          color: #111827;
        }

        /* ===== Formulaire Modal ===== */
        .um-modal-form {
          display: flex;
          flex-direction: column;
        }

        .um-form-group {
          margin-bottom: 1rem;
        }

        .um-form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
          margin-bottom: 0.375rem;
        }

        .um-form-input {
          width: 100%;
          padding: 0.625rem 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          background-color: white;
        }

        .um-form-input::placeholder {
          color: #9ca3af;
        }

        .um-form-input:focus {
          outline: none;
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
        }

        .um-form-input.um-input-error {
          border-color: #ef4444;
          background-color: #fef2f2;
        }

        .um-form-input.um-input-error:focus {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }

        .um-error-text {
          display: block;
          color: #dc2626;
          font-size: 0.75rem;
          margin-top: 0.25rem;
        }

        /* ===== Password Field avec Actions ===== */
        .um-password-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .um-form-input-password {
          padding-right: 5.5rem;
          font-family: ui-monospace, SFMono-Regular, monospace;
          letter-spacing: 0.5px;
        }

        .um-password-actions {
          position: absolute;
          right: 0.375rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .um-password-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1.75rem;
          height: 1.75rem;
          padding: 0;
          border: none;
          border-radius: 0.25rem;
          background: transparent;
          font-size: 0.875rem;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.1s ease;
          color: #6b7280;
        }

        .um-password-btn:hover {
          background-color: #f3f4f6;
          color: #111827;
          transform: scale(1.05);
        }

        .um-password-btn:active {
          transform: scale(0.95);
        }

        .um-password-btn:disabled {
          color: #d1d5db;
          cursor: not-allowed;
        }

        .um-password-btn.copied {
          color: #059669;
          background-color: #d1fae5;
        }

        .um-password-btn.um-password-generate:hover {
          background-color: #fef3c7;
          color: #92400e;
        }

        .um-password-btn.um-password-copy:hover:not(:disabled) {
          background-color: #dbeafe;
          color: #1e40af;
        }

        .um-password-hint {
          margin-top: 0.375rem;
          font-size: 0.75rem;
          color: #6b7280;
          font-style: italic;
        }

        /* ===== Responsive ===== */
        @media (max-width: 640px) {
          .um-container {
            padding: 1rem;
          }

          .um-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .um-pagination {
            flex-direction: column;
            text-align: center;
          }

          .um-modal {
            margin: 1rem;
            max-width: calc(100vw - 2rem);
          }
          
          .um-password-actions {
            gap: 0.125rem;
          }
          
          .um-password-btn {
            width: 1.5rem;
            height: 1.5rem;
            font-size: 0.75rem;
          }
        }

        /* ===== Accessibilité ===== */
        .um-form-input:focus-visible,
        .um-btn:focus-visible,
        .um-pagination-btn:focus-visible,
        .um-modal-close:focus-visible,
        .um-password-btn:focus-visible {
          outline: 2px solid #f97316;
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
};

export default UserManagement;