import React, { useState, useEffect } from 'react';
import {
  MoreVertical, Eye, Edit, Trash2, CheckCircle, XCircle, Clock,
  Phone, Mail, Send, Reply, Archive, AlertCircle, Filter, Search,
  ChevronLeft, ChevronRight, Tag, Calendar, User, MessageSquare,
  ArrowLeft
} from 'lucide-react';
import './MessagesList.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// 🎨 Configurations d'affichage
const statutConfig = {
  nouveau: { label: 'Nouveau', className: 'message-card__badge--nouveau', icon: Clock, priority: 1 },
  lu: { label: 'Lu', className: 'message-card__badge--lu', icon: Eye, priority: 2 },
  en_cours: { label: 'En cours', className: 'message-card__badge--en-cours', icon: AlertCircle, priority: 3 },
  repondu: { label: 'Répondu', className: 'message-card__badge--repondu', icon: CheckCircle, priority: 4 },
  archive: { label: 'Archivé', className: 'message-card__badge--archive', icon: Archive, priority: 5 },
};

const prioriteConfig = {
  faible: { label: 'Faible', className: 'message-card__badge-priorite--faible', dotClass: '' },
  normale: { label: 'Normale', className: 'message-card__badge-priorite--normale', dotClass: '' },
  haute: { label: 'Haute', className: 'message-card__badge-priorite--haute', dotClass: '' },
};

const sujetConfig = {
  admission: { label: 'Admission', icon: User, className: 'message-card__badge-sujet--admission' },
  information: { label: 'Information', icon: MessageSquare, className: 'message-card__badge-sujet--information' },
  visite: { label: 'Visite', icon: Calendar, className: 'message-card__badge-sujet--visite' },
  autre: { label: 'Autre', icon: Tag, className: 'message-card__badge-sujet--autre' },
};

const sourceConfig = {
  site: 'Site web',
  popup: 'Popup',
  footer: 'Footer',
  mobile: 'Mobile',
};

// 🔽 Dropdown Menu Component
const MessageDropdown = ({ message, onUpdate, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResponseModal, setShowResponseModal] = useState(false);
  const [response, setResponse] = useState(message.reponse_admin || '');
  const [sendEmail, setSendEmail] = useState(false);

  const handleStatusChange = async (newStatut) => {
    try {
      const res = await fetch(`${API_URL}/admin/messages/${message.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ statut: newStatut }),
      });
      if (res.ok) {
        const data = await res.json();
        onUpdate(message.id, { statut: newStatut, date_reponse: data.data.date_reponse });
        setIsOpen(false);
      }
    } catch (err) {
      console.error('Erreur mise à jour statut:', err);
    }
  };

  const handlePriorityChange = async (newPriorite) => {
    try {
      const res = await fetch(`${API_URL}/admin/messages/${message.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ priorite: newPriorite }),
      });
      if (res.ok) {
        const data = await res.json();
        onUpdate(message.id, { priorite: newPriorite });
        setIsOpen(false);
      }
    } catch (err) {
      console.error('Erreur mise à jour priorité:', err);
    }
  };

  const handleSendResponse = async () => {
    try {
      const res = await fetch(`${API_URL}/admin/messages/${message.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          reponse_admin: response,
          envoyer_email: sendEmail,
          statut: 'repondu'
        }),
      });
      if (res.ok) {
        const data = await res.json();
        onUpdate(message.id, {
          reponse_admin: response,
          date_reponse: data.data.date_reponse,
          statut: 'repondu'
        });
        setShowResponseModal(false);
        setIsOpen(false);
        setResponse('');
        setSendEmail(false);
      }
    } catch (err) {
      console.error('Erreur envoi réponse:', err);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Supprimer ce message définitivement ?')) return;
    try {
      const res = await fetch(`${API_URL}/admin/messages/${message.id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (res.ok) {
        onDelete(message.id);
        setIsOpen(false);
      }
    } catch (err) {
      console.error('Erreur suppression:', err);
    }
  };

  const SujetIcon = sujetConfig[message.sujet]?.icon || Tag;

  return (
    <>
      <div className="message-card__dropdown">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="message-card__dropdown-btn"
          aria-label="Menu actions"
          aria-expanded={isOpen}
        >
          <MoreVertical size={18} />
        </button>

        {isOpen && (
          <>
            <div className="messages-list__dropdown-overlay" onClick={() => setIsOpen(false)} />
            <div className="message-card__dropdown-menu">

              {/* Statut */}
              <div className="message-card__dropdown-section">
                <span className="message-card__dropdown-label">Statut</span>
              </div>
              {Object.entries(statutConfig).map(([key, config]) => {
                const Icon = config.icon;
                return (
                  <button
                    key={key}
                    onClick={() => handleStatusChange(key)}
                    className={`message-card__dropdown-item ${message.statut === key ? 'message-card__dropdown-item--active' : ''
                      }`}
                  >
                    <Icon size={14} />
                    {config.label}
                  </button>
                );
              })}

              <div className="message-card__dropdown-divider" />

              {/* Priorité */}
              <div className="message-card__dropdown-section">
                <span className="message-card__dropdown-label">Priorité</span>
              </div>
              {Object.entries(prioriteConfig).map(([key, config]) => (
                <button
                  key={key}
                  onClick={() => handlePriorityChange(key)}
                  className={`message-card__dropdown-item ${message.priorite === key ? 'message-card__dropdown-item--priority-active' : ''
                    }`}
                >
                  {config.label}
                </button>
              ))}

              <div className="message-card__dropdown-divider" />

              {/* Actions */}
              <button
                onClick={() => { setResponse(message.reponse_admin || ''); setShowResponseModal(true); }}
                className="message-card__dropdown-item"
              >
                <Reply size={14} />
                Répondre
              </button>

              <div className="message-card__dropdown-divider" />

              <button onClick={handleDelete} className="message-card__dropdown-item message-card__dropdown-item--danger">
                <Trash2 size={14} />
                Supprimer
              </button>
            </div>
          </>
        )}
      </div>

      {/* Modal réponse */}
      {showResponseModal && (
        <div className="messages-list__modal-overlay" onClick={() => setShowResponseModal(false)}>
          <div className="messages-list__modal" onClick={e => e.stopPropagation()}>
            <div className="messages-list__modal-header">
              <Reply size={20} className="message-card__icon" />
              <h3 className="messages-list__modal-title">Répondre au message</h3>
            </div>

            <div className="messages-list__modal-original">
              <p className="messages-list__modal-original-label">Message original</p>
              <p className="messages-list__modal-original-text">{message.message}</p>
            </div>

            <textarea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              placeholder="Votre réponse..."
              className="messages-list__modal-textarea"
              rows={5}
            />

            <label className="messages-list__modal-checkbox">
              <input
                type="checkbox"
                checked={sendEmail}
                onChange={(e) => setSendEmail(e.target.checked)}
              />
              Envoyer une copie par email à {message.contact.email}
            </label>

            <div className="messages-list__modal-actions">
              <button
                onClick={() => setShowResponseModal(false)}
                className="messages-list__modal-btn messages-list__modal-btn--cancel"
              >
                Annuler
              </button>
              <button
                onClick={handleSendResponse}
                disabled={!response.trim()}
                className="messages-list__modal-btn messages-list__modal-btn--send"
              >
                <Send size={14} />
                Envoyer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// 📬 Message Card Component
const MessageCard = ({ message, onUpdate, onDelete }) => {
  const statut = statutConfig[message.statut] || statutConfig.nouveau;
  const priorite = prioriteConfig[message.priorite] || prioriteConfig.normale;
  const sujet = sujetConfig[message.sujet] || sujetConfig.autre;
  const SujetIcon = sujet.icon;
  const StatusIcon = statut.icon;

  return (
    <article className={`message-card ${message.is_nouveau ? 'message-card--nouveau' : ''}`}>

      {/* Header avec dropdown */}
      <header className="message-card__header">
        <div className="message-card__badges">
          <span className={`message-card__badge ${statut.className}`}>
            <StatusIcon size={12} />
            {statut.label}
          </span>
          <span className={`message-card__badge-priorite ${priorite.className}`}>
            {priorite.label}
          </span>
          <span className={`message-card__badge-sujet ${sujet.className}`}>
            <SujetIcon size={12} />
            {sujet.label}
          </span>
        </div>
        <MessageDropdown message={message} onUpdate={onUpdate} onDelete={onDelete} />
      </header>

      {/* Contenu */}
      <div className="message-card__content">

        {/* 👤 Contact */}
        <section>
          <h4 className="message-card__section-title">
            <User size={14} className="message-card__icon" />
            Contact
          </h4>
          <p className="message-card__text">{message.contact.nom}</p>
          <div className="message-card__info-row">
            <a href={`mailto:${message.contact.email}`} className="message-card__link">
              <Mail size={12} />
              {message.contact.email}
            </a>
            {message.contact.telephone && (
              <a href={`tel:${message.contact.telephone}`} className="message-card__link">
                <Phone size={12} />
                {message.contact.telephone}
              </a>
            )}
          </div>
        </section>

        {/* 📝 Message */}
        <section>
          <h4 className="message-card__section-title">
            <MessageSquare size={14} className="message-card__icon" />
            Message
          </h4>
          <div className="message-card__message-box">
            <p className="message-card__message-text">{message.message_excerpt}</p>
            {message.message.length > 150 && (
              <button className="message-card__message-expand">
                Voir tout le message →
              </button>
            )}
          </div>
        </section>

        {/* 💬 Réponse admin */}
        {message.reponse_admin && (
          <div className="message-card__response">
            <p className="message-card__response-text">
              <CheckCircle size={14} />
              <span><strong>Réponse :</strong> {message.reponse_admin}</span>
            </p>
            {message.date_reponse && (
              <p className="message-card__response-date">Le {message.date_reponse}</p>
            )}
          </div>
        )}

        {/* 📊 Métadonnées */}
        <footer className="message-card__meta">
          <span className="message-card__info-row">
            <Calendar size={10} />
            Reçu le {message.created_at}
          </span>
          {message.source && (
            <span className="message-card__source">
              {sourceConfig[message.source] || message.source}
            </span>
          )}
        </footer>
      </div>

      {/* Badge "Nouveau" animé */}
      {message.is_nouveau && (
        <div className="message-card__nouveau-badge">
          <span className="message-card__nouveau-dot" aria-label="Nouveau message" />
        </div>
      )}
    </article>
  );
};

// 📋 Main Component
const MessagesList = ({
  messages = [],
  pagination = {},
  availableFilters = {},
  isLoading = false,
  error = null,
  fetchMessages,
  updateMessageStatus,
  deleteMessage
}) => {
  // Local state for UI controls only (filters, pagination)
  const [filters, setFilters] = useState({
    statut: '', priorite: '', sujet: '', source: '', search: '', date_debut: '', date_fin: ''
  });
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(12);

  // Fetch data when filters or page changes - calls the prop callback
  useEffect(() => {
    if (fetchMessages) {
      fetchMessages({
        page: currentPage,
        per_page: perPage,
        ...Object.fromEntries(Object.entries(filters).filter(([_, v]) => v))
      });
    }
  }, [fetchMessages, currentPage, perPage, filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const handleUpdate = (id, updates) => {
    if (updateMessageStatus) {
      updateMessageStatus(id, updates);
    }
  };

  const handleDelete = (id) => {
    if (deleteMessage) {
      deleteMessage(id);
    }
  };

  const clearFilters = () => {
    setFilters({ statut: '', priorite: '', sujet: '', source: '', search: '', date_debut: '', date_fin: '' });
    setCurrentPage(1);
  };

  const hasActiveFilters = Object.values(filters).some(v => v);
  const activeFiltersCount = Object.values(filters).filter(v => v).length;

  return (
    <div className="messages-list">
      {/* En-tête */}
      <header className="messages-list__header">
        <h1 className="messages-list__title">
          <a href="/admin" className="rdv-back-link">
            <ArrowLeft size={14} />
          </a>Messages de contact</h1>
        <p className="messages-list__subtitle">
          {pagination.total} message{pagination.total > 1 ? 's' : ''} • {pagination.nouveau_count || 0} nouveau{(pagination.nouveau_count || 0) > 1 ? 'x' : ''}
        </p>
      </header>

      {/* Stats rapides */}
      <div className="messages-list__stats">
        <div className="messages-list__stat messages-list__stat--nouveau">
          <p className="messages-list__stat-value">{pagination.nouveau_count || 0}</p>
          <p className="messages-list__stat-label">Nouveaux</p>
        </div>
        <div className="messages-list__stat messages-list__stat--haute">
          <p className="messages-list__stat-value">
            {messages.filter(m => m.priorite === 'haute' && m.statut !== 'repondu').length}
          </p>
          <p className="messages-list__stat-label">Priorité haute</p>
        </div>
        <div className="messages-list__stat messages-list__stat--repondu">
          <p className="messages-list__stat-value">
            {messages.filter(m => m.statut === 'repondu').length}
          </p>
          <p className="messages-list__stat-label">Répondus</p>
        </div>
      </div>

      {/* Barre de filtres */}
      <div className="messages-list__filters">
        <div className="messages-list__filters-header">
          <h3 className="messages-list__filters-title">
            <Filter size={14} /> Filtres
          </h3>
          <button
            className="messages-list__filters-toggle"
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          >
            {showAdvancedFilters ? 'Masquer' : 'Afficher'} avancés
          </button>
        </div>

        <div className="messages-list__filters-grid">
          {/* Recherche */}
          <div className="messages-list__filter-group messages-list__search-wrapper">
            <Search size={16} className="messages-list__search-icon" />
            <input
              type="text"
              placeholder="Rechercher (nom, email, message)..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="messages-list__filter-input messages-list__search-input"
            />
          </div>

          {/* Statut */}
          <div className="messages-list__filter-group">
            <label className="messages-list__filter-label">Statut</label>
            <select
              value={filters.statut}
              onChange={(e) => handleFilterChange('statut', e.target.value)}
              className="messages-list__filter-select"
            >
              <option value="">Tous</option>
              {availableFilters.statuts?.map(s => (
                <option key={s} value={s}>{statutConfig[s]?.label || s}</option>
              ))}
            </select>
          </div>

          {/* Priorité */}
          <div className="messages-list__filter-group">
            <label className="messages-list__filter-label">Priorité</label>
            <select
              value={filters.priorite}
              onChange={(e) => handleFilterChange('priorite', e.target.value)}
              className="messages-list__filter-select"
            >
              <option value="">Toutes</option>
              {availableFilters.priorites?.map(p => (
                <option key={p} value={p}>{prioriteConfig[p]?.label || p}</option>
              ))}
            </select>
          </div>

          {/* Sujet */}
          <div className="messages-list__filter-group">
            <label className="messages-list__filter-label">Sujet</label>
            <select
              value={filters.sujet}
              onChange={(e) => handleFilterChange('sujet', e.target.value)}
              className="messages-list__filter-select"
            >
              <option value="">Tous</option>
              {availableFilters.sujets?.map(s => (
                <option key={s} value={s}>{sujetConfig[s]?.label || s}</option>
              ))}
            </select>
          </div>

          {/* Source */}
          <div className="messages-list__filter-group">
            <label className="messages-list__filter-label">Source</label>
            <select
              value={filters.source}
              onChange={(e) => handleFilterChange('source', e.target.value)}
              className="messages-list__filter-select"
            >
              <option value="">Toutes</option>
              {availableFilters.sources?.map(src => (
                <option key={src} value={src}>{sourceConfig[src] || src}</option>
              ))}
            </select>
          </div>

          {/* Dates (avancé) */}
          {showAdvancedFilters && (
            <>
              <div className="messages-list__filter-group">
                <label className="messages-list__filter-label">Du</label>
                <input
                  type="date"
                  value={filters.date_debut}
                  onChange={(e) => handleFilterChange('date_debut', e.target.value)}
                  className="messages-list__filter-input"
                />
              </div>
              <div className="messages-list__filter-group">
                <label className="messages-list__filter-label">Au</label>
                <input
                  type="date"
                  value={filters.date_fin}
                  onChange={(e) => handleFilterChange('date_fin', e.target.value)}
                  className="messages-list__filter-input"
                />
              </div>
            </>
          )}
        </div>

        {/* Actions */}
        {hasActiveFilters && (
          <div className="messages-list__filters-actions">
            <button onClick={clearFilters} className="messages-list__clear-btn">
              Réinitialiser les filtres
            </button>
            <span className="messages-list__filters-count">
              {activeFiltersCount} filtre{activeFiltersCount > 1 ? 's' : ''} actif{activeFiltersCount > 1 ? 's' : ''}
            </span>
          </div>
        )}
      </div>

      {/* États */}
      {isLoading ? (
        <div className="messages-list__state">
          <div className="messages-list__loader" />
          <p>Chargement des messages...</p>
        </div>
      ) : error ? (
        <div className="messages-list__state">
          <AlertCircle size={48} className="messages-list__state-icon" />
          <p className="messages-list__state-title messages-list__error">{error}</p>
          <button
            onClick={() => fetchMessages?.({ page: currentPage, per_page: perPage, ...filters })}
            className="messages-list__state-btn"
          >
            Réessayer
          </button>
        </div>
      ) : messages.length === 0 ? (
        <div className="messages-list__state">
          <MessageSquare size={48} className="messages-list__state-icon" />
          <p className="messages-list__state-title">Aucun message trouvé</p>
          <p className="messages-list__state-text">Essayez de modifier vos filtres</p>
          {hasActiveFilters && (
            <button onClick={clearFilters} className="messages-list__state-btn">
              Voir tous les messages
            </button>
          )}
        </div>
      ) : (
        <>
          {/* Grille de cartes */}
          <div className="messages-list__grid">
            {messages.map(message => (
              <MessageCard
                key={message.id}
                message={message}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            ))}
          </div>

          {/* Pagination */}
          {pagination.last_page > 1 && (
            <nav className="messages-list__pagination">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="messages-list__pagination-btn"
              >
                <ChevronLeft size={16} />
                Précédent
              </button>
              <span className="messages-list__pagination-info">
                Page {currentPage} sur {pagination.last_page}
              </span>
              <button
                onClick={() => setCurrentPage(p => Math.min(pagination.last_page, p + 1))}
                disabled={currentPage === pagination.last_page || !pagination.has_more}
                className="messages-list__pagination-btn"
              >
                Suivant
                <ChevronRight size={16} />
              </button>
            </nav>
          )}
        </>
      )}
    </div>
  );
};

export default MessagesList;