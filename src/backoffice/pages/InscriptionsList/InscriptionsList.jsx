import React, { useState, useEffect, useCallback } from 'react';
import { 
  MoreVertical, Eye, Edit, Trash2, CheckCircle, XCircle, Clock, 
  Phone, Mail, MapPin, GraduationCap, Calendar, User, AlertTriangle, 
  Search, ChevronLeft, ChevronRight 
} from 'lucide-react';
import './InscriptionsList.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';

// 🎨 Helpers d'affichage
const statutConfig = {
  en_attente: { label: 'En attente', className: 'inscription-card__badge--en-attente', icon: Clock },
  contacte: { label: 'Contacté', className: 'inscription-card__badge--contacte', icon: Phone },
  accepte: { label: 'Accepté', className: 'inscription-card__badge--accepte', icon: CheckCircle },
  refuse: { label: 'Refusé', className: 'inscription-card__badge--refuse', icon: XCircle },
};

const prioriteConfig = {
  faible: { label: 'Faible', className: 'inscription-card__badge-priorite--faible' },
  normale: { label: 'Normale', className: 'inscription-card__badge-priorite--normale' },
  haute: { label: 'Haute', className: 'inscription-card__badge-priorite--haute' },
};

const etablissementLabels = {
  maternelle: 'Maternelle',
  primaire: 'Primaire',
  college: 'Collège',
  lycee: 'Lycée',
};

