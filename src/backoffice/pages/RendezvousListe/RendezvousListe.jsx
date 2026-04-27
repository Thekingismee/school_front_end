import React, { useState, useEffect, useCallback } from 'react';
import {
  MoreVertical, CheckCircle, XCircle, Clock, Calendar, MapPin, User, Phone, Mail,
  Edit, Trash2, Send, AlertCircle, Filter, Search, ChevronLeft, ChevronRight,
  Users, MessageSquare, Tag, ArrowLeft, ArrowRight
} from 'lucide-react';
import './RendezvousListe.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// 🎨 Configurations d'affichage
const statutConfig = {
  pending: { label: 'En attente', class: 'pending', icon: Clock, priority: 1 },
  confirmed: { label: 'Confirmé', class: 'confirmed', icon: CheckCircle, priority: 2 },
  cancelled: { label: 'Annulé', class: 'cancelled', icon: XCircle, priority: 3 },
  rejected: { label: 'Refusé', class: 'rejected', icon: AlertCircle, priority: 4 },
  completed: { label: 'Terminé', class: 'completed', icon: CheckCircle, priority: 5 },
};

const prioriteConfig = {
  faible: { label: 'Faible', class: 'faible', dotClass: 'faible' },
  normale: { label: 'Normale', class: 'normale', dotClass: 'normale' },
  haute: { label: 'Haute', class: 'haute', dotClass: 'haute' },
};

const lieuLabels = {
  'Lissasfa': 'Lissasfa',
};

// 🔽 Dropdown Menu Component
const RendezvousDropdown = ({ rdv, onUpdate, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [note, setNote] = useState(rdv.note_admin || '');
  const [sendConfirmation, setSendConfirmation] = useState(false);

  const handleStatusChange = async (newStatut) => {
    try {
      const res = await fetch(`${API_URL}/admin/rendezvous/${rdv.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          statut: newStatut,
          envoyer_confirmation: newStatut === 'confirmed' && sendConfirmation
        }),
      });
      if (res.ok) {
        const data = await res.json();
        onUpdate(rdv.id, {
          statut: newStatut,
          confirme_le: data.data.confirme_le,
          confirme_par: data.data.confirme_par
        });
        setIsOpen(false);
      }
    } catch (err) {
      console.error('Erreur mise à jour statut:', err);
    }
  };

  const handlePriorityChange = async (newPriorite) => {
    try {
      const res = await fetch(`${API_URL}/admin/rendezvous/${rdv.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ priorite: newPriorite }),
      });
      if (res.ok) {
        onUpdate(rdv.id, { priorite: newPriorite });
        setIsOpen(false);
      }
    } catch (err) {
      console.error('Erreur mise à jour priorité:', err);
    }
  };

  const handleSaveNote = async () => {
    try {
      const res = await fetch(`${API_URL}/admin/rendezvous/${rdv.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ note_admin: note }),
      });
      if (res.ok) {
        onUpdate(rdv.id, { note_admin: note });
        setShowNoteModal(false);
        setIsOpen(false);
      }
    } catch (err) {
      console.error('Erreur sauvegarde note:', err);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Supprimer ce rendez-vous définitivement ?')) return;
    try {
      const res = await fetch(`${API_URL}/admin/rendezvous/${rdv.id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (res.ok) {
        onDelete(rdv.id);
        setIsOpen(false);
      }
    } catch (err) {
      console.error('Erreur suppression:', err);
    }
  };

  const StatusIcon = statutConfig[rdv.statut]?.icon || Clock;

  return (
    <>
      <div className="rdv-dropdown">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rdv-dropdown-btn"
          aria-label="Menu actions"
        >
          <MoreVertical />
        </button>

        {isOpen && (
          <>
            <div className="rdv-dropdown-overlay" onClick={() => setIsOpen(false)} />
            <div className="rdv-dropdown-menu">

              {/* Statut */}
              <div className="rdv-dropdown-section">
                <span className="rdv-dropdown-section-title">Statut</span>
              </div>
              {Object.entries(statutConfig).map(([key, config]) => {
                const Icon = config.icon;
                const isCurrent = rdv.statut === key;
                return (
                  <button
                    key={key}
                    onClick={() => {
                      if (key === 'confirmed') {
                        setShowNoteModal(true);
                      } else {
                        handleStatusChange(key);
                      }
                    }}
                    disabled={isCurrent}
                    className={`rdv-dropdown-item ${isCurrent ? 'active' : ''}`}
                  >
                    <Icon size={14} />
                    {config.label}
                    {isCurrent && <span className="rdv-dropdown-checkmark">✓</span>}
                  </button>
                );
              })}

              <div className="rdv-dropdown-divider" />

              {/* Priorité */}
              <div className="rdv-dropdown-section">
                <span className="rdv-dropdown-section-title">Priorité</span>
              </div>
              {Object.entries(prioriteConfig).map(([key, config]) => (
                <button
                  key={key}
                  onClick={() => handlePriorityChange(key)}
                  className={`rdv-dropdown-item ${rdv.priorite === key ? 'active' : ''}`}
                >
                  <span className={`rdv-priority-dot ${config.dotClass}`} />
                  {config.label}
                </button>
              ))}

              <div className="rdv-dropdown-divider" />

              {/* Actions */}
              <button
                onClick={() => { setNote(rdv.note_admin || ''); setShowNoteModal(true); }}
                className="rdv-dropdown-item"
              >
                <Edit size={14} />
                Ajouter une note
              </button>

              {rdv.can_confirm && (
                <button
                  onClick={() => handleStatusChange('confirmed')}
                  className="rdv-dropdown-item success"
                >
                  <CheckCircle size={14} />
                  Confirmer le RDV
                </button>
              )}

              {rdv.can_cancel && (
                <button
                  onClick={() => handleStatusChange('cancelled')}
                  className="rdv-dropdown-item danger"
                >
                  <XCircle size={14} />
                  Annuler
                </button>
              )}

              <div className="rdv-dropdown-divider" />

              <button
                onClick={handleDelete}
                className="rdv-dropdown-item danger"
              >
                <Trash2 size={14} />
                Supprimer
              </button>
            </div>
          </>
        )}
      </div>

      {/* Modal note + confirmation */}
      {showNoteModal && (
        <div className="rdv-modal-overlay" onClick={() => setShowNoteModal(false)}>
          <div className="rdv-modal" onClick={e => e.stopPropagation()}>
            <div className="rdv-modal-header">
              <Calendar />
              <h3 className="rdv-modal-title">
                {rdv.statut === 'pending' ? 'Confirmer le rendez-vous' : 'Note interne'}
              </h3>
            </div>

            {/* Résumé RDV */}
            <div className="rdv-modal-summary">
              <p>📅 {rdv.rdv.date_complete} à {rdv.rdv.heure}</p>
              <p>👤 {rdv.visiteur.nom} • {lieuLabels[rdv.rdv.lieu] || rdv.rdv.lieu}</p>
            </div>

            <label className="rdv-modal-label">
              Note interne (visible uniquement par l'équipe)
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Ex: Préparer la salle B, vérifier les documents..."
              className="rdv-modal-textarea"
              rows={3}
            />

            {rdv.statut === 'pending' && (
              <label className="rdv-modal-checkbox">
                <input
                  type="checkbox"
                  checked={sendConfirmation}
                  onChange={(e) => setSendConfirmation(e.target.checked)}
                />
                Envoyer un email de confirmation à {rdv.visiteur.email}
              </label>
            )}

            <div className="rdv-modal-actions">
              <button
                onClick={() => setShowNoteModal(false)}
                className="rdv-modal-btn rdv-modal-btn-secondary"
              >
                Annuler
              </button>
              <button
                onClick={rdv.statut === 'pending' ? () => handleStatusChange('confirmed') : handleSaveNote}
                className="rdv-modal-btn rdv-modal-btn-primary"
              >
                {rdv.statut === 'pending' ? <><CheckCircle size={14} /> Confirmer</> : 'Enregistrer'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// 📅 Appointment Card Component
const RendezvousCard = ({ rdv, onUpdate, onDelete }) => {
  const statut = statutConfig[rdv.statut] || statutConfig.pending;
  const priorite = prioriteConfig[rdv.priorite] || prioriteConfig.normale;
  const StatusIcon = statut.icon;

  const cardBorderClass = rdv.is_pending ? 'pending' :
    rdv.is_today ? 'today' : 'default';

  return (
    <div className={`rdv-card ${cardBorderClass}`}>

      {/* Header avec dropdown */}
      <div className="rdv-card-header">
        <div className="rdv-card-badges">
          <span className={`rdv-badge ${statut.class}`}>
            <StatusIcon size={12} />
            {statut.label}
          </span>
          <span className={`rdv-badge-priority ${priorite.class}`}>
            <span className={`rdv-priority-dot ${priorite.dotClass}`} />
            {priorite.label}
          </span>
          {rdv.is_today && !rdv.is_confirmed && (
            <span className="rdv-badge-today">Aujourd'hui</span>
          )}
        </div>
        <RendezvousDropdown rdv={rdv} onUpdate={onUpdate} onDelete={onDelete} />
      </div>

      {/* Contenu */}
      <div className="rdv-card-content">

        {/* 📅 Date & Heure */}
        <div className="rdv-card-section">
          <div className="rdv-card-icon orange">
            <Calendar />
          </div>
          <div>
            <p className="rdv-card-date">{rdv.rdv.date_complete}</p>
            <p className="rdv-card-time">
              🕐 {rdv.rdv.heure} • {rdv.rdv.duree} min • {lieuLabels[rdv.rdv.lieu] || rdv.rdv.lieu}
            </p>
          </div>
        </div>

        {/* 👤 Visiteur */}
        <div>
          <h4 className="rdv-card-visitor-title">
            <User size={14} />
            Visiteur
          </h4>
          <div>
            <p className="rdv-card-visitor-name">{rdv.visiteur.nom}</p>
            <div className="rdv-card-contacts">
              <a href={`mailto:${rdv.visiteur.email}`} className="rdv-card-contact">
                <Mail size={12} />
                {rdv.visiteur.email}
              </a>
              <a href={`tel:${rdv.visiteur.telephone}`} className="rdv-card-contact">
                <Phone size={12} />
                {rdv.visiteur.telephone}
              </a>
            </div>
            {rdv.visiteur.invites?.length > 0 && (
              <p className="rdv-card-invites">
                <Users size={10} />
                {rdv.visiteur.invites.length} invité{rdv.visiteur.invites.length > 1 ? 's' : ''} supplémentaire{rdv.visiteur.invites.length > 1 ? 's' : ''}
              </p>
            )}
          </div>
        </div>

        {/* 💬 Message (si présent) */}
        {rdv.message && (
          <div className="rdv-card-message">
            <p className="rdv-card-message-text">
              <MessageSquare size={14} />
              {rdv.message}
            </p>
          </div>
        )}

        {/* 📝 Note admin (si présente) */}
        {rdv.note_admin && (
          <div className="rdv-card-note">
            <p className="rdv-card-note-text">
              <Edit size={14} />
              <span><strong>Note :</strong> {rdv.note_admin}</span>
            </p>
            {rdv.confirme_le && (
              <p className="rdv-card-note-confirmed">
                Confirmé le {rdv.confirme_le} {rdv.confirme_par && `par ${rdv.confirme_par}`}
              </p>
            )}
          </div>
        )}

        {/* 📊 Métadonnées */}
        <div className="rdv-card-meta">
          <span>Réservé le {rdv.created_at}</span>
          {rdv.source && (
            <span className="rdv-card-source">
              <Tag size={10} />
              {rdv.source}
            </span>
          )}
        </div>
      </div>

      {/* Badge "Nouveau" animé */}
      {rdv.is_pending && (
        <div className="rdv-card-new-badge">
          <span className="rdv-new-dot"></span>
        </div>
      )}
    </div>
  );
};

// 📋 Main Component
const RendezvousListe = ({
  rendezvous = [],
  pagination = {},
  availableFilters = {},
  isLoading = false,
  error = null,
  fetchRendezvous,
  updateRendezvousStatus,
  deleteRendezvous
}) => {
  // Keep local state for filters, currentPage, showAdvancedFilters, etc.
  const [filters, setFilters] = useState({
    statut: '',
    priorite: '',
    lieu: '',
    search: '',
    date_debut: '',
    date_fin: '',
    aujourdhui: false,
  });
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(12);
  const [sortBy, setSortBy] = useState('date_rdv');
  const [sortDir, setSortDir] = useState('asc');

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    setCurrentPage(1);
    // Le fetch sera déclenché automatiquement par useEffect
  };

  useEffect(() => {
    fetchRendezvous({ page: currentPage, perPage, sortBy, sortDir, ...filters });
  }, [fetchRendezvous, currentPage, perPage, sortBy, sortDir, filters]);

  const handleUpdate = (id, updates) => {
    updateRendezvousStatus(id, updates);
  };

  const handleDelete = (id) => {
    deleteRendezvous(id);
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortDir(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortDir('asc');
    }
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setFilters({ statut: '', priorite: '', lieu: '', search: '', date_debut: '', date_fin: '', aujourdhui: false });
    setCurrentPage(1);
  };

  const hasActiveFilters = Object.values(filters).some(v => v || v === true);

  return (
    <div className="rdv-container">
      {/* En-tête */}
      <div className="rdv-header">
        <h1>
          <a href="/admin" className="rdv-back-link">
            <ArrowLeft size={14} />
          </a>
          Gestion des rendez-vous</h1>
        <p>
          {pagination.total} rendez-vous • {pagination.pending_count} en attente • {pagination.today_count} aujourd'hui
        </p>
      </div>

      {/* Stats rapides */}
      <div className="rdv-stats">
        <div className="rdv-stat-card pending">
          <div className="rdv-stat-value">{pagination.pending_count || 0}</div>
          <div className="rdv-stat-label">En attente</div>
        </div>
        <div className="rdv-stat-card today">
          <div className="rdv-stat-value">{pagination.today_count || 0}</div>
          <div className="rdv-stat-label">Aujourd'hui</div>
        </div>
        <div className="rdv-stat-card confirmed">
          <div className="rdv-stat-value">
            {rendezvous.filter(r => r.is_confirmed).length}
          </div>
          <div className="rdv-stat-label">Confirmés</div>
        </div>
      </div>

      {/* Barre de filtres */}
      <div className="rdv-filters">
        <div className="rdv-filters-header">
          <h3><Filter size={14} /> Filtres</h3>
          <button
            className="rdv-btn-toggle"
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          >
            {showAdvancedFilters ? 'Masquer' : 'Afficher'} avancés
          </button>
        </div>

        <div className="rdv-filters-grid">
          {/* Recherche */}
          <div className="rdv-filter-group rdv-search-wrapper">
            <Search className="rdv-search-icon" />
            <input
              type="text"
              placeholder="Rechercher (nom, email, message)..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
            />
          </div>

          {/* Statut */}
          <div className="rdv-filter-group">
            <label>Statut</label>
            <select value={filters.statut} onChange={(e) => handleFilterChange('statut', e.target.value)}>
              <option value="">Tous</option>
              {availableFilters.statuts?.map(s => (
                <option key={s} value={s}>{statutConfig[s]?.label || s}</option>
              ))}
            </select>
          </div>

          {/* Priorité */}
          <div className="rdv-filter-group">
            <label>Priorité</label>
            <select value={filters.priorite} onChange={(e) => handleFilterChange('priorite', e.target.value)}>
              <option value="">Toutes</option>
              {availableFilters.priorites?.map(p => (
                <option key={p} value={p}>{prioriteConfig[p]?.label || p}</option>
              ))}
            </select>
          </div>

          {/* Lieu */}
          <div className="rdv-filter-group">
            <label>Lieu</label>
            <select value={filters.lieu} onChange={(e) => handleFilterChange('lieu', e.target.value)}>
              <option value="">Tous</option>
              {availableFilters.lieux?.map(l => (
                <option key={l} value={l}>{lieuLabels[l] || l}</option>
              ))}
            </select>
          </div>

          {/* Aujourd'hui */}
          <div className="rdv-filter-group">
            <label className="rdv-checkbox-label">
              <input
                type="checkbox"
                checked={filters.aujourdhui}
                onChange={(e) => handleFilterChange('aujourdhui', e.target.checked)}
              />
              Aujourd'hui uniquement
            </label>
          </div>

          {/* Dates (avancé) */}
          {showAdvancedFilters && (
            <>
              <div className="rdv-filter-group">
                <label>Du</label>
                <input type="date" value={filters.date_debut} onChange={(e) => handleFilterChange('date_debut', e.target.value)} />
              </div>
              <div className="rdv-filter-group">
                <label>Au</label>
                <input type="date" value={filters.date_fin} onChange={(e) => handleFilterChange('date_fin', e.target.value)} />
              </div>
            </>
          )}
        </div>

        {/* Tri & Actions */}
        <div className="rdv-filters-actions">
          <div className="rdv-sort-controls">
            <span className="text-xs text-gray-500">Trier par :</span>
            <button
              className={`rdv-sort-btn ${sortBy === 'date_rdv' ? 'active' : ''}`}
              onClick={() => handleSort('date_rdv')}
            >
              Date <ChevronLeft size={10} className={`rdv-sort-icon ${sortDir === 'asc' ? 'asc' : 'desc'}`} />
            </button>
            <button
              className={`rdv-sort-btn ${sortBy === 'priorite' ? 'active' : ''}`}
              onClick={() => handleSort('priorite')}
            >
              Priorité
            </button>
            <button
              className={`rdv-sort-btn ${sortBy === 'nom' ? 'active' : ''}`}
              onClick={() => handleSort('nom')}
            >
              Nom
            </button>
          </div>

          {hasActiveFilters && (
            <button onClick={clearFilters} className="rdv-btn-clear">
              Réinitialiser
            </button>
          )}
        </div>
      </div>

      {/* États */}
      {isLoading ? (
        <div className="rdv-state">
          <div className="rdv-loading-spinner" />
          <p>Chargement des rendez-vous...</p>
        </div>
      ) : error ? (
        <div className="rdv-state">
          <AlertCircle className="rdv-state-icon" />
          <p className="rdv-state-title rdv-state-error">{error}</p>
          <button onClick={() => fetchRendezvous({ page: currentPage, perPage, sortBy, sortDir, ...filters })} className="rdv-btn-primary">Réessayer</button>
        </div>
      ) : rendezvous.length === 0 ? (
        <div className="rdv-state">
          <Calendar className="rdv-state-icon" />
          <p className="rdv-state-title">Aucun rendez-vous trouvé</p>
          <p className="rdv-state-text">Essayez de modifier vos filtres</p>
          {hasActiveFilters && (
            <button onClick={clearFilters} className="rdv-btn-primary">Voir tous les rendez-vous</button>
          )}
        </div>
      ) : (
        <>
          {/* Grille de cartes */}
          <div className="rdv-grid">
            {rendezvous.map(rdv => (
              <RendezvousCard
                key={rdv.id}
                rdv={rdv}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            ))}
          </div>

          {/* Pagination */}
          {pagination.last_page > 1 && (
            <div className="rdv-pagination">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="rdv-pagination-btn"
              >
                <ArrowLeft size={16} />
                Précédent
              </button>
              <span className="rdv-pagination-info">
                Page {currentPage} sur {pagination.last_page}
              </span>
              <button
                onClick={() => setCurrentPage(p => Math.min(pagination.last_page, p + 1))}
                disabled={currentPage === pagination.last_page || !pagination.has_more}
                className="rdv-pagination-btn"
              >
                Suivant
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RendezvousListe;