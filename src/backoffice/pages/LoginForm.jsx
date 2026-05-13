import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, fetchCurrentUser } from '../../redux/actions/api';

function LoginForm({ isAuthenticated, isLoading, authError, authErrors, loginUser }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/admin');
    }
  }, [isAuthenticated, history]);

  useEffect(() => {
    if (authErrors && Object.keys(authErrors).length > 0) {
      setErrors(authErrors);
    }
    if (authError) {
      setStatus({ type: 'error', message: authError });
    }
  }, [authErrors, authError]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);
    setErrors({});
    loginUser(formData);
  };

  return (
    <>
      <div className="login-wrapper">
        <div className="login-card">
          
          {/* En-tête */}
          <div className="login-header">
            <h2 className="login-title">Connexion à votre compte</h2>
          </div>

          {/* Formulaire */}
          <form className="login-form" onSubmit={handleSubmit}>
            
            {/* Message de statut */}
            {status && (
              <div className={`status-message ${status.type === 'error' ? 'error' : 'success'}`}>
                {typeof status === 'string' ? status : status.message}
              </div>
            )}

            {/* Champ Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Adresse email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                className={`form-input ${errors.email ? 'input-error' : ''}`}
                placeholder="vous@exemple.com"
              />
              {errors.email && (
                <p className="error-text">{errors.email[0]}</p>
              )}
            </div>

            {/* Champ Mot de passe */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading}
                className={`form-input ${errors.password ? 'input-error' : ''}`}
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="error-text">{errors.password[0]}</p>
              )}
            </div>

            {/* Options : Se souvenir & Mot de passe oublié */}
            <div className="form-options">
              <div className="remember-me">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  checked={formData.remember}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="checkbox-input"
                />
                <label htmlFor="remember" className="checkbox-label">
                  Se souvenir de moi
                </label>
              </div>
              {/* <Link to="/forgot-password" className="forgot-link">
                Mot de passe oublié ?
              </Link> */}
            </div>

            {/* Bouton de soumission */}
            <button
              type="submit"
              disabled={isLoading}
              className="submit-button"
            >
              {isLoading ? (
                <span className="button-loading">
                  <svg className="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Connexion...
                </span>
              ) : 'Se connecter'}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        /* Layout principal */
        .login-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f9fafb;
          padding: 3rem 1rem;
        }

        @media (min-width: 640px) {
          .login-wrapper {
            padding: 3rem 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .login-wrapper {
            padding: 3rem 2rem;
          }
        }

        /* Carte de connexion */
        .login-card {
          width: 100%;
          max-width: 28rem;
          background: white;
          padding: 2rem;
          border-radius: 0.75rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        /* En-tête */
        .login-header {
          text-align: center;
        }

        .login-title {
          margin-top: 0.5rem;
          font-size: 1.875rem;
          font-weight: 800;
          color: #111827;
        }

        /* Formulaire */
        .login-form {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Message de statut */
        .status-message {
          padding: 0.75rem;
          border-radius: 0.375rem;
          font-size: 0.875rem;
        }

        .status-message.error {
          background-color: #fef2f2;
          color: #b91c1c;
        }

        .status-message.success {
          background-color: #f0fdf4;
          color: #15803d;
        }

        /* Groupes de formulaire */
        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
        }

        .form-input {
          margin-top: 0.25rem;
          display: block;
          width: 100%;
          padding: 0.5rem 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          font-size: 1rem;
          transition: all 0.2s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
        }

        .form-input::placeholder {
          color: #9ca3af;
        }

        .form-input:disabled {
          background-color: #f3f4f6;
          cursor: not-allowed;
          opacity: 0.7;
        }

        .form-input.input-error {
          border-color: #ef4444;
          background-color: #fef2f2;
        }

        .form-input.input-error:focus {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }

        .error-text {
          margin-top: 0.25rem;
          font-size: 0.875rem;
          color: #dc2626;
        }

        /* Options du formulaire */
        .form-options {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .remember-me {
          display: flex;
          align-items: center;
        }

        .checkbox-input {
          height: 1rem;
          width: 1rem;
          color: #ea580c;
          border-color: #d1d5db;
          border-radius: 0.25rem;
          cursor: pointer;
        }

        .checkbox-input:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }

        .checkbox-input:focus {
          outline: none;
          ring: 2px solid #f97316;
        }

        .checkbox-label {
          margin-left: 0.5rem;
          font-size: 0.875rem;
          color: #111827;
          cursor: pointer;
        }

        .forgot-link {
          font-size: 0.875rem;
          font-weight: 500;
          color: #ea580c;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .forgot-link:hover {
          color: #f97316;
        }

        /* Bouton de soumission */
        .submit-button {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 0.75rem 1rem;
          border: none;
          border-radius: 0.375rem;
          background-color: #ea580c;
          color: white;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s ease;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }

        .submit-button:hover:not(:disabled) {
          background-color: #c2410c;
        }

        .submit-button:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0 5px rgba(249, 115, 22, 0.5);
        }

        .submit-button:disabled {
          background-color: #fb923c;
          cursor: not-allowed;
        }

        .button-loading {
          display: flex;
          align-items: center;
        }

        .spinner {
          animation: spin 1s linear infinite;
          height: 1rem;
          width: 1rem;
          margin-right: 0.5rem;
          color: white;
        }

        .spinner.opacity-25 {
          opacity: 0.25;
        }

        .spinner.opacity-75 {
          opacity: 0.75;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Utility classes pour le SVG */
        .opacity-25 {
          opacity: 0.25;
        }

        .opacity-75 {
          opacity: 0.75;
        }
      `}</style>
    </>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.data.api.isAuthenticated,
  isLoading: state.data.api.isLoadingData?.isLoadingData_LOGIN_REQUEST || false,
  authError: state.data.api.authError,
  authErrors: state.data.api.authErrors
});

const mapDispatchToProps = dispatch => ({
  loginUser: data => dispatch(loginUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);