// 🔽 Dropdown Menu
const DropdownMenu = ({ inscription, onUpdate, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [note, setNote] = useState(inscription.note_admin || '');

  const handleStatusChange = async (newStatut) => {
    try {
      const response = await fetch(`${API_URL}/admin/inscriptions/${inscription.id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ statut: newStatut, note_admin: note }),
      });
      
      if (response.ok) {
        onUpdate(inscription.id, { statut: newStatut });
        setIsOpen(false);
      }
    } catch (error) {
      console.error('Erreur mise à jour statut:', error);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Supprimer cette inscription ?')) return;
    try {
      const response = await fetch(`${API_URL}/admin/inscriptions/${inscription.id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.ok) {
        onDelete(inscription.id);
        setIsOpen(false);
      }
    } catch (error) {
      console.error('Erreur suppression:', error);
    }
  };

  return (
    <>
      <div className="inscription-card__dropdown">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inscription-card__dropdown-btn"
          aria-label="Menu actions"
          aria-expanded={isOpen}
        >
          <MoreVertical size={18} />
        </button>
        
        {isOpen && (
          <>
            <div className="inscriptions-list__dropdown-overlay" onClick={() => setIsOpen(false)} />
            <div className="inscription-card__dropdown-menu">
              <div className="inscription-card__dropdown-section">
                <span className="inscription-card__dropdown-label">Changer statut</span>
              </div>
              {Object.entries(statutConfig).map(([key, config]) => {
                const Icon = config.icon;
                return (
                  <button
                    key={key}
                    onClick={() => {
                      if (key === 'accepte' || key === 'refuse') {
                        setNote(inscription.note_admin || '');
                        setShowNoteModal(true);
                      } else {
                        handleStatusChange(key);
                      }
                    }}
                    className={`inscription-card__dropdown-item ${
                      inscription.statut === key ? 'inscription-card__dropdown-item--active' : ''
                    }`}
                  >
                    <Icon size={14} />
                    {config.label}
                  </button>
                );
              })}
              
              <div className="inscription-card__dropdown-divider" />
              
              {/* <button className="inscription-card__dropdown-item">
                <Eye size={14} />
                Voir détails
              </button> */}
              <button 
                onClick={() => setShowNoteModal(true)}
                className="inscription-card__dropdown-item"
              >
                <Edit size={14} />
                Ajouter une note
              </button>
              
              <div className="inscription-card__dropdown-divider" />
              
              <button onClick={handleDelete} className="inscription-card__dropdown-item inscription-card__dropdown-item--danger">
                <Trash2 size={14} />
                Supprimer
              </button>
            </div>
          </>
        )}
      </div>

      {showNoteModal && (
        <div className="inscriptions-list__modal-overlay" onClick={() => setShowNoteModal(false)}>
          <div className="inscriptions-list__modal" onClick={e => e.stopPropagation()}>
            <h3 className="inscriptions-list__modal-title">Note interne</h3>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Ajouter une note pour l'équipe..."
              className="inscriptions-list__modal-textarea"
              rows={4}
            />
            <div className="inscriptions-list__modal-actions">
              <button
                onClick={() => setShowNoteModal(false)}
                className="inscriptions-list__modal-btn inscriptions-list__modal-btn--cancel"
              >
                Annuler
              </button>
              <button
                onClick={() => {
                  handleStatusChange(inscription.statut);
                  setShowNoteModal(false);
                }}
                className="inscriptions-list__modal-btn inscriptions-list__modal-btn--save"
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// 🃏 Carte Inscription
const InscriptionCard = ({ inscription, onUpdate, onDelete }) => {
  const statut = statutConfig[inscription.statut] || statutConfig.en_attente;
  const priorite = prioriteConfig[inscription.priorite] || prioriteConfig.normale;
  const StatusIcon = statut.icon;

  return (
    <article className="inscription-card">
      <header className="inscription-card__header">
        <div className="inscription-card__badges">
          <span className={`inscription-card__badge ${statut.className}`}>
            <StatusIcon size={12} />
            {statut.label}
          </span>
          <span className={`inscription-card__badge-priorite ${priorite.className}`}>
            {priorite.label}
          </span>
        </div>
        <DropdownMenu inscription={inscription} onUpdate={onUpdate} onDelete={onDelete} />
      </header>

      <div className="inscription-card__content">
        {/* Parent */}
        <section>
          <h4 className="inscription-card__section-title">
            <User size={14} className="inscription-card__icon" />
            Informations du parent
          </h4>
          <p className="inscription-card__text">{inscription.parent.nom}</p>
          <div className="inscription-card__info-row">
            <span className="inscription-card__info-item">
              <Phone size={12} />
              {inscription.parent.telephone}
            </span>
            {inscription.parent.email && (
              <span className="inscription-card__info-item">
                <Mail size={12} />
                {inscription.parent.email}
              </span>
            )}
          </div>
        </section>

        {/* Élève */}
        <section>
          <h4 className="inscription-card__section-title">
            <GraduationCap size={14} className="inscription-card__icon" />
            Informations de l'élève
          </h4>
          <p className="inscription-card__text">{inscription.eleve.nom}</p>
          <div className="inscription-card__info-row">
            <span className="inscription-card__info-item">
              <Calendar size={12} />
              Né(e) le {inscription.eleve.date_naissance}
            </span>
            <span className="inscription-card__etablissement">
              {etablissementLabels[inscription.eleve.etablissement]}
            </span>
            <span className="inscription-card__level">
              {inscription.eleve.niveau}
            </span>
          </div>
        </section>

        {/* Message */}
        {inscription.message && (
          <div className="inscription-card__message">
            <p className="inscription-card__message-text">{inscription.message}</p>
          </div>
        )}

        {/* Métadonnées */}
        <footer className="inscription-card__meta">
          <span>Reçu le {inscription.created_at}</span>
          {inscription.source && (
            <span className="inscription-card__info-item">
              <MapPin size={10} />
              {inscription.source}
            </span>
          )}
        </footer>
      </div>

      {/* Note admin */}
      {inscription.note_admin && (
        <div className="inscription-card__note">
          <div className="inscription-card__note-box">
            <p className="inscription-card__note-text">
              <strong>Note :</strong> {inscription.note_admin}
            </p>
          </div>
        </div>
      )}
    </article>
  );
};

// 📋 Liste principale
const InscriptionsList = () => {
  const [inscriptions, setInscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({});
  
  const [filters, setFilters] = useState({ statut: '', priorite: '', etablissement: '', search: '' });
  const [availableFilters, setAvailableFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(12);

  const fetchInscriptions = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({
        page: currentPage,
        per_page: perPage,
        ...Object.fromEntries(Object.entries(filters).filter(([_, v]) => v)),
      });

      const response = await fetch(`${API_URL}/admin/inscriptions?${params}`, {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) throw new Error('Erreur de chargement');
      
      const result = await response.json();
      setInscriptions(result.data);
      setPagination(result.pagination);
      setAvailableFilters(result.filters || {});
    } catch (err) {
      setError(err.message);
      console.error('Erreur fetch inscriptions:', err);
    } finally {
      setLoading(false);
    }
  }, [currentPage, perPage, filters]);

  useEffect(() => { fetchInscriptions(); }, [fetchInscriptions]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const handleUpdate = (id, updates) => {
    setInscriptions(prev => prev.map(item => item.id === id ? { ...item, ...updates } : item));
  };

  const handleDelete = (id) => {
    setInscriptions(prev => prev.filter(item => item.id !== id));
  };

  const clearFilters = () => {
    setFilters({ statut: '', priorite: '', etablissement: '', search: '' });
    setCurrentPage(1);
  };

  return (
    <div className="inscriptions-list">
      {/* En-tête */}
      <header className="inscriptions-list__header">
        <h1 className="inscriptions-list__title">Gestion des inscriptions</h1>
        <p className="inscriptions-list__subtitle">
          {pagination.total} inscription{pagination.total > 1 ? 's' : ''} • Page {pagination.current_page || 1}
        </p>
      </header>

      {/* Filtres */}
      <div className="inscriptions-list__filters">
        <div className="inscriptions-list__filter-group inscriptions-list__search-wrapper">
          <Search size={16} className="inscriptions-list__search-icon" />
          <input
            type="text"
            placeholder="Rechercher (nom, email, téléphone)..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="inscriptions-list__filter-input inscriptions-list__search-input"
          />
        </div>

        <div className="inscriptions-list__filter-group">
          <label className="inscriptions-list__filter-label">Statut</label>
          <select
            value={filters.statut}
            onChange={(e) => handleFilterChange('statut', e.target.value)}
            className="inscriptions-list__filter-select"
          >
            <option value="">Tous les statuts</option>
            {availableFilters.statuts?.map(s => (
              <option key={s} value={s}>{statutConfig[s]?.label || s}</option>
            ))}
          </select>
        </div>

        <div className="inscriptions-list__filter-group">
          <label className="inscriptions-list__filter-label">Priorité</label>
          <select
            value={filters.priorite}
            onChange={(e) => handleFilterChange('priorite', e.target.value)}
            className="inscriptions-list__filter-select"
          >
            <option value="">Toutes</option>
            {availableFilters.priorites?.map(p => (
              <option key={p} value={p}>{prioriteConfig[p]?.label || p}</option>
            ))}
          </select>
        </div>

        <div className="inscriptions-list__filter-group">
          <label className="inscriptions-list__filter-label">Établissement</label>
          <select
            value={filters.etablissement}
            onChange={(e) => handleFilterChange('etablissement', e.target.value)}
            className="inscriptions-list__filter-select"
          >
            <option value="">Tous</option>
            {availableFilters.etablissements?.map(e => (
              <option key={e} value={e}>{etablissementLabels[e] || e}</option>
            ))}
          </select>
        </div>

        {(filters.statut || filters.priorite || filters.etablissement || filters.search) && (
          <button onClick={clearFilters} className="inscriptions-list__clear-btn">
            Réinitialiser
          </button>
        )}
      </div>

      {/* États */}
      {loading ? (
        <div className="inscriptions-list__state">
          <div className="inscriptions-list__loader" />
          <p>Chargement des inscriptions...</p>
        </div>
      ) : error ? (
        <div className="inscriptions-list__state">
          <AlertTriangle size={48} className="inscriptions-list__state-icon" />
          <p className="inscriptions-list__state-title inscriptions-list__error">{error}</p>
          <button onClick={fetchInscriptions} className="inscriptions-list__state-btn">Réessayer</button>
        </div>
      ) : inscriptions.length === 0 ? (
        <div className="inscriptions-list__state">
          <GraduationCap size={48} className="inscriptions-list__state-icon" />
          <p className="inscriptions-list__state-title">Aucune inscription trouvée</p>
          <p className="inscriptions-list__state-text">Essayez de modifier vos filtres</p>
          {(filters.statut || filters.priorite || filters.etablissement || filters.search) && (
            <button onClick={clearFilters} className="inscriptions-list__state-btn">
              Voir toutes les inscriptions
            </button>
          )}
        </div>
      ) : (
        <>
          <div className="inscriptions-list__grid">
            {inscriptions.map(inscription => (
              <InscriptionCard
                key={inscription.id}
                inscription={inscription}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            ))}
          </div>

          {pagination.last_page > 1 && (
            <nav className="inscriptions-list__pagination">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="inscriptions-list__pagination-btn"
              >
                <ChevronLeft size={16} />
                Précédent
              </button>
              <span className="inscriptions-list__pagination-info">
                Page {currentPage} sur {pagination.last_page}
              </span>
              <button
                onClick={() => setCurrentPage(p => Math.min(pagination.last_page, p + 1))}
                disabled={currentPage === pagination.last_page || !pagination.has_more}
                className="inscriptions-list__pagination-btn"
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

export default InscriptionsList;