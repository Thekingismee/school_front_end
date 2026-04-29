import React, { useState } from 'react';
import { 
  UserPlus, 
  MessageSquare, 
  CalendarCheck, 
  FileText, 
  Newspaper,
  ArrowRight,
  LogOut,  // 👈 Nouveau : icône de déconnexion
  NewspaperIcon
} from 'lucide-react';
import { useHistory } from 'react-router-dom';  // 👈 Nouveau : pour la redirection
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/api';

const Homeadm = ({ logoutUser, isAuthenticated }) => {
  const history = useHistory();  // 👈 Hook pour la navigation
  const [isLoggingOut, setIsLoggingOut] = useState(false);  // 👈 État de chargement

  // 👇 Fonction de déconnexion
  const handleLogout = async () => {
    if (isLoggingOut) return;
    
    // Confirmation optionnelle
    if (!window.confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
      return;
    }

    setIsLoggingOut(true);

    try {
      await logoutUser();
      history.push('/login');
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      history.push('/login');
    } finally {
      setIsLoggingOut(false);
    }
  };

  const menuItems = [
    {
      href: "/inscriptions",
      label: "Inscriptions",
      description: "Gérer les demandes d'admission",
      icon: UserPlus,
      accent: "from-emerald-500 to-teal-600",
      hoverGlow: "rgba(16, 185, 129, 0.25)"
    },
    {
      href: "/messages",
      label: "Messages",
      description: "Consulter les échanges reçus",
      icon: MessageSquare,
      accent: "from-blue-500 to-indigo-600",
      hoverGlow: "rgba(59, 130, 246, 0.25)"
    },
    {
      href: "/rendez-vous-liste",
      label: "Rendez-vous",
      description: "Voir et organiser les visites",
      icon: CalendarCheck,
      accent: "from-violet-500 to-purple-600",
      hoverGlow: "rgba(139, 92, 246, 0.25)"
    },
    {
      href: "/joinUs",
      label: "Candidatures",
      description: "Traiter les demandes de recrutement",
      icon: FileText,
      accent: "from-orange-500 to-amber-600",
      hoverGlow: "rgba(245, 158, 11, 0.25)"
    },
    {
      href: "/ActualitesList",
      label: "Actualités",
      description: "Publier et modifier les articles",
      icon: Newspaper,
      accent: "from-rose-500 to-pink-600",
      hoverGlow: "rgba(244, 63, 94, 0.25)"
    },
    {
      href: "/Users",
      label: "Utilisateurs",
      description: "Gérer les comptes utilisateurs",
      icon: UserPlus,
      accent: "from-emerald-500 to-teal-600",
      hoverGlow: "rgba(16, 185, 129, 0.25)"
    },
    {
      href: "/newsletter",
      label: "Newsletter",
      description: "Gérer l'envoi de la newsletter",
      icon: NewspaperIcon,
      accent: "from-rose-500 to-pink-600",
      hoverGlow: "rgba(56, 114, 252, 0.29)"
    }
  ];

  return (
    <>
      <main className="admin-home">
        {/* Header */}
        <header className="admin-header">
          <div className="header-content">
            <div className="header-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div>
              <h1 className="welcome-title">Tableau de bord</h1>
              <p className="welcome-subtitle">Gérez votre établissement en toute simplicité</p>
            </div>
          </div>
          
          {/* 👇 Badge utilisateur + Bouton de déconnexion */}
          <div className="user-section">
            <div className="user-badge">
              <span className="user-avatar">A</span>
              <span className="user-name">Admin</span>
            </div>
            
            {/* 👇 Bouton de déconnexion */}
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="logout-btn"
              title="Se déconnecter"
              aria-label="Se déconnecter"
            >
              <LogOut size={18} className={`logout-icon ${isLoggingOut ? 'spinning' : ''}`} />
              <span className="logout-text">{isLoggingOut ? '...' : 'Déconnexion'}</span>
            </button>
          </div>
        </header>

        {/* Navigation Grid */}
        <nav className="nav-grid" aria-label="Navigation principale">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a 
                key={item.href} 
                href={item.href} 
                className="nav-card"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="card-content">
                  <div className={`card-icon-wrapper gradient-${index}`}>
                    <Icon size={24} className="card-icon" />
                    <div className={`icon-glow`} style={{ backgroundColor: item.hoverGlow }} />
                  </div>
                  
                  <div className="card-text">
                    <h3 className="card-title">{item.label}</h3>
                    <p className="card-desc">{item.description}</p>
                  </div>
                  
                  <ArrowRight size={18} className="card-arrow" />
                </div>
                
                <div className={`card-accent gradient-${index}`} />
              </a>
            );
          })}
        </nav>

        {/* Footer hint */}
        <footer className="admin-footer">
          <p>Besoin d'aide ? <a href="/support">Contactez le support</a></p>
        </footer>
      </main>

      <style jsx>{`
        /* ===== RESET & BASE ===== */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .admin-home {
          min-height: 100vh;
          width: 100%;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #1e293b;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
        }

        /* ===== HEADER ===== */
        .admin-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
          margin-bottom: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.6);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .header-content {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .header-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .welcome-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
        }

        .welcome-subtitle {
          font-size: 0.9rem;
          color: #64748b;
          margin-top: 2px;
        }

        /* 👇 Section utilisateur + logout */
        .user-section {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .user-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 1rem;
          background: #f1f5f9;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.85rem;
        }

        /* 👇 Bouton de déconnexion */
        .logout-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.85rem;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
        }

        .logout-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
        }

        .logout-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .logout-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .logout-icon {
          transition: transform 0.2s ease;
        }

        .logout-btn:hover:not(:disabled) .logout-icon {
          transform: translateX(-2px);
        }

        .logout-icon.spinning {
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .logout-text {
          white-space: nowrap;
        }

        /* ===== NAV GRID ===== */
        .nav-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.25rem;
          flex: 1;
          padding-bottom: 1rem;
        }

        .nav-card {
          position: relative;
          background: white;
          border-radius: 20px;
          padding: 1.5rem;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(226, 232, 240, 0.8);
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: block;
          animation: fadeInUp 0.5s ease forwards;
          opacity: 0;
          transform: translateY(12px);
        }

        .nav-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
          border-color: transparent;
        }

        .nav-card:active {
          transform: translateY(-2px);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .card-content {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          position: relative;
          z-index: 2;
        }

        .card-icon-wrapper {
          position: relative;
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
        }

        .card-icon {
          position: relative;
          z-index: 2;
          color: white;
          transition: transform 0.3s ease;
        }

        .nav-card:hover .card-icon {
          transform: scale(1.1);
        }

        .icon-glow {
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
          filter: blur(20px);
        }

        .nav-card:hover .icon-glow {
          opacity: 1;
        }

        /* Gradients pour chaque carte */
        .gradient-0 { background: linear-gradient(135deg, #10b981, #0d9488); }
        .gradient-1 { background: linear-gradient(135deg, #3b82f6, #6366f1); }
        .gradient-2 { background: linear-gradient(135deg, #8b5cf6, #a855f7); }
        .gradient-3 { background: linear-gradient(135deg, #f97316, #ea580c); }
        .gradient-4 { background: linear-gradient(135deg, #f43f5e, #ec4899); }
        .gradient-5 { background: linear-gradient(135deg, #10b981b3, #105fb9b3); }
        .gradient-6 { background: linear-gradient(135deg, #10a8b9b3, #45b910b3); }

        .card-text {
          flex: 1;
          min-width: 0;
        }

        .card-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 0.35rem;
          line-height: 1.3;
        }

        .card-desc {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.5;
        }

        .card-arrow {
          color: #94a3b8;
          transition: all 0.3s ease;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .nav-card:hover .card-arrow {
          color: #3b82f6;
          transform: translateX(4px);
        }

        .card-accent {
          position: absolute;
          top: 0;
          right: 0;
          width: 120px;
          height: 120px;
          border-radius: 0 0 0 100%;
          opacity: 0.08;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .nav-card:hover .card-accent {
          opacity: 0.15;
        }

        /* ===== FOOTER ===== */
        .admin-footer {
          text-align: center;
          padding: 1.5rem;
          color: #64748b;
          font-size: 0.9rem;
        }

        .admin-footer a {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .admin-footer a:hover {
          color: #2563eb;
          text-decoration: underline;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .admin-home {
            padding: 1rem;
          }

          .admin-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            padding: 1rem 1.25rem;
          }

          .header-content {
            gap: 0.85rem;
          }

          .header-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }

          .welcome-title {
            font-size: 1.25rem;
          }

          .welcome-subtitle {
            font-size: 0.85rem;
          }

          .user-section {
            width: 100%;
            justify-content: space-between;
          }

          .user-badge {
            padding: 0.4rem 0.85rem;
            font-size: 0.85rem;
          }

          .user-avatar {
            width: 28px;
            height: 28px;
            font-size: 0.75rem;
          }

          .logout-btn {
            padding: 0.4rem 0.75rem;
            font-size: 0.8rem;
          }

          .nav-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .nav-card {
            padding: 1.25rem;
          }

          .card-icon-wrapper {
            width: 48px;
            height: 48px;
            border-radius: 12px;
          }

          .card-title {
            font-size: 1.05rem;
          }

          .card-desc {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .admin-header {
            padding: 0.85rem 1rem;
          }

          .welcome-title {
            font-size: 1.15rem;
          }

          .user-section {
            flex-direction: column;
            align-items: stretch;
            gap: 0.5rem;
          }

          .logout-btn {
            width: 100%;
            justify-content: center;
          }

          .nav-card {
            padding: 1.1rem;
            border-radius: 16px;
          }

          .card-content {
            gap: 0.85rem;
          }

          .card-icon-wrapper {
            width: 44px;
            height: 44px;
          }

          .card-title {
            font-size: 1rem;
          }
        }

        /* ===== ACCESSIBILITY ===== */
        .nav-card:focus-visible,
        .logout-btn:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          .nav-card,
          .card-icon,
          .card-arrow,
          .icon-glow,
          .logout-btn,
          .logout-icon {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default connect(null, { logoutUser })(Homeadm